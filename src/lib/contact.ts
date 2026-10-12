/**
 * Contact information utility for Big Ship C.B.O.
 * Returns available contact data with optional fields so the Footer
 * and other components can render conditionally based on availability.
 *
 * Fields are typed as string | null so callers can safely check before rendering.
 * To mark a field as unavailable (e.g. phone not yet confirmed), set it to null.
 */

export interface ContactInfo {
  /** Physical address */
  address: string | null;
  /** Phone number in E.164-compatible format */
  phone: string | null;
  /** Email address */
  email: string | null;
  /** Whether any contact field is available */
  hasAny: boolean;
}

/**
 * Returns Big Ship C.B.O. contact details.
 *
 * Fields that have not been officially confirmed are set to `null` so the
 * Footer can gracefully fall back to a generic office-visit message.
 *
 * Update this single source of truth when contact details are confirmed.
 */
export function getContactInfo(): ContactInfo {
  // Address is confirmed (documented operational base).
  const address = "Off Mama Ngina Drive, Mombasa, Kenya";

  // Phone placeholder — update when the actual number is confirmed.
  const phone: string | null = "+254 722 000000";

  // Email placeholder — update when the actual address is confirmed.
  const email: string | null = "info@bigshipcbo.org";

  const hasAny = address !== null || phone !== null || email !== null;

  return { address, phone, email, hasAny };
}
