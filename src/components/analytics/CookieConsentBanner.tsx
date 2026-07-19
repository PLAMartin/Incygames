"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/Button";
import {
  getServerCookieConsent,
  getStoredCookieConsent,
  setStoredCookieConsent,
  subscribeToCookieConsent,
  type CookieConsentValue,
} from "@/lib/cookieConsent";

const GA_MEASUREMENT_ID = "G-HDZ3JKQSJV";

export function CookieConsentBanner() {
  const consent = useSyncExternalStore(
    subscribeToCookieConsent,
    getStoredCookieConsent,
    getServerCookieConsent,
  );

  function choose(value: CookieConsentValue) {
    setStoredCookieConsent(value);
  }

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <div
          role="region"
          aria-label="Cookie consent"
          className="border-border bg-background-primary fixed inset-x-0 bottom-0 z-50 border-t px-4 py-4 shadow-lg"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-text-secondary text-sm">
              We&rsquo;d like to use Google Analytics to understand how visitors
              use this site. It only sets cookies if you accept. See our{" "}
              <Link href="/cookies" className="text-accent hover:underline">
                cookie policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex shrink-0 gap-2">
              <Button variant="secondary" onClick={() => choose("rejected")}>
                Reject
              </Button>
              <Button variant="primary" onClick={() => choose("accepted")}>
                Accept
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
