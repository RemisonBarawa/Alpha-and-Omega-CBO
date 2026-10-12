import { Reveal } from "@/components/site/Reveal";

const partners = [
  "Kenya Forest Service",
  "University of Nairobi",
  "WWF-Kenya",
  "Innovate Resource Agency (IRA)",
];

export function Partners() {
  return (
    <section className="section overflow-hidden bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">Our Partners</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Working together for coastal conservation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We partner with organizations and institutions committed to environmental conservation, 
            coastal ecosystem restoration, and community-led development in Mombasa.
          </p>
        </Reveal>
      </div>

      <div className="marquee-mask mt-12 space-y-4">
        <div className="marquee-track gap-4">
          {[...partners, ...partners].map((p, i) => (
            <PartnerChip key={`a${i}`} name={p} />
          ))}
        </div>
        <div className="marquee-track marquee-reverse gap-4">
          {[...partners].reverse().concat([...partners].reverse()).map((p, i) => (
            <PartnerChip key={`b${i}`} name={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerChip({ name }: { name: string }) {
  return (
    <span className="flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card px-7 py-5 text-sm font-semibold whitespace-nowrap shadow-soft transition-colors hover:border-primary/40">
      <span className="grid size-8 place-items-center rounded-lg brand-gradient text-[0.7rem] font-bold text-navy-foreground">
        {name
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("")}
      </span>
      {name}
    </span>
  );
}
