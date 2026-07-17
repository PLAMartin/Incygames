import type { Metadata } from "next";

export const SITE_URL = "https://incygames.com";
export const SITE_NAME = "Incygames";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImagePath,
}: BuildMetadataOptions): Metadata {
  const canonical = new URL(path, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: ogImagePath ? [{ url: ogImagePath }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImagePath ? [ogImagePath] : undefined,
    },
  };
}

export function pageTitle(title: string): string {
  return `${title} | ${SITE_NAME}`;
}
