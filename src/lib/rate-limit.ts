// Best-effort per-instance rate limiter. This is not distributed — on
// serverless deployments with multiple concurrent instances it limits each
// instance independently rather than globally. Adequate for this site's
// traffic without adding a Redis/KV dependency; documented as a known
// limitation rather than a robust production limiter.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_REQUESTS;
}
