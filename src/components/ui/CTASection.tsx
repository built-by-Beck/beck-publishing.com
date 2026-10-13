import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  showForm?: boolean;
};

export function CTASection({
  title = "Have a project or role in mind? Let's talk.",
  subtitle = "Tell me what you need built, fixed, automated, cleaned up, published, or launched.",
  showForm = true,
}: CTASectionProps) {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={title} subtitle={subtitle} align="center" />
        {showForm ? (
          <ContactForm />
        ) : (
          <div className="text-center">
            <Link href="/contact/#form" className="btn-primary">
              Get in touch
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
