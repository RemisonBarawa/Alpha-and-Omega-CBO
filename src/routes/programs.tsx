import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/lib/images";
import { BrandRibbon } from "@/components/site/LogoVideoCard";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Big Ship C.B.O.'s three integrated programs: Adopt A Site mangrove restoration, RECO waste recovery, and urban resilience initiatives.",
      },
      { property: "og:title", content: "Programs | Big Ship C.B.O." },
      {
        property: "og:description",
        content: "Big Ship C.B.O.'s three integrated programs for community environmental conservation and urban resilience in Mombasa.",
      },
      { property: "og:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Programs | Big Ship C.B.O." },
      {
        name: "twitter:description",
        content: "Adopt A Site, RECO/Yogurt Forest, and Urban Resilience programs.",
      },
      { name: "twitter:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    img: IMG.tech,
    title: "Adopt A Site",
    body: "Community-led mangrove restoration with ecosystem monitoring and climate resilience building across coastal Mombasa.",
    to: "/programs/adopt-a-site" as const,
  },
  {
    img: IMG.arts,
    title: "RECO/Yogurt Forest",
    body: "Innovative waste recovery turning discarded yoghurt cups into reforestation seedling containers and environmental education.",
    to: "/programs/reco-yogurt-forest" as const,
  },
  {
    img: IMG.business,
    title: "Urban Resilience & Skills",
    body: "Youth livelihoods training, women's empowerment, and community organizing in coastal neighborhoods.",
    to: "/programs/urban-resilience" as const,
  },
];

const support = [
  ["Community Partnerships", "Collaboration with local organizations, Kenya Forest Service, and environmental networks."],
  ["Technical Support", "Scientific expertise in mangrove restoration, monitoring, and ecosystem management."],
  ["Skills Training", "Livelihood development, leadership training, and capacity building for community members."],
  ["Ongoing Monitoring", "Long-term environmental monitoring through community-based Mikoko Watch initiative."],
];

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Environmental programs for coastal Mombasa"
        body="Three integrated programs combining mangrove restoration, waste recovery innovation, and community resilience building."
        image={IMG.workspace}
        stats={[
          ["3", "Core environmental programs"],
          ["Free", "Community participation"],
          ["500+", "Seedlings planted to date"],
        ]}
      />
      <section className="section pattern-band">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <Link
                  to={p.to}
                  className="card-lift group block overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
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
        title="Join our conservation community"
        body="Whether through volunteering, partnering, or community participation, there's a way to support coastal restoration."
        primary={{ to: "/contact", label: "Get involved" }}
        secondary={{ to: "/events", label: "Upcoming events" }}
      />
    </>
  );
}
