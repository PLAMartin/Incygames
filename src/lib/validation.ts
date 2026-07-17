import { z } from "zod";

const PRODUCT_STATUSES = [
  "available",
  "beta",
  "waitlist",
  "prototype",
  "in-development",
  "experiment",
  "paused",
  "retired",
] as const;

const PRODUCT_CATEGORIES = [
  "independent-living",
  "career",
  "productivity",
  "entrepreneurship",
  "game",
  "other",
] as const;

export const productSchema = z.object({
  id: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "slug must be kebab-case"),
  name: z.string().min(1),
  strapline: z.string().min(1),
  summary: z.string().min(1),
  category: z.enum(PRODUCT_CATEGORIES),
  status: z.enum(PRODUCT_STATUSES),
  featured: z.boolean(),
  displayOrder: z.number().int().nonnegative(),

  logoPath: z.string().min(1).optional(),
  heroImagePath: z.string().min(1).optional(),
  cardImagePath: z.string().min(1).optional(),
  altText: z.string().min(1),

  websiteUrl: z.url().optional(),
  ctaLabel: z.string().min(1).optional(),

  problem: z.string().min(1),
  solution: z.string().min(1),
  audience: z.array(z.string().min(1)).min(1),
  currentStage: z.string().min(1),

  themeKey: z.string().min(1).optional(),
  launchedYear: z.number().int().optional(),
  lastReviewed: z.iso.date(),
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
