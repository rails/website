---
model: claude-sonnet-4-6
---

# Blog Porter Agent

Converts a single blog post from the old website format to the new site's content collection format.

## Inputs

- **Post filename** (e.g., `2025-08-01-ai-conversations-that-replace-forms.md`)
- **Category** (assigned by inventory or inferred)
- **Old site path**: `~/Projects/website`
- **New site path**: current working directory (website-wye-2026)

## Procedure

### Step 1: Read the original post

Read `~/Projects/website/content/blog/<filename>` in full.

### Step 2: Convert frontmatter

Map old frontmatter to new schema:

```yaml
# OLD format:
---
title: 'Some Title'
thumbnail: /images/posts/some-image.png
author:
  name: Jorge Bejar
  email: jorge@wyeworks.com        # DROP
  twitter_handle: jmbejar          # DROP
  github_handle: jmbejar           # DROP
  image: /images/team/jorge-bejar.jpg
  description: Some bio text       # DROP
category: elixir                   # NORMALIZE
layout: post                       # DROP
comments: true                     # DROP
---

# NEW format:
---
title: "Some Title"
description: "First meaningful paragraph of the post, up to ~160 chars"
category: Engineering
thumbnail: /images/blog/post-featured.png
author:
  name: Jorge Bejar
  image: /images/team/jorge-bejar.jpg
---
```

**Rules:**
- `title` — preserve exactly, use double quotes
- `description` — if not in old frontmatter, extract from the first paragraph of the body (the text before `<!--more-->` or the first ~160 characters). Make it a clean, complete sentence.
- `category` — use the assigned category from the inventory. If the old post has a specific tech category (e.g., `elixir`, `javascript`, `ember`, `rust`, `ruby`), still use "Engineering". For culture/management/hiring/process posts, use "Leadership".
- `thumbnail` — if the old post has a `thumbnail` field, copy that image from `~/Projects/website/static/` to `public/images/blog/posts/` and set the new path (e.g., `/images/blog/posts/coding-agents-banner.jpg`). If the old post has NO thumbnail, use the default placeholder `/images/blog/blog-article-placeholder.jpg`.
- `author.name` — preserve exactly from old frontmatter
- `author.image` — use `/images/team/<author-slug>.jpg` (the real author photo path). The actual image file will be copied separately.
- Drop all other frontmatter fields (`email`, `twitter_handle`, `github_handle`, `description`, `layout`, `comments`)

### Step 3: Clean markdown body

1. **Remove `<!--more-->`** markers entirely (with surrounding blank lines)

2. **Fix image paths** — change `/images/posts/...` references in markdown body to `/images/blog/posts/...`:
   ```
   ![alt](/images/posts/foo.png) → ![alt](/images/blog/posts/foo.png)
   ```

3. **Handle dead embeds** — for iframes/embeds that reference services likely dead or broken (SlideShare Flash, old Giphy embeds with inline styles):
   - Replace with a note:
   ```markdown
   > **Note:** The original content embedded here (a SlideShare presentation / Giphy animation / etc.) is no longer available.
   ```
   - YouTube iframes and CodePen iframes should be **preserved** as they likely still work

4. **Clean HTML** — for raw HTML in the post body:
   - `<div>` wrappers with no special class → remove the div tags, keep inner content
   - `<div>` with custom classes (e.g., `paragraph-with-excerpt-left`) → remove the div, keep content, add a comment `<!-- DEFERRED: original had custom layout class "paragraph-with-excerpt-left" -->`
   - `<table>` → preserve as-is (CSS handles it)
   - `<span>` → keep if semantically meaningful, otherwise remove wrapper

5. **Ensure proper spacing** — verify blank lines around:
   - Headings (blank line before and after)
   - Code blocks (blank line before and after)
   - Blockquotes (blank line before and after)
   - Lists (blank line before the first item)

6. **Code block language hints** — if a code block uses triple backticks without a language specifier, try to infer the language from the content and add it:
   - Ruby/Rails code → `ruby`
   - JavaScript/Node → `javascript`
   - Elixir → `elixir`
   - Shell commands → `bash`
   - HTML templates → `html`
   - CSS → `css`
   - If uncertain, leave without language hint

7. **Internal links** — old posts may link to other blog posts using paths like `/blog/slug-name`. Update these to the new URL format `/blog/YYYY/MM/DD/slug-name` if the target post filename can be identified. If not identifiable, leave as-is with a comment `<!-- DEFERRED: verify internal link target -->`.

### Step 4: Copy images

For each image referenced in the markdown body (not the thumbnail):
1. Check if the source exists at `~/Projects/website/static/<image-path>`
2. Copy to `public/images/blog/posts/<image-filename>` in the new site
3. If source doesn't exist, leave the markdown reference but add a comment: `<!-- DEFERRED: image not found in old site -->`

### Step 5: Write the new post

Write the converted file to `src/content/blog/<filename>` (same filename as the original).

### Step 6: Validate

- Run `npx astro check` or verify the content schema will accept the frontmatter
- Ensure no frontmatter fields are missing required values

## Blog home page integration

Ported posts automatically appear on the blog home page (`/blog`). The `FeaturedArticle` and `BlogFilterGrid` components read from the content collection — no manual data entry is needed. The most recent post becomes the featured article, and all posts appear in the filterable grid with working category filtering and links to individual post pages.

## Output

Report:
```
PORTED: <filename>
  - Title: <title>
  - Author: <author>
  - Category: <category>
  - Images copied: <count>
  - Dead embeds replaced: <count>
  - HTML cleaned: <count>
  - Internal links updated: <count>
  - Deferred items: <list>
```
