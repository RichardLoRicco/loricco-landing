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
  title: "LoRicco & Co | Software Studio & Consultancy",
  description:
    "LoRicco & Co builds websites, integrates AI, and advises on engineering and business strategy for startups and small businesses. We also ship our own iOS apps, including Atlas, Grill Tonight, Milo, and Claro. Based in Connecticut.",
  openGraph: {
    title: "LoRicco & Co | Software Studio & Consultancy",
    description:
      "Web development, AI integration, and engineering & business consulting for startups and small businesses, from an independent studio that ships its own apps.",
    type: "website",
    siteName: "LoRicco & Co",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoRicco & Co | Software Studio & Consultancy",
    description:
      "Web development, AI integration, and engineering & business consulting for startups and small businesses, from an independent studio that ships its own apps.",
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
