import { getStoredCookieConsent } from "@/lib/cookieConsent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventName =
  | "product_card_internal_click"
  | "product_external_click"
  | "newsletter_click"
  | "founder_profile_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error";

interface AnalyticsEventParams {
  product_name?: string;
  product_stage?: string;
  link_destination?: string;
  page_path?: string;
  enquiry_type?: string;
}

// Never sends anything before consent, and never carries message text, names
// or email addresses — only the safe parameters listed in tech spec section 17.
export function trackEvent(
  name: AnalyticsEventName,
  params?: AnalyticsEventParams,
): void {
  if (typeof window === "undefined") return;
  // An analytics call must never break the feature it's attached to (e.g.
  // if localStorage is unavailable), so consent checks fail closed here.
  try {
    if (getStoredCookieConsent() !== "accepted") return;
  } catch {
    return;
  }
  window.gtag?.("event", name, params);
}
