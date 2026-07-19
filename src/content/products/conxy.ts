import type { Product } from "../../types";

export const conxy: Product = {
  slug: "conxy",
  name: "Conxy",
  category: "Game",
  strapline: "Connect the dots, in as few moves as possible.",
  summary:
    "A connection-based puzzle game built around completing each challenge in as few moves as possible.",
  audience: ["casual puzzle players"],

  stage: "in-development",
  stageLabel: "In development",
  stageDescription: "An early playable concept, live at conxy.co.",

  externalUrl: "https://www.conxy.co",
  primaryCtaLabel: "Visit Conxy",

  imageAlt: "Conxy — a connection-based puzzle game",

  featured: true,

  problem:
    "Many puzzle games either demand a long time commitment or offer little sense of mastery once a level is solved.",
  solution:
    "Conxy is a simple connection-based puzzle game focused on completing each challenge in as few moves as possible, giving players a quick, satisfying sense of progress.",

  whatHasBeenBuilt:
    "An early connection-based puzzle concept focused on solving each challenge in as few moves as possible.",
  currentTest:
    "Whether the move-count mechanic creates enough challenge, replay value and satisfaction for short game sessions.",
  nextStep:
    "Develop a small set of playable levels and observe completion, replay and abandonment behaviour.",
};
