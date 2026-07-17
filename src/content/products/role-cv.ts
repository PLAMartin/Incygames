import type { Product } from "../../types";

export const roleCv: Product = {
  id: "role-cv",
  slug: "role-cv",
  name: "Role CV",
  strapline: "Find the roles that fit, then apply with confidence.",
  summary:
    "A career tool that scores roles by personal fit, identifies skill gaps and helps people create tailored job applications.",
  category: "career",
  status: "available",
  featured: true,
  displayOrder: 2,

  altText: "Role CV logo",

  websiteUrl: "https://www.rolecv.com",
  ctaLabel: "Explore Role CV",

  problem:
    "Job seekers often apply broadly with a single generic CV, spending time on roles that are a poor fit and struggling to know which skills are actually holding them back.",
  solution:
    "Role CV scores roles against a person's real skills and experience, highlights the gaps that matter, and helps them put together applications tailored to each opportunity.",
  audience: [
    "Job seekers evaluating multiple roles",
    "People planning a career change",
  ],
  currentStage: "Available now at rolecv.com",

  themeKey: "role-cv",
  lastReviewed: "2026-07-17",
};
