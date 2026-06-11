import Link from "next/link";
import type { ReactNode } from "react";

import type { Locale } from "../../i18n/locales";

/**
 * Rendu d'un markdown inline minimal : **gras** et [texte](href).
 * Les liens internes (commençant par /) sont préfixés par la locale.
 */
export function renderInline(text: string, locale: Locale): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-gray-900">
          {match[1]}
        </strong>
      );
    } else {
      const label = match[2];
      const href = match[3];
      if (href.startsWith("http")) {
        nodes.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
          >
            {label}
          </a>
        );
      } else {
        const localized = href.startsWith(`/${locale}`) ? href : `/${locale}${href}`;
        nodes.push(
          <Link
            key={key++}
            href={localized}
            className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
          >
            {label}
          </Link>
        );
      }
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

/** Supprime le markdown inline pour les usages texte brut (JSON-LD, meta). */
export function stripInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
