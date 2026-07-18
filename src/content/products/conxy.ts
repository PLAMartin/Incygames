import type { Product } from "../../types";

export const conxy: Product = {
  id: "conxy",
  slug: "conxy",
  name: "Conxy",
  strapline: "Connect the dots, in as few moves as possible.",
  summary:
    "A simple connection-based puzzle game built around completing challenges in as few moves as possible.",
  category: "game",
  status: "in-development",
  featured: true,
  displayOrder: 4,

  altText: "Conxy logo",

  websiteUrl: "https://www.conxy.co",
  ctaLabel: "Learn about Conxy",

  problem:
    "Many puzzle games either demand a long time commitment or offer little sense of mastery once a level is solved.",
  solution:
    "Conxy is a simple connection-based puzzle game focused on completing each challenge in as few moves as possible, giving players a quick, satisfying sense of progress.",
  audience: [
    "Casual puzzle game players",
    "People looking for a short, focused game break",
  ],
  currentStage: "In development — live at conxy.co",

  themeKey: "conxy",
  lastReviewed: "2026-07-17",
};
