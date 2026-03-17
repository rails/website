Run visual QA and review for an already-implemented section without re-running full implementation.

**Usage:** `/qa-section <section_name> <year>`

**Examples:**
```
/qa-section hero_banner 2026
/qa-section sponsors 2026
/qa-section navbar 2026
```

**Prerequisites:**
- Section already implemented (include and SCSS files exist)
- Jekyll dev server running: `bundle exec jekyll serve --livereload` (`localhost:4000`)
- ImageMagick installed (`brew install imagemagick`)
- Work tracking file exists: `.claude/work/world-YEAR-<page>.md`

---

## Pipeline

```
visual-qa (screenshots vs Figma reference)
       ↓
section-reviewer (PASS / ITERATE — up to 2 fix rounds)
       ↓
retrospective (if ITERATE or needs-human-review)
```

---

## Steps

### 1. Run `visual-qa`

Invoke the `visual-qa` agent on the target section. Capture screenshots at 1440px and 375px. Compare against the Figma frame reference from the work tracking file.

### 2. Run `section-reviewer`

Invoke the `section-reviewer` agent with the QA report.

**On PASS:** done. Confirm in the work tracking file if not already marked.

**On ITERATE:** invoke `section-implementer` with the specific feedback → jekyll-validator → visual-qa → section-reviewer. Max 2 additional rounds.

**After 2 failed rounds:** flag as `needs-human-review` in the work tracking file.

### 3. Note

This command does **not** re-implement from scratch. If `section-reviewer` identifies fundamental structural problems, use `/implement-section` instead.

---

$ARGUMENTS
