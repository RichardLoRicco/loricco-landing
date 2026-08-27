import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, Spline_Sans_Mono } from "next/font/google";
import Providers from "./components/Providers";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loriccoandco.com"),
  title: "LoRicco & Co | Technical Consulting, Websites & AI for Law Firms and Small Businesses",
  description:
    "LoRicco & Co provides technical consulting for law firms, builds and operates websites and AI systems, and teaches practical AI to lawyers and small businesses. One principal: attorney, MBA, and software engineer. Based in Connecticut.",
  openGraph: {
    title: "LoRicco & Co | Technical Consulting, Websites & AI for Law Firms and Small Businesses",
    description:
      "Technical consulting for law firms, website and AI-system builds, and practical AI education for lawyers and small businesses, from a principal who is an attorney, MBA, and software engineer.",
    type: "website",
    siteName: "LoRicco & Co",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoRicco & Co | Technical Consulting, Websites & AI for Law Firms and Small Businesses",
    description:
      "Technical consulting for law firms, website and AI-system builds, and practical AI education for lawyers and small businesses, from a principal who is an attorney, MBA, and software engineer.",
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
        className={`${bricolage.variable} ${fraunces.variable} ${splineSansMono.variable} antialiased`}
      >
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
