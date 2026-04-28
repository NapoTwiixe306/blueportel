import GalleryPage from "../../../../src/components/gallery/GalleryPage";
import nlGalleryDictionary from "../../../../src/i18n/gallery/nl";

export const metadata = nlGalleryDictionary.metadata;

export default function Page() {
  return <GalleryPage dictionary={nlGalleryDictionary} />;
}

