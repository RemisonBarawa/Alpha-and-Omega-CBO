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
      { title: "Home | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Big Ship C.B.O. drives community-led mangrove restoration, waste recovery, and urban resilience programs in Mombasa, Kenya since 2018.",
      },
      { property: "og:title", content: "Big Ship C.B.O. | Environmental Conservation in Mombasa" },
      {
        property: "og:description",
        content:
          "Community-led mangrove restoration, waste recovery, and urban resilience programs since 2018.",
      },
      { property: "og:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Big Ship C.B.O. | Environmental Conservation in Mombasa" },
      {
        name: "twitter:description",
        content:
          "Community-led mangrove restoration, waste recovery, and urban resilience programs since 2018.",
      },
      { name: "twitter:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: Index,
});

const marquee = [
  "Community Impact Since 2018",
  "Big Ship C.B.O.",
  "Mombasa, Kenya",
  "Celebrating Youth",
  "Mombasa, Kenya",
  "Technology · Arts · Enterprise",
];

const approach = [
  {
    n: "01",
    icon: Compass,
    title: "Community Listen",
    body: "We engage local communities to understand coastal challenges and identify restoration priorities.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Plan & Prepare",
    body: "Structured planning ensures successful seedling preparation, site selection, and community readiness.",
  },
  {
    n: "03",
    icon: HeartHandshake,
    title: "Plant & Protect",
    body: "Community members lead planting activities with ongoing mentorship and ecosystem monitoring support.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Monitor & Scale",
    body: "Long-term monitoring through Mikoko Watch and adaptive management ensures lasting environmental impact.",
  },
];

const programs = [
  {
    img: IMG.tech,
    tag: "Mazira",
    kicker: "RESTORATION · ONGOING",
    title: "Adopt A Site",
    body: "Community-led mangrove restoration with ecosystem monitoring and Mikoko Watch participation.",
    to: "/programs/adopt-a-site" as const,
  },
  {
    img: IMG.arts,
    tag: "RECO",
    kicker: "WASTE RECOVERY · ONGOING",
    title: "RECO/Yogurt Forest",
    body: "Creative waste recovery program transforming yoghurt cups into reforestation seedling containers.",
    to: "/programs/reco-yogurt-forest" as const,
  },
  {
    img: IMG.business,
    tag: "Akili",
    kicker: "RESILIENCE · ONGOING",
    title: "Urban Resilience & Skills",
    body: "Youth livelihoods, women's empowerment, and community-based adaptation in coastal neighborhoods.",
    to: "/programs/urban-resilience" as const,
  },
];

