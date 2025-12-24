import GalleryPage from "../../../src/components/gallery/GalleryPage";
import enGalleryDictionary from "../../../src/i18n/gallery/en";

export const metadata = enGalleryDictionary.metadata;

export default function Page() {
  return <GalleryPage dictionary={enGalleryDictionary} />;
}

