import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Vitals Protocol is a cinematic release sequence of health products — Reps, Guts, Biohack, and Longevity — each a chapter that compounds into one system for human performance and longevity.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vitalsprotocol.xyz"),
  title: {
    default: "Vitals Protocol — A protocol for becoming more alive",
    template: "%s · Vitals Protocol",
  },
  description,
  keywords: [
    "Vitals Protocol",
    "Reps",
    "Guts",
    "biohacking",
    "longevity",
    "gut health",
    "fitness app",
    "health protocol",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Vitals Protocol",
    title: "Vitals Protocol — A protocol for becoming more alive",
    description,
    images: [
      {
        url: "/vitals/coastal-compound.webp",
        width: 2048,
        height: 1152,
        alt: "The Vitals Protocol coastal compound at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitals Protocol — A protocol for becoming more alive",
    description,
    images: ["/vitals/coastal-compound.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1517",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
