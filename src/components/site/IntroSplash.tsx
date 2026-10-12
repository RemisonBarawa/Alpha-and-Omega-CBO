import { useEffect, useState } from "react";

/**
 * Site intro gate — mirrors the original hub's welcome overlay.
 * Shows once per browser session, then fades away.
 */
export function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (!sessionStorage.getItem("bigship-intro-seen")) setOpen(true);
    } catch {
      /* storage blocked — skip the intro */
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dismiss = () => {
    try {
      sessionStorage.setItem("bigship-intro-seen", "1");
    } catch {
      /* ignore */
    }
    setLeaving(true);
    window.setTimeout(() => setOpen(false), 700);
  };

  if (!mounted || !open) return null;

  return (
    <div
      data-leaving={leaving}
      className="intro-gate brand-gradient fixed inset-0 z-[100] grid place-items-center px-6 text-navy-foreground"
    >
      <div aria-hidden className="absolute inset-0 opacity-40">
        <span className="float-slow absolute top-1/4 left-[12%] size-72 rounded-full bg-azure/30 blur-3xl" />
        <span className="float-slow absolute bottom-[15%] right-[10%] size-80 rounded-full bg-coral/25 blur-3xl" />
      </div>
      <div className="intro-inner relative max-w-xl text-center">
        <span className="eyebrow text-azure">Welcome · Karibu Mombasa</span>
        <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
          Welcome to <span className="text-gradient">Big Ship C.B.O.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-navy-foreground/80">
          Community-led environmental conservation and livelihoods development. Explore our work in 
          mangrove restoration, waste recovery, and coastal resilience in Mombasa.
        </p>
        <button
          onClick={dismiss}
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-9 py-3.5 text-sm font-semibold text-navy shadow-lift transition-transform hover:-translate-y-0.5"
        >
          Continue
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <p className="mt-4 text-[0.7rem] tracking-[0.2em] uppercase text-navy-foreground/50">
          Click continue to explore the site
        </p>
      </div>
    </div>
  );
}
