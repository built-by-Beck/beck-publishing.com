import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Beck-Publishing | Books, Websites, Apps, and Digital Products",
    template: "%s | Beck-Publishing",
  },
  description:
    "Beck-Publishing is the home of David Beck's books, websites, software projects, SaaS ideas, AI tools, and digital products.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.siteName,
    images: [{ url: siteConfig.defaultOgImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
