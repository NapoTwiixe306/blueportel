import GalleryPage from "../../../../src/components/gallery/GalleryPage";
import frGalleryDictionary from "../../../../src/i18n/gallery/fr";

export const metadata = frGalleryDictionary.metadata;

export default function Page() {
  return <GalleryPage dictionary={frGalleryDictionary} />;
}

