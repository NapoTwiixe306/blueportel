import type { Locale } from "../../i18n/locales";
import type { ArticleSection, BlogArticle } from "./types";
import { articleUrl, localeOrigins } from "./metadata";

/** Convertit les liens internes relatifs en liens absolus avec locale. */
function absolutize(text: string, locale: Locale): string {
  const origin = localeOrigins[locale];
  return text.replace(/\]\((\/[^)]+)\)/g, (_match, path: string) => {
    const localized = path.startsWith(`/${locale}`) ? path : `/${locale}${path}`;
    return `](${origin}${localized})`;
  });
}

function sectionToMarkdown(section: ArticleSection, locale: Locale, level: 2 | 3): string {
  const parts: string[] = [];
  parts.push(`${"#".repeat(level)} ${section.title}`);

  for (const paragraph of section.paragraphs ?? []) {
    parts.push(absolutize(paragraph, locale));
  }

  if (section.list) {
    parts.push(
      section.list.items
        .map((item, index) =>
          section.list?.ordered
            ? `${index + 1}. ${absolutize(item, locale)}`
            : `- ${absolutize(item, locale)}`
        )
        .join("\n")
    );
  }

  if (section.table) {
    const { headers, rows } = section.table;
    const lines = [
      `| ${headers.join(" | ")} |`,
      `| ${headers.map(() => "---").join(" | ")} |`,
      ...rows.map((row) => `| ${row.map((cell) => absolutize(cell, locale)).join(" | ")} |`),
    ];
    parts.push(lines.join("\n"));
  }

  if (section.callout) {
    parts.push(`> **${section.callout.title}** — ${absolutize(section.callout.text, locale)}`);
  }

  for (const subsection of section.subsections ?? []) {
    parts.push(sectionToMarkdown(subsection, locale, 3));
  }

  return parts.join("\n\n");
}

/** Rend un article complet en markdown, prêt à être ingéré par un LLM. */
export function articleToMarkdown(article: BlogArticle): string {
  const locale = article.locale;
  const url = articleUrl(locale, article.slug);
  const parts: string[] = [];

  parts.push(`# ${article.title}`);
  parts.push(
    `Source: ${url}\nLangue: ${locale} · Publié: ${article.datePublished} · Mis à jour: ${article.dateModified}`
  );
  parts.push(absolutize(article.metaDescription, locale));

  for (const paragraph of article.intro) {
    parts.push(absolutize(paragraph, locale));
  }

  for (const section of article.sections) {
    parts.push(sectionToMarkdown(section, locale, 2));
  }

  if (article.faq.length > 0) {
    parts.push("## FAQ");
    for (const item of article.faq) {
      parts.push(`**${item.question}**\n\n${absolutize(item.answer, locale)}`);
    }
  }

  return parts.join("\n\n");
}
