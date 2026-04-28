import type { Metadata } from "next";

import { CoursePageLayout } from "@/components/course-page-layout";

export const metadata: Metadata = {
  title: "Data 88E: Economic Models",
  description:
    "Data 88E connects data science to economics and policy, with materials aligned to the edX offering and Berkeley modular data science.",
};

export default function Data88EPage() {
  return (
    <CoursePageLayout
      title="Data 88E: Data Science for Economics"
      navLabel="88E"
      logoSuffix="E"
      tocPrefix="data88e"
      sidebarIndependentScroll={false}
      overview={
        <>
          <p>
          88E is an economics and data course offered on the edX platform, organized in three parts. It covers microeconomic and macroeconomic concepts with a data and modeling focus: demand and supply, government and welfare, production and macroeconomic policy, utility, inequality and development, game theory, econometrics, environmental economics, and finance. Each module includes lectures, a Jupyter lab, and a quiz. The course can be taken for free (audit) or with a paid verified certificate upon completion.
          </p>
          <p>
          This edX course is adapted from UC Berkeley’s Data 88E: Economic Models, whose official website and textbook are hosted at  {" "}
          <a
            href="https://data88e.org"
            className="font-medium text-[#003262] underline underline-offset-2"
          >
            data88e.org
          </a>
          . The topics, notebooks, and exercises here draw heavily from those open course materials and associated GitHub repositories.
          </p>
        </>
      }
      parts={[
        {
          title: "Part one: Fundamentals of Economics",
          content: (
            <>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-zinc-700">
                    DATA88E.1 — Fundamentals of Economics
                  </p>
                  <p className="text-sm text-zinc-500">UC Berkeley</p>
                </div>

                <div id="data88e1-about" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">About this course (Part 1 of 3)</h3>
                  <p>
                    88E is an economics and data course on the edX platform. Part 1 covers the foundations: demand,
                    supply, and government and welfare, with a focus on data and modeling.
                  </p>
                </div>

                <div id="data88e1-topics" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Topics</h3>
                  <p>Part 1 includes 3 modules:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      <span className="font-medium text-zinc-800">Module 1: Demand</span> — Demand concepts and
                      applications.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 2: Supply</span> — Supply and market
                      equilibrium.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 3: Government and Welfare</span> — Government
                      intervention, taxes, and welfare.
                    </li>
                  </ol>
                  <p>Each module includes lecture content, a lab, and a quiz.</p>
                </div>

                <div id="data88e1-structure" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Structure and assignments</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-zinc-800">Modules</span> — 3 content modules (plus “Succeeding in
                      This Course” where applicable).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Labs</span> — 3 Jupyter lab assignments.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Quizzes</span> — 3 (one per module).
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          title: "Part two: Advanced Concepts in Economics",
          content: (
            <>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-zinc-700">
                    DATA88E.2 — Advanced Concepts in Economics
                  </p>
                  <p className="text-sm text-zinc-500">UC Berkeley</p>
                </div>

                <div id="data88e2-about" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">About this course (Part 2 of 3)</h3>
                  <p>
                    88E builds on Part 1 with production and macroeconomic policy, utility (including LaTeX), and
                    inequality and development.
                  </p>
                </div>

                <div id="data88e2-topics" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Topics</h3>
                  <p>Part 2 includes 3 modules:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      <span className="font-medium text-zinc-800">
                        Module 4: Production and Macroeconomic Policy
                      </span>{" "}
                      — The Cobb–Douglas production function and macroeconomic policy.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 5: Utility and LaTeX</span> — Utility concepts
                      and introduction to LaTeX.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 6: Inequality and Development</span> — Modeling
                      income inequality and development.
                    </li>
                  </ol>
                  <p>Each module includes lecture content, a lab, and a quiz.</p>
                </div>

                <div id="data88e2-structure" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Structure and assignments</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-zinc-800">Modules</span> — 3 content modules (plus “Succeeding in
                      This Course” where applicable).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Labs</span> — 3 Jupyter lab assignments.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Quizzes</span> — 3 (one per module).
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          title: "Part three: Real-World Applications of Economics",
          content: (
            <>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-zinc-700">
                    DATA88E.3 — Real-World Applications of Economics
                  </p>
                  <p className="text-sm text-zinc-500">UC Berkeley</p>
                </div>

                <div id="data88e3-about" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">About this course (Part 3 of 3)</h3>
                  <p>88E concludes with game theory, econometrics, environmental economics, and finance.</p>
                </div>

                <div id="data88e3-topics" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Topics</h3>
                  <p>Part 3 includes 4 modules:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      <span className="font-medium text-zinc-800">Module 7: Game Theory</span> — Introduction to game
                      theory and strategic behavior.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 8: Econometrics</span> — Regression, estimation,
                      and inference.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 9: Environmental Economics</span> — Environmental
                      policy, MAC curves, and related applications.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 10: Finance</span> — Present value, discounting,
                      and basic finance concepts.
                    </li>
                  </ol>
                  <p>
                    The part also includes Downloading Your Notebooks and “Succeeding in This Course.” Each module
                    includes lecture content, a lab, and a quiz.
                  </p>
                </div>

                <div id="data88e3-structure" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Structure and assignments</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-zinc-800">Modules</span> — 4 content modules (plus Downloading
                      Your Notebooks and Succeeding in This Course).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Labs</span> — 4 Jupyter lab assignments.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Quizzes</span> — 4 (one per module).
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
