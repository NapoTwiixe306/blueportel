import FAQPage from "../../../src/components/faq/FAQPage";
import enFAQDictionary from "../../../src/i18n/faq/en";

export const metadata = enFAQDictionary.metadata;

export default function Page() {
  return <FAQPage dictionary={enFAQDictionary} />;
}

