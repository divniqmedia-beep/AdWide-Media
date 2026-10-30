import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { brand, termsAndConditions } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `${termsAndConditions.title} | ${brand.name}`,
  description: termsAndConditions.intro,
};

export default function TermsPage() {
  return (
    <LegalPage
      tag="(Legal)"
      title={termsAndConditions.title}
      updated={termsAndConditions.updated}
      intro={termsAndConditions.intro}
      sections={termsAndConditions.sections}
    />
  );
}
