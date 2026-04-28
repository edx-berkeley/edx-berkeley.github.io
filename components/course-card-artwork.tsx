import Image from "next/image";

/** Homepage tile art: signpost — 88B, dashboard — 88E, poly brain — 88C (`public/course-cards/`). */
const CARD_ART = {
  "88B": {
    src: "/course-cards/88b.png",
    alt: "Illustration of choices and pathways for Data and Decisions",
  },
  "88E": {
    src: "/course-cards/88e.png",
    alt: "Illustration of data analysis and dashboards for Economic Models",
  },
  "88C": {
    src: "/course-cards/88c.png",
    alt: "Illustration of computational thinking for Data 88C",
  },
} as const;

type CardArtKey = keyof typeof CARD_ART;

type CourseCardArtworkProps = {
  shortCode: string;
  priority?: boolean;
};

export function CourseCardArtwork({ shortCode, priority }: CourseCardArtworkProps) {
  const art = CARD_ART[shortCode as CardArtKey];
  if (!art) return null;

  return (
    <div className="relative aspect-[16/10] w-full bg-gradient-to-b from-emerald-50/40 to-zinc-50">
      <Image
        src={art.src}
        alt={art.alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
        className="object-contain object-center p-4"
      />
    </div>
  );
}
