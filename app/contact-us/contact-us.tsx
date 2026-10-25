import Link from "next/link";

import { Input } from "@/shared/components/ui/input";
import { footerContact } from "@/shared/contant/footer";

export function ContactUs() {
  return (
    <section className="grid grid-cols-1 bg-white sm:grid-cols-2">
      <section
        aria-label="Apiary Contact Information"
        className="flex flex-col justify-center border-b border-neutral-200 px-6 py-12 md:px-10 md:py-16 lg:border-r lg:border-b-0 lg:px-16 lg:py-[180px]"
      >
        <div className="max-w-[460px]">
          <h1 className="mb-4 font-belgan text-[26px] leading-[1.15] text-neutral-900 md:text-[32px]">
            From the Hive to Your Table.
          </h1>
          <p className="mb-7 border-b border-neutral-200 pb-7 font-helvetica text-[13.5px] leading-[1.68] text-neutral-400">
            Whether you are curating a wine list, seeking private cellar
            allocations of our 18-month aged Uhudler mead, or inquiring about
            seasonal raw blossom honey, we welcome conversations with
            sommeliers, hospitality partners, and private collectors.
          </p>

          <address className="mb-4 font-helvetica text-sm leading-[1.65] text-neutral-800 not-italic">
            {footerContact.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>

          <div className="mb-4 font-helvetica text-sm leading-[1.65] text-neutral-800">
            {footerContact.phones.map((phone) => (
              <p key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {phone}
                </a>
              </p>
            ))}
          </div>

          <a
            href={footerContact.emailHref}
            className="font-helvetica text-sm text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-900"
          >
            {footerContact.email}
          </a>
        </div>
      </section>

      <div className="flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-[180px]">
        <div className="grid max-w-[560px] grid-cols-1 content-start gap-8">
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
