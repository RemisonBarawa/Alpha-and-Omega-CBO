import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "Board Members | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Meet the dedicated team and board members driving Big Ship C.B.O.'s mission for environmental conservation and community empowerment in coastal Mombasa.",
      },
      { property: "og:title", content: "Board Members | Big Ship C.B.O." },
      {
        property: "og:description",
        content: "Leadership driving mangrove restoration, waste recovery, and community resilience in Mombasa.",
      },
      { property: "og:image", content: "/Big%20Ship%20Logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Board Members | Big Ship C.B.O." },
      {
        name: "twitter:description",
        content: "Meet the team stewarding Big Ship C.B.O.'s conservation mission.",
      },
      { name: "twitter:image", content: "/Big%20Ship%20Logo.jpg" },
    ],
  }),
  component: BoardPage,
});

const leadership = [
  {
    initials: "BJ",
    name: "Bosco Juma",
    role: "Founding Director / Executive Director",
    bio: "Founder and main director of Big Ship CBO with over a decade of experience working with coastal communities on mangrove restoration, environmental conservation, youth empowerment, and sustainable livelihoods. YALI alumnus with training in environmental conservation and business development.",
    tags: ["Environmental Conservation", "Community Development", "Strategic Leadership"],
  },
  {
    initials: "LA",
    name: "Lucian Adhiambo",
    role: "Urban & Resilience Strategist",
    bio: "Social and community development professional with formal training in project management and procurement/supplies. Responsible for program planning, coordination, and implementation of Big Ship's community and environmental initiatives.",
    tags: ["Program Management", "Project Coordination", "Community Development"],
  },
  {
    initials: "DM",
    name: "Daniel Mulandi",
    role: "Administrative Accountant",
    bio: "Economist and finance graduate responsible for financial oversight and accounting functions within the organization, ensuring transparency and accountability.",
    tags: ["Financial Management", "Accounting", "Economics"],
  },
  {
    initials: "JM",
    name: "Jimmy Mwaita",
    role: "Monitoring & Evaluation Officer",
    bio: "Specialist in monitoring and evaluation and human resource graduate, tasked with tracking program outcomes and institutional performance to ensure effective implementation.",
    tags: ["M&E", "Performance Tracking", "Human Resources"],
  },
  {
    initials: "AN",
    name: "Agatha Nafula",
    role: "Environment & Climate Change Officer",
    bio: "Research associate with a Bachelor of Science in Natural Resource Management, focusing on environmental research and climate response activities.",
    tags: ["Environmental Research", "Climate Change", "Natural Resource Management"],
  },
];

function BoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Meet the dedicated team driving our mission forward"
        body="Experienced professionals committed to environmental conservation, community empowerment, and sustainable development in coastal Mombasa."
        image={IMG.mentor}
        stats={[
          ["5", "Team members"],
          ["10+", "Years of experience"],
          ["2018", "Founded locally"],
        ]}
      />

      <section className="section pattern-band">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="eyebrow">Leadership Team</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Experienced professionals committed to our mission
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 90}
                className="card-lift pattern-card group rounded-3xl border border-border bg-card p-6 sm:p-7"
              >
                {/* Avatar */}
                <span className="grid size-14 place-items-center rounded-2xl bg-primary/12 font-display text-lg font-bold text-primary transition-transform group-hover:rotate-6">
                  {m.initials}
                </span>

                <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>

                {/* Skill tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/8 px-2.5 py-1 text-[0.65rem] font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Partner"
        title="Partner with Big Ship C.B.O."
        body="We're looking for conservation partners, funders, and community collaborators to expand our environmental impact in coastal Mombasa."
        primary={{ to: "/contact", label: "Let's talk" }}
        secondary={{ to: "/impact", label: "See our impact" }}
      />
    </>
  );
}
