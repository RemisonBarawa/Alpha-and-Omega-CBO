import { useEffect, useRef } from "react";

const COLORS = ["#3b6fe0", "#4aa8e8", "#f2733f", "#f5c451", "#2fb3a6", "#ffffff"];

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  vr: number;
  color: string;
};

/**
 * Celebration confetti burst that fires once when the section scrolls into view.
 * Honours prefers-reduced-motion.
 */
export function Confetti({ pieces = 90 }: { pieces?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let running = false;
    let items: Piece[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      const { width, height } = canvas.getBoundingClientRect();
      items = Array.from({ length: pieces }, () => ({
        x: Math.random() * width,
        y: -20 - Math.random() * height * 0.6,
        vx: (Math.random() - 0.5) * 1.4,
        vy: 1.2 + Math.random() * 2.2,
        size: 4 + Math.random() * 7,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
      }));
    };

    const tick = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      let alive = 0;
      for (const p of items) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.012;
        p.rot += p.vr;
        if (p.y < height + 30) alive++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - p.y / (height + 40));
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      }
      if (alive > 0) frame = requestAnimationFrame(tick);
      else {
        running = false;
        ctx.clearRect(0, 0, width, height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !running) {
          running = true;
          resize();
          spawn();
          frame = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(canvas);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", resize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pieces]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 size-full"
    />
  );
}
