import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { ThemeColorSync } from "./components/ThemeToggle";
import StructuredData from "./components/StructuredData";
import "./globals.css";

/*
  Same four faces as richardloricco.com, trimmed for speed (Lighthouse mobile,
  2026-10-07, vs main at 91):
  - Fraunces keeps opsz, because the display headlines are drawn at opsz 144;
    without it they set wide and heavy. SOFT is dropped: +118KB for a barely
    visible softening, and perf 83 -> 88. The SOFT values in globals.css are
    then ignored, harmlessly.
  - Source Serif ships upright only. Every italic on the page is Fraunces
    (see `em` and .serif-italic in globals.css).
*/
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const TITLE = "Websites, Apps, and AI in New Haven, CT | LoRicco & Co.";
const DESCRIPTION =
  "I'm a Connecticut attorney and software engineer in New Haven. I build websites, apps, and AI tools for law firms and small businesses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://loriccoandco.com"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    type: "website",
    siteName: "LoRicco & Co.",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "LoRicco & Co.: I'm an attorney who builds software for law firms and small businesses, with a portrait of Richard T. LoRicco.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

/* Mobile browser chrome matches the ink and paper grounds. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
    { media: "(prefers-color-scheme: light)", color: "#efeae0" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font variables sit on <html> so the :root tokens that reference them resolve.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${geist.variable} ${sourceSerif.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <StructuredData />
        <ThemeColorSync />
        {children}
      </body>
    </html>
  );
}
