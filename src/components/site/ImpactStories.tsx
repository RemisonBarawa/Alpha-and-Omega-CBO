import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import { getImpactStoryAltText } from "@/lib/altText";

const stories = [
  {
    image: IMG.workspace,
    tag: "Mangrove Restoration",
    name: "Tudor Creek Restoration",
    meta: "Tudor Creek, Mombasa · 2023",
    quote: "Every seedling planted is a commitment to our coastal future.",
    body: "Community-led planting initiative resulted in a reported 300+ mangrove seedlings establishing along Tudor Creek shoreline. The project improved coastal resilience, provided habitat for marine life, and strengthened community stewardship of local ecosystems.",
    stat: "~300 seedlings documented · ~75% survival rate (field estimate)",
    statNote: "Source: Big Ship C.B.O. field records, 2023 — not independently verified",
  },
  {
    image: IMG.community,
    tag: "Waste Recovery",
    name: "Yogurt Cup Recycling Campaign",
    meta: "Mombasa schools · 2023",
    quote: "Turning waste into environmental solutions—one cup at a time.",
    body: "Schools and communities reportedly collected over 5,000 discarded yoghurt cups, transforming them into seedling containers for reforestation. This circular economy initiative demonstrated practical waste management while supporting mangrove restoration.",
    stat: "~5,000 cups reported · ~2,000 seedlings (estimated)",
    statNote: "Source: Campaign participation logs; figures are self-reported",
  },
  {
    image: IMG.students,
    tag: "Skills Development",
    name: "Youth Livelihoods Training",
    meta: "Coastal settlements · 2023",
    quote: "Skills training empowers community members to build sustainable futures.",
    body: "The Urban Resilience program provided livelihoods training to a documented 120+ youth and women in coastal neighbourhoods. Participants gained practical skills for sustainable income generation and community leadership.",
    stat: "120+ trained (documented) · 65% employment rate (reported)",
    statNote: "Source: Training attendance records; employment rate is self-reported, not audited",
  },
  {
    image: IMG.tech,
    tag: "Community Monitoring",
    name: "Mikoko Watch Initiative",
    meta: "Coastal ecosystems · Ongoing",
    quote: "Local knowledge is our strongest tool for conservation.",
    body: "Community-based monitoring programme empowers local stakeholders to document and report on mangrove ecosystem health. This initiative combines traditional knowledge with modern monitoring tools for long-term coastal stewardship.",
    stat: "40+ monitors (documented) · Real-time data collection (ongoing)",
    statNote: "Source: Volunteer sign-up records; programme is ongoing",
  },
];

export function ImpactStories() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="eyebrow">Real Communities. Real Change.</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Stories of conservation impact</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Behind every environmental restoration initiative is a community working together to protect 
            our coastal ecosystems. Here are stories of their success.
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
                <p className="font-display text-xl leading-relaxed sm:text-2xl">“{s.quote}”</p>
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
            These stories represent the community-led conservation outcomes we witness every day.
          </p>
          <Link
            to="/impact"
            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Explore all conservation stories
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
