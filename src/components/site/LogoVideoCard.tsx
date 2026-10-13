import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Colourful animated ribbon strip that runs along the bottom of a card. */
export function BrandRibbon({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative h-2.5 w-full overflow-hidden", className)}>
      <div className="ribbon-stripes absolute inset-0" />
      <div className="ribbon-sheen absolute inset-0" />
    </div>
  );
}

/**
 * Card housing an autoplaying looped logo animation with a brand ribbon
 * running along its bottom edge. Falls back to static image with animation
 * if video is unavailable.
 */
export function LogoVideoCard({
  src,
  poster,
  aspect = "16 / 9",
  className,
  children,
  glow = true,
  fallbackImage,
}: {
  src: string;
  poster?: string;
  aspect?: string;
  className?: string;
  children?: ReactNode;
  glow?: boolean;
  fallbackImage?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInView(entry.isIntersecting);
          if (entry.isIntersecting) void el.play().catch(() => {});
          else el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Show static logo with animation if video failed to load or fallback is requested
  const showFallback = videoError || !src;
  const logoImage = fallbackImage || poster;

  return (
    <div className={cn("relative", className)}>
      {glow && (
        <div
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-azure/25 blur-3xl"
          style={{ opacity: inView ? 1 : 0.4, transition: "opacity 900ms ease" }}
        />
      )}
      <div className="card-lift overflow-hidden rounded-3xl border border-white/15 bg-navy/80 shadow-lift backdrop-blur-md">
        {showFallback && logoImage ? (
          <img
            src={logoImage}
            alt="Alpha & Omega CBO Kenya Logo"
            className="animate-gentle-pulse block w-full object-cover"
            style={{ aspectRatio: aspect }}
          />
        ) : (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            className="block w-full object-cover"
            style={{ aspectRatio: aspect }}
            onError={() => setVideoError(true)}
          />
        )}
        {children}
        <BrandRibbon />
      </div>
    </div>
  );
}
