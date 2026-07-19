"use client";

import { resetStoredCookieConsent } from "@/lib/cookieConsent";

export function ManageCookiesLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={resetStoredCookieConsent}
      className={className}
    >
      Manage cookie preferences
    </button>
  );
}
