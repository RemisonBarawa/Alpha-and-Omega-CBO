import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { BrandRibbon } from "@/components/site/LogoVideoCard";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  stats,
  children,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  image?: string;
  stats?: [string, string][];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      {image && (
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt={`${title} - Big Ship C.B.O. environmental program hero image`}
            width={1920}
            height={1080}
            className="ken-burns size-full scale-110 object-cover opacity-45"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/NXTW%20data%20card%20background.jpeg')] bg-[length:320px] opacity-[0.1] mix-blend-screen sm:bg-[length:480px]"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 size-72 rounded-full bg-primary/30 blur-3xl sm:size-96"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 size-72 rounded-full bg-azure/20 blur-3xl sm:size-96"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-28">
        <Reveal>
          <span className="eyebrow text-azure">{eyebrow}</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
        </Reveal>
        {body && (
          <Reveal delay={180}>
            <p className="mt-5 max-w-2xl text-navy-foreground/80">{body}</p>
          </Reveal>
        )}
        {stats && (
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {stats.map(([figure, label], i) => (
              <Reveal
                key={label}
                delay={240 + i * 90}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md"
              >
                <p className="font-display text-2xl font-bold text-azure">{figure}</p>
                <p className="mt-1 text-xs text-navy-foreground/75">{label}</p>
              </Reveal>
            ))}
          </div>
        )}
        {children && <Reveal delay={240}>{children}</Reveal>}
      </div>
      <BrandRibbon className="absolute bottom-0 left-0" />
    </section>
  );
}
