export type ProductStage =
  | "live-beta"
  | "seeking-pilot-users"
  | "prototype"
  | "early-development"
  | "in-development"
  | "paused";

export interface Product {
  slug: string;
  name: string;
  category: string;
  summary: string;
  strapline: string;
  audience: string[];
  stage: ProductStage;
  stageLabel: string;
  stageDescription: string;
  externalUrl: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  logoSrc?: string;
  imageSrc?: string;
  imageAlt: string;
  imageFocalPoint?: string;
  featured: boolean;
  featuredExperiment?: boolean;
  problem: string;
  solution: string;
  whatHasBeenBuilt?: string;
  currentTest?: string;
  nextStep?: string;
}

export const PRODUCT_STAGE_LABELS: Record<ProductStage, string> = {
  "live-beta": "Live beta",
  "seeking-pilot-users": "Seeking pilot users",
  prototype: "Prototype",
  "early-development": "Early development",
  "in-development": "In development",
  paused: "Paused",
};
