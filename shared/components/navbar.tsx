"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { MobileNavbar } from "@/shared/components/mobile-navbar";
import { cn } from "@/lib/utils";
import LiquidGlass from "liquid-glass-react";

const navLinks = [
  { href: "/about-us", label: "Our Story" },
  { href: "#the-collection", label: "The Collection" },
  { href: "#our-crafts", label: "Our Crafts" },
] as const;

type NavbarProps = {
  variant?: "overlay" | "light";
};

export function Navbar({ variant = "overlay" }: NavbarProps) {
  const isLight = variant === "light";
  const router = useRouter();

  return (
    <>
      <MobileNavbar variant={variant} />

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
            <LiquidGlass
              blurAmount={50}
              className="font-helvetica text-sm font-medium text-white"
              padding="10px 28px"
              cornerRadius={999}
              style={{ position: "absolute", top: "50%", left: "50%" }}
              onClick={() => router.push("#shop")}
            >
              <span>
                Shop
              </span>
            </LiquidGlass>
          </div>
        </div>
      </nav>
    </>
  );
}
