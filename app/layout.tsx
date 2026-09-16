import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://virnisha.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VIRNISHA OVERSEAS — Global Sourcing & Trading Solutions",
    template: "%s | VIRNISHA OVERSEAS",
  },
  description:
    "VIRNISHA OVERSEAS is a sourcing and trading company for pharmaceutical APIs, intermediates, impurities, fine chemicals, solvents and deuterated compounds.",
  keywords: [
    "pharmaceutical APIs",
    "chemical sourcing",
    "intermediates",
    "impurities",
    "fine chemicals",
    "solvents",
    "deuterated compounds",
    "global sourcing",
    "trading company",
    "India",
  ],
  authors: [{ name: "VIRNISHA OVERSEAS" }],
  creator: "VIRNISHA OVERSEAS",
  publisher: "VIRNISHA OVERSEAS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "VIRNISHA OVERSEAS",
    title: "VIRNISHA OVERSEAS — Global Sourcing & Trading Solutions",
    description:
      "A sourcing portfolio for pharmaceutical, chemical and industrial requirements.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "VIRNISHA OVERSEAS — Global Sourcing & Trading Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIRNISHA OVERSEAS — Global Sourcing & Trading Solutions",
    description:
      "A sourcing portfolio for pharmaceutical, chemical and industrial requirements.",
    images: [`${SITE_URL}/og-image.png`],
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
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "VIRNISHA OVERSEAS",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 200,
    height: 60,
  },
  description:
    "VIRNISHA OVERSEAS is a sourcing and trading company focused on connecting customers with reliable manufacturers and suppliers across pharmaceutical, chemical and industrial product segments.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dombivali (West)",
    addressRegion: "Thane",
    addressCountry: "IN",
    addressLocality2: "Mumbai",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-8655807858",
      contactType: "sales",
      email: "virnishaoverseas2026@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
