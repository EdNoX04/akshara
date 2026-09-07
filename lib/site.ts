/**
 * Single place for the details that change when the project goes live.
 *
 * ⚠ BEFORE LAUNCH: CONTACT_EMAIL is a placeholder. Point it at a real
 * inbox you actually read, or the corrections promise on this site is
 * a claim we cannot keep.
 */
export const SITE = {
  name: "Akshara",
  parent: "Alexandria",
  contactEmail: "hello@akshara.study", // TODO: replace before launch
  /** Jurisdiction for the Terms. Fill in once the project has a legal home. */
  jurisdiction: "",
  launch: "January 2027",
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
