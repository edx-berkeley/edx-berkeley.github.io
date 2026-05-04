import NextLink from "next/link";
import Image from "next/image";

import { cn } from "@heroui/react";
import { Card } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";

import { CourseCardArtwork } from "@/components/course-card-artwork";
import { PageCta } from "@/components/page-cta";
import { courseNav } from "@/lib/course-nav";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#003262]">
          UC Berkeley · Open Data Science
        </p>
        <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Learn Data Science Courses on edX, same storyline on campus
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
          These pages introduce our edX-aligned Data Science Courses offerings: modular notebooks, checkpoints, and project beats
          that intentionally track the online courses so learners and adopters stay on the same material whether they
          study on edX or through Berkeley-affiliated pathways.
        </p>
      </div>
      <section aria-labelledby="courses-heading" className="section-surface-soft mx-auto mt-20 max-w-5xl rounded-2xl px-6 py-10 sm:px-8">
        <h2 id="courses-heading" className="text-center font-sans text-2xl font-semibold text-zinc-950">
          Courses
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600">
          Each course has its own page (overview plus three numbered parts), with an illustration at the top of each tile.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courseNav.map((course, index) => (
            <Card.Root key={course.href} variant="default" className="flex flex-col overflow-hidden border border-black/[0.06] shadow-sm">
              <div className="border-b border-black/[0.06] bg-gradient-to-b from-zinc-50 to-white">
                <CourseCardArtwork shortCode={course.shortCode} priority={index === 0} />
              </div>
              <Card.Header>
                <Card.Title className="font-sans text-xl text-[#003262]">{course.title}</Card.Title>
                <Card.Description>Data {course.shortCode}</Card.Description>
              </Card.Header>
              <Card.Content className="flex flex-1 flex-col">
                <p className="text-sm leading-relaxed text-zinc-600">{course.teaser}</p>
              </Card.Content>
              <Card.Footer className="mt-auto justify-end border-t-0 pt-2">
                <NextLink href={course.href} className={cn(buttonVariants({ variant: "primary" }))}>
                  Course page
                </NextLink>
              </Card.Footer>
            </Card.Root>
          ))}
        </div>
      </section>

      <section aria-labelledby="edx-structure-heading" className="section-surface-muted mx-auto mt-20 max-w-3xl rounded-2xl px-6 py-10 sm:px-8">
        <h2 id="edx-structure-heading" className="text-center font-sans text-2xl font-semibold text-zinc-950">
          How these courses work on edX
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3 text-sm font-medium text-zinc-700">
          <span>In collaboration with</span>
          <Image src="/edx-logo.svg" alt="edX logo" width={70} height={22} className="h-6 w-auto" />
          <a
            href="https://www.edx.org/school/uc-berkeleyx"
            className="text-[#003262] underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            UC BerkeleyX on edX
          </a>
        </div>
        <div className="mt-8 space-y-8 text-zinc-600">
          <div className="space-y-3">
            <h3 className="font-sans text-lg font-semibold text-zinc-900">Structure</h3>
            <p className="leading-relaxed">
              Each course is organized into <strong className="font-medium text-zinc-800">three parts</strong>, aligned
              with the Part 1, Part 2, and Part 3 pages linked from each course above:
            </p>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed">
              <li>
                <strong className="font-medium text-zinc-800">Part 1</strong>: Foundations, core concepts, setup, and
                the basics.
              </li>
              <li>
                <strong className="font-medium text-zinc-800">Part 2</strong>: Core content, main topics, methods, and
                applications.
              </li>
              <li>
                <strong className="font-medium text-zinc-800">Part 3</strong>: Advanced material and synthesis.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-sans text-lg font-semibold text-zinc-900">Access and certificates</h3>
            <p className="leading-relaxed">
              Enroll through{" "}
              <a
                href="https://www.edx.org/school/uc-berkeleyx"
                className="font-medium text-[#003262] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                UC BerkeleyX on edX
              </a>
              . You can take these courses for free (audit) and get full access to the content. If you want a verified
              certificate, you have to pay the certificate fee on edX. Content is the same either way; payment is only
              for the credential.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-20 max-w-3xl">
        <PageCta
          title="Ready to enroll into a course?"
          buttonLabel="Enroll in a Berkeley edX course"
          href="https://www.edx.org/school/uc-berkeleyx"
        />
      </div>
    </main>
  );
}
  