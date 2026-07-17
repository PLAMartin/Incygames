import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StructuredData } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({
  title: "Incygames | Simple, useful software",
  description:
    "Incygames develops simple, useful and fun software for real-world problems, including Daily View, Role CV, Daily Product Idea and Conxy.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} h-full antialiased`}>
      <body className="bg-background-primary text-text-primary flex min-h-full flex-col">
        <StructuredData />
        <a
          href="#main-content"
          className="focus-visible:bg-accent sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-2 focus-visible:left-2 focus-visible:z-50 focus-visible:rounded-md focus-visible:px-4 focus-visible:py-2 focus-visible:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
