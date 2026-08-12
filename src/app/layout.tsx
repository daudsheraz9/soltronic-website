import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SchemaMarkup from "@/components/SchemaMarkup";
import { AuthProvider } from "@/context/AuthContext";
import { FavouriteProvider } from "@/context/FavouriteContext";
import FavouriteToast from "@/components/FavouriteToast";
import FavouriteDrawer from "@/components/FavouriteDrawer";

export const metadata: Metadata = {
  title: {
    default: "Soltronic Energy - Powering a Sustainable Future",
    template: "%s | Soltronic Energy"
  },
  description: "Innovative Solar Solutions for Homes, Businesses and Industries. Building a Greener, Better Tomorrow.",
  icons: {
    icon: '/icon-favicon.png',
  },
  openGraph: {
    title: "Soltronic Energy - Powering a Sustainable Future",
    description: "Innovative Solar Solutions for Homes, Businesses and Industries. Building a Greener, Better Tomorrow.",
    url: 'https://soltronicsenergy.com',
    siteName: 'Soltronic Energy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Soltronic Energy - Powering a Sustainable Future",
    description: "Innovative Solar Solutions for Homes, Businesses and Industries.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Soltronic Energy",
  "url": "https://soltronicsenergy.com",
  "logo": "https://soltronicsenergy.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressCountry": "PK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-XXX-XXXXXXX",
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased overflow-x-hidden flex flex-col min-h-screen" suppressHydrationWarning>
        <AuthProvider>
          <FavouriteProvider>
            <SchemaMarkup schema={organizationSchema} />
            <Navbar />
            {children}
            <Footer />
            <FavouriteToast />
            <FavouriteDrawer />
          </FavouriteProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
