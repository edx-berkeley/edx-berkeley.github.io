export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[#003262]/15 bg-white/95">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#003262]">UC BerkeleyX Pathway</p>
          <p className="text-sm leading-relaxed text-zinc-600">
            Explore Berkeley-aligned data science courses, learn through modular notebooks, and enroll on edX when you
            are ready for certificates.
          </p>
          <a
            href="https://ds-modules.github.io/open-data-science-courses/"
            target="_blank"
            rel="noopener noreferrer"
            className="berkeley-focus-ring inline-flex rounded-md text-sm font-medium text-[#003262] underline underline-offset-2"
          >
            Browse Open Data Science Courses
          </a>
        </div>
        <a
          href="https://www.edx.org/school/uc-berkeleyx"
          target="_blank"
          rel="noopener noreferrer"
          className="berkeley-focus-ring inline-flex items-center rounded-xl bg-[#003262] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#00274c]"
        >
          Start with BerkeleyX on edX
        </a>
      </div>
    </footer>
  );
}
