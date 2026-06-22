import type { Metadata } from "next";
import { manrope } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { Analytics } from "@/components/analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sankalprealestate.ca"),
  title: {
    default: "Sankalp Real Estate | Luxury GTA Homes & Expert Guidance",
    template: "%s | Sankalp Real Estate",
  },
  description:
    "Trusted by families across the Greater Toronto Area. Seven specialties — first-time buyers, luxury homes, condos, pre-construction, investment, relocation, and downsizing.",
  keywords: [
    "GTA real estate",
    "Toronto luxury homes",
    "Brampton realtor",
    "Mississauga real estate agent",
    "Oakville homes for sale",
    "first time home buyer Ontario",
    "pre-construction condos GTA",
    "investment property Toronto",
  ],
  authors: [{ name: "Sankalp" }],
  creator: "Sankalp Real Estate",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://sankalprealestate.ca",
    siteName: "Sankalp Real Estate",
    title: "Sankalp Real Estate | Luxury GTA Homes & Expert Guidance",
    description:
      "Trusted by families across the Greater Toronto Area. Seven specialties, one commitment — your home, your legacy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sankalp Real Estate — Your Home. Your Legacy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalp Real Estate | Luxury GTA Homes",
    description:
      "Trusted by families across the Greater Toronto Area. Seven specialties, one commitment.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sankalprealestate.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd />
        <Analytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
