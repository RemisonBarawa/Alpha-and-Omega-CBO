import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Upcoming events at Alpha & Omega CBO Kenya: mentorship sessions, women's workshops, youth dialogues, and community action days in Bangladesh Slums, Mombasa.",
      },
      { property: "og:title", content: "Events | Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Mentorship sessions, empowerment workshops, youth civic dialogues, and community action days in Bangladesh Slums and Mikindani Ward.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Events | Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Join community events and workshops at Alpha & Omega CBO Kenya in Mombasa.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: EventsPage,
});

const events = [
  {
    date: "10 Jan",
    title: "Girl Child Mentorship Session",
    tag: "Girl Child",
    time: "9:00 AM – 12:00 PM",
    place: "Bangladesh Slums, Mikindani Ward",
    body: "Monthly mentorship circle for school-age girls. Sessions cover confidence building, education support, and Pad Bank access.",
  },
  {
    date: "24 Jan",
    title: "Women's Empowerment Workshop",
    tag: "Women's Empowerment",
    time: "10:00 AM – 2:00 PM",
    place: "Mikindani Ward Community Centre",
    body: "Structured workshop on livelihood skills, income generation, and community networking for women in Mikindani Ward.",
  },
  {
    date: "07 Feb",
    title: "Youth Civic Dialogue",
    tag: "Youth Voice",
    time: "2:00 PM – 5:00 PM",
    place: "Jomvu Sub-County",
    body: "Open civic forum where young people engage with community leaders on local issues and civic rights in partnership with SHOFCO.",
  },
  {
    date: "21 Feb",
    title: "Human Rights Awareness Session",
    tag: "Human Rights",
    time: "9:00 AM – 12:00 PM",
    place: "Bangladesh Slums",
    body: "Community training on socio-economic rights, legal literacy, and community advocacy — part of our HURIA Human Rights Lab programme.",
  },
  {
    date: "08 Mar",
    title: "Climate & Community Action Day",
    tag: "Climate Action",
    time: "8:00 AM – 1:00 PM",
    place: "Mikindani Ward",
    body: "International Women's Day community action: climate risk mapping, green practices, and collective resilience planning as part of the DARAJA Community Hub.",
  },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Alpha & Omega CBO Kenya events and workshops"
        body="Join us for mentorship sessions, women's empowerment workshops, youth civic dialogues, human rights training, and community action days in Bangladesh Slums and Mikindani Ward."
        image={IMG.studio}
        stats={[
          ["Regular",  "Community activities"],
          ["Free",     "Entry to every session"],
          ["All",      "Community members welcome"],
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
        body="Our community networks are available for rights education, mentorship sessions, and civic engagement workshops."
        primary={{ to: "/contact", label: "Host with us" }}
        secondary={{ to: "/programs", label: "See programs" }}
      />
    </>
  );
}
