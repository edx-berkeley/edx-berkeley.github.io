'use client';

type GoToTopProps = {
  className?: string;
};

/** Scrolls to the absolute top (same as first paint), clears the URL hash without navigation. */
export function GoToTop({ className }: GoToTopProps) {
  return (
    <button
      type="button"
      aria-label="Go to top of page"
      className={className}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        const path = `${window.location.pathname}${window.location.search}`;
        window.history.replaceState(null, "", path);
      }}
    >
      ↑ Go to top
    </button>
  );
}
