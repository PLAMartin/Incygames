import type { Product } from "../../types";

export const dailyProductIdea: Product = {
  slug: "daily-product-idea",
  name: "Daily Product Idea",
  category: "Entrepreneurship",
  strapline: "Stop searching for an idea. Start building one.",
  summary:
    "A daily source of evaluated product ideas for people who want to spend less time searching and more time building.",
  audience: ["aspiring founders", "independent builders"],

  stage: "early-development",
  stageLabel: "Early development",
  stageDescription:
    "An early product concept and website, live at dailyproductidea.com.",

  externalUrl: "https://www.dailyproductidea.com",
  primaryCtaLabel: "Visit Daily Product Idea",

  imageAlt: "Daily Product Idea — a daily evaluated product idea",

  featured: true,

  problem:
    "Aspiring founders and builders often lose momentum searching endlessly for 'the' idea, without a reliable way to tell which ideas are actually worth pursuing.",
  solution:
    "Daily Product Idea delivers a new, evaluated and practical product idea each day, giving builders a steady starting point instead of an open-ended search.",

  whatHasBeenBuilt:
    "An early product concept and website centred on presenting one evaluated, practical product idea each day.",
  currentTest:
    "Whether aspiring founders value a curated starting point more than an unrestricted stream of ideas.",
  nextStep:
    "Refine the evaluation framework and test which information makes an idea feel credible and actionable.",
};
