"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { TextField, TextareaField, SelectField, CheckboxField } from "@/components/forms/fields";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { contactFormSchema, contactSubjects, type ContactFormValues } from "@/lib/validation/contact";
import { company } from "@/lib/content/company";

type SubmitState = "idle" | "submitting" | "success" | "not_configured" | "error";

export function ContactForm({
  variant = "general",
}: {
  variant?: "general" | "probefahrt";
}) {
  const [state, setState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: variant === "probefahrt" ? "Probefahrt" : undefined,
      privacyConsent: false,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setState("success");
        reset();
        return;
      }

      if (response.status === 503) {
        setState("not_configured");
        return;
      }

      setState("error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border-line-500 flex flex-col items-start gap-4 rounded-lg border p-8">
        <CheckCircle2 className="text-accent-500 h-8 w-8" aria-hidden="true" />
        <div>
          <h3 className="text-ink-50 text-lg font-medium">Ihre Anfrage wurde gesendet.</h3>
          <p className="text-ink-400 mt-2 text-sm leading-relaxed">
            Vielen Dank — unser Team meldet sich zeitnah bei Ihnen zurück.
          </p>
        </div>
      </div>
    );
  }

  if (state === "not_configured") {
    return (
      <div className="border-line-500 flex flex-col items-start gap-4 rounded-lg border p-8">
        <AlertCircle className="text-accent-500 h-8 w-8" aria-hidden="true" />
        <div>
          <h3 className="text-ink-50 text-lg font-medium">
            Formularversand derzeit nicht verfügbar
          </h3>
          <p className="text-ink-400 mt-2 max-w-md text-sm leading-relaxed">
            Der direkte Versand über dieses Formular ist aktuell nicht aktiv. Bitte kontaktieren
            Sie uns in der Zwischenzeit telefonisch oder per E-Mail — wir melden uns umgehend.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href={company.contact.phone.href} className="text-accent-400 hover:underline">
              {company.contact.phone.display}
            </a>
            <a href={company.contact.email.href} className="text-accent-400 hover:underline">
              {company.contact.email.display}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Honeypot — für Menschen unsichtbar */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField label="Name" autoComplete="name" error={errors.name?.message} {...register("name")} />
        <TextField
          label="Unternehmen"
          optional
          autoComplete="organization"
          error={errors.company?.message}
          {...register("company")}
        />
        <TextField
          label="E-Mail"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <TextField
          label="Telefon"
          type="tel"
          optional
          autoComplete="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <SelectField
        label="Anliegen"
        placeholder="Bitte wählen"
        options={contactSubjects}
        error={errors.subject?.message}
        {...register("subject")}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Gewünschtes Fahrzeug"
          optional
          placeholder="z. B. Marke, Modell"
          error={errors.vehicleInterest?.message}
          {...register("vehicleInterest")}
        />
        <TextField
          label="Wunschtermin"
          optional
          type="date"
          error={errors.preferredDate?.message}
          {...register("preferredDate")}
        />
      </div>

      <TextareaField
        label="Nachricht"
        error={errors.message?.message}
        placeholder={
          variant === "probefahrt"
            ? "Für welches Fahrzeug möchten Sie eine Probefahrt vereinbaren?"
            : "Wie können wir Ihnen helfen?"
        }
        {...register("message")}
      />

      <CheckboxField
        label={
          <>
            Ich stimme der Verarbeitung meiner Angaben gemäß{" "}
            <TextLink href="/datenschutz" showArrow={false} className="inline">
              Datenschutzerklärung
            </TextLink>{" "}
            zu.
          </>
        }
        error={errors.privacyConsent?.message}
        {...register("privacyConsent")}
      />

      {state === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Beim Versand ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren
          Sie uns direkt unter {company.contact.phone.display}.
        </p>
      )}

      <Button type="submit" disabled={state === "submitting"} className="self-start">
        {state === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
      </Button>
    </form>
  );
}
