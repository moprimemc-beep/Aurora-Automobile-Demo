import { z } from "zod";

export const contactSubjects = [
  "Fahrzeuganfrage",
  "Probefahrt",
  "Finanzierung & Leasing",
  "Ankauf & Inzahlungnahme",
  "Werkstatt & Service",
  "Sonstiges",
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein."),
  company: z.string().trim().optional().or(z.literal("")),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: z.string().trim().optional().or(z.literal("")),
  subject: z.enum(contactSubjects, {
    required_error: "Bitte wählen Sie ein Anliegen aus.",
    invalid_type_error: "Bitte wählen Sie ein Anliegen aus.",
  }),
  vehicleInterest: z.string().trim().optional().or(z.literal("")),
  preferredDate: z.string().trim().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Ihre Nachricht sollte mindestens 10 Zeichen enthalten."),
  privacyConsent: z.boolean().refine((value) => value === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu.",
  }),
  /** Honeypot — für Menschen unsichtbar, muss leer bleiben. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
