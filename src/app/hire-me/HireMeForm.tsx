"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";

export function HireMeForm() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const defaultType =
    type === "hiring" ? "Hiring / Recruiting" : "Hiring / Recruiting";

  return <ContactForm defaultInquiryType={defaultType} />;
}
