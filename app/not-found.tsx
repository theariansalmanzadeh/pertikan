import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-24 text-center">
      <h1 className="font-belgan max-w-xl text-3xl leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
        Hier sind Sie leider nicht ganz am süßen Punkt.
      </h1>

      <p className="mt-6 max-w-md font-helvetica text-sm leading-relaxed text-neutral-400 sm:text-base">
        Die gesuchte Seite ist nirgends zu finden. Zum Glück gibt es bei
        Pertikan mehr zu entdecken, als der Bienenstock auf den ersten Blick
        verrät.
      </p>

      <Button
        asChild
        className="mt-10 h-11 rounded-full bg-neutral-900 px-7 font-helvetica text-sm font-medium text-white hover:bg-neutral-800"
      >
        <Link href="/">
          Zurück zu Pertikan
          <ArrowRight className="size-4" data-icon="inline-end" />
        </Link>
      </Button>
    </main>
  );
}
