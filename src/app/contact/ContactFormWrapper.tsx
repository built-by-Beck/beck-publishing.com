"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";

const typeMap: Record<string, string> = {
  hiring: "Hiring / Recruiting",
  freelance: "Freelance Project",
  book: "Book / Audiobook Question",
};

export function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const defaultType = (type && typeMap[type]) || "Freelance Project";

  return <ContactForm defaultInquiryType={defaultType} />;
}
