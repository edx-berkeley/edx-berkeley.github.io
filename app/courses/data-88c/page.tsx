import type { Metadata } from "next";

import { CoursePageLayout } from "@/components/course-page-layout";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Data 88C (C88C): Computational Structures in Data Science",
  description:
    "Introduction to computer science in the context of data science.",
};

export default function Data88CPage() {
  return (
    <CoursePageLayout
      title="Data 88C (C88C): Computational Structures in Data Science"
      navLabel="88C"
      logoSuffix="C"
      tocPrefix="data88c"
      overview={
        <>
          <p>
          C88C introduces computational thinking and programming concepts specifically tailored for data science applications. The course covers fundamental programming constructs, data structures, algorithms, and computational problem-solving techniques. Students learn Python programming with a focus on data manipulation, analysis, and visualization. Topics include variables, control structures, functions, lists, dictionaries, and basic algorithms. This course provides the computational foundation necessary for data science work and serves as a bridge between general programming and data-specific applications.
          </p>
          <p>
          This edX course is based on UC Berkeley’s Data C88C: Computational Structures in Data Science. The official Berkeley course website is{" "}
          <a
            href="https://c88c.org/sp26/"
            className="font-medium text-[#003262] underline underline-offset-2"
          >
            Data C88C Spring 2026
          </a>
          , and many of the lectures, labs, and assignments here are adapted from or closely follow the open educational resources provided there.
          </p>
        </>
      }
      parts={[
        {
          title: "Part one: Introduction to Python",
          content: (
            <>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-zinc-700">DATA88C.1 — Introduction to Python</p>
                  <p className="text-sm text-zinc-500">UC Berkeley</p>
                </div>

                <div id="data88c1-about" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">About this course (Part 1 of 3)</h3>
                  <p>
                    C88C: Computational Structures in Data Science introduces computational thinking and programming
                    concepts specifically tailored for data science applications. The course covers fundamental
                    programming constructs, data structures, algorithms, and computational problem-solving techniques.
                    Students learn Python programming with a focus on data manipulation, analysis, and visualization.
                  </p>
                  <p>
                    Part 1 builds the foundation in variables, control structures, functions, and core data types. This
                    part provides the computational base for the rest of the course and serves as a bridge between
                    general programming and data-specific applications.
                  </p>
                </div>

                <div id="data88c1-topics" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Topics</h3>
                  <p>Part 1 (sometimes listed as 88.1X on edX) includes 7 modules:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      <span className="font-medium text-zinc-800">Module 1: Introduction</span> — Computer Science vs.
                      Data Science, the data science process, and the role of algorithms.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 2: Abstractions and Functions</span> — Function
                      definitions, environment diagrams, doctests, and optional arguments.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 3: Iteration</span> — for and while loops,
                      control flow.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 4: Sequences and Containers</span> — Sequences,
                      tuples, and lists.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 5: Higher Order Functions</span> — Functions as
                      values, map, filter, reduce, and functions that return functions.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 6: Sequences and HOFs</span> — Lambdas and list
                      comprehensions.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 7: Mutable Data</span> — Mutability, identity,
                      dictionaries, and mutation with function arguments.
                    </li>
                  </ol>
                  <p>The part ends with Review and Wrap-up for 88.1X.</p>
                </div>

                <div id="data88c1-structure" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Structure and assignments</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-zinc-800">Modules</span> — 7 content modules (plus “Succeeding in
                      this Course” and Review and Wrap-up).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Labs</span> — 4 Jupyter lab assignments (Modules 1, 2,
                      3, and 6).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Quizzes</span> — 7 quizzes (one per module).
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          title: "Part two: Recursion and Object-Oriented Programming",
          content: (
            <>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-zinc-700">
                    DATA88C.2 — Recursion and Object-Oriented Programming
                  </p>
                  <p className="text-sm text-zinc-500">UC Berkeley</p>
                </div>

                <div id="data88c2-about" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">About this course (Part 2 of 3)</h3>
                  <p>
                    C88C: Computational Structures in Data Science introduces computational thinking and programming
                    concepts specifically tailored for data science applications. The course covers fundamental
                    programming constructs, data structures, algorithms, and computational problem-solving techniques.
                  </p>
                  <p>
                    Part 2 focuses on recursion, abstract data types (ADTs), and object-oriented programming (OOP) in
                    Python, building directly on the foundations from Part 1.
                  </p>
                </div>

                <div id="data88c2-topics" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Topics</h3>
                  <p>Part 2 (sometimes listed as 88.2X on edX) includes 5 modules:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      <span className="font-medium text-zinc-800">Module 8: Abstract Data Types</span> — ADTs, the Point
                      ADT, and examples (e.g., bank accounts).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 9: Recursion</span> — Introduction to recursion,
                      countdown, sum, sequences, and palindromes.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 10: Tree Recursion</span> — Tree recursion and
                      applications (e.g., counting change, Fibonacci).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 11: Object-Oriented Programming (OOP)</span> —
                      Classes, attributes, magic methods, and the OOP style.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 12: OOP - Inheritance</span> — Inheritance and
                      extending classes.
                    </li>
                  </ol>
                  <p>The part ends with Review and Wrap-up for 88.2X.</p>
                </div>

                <div id="data88c2-structure" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Structure and assignments</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-zinc-800">Modules</span> — 5 content modules (plus “Succeeding in
                      this Course” and Review and Wrap-up).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Labs</span> — 4 Jupyter lab assignments (Modules 8, 9,
                      10, and 11).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Quizzes</span> — 5 quizzes (one per module).
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          title: "Part three: Working with Data Structures",
          content: (
            <>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-zinc-700">
                    DATA88C.3 — Working with Data Structures
                  </p>
                  <p className="text-sm text-zinc-500">UC Berkeley</p>
                </div>


                <div id="data88c3-about" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">About this course (Part 3 of 3)</h3>
                  <p>
                    C88C: Computational Structures in Data Science introduces computational thinking and programming
                    concepts specifically tailored for data science applications. The course covers fundamental
                    programming constructs, data structures, algorithms, and computational problem-solving techniques.
                  </p>
                  <p>
                    Part 3 focuses on efficiency, linked and tree structures, iterators and generators, programming
                    paradigms, and databases with SQL, tying together the ideas from Parts 1 and 2.
                  </p>
                </div>

                <div id="data88c3-topics" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Topics</h3>
                  <p>Part 3 includes 7 modules:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>
                      <span className="font-medium text-zinc-800">Module 13: Efficiency and Runtime Analysis</span> —
                      Measuring and improving efficiency, runtime analysis.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 14: Data Structures: Linked Lists</span> — Linked
                      lists: introduction, context, practice, and wrap-up.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 15: Data Structures: Trees</span> — Trees:
                      overview, counting, and searching.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 16: Iterators and Generators</span> — Iterators
                      (including range), implementing iterators, generator functions and generator expressions.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 17: Programming Paradigms</span> — Overview of
                      imperative, functional, and OOP styles; declarative programming.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 18: Databases and SQL</span> — Databases
                      overview, interacting with databases, SQL introduction, manipulation, filtering, aggregation, and
                      joins.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Module 19: SQL Part 2</span> — Further SQL and type
                      checking.
                    </li>
                  </ol>
                  <p>The part ends with Review and Wrap-up.</p>
                </div>

                <div id="data88c3-structure" className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">Structure and assignments</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium text-zinc-800">Modules</span> — 7 content modules (plus “Succeeding in
                      this Course” and Review and Wrap-up).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Labs</span> — 4 Jupyter lab assignments (Modules 14, 15,
                      16, and 19).
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Quizzes</span> — 7 quizzes (one per module).
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
          title="Ready to enroll into Data 88C?"
          buttonLabel="Enroll now"
          href="https://www.edx.org/school/uc-berkeleyx"
        />
      }
    />
  );
}
