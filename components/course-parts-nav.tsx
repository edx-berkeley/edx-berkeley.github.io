'use client';

import { useEffect, useId, useRef, useState } from 'react';

const PART_IDS = ['course-part-1', 'course-part-2', 'course-part-3'] as const;

export function CoursePartsNav({
  partTitles,
}: {
  partTitles: readonly [string, string, string];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnId = useId();
  const menuId = useId();

  useEffect(() => {
    function handlePointerDown(event: MouseEvent | PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        id={btnId}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-[#003262] shadow-sm transition-colors hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003262]"
        onClick={() => setOpen((v) => !v)}
      >
        Jump to part
        <span aria-hidden className="text-xs text-zinc-500">
          ▾
        </span>
      </button>

      {open ? (
        <div
          id={menuId}
          role="navigation"
          aria-label="Course parts"
          className="absolute right-0 z-50 mt-2 min-w-[min(100vw-2rem,18rem)] max-w-[calc(100vw-2rem)] rounded-lg border border-black/10 bg-white py-1 shadow-lg ring-1 ring-black/5"
        >
          {PART_IDS.map((slug, index) => (
            <a
              key={slug}
              href={`#${slug}`}
              className="block px-3 py-2.5 text-sm leading-snug text-zinc-700 transition-colors hover:bg-[#003262]/5 hover:text-zinc-900 focus-visible:bg-[#003262]/5 focus-visible:outline-none"
              onClick={() => setOpen(false)}
            >
              <span className="font-semibold text-[#003262]">Part {index + 1}</span>
              <span className="mt-0.5 block font-normal text-zinc-600">
                {partTitles[index].replace(/^Part (one|two|three): /i, '')}
              </span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
