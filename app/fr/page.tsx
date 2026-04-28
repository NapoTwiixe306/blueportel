import HomePage from "../../src/components/home/HomePage";
import frHomeDictionary from "../../src/i18n/home/fr";

export const metadata = frHomeDictionary.metadata;

export default function Page() {
  return <HomePage dictionary={frHomeDictionary} />;
}

