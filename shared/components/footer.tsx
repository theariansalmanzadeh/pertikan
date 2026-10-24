import Link from "next/link";

import {
  footerContact,
  footerLinkGroups,
  footerMeta,
  footerSocials,
} from "@/shared/contant/footer";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M14 8.5h2.5V5.8H14c-1.9 0-3.2 1.4-3.2 3.3V11H8.5v2.7h2.3V19h2.8v-5.3H16l.4-2.7h-2.8V9.4c0-.5.3-.9.8-.9Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" />
      <circle cx="12" cy="12" r="3.25" />
      <circle cx="16.35" cy="7.65" r="0.85" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
} as const;

export function Footer() {
  return (
    <footer className="bg-white px-6 pt-16 pb-10 md:px-10 md:pt-20 md:pb-12 lg:px-14">
      <div className="mx-auto ">
        {/* Desktop: brand + link groups in one grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-12 lg:gap-20">
          <div>
            <p className="font-belgan text-2xl text-neutral-900 md:text-[1.65rem]">
              {footerContact.brand}
            </p>
            <div className="mt-5 space-y-1 font-helvetica text-sm leading-relaxed text-neutral-600">
              {footerContact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="pt-1">
                {footerContact.phones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
              </div>
              <p className="pt-1">
                <a
                  href={footerContact.emailHref}
                  className="underline underline-offset-2 transition-opacity hover:opacity-70"
                >
                  {footerContact.email}
                </a>
              </p>
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <p className="font-helvetica text-sm text-neutral-400">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-helvetica text-sm text-neutral-800 transition-opacity hover:opacity-70"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: stacked brand, then grid for link groups */}
        <div className="md:hidden">
          <div className="pb-10 text-center">
            <p className="font-belgan text-2xl text-neutral-900">
              {footerContact.brand}
            </p>
            <div className="mt-5 space-y-1 font-helvetica text-sm leading-relaxed text-neutral-600">
              {footerContact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="pt-1">
                {footerContact.phones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
              </div>
              <p className="pt-1">
                <a
                  href={footerContact.emailHref}
                  className="underline underline-offset-2 transition-opacity hover:opacity-70"
                >
                  {footerContact.email}
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-10">
            <div className="grid grid-cols-2 gap-8">
              {footerLinkGroups.map((group) => (
                <div key={group.title}>
                  <p className="font-helvetica text-sm text-neutral-400">
                    {group.title}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="font-helvetica text-sm text-neutral-800 transition-opacity hover:opacity-70"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Socials + rights / company name */}
        <div className="mt-12 border-t border-neutral-200 pt-8 md:mt-16">
          <div className="flex flex-col items-center gap-8 md:hidden">
            <div className="flex items-center gap-4">
              {footerSocials.map((social) => {
                const Icon =
                  socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-full border border-neutral-400 text-neutral-700 transition-opacity hover:opacity-70"
                  >
                    {Icon ? <Icon className="size-4" /> : null}
                  </Link>
                );
              })}
            </div>

            <div className="w-full border-t border-neutral-200 pt-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-helvetica text-xs text-neutral-400">
                  {footerMeta.copyright}
                </p>
                <p className="font-helvetica text-xs text-neutral-400">
                  {footerMeta.credit}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              {footerSocials.map((social) => {
                const Icon =
                  socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-8 items-center justify-center rounded-full border border-neutral-400 text-neutral-700 transition-opacity hover:opacity-70"
                  >
                    {Icon ? <Icon className="size-3.5" /> : null}
                  </Link>
                );
              })}
            </div>

            <p className="font-helvetica text-xs text-neutral-400">
              {footerMeta.copyright}
            </p>

            <p className="font-helvetica text-xs text-neutral-400">
              {footerMeta.credit}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
