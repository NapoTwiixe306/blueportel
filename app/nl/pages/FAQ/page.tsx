import FAQPage from "../../../../src/components/faq/FAQPage";
import nlFAQDictionary from "../../../../src/i18n/faq/nl";

export const metadata = nlFAQDictionary.metadata;

export default function Page() {
  return <FAQPage dictionary={nlFAQDictionary} />;
}

