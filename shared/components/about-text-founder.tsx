import { AboutChapterImage } from "@/shared/components/about-chapter-image";
import { AboutChapterText } from "@/shared/components/about-chapter-text";
import { aboutFounder, type AboutChapter } from "@/shared/contant/about";

type AboutTextFounderProps = {
  chapter: AboutChapter;
};

export function AboutTextFounder({ chapter }: AboutTextFounderProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center bg-white px-6 py-12 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <AboutChapterText chapter={chapter} />

        <div className="mt-10 border-t border-neutral-200 pt-8">
          <div className="flex items-center gap-4">
            <div
              className="size-12 shrink-0 rounded-full bg-neutral-200"
              aria-hidden
            />
            <div>
              <p className="font-belgan text-lg font-bold text-neutral-900 md:text-xl">
                {aboutFounder.name}
              </p>
              <p className="mt-0.5 font-helvetica text-xs tracking-wide text-neutral-400 md:text-sm">
                {aboutFounder.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      <AboutChapterImage image={chapter.image} />
    </section>
  );
}
