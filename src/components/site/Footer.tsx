import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
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
      { to: "/events", label: "Events" },
      { to: "/programs/adopt-a-site", label: "Adopt A Site" },
      { to: "/programs/reco-yogurt-forest", label: "RECO/Yogurt Forest" },
      { to: "/programs/urban-resilience", label: "Urban Resilience" },
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
                src="/big-ship-logo.svg"
                alt="Big Ship C.B.O. logo"
                className="size-full object-contain"
              />
            </span>
            <span className="font-display text-lg font-bold">Big Ship C.B.O.</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
            Community-based organization dedicated to environmental conservation, waste recovery, and community empowerment in Mombasa.
          </p>
          <div className="mt-5 flex gap-3">
            {([
              [Facebook, "Big Ship C.B.O. on Facebook"],
              [Instagram, "Big Ship C.B.O. on Instagram"],
              [Linkedin, "Big Ship C.B.O. on LinkedIn"],
              [Youtube, "Big Ship C.B.O. on YouTube"],
            ] as const).map(([Icon, label], i) => (
              <a
                key={i}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Icon className="size-4" />
              </a>
            ))}
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
          <p>© {new Date().getFullYear()} Big Ship C.B.O. All rights reserved.</p>
          <p>Transformed youth, thriving communities.</p>
        </div>
      </div>
    </footer>
  );
}
