import { AboutChapterImage } from "@/shared/components/about-chapter-image";
import { AboutChapterText } from "@/shared/components/about-chapter-text";
import type { AboutChapter } from "@/shared/contant/about";

type AboutStoryProps = {
  chapter: AboutChapter;
};

export function AboutStory({ chapter }: AboutStoryProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center bg-white px-6 py-12 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <AboutChapterText chapter={chapter} />
      </div>

      <AboutChapterImage image={chapter.image} />
    </section>
  );
}
