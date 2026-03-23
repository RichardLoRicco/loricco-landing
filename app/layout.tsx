import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
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
  title: "LoRicco & Co — App Development Studio",
  description:
    "We design and build thoughtful mobile apps. Explore our portfolio of iOS apps including Milo, Atlas, and Grill Tonight.",
  openGraph: {
    title: "LoRicco & Co — App Development Studio",
    description:
      "We design and build thoughtful mobile apps. Explore our portfolio.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
