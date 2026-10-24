import Link from "next/link";

import { Input } from "@/shared/components/ui/input";
import { footerContact } from "@/shared/contant/footer";

export function ContactUs() {
  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="grid grid-cols-1 content-start gap-8">
          <div className="grid grid-cols-1 gap-3">
            <h1 className="font-belgan text-3xl font-bold text-neutral-900 md:text-4xl">
              Contact Us
            </h1>
            <p className="font-helvetica text-sm leading-relaxed text-neutral-500 md:text-base">
              We would love to hear from you — whether about our mead, honey, or
              a visit to the apiary.
            </p>
          </div>

          <div className="border-t border-border" />

          <div className="grid grid-cols-1 gap-6 font-helvetica text-sm leading-relaxed text-neutral-700">
            <div className="grid grid-cols-1 gap-1">
              {footerContact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-1">
              {footerContact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {phone}
                </a>
              ))}
            </div>

            <a
              href={footerContact.emailHref}
              className="underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              {footerContact.email}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 content-start gap-8">
          <h2 className="font-belgan text-3xl font-bold text-neutral-900 md:text-4xl">
            Write to Us
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
                Phone Number <span className="text-neutral-400">*</span>
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
                Company Name
              </span>
              <Input
                name="company"
                autoComplete="organization"
                className="h-11 rounded-full border-neutral-200 px-4"
              />
            </label>

            <label className="grid grid-cols-1 gap-2">
              <span className="font-helvetica text-sm text-neutral-700">
                Your Email <span className="text-neutral-400">*</span>
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
                Message
              </span>
              <Input
                name="message"
                className="h-11 rounded-full border-neutral-200 px-4"
              />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="h-11 w-full rounded-full bg-neutral-900 font-helvetica text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto sm:px-10"
              >
                Send Message
              </button>
            </div>
          </form>

          <p className="font-helvetica text-xs text-neutral-400">
            Or email us directly at{" "}
            <Link
              href={footerContact.emailHref}
              className="underline underline-offset-2"
            >
              {footerContact.email}
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
