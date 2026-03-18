import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Schedule a Free Consultation | Assured Justice Firm",
  description: "Contact DUI defense and personal injury attorney Arash Jafary in Alpharetta, GA. Free consultation. Call (678) 522-6273 or fill out our online form.",
  keywords: ["contact attorney Alpharetta", "free legal consultation Georgia", "DUI lawyer contact", "personal injury attorney phone"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
