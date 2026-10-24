import { aboutStewardshipParagraphs } from "@/shared/contant/about";

export function AboutImageText() {
  return (
    <section className="grid grid-cols-2">
      <div
        className="relative min-h-[280px] bg-neutral-100 sm:min-h-full"
        aria-label="About image placeholder"
      >
        {/* Image goes here */}
      </div>

      <div className="flex flex-col justify-center bg-white p-4 sm:p-16">
        <div className="space-y-5 font-helvetica text-sm leading-relaxed text-neutral-500 md:text-[0.9375rem] md:leading-7">
          {aboutStewardshipParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
