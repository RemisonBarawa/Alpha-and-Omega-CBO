import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "Board Members | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Meet the leadership of Alpha & Omega CBO Kenya, founded by Victor Nando Odongo in Bangladesh Slums, Mombasa.",
      },
      { property: "og:title", content: "Board Members | Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Leadership of Alpha & Omega CBO Kenya, founded by Victor Nando Odongo in Bangladesh Slums, Mombasa.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Board Members | Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Meet the team behind Alpha & Omega CBO Kenya in Bangladesh Slums, Mombasa.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: BoardPage,
});

const leadership = [
  {
    initials: "VO",
    name: "Victor Nando Odongo",
    role: "Chairman / Founder",
    bio: "Victor Nando Odongo founded Alpha & Omega CBO Kenya in Bangladesh Slums, Mikindani Ward, Jomvu Sub-County. Under his leadership the organization was recognized by HURIA Human Rights Lab in 2019, spotlighted by SHOFCO in 2024, and became a Community Hub through the DARAJA Project in 2025. Victor was featured in an independent leadership profile in 2024.",
    tags: ["Community Leadership", "Human Rights", "Youth Empowerment"],
  },
  {
    initials: "TBA",
    name: "To be announced",
    role: "Board Member",
    bio: "Additional board and team member details will be published when confirmed.",
    tags: [],
  },
  {
    initials: "TBA",
    name: "To be announced",
    role: "Board Member",
    bio: "Additional board and team member details will be published when confirmed.",
    tags: [],
  },
];

function BoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The team behind Alpha & Omega CBO Kenya"
        body="Alpha & Omega CBO Kenya is led by its founder and community champions from Bangladesh Slums, Mikindani Ward."
        image={IMG.mentor}
        stats={[
          ["2019",    "Founded"],
          ["Mombasa", "Bangladesh Slums, Jomvu"],
          ["5",       "Programs"],
        ]}
      />

      <section className="section pattern-band">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="eyebrow">Leadership Team</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Community champions committed to our mission
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((m, i) => (
              <Reveal
                key={m.name + i}
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
                {m.tags.length > 0 && (
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
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Partner"
        title="Partner with Alpha & Omega CBO Kenya"
        body="We welcome partners, funders, and community collaborators committed to empowerment in Mombasa."
        primary={{ to: "/contact", label: "Let's talk" }}
        secondary={{ to: "/impact", label: "See our impact" }}
      />
    </>
  );
}
