import type { ReactNode } from "react";
import NextLink from "next/link";

import { cn } from "@heroui/react";
import { Separator } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";

import { CourseLogo } from "@/components/course-logo";
import { CoursePartsNav } from "@/components/course-parts-nav";
import { CourseSidebar } from "@/components/course-sidebar";
import type { CourseTocPrefix } from "@/lib/course-toc";

export type CoursePart = {
  /** Visible heading for this block (e.g. "Part one: Foundations"). */
  title: string;
  content: ReactNode;
};

export type CoursePageLayoutProps = {
  /** Course display name (shown next to the logo). */
  title: string;
  /** Short nav label, e.g. `88E`. */
  navLabel: string;
  logoSuffix: "E" | "B" | "C";
  /** Prefix for in-page anchors (`data88b1-topics`, etc.). Must match IDs in the course page content. */
  tocPrefix: CourseTocPrefix;
  /** Introductory section below the header. */
  overview: ReactNode;
  /** Three main content areas in order. */
  parts: [CoursePart, CoursePart, CoursePart];
  /** Primary enrollment URL for this course page. */
  enrollHref: string;
  /** Optional enrollment/action block rendered at the end of the page body. */
  cta?: ReactNode;
  /**
   * When true (default), the right "On this page" panel scrolls inside a max-height column (scrollbar).
   * Set false to let the TOC grow with the page so only the document scrolls.
   */
  sidebarIndependentScroll?: boolean;
};

export function CoursePageLayout({
  title,
  navLabel,
  logoSuffix,
  tocPrefix,
  overview,
  parts,
  enrollHref,
  cta,
  sidebarIndependentScroll = true,
}: CoursePageLayoutProps) {
  const [p1, p2, p3] = parts;

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 gap-10 px-4 py-12 sm:px-6 xl:gap-12">
      <main className="min-w-0 flex-1">
        <nav className="flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
          <div>
            <NextLink href="/" className="berkeley-focus-ring rounded font-medium text-[#003262] hover:underline">
              Home
            </NextLink>
            <span className="mx-2">/</span>
            <span className="text-zinc-800">{navLabel}</span>
          </div>
          <div className="xl:hidden">
            <CoursePartsNav partTitles={[p1.title, p2.title, p3.title]} />
          </div>
        </nav>

        <header className="mt-10 flex flex-col gap-8 border-b border-[#003262]/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#003262]">Berkeley Data Science</p>
            <h1 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">{title}</h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={enrollHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "primary" }), "berkeley-focus-ring")}
              >
                Enroll on edX
              </a>
              <a
                href="#overview-heading"
                className="berkeley-outline-button berkeley-focus-ring inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-semibold"
              >
                Preview curriculum
              </a>
            </div>
          </div>
          <CourseLogo suffix={logoSuffix} priority />
        </header>

        <section aria-labelledby="overview-heading" className="section-surface-soft mt-14 rounded-2xl px-6 py-8 sm:px-8">
          <h2 id="overview-heading" className="font-sans text-2xl font-semibold text-zinc-950">
            Overview
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-zinc-600">{overview}</div>
        </section>

        <Separator className="my-14" />

        <CoursePartSection index={1} part={p1} className="section-surface-muted rounded-2xl px-6 py-8 sm:px-8" />

        <Separator className="my-14" />

        <CoursePartSection index={2} part={p2} className="section-surface-soft rounded-2xl px-6 py-8 sm:px-8" />

        <Separator className="my-14" />

        <CoursePartSection index={3} part={p3} className="section-surface-muted rounded-2xl px-6 py-8 sm:px-8" />

        {cta ? <div className="mt-14">{cta}</div> : null}
      </main>

      <aside className="hidden w-56 shrink-0 xl:block">
        <div
          className={
            sidebarIndependentScroll
              ? "sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain pb-8"
              : "sticky top-24 pb-8"
          }
        >
          <CourseSidebar tocPrefix={tocPrefix} partTitles={[p1.title, p2.title, p3.title]} />
        </div>
      </aside>
    </div>
  );
}

function CoursePartSection({
  index,
  part,
  className,
}: {
  index: 1 | 2 | 3;
  part: CoursePart;
  className?: string;
}) {
  const sectionId = `course-part-${index}`;
  const headingId = `${sectionId}-heading`;

  return (
    <section id={sectionId} aria-labelledby={headingId} className={className}>
      <h2 id={headingId} className="font-sans text-2xl font-semibold text-zinc-950">
        {part.title}
      </h2>
      <div className="mt-6 max-w-3xl space-y-4 text-zinc-600 [&_p]:leading-relaxed">{part.content}</div>
    </section>
  );
}
