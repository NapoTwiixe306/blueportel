import ContactPage from "../../../../src/components/contact/ContactPage";
import nlContactDictionary from "../../../../src/i18n/contact/nl";

export const metadata = nlContactDictionary.metadata;

export default function Page() {
  return <ContactPage dictionary={nlContactDictionary} />;
}

