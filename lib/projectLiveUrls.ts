const LIVE_URLS: Record<string, string | undefined> = {
  "jupiter-hr": process.env.NEXT_PUBLIC_LIVE_URL_JUPITER_HR,
  brandmarket: process.env.NEXT_PUBLIC_LIVE_URL_BRANDMARKET,
  "qadam-loyalty": process.env.NEXT_PUBLIC_LIVE_URL_QADAM_LOYALTY,
};

/** Returns a live demo URL for the project slug, or undefined if not configured. */
export function getProjectLiveUrl(slug: string): string | undefined {
  const url = LIVE_URLS[slug]?.trim();
  return url || undefined;
}
