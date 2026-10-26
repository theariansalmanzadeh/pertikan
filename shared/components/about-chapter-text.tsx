import type { AboutChapter } from "@/shared/contant/about";

type AboutChapterTextProps = {
  chapter: AboutChapter;
};

export function AboutChapterText({ chapter }: AboutChapterTextProps) {
  return (
    <>
      <p className="font-helvetica text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
        {chapter.eyebrow}
      </p>
      <h2 className="mt-4 font-belgan text-2xl font-bold leading-tight text-neutral-900 md:text-3xl lg:text-4xl">
        {chapter.title}
      </h2>
      <div className="mt-8 space-y-5 font-helvetica text-sm leading-relaxed text-neutral-500 md:text-[0.9375rem] md:leading-7">
        {chapter.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </>
  );
}
