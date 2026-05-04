import Image from "next/image";

import { COURSE_LOGO_88C_URL, COURSE_LOGO_URL } from "@/lib/site-constants";

type CourseLogoProps = {
  suffix: "E" | "B" | "C";
  priority?: boolean;
  compact?: boolean;
};

/** Shared DATA88 artwork; suffix distinguishes 88E / 88B / 88C per course page. */
export function CourseLogo({ suffix, priority, compact = false }: CourseLogoProps) {
  const is88C = suffix === "C";
  const src = is88C ? COURSE_LOGO_88C_URL : COURSE_LOGO_URL;
  return (
    <div
      className={`flex flex-wrap items-end gap-2${is88C ? " shrink-0 self-end" : ""}`}
      aria-label={`Data 88${suffix} logo`}
    >
      <Image
        src={src}
        alt={
          is88C
            ? "Data 88C (C88C) logo"
            : `DATA88 wordmark for Data 88${suffix}`
        }
        width={is88C ? 2100 : 1320}
        height={is88C ? 2100 : 96}
        className={
          is88C
            ? compact
              ? "h-20 w-auto max-w-[min(100%,16rem)] object-contain object-left"
              : "h-24 w-auto max-w-[min(100%,34rem)] sm:h-28 object-contain object-left"
            : compact
              ? "h-11 w-auto max-w-[min(100%,12rem)] object-contain object-left"
              : "h-14 w-auto max-w-[min(100%,20rem)] object-contain object-left"
        }
        priority={priority}
      />
      {!is88C && !compact && (
        <span className="select-none pb-0.5 font-sans text-4xl font-bold tracking-tight text-[#003262]" aria-hidden>
          {suffix}
        </span>
      )}
    </div>
  );
}
