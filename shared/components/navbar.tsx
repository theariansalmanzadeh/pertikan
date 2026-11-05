"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { MobileNavbar } from "@/shared/components/mobile-navbar";
import { navLinks } from "@/shared/contant/nav";
import { cn } from "@/lib/utils";

type NavbarProps = {
  variant?: "overlay" | "light";
};

export function Navbar({ variant }: NavbarProps) {
  const pathname = usePathname();
  const resolvedVariant =
    variant ?? (pathname === "/" ? "overlay" : "light");
  const isLight = resolvedVariant === "light";
  const router = useRouter();

  return (
    <>
      <MobileNavbar variant={resolvedVariant} />

      <nav
        className={cn(
          "inset-x-0 top-0 z-20 hidden sm:block",
          isLight ? "relative bg-white" : "absolute bg-transparent"
        )}
      >
        <div className="relative mx-auto flex w-full items-center justify-between px-[68px] py-6 md:px-10 lg:px-14">
          <Link
            href="/"
            className={cn(
              "pointer-events-auto font-belgan text-3xl tracking-wide md:text-4xl",
              isLight ? "text-neutral-900" : "text-white"
            )}
          >
            Pertikan
          </Link>

          <ul className="flex items-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-helvetica text-sm tracking-wide transition-opacity hover:opacity-80",
                    isLight ? "text-neutral-900" : "text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/*
            LiquidGlass returns a Fragment of several absolutely/relatively
            positioned layers (not a single node). Keep it out of the flex
            flow in a fixed-size slot so those layers don't become extra
            flex children and collapse the Shop control.
          */}
          <div className="relative h-11 w-[7.25rem] shrink-0">
            <button
              type="button"
              onClick={() => router.push("#shop")}
              className={cn(
                "absolute inset-0 rounded-full font-helvetica text-sm font-medium transition-colors",
                isLight
                  ? "bg-black text-white hover:bg-neutral-800"
                  : "bg-white text-black hover:bg-neutral-100"
              )}
            >
              Shop
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
