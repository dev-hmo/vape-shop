import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Global meta tags for the whole site
export const metadata: Metadata = {
  title: {
    default: "Vape Pi | Premium Vape Shop",
    template: "%s | Vape Pi",
  },
  description:
    "Discover premium vape devices, pods, and disposables at Vape Pi. Exclusive deals, membership rewards, and the latest flavors — all in one place.",
  keywords: [
    "vapes",
    "vape devices",
    "disposable vapes",
    "pods",
    "e-cigarettes",
    "vape shop",
    "Vape Pi",
  ],
  authors: [{ name: "Vape Pi" }],
  openGraph: {
    type: "website",
    title: "Vape Pi | Premium Vape Shop",
    description:
      "Discover premium vape devices, pods, and disposables at Vape Pi.",
    siteName: "Vape Pi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Pi | Premium Vape Shop",
    description:
      "Discover premium vape devices, pods, and disposables at Vape Pi.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f1a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="bg-glow-container">
            <div className="bg-glow-blob bg-glow-purple" />
            <div className="bg-glow-blob bg-glow-pink" />
            <div className="bg-glow-blob bg-glow-amber" />
          </div>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
