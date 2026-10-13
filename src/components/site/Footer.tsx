import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { getContactInfo } from "@/lib/contact";

/** Renders the contact / visit-us block, falling back gracefully when data is unavailable. */
function ContactSection() {
  const contact = getContactInfo();

  return (
    <div>
      <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">Visit us</h3>
      <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
        {contact.hasAny ? (
          <>
            {contact.address && (
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-azure" aria-hidden="true" />
                <span>{contact.address}</span>
              </li>
            )}
            {contact.phone && (
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-azure" aria-hidden="true" />
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-navy-foreground"
                >
                  {contact.phone}
                </a>
              </li>
            )}
            {contact.email && (
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-azure" aria-hidden="true" />
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-navy-foreground"
                >
                  {contact.email}
                </a>
              </li>
            )}
          </>
        ) : (
          <li>For inquiries, please visit our office in Mombasa</li>
        )}
      </ul>
    </div>
  );
}

const columns = [
  {
    title: "Explore",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/programs", label: "Programs" },
      { to: "/impact", label: "Impact" },
      { to: "/board", label: "Board Members" },
    ],
  },
  {
    title: "Community",
    links: [
      { to: "/events",                           label: "Events" },
      { to: "/programs/girl-child-mentorship",   label: "Girl Child Mentorship" },
      { to: "/programs/womens-empowerment",      label: "Women's Empowerment" },
      { to: "/programs/youth-voice",             label: "Youth Voice" },
      { to: "/programs/human-rights",            label: "Human Rights" },
      { to: "/programs/climate-action",          label: "Climate Action" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center overflow-hidden rounded-xl">
              <img
                src="/logos/Alpha and Omega Logo.jpg"
                alt="Alpha & Omega CBO Kenya logo"
                className="size-full object-contain"
              />
            </span>
            <span className="font-display text-lg font-bold">Alpha &amp; Omega CBO Kenya</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
            Youth-led community-based organization supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action in Mombasa, Kenya.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/alphaandomegacbokenya"
              aria-label="Alpha & Omega CBO Kenya on Facebook"
              className="grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="https://x.com/and_cbo"
              aria-label="Alpha & Omega CBO Kenya on X"
              className="grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Twitter className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Alpha & Omega CBO Kenya on Instagram"
              className="grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Alpha & Omega CBO Kenya on LinkedIn"
              className="grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Alpha & Omega CBO Kenya on YouTube"
              className="grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Youtube className="size-4" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">{col.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <ContactSection />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alpha &amp; Omega CBO Kenya. All rights reserved.</p>
          <p>Empower | Educate | Transforming Lives.</p>
        </div>
      </div>
    </footer>
  );
}
