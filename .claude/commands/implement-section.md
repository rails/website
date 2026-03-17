Orchestrate the full implementation pipeline for a single Rails World page section: extract assets, implement HTML + SCSS, validate Jekyll build, run visual QA, and review — with up to 3 auto-iterations.

**Usage:** `/implement-section <section_name> <year> [figma_url]`

**Examples:**
```
/implement-section hero_banner 2026
/implement-section sponsors 2026
/implement-section speaker_carousel 2026 https://www.figma.com/file/xxx?node-id=1234:567
```

**Prerequisites:**
- Figma MCP or Figma API access configured
- Year scaffolded (`/scaffold-year YEAR` already run)
- Jekyll dev server running: `bundle exec jekyll serve --livereload` (`localhost:4000`)
- ImageMagick installed (`brew install imagemagick`)
- Work tracking file exists: `.claude/work/world-YEAR-<page>.md` (run `/plan-page` first if not)

---

## Pipeline

```
asset-extractor (download images/icons from Figma to assets/world/YEAR/)
       ↓
section-implementer (write include HTML + SCSS module + add imports)
       ↓
jekyll-validator (bundle exec jekyll build)
       ↓  ↑ fix-only loop
visual-qa (screenshots at 1440px + 375px vs Figma reference)
       ↓
section-reviewer ── PASS ──→ update work file + retrospective + commit
       ↓ ITERATE (max 3x)
section-implementer (targeted fix) → jekyll-validator → visual-qa → section-reviewer
       ↓ needs-human-review (after 3 iterations)
commit current state + flag for manual review + retrospective
```

---

## Step-by-step

### 1. Read the work tracking file

Read `.claude/work/world-YEAR-<page>.md`. Find the section entry. Get the Figma node ID. If a `figma_url` was passed as argument, use that directly instead.

### 2. Run `asset-extractor`

Invoke the `asset-extractor` agent with:
- `figma_url` for the section frame
- `year`: YEAR
- `section`: section_name

### 3. Run `section-implementer`

Invoke the `section-implementer` agent with:
- `figma_url` for the section frame
- `section_name`
- `year`: YEAR
- `source_year`: 2025 (default reference year)
- `page`: derived from the work tracking file

### 4. Run `jekyll-validator`

Invoke the `jekyll-validator` agent. If FAIL, return to `section-implementer` with the error output for a targeted fix. This loop does not count toward the iteration cap.

### 5. Run `visual-qa`

Invoke the `visual-qa` agent. Capture screenshots at:
- 1440px (desktop)
- 375px (mobile)

Compare against the Figma frame reference.

### 6. Run `section-reviewer`

Invoke the `section-reviewer` agent with the visual QA report.

**On PASS:** proceed to step 7.
**On ITERATE:** apply targeted fix → jekyll-validator → visual-qa → section-reviewer. Max 3 total iterations.
**After 3 iterations:** proceed to step 7 with status `needs-human-review`.

### 7. Update work tracking file

Mark the section as `done` (or `needs-human-review`) in `.claude/work/world-YEAR-<page>.md`.

### 8. Run `retrospective`

Invoke the `retrospective` agent with:
- `trigger`: `"pass"` or `"failure"` (based on final outcome)
- `section_name`, `page_slug`, `iteration_history`

### 9. Commit

```bash
git add _includes/world/YEAR/ _sass/world/YEAR/ assets/css/world-YEAR.scss world/YEAR/
git commit -m "feat(world-YEAR): implement <section_name>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push
```

---

$ARGUMENTS
