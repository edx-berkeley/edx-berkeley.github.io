import { CourseLogo } from "@/components/course-logo";

type CourseCardArtworkProps = {
  shortCode: string;
  priority?: boolean;
};

export function CourseCardArtwork({ shortCode, priority }: CourseCardArtworkProps) {
  const suffix = shortCode.replace("88", "") as "E" | "B" | "C";
  if (!["E", "B", "C"].includes(suffix)) return null;

  return (
    <div className="section-surface-soft flex aspect-[16/10] w-full items-center justify-center px-4 py-5">
      <CourseLogo suffix={suffix} priority={priority} />
    </div>
  );
}
