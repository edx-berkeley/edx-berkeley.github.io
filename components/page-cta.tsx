import Link from "next/link";

import { cn } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";

type PageCtaProps = {
  title: string;
  buttonLabel: string;
  href: string;
  description?: string;
  eyebrow?: string;
};

export function PageCta({ title, buttonLabel, href, description, eyebrow }: PageCtaProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <section className="section-surface-strong rounded-2xl border border-black/10 px-6 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#003262]">{eyebrow}</p>
        ) : null}
        <h2 className="font-sans text-2xl font-semibold text-zinc-950">{title}</h2>
        {description ? <p className="mt-3 text-zinc-600">{description}</p> : null}
        <div className="mt-6">
          <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "berkeley-focus-ring")}
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
