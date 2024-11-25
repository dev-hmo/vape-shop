import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";

// Global meta tags for the whole site
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "A brief description of your site for SEO optimization.",
  keywords: [
    "vapes",
    "electronics",
    "vape products",
    "best vapes",
    "devices",
    "e-cigarettes",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <Link
          rel="icon"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
