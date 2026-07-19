export const COOKIE_CONSENT_STORAGE_KEY = "incygames-cookie-consent";
export const COOKIE_CONSENT_CHANGE_EVENT = "incygames-cookie-consent-change";

export type CookieConsentValue = "accepted" | "rejected";

export function getStoredCookieConsent(): CookieConsentValue | null {
  const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function getServerCookieConsent(): CookieConsentValue | null {
  return null;
}

export function setStoredCookieConsent(value: CookieConsentValue): void {
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGE_EVENT));
}

export function resetStoredCookieConsent(): void {
  window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGE_EVENT));
}

export function subscribeToCookieConsent(callback: () => void): () => void {
  window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, callback);
  return () =>
    window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, callback);
}
