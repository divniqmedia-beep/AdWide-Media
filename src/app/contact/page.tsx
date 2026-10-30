import type { Metadata } from "next";
import { ContactSection } from "@/components/landing/contact-section";
import { PageShell } from "@/components/layout/page-shell";
import { brand, contactContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `Contact | ${brand.name}`,
  description: contactContent.description,
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactSection />
    </PageShell>
  );
}
