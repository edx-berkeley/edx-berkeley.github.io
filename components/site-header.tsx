import NextLink from "next/link";
import Image from "next/image";

import { cn } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";

import { BERKELEYX_SCHOOL_URL, type CourseNavItem } from "@/lib/course-nav";

const navLinkClass =
  "berkeley-focus-ring inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-[#003262] transition-colors hover:bg-[#003262]/10";

export function SiteHeader({ navLinks }: { navLinks: CourseNavItem[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#003262]/10 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NextLink href="/" className="berkeley-focus-ring inline-flex items-center gap-3 rounded-lg pr-2">
          <Image
            src="/berkeleyX.png"
            alt="BerkeleyX"
            width={180}
            height={60}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden font-semibold tracking-tight text-[#003262] lg:inline">
            Berkeley Data Science Courses
          </span>
          <span className="hidden text-sm text-zinc-500 xl:inline">edX companion</span>
        </NextLink>
        <nav aria-label="Courses" className="flex flex-1 flex-wrap items-center justify-end gap-1 sm:gap-2">
          {navLinks.map((c) => (
            <NextLink key={c.href} href={c.href} className={navLinkClass} title={c.title}>
              Data {c.shortCode}
            </NextLink>
          ))}
          <a
            href="https://ds-modules.github.io/open-data-science-courses/"
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            Open DS Courses
          </a>
          <a
            href={BERKELEYX_SCHOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "berkeley-focus-ring")}
          >
            Enroll on edX
          </a>
        </nav>
      </div>
    </header>
  );
}
