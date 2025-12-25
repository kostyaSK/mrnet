import "./globals.css";
import type { Metadata } from "next";
import { grato } from "./fonts";

export const metadata: Metadata = {
  title: "MRNET",
  description: "Надёжный и быстрый интернет для бизнеса по всей России",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={grato.className}>
      <body className="html bg-black px-9 pt-9">{children}</body>
    </html>
  );
}
