import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Providers from "./components/Providers";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loriccoandco.com"),
  title: "LoRicco & Co — iOS App Studio & AI Consulting",
  description:
    "LoRicco & Co is an independent iOS app studio and AI consulting practice. Explore our apps — Atlas, Grill Tonight, Milo, and Claro — plus in-development work like BowelBuddy, Haven, and Hark.",
  openGraph: {
    title: "LoRicco & Co — iOS App Studio & AI Consulting",
    description:
      "Independent iOS app studio and AI consulting practice. We build thoughtful apps and help companies integrate AI.",
    type: "website",
    siteName: "LoRicco & Co",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoRicco & Co — iOS App Studio & AI Consulting",
    description:
      "Independent iOS app studio and AI consulting practice. We build thoughtful apps and help companies integrate AI.",
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
        className={`${dmSans.variable} ${syne.variable} antialiased`}
      >
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
