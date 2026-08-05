"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { TextField, TextareaField, SelectField, CheckboxField } from "@/components/forms/fields";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import {
  createContactFormSchema,
  contactSubjectKeys,
  type ContactFormValues,
  type ContactSubjectKey,
} from "@/lib/validation/contact";
import { company } from "@/lib/content/company";

type SubmitState = "idle" | "submitting" | "success" | "not_configured" | "error";

export function ContactForm({
  variant = "general",
}: {
  variant?: "general" | "probefahrt";
}) {
  const t = useTranslations("form");
  const [state, setState] = useState<SubmitState>("idle");

  const schema = useMemo(
    () =>
      createContactFormSchema({
        name: t("validationName"),
        email: t("validationEmail"),
        subject: t("validationSubject"),
        message: t("validationMessage"),
        privacy: t("validationPrivacy"),
      }),
    [t],
  );

  const subjectOptions = useMemo(
    () =>
      contactSubjectKeys.map((key) => ({
        value: key,
        label: t(`subject_${key}` as `subject_${ContactSubjectKey}`),
      })),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      subject: variant === "probefahrt" ? "test_drive" : undefined,
      privacyConsent: false,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setState("submitting");
    try {
      const subjectLabel = t(`subject_${values.subject}` as `subject_${ContactSubjectKey}`);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, subjectLabel }),
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
          <h3 className="text-ink-50 text-lg font-medium">{t("successTitle")}</h3>
          <p className="text-ink-400 mt-2 text-sm leading-relaxed">{t("successText")}</p>
        </div>
      </div>
    );
  }

  if (state === "not_configured") {
    return (
      <div className="border-line-500 flex flex-col items-start gap-4 rounded-lg border p-8">
        <AlertCircle className="text-accent-500 h-8 w-8" aria-hidden="true" />
        <div>
          <h3 className="text-ink-50 text-lg font-medium">{t("notConfiguredTitle")}</h3>
          <p className="text-ink-400 mt-2 max-w-md text-sm leading-relaxed">
            {t("notConfiguredText")}
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative flex flex-col gap-6">
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
        <TextField
          label={t("nameLabel")}
          autoComplete="name"
          error={errors.name?.message}
          {...register("name")}
        />
        <TextField
          label={t("companyLabel")}
          optional
          autoComplete="organization"
          error={errors.company?.message}
          {...register("company")}
        />
        <TextField
          label={t("emailLabel")}
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <TextField
          label={t("phoneLabel")}
          type="tel"
          optional
          autoComplete="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <SelectField
        label={t("subjectLabel")}
        placeholder={t("subjectPlaceholder")}
        options={subjectOptions.map((o) => o.value)}
        optionLabels={Object.fromEntries(subjectOptions.map((o) => [o.value, o.label]))}
        error={errors.subject?.message}
        {...register("subject")}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label={t("vehicleInterestLabel")}
          optional
          placeholder={t("vehicleInterestPlaceholder")}
          error={errors.vehicleInterest?.message}
          {...register("vehicleInterest")}
        />
        <TextField
          label={t("preferredDateLabel")}
          optional
          type="date"
          error={errors.preferredDate?.message}
          {...register("preferredDate")}
        />
      </div>

      <TextareaField
        label={t("messageLabel")}
        error={errors.message?.message}
        placeholder={
          variant === "probefahrt" ? t("messagePlaceholderTestDrive") : t("messagePlaceholderGeneral")
        }
        {...register("message")}
      />

      <CheckboxField
        label={
          <>
            {t("privacyPrefix")}{" "}
            <TextLink href="/datenschutz" showArrow={false} className="inline">
              {t("privacyLinkText")}
            </TextLink>{" "}
            {t("privacySuffix")}
          </>
        }
        error={errors.privacyConsent?.message}
        {...register("privacyConsent")}
      />

      {state === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {t("errorText", { phone: company.contact.phone.display })}
        </p>
      )}

      <Button type="submit" disabled={state === "submitting"} className="self-start">
        {state === "submitting" ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
