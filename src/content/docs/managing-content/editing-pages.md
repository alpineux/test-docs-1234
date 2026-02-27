---
title: Editing Pages
description: How to update the content on your website.
order: 1
section: managing-content
---

All content on this site is written in **Markdown**, a simple formatting language. You don't need any coding knowledge to make edits.

## Basic formatting

Here's a quick reference:

| Syntax | Result |
|--------|--------|
| `**bold text**` | **bold text** |
| `*italic text*` | *italic text* |
| `[link text](url)` | A clickable link |
| `# Heading` | A section heading |
| `- item` | A bullet point |

## Editing a page

1. Open the Markdown file for the page you want to edit
2. Make your changes using the formatting above
3. Save the file
4. The site will rebuild automatically

## Adding a new page

To add a new page:

1. Create a new `.md` file in the appropriate folder under `src/content/docs/`
2. Add frontmatter at the top of the file:

```yaml
---
title: Your Page Title
description: A brief description.
order: 1
section: section-name
---
```

3. Write your content below the frontmatter
4. The page will appear in the sidebar automatically
