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
      { title: "Impact | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Measurable environmental impact: Big Ship C.B.O.'s mangrove restoration, waste recovery, and community engagement outcomes since 2018.",
      },
      { property: "og:title", content: "Impact | Big Ship C.B.O." },
      {
        property: "og:description",
        content: "Big Ship C.B.O.'s community-led conservation outcomes and ecosystem restoration in coastal Mombasa.",
      },
      { property: "og:image", content: "/Big%20Ship%20Logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Impact | Big Ship C.B.O." },
      {
        name: "twitter:description",
        content: "Community-led conservation outcomes and ecosystem restoration in coastal Mombasa.",
      },
      { name: "twitter:image", content: "/Big%20Ship%20Logo.jpg" },
    ],
  }),
  component: ImpactPage,
});

/**
 * Impact metrics with explicit verification status and source attribution.
 * Requirements 4.1–4.7: cautious language, source attribution, conservative figures.
 */
const stats: {
  to: number;
  label: string;
  source: string;
  status: VerificationStatus;
  suffix?: string;
}[] = [
  {
    to: 500,
    label: "Mangrove seedlings planted (Tudor Creek restoration sites)",
    source: "Big Ship C.B.O. internal records, 2018–2024",
    status: "documented",
  },
  {
    to: 150,
    label: "Community members reportedly engaged in programs",
    source: "Program participant logs; unaudited",
    status: "reported",
  },
  {
    to: 3,
    label: "Primary restoration sites (Tudor Creek, Mikindani, Ganahola)",
    source: "Big Ship C.B.O. site records, 2024",
    status: "verified",
    suffix: "",
  },
  {
    to: 5,
    label: "Documented partner organisations including Kenya Forest Service and WWF-Kenya",
    source: "Partnership agreements on file",
    status: "documented",
    suffix: "",
  },
];

/**
 * Outcome figures — these are reported or estimated (not externally verified).
 * Using the most conservative interpretation available.
 */
const outcomes: {
  figure: string;
  label: string;
  source: string;
  status: VerificationStatus;
}[] = [
  {
    figure: "75%+",
    label: "reported mangrove seedling survival rate at restoration sites",
    source: "Big Ship C.B.O. field observations; not independently verified",
    status: "reported",
  },
  {
    figure: "300+",
    label: "estimated square metres of mangrove habitat restored",
    source: "Estimated from planting density records; subject to ongoing monitoring",
    status: "estimated",
  },
  {
    figure: "15+",
    label: "community volunteers documented as trained in restoration and monitoring",
    source: "Training attendance records, 2023–2024",
    status: "documented",
  },
];

const stories = [
  {
    initials: "JM",
    name: "Jane Mwangi",
    role: "Mangrove restoration leader · Tudor Creek",
    quote:
      "When we started planting, I didn't think we could make a difference. Now I see new shoots growing each season and fish returning to the creek.",
  },
  {
    initials: "KO",
    name: "Kofi Okonkwo",
    role: "RECO campaign organiser · Mombasa schools",
    quote:
      "Students who collected yoghurt cups realised they were creating something valuable. It changed how they think about waste.",
  },
  {
    initials: "SM",
    name: "Salma Mohamed",
    role: "Urban resilience participant",
    quote:
      "The training equipped me with skills and confidence. I'm now leading community adaptation discussions in my neighbourhood.",
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
        eyebrow="By The Numbers"
        title="Measurable environmental and community impact"
        body="Big Ship C.B.O. tracks outcomes in mangrove restoration, community engagement, and coastal ecosystem health since 2018. Figures below are drawn from our internal records and partner reports; where independent verification is unavailable, cautious language is used."
        image={IMG.students}
        stats={[
          ["500+", "Seedlings planted"],
          ["150+", "Community engaged"],
          ["3", "Active sites"],
        ]}
      />

      {/* ── Primary stats grid ── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs text-muted-foreground/70 italic">
              ✱ Figures are sourced from Big Ship C.B.O. program records unless otherwise noted. 
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

          {/* ── Outcome figures ── */}
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
                <p className="text-sm leading-relaxed text-navy-foreground/85">"{s.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-azure/20 text-sm font-bold text-azure">
                    {s.initials}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold">{s.name}</span>
                    <span className="text-navy-foreground/60">{s.role}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Support"
        title="Help us scale environmental impact"
        body="Partners, funders and community volunteers make restoration possible. We're always looking for ways to grow our work."
        primary={{ to: "/contact", label: "Get involved" }}
        secondary={{ to: "/about", label: "Our story" }}
      />
    </>
  );
}
