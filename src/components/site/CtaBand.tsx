import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BrandRibbon } from "@/components/site/LogoVideoCard";

type To = "/contact" | "/programs" | "/events" | "/about" | "/impact";

export function CtaBand({
  eyebrow = "Join Us",
  title,
  body,
  primary = { to: "/contact", label: "Talk to the team" },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  primary?: { to: To; label: string };
  secondary?: { to: To; label: string };
}) {
  return (
    <section className="section pattern-band bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="brand-gradient relative overflow-hidden rounded-[2rem] shadow-lift">
          <div
            aria-hidden
            className="absolute inset-0 bg-[url('/NXTW%20data%20card%20background.jpeg')] bg-[length:360px] opacity-[0.12] mix-blend-screen"
          />
          <div className="relative grid gap-7 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="min-w-0">
              <span className="text-[0.68rem] font-semibold tracking-[0.22em] text-azure uppercase">
                {eyebrow}
              </span>
              <h2 className="mt-4 text-2xl font-bold sm:text-4xl">{title}</h2>
              {body && (
                <p className="mt-4 max-w-xl text-sm text-navy-foreground/80 sm:text-base">{body}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to={primary.to}
                className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-lift transition-transform hover:-translate-y-0.5"
              >
                {primary.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {secondary && (
                <Link
                  to={secondary.to}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
          <BrandRibbon />
        </Reveal>
      </div>
    </section>
  );
}
