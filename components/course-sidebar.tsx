import { GoToTop } from "@/components/go-to-top";
import type { CourseTocPrefix } from "@/lib/course-toc";
import { buildCourseOutline } from "@/lib/course-toc";

const linkClass =
  "block rounded-md py-1 pl-2 -ml-2 text-left text-zinc-600 transition-colors hover:bg-[#003262]/5 hover:text-[#003262]";
const subLinkClass =
  "block rounded-md py-0.5 pl-2 text-left text-zinc-500 transition-colors hover:bg-[#003262]/5 hover:text-[#003262]";

type CourseSidebarProps = {
  tocPrefix: CourseTocPrefix;
  partTitles: readonly [string, string, string];
};

export function CourseSidebar({ tocPrefix, partTitles }: CourseSidebarProps) {
  const outline = buildCourseOutline(tocPrefix, partTitles);

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="font-semibold tracking-wide text-zinc-900">On this page</p>
      <ul className="mt-3 space-y-3 border-l border-zinc-200 pl-3">
        <li>
          <a href={outline.overview.href} className={linkClass}>
            {outline.overview.label}
          </a>
        </li>
        {outline.parts.map((part) => (
          <li key={part.num}>
            <a href={part.href} className={`${linkClass} font-medium text-zinc-800`}>
              Part {part.num}
              <span className="mt-0.5 block font-normal text-zinc-500">
                {part.title.replace(/^Part (one|two|three):\s*/i, "")}
              </span>
            </a>
            <ul className="mt-1.5 space-y-0.5 border-l border-zinc-100 pl-2">
              {part.sections.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={subLinkClass}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <GoToTop className="mt-6 inline-flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-left text-xs font-medium uppercase tracking-wide text-[#003262] underline-offset-4 hover:underline" />
    </nav>
  );
}
