import FAQPage from "../../../src/components/faq/FAQPage";
import frFAQDictionary from "../../../src/i18n/faq/fr";

export const metadata = frFAQDictionary.metadata;

export default function Page() {
  return <FAQPage dictionary={frFAQDictionary} />;
}

