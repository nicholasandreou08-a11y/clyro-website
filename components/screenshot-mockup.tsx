"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * Carousel frames per module.
 * Modules listed here get the animated carousel treatment.
 * Modules NOT listed fall through to the single-screenshot map or CSS fallback.
 */
const carouselFrames: Record<string, string[]> = {
  calendar: [
    "/screenshots/calendar-1.png",
    "/screenshots/calendar-2.png",
    "/screenshots/calendar-3.png",
    "/screenshots/calendar-4.png",
    "/screenshots/calendar-5.png",
  ],
  patients: [
    "/screenshots/patients-1.png",
    "/screenshots/patients-2.png",
    "/screenshots/patients-3.png",
  ],
  notes: [
    "/screenshots/notes-1.png",
    "/screenshots/notes-2.png",
    "/screenshots/notes-3.png",
    "/screenshots/notes-4.png",
  ],
  billing: [
    "/screenshots/billing-1.png",
    "/screenshots/billing-2.png",
    "/screenshots/billing-3.png",
  ],
};

/**
 * Single-screenshot modules (no carousel).
 */
const screenshotMap: Record<string, string> = {
  inbox: "/screenshots/inbox.png",
  reports: "/screenshots/reports.png",
  tasks: "/screenshots/tasks.png",
};

const FRAME_DURATION = 2500; // ms per frame

/* ------------------------------------------------------------------ */
/* Generic animated carousel — cycles through N screenshot frames      */
/* ------------------------------------------------------------------ */
function ScreenshotCarousel({
  frames,
  moduleKey,
  className,
}: {
  frames: string[];
  moduleKey: string;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % frames.length),
      FRAME_DURATION,
    );
    return () => clearInterval(timer);
  }, [frames.length]);

  return (
    <div className={cn("select-none relative", className)}>
      {frames.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Clyro ${moduleKey} view ${i + 1}`}
          width={1470}
          height={716}
          className={cn(
            "w-full rounded-lg shadow-xl transition-opacity duration-700",
            i === idx ? "opacity-100" : "opacity-0 absolute inset-0",
          )}
          priority={i === 0}
        />
      ))}
      {/* Progress dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {frames.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              i === idx
                ? "bg-white shadow-sm scale-110"
                : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`${moduleKey} view ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main screenshot mockup component                                    */
/* ------------------------------------------------------------------ */
export function ScreenshotMockup({
  moduleKey,
  fallback: Fallback,
  className,
}: {
  moduleKey: string;
  fallback: React.FC<{ className?: string }>;
  className?: string;
}) {
  // Carousel modules (multiple frames)
  const frames = carouselFrames[moduleKey];
  if (frames) {
    return (
      <ScreenshotCarousel
        frames={frames}
        moduleKey={moduleKey}
        className={className}
      />
    );
  }

  // Single-screenshot modules
  const src = screenshotMap[moduleKey];
  if (src) {
    return (
      <div className={cn("select-none", className)}>
        <Image
          src={src}
          alt={`Clyro ${moduleKey} module`}
          width={1470}
          height={716}
          className="w-full rounded-lg shadow-xl"
          priority
        />
      </div>
    );
  }

  // Fallback to CSS mockup
  return <Fallback className={className} />;
}
