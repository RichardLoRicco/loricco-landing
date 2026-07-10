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
  title: "LoRicco & Co | Websites, Content & AI for Firms and Startups",
  description:
    "LoRicco & Co rebuilds outdated websites, runs content and AI-search visibility, and brings practical AI to law firms, professional practices, and startups. One principal: attorney, MBA, and software engineer. Based in Connecticut.",
  openGraph: {
    title: "LoRicco & Co | Websites, Content & AI for Firms and Startups",
    description:
      "Website rebuilds, content and AI-search visibility, and practical AI consulting for professional practices and startups, from a principal who is an attorney, MBA, and software engineer.",
    type: "website",
    siteName: "LoRicco & Co",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoRicco & Co | Websites, Content & AI for Firms and Startups",
    description:
      "Website rebuilds, content and AI-search visibility, and practical AI consulting for professional practices and startups, from a principal who is an attorney, MBA, and software engineer.",
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
