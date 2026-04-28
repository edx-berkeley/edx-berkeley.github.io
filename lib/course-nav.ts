/** Routing + card blurbs only. Full copy for each class lives in `app/courses/<slug>/page.tsx`. */

export type CourseNavItem = {
  href: `/courses/${string}`;
  shortCode: string;
  title: string;
  teaser: string;
};

export const courseNav: CourseNavItem[] = [
  {
    href: "/courses/data-88e",
    shortCode: "88E",
    title: "Data 88E: Economic Models",
    teaser:
      "Economics concepts taught through Python and data-driven modeling.",
  },
  {
    href: "/courses/data-88b",
    shortCode: "88B",
    title: "Data 88B: Data and Decisions",
    teaser:
      "The goal of this course is to provide an understanding of how data and statistical analysis can improve managerial decision-making."
  },
  {
    href: "/courses/data-88c",
    shortCode: "88C",
    title: "Data 88C: Computational Structures in Data Science",
    teaser:
      "Core CS and programming ideas for data science, from fundamentals to abstraction.",
  },
];
