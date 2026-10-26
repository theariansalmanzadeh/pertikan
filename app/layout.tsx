import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import { Footer } from "@/shared/components/footer";
import { Navbar } from "@/shared/components/navbar";

import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pertikan | Handwerklicher Met & Wein Shop",
    template: "%s | Pertikan",
  },
  description:
    "Entdecken Sie Pertikan Met und Wein online — im Fass gereifter Honigwein, reiner Blütenhonig und Kleinserien aus dem Südburgenland, Österreich.",
  keywords: [
    "Pertikan",
    "Met",
    "Honigwein",
    "Wein online kaufen",
    "Weinshop",
    "Österreichischer Wein",
    "Burgenland Met",
    "Bio-Honigwein",
    "Wein Onlineshop",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Pertikan",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-helvetica">
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
