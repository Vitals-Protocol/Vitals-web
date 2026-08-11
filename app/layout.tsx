import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitals Protocol — Release Sequence",
  description: "A cinematic chapter-based release experience for Vitals Protocol.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
