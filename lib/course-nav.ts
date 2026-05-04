/** Routing + card blurbs only. Full copy for each class lives in `app/courses/<slug>/page.tsx`. */

export type CourseNavItem = {
  href: `/courses/${string}`;
  shortCode: string;
  title: string;
  teaser: string;
  audience: string;
  workload: string;
  enrollHref?: string;
};

export const BERKELEYX_SCHOOL_URL = "https://www.edx.org/school/uc-berkeleyx";

export const courseNav: CourseNavItem[] = [
  {
    href: "/courses/data-88e",
    shortCode: "88E",
    title: "Data 88E: Data Science for Economics",
    teaser:
      "Economics concepts taught through Python and data-driven modeling.",
    audience: "Economics and policy learners",
    workload: "Three-part sequence",
    enrollHref: BERKELEYX_SCHOOL_URL,
  },
  {
    href: "/courses/data-88b",
    shortCode: "88B",
    title: "Data 88B: Data and Decisions",
    teaser:
      "Use evidence, experiments, and modeling to make stronger data-driven decisions.",
    audience: "Decision-makers and analysts",
    workload: "Three-part sequence",
    enrollHref: BERKELEYX_SCHOOL_URL,
  },
  {
    href: "/courses/data-88c",
    shortCode: "88C",
    title: "Data 88C: Computational Structures in Data Science",
    teaser:
      "Core CS and programming ideas for data science, from fundamentals to abstraction.",
    audience: "Python and CS foundations",
    workload: "Three-part sequence",
    enrollHref: BERKELEYX_SCHOOL_URL,
  },
];
