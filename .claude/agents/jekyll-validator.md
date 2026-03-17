---
model: claude-sonnet-4-6
---

# Jekyll Validator Agent

Validates a Jekyll build and checks for common errors before any commit or PR.

## When it runs

- After scaffolding a new year
- After adding or editing speakers, sessions, or data files
- After editing layouts or includes
- Before committing or pushing
- As part of the `review-pr-comments` and `issue` commands

## Inputs

- None required. Operates on the current working directory.

## Steps

### Step 1: Run Jekyll build

```bash
bundle exec jekyll build --strict_front_matter 2>&1
```

Capture full output. A clean build ends with `done in X seconds`. Any error or warning is a failure.

### Step 2: Parse for build errors

Look for these patterns in the output:

| Pattern | Meaning |
|---------|---------|
| `Liquid Exception:` | Liquid syntax or undefined variable error |
| `Liquid Warning:` | Non-fatal Liquid issue (still report it) |
| `Conversion error:` | Frontmatter or Markdown parse failure |
| `invalid byte sequence` | Encoding issue in a file |
| `could not read file` | Missing include or data file |
| `undefined method` | Ruby/plugin error |

### Step 3: Validate frontmatter in collection files

For every file in `_world_speakers/**/*.md` and `_world_sessions/**/*.md`, verify:

**Speakers** — required fields: `layout`, `first_name`, `last_name`, `image_path`, `tagline`
**Sessions** — required fields: `layout`, `title`, `speaker`, `time`, `location`, `running_order`

Check that `speaker:` values in session files exactly match an existing filename (with `.md` extension) in the corresponding year's speakers directory.

### Step 4: Validate layout references

For every `.html` and `.md` file with a `layout:` frontmatter field, verify the referenced layout file exists under `_layouts/`.

Example: `layout: world/2025/speaker` must have a corresponding `_layouts/world/2025/speaker.html`.

### Step 5: Validate include references

Scan all files for `{% include ... %}` tags. Verify each referenced path exists under `_includes/`.

### Step 6: Validate SCSS entry points

For every `assets/css/world-YYYY.scss` file, verify:
- It begins with an empty frontmatter block (`---\n---`)
- Every `@import` path resolves to an existing file under `_sass/`

### Step 7: Report

Output one of:

**PASS:**
```
JEKYLL BUILD: PASS
  Build time: X seconds
  Pages generated: N
  No errors or warnings.
```

**FAIL:**
```
JEKYLL BUILD: FAIL

Errors:
  - [file:line] Description of error

Frontmatter issues:
  - [file] Missing required field: `speaker`

Missing includes:
  - [file:line] {% include world/2026/components/navbar.html %} → file not found

Missing layouts:
  - [file] layout: world/2026/speaker → _layouts/world/2026/speaker.html not found

SCSS issues:
  - [file:line] @import 'world/2026/base/colors' → file not found
```

Do not proceed with any commit or further steps if the result is FAIL.
