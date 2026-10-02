import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, Newsreader } from "next/font/google";
import Motion from "./components/Motion";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loriccoandco.com"),
  title: "LoRicco & Co | Websites, AI & Technical Consulting",
  description:
    "LoRicco & Co rebuilds and operates websites, develops AI tools, trains lawyers and small businesses, analyzes digital evidence for counsel, and advises startups. Run by a Connecticut attorney, MBA, and software engineer.",
  openGraph: {
    title: "LoRicco & Co | Websites, AI & Technical Consulting",
    description:
      "Websites and AI systems, AI training, technical consulting for law firms, and startup advisory from an attorney, MBA, and software engineer.",
    type: "website",
    siteName: "LoRicco & Co",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "LoRicco & Co.: Attorney & engineer, with a portrait of Richard T. LoRicco.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoRicco & Co | Websites, AI & Technical Consulting",
    description:
      "Websites and AI systems, AI training, technical consulting for law firms, and startup advisory from an attorney, MBA, and software engineer.",
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
        className={`${archivo.variable} ${newsreader.variable} ${jetbrains.variable}`}
      >
        <StructuredData />
        <Motion>{children}</Motion>
      </body>
    </html>
  );
}
