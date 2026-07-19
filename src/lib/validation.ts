import { z } from "zod";

const PRODUCT_STAGES = [
  "live-beta",
  "seeking-pilot-users",
  "prototype",
  "early-development",
  "in-development",
  "paused",
] as const;

export const productSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "slug must be kebab-case"),
  name: z.string().min(1),
  category: z.string().min(1),
  summary: z.string().min(1),
  strapline: z.string().min(1),
  audience: z.array(z.string().min(1)).min(1),
  stage: z.enum(PRODUCT_STAGES),
  stageLabel: z.string().min(1),
  stageDescription: z.string().min(1),
  externalUrl: z.url(),
  primaryCtaLabel: z.string().min(1),
  secondaryCtaLabel: z.string().min(1).optional(),

  logoSrc: z.string().min(1).optional(),
  imageSrc: z.string().min(1).optional(),
  imageAlt: z.string().min(1),
  imageFocalPoint: z.string().min(1).optional(),

  featured: z.boolean(),
  featuredExperiment: z.boolean().optional(),

  problem: z.string().min(1),
  solution: z.string().min(1),
  whatHasBeenBuilt: z.string().min(1).optional(),
  currentTest: z.string().min(1).optional(),
  nextStep: z.string().min(1).optional(),
});

export type ValidatedProduct = z.infer<typeof productSchema>;

const CONTACT_ENQUIRY_TYPES = [
  "General enquiry",
  "Product feedback",
  "Partnership",
  "Press or media",
  "Supplier enquiry",
  "Other",
] as const;

const CONTACT_RELATED_PRODUCTS = [
  "Incygames",
  "Daily View",
  "Daily Product Idea",
  "Role CV",
  "Conxy",
  "Other",
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email(),
  enquiryType: z.enum(CONTACT_ENQUIRY_TYPES),
  message: z.string().trim().min(20).max(5000),
  privacyAcknowledged: z.literal(true, {
    error: "Please acknowledge the privacy policy to continue.",
  }),
  company: z.string().trim().max(200).optional(),
  relatedProduct: z.enum(CONTACT_RELATED_PRODUCTS).optional(),
  // Honeypot field: must stay empty. Bots that fill every field trip this.
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export { CONTACT_ENQUIRY_TYPES, CONTACT_RELATED_PRODUCTS };
