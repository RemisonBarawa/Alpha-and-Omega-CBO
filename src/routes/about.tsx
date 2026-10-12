import { createFileRoute } from "@tanstack/react-router";
import { Counter, Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/lib/images";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Our story and vision: Big Ship C.B.O. drives community-led mangrove restoration and environmental resilience in Mombasa's coastal areas.",
      },
      { property: "og:title", content: "About Big Ship C.B.O." },
      {
        property: "og:description",
        content: "Community-led environmental conservation in Mombasa since 2018. Our story, values, and conservation approach.",
      },
      { property: "og:image", content: "/Big%20Ship%20Logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Big Ship C.B.O." },
      {
        name: "twitter:description",
        content: "Community-led environmental conservation in Mombasa since 2018.",
      },
      { name: "twitter:image", content: "/Big%20Ship%20Logo.jpg" },
    ],
  }),
  component: AboutPage,
});

const values = [
  ["Community-Led", "Environmental conservation is led by local communities who understand coastal needs and priorities."],
  ["Sustainable Impact", "We measure success through long-term ecosystem health and measurable environmental outcomes."],
  ["Resilience Focus", "Building adaptive capacity for communities facing climate change and coastal challenges."],
  ["Integrated Approach", "Environmental work connects with livelihoods, education, and community wellbeing."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Environmental conservation led by community since 2018"
        body="Big Ship C.B.O. began with a vision to restore Mombasa's coastal ecosystems through community participation. Today, our work spans mangrove restoration, waste recovery, and urban resilience across three major programs."
        image={IMG.team}
        stats={[
          ["2018", "Founded with environmental focus"],
          ["500+", "Mangrove seedlings planted"],
          ["3", "Active restoration locations"],
        ]}
      />

      <section className="section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
            <img
              src={IMG.community}
              alt="Community members collaborating at Big Ship C.B.O. environmental conservation initiative in Mombasa"
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
                Mombasa's coastal ecosystems face mounting pressure from development, climate change, and degradation. Too often, conservation happens without the voice or participation of the communities who depend on these ecosystems. We exist to change that.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 text-muted-foreground">
                By centering community leadership, combining environmental science with local knowledge, and linking conservation to livelihoods and resilience, we believe coastal communities can restore their ecosystems while building stronger, more sustainable futures.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { to: 500, label: "Mangrove seedlings planted" },
                { to: 150, label: "Community members engaged" },
                { to: 3, label: "Active restoration sites" },
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
              To drive sustainable mangrove restoration, waste recovery, and urban resilience in Mombasa through community-led environmental conservation and integrated livelihood development.
            </p>
          </Reveal>
          <Reveal delay={120} className="brand-gradient rounded-3xl p-8 text-navy-foreground">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase">Vision</span>
            <p className="mt-4 font-display text-3xl">Thriving ecosystems, empowered communities.</p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Join the conservation movement"
        body="Whether you're interested in volunteering, partnering, or learning more about our environmental initiatives, we'd love to hear from you."
        primary={{ to: "/contact", label: "Get in touch" }}
        secondary={{ to: "/programs", label: "See our programs" }}
      />
    </>
  );
}
