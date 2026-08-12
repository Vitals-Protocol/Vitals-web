import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://vitalsprotocol.xyz";
const description =
  "Vitals Protocol is a cinematic release sequence of health products — Reps, Guts, Biohack, and Longevity — each a chapter that compounds into one system for human performance and longevity.";
const title = "Vitals Protocol — A protocol for becoming more alive";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Vitals Protocol",
  },
  description,
  applicationName: "Vitals Protocol",
  authors: [{ name: "Salus Labs, Inc." }],
  creator: "Salus Labs, Inc.",
  publisher: "Vitals Protocol",
  keywords: [
    "Vitals Protocol",
    "Reps",
    "Guts",
    "Doopies",
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
    locale: "en_US",
    siteName: "Vitals Protocol",
    title,
    description,
    images: [
      {
        url: "/vitals/og.webp",
        width: 1200,
        height: 630,
        alt: "Vitals Protocol — a protocol for becoming more alive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vitalsprotocol",
    creator: "@vitalsprotocol",
    title,
    description,
    images: ["/vitals/og.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#0b1517",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Vitals Protocol",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      sameAs: ["https://x.com/vitalsprotocol"],
      parentOrganization: {
        "@type": "Organization",
        name: "Salus Labs, Inc.",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Vitals Protocol",
      url: siteUrl,
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/vitals/coastal-compound-sm.webp"
          imageSrcSet="/vitals/coastal-compound-sm.webp 1600w, /vitals/coastal-compound.webp 2048w"
          imageSizes="100vw"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
