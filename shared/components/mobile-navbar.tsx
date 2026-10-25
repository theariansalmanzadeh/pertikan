"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { navLinks } from "@/shared/contant/nav";
import { cn } from "@/lib/utils";

type MobileNavbarProps = {
  variant?: "overlay" | "light";
};

export function MobileNavbar({ variant = "overlay" }: MobileNavbarProps) {
  const isLight = variant === "light";

  return (
    <nav
      className={cn(
        "inset-x-0 top-0 z-20 sm:hidden",
        isLight ? "relative bg-white" : "absolute bg-transparent"
      )}
    >
      <div className="flex w-full items-center justify-between px-5 py-5">
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className={cn(
                "flex size-10 items-center justify-center",
                isLight ? "text-neutral-900" : "text-[#fafafa]"
              )}
            >
              <Menu className="size-6" strokeWidth={1.5} />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[85%] max-w-sm bg-white p-0">
            <SheetHeader className="border-b border-border px-6 py-5">
              <SheetTitle className="font-belgan text-2xl font-normal text-neutral-900">
                Pertikan
              </SheetTitle>
            </SheetHeader>

            <ul className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SheetClose asChild>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-3 font-helvetica text-base text-neutral-900 transition-colors hover:bg-neutral-100"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-border p-6">
              <SheetClose asChild>
                <Button
                  asChild
                  className="h-11 w-full rounded-full bg-neutral-900 font-helvetica text-sm font-medium text-white hover:bg-neutral-800"
                >
                  <Link href="#shop">Shop</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link
          href="/"
          className={cn(
            "absolute left-1/2 -translate-x-1/2 font-belgan text-2xl tracking-wide",
            isLight ? "text-neutral-900" : "text-[#fafafa]"
          )}
        >
          Pertikan
        </Link>

        <Link
          href="#shop"
          className={cn(
            "rounded-full border px-5 py-2 font-helvetica text-sm font-medium backdrop-blur-sm transition-opacity hover:opacity-80",
            isLight
              ? "border-neutral-900/30 text-neutral-900"
              : "border-[#fafafa]/60 bg-white/10 text-[#fafafa]"
          )}
        >
          Shop
        </Link>
      </div>
    </nav>
  );
}
