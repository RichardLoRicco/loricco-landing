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
  title: "LoRicco & Co. | Websites, AI & Technical Consulting",
  description:
    "LoRicco & Co. rebuilds and runs websites, builds AI tools, trains lawyers and small businesses on AI, analyzes digital evidence for counsel, and advises startups. The practice is run by Richard T. LoRicco, a Connecticut attorney and software engineer.",
  openGraph: {
    title: "LoRicco & Co. | Websites, AI & Technical Consulting",
    description:
      "Richard T. LoRicco, a Connecticut attorney and software engineer, builds websites and AI tools, trains lawyers and small businesses on AI, consults with counsel on technical evidence, and advises startups.",
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
      "Richard T. LoRicco, a Connecticut attorney and software engineer, builds websites and AI tools, trains lawyers and small businesses on AI, consults with counsel on technical evidence, and advises startups.",
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
        className={`${bricolage.variable} ${fraunces.variable} ${splineSansMono.variable} antialiased`}
      >
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
