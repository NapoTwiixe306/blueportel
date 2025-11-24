import ContactPage from "../../../../src/components/contact/ContactPage";
import frContactDictionary from "../../../../src/i18n/contact/fr";

export const metadata = frContactDictionary.metadata;

export default function Page() {
  return <ContactPage dictionary={frContactDictionary} />;
}

