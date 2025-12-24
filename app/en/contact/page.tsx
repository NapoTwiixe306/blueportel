import ContactPage from "../../../src/components/contact/ContactPage";
import enContactDictionary from "../../../src/i18n/contact/en";

export const metadata = enContactDictionary.metadata;

export default function Page() {
  return <ContactPage dictionary={enContactDictionary} />;
}

