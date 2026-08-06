import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soltronic Energy - Powering a Sustainable Future",
  description: "Innovative Solar Solutions for Homes, Businesses and Industries. Building a Greener, Better Tomorrow.",
  icons: {
    icon: '/icon-favicon.png',
  },
};
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Archivo+Black&display=swap"
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
