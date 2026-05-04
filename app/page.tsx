import NextLink from "next/link";
import Image from "next/image";

import { cn } from "@heroui/react";
import { Card } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";

import { CourseCardArtwork } from "@/components/course-card-artwork";
import { PageCta } from "@/components/page-cta";
import { BERKELEYX_SCHOOL_URL, courseNav } from "@/lib/course-nav";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-6">
      <section className="section-surface-soft mx-auto rounded-3xl px-6 py-10 sm:px-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#003262]">UC BerkeleyX Data Science</p>
            <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              Find the right Berkeley data science course path on edX
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
              Explore UC Berkeley-aligned course pathways, compare each course focus in seconds, and move directly to
              enrollment when you are ready.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="berkeley-chip">Audit for free</span>
              <span className="berkeley-chip">Verified certificate option</span>
              <span className="berkeley-chip">Three-part course structure</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BERKELEYX_SCHOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "berkeley-focus-ring")}
              >
                Enroll with BerkeleyX on edX
              </a>
              <a href="#courses-heading" className="berkeley-outline-button berkeley-focus-ring px-4 py-2.5 text-sm font-semibold">
                Compare courses
              </a>
            </div>
          </div>
          <div className="section-surface-muted rounded-2xl p-6">
            <h2 className="font-sans text-xl font-semibold text-zinc-950">How learners use this site</h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600">
              <li>
                <strong className="text-zinc-800">1. Compare quickly</strong>: Review focus areas and expected journey
                for 88E, 88B, and 88C.
              </li>
              <li>
                <strong className="text-zinc-800">2. Validate fit</strong>: Open each course page for syllabus-level
                details and sequence.
              </li>
              <li>
                <strong className="text-zinc-800">3. Enroll confidently</strong>: Use direct enrollment paths to
                BerkeleyX on edX.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="courses-heading" className="section-surface-soft mx-auto mt-12 rounded-3xl px-6 py-10 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="courses-heading" className="font-sans text-2xl font-semibold text-zinc-950">
            Compare Berkeley Data 88 courses
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Choose the course that matches your goals, then go deeper on the course page.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courseNav.map((course, index) => (
            <Card.Root
              key={course.href}
              variant="default"
              className="section-surface-soft flex flex-col overflow-hidden rounded-2xl border border-[#003262]/10 shadow-md shadow-[#003262]/5"
            >
              <div className="border-b border-[#003262]/10">
                <CourseCardArtwork shortCode={course.shortCode} priority={index === 0} />
              </div>
              <Card.Header>
                <Card.Title className="font-sans text-xl text-[#003262]">{course.title}</Card.Title>
                <Card.Description>Data {course.shortCode}</Card.Description>
              </Card.Header>
              <Card.Content className="flex flex-1 flex-col">
                <p className="text-sm leading-relaxed text-zinc-600">{course.teaser}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="berkeley-chip">{course.audience}</span>
                  <span className="berkeley-chip">{course.workload}</span>
                </div>
              </Card.Content>
              <Card.Footer className="mt-auto flex justify-between gap-3 border-t-0 pt-3">
                <NextLink href={course.href} className={cn(buttonVariants({ variant: "primary" }), "berkeley-focus-ring")}>
                  Explore course
                </NextLink>
                <a
                  href={course.enrollHref ?? BERKELEYX_SCHOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="berkeley-outline-button berkeley-focus-ring px-3 py-2 text-sm font-semibold"
                >
                  Enroll
                </a>
              </Card.Footer>
            </Card.Root>
          ))}
        </div>
      </section>

      <section aria-labelledby="edx-structure-heading" className="section-surface-muted mx-auto mt-12 max-w-5xl rounded-3xl px-6 py-10 sm:px-8">
        <h2 id="edx-structure-heading" className="text-center font-sans text-2xl font-semibold text-zinc-950">
          Berkeley collaboration on edX
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3 text-sm font-medium text-zinc-700">
          <span>In collaboration with</span>
          <Image src="/edx-logo.svg" alt="edX logo" width={70} height={22} className="h-6 w-auto" />
          <a
            href={BERKELEYX_SCHOOL_URL}
            className="berkeley-focus-ring rounded text-[#003262] underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            UC BerkeleyX on edX
          </a>
        </div>
        <div className="mt-8 grid gap-6 text-zinc-600 md:grid-cols-2">
          <div className="rounded-xl bg-white/80 p-5">
            <h3 className="font-sans text-lg font-semibold text-zinc-900">Course format</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              <li>
                <strong className="font-medium text-zinc-800">Part 1</strong>: foundations and setup.
              </li>
              <li>
                <strong className="font-medium text-zinc-800">Part 2</strong>: core methods and applications.
              </li>
              <li>
                <strong className="font-medium text-zinc-800">Part 3</strong>: advanced synthesis.
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/80 p-5">
            <h3 className="font-sans text-lg font-semibold text-zinc-900">Access and certificates</h3>
            <p className="mt-3 leading-relaxed">
              Start with free audit access and upgrade to a verified certificate when needed. All learners follow the
              same BerkeleyX-aligned learning materials.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-4xl">
        <PageCta
          eyebrow="Enrollment"
          title="Ready to enroll into a course?"
          description="Start with BerkeleyX and choose the Data 88 pathway that matches your goals."
          buttonLabel="Enroll in a Berkeley edX course"
          href={BERKELEYX_SCHOOL_URL}
        />
      </div>
    </main>
  );
}
  