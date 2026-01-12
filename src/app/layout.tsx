import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Arash Jafari | Personal Injury Attorney",
  description: "Experienced personal injury attorney in Georgia. We fight for maximum compensation for car accidents, truck accidents, slip & fall, medical malpractice, and wrongful death cases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${playfair.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
