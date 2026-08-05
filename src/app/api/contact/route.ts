import { NextResponse } from "next/server";
import { createContactFormSchema } from "@/lib/validation/contact";
import { company } from "@/lib/content/company";

export const runtime = "nodejs";

/**
 * Server-seitige Re-Validierung braucht keine lokalisierten Meldungen — der
 * Client validiert bereits sprachabhängig; diese Texte werden dem Nutzer
 * nicht angezeigt.
 */
const contactFormSchema = createContactFormSchema({
  name: "Invalid name.",
  email: "Invalid email address.",
  subject: "Invalid subject.",
  message: "Message too short.",
  privacy: "Privacy consent required.",
});

/**
 * Formularversand ist technisch vollständig vorbereitet, aber bewusst
 * deaktiviert, solange kein E-Mail-Provider konfiguriert ist (RESEND_API_KEY
 * / CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL). Es wird niemals eine
 * Erfolgsmeldung ohne tatsächlichen Versand ausgegeben — siehe README.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation_failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot — ausgefülltes verstecktes Feld deutet auf ein Bot-Formular hin.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || company.contact.email.display;

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      {
        ok: false,
        error: "not_configured",
        message:
          "Form submission is not configured yet. Please contact us directly by phone or email.",
      },
      { status: 503 },
    );
  }

  const {
    name,
    company: senderCompany,
    email,
    phone,
    subject,
    subjectLabel,
    vehicleInterest,
    preferredDate,
    message,
  } = parsed.data;

  const displaySubject = subjectLabel || subject;

  const lines = [
    `New website enquiry — ${displaySubject}`,
    "",
    `Name: ${name}`,
    senderCompany ? `Company: ${senderCompany}` : null,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    vehicleInterest ? `Vehicle of interest: ${vehicleInterest}` : null,
    preferredDate ? `Preferred date: ${preferredDate}` : null,
    "",
    "Message:",
    message,
  ].filter((line): line is string => line !== null);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Website enquiry: ${displaySubject}`,
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      console.error(`Contact mail provider responded with status ${response.status}`);
      return NextResponse.json(
        { ok: false, error: "provider_error" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    console.error("Contact mail dispatch failed");
    return NextResponse.json({ ok: false, error: "network_error" }, { status: 502 });
  }
}