const milestones = [
  { year: "2018", label: "Founded", body: "Big Ship C.B.O. established with focus on environmental conservation and community resilience." },
  { year: "2019", label: "Adopt A Site", body: "Launched mangrove restoration programs around Tudor Creek, Mikindani, and Ganahola." },
  { year: "2020", label: "RECO Campaign", body: "Introduced yogurt cup waste recovery and reforestation initiative." },
  { year: "2021", label: "Expanded", body: "Urban Resilience & Skills Development program launched." },
  { year: "2024", label: "Growing", body: "Continuing community-led conservation across Mombasa." },
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
            alt="Community members collaborating at Big Ship C.B.O. in Mombasa"
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
                Community-Led Conservation
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-[2rem] leading-[1.08] font-bold sm:text-6xl lg:text-7xl">
                Restoring Ecosystems, <span className="text-shine">Empowering Communities</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-base text-navy-foreground/85 sm:text-lg">
                Big Ship C.B.O. drives mangrove restoration, waste recovery, and urban resilience through community-led initiatives in Mombasa.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/programs"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Discover Programs
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
                >
                  Our Story
                </Link>
              </div>
            </Reveal>
          </div>

            <Reveal delay={260}>
              <LogoVideoCard
                src="/bigship_logo_emergence.mp4"
                poster="/Big%20Ship%20Logo.jpg"
                fallbackImage="/Big%20Ship%20Logo.jpg"
                aspect="3 / 2"
                className="float-slow"
              >
                <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
                  <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-azure">
                    Est. 2018 · Mombasa
                  </p>
                  <p className="font-display text-sm">Big Ship C.B.O.</p>
                </div>
              </LogoVideoCard>
            </Reveal>
          </div>



          <div className="grid gap-4 md:grid-cols-2">
            <Reveal delay={120} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-7">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-azure uppercase">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/85">
                To drive sustainable environmental conservation through mangrove restoration, waste recovery, and community-led resilience building in coastal Mombasa.
              </p>
            </Reveal>
            <Reveal delay={220} className="rounded-3xl border border-white/15 bg-navy/60 p-6 backdrop-blur-md sm:p-7">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Vision</h2>
              <p className="mt-3 font-display text-2xl">Thriving ecosystems, empowered communities.</p>
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
              <span className="eyebrow">Community-Led Conservation</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Building environmental impact in Mombasa
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-muted-foreground">
                Since 2018, Big Ship C.B.O. has been driving community-led mangrove restoration, waste recovery initiatives, and urban resilience programs across Mombasa's coastal communities.
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
              src="/bigship_logo_emergence.mp4"
              poster="/Big%20Ship%20Logo.jpg"
              fallbackImage="/Big%20Ship%20Logo.jpg"
              aspect="16 / 9"
            >
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4 text-navy-foreground">
                <p className="font-display text-lg font-semibold">Environmental Impact</p>
                <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-azure">
                  2018 — Present
                </p>
              </div>
            </LogoVideoCard>
            <div className="mt-8 flex items-center justify-between text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              <span>2018 · Founded</span>
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
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Years of measurable impact</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                to: 500,
                label: "Mangrove seedlings planted",
                source: "Big Ship C.B.O. records, 2018–2024",
                status: "documented" as const,
                tag: "Planted",
              },
              {
                to: 150,
                label: "Community members reportedly engaged",
                source: "Program participant logs; self-reported",
                status: "reported" as const,
                tag: "Engaged",
              },
              {
                to: 3,
                label: "Active restoration sites",
                source: "Big Ship C.B.O. site records, 2024",
                status: "verified" as const,
                suffix: "",
                tag: "Sites",
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
                  suffix={stat.suffix !== undefined ? stat.suffix : "+"}
                  counterClassName="text-azure sm:text-5xl"
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12 rounded-3xl border border-white/12 p-8">
            <p className="font-display text-2xl sm:text-3xl">
              Growing environmental impact in Mombasa.
            </p>
            <p className="mt-3 max-w-2xl text-sm text-navy-foreground/70">
              Our commitment to coastal ecosystem restoration and community empowerment continues to grow with each planting season and community initiative.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Five milestones, one mission</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
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
              A four-step model integrating community participation, scientific planning, active restoration, and long-term monitoring.
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
                “The approach here is different. They don't just train you — they stay with you until
                you make it.”
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-primary/12 text-sm font-bold text-primary">
                  JM
                </span>
                <span className="text-sm">
                  <span className="block font-semibold">Jane Mwangi</span>
                  <span className="text-muted-foreground">Adopt A Site · Tudor Creek</span>
                </span>
              </footer>
            </blockquote>
            <div>
              <h3 className="font-display text-lg font-semibold">Why it works</h3>
              <ul className="mt-4 space-y-4 text-sm">
                {[
                  ["Community-led", "Local communities guide priorities and lead restoration, creating lasting ownership and stewardship."],
                  ["Long-term commitment", "We don't plant and leave. Monitoring, maintenance and relationship-building continue for years."],
                  ["Integrated approach", "Environmental work connects with livelihoods, skills training and climate resilience for holistic community benefit."],
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
              Big Ship C.B.O. delivers three integrated programs for community environmental empowerment and coastal resilience.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                        p.title.toLowerCase().includes('adopt') ? 'adopt-a-site' : 
                        p.title.toLowerCase().includes('reco') ? 'reco-yogurt-forest' : 
                        'urban-resilience'
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
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to join the conservation movement?</h2>
            <p className="mt-2 text-sm text-navy-foreground/80">
              Participate in restoration, support environmental initiatives, or partner with Big Ship C.B.O.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              Get in touch
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
