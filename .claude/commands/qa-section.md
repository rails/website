Run visual QA and review for an already-implemented section. Useful for re-checking after manual edits without re-running the full implementation pipeline.

**Usage:** `/qa-section <page-slug> <section-number>`

**Example:**
```
/qa-section home-desktop 2
```

**Prerequisites:**
- Section must already be implemented (includes exist in `_includes/world/2026/`)
- `bundle exec jekyll serve --livereload` must be running in a terminal (`localhost:4000`)
- ImageMagick installed (`brew install imagemagick`)

**Pipeline:**

```
visual-qa → section-reviewer
```

**Step-by-step:**

1. **Read work file** — Load `.claude/work/<page-slug>.md`, find section `<section-number>`, extract its name and Figma node ID.

2. **Run `visual-qa`** — Navigate to `localhost:4000`, capture screenshots at 1200px and 1440px for desktop sections, or 393px for mobile sections (slug ends in `-mobile`), compare against Figma reference using ImageMagick RMSE + LLM visual assessment, produce QA report.

3. **Run `section-reviewer`** — Parse QA report, update work file status to `done` or `needs-human-review`, output detailed findings.

**Note:** This command does NOT trigger re-implementation. If the reviewer finds issues, it will output specific feedback but you must apply changes manually or run `/implement-section` to re-enter the full pipeline.

**Output:**
- QA report with pass/fail per viewport
- Updated `.claude/work/<page-slug>.md` status
- Specific issues listed if any

---

$ARGUMENTS
