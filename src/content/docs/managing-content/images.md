---
title: Images
description: How to add and manage images on your site.
order: 2
section: managing-content
---

## Adding images

Place image files in the `public/images/` folder, then reference them in your Markdown:

```markdown
![Alt text describing the image](/images/your-image.jpg)
```

## Image best practices

- **File format:** Use `.webp` or `.jpg` for photos, `.svg` for icons and logos
- **File size:** Keep images under 500KB when possible
- **Naming:** Use descriptive, lowercase names with hyphens (e.g., `team-photo-2024.jpg`)
- **Alt text:** Always include a description for accessibility

## Replacing an image

To swap out an image, simply replace the file in `public/images/` with a new file using the **same filename**. The site will use the new image automatically.
