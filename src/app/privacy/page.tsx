import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Beck-Publishing handles information from website visitors, contact inquiries, customer support, and purchases.",
  alternates: { canonical: "/privacy/" },
};

const headingClass = "font-display text-xl font-semibold text-zinc-100";

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          as="h1"
          title="Privacy Policy"
          subtitle="How information is handled when you visit Beck-Publishing, contact us, or make a purchase."
        />
        <p className="mb-8 text-sm text-zinc-500">Last updated: October 13, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-zinc-400">
          <section aria-labelledby="privacy-about">
            <h2 id="privacy-about" className={headingClass}>Who we are</h2>
            <p className="mt-3">
              Beck-Publishing is operated by {siteConfig.ownerName}. This policy
              covers {siteConfig.siteUrl}, including book pages, the contact
              form, and customer support. Questions about this policy can be sent
              to{" "}
              <a href={`mailto:${siteConfig.email}`} className="break-all text-violet-400 hover:text-violet-300">
                {siteConfig.email}
              </a>.
            </p>
          </section>

          <section aria-labelledby="privacy-information">
            <h2 id="privacy-information" className={headingClass}>Information you provide</h2>
            <p className="mt-3">
              When you email us or submit the contact form, we receive the
              information you choose to provide. This may include your name,
              email address, message, project details, and any attachments.
              Support inquiries may also include an order number, purchase date,
              checkout email, and details about a download or playback issue.
            </p>
            <p className="mt-3">
              Please do not include payment card numbers, security codes,
              passwords, or other sensitive information in messages.
            </p>
          </section>

          <section aria-labelledby="privacy-use">
            <h2 id="privacy-use" className={headingClass}>How information is used</h2>
            <p className="mt-3">
              Information you send is used to respond to your inquiry, discuss
              requested services, help with purchases, verify order details,
              and resolve customer support issues. Purchase records may also be
              used for bookkeeping, refunds, and payment disputes.
            </p>
          </section>

          <section aria-labelledby="privacy-payments">
            <h2 id="privacy-payments" className={headingClass}>Purchases and payment providers</h2>
            <p className="mt-3">
              Paperback and ebook purchase links currently lead to Amazon.
              Amazon handles those orders and payments under its own policies.
              If you purchase directly through a Stripe checkout link,
              payment details are entered on Stripe&apos;s checkout page rather
              than this website. Beck-Publishing may receive order information
              such as your name, email, payment status, amount, and transaction
              reference to support and fulfill your purchase. This website does
              not provide a form for collecting full card numbers or security codes.
            </p>
            <p className="mt-3">
              The free audiobook preview can be played or downloaded without
              providing your name or email. The full audiobook and ebook require purchase.
            </p>
          </section>

          <section aria-labelledby="privacy-providers">
            <h2 id="privacy-providers" className={headingClass}>Hosting, forms, and third-party services</h2>
            <p className="mt-3">
              The website uses Firebase Hosting and an embedded Google Form for
              contact inquiries. Hosting and form providers may process
              technical information such as your IP address, browser details,
              requested pages, and access times to deliver and secure their
              services. The Google Form processes the responses you submit.
              Email providers also process messages sent to our support address.
            </p>
            <p className="mt-3">
              Third-party services may use cookies or similar technologies
              under their own privacy policies. The website does not currently
              include a separate analytics tracker or advertising pixel.
              You can control cookies through your browser settings; restricting
              them may affect embedded forms or checkout services.
            </p>
            <p className="mt-3">
              Information involved in these services may be processed in
              countries other than the one where you live.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li><a href="https://policies.google.com/privacy" className="text-violet-400 hover:text-violet-300">Google Privacy Policy</a> (including Google Forms and Firebase)</li>
              <li><a href="https://stripe.com/privacy" className="text-violet-400 hover:text-violet-300">Stripe Privacy Policy</a></li>
              <li><a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" className="text-violet-400 hover:text-violet-300">Amazon Privacy Notice</a></li>
            </ul>
          </section>

          <section aria-labelledby="privacy-sharing">
            <h2 id="privacy-sharing" className={headingClass}>Sharing information</h2>
            <p className="mt-3">
              Information is processed by the service providers needed to host
              the site, receive messages, process purchases, and provide support.
              Relevant records may also need to be disclosed to comply with
              legal requirements or address fraud, security concerns, or payment disputes.
            </p>
          </section>

          <section aria-labelledby="privacy-retention">
            <h2 id="privacy-retention" className={headingClass}>Retention and your requests</h2>
            <p className="mt-3">
              Inquiry and support records are kept as needed to handle your
              request and maintain relevant business records. Purchase records
              may need to be retained for accounting, tax, or dispute purposes.
              Service providers apply their own retention policies to records
              they control.
            </p>
            <p className="mt-3">
              To ask about information you have shared with Beck-Publishing,
              request a correction, or request deletion, email {siteConfig.email}.
              We may need to verify your identity before acting on a request.
              Some records may need to be retained for legal or transaction
              purposes. Requests about data held independently by Amazon,
              Google, or Stripe should also be directed to that provider.
            </p>
          </section>

          <section aria-labelledby="privacy-children">
            <h2 id="privacy-children" className={headingClass}>Children&apos;s privacy</h2>
            <p className="mt-3">
              This website is intended for a general audience and is not directed
              to children under 13. If you believe a child has submitted personal
              information, contact us so we can review and address it.
            </p>
          </section>

          <section aria-labelledby="privacy-changes">
            <h2 id="privacy-changes" className={headingClass}>Policy updates and contact</h2>
            <p className="mt-3">
              This policy may be updated as the website or its services change.
              The date at the top identifies the latest update.
              For privacy questions or help with a purchase, visit{" "}
              <Link href="/support/" className="text-violet-400 hover:text-violet-300">Customer Support</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
