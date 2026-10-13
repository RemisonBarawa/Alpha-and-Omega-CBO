import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { BrandRibbon } from "@/components/site/LogoVideoCard";

export function ProgramDetail({
  eyebrow,
  title,
  body,
  image,
  altText,
  tracks,
  details,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  altText?: string;
  tracks: string[][];
  details: string[][];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} body={body} image={image} />

      <section className="section pattern-band">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <img
                src={image}
                alt={altText || title}
                loading="lazy"
                width={1024}
                height={768}
                className="size-full object-cover"
              />
              <BrandRibbon />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {tracks.map(([name, desc], i) => (
                <Reveal
                  key={name}
                  delay={i * 100}
                  className="card-lift pattern-card rounded-2xl border border-border bg-card p-6"
                >
                  <h2 className="font-display text-lg font-semibold">{name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <Reveal className="pattern-card rounded-3xl border border-border bg-secondary p-6 sm:p-7">
              <h2 className="font-display text-lg font-semibold text-white">Programme details</h2>
              <dl className="mt-5 space-y-4 text-sm">
                {details.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-white/20 pb-3">
                    <dt className="text-white/80">{k}</dt>
                    <dd className="text-right font-medium text-white">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Get involved or ask a question
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={120} className="pattern-card rounded-3xl border border-border bg-card p-6 sm:p-7">
              <h2 className="font-display text-lg font-semibold">What you get</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "A dedicated mentor for the full programme",
                  "Free workspace, internet and equipment access",
                  "Case management and wellbeing support",
                  "Introductions to employers and partners",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow="Get Started"
        title={`Ready to participate in ${title}?`}
        body="Tell us a little about yourself and we will follow up with participation details and next steps."
        primary={{ to: "/contact", label: "Join us" }}
        secondary={{ to: "/programs", label: "All programs" }}
      />
    </>
  );
}
