import Link from "next/link";

import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import {
  contactAddress,
  contactEmail,
  contactIntro,
  contactPhone,
} from "@/shared/contant/contact";

export function ContactUs() {
  return (
    <section className="grid grid-cols-1 bg-white sm:grid-cols-2">
      <section
        aria-label="Kontaktinformationen der Imkerei"
        className="flex flex-col justify-center border-b border-neutral-200 px-6 py-12 md:px-10 md:py-16 lg:border-r lg:border-b-0 lg:px-16 lg:py-[180px]"
      >
        <div className="max-w-[460px]">
          <h1 className="mb-4 font-belgan text-[26px] leading-[1.15] text-neutral-900 md:text-[32px]">
            {contactIntro.title}
          </h1>
          <p className="mb-7 border-b border-neutral-200 pb-7 font-helvetica text-[13.5px] leading-[1.68] text-neutral-400">
            {contactIntro.text}
          </p>

          <div className="grid grid-cols-1 gap-7 font-helvetica text-sm leading-[1.65] text-neutral-800">
            <div>
              <p className="mb-2 text-xs text-neutral-400">
                {contactAddress.title}
              </p>
              <address className="not-italic">
                {contactAddress.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>

            <div>
              <p className="mb-2 text-xs text-neutral-400">
                {contactPhone.title}
              </p>
              {contactPhone.numbers.map((phone) => (
                <p key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="transition-opacity hover:opacity-70"
                  >
                    {phone}
                  </a>
                </p>
              ))}
              <p className="mt-1 text-neutral-500">{contactPhone.hours}</p>
            </div>

            <div>
              <p className="mb-2 text-xs text-neutral-400">
                {contactEmail.title}
              </p>
              <a
                href={contactEmail.href}
                className="underline underline-offset-4 transition-colors hover:text-neutral-900"
              >
                {contactEmail.address}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-[180px]">
        <div className="grid max-w-[560px] grid-cols-1 content-start gap-8">
          <h2 className="font-belgan text-3xl font-bold text-neutral-900 md:text-4xl">
            Schreiben Sie uns
          </h2>

          <form className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-5">
            <label className="grid grid-cols-1 gap-2">
              <span className="font-helvetica text-sm text-neutral-700">
                Name <span className="text-neutral-400">*</span>
              </span>
              <Input
                name="name"
                required
                autoComplete="name"
                className="h-11 rounded-full border-neutral-200 px-4"
              />
            </label>

            <label className="grid grid-cols-1 gap-2">
              <span className="font-helvetica text-sm text-neutral-700">
                Telefonnummer <span className="text-neutral-400">*</span>
              </span>
              <Input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="h-11 rounded-full border-neutral-200 px-4"
              />
            </label>

            <label className="grid grid-cols-1 gap-2">
              <span className="font-helvetica text-sm text-neutral-700">
                Firmenname
              </span>
              <Input
                name="company"
                autoComplete="organization"
                className="h-11 rounded-full border-neutral-200 px-4"
              />
            </label>

            <label className="grid grid-cols-1 gap-2">
              <span className="font-helvetica text-sm text-neutral-700">
                Ihre E-Mail <span className="text-neutral-400">*</span>
              </span>
              <Input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="h-11 rounded-full border-neutral-200 px-4"
              />
            </label>

            <label className="grid grid-cols-1 gap-2 sm:col-span-2">
              <span className="font-helvetica text-sm text-neutral-700">
                Nachricht
              </span>
              <Textarea
                name="message"
                rows={6}
                className="min-h-36 rounded-2xl border-neutral-200 px-4 py-3 leading-relaxed"
              />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="h-11 w-full rounded-full bg-neutral-900 font-helvetica text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto sm:px-10"
              >
                Nachricht senden
              </button>
            </div>
          </form>

          <p className="font-helvetica text-xs text-neutral-400">
            Oder schreiben Sie uns direkt an{" "}
            <Link
              href={contactEmail.href}
              className="underline underline-offset-2"
            >
              {contactEmail.address}
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
