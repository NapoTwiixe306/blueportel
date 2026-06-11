import type { Metadata } from "next";

import BlogIndexPage from "../../../src/components/blog/BlogIndexPage";
import { getArticles } from "../../../src/data/blog";
import { buildBlogIndexMetadata } from "../../../src/data/blog/metadata";

export const metadata: Metadata = buildBlogIndexMetadata("fr");

export default function Page() {
  return <BlogIndexPage locale="fr" articles={getArticles("fr")} />;
}
