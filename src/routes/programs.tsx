import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/lib/images";
import { BrandRibbon } from "@/components/site/LogoVideoCard";
import { CtaBand } from "@/components/site/CtaBand";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Alpha & Omega CBO Kenya's five programs: Girl Child Mentorship, Women's Empowerment, Youth Voice, Human Rights, and Climate Action in Mombasa.",
      },
      { property: "og:title", content: "Programs | Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Five integrated programs for community empowerment, rights awareness, and civic participation in Bangladesh Slums, Mombasa.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Programs | Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Girl Child Mentorship, Women's Empowerment, Youth Voice, Human Rights, and Climate Action programs.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    img: IMG.tech,
    title: "Girl Child Mentorship & Empowerment",
    body: "Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access the Pad Bank.",
    to: "/programs/girl-child-mentorship" as const,
    id: "girl-child-mentorship",
  },
  {
    img: IMG.arts,
    title: "Women's Empowerment & Mentorship",
    body: "Structured mentorship and livelihood training for women in Bangladesh Slums and Mikindani Ward.",
    to: "/programs/womens-empowerment" as const,
    id: "womens-empowerment",
  },
  {
    img: IMG.business,
    title: "Youth Voice & Civic Participation",
    body: "Equipping young people in Jomvu Sub-County to engage in civic processes and community decision-making.",
    to: "/programs/youth-voice" as const,
    id: "youth-voice",
  },
  {
    img: IMG.community,
    title: "Human Rights & Socio-economic Rights",
    body: "Rights awareness and socio-economic advocacy in partnership with HURIA Human Rights Lab.",
    to: "/programs/human-rights" as const,
    id: "human-rights",
  },
  {
    img: IMG.hero,
    title: "Climate & Community Action",
    body: "Community resilience and climate action as a DARAJA Project Community Hub in Mikindani Ward.",
    to: "/programs/climate-action" as const,
    id: "climate-action",
  },
];

const support = [
  ["Mentorship Networks",   "One-on-one and group mentorship for girls, women, and young people through all five programs."],
  ["Rights & Advocacy",     "Legal literacy training, rights documentation, and community advocacy in partnership with HURIA Human Rights Lab."],
  ["Civic Participation",   "Structured forums and youth dialogues engaging community members in local governance and civic processes."],
  ["Community Action",      "Collective resilience projects, climate risk mapping, and partnership activities as a DARAJA Project Community Hub."],
];

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Five programs for community empowerment in Mombasa"
        body="Five integrated programs combining mentorship, rights awareness, civic participation, and community action for women, girls, and young people in Bangladesh Slums and Mikindani Ward."
        image={IMG.workspace}
        stats={[
          ["5",    "Community programs"],
          ["Free", "Community participation"],
          ["2019", "Operating since"],
        ]}
      />
      <section className="section pattern-band">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <Link
                  to={p.to}
                  className="card-lift group block overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={getProgramAltText(p.id)}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary">
                      Explore
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  <BrandRibbon />
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {support.map(([title, body], i) => (
              <Reveal
                key={title}
                delay={i * 90}
                className="card-lift pattern-card rounded-3xl border border-border bg-secondary p-6 sm:p-7"
              >
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Participate"
        title="Join our community programs"
        body="Whether through volunteering, partnering, or community participation, there's a way to support our work in Mombasa."
        primary={{ to: "/contact", label: "Get involved" }}
        secondary={{ to: "/events", label: "Upcoming events" }}
      />
    </>
  );
}
