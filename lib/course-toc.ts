/** Anchor prefix for in-page IDs (e.g. data88c1-topics); must match app/courses data-* page markup. */
export type CourseTocPrefix = "data88b" | "data88e" | "data88c";

export type CourseOutlinePart = {
  num: 1 | 2 | 3;
  href: string;
  title: string;
  sections: { href: string; label: string }[];
};

export function buildCourseOutline(
  prefix: CourseTocPrefix,
  partTitles: readonly [string, string, string],
): {
  overview: { href: string; label: string };
  parts: CourseOutlinePart[];
} {
  const sectionDefs = [
    { suffix: "about" as const, label: "About" },
    { suffix: "topics" as const, label: "Topics" },
    { suffix: "structure" as const, label: "Structure" },
  ];

  const parts = ([0, 1, 2] as const).map((i) => {
    const n = (i + 1) as 1 | 2 | 3;
    const partHash = "#course-part-" + String(n);
    return {
      num: n,
      href: partHash,
      title: partTitles[i],
      sections: sectionDefs.map(({ suffix, label }) => ({
        href: "#" + prefix + String(n) + "-" + suffix,
        label,
      })),
    };
  });

  return {
    overview: { href: "#overview-heading", label: "Overview" },
    parts,
  };
}
