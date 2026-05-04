import type { Metadata } from "next";

import { CoursePageLayout } from "@/components/course-page-layout";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Data 88B: Structures for Data Science",
  description:
    "Data 88B focuses on computational structures and program design for data science, aligned with Berkeley modular DS and the edX arc.",
};

export default function Data88BPage() {
  return (
    <CoursePageLayout
      title="Data 88B: Data and Decisions" /*https://cdss.berkeley.edu/data-science-connector-courses*/
      navLabel="88B"
      logoSuffix="B"
      tocPrefix="data88b"
      overview={
        <>
          <p>
          88B teaches you how to use data to make better decisions. The course focuses on the skills needed to frame questions, summarize and visualize data, draw conclusions from evidence (including hypothesis tests and confidence intervals), and build and interpret simple models such as regression. You learn to think critically about what data can and cannot tell us, run A/B tests and basic inference, and use tools like simulation and regression to support real-world decisions. The course is organized in three parts and includes Jupyter lab assignments, homework, and exams. It can be taken for free (audit) or with a paid verified certificate upon completion.
          </p>
          <p>
          This edX course is adapted from UC Berkeley’s 88B class. The structure, topics, and many of the labs and assignments are derived from or closely modeled on the materials used in that course.
          </p>
        </>
      }
      parts={[
        {
          title: "Part one: Data Exploration",
          content: (
            <>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-zinc-700">DATA88B.1: Data Exploration</p>
                  <p className="text-sm text-zinc-500">UC Berkeley</p>
                </div>

                <div id="data88b1-about" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">About this course (Part 1 of 3)</h3>
                  <p>
                    88B provides an in-depth exploration of data-driven decision making, from foundational concepts
                    through visualization and simulation. Part 1 covers introductory modules on data management,
                    probability, weighted averages, visualization, and simulation.
                  </p>
                </div>

                <div id="data88b1-topics" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Topics</h3>
                  <p>Part 1 (sometimes listed as 88.1X on edX) includes 5 modules:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      <span className="font-medium text-zinc-800">Module 1: Competing with a Big Box Retailer</span>:
                      Framing decisions with data, managing datasets, and comparing strategies.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 2: Probability &amp; Average</span>: Probability
                      and the mean, when to use averages, and interpreting them in context.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 3: Weighted Average</span>: Weighted averages,
                      choosing weights, and applications (e.g., airline reservations, surveys, reviews).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 4: Data Visualization</span>: Plots and charts
                      to explore data, communicate findings, and spot patterns or outliers.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 5: Simulation</span>: Using simulation to model
                      uncertainty, test strategies, and support “what-if” decisions.
                    </li>
                  </ol>
                  <p>Each module includes lecture content and Jupyter lab assignments.</p>
                </div>

                <div id="data88b1-structure" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Structure and assignments</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-zinc-800">Modules</span>: 5 content modules (plus “Succeeding in
                      This Course” where applicable).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Labs</span>: 3 Jupyter lab assignments.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Quizzes</span>: 1 quiz.
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          title: "Part two: Inferential Statistics",
          content: (
            <>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-zinc-700">
                    DATA88B.2: Inferential Statistics
                  </p>
                  <p className="text-sm text-zinc-500">UC Berkeley</p>
                </div>

                <div id="data88b2-about" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">About this course (Part 2 of 3)</h3>
                  <p>
                    88B continues with hypothesis testing, confidence intervals, A/B testing, and chi-squared tests.
                    Part 2 builds on Part 1 with inference and causal reasoning.
                  </p>
                </div>

                <div id="data88b2-topics" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Topics</h3>
                  <p>Part 2 (sometimes listed as 88.2X on edX) includes 5 modules:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      <span className="font-medium text-zinc-800">Module 6: One-sample t Hypothesis Test</span>:
                      One-sample t-tests, assumptions, p-values, and when the test is appropriate.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 7: Two-sample t Hypothesis Test &amp; ANOVA Test</span>:
                      Comparing two or more groups; two-sample t-tests and ANOVA.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 8: Confidence Interval</span>: Constructing and
                      interpreting confidence intervals for means and proportions.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 9: A/B Causality Test</span>: Designing and
                      analyzing A/B tests; correlation vs. causation.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 10: Chi-squared Test</span>: Testing
                      association between categorical variables; contingency tables.
                    </li>
                  </ol>
                  <p>Each module includes lecture content and Jupyter lab assignments.</p>
                </div>

                <div id="data88b2-structure" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Structure and assignments</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-zinc-800">Modules</span>: 5 content modules (plus “Succeeding in
                      This Course” where applicable).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Labs</span>: 5 Jupyter lab assignments.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Quizzes</span>: 5 quizzes.
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          title: "Part three: Linear Regression",
          content: (
            <>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-zinc-700">DATA88B.3: Linear Regression</p>
                  <p className="text-sm text-zinc-500">UC Berkeley</p>
                </div>

                <div id="data88b3-about" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">About this course (Part 3 of 3)</h3>
                  <p>
                    88B concludes with linear regression, multiple regression, non-linearity, logistic regression, and
                    interaction. Part 3 ties together modeling and regression for data-driven decisions.
                  </p>
                </div>

                <div id="data88b3-topics" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Topics</h3>
                  <p>Part 3 (sometimes listed as 88.3X on edX) includes 4 modules:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      <span className="font-medium text-zinc-800">Module 11: Linear Regression</span>: Fitting and
                      interpreting simple linear regression; R², residuals, prediction, and inference.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 12: Non-linearity</span>: Multiple regression,
                      non-linear patterns, and interpreting coefficients.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 13: Discontinuity, Trend, &amp; Seasonality</span>:
                      Discontinuity, trend, seasonality; logistic regression for binary outcomes.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 14: Interaction</span>: Interaction terms in
                      regression, interpretation and visualization; introduction to clustering.
                    </li>
                  </ol>
                  <p>Each module includes lecture content and Jupyter lab assignments.</p>
                </div>

                <div id="data88b3-structure" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Structure and assignments</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-zinc-800">Modules</span>: 4 content modules (plus “Succeeding in
                      This Course” where applicable).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Labs</span>: 4 Jupyter lab assignments.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Quizzes</span>: 4 quizzes.
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
      ]}
      cta={
        <PageCta
          title="Ready to enroll into Data 88B?"
          buttonLabel="Enroll now"
          href="https://www.edx.org/school/uc-berkeleyx"
        />
      }
    />
  );
}
