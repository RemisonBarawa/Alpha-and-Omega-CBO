import { useEffect, useRef, useState } from "react";

/** Thin gradient bar tracking page scroll progress. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[90] h-0.5 bg-transparent">
      <div
        className="h-full origin-left brand-gradient"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

/** Returns a translateY offset for a gentle parallax effect. */
export function useParallax(strength = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        setOffset((rect.top * -1 + 0) * strength);
      }
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return { ref, offset };
}

/** Animated conic progress ring, sweeps in when scrolled into view. */
export function ProgressRing({
  value,
  label,
  caption,
}: {
  value: string;
  label: string;
  caption?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-active={active} className="progress-ring relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-[9%] grid place-items-center rounded-full bg-navy text-center text-navy-foreground shadow-lift">
        <div>
          <p className="font-display text-6xl font-bold sm:text-7xl">{value}</p>
          <p className="text-xs tracking-[0.32em] uppercase text-azure">{label}</p>
          {caption && <p className="mt-5 text-xs opacity-70">{caption}</p>}
        </div>
      </div>
    </div>
  );
}
