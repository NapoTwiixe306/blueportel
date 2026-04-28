import HomePage from "../../src/components/home/HomePage";
import nlHomeDictionary from "../../src/i18n/home/nl";

export const metadata = nlHomeDictionary.metadata;

export default function Page() {
  return <HomePage dictionary={nlHomeDictionary} />;
}

