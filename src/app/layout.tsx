import type { Metadata } from "next";
import { Roboto, Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

const roboto = Roboto({
  variable: "--font-sans-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "DUI Defense & Personal Injury Attorney | Alpharetta, GA | Assured Justice Firm",
  description: "Former prosecutor and licensed engineer Arash Jafary fights for DUI defense and injury victims throughout Georgia. Free consultation. Call (678) 522-6273.",
  keywords: ["DUI defense attorney Alpharetta", "personal injury lawyer Georgia", "car accident attorney Cobb County", "DUI lawyer Fulton County", "truck accident lawyer Georgia"],
  openGraph: {
    title: "DUI Defense & Personal Injury Attorney | Alpharetta, GA | Assured Justice Firm",
    description: "Former prosecutor and licensed engineer Arash Jafary fights for DUI defense and injury victims throughout Georgia. Free consultation.",
    type: "website",
    locale: "en_US",
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
        className={`${roboto.variable} ${playfair.variable} ${sourceSerif.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col`}
      >
        <SchemaMarkup />
        <Header />
        {children}
        <Footer />
        <MobileFloatingCTA />
      </body>
    </html>
  );
}
