import type { Product } from "../../types";

export const dailyView: Product = {
  id: "daily-view",
  slug: "daily-view",
  name: "Daily View",
  strapline: "A calm, clear view of today.",
  summary:
    "A calm, clear daily display that helps older adults see today's activities and understand what happens next.",
  category: "independent-living",
  status: "available",
  featured: true,
  displayOrder: 1,

  altText: "Daily View logo",

  websiteUrl: "https://www.dailyview.org",
  ctaLabel: "Visit Daily View",

  problem:
    "Keeping track of the day can become confusing and stressful, particularly for older adults or people supporting a relative's independence. Paper calendars are easy to miss, and phone apps are often too complex for daily, glanceable use.",
  solution:
    "Daily View presents today's activities and what happens next in a simple, calm, easy-to-read display, designed to be understood at a glance rather than navigated like a typical app.",
  audience: [
    "Older adults living independently",
    "Family members and carers supporting them",
  ],
  currentStage: "Available now at dailyview.org",

  themeKey: "daily-view",
  lastReviewed: "2026-07-17",
};
