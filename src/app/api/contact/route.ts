import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { company } from "@/lib/content/company";

export const runtime = "nodejs";

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
          "Der Formularversand ist noch nicht konfiguriert. Bitte kontaktieren Sie uns direkt telefonisch oder per E-Mail.",
      },
      { status: 503 },
    );
  }

  const { name, company: senderCompany, email, phone, subject, vehicleInterest, preferredDate, message } =
    parsed.data;

  const lines = [
    `Neue Anfrage über die Website — ${subject}`,
    "",
    `Name: ${name}`,
    senderCompany ? `Unternehmen: ${senderCompany}` : null,
    `E-Mail: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    vehicleInterest ? `Gewünschtes Fahrzeug: ${vehicleInterest}` : null,
    preferredDate ? `Wunschtermin: ${preferredDate}` : null,
    "",
    "Nachricht:",
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
        subject: `Website-Anfrage: ${subject}`,
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
