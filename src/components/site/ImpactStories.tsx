import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import { getImpactStoryAltText } from "@/lib/altText";

const stories = [
  {
    image: IMG.workspace,
    tag: "Human Rights",
    name: "HURIA Human Rights Lab Partnership",
    meta: "Jomvu Sub-County, Mombasa · 2019",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
    body: "In 2019, HURIA Human Rights Lab identified Alpha & Omega CBO Kenya as a mentee organization working on socio-economic rights in Jomvu Sub-County. This partnership established the rights-based framework that underpins all of Alpha & Omega's programs today.",
    stat: "Mentee designation 2019 · Rights-based framework established",
    statNote: "Source: HURIA Human Rights Lab public records, 2019",
  },
  {
    image: IMG.community,
    tag: "Girl Child Mentorship",
    name: "Pad Bank Launch",
    meta: "Bangladesh Slums, Mikindani Ward · 2023",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
    body: "In 2023, the Pad Bank was launched under the Girl Child Mentorship & Empowerment Program, providing free menstrual hygiene products to girls in Bangladesh Slums. The initiative directly supports school attendance and dignity for girls in the community.",
    stat: "Pad Bank operational 2023 · Girls' school attendance supported",
    statNote: "Source: Alpha & Omega CBO Kenya program records, 2023",
  },
  {
    image: IMG.students,
    tag: "Youth Voice",
    name: "SHOFCO Youth Voice Partnership",
    meta: "Jomvu Sub-County, Mombasa · 2024",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
    body: "Shining Hope for Communities (SHOFCO) spotlighted Alpha & Omega CBO Kenya as a youth-voice partner in 2024, recognizing the organization's work engaging young people in civic participation and community decision-making in Jomvu Sub-County.",
    stat: "SHOFCO partner spotlight 2024 · Youth civic reach expanded",
    statNote: "Source: SHOFCO public communications, 2024",
  },
  {
    image: IMG.tech,
    tag: "Climate Action",
    name: "DARAJA Project MoU & Community Hub",
    meta: "Mikindani Ward, Mombasa · 2025",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
    body: "In 2025, Alpha & Omega CBO Kenya signed a Memorandum of Understanding with Dream Achievers Youth Organization Kenya (DAYOK) through the DARAJA Project, formalizing the organization's role as a Community Hub in Mikindani Ward.",
    stat: "Community Hub 2025 · DARAJA MoU signed with DAYOK",
    statNote: "Source: DARAJA Project MoU documentation, 2025",
  },
];

export function ImpactStories() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="eyebrow">Real Communities. Real Change.</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Stories of community impact</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Behind every program is a community working together to build better lives. Here are stories from Alpha &amp; Omega CBO Kenya's work.
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {stories.map((s, i) => (
            <Reveal
              key={s.name}
              delay={60}
              className={`grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-soft lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="group relative overflow-hidden rounded-[1.6rem]">
                <img
                  src={s.image}
                  alt={getImpactStoryAltText(s.name, s.meta)}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/80 to-transparent" />
                <figcaption className="absolute bottom-5 left-5 text-navy-foreground">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] uppercase backdrop-blur">
                    {s.tag}
                  </span>
                  <p className="mt-3 font-display text-xl font-semibold">{s.name}</p>
                  <p className="text-xs opacity-80">{s.meta}</p>
                </figcaption>
              </figure>

              <div className="px-4 pb-6 lg:px-8 lg:pb-0">
                <p className="font-display text-xl leading-relaxed sm:text-2xl">"{s.quote}"</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <p className="mt-6 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  {s.stat}
                </p>
                {s.statNote && (
                  <p className="mt-2 text-[0.68rem] leading-snug text-muted-foreground/70 italic">
                    {s.statNote}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            These stories represent the community-led empowerment work we witness every day.
          </p>
          <Link
            to="/impact"
            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Explore all impact stories
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
