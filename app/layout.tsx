import type { Metadata } from "next";
import { Fragment_Mono, Schibsted_Grotesk } from "next/font/google";
import Providers from "./components/Providers";
import StructuredData from "./components/StructuredData";
import "./globals.css";

/*
  "Three Disciplines": one sturdy grotesk does all the talking, from heavy
  display to body; italic is its own instance and isn't preloaded (it only
  sets a few display words). Fragment Mono for small labels.
*/
const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const schibstedItalic = Schibsted_Grotesk({
  variable: "--font-schibsted-italic",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
  preload: false,
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loriccoandco.com"),
  title: "LoRicco & Co. | Websites, AI & Technical Consulting",
  description:
    "LoRicco & Co. rebuilds and runs websites, builds AI tools, trains lawyers and small businesses on AI, does legal research and technical consulting for attorneys, and advises startups. The practice is run by Richard T. LoRicco, a Connecticut attorney and software engineer.",
  openGraph: {
    title: "LoRicco & Co. | Websites, AI & Technical Consulting",
    description:
      "Richard T. LoRicco, a Connecticut attorney and software engineer, builds websites and AI tools, trains lawyers and small businesses on AI, does legal research and technical consulting for other attorneys, and advises startups.",
    type: "website",
    siteName: "LoRicco & Co.",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "LoRicco & Co. website with a portrait of Richard T. LoRicco.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoRicco & Co. | Websites, AI & Technical Consulting",
    description:
      "Richard T. LoRicco, a Connecticut attorney and software engineer, builds websites and AI tools, trains lawyers and small businesses on AI, does legal research and technical consulting for other attorneys, and advises startups.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibsted.variable} ${schibstedItalic.variable} ${fragmentMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[3px] focus:bg-accent focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
