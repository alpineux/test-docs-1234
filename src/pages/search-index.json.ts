import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const docs = await getCollection("docs");

  const index = docs.map((entry) => {
    // Strip Markdown syntax to get plain text for searching
    const plainBody = entry.body
      ? entry.body
          .replace(/^---[\s\S]*?---/, "") // frontmatter
          .replace(/```[\s\S]*?```/g, "") // code blocks
          .replace(/`[^`]*`/g, "") // inline code
          .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // links/images
          .replace(/#{1,6}\s+/g, "") // headings
          .replace(/[*_~]+/g, "") // bold/italic/strikethrough
          .replace(/\|.*\|/g, "") // table rows
          .replace(/[-=]{3,}/g, "") // horizontal rules
          .replace(/>\s+/g, "") // blockquotes
          .replace(/\n{2,}/g, " ") // collapse newlines
          .replace(/\s+/g, " ") // collapse whitespace
          .trim()
      : "";

    return {
      slug: entry.id,
      title: entry.data.title,
      description: entry.data.description || "",
      section: entry.data.section || "",
      body: plainBody,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
