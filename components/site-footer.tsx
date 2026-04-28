export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/10 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-zinc-600 sm:px-6">
        <p className="max-w-3xl leading-relaxed">
          Part of UC Berkeley&apos;s modular data science ecosystem. Adoption guides, shells, and edX links are
          centralized on{" "}
          <a
            href="https://ds-modules.github.io/open-data-science-courses/"
            className="font-medium text-[#003262] underline underline-offset-2 hover:text-[#004080]"
          >
            Open Data Science Courses
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
