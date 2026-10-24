import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pertikan | Craft Mead & Wine Shop",
    template: "%s | Pertikan",
  },
  description:
    "Shop Pertikan craft mead and wine online — barrel-aged honey wine, pure blossom honey, and small-batch bottles from Southern Burgenland, Austria.",
  keywords: [
    "Pertikan",
    "mead",
    "honey wine",
    "buy wine online",
    "craft wine shop",
    "Austrian wine",
    "Burgenland mead",
    "organic honey wine",
    "ecommerce wine",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="font-helvetica min-h-full flex flex-col">{children}</body>
    </html>
  );
}
