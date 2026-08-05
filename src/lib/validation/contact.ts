import { z } from "zod";

export const contactSubjectKeys = [
  "vehicle_inquiry",
  "test_drive",
  "financing_leasing",
  "buyback_tradein",
  "workshop_service",
  "other",
] as const;

export type ContactSubjectKey = (typeof contactSubjectKeys)[number];

export type ContactFormMessages = {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy: string;
};

export function createContactFormSchema(messages: ContactFormMessages) {
  return z.object({
    name: z.string().trim().min(2, messages.name),
    company: z.string().trim().optional().or(z.literal("")),
    email: z.string().trim().email(messages.email),
    phone: z.string().trim().optional().or(z.literal("")),
    subject: z.enum(contactSubjectKeys, {
      required_error: messages.subject,
      invalid_type_error: messages.subject,
    }),
    /** Für die E-Mail lesbarer Klartext, clientseitig aus der aktiven Sprache erzeugt. */
    subjectLabel: z.string().optional(),
    vehicleInterest: z.string().trim().optional().or(z.literal("")),
    preferredDate: z.string().trim().optional().or(z.literal("")),
    message: z.string().trim().min(10, messages.message),
    privacyConsent: z.boolean().refine((value) => value === true, {
      message: messages.privacy,
    }),
    /** Honeypot — für Menschen unsichtbar, muss leer bleiben. */
    website: z.string().max(0).optional().or(z.literal("")),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;
