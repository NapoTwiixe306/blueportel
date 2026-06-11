import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogArticlePage from "../../../../src/components/blog/BlogArticlePage";
import {
  getArticleBySlug,
  getArticles,
  getRelatedArticles,
} from "../../../../src/data/blog";
import { buildArticleMetadata } from "../../../../src/data/blog/metadata";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getArticles("en").map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildArticleMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticleBySlug("en", slug);
  if (!article) notFound();
  return <BlogArticlePage article={article} related={getRelatedArticles(article)} />;
}
