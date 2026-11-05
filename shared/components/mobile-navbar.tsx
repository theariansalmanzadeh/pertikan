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
              aria-label="Menü öffnen"
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
                  className={cn(
                    "h-11 w-full rounded-full font-helvetica text-sm font-medium",
                    isLight
                      ? "bg-black text-white hover:bg-neutral-800"
                      : "bg-white text-black hover:bg-neutral-100"
                  )}
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
            "rounded-full border px-5 py-2 font-helvetica text-sm font-medium transition-colors",
            isLight
              ? "border-black bg-black text-white hover:bg-neutral-800"
              : "border-white bg-white text-black hover:bg-neutral-100"
          )}
        >
          Shop
        </Link>
      </div>
    </nav>
  );
}
