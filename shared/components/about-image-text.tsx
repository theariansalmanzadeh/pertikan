import { AboutChapterImage } from "@/shared/components/about-chapter-image";
import { AboutChapterText } from "@/shared/components/about-chapter-text";
import type { AboutChapter } from "@/shared/contant/about";

type AboutImageTextProps = {
  chapter: AboutChapter;
};

export function AboutImageText({ chapter }: AboutImageTextProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <AboutChapterImage image={chapter.image} className="order-2 md:order-1" />

      <div className="order-1 flex flex-col justify-center bg-white px-6 py-12 sm:px-10 sm:py-16 md:order-2 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <AboutChapterText chapter={chapter} />
      </div>
    </section>
  );
}
