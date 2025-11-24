import HomePage from "../../src/components/home/HomePage";
import enHomeDictionary from "../../src/i18n/home/en";

export const metadata = enHomeDictionary.metadata;

export default function Page() {
  return <HomePage dictionary={enHomeDictionary} />;
}

