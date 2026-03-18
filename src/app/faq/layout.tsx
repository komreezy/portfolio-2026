import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | DUI Defense & Personal Injury Questions | Assured Justice Firm",
  description: "Answers to common questions about DUI defense and personal injury claims in Georgia. Learn about your rights, the legal process, and what to expect.",
  keywords: ["DUI FAQ Georgia", "personal injury questions", "car accident FAQ", "Georgia DUI laws", "injury claim questions"],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
