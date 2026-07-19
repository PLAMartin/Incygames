import type { Product } from "../../types";

export const dailyView: Product = {
  slug: "daily-view",
  name: "Daily View",
  category: "Independent living",
  strapline: "A calm, clear view of today.",
  summary:
    "A calm daily display that helps older adults see what is happening today and what happens next.",
  audience: ["older adults", "families and carers"],

  stage: "seeking-pilot-users",
  stageLabel: "Seeking pilot users",
  stageDescription:
    "Live and demonstrable at dailyview.org, and now recruiting a small group of pilot users.",

  externalUrl: "https://www.dailyview.org",
  primaryCtaLabel: "Visit Daily View",
  secondaryCtaLabel: "Try the demonstration or ask about joining the pilot.",

  logoSrc: "/images/products/daily-view/icon.png",
  imageSrc: "/images/products/daily-view/daily-view-card.webp",
  imageAlt:
    "An older woman relaxing in an armchair at home, looking at a tablet on a stand showing the Daily View display: today's date and time, a short list of today's activities including lunch and a carer visit, and what happens next.",

  featured: true,
  featuredExperiment: true,

  problem:
    "Keeping track of the day can become confusing and stressful, particularly for older adults or people supporting a relative's independence. Paper calendars are easy to miss, and phone apps are often too complex for daily, glanceable use.",
  solution:
    "Daily View presents today's activities and what happens next in a simple, calm, easy-to-read display, designed to be understood at a glance rather than navigated like a typical app.",

  whatHasBeenBuilt:
    "A live website and demonstration of a calm daily display showing the date, time, today's activities and what happens next.",
  currentTest:
    "How much information is useful on a daily display before clarity becomes clutter?",
  nextStep:
    "Recruit a small group of pilot users in and around Bath and use their feedback to refine the display and family-management experience.",
};
