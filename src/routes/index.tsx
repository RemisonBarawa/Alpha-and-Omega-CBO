import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, Rocket, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ImpactMetric } from "@/components/site/ImpactMetric";
import { useParallax } from "@/components/site/Motion";
import { LogoVideoCard } from "@/components/site/LogoVideoCard";
import { Confetti } from "@/components/site/Confetti";

import { ImpactStories } from "@/components/site/ImpactStories";
import { Partners } from "@/components/site/Partners";
import { IMG } from "@/lib/images";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Alpha & Omega CBO Kenya — youth-led organization in Bangladesh Slums, Mikindani Ward, Mombasa, supporting women, girls, and young people.",
      },
      { property: "og:title", content: "Alpha & Omega CBO Kenya | Empower · Educate · Transform" },
      {
        property: "og:description",
        content:
          "Youth-led CBO in Mombasa supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Alpha & Omega CBO Kenya | Empower · Educate · Transform" },
      {
        name: "twitter:description",
        content:
          "Youth-led CBO in Mombasa supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: Index,
});

const marquee = [
  "Alpha & Omega CBO Kenya",
  "Bangladesh Slums · Mombasa",
  "Empower | Educate | Transforming Lives",
  "Founded 2019",
  "Mentorship · Rights · Civic Action",
  "Mikindani Ward · Jomvu Sub-County",
];

const approach = [
  {
    n: "01",
    icon: Compass,
    title: "Engage",
    body: "We listen to and learn from the community — understanding the challenges facing women, girls, and young people in Bangladesh Slums.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Mentor",
    body: "Structured mentorship circles, workshops, and one-on-one support equip participants with skills, confidence, and knowledge.",
  },
  {
    n: "03",
    icon: HeartHandshake,
    title: "Mobilize",
    body: "We organize community members to advocate for their rights, participate in civic processes, and act on shared challenges.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Sustain",
    body: "Partnerships with HURIA, SHOFCO, DAYOK, and the DARAJA Project ensure long-term support and community-led ownership.",
  },
];

const programs = [
  {
    img: IMG.tech,
    tag: "Mentorship",
    kicker: "GIRL CHILD · ONGOING",
    title: "Girl Child Mentorship & Empowerment",
    body: "Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access the Pad Bank.",
    to: "/programs/girl-child-mentorship" as const,
  },
  {
    img: IMG.arts,
    tag: "Empowerment",
    kicker: "WOMEN · ONGOING",
    title: "Women's Empowerment & Mentorship",
    body: "Structured mentorship and livelihood training for women in Mikindani Ward.",
    to: "/programs/womens-empowerment" as const,
  },
  {
    img: IMG.business,
    tag: "Civic",
    kicker: "YOUTH VOICE · ONGOING",
    title: "Youth Voice & Civic Participation",
    body: "Engaging young people in civic forums and community decision-making with SHOFCO.",
    to: "/programs/youth-voice" as const,
  },
  {
    img: IMG.community,
    tag: "Rights",
    kicker: "HUMAN RIGHTS · ONGOING",
    title: "Human Rights & Socio-economic Rights",
    body: "Rights awareness and socio-economic advocacy in partnership with HURIA Human Rights Lab.",
    to: "/programs/human-rights" as const,
  },
  {
    img: IMG.hero,
    tag: "Climate",
    kicker: "COMMUNITY ACTION · ONGOING",
    title: "Climate & Community Action",
    body: "Community resilience and climate action as a DARAJA Project Community Hub.",
    to: "/programs/climate-action" as const,
  },
];

const milestones = [
  {
    year: "2019",
    label: "HURIA Partnership",
    body: "HURIA Human Rights Lab identified Alpha & Omega as a mentee organization addressing socio-economic rights in Jomvu Sub-County.",
  },
  {
    year: "2023",
    label: "Women's Empowerment Featured",
    body: "Women's Empowerment and Mentorship program publicly featured; Pad Bank launched under Girl Child Mentorship program.",
  },
  {
    year: "2024",
    label: "SHOFCO Spotlight",
    body: "Shining Hope for Communities spotlighted Alpha & Omega as youth-voice partner; Victor Nando Odongo featured in leadership profile.",
  },
  {
    year: "2025",
    label: "Community Hub",
    body: "DARAJA Project MoU signed with Dream Achievers Youth Organization Kenya; Alpha & Omega became a Community Hub.",
  },
];

