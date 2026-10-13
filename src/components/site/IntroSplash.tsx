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
      if (!sessionStorage.getItem("alpha-omega-intro-seen")) setOpen(true);
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
      sessionStorage.setItem("alpha-omega-intro-seen", "1");
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
      className="intro-gate brand-gradient fixed inset-0 z-[100] grid place-items-center px-6 text-white"
    >
      <div aria-hidden className="absolute inset-0 opacity-40">
        <span className="float-slow absolute top-1/4 left-[12%] size-72 rounded-full bg-red-500/30 blur-3xl" />
        <span className="float-slow absolute bottom-[15%] right-[10%] size-80 rounded-full bg-green-500/25 blur-3xl" />
      </div>
      <div className="intro-inner relative max-w-xl text-center">
        <span className="eyebrow text-white">Welcome · Karibu Mombasa</span>
        <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl text-white">
          Welcome to <span className="text-gradient">Alpha &amp; Omega CBO Kenya</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/90">
          Youth-led community organization rooted in Bangladesh Slums, Mikindani Ward, Mombasa.
          We support women, girls, and young people through mentorship, rights awareness,
          civic participation, and community action.
        </p>
        <button
          onClick={dismiss}
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-9 py-3.5 text-sm font-semibold text-primary shadow-lift transition-transform hover:-translate-y-0.5"
        >
          Continue
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <p className="mt-4 text-[0.7rem] tracking-[0.2em] uppercase text-white/70">
          Click continue to explore the site
        </p>
      </div>
    </div>
  );
}
