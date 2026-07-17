export type ProductStatus =
  | "available"
  | "beta"
  | "waitlist"
  | "prototype"
  | "in-development"
  | "experiment"
  | "paused"
  | "retired";

export type ProductCategory =
  | "independent-living"
  | "career"
  | "productivity"
  | "entrepreneurship"
  | "game"
  | "other";

export interface Product {
  id: string;
  slug: string;
  name: string;
  strapline: string;
  summary: string;
  category: ProductCategory;
  status: ProductStatus;
  featured: boolean;
  displayOrder: number;

  logoPath?: string;
  heroImagePath?: string;
  cardImagePath?: string;
  altText: string;

  websiteUrl?: string;
  ctaLabel?: string;

  problem: string;
  solution: string;
  audience: string[];
  currentStage: string;

  themeKey?: string;
  launchedYear?: number;
  lastReviewed: string;
}

export const PRODUCT_STATUS_LABELS: Record<ProductStatus, string> = {
  available: "Available",
  beta: "Beta",
  waitlist: "Join the waitlist",
  prototype: "Prototype",
  "in-development": "In development",
  experiment: "Experiment",
  paused: "Paused",
  retired: "Previous product",
};

export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  "independent-living": "Independent living",
  career: "Career",
  productivity: "Productivity",
  entrepreneurship: "Entrepreneurship",
  game: "Game",
  other: "Other",
};