function Index() {
  const { ref: heroRef, offset } = useParallax(0.18);

  return (
    <>
      <section ref={heroRef} className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        >
          <img
            src={IMG.hero}
            alt="Community members at Alpha & Omega CBO Kenya in Bangladesh Slums, Mombasa"
            width={1920}
            height={1080}
            className="ken-burns size-full scale-110 object-cover"
          />
        </div>
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 text-navy-foreground sm:gap-14 sm:py-24 md:py-36">
          <div className="grid items-center gap-9 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">

              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.2em] uppercase backdrop-blur">
                  Youth-Led · Community-Rooted
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 text-[2rem] leading-[1.08] font-bold sm:text-6xl lg:text-7xl">
                  Empowering young people. Educating communities. <span className="text-shine">Transforming lives.</span>
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 max-w-xl text-base text-navy-foreground/85 sm:text-lg">
                  Alpha &amp; Omega CBO Kenya is a youth-led community organization rooted in Bangladesh Slums, Mikindani Ward, Mombasa County. We support women, girls, and young people through mentorship, rights awareness, civic participation, and community action.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                  >
                    Partner with us
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
                  >
                    Support a program
                  </Link>
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal delay={260}>
                <LogoVideoCard
                  src="/logos/alpha_omega_logo_emergence.mp4"
                  poster="/logos/Alpha and Omega Logo.jpg"
                  fallbackImage="/logos/Alpha and Omega Logo.jpg"
                  aspect="3 / 2"
                  className="float-slow"
                >
                  <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
                    <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-primary">
                      Est. 2019 · Bangladesh Slums, Mombasa
                    </p>
                    <p className="font-display text-sm text-white">Alpha &amp; Omega CBO Kenya</p>
                  </div>
                </LogoVideoCard>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Reveal delay={120} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-7">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-azure uppercase">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/85">
                To empower women, girls, and young people in Bangladesh Slums through mentorship, rights awareness, civic participation, and community action.
              </p>
            </Reveal>
            <Reveal delay={220} className="rounded-3xl border border-white/15 bg-navy/60 p-6 backdrop-blur-md sm:p-7">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Vision</h2>
              <p className="mt-3 font-display text-2xl">Empowered youth, resilient communities.</p>
            </Reveal>
          </div>

          <div className="flex items-center gap-3 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-navy-foreground/60 sm:text-[0.68rem] sm:tracking-[0.24em]">
            <span className="relative grid h-9 w-5 shrink-0 place-items-center overflow-hidden rounded-full border border-white/35 py-1 sm:h-10 sm:w-6">
              <span className="scroll-cue block size-1.5 rounded-full bg-azure" />
            </span>
            <span className="min-w-0 truncate">Scroll to explore</span>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-secondary py-4">
        <div className="marquee-track gap-10">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-xs font-semibold tracking-[0.24em] whitespace-nowrap text-muted-foreground uppercase"
            >
              {item}
              <span className="size-1.5 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>

      <section className="section relative isolate overflow-hidden">
        <Confetti />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Community-Led Empowerment</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Building community impact in Bangladesh Slums since 2019
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-muted-foreground">
                Alpha &amp; Omega CBO Kenya delivers five integrated programs combining mentorship, rights awareness, civic participation, and community action for women, girls, and young people in Mombasa.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <Link
                to="/about"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore our story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={160} className="relative">
            <LogoVideoCard
              src="/logos/alpha_omega_logo_emergence.mp4"
              poster="/logos/Alpha and Omega Logo.jpg"
              fallbackImage="/logos/Alpha and Omega Logo.jpg"
              aspect="16 / 9"
            >
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4 text-white">
                <p className="font-display text-lg font-semibold">Community Impact</p>
                <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-primary">
                  2019 — Present
                </p>
              </div>
            </LogoVideoCard>
            <div className="mt-8 flex items-center justify-between text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              <span>2019 · Founded</span>
              <span className="mx-4 h-px flex-1 bg-border" />
              <span className="text-primary">Present · Growing</span>
            </div>
          </Reveal>

        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <span className="eyebrow text-azure">By The Numbers</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Measurable community impact</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                to: 5,
                label: "Active programs",
                source: "Alpha & Omega CBO Kenya program register, 2025",
                status: "verified" as const,
                suffix: "",
                tag: "Programs",
              },
              {
                to: 4,
                label: "Named partner organizations",
                source: "Partnership agreements 2019–2025",
                status: "documented" as const,
                suffix: "",
                tag: "Partners",
              },
              {
                to: 2019,
                label: "Year founded",
                source: "HURIA Human Rights Lab records, 2019",
                status: "verified" as const,
                suffix: "",
                tag: "Founded",
              },
            ].map((stat, i) => (
              <Reveal
                key={stat.tag}
                delay={i * 120}
                className="card-lift rounded-3xl border border-white/12 bg-white/5 p-8"
              >
                <ImpactMetric
                  to={stat.to}
                  label={stat.label}
                  source={stat.source}
                  status={stat.status}
                  suffix={stat.suffix}
                  counterClassName="text-azure sm:text-5xl"
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12 rounded-3xl border border-white/12 bg-white/5 p-8">
            <p className="font-display text-2xl sm:text-3xl text-white">
              Growing community empowerment in Bangladesh Slums, Mombasa.
            </p>
            <p className="mt-3 max-w-2xl text-sm text-white/80">
              Our commitment to mentorship, rights awareness, civic participation, and community action continues to grow with every program cycle and community partnership.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-12 rounded-3xl border border-white/12 p-8">
            <p className="font-display text-2xl sm:text-3xl">
              Growing community empowerment in Bangladesh Slums, Mombasa.
            </p>
            <p className="mt-3 max-w-2xl text-sm text-navy-foreground/70">
              Our commitment to mentorship, rights awareness, civic participation, and community action continues to grow with every program cycle and community partnership.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Four milestones, one mission</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal
                as="li"
                key={m.year}
                delay={i * 90}
                className="card-lift pattern-card relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold tracking-widest text-primary-foreground">
                  {m.year}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{m.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section pattern-band bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Our approach</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A four-step community-rooted model for lasting empowerment and systemic change.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 110}
                className="card-lift pattern-card group rounded-3xl border border-border bg-card p-7"

              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-primary/25">{step.n}</span>
                  <step.icon className="size-5 text-primary transition-transform group-hover:scale-110" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180} className="pattern-card mt-10 grid gap-6 rounded-3xl border border-border bg-card p-8 lg:grid-cols-2">
            <blockquote>
              <p className="font-display text-xl leading-relaxed">
                "[Placeholder — a verified testimonial will be added when available]"
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-primary/12 text-sm font-bold text-primary">
                  AO
                </span>
                <span className="text-sm">
                  <span className="block font-semibold">Community participant</span>
                  <span className="text-muted-foreground">Alpha &amp; Omega CBO Kenya</span>
                </span>
              </footer>
            </blockquote>
            <div>
              <h3 className="font-display text-lg font-semibold">Why it works</h3>
              <ul className="mt-4 space-y-4 text-sm">
                {[
                  ["Youth-led", "Young people from the community guide priorities, lead programs, and own outcomes."],
                  ["Gender responsive", "Programs specifically address the needs of women and girls alongside young men."],
                  ["Rights-based", "All work is grounded in human rights principles, informed by HURIA Human Rights Lab partnership."],
                ].map(([title, body]) => (
                  <li key={title} className="flex gap-3">
                    <Users className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      <span className="block font-semibold">{title}</span>
                      <span className="text-muted-foreground">{body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Our programs</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Alpha &amp; Omega CBO Kenya delivers five integrated programs for community empowerment, rights awareness, and civic participation.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <Link
                  to={p.to}
                  className="card-lift group block overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={getProgramAltText(
                        p.to.replace('/programs/', '')
                      )}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-navy/80 px-3 py-1 text-[0.65rem] font-semibold tracking-widest text-navy-foreground uppercase backdrop-blur">
                      {p.tag} · {p.kicker}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-primary">
                      Explore program · Mombasa
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ImpactStories />

      <Partners />

      <section className="brand-gradient text-navy-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to join the Alpha &amp; Omega CBO Kenya community?</h2>
            <p className="mt-2 text-sm text-navy-foreground/80">
              Partner with us, support a program, or get involved in Bangladesh Slums, Mombasa.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              Partner with us
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/15"
            >
              Upcoming events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
