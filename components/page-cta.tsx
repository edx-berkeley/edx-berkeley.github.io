import NextLink from "next/link";

import { cn } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";

type PageCtaProps = {
  title: string;
  buttonLabel: string;
  href: string;
  description?: string;
};

export function PageCta({ title, buttonLabel, href, description }: PageCtaProps) {
  return (
    <section className="section-surface-strong rounded-2xl border border-black/10 px-6 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-sans text-2xl font-semibold text-zinc-950">{title}</h2>
        {description ? <p className="mt-3 text-zinc-600">{description}</p> : null}
        <div className="mt-6">
          <NextLink href={href} className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
            {buttonLabel}
          </NextLink>
        </div>
      </div>
    </section>
  );
}
