import type { NextConfig } from "next";

// script-src allows 'unsafe-inline' because Next.js App Router injects its
// own inline RSC hydration/flight-data scripts on every page (including
// statically generated ones), whose content varies per build and can't be
// pre-hashed. Nonces would solve this correctly, but nonces are per-request
// and therefore incompatible with the static generation this site relies on
// (Homepage, /products, product pages, /about and legal pages are all
// statically prerendered per the tech spec). The JSON-LD <script> tags this
// app renders (see src/components/seo/StructuredData.tsx) are fully
// build-time static and contain no user input, so this is a low-risk
// trade-off rather than a general script-injection hole.
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self' data:",
      "connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
