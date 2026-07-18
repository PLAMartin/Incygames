import type { Product } from "../../types";

export const dailyProductIdea: Product = {
  id: "daily-product-idea",
  slug: "daily-product-idea",
  name: "Daily Product Idea",
  strapline: "Stop searching for an idea. Start building one.",
  summary:
    "A daily source of evaluated, practical product ideas for people who want to stop searching and start building.",
  category: "entrepreneurship",
  status: "in-development",
  featured: true,
  displayOrder: 3,

  altText: "Daily Product Idea logo",

  websiteUrl: "https://www.dailyproductidea.com",
  ctaLabel: "View today's product idea",

  problem:
    "Aspiring founders and builders often lose momentum searching endlessly for 'the' idea, without a reliable way to tell which ideas are actually worth pursuing.",
  solution:
    "Daily Product Idea delivers a new, evaluated and practical product idea each day, giving builders a steady starting point instead of an open-ended search.",
  audience: [
    "Aspiring founders looking for a starting point",
    "Indie builders wanting a steady stream of practical ideas",
  ],
  currentStage: "In development — live at dailyproductidea.com",

  themeKey: "daily-product-idea",
  lastReviewed: "2026-07-17",
};
