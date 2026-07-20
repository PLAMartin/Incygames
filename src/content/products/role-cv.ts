import type { Product } from "../../types";

export const roleCv: Product = {
  slug: "role-cv",
  name: "Role CV",
  category: "Career",
  strapline: "Find the roles that fit, then apply with confidence.",
  summary:
    "A career tool that assesses how well a role fits a person's experience and helps create a more relevant application.",
  audience: ["job seekers", "career changers"],

  stage: "live-beta",
  stageLabel: "Live beta",
  stageDescription:
    "Live now at rolecv.com, in beta while it's tested with real applications.",

  externalUrl: "https://www.rolecv.com",
  primaryCtaLabel: "Try Role CV",
  secondaryCtaLabel: "Try the beta and share feedback.",

  logoSrc: "/images/products/role-cv/icon.png",
  imageSrc: "/images/products/role-cv/role-cv-card.webp",
  imageAlt:
    "A candidate CV card being matched against a Role Match card showing role requirements and a 92% Good Fit score, under the Role CV logo and the tagline 'Better job matching, built around the role.'",

  featured: true,
  featuredExperiment: true,

  problem:
    "Job seekers often apply broadly with a single generic CV, spending time on roles that are a poor fit and struggling to know which skills are actually holding them back.",
  solution:
    "Role CV scores roles against a person's real skills and experience, highlights the gaps that matter, and helps them put together applications tailored to each opportunity.",

  whatHasBeenBuilt:
    "A live beta that helps a user assess a role against their experience, identify relevant gaps and prepare a more tailored application.",
  currentTest:
    "Can a role-first assessment help people focus their effort on better-fitting opportunities?",
  nextStep:
    "Observe how people use the assessment, improve the clarity of recommendations and test willingness to return for additional roles.",
};
