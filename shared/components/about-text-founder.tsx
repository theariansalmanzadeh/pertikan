import { aboutFounder, aboutStewardshipParagraphs } from "@/shared/contant/about";

export function AboutTextFounder() {
  return (
    <section className="grid grid-cols-2">
      <div className="flex flex-col justify-center bg-white p-4 sm:p-16">
        <div className="space-y-5 font-helvetica text-sm leading-relaxed text-neutral-500 md:text-[0.9375rem] md:leading-7">
          {aboutStewardshipParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

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

      <div
        className="relative min-h-[280px] bg-neutral-100 sm:min-h-full"
        aria-label="Founder image placeholder"
      >
        {/* Image goes here */}
      </div>
    </section>
  );
}
