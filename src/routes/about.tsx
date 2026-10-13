import { createFileRoute } from "@tanstack/react-router";
import { Counter, Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/lib/images";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Alpha & Omega CBO Kenya's story: a youth-led CBO rooted in Bangladesh Slums, Mikindani Ward, Mombasa, founded in 2019.",
      },
      { property: "og:title", content: "About Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Youth-led community organization in Bangladesh Slums, Mombasa, supporting women, girls, and young people since 2019.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Youth-led community organization in Bangladesh Slums, Mombasa, founded in 2019.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: AboutPage,
});

const values = [
  ["Youth-Led",        "Young people from the community guide priorities, lead programs, and own outcomes."],
  ["Gender Responsive","Programs specifically address the needs of women and girls alongside young men and boys."],
  ["Rights-Based",     "All work is grounded in human rights principles, informed by our partnership with HURIA Human Rights Lab."],
  ["Community-Rooted", "We are from Bangladesh Slums — our decisions are made with and by the community we serve."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Youth-led community action in Bangladesh Slums since 2019"
        body="Alpha & Omega CBO Kenya was founded to support women, girls, and young people in Bangladesh Slums, Mikindani Ward, Jomvu Sub-County. Today our work spans five programs in mentorship, rights, civic participation, and community action."
        image={IMG.team}
        stats={[
          ["2019",    "Year founded"],
          ["5",       "Active programs"],
          ["Mombasa", "Bangladesh Slums, Jomvu"],
        ]}
      />

      <section className="section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
            <img
              src={IMG.community}
              alt="Community members engaged in Alpha & Omega CBO Kenya programs in Bangladesh Slums, Mombasa"
              loading="lazy"
              width={1920}
              height={1088}
              className="size-full object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold sm:text-4xl">Why we exist</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-muted-foreground">
                Bangladesh Slums in Mikindani Ward, Jomvu Sub-County, is home to a vibrant community facing significant challenges — limited access to education, persistent gender inequality, restricted economic opportunity, and the compounding effects of climate vulnerability.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 text-muted-foreground">
                Alpha &amp; Omega CBO Kenya was founded to address these challenges directly, by and for the community. By centering youth leadership, responding to the needs of women and girls, grounding work in human rights principles, and building civic agency, we believe community-rooted action creates lasting change.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { to: 5,    label: "Active programs" },
                { to: 4,    label: "Named partner organizations" },
                { to: 2019, label: "Year founded" },
              ].map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={220 + i * 90}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <p className="font-display text-2xl font-bold text-primary">
                    <Counter to={s.to} />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pattern-band bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="eyebrow">What Guides Us</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Our values</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map(([title, body], i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="card-lift pattern-card rounded-3xl border border-border bg-card p-6 sm:p-7"
              >
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-8">
            <span className="eyebrow">Mission</span>
            <p className="mt-4 text-muted-foreground">
              To empower women, girls, and young people in Bangladesh Slums through mentorship, rights awareness, civic participation, and community action.
            </p>
          </Reveal>
          <Reveal delay={120} className="brand-gradient rounded-3xl p-8 text-navy-foreground">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase">Vision</span>
            <p className="mt-4 font-display text-3xl">Empowered youth, resilient communities.</p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Partner with Alpha & Omega CBO Kenya"
        body="We welcome partners, supporters, and volunteers committed to community empowerment in Mombasa."
        primary={{ to: "/contact", label: "Get in touch" }}
        secondary={{ to: "/programs", label: "See our programs" }}
      />
    </>
  );
}
