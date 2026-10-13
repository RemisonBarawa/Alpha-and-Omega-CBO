import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems: { to: "/" | "/about" | "/programs" | "/board" | "/impact" | "/contact"; label: string; hasMenu?: boolean }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs", hasMenu: true },
  { to: "/board", label: "Board Members" },
  { to: "/impact", label: "Impact" },
  { to: "/contact", label: "Contact" },
];

const programLinks = [
  { to: "/programs",                       label: "All Programs" },
  { to: "/programs/girl-child-mentorship", label: "Girl Child Mentorship" },
  { to: "/programs/womens-empowerment",    label: "Women's Empowerment" },
  { to: "/programs/youth-voice",           label: "Youth Voice" },
  { to: "/programs/human-rights",          label: "Human Rights" },
  { to: "/programs/climate-action",        label: "Climate Action" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a
              href="mailto:alphaandomegacbokenya001@gmail.com"
              className="inline-flex items-center gap-2 opacity-85 transition-opacity hover:opacity-100"
            >
              <Mail className="size-3.5" /> alphaandomegacbokenya001@gmail.com
            </a>
            <a
              href="tel:+254740610899"
              className="inline-flex items-center gap-2 opacity-85 transition-opacity hover:opacity-100"
            >
              <Phone className="size-3.5" /> +254 740 610 899
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/alphaandomegacbokenya"
              aria-label="Alpha & Omega CBO Kenya on Facebook"
              className="opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100"
            >
              <Facebook className="size-3.5" />
            </a>
            <a
              href="https://x.com/and_cbo"
              aria-label="Alpha & Omega CBO Kenya on X"
              className="opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100"
            >
              <Twitter className="size-3.5" />
            </a>
            <a
              href="#"
              aria-label="Alpha & Omega CBO Kenya on Instagram"
              className="opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100"
            >
              <Instagram className="size-3.5" />
            </a>
            <a
              href="#"
              aria-label="Alpha & Omega CBO Kenya on LinkedIn"
              className="opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100"
            >
              <Linkedin className="size-3.5" />
            </a>
            <a
              href="#"
              aria-label="Alpha & Omega CBO Kenya on YouTube"
              className="opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100"
            >
              <Youtube className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-transparent bg-background/80 backdrop-blur-xl transition-all duration-500",
          scrolled && "border-border shadow-soft",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="group flex items-center gap-3">
            <span className="grid size-10 place-items-center overflow-hidden rounded-xl shadow-soft transition-transform group-hover:rotate-6">
              <img
                src="/logos/Alpha and Omega Logo.jpg"
                alt="Alpha & Omega CBO Kenya logo"
                className="size-full object-contain"
              />
            </span>
            <span className="font-display text-lg leading-none font-bold tracking-tight">
              Alpha &amp; Omega
              <span className="block text-[0.62rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                CBO Kenya
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                  {item.hasMenu && (
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {item.hasMenu && (
                  <div className="invisible absolute top-full left-0 w-60 translate-y-2 rounded-2xl border border-border bg-popover p-2 opacity-0 shadow-lift transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {programLinks.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/events"
              className="ml-2 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Events
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-10 place-items-center rounded-xl border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 lg:hidden",
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {[...navItems, { to: "/events", label: "Events" }].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
