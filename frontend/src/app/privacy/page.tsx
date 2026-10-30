import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { brand, privacyPolicy } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | ${brand.name}`,
  description: privacyPolicy.intro,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      tag="(Legal)"
      title={privacyPolicy.title}
      updated={privacyPolicy.updated}
      intro={privacyPolicy.intro}
      sections={privacyPolicy.sections}
    />
  );
}
