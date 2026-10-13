/**
 * ImpactMetric component
 *
 * Displays a single impact metric with:
 *  - animated counter (via the existing Counter component)
 *  - optional source attribution rendered as small muted text below the label
 *  - optional visual badge for unverified / cautious claims
 *
 * Requirements: 4.2, 4.3, 4.4, 4.6
 */

import { cn } from "@/lib/utils";
import { Counter } from "@/components/site/Reveal";

export type VerificationStatus =
  | "verified"       // Formally verified / documented
  | "reported"       // Self-reported by org – use "reported" language
  | "estimated"      // Rough/proxy figure – use "estimated" language
  | "documented";    // Documented in field notes / partner reports

interface ImpactMetricProps {
  /** Numeric value to count up to */
  to: number;
  /** Short label describing the metric (e.g. "Mangrove seedlings planted") */
  label: string;
  /** Optional source attribution text shown beneath the label */
  source?: string;
  /**
   * Verification status of the metric.
   * Drives cautious-language badge and aria label.
   * Defaults to "verified" (no badge rendered).
   */
  status?: VerificationStatus;
  /** Suffix appended to the counter, default "+" */
  suffix?: string;
  /** Extra className forwarded to the outer wrapper */
  className?: string;
  /** Text color class for the counter number. Defaults to text-primary */
  counterClassName?: string;
}

const STATUS_BADGE: Record<Exclude<VerificationStatus, "verified">, string> = {
  reported:   "Reported",
  estimated:  "Estimated",
  documented: "Documented",
};

const STATUS_COLOR: Record<Exclude<VerificationStatus, "verified">, string> = {
  reported:   "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  estimated:  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  documented: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
};

/**
 * Render a single metric card – animation and styling are inherited from
 * the parent Reveal wrapper, keeping this component pure / presentational.
 */
export function ImpactMetric({
  to,
  label,
  source,
  status = "verified",
  suffix = "+",
  className,
  counterClassName,
}: ImpactMetricProps) {
  const isUnverified = status !== "verified";
  const badgeLabel = isUnverified ? STATUS_BADGE[status] : null;
  const badgeColor = isUnverified ? STATUS_COLOR[status] : null;

  return (
    <div className={cn("flex flex-col", className)}>
      {/* Animated counter */}
      <p
        className={cn(
          "font-display text-4xl font-bold text-primary",
          counterClassName,
        )}
        aria-label={`${to.toLocaleString()}${suffix} ${label}${isUnverified ? ` (${STATUS_BADGE[status as Exclude<VerificationStatus, "verified">]})` : ""}`}
      >
        <Counter to={to} suffix={suffix} />
      </p>

      {/* Label row with optional badge */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <p className="text-sm text-white leading-snug">{label}</p>
        {badgeLabel && badgeColor && (
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-[0.6rem] font-semibold tracking-wide uppercase",
              badgeColor,
            )}
            aria-label={`Data status: ${badgeLabel}`}
          >
            {badgeLabel}
          </span>
        )}
      </div>

      {/* Source attribution */}
      {source && (
        <p className="mt-1.5 text-[0.68rem] leading-snug text-white/70 italic">
          Source: {source}
        </p>
      )}
    </div>
  );
}
