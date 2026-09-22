/** Single place for the details that change when the project goes live. */
/**
 * The canonical origin. Set NEXT_PUBLIC_SITE_URL in Vercel once the custom
 * domain is attached; the fallback only matters for local builds.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://projectakshara.com";

export const SITE = {
  name: "Akshara",
  parent: "Alexandria",
  contactEmail: "nilabhamukherjee04@gmail.com",
  /** Jurisdiction for the Terms. Fill in once the project has a legal home. */
  jurisdiction: "",
  launch: "January 2027",
  /** Bump by hand when the text actually changes — never new Date(). */
  copyrightYear: 2026,
  lastUpdated: "22 August 2026",
  /**
   * Waitlist endpoint. Leave empty and the form falls back to a mailto link
   * rather than pretending to work.
   *
   * Formspree:  https://formspree.io/f/XXXXXXXX
   * Resend/API: /api/waitlist  (then add the route)
   * Buttondown: https://buttondown.email/api/emails/embed-subscribe/YOURNAME
   */
  waitlistEndpoint: "",
};
