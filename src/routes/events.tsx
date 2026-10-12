import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Upcoming events at Big Ship C.B.O.: Community workshops, environmental events, and stakeholder engagements in Mombasa.",
      },
      { property: "og:title", content: "Events | Big Ship C.B.O." },
      {
        property: "og:description",
        content: "Upcoming mangrove restoration workshops, waste recovery discussions, and community skills training.",
      },
      { property: "og:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Events | Big Ship C.B.O." },
      {
        name: "twitter:description",
        content: "Join community workshops and environmental events at Big Ship C.B.O.",
      },
      { name: "twitter:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: EventsPage,
});

const events = [
  {
    date: "12 Sep",
    title: "Mangrove Planting Workshop",
    tag: "Restoration",
    time: "9:00 AM – 12:00 PM",
    place: "Tudor Creek",
    body: "Join us for a hands-on mangrove planting session with expert guidance on seedling care and site management.",
  },
  {
    date: "26 Sep",
    title: "Waste Recovery Discussion",
    tag: "RECO Campaign",
    time: "2:00 PM – 4:00 PM",
    place: "Community Center",
    body: "Learn about our yoghurt cup recovery initiative and how schools can participate in reforestation.",
  },
  {
    date: "04 Oct",
    title: "Community Skills Training",
    tag: "Resilience",
    time: "10:00 AM – 3:00 PM",
    place: "Mombasa",
    body: "Youth livelihoods and environmental adaptation training for coastal community leaders.",
  },
  {
    date: "18 Oct",
    title: "Ecosystem Monitoring Session",
    tag: "Mikoko Watch",
    time: "8:00 AM – 11:00 AM",
    place: "Ganahola",
    body: "Community-based ecosystem monitoring training for mangrove and coastal habitat assessment.",
  },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Big Ship C.B.O. events and workshops"
        body="Join us for restoration activities, skills training, monitoring sessions, and community engagement opportunities throughout Mombasa."
        image={IMG.studio}
        stats={[
          ["Regular", "Community activities"],
          ["Free", "Entry to every session"],
          ["All", "Community members welcome"],
        ]}
      />

      <section className="section pattern-band">
        <div className="mx-auto max-w-5xl px-6">
          <ul className="space-y-5">
            {events.map((e, i) => (
              <Reveal
                as="li"
                key={e.title}
                delay={i * 100}
                className="card-lift pattern-card flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
              >
                <div className="brand-gradient grid w-20 shrink-0 place-items-center rounded-2xl px-4 py-4 text-center text-navy-foreground sm:w-24 sm:py-5">
                  <span className="font-display text-xl font-bold">{e.date.split(" ")[0]}</span>
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase">
                    {e.date.split(" ")[1]}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-primary uppercase">
                    {e.tag}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold">{e.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{e.body}</p>
                  <div className="mt-4 flex flex-wrap gap-5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary" /> {e.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-primary" /> {e.place}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3.5 text-primary" /> Free entry
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Partner"
        title="Host an event or workshop"
        body="Our spaces and networks are available for environmental education, community meetings, and conservation workshops."
        primary={{ to: "/contact", label: "Host with us" }}
        secondary={{ to: "/programs", label: "See programs" }}
      />
    </>
  );
}
