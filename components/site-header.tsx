import NextLink from "next/link";

import type { CourseNavItem } from "@/lib/course-nav";

const navLinkClass =
  "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-[#003262] transition-colors hover:bg-[#003262]/5";

export function SiteHeader({ navLinks }: { navLinks: CourseNavItem[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <NextLink href="/" className="font-semibold tracking-tight text-[#003262] hover:underline hover:underline-offset-4">
          Berkeley Data Science Courses — edX companion
        </NextLink>
        <nav aria-label="Courses" className="flex flex-wrap items-center gap-1">
          {navLinks.map((c) => (
            <NextLink key={c.href} href={c.href} className={navLinkClass} title={c.title}>
              Data {c.shortCode}
            </NextLink>
          ))}
          <a
            href="https://ds-modules.github.io/open-data-science-courses/"
            target="_blank"
            rel="noreferrer"
            className={navLinkClass}
          >
            Open DS courses ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
