/**
 * Contact information utility for Alpha & Omega CBO Kenya.
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
 * Returns Alpha & Omega CBO Kenya contact details.
 *
 * Fields that have not been officially confirmed are set to `null` so the
 * Footer can gracefully fall back to a generic office-visit message.
 *
 * Update this single source of truth when contact details change.
 */
export function getContactInfo(): ContactInfo {
  // Address confirmed — operational base in Bangladesh Slums, Mombasa.
  const address = "Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya";

  // Phone number for Alpha & Omega CBO Kenya.
  const phone: string | null = "+254 740 610 899";

  // Email address for Alpha & Omega CBO Kenya.
  const email: string | null = "alphaandomegacbokenya001@gmail.com";

  const hasAny = address !== null || phone !== null || email !== null;

  return { address, phone, email, hasAny };
}
