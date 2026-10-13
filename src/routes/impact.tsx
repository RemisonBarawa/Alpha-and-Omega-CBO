import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ImpactMetric } from "@/components/site/ImpactMetric";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/images";
import type { VerificationStatus } from "@/components/site/ImpactMetric";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Alpha & Omega CBO Kenya's community impact: partnerships, milestones, and program outcomes from 2019 to 2025.",
      },
      { property: "og:title", content: "Impact | Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Alpha & Omega CBO Kenya's community milestones from 2019 to 2025.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Impact | Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Community milestones and program outcomes from Alpha & Omega CBO Kenya, 2019–2025.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: ImpactPage,
});

/**
 * Impact metrics — provable figures only.
 * All data drawn from partnership records and public sources.
 */
const stats: {
  to: number;
  label: string;
  source: string;
  status: VerificationStatus;
  suffix?: string;
}[] = [
  {
    to: 5,
    label: "Active programs",
    source: "Alpha & Omega CBO Kenya program register, 2025",
    status: "verified",
    suffix: "",
  },
  {
    to: 4,
    label: "Named partner organizations",
    source: "Partnership agreements and public records, 2019–2025",
    status: "documented",
    suffix: "",
  },
  {
    to: 2019,
    label: "Year operations began — recognized by HURIA Human Rights Lab",
    source: "HURIA Human Rights Lab public records, 2019",
    status: "verified",
    suffix: "",
  },
  {
    to: 1,
    label: "MoU signed — DARAJA Project with DAYOK",
    source: "DARAJA Project MoU documentation, 2025",
    status: "documented",
    suffix: "",
  },
];

/**
 * Outcome timeline — verified and documented milestones only.
 */
const outcomes: {
  figure: string;
  label: string;
  source: string;
  status: VerificationStatus;
}[] = [
  {
    figure: "2019",
    label: "HURIA Human Rights Lab mentee designation — rights-based framework established",
    source: "HURIA Human Rights Lab public records, 2019",
    status: "verified",
  },
  {
    figure: "2023",
    label: "Women's Empowerment program publicly featured; Pad Bank launched",
    source: "Alpha & Omega CBO Kenya program records, 2023",
    status: "documented",
  },
  {
    figure: "2025",
    label: "Community Hub role formalized via DARAJA Project MoU with DAYOK",
    source: "DARAJA Project MoU, 2025",
    status: "documented",
  },
];

const stories = [
  {
    initials: "GP",
    name: "Girl Child Program Participant",
    role: "Bangladesh Slums · Mikindani Ward",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
  },
  {
    initials: "WE",
    name: "Women's Empowerment Participant",
    role: "Mikindani Ward · 2023",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
  },
  {
    initials: "YV",
    name: "Youth Voice Participant",
    role: "Jomvu Sub-County · 2024",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
  },
];

/** Badge colour mapping reused for the outcome figures section */
const STATUS_PILL: Record<VerificationStatus, string> = {
  verified:   "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  documented: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  reported:   "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  estimated:  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
};

const STATUS_LABEL: Record<VerificationStatus, string | null> = {
  verified:   null,
  documented: "Documented",
  reported:   "Reported",
  estimated:  "Estimated",
};

function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Community milestones from 2019 to 2025"
        body="Alpha & Omega CBO Kenya tracks its progress through verified partnerships and documented milestones. Figures shown are drawn from partnership records and public sources; where independent verification is unavailable, cautious language is used."
        image={IMG.students}
        stats={[
          ["5",    "Active programs"],
          ["4",    "Named partner organizations"],
          ["2019", "Year operations began"],
        ]}
      />

      {/* ── Primary stats grid ── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs text-muted-foreground/70 italic">
              ✱ Figures are sourced from Alpha &amp; Omega CBO Kenya program records and public partnership documentation unless otherwise noted.
              Badges indicate data provenance: <strong>Documented</strong> = on-file records;
              <strong> Reported</strong> = self-reported, unaudited;
              <strong> Estimated</strong> = approximate, based on field observations.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 100}
                className="card-lift pattern-card rounded-3xl border border-border bg-card p-6 sm:p-7"
              >
                <ImpactMetric
                  to={s.to}
                  label={s.label}
                  source={s.source}
                  status={s.status}
                  suffix={s.suffix !== undefined ? s.suffix : "+"}
                />
              </Reveal>
            ))}
          </div>

          {/* ── Outcome timeline ── */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {outcomes.map((o, i) => (
              <Reveal
                key={o.figure}
                delay={i * 110}
                className="pattern-card card-lift rounded-3xl border border-border bg-secondary p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-display text-3xl font-bold">{o.figure}</p>
                  {STATUS_LABEL[o.status] && (
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.6rem] font-semibold tracking-wide uppercase ${STATUS_PILL[o.status]}`}
                    >
                      {STATUS_LABEL[o.status]}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
                <p className="mt-1.5 text-[0.68rem] leading-snug text-muted-foreground/70 italic">
                  Source: {o.source}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voices ── */}
      <section className="section bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="eyebrow text-azure">Voices</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Stories behind the numbers</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 120}
                className="card-lift rounded-3xl border border-white/12 bg-white/5 p-7"
              >
                <p className="text-sm leading-relaxed text-white">"{s.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-azure/20 text-sm font-bold text-azure">
                    {s.initials}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-white">{s.name}</span>
                    <span className="text-white/60">{s.role}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Support"
        title="Support community empowerment in Mombasa"
        body="Partners, funders, and volunteers make our work possible. We're always looking to grow our reach."
        primary={{ to: "/contact", label: "Get involved" }}
        secondary={{ to: "/about", label: "Our story" }}
      />
    </>
  );
}
