Orchestrate the full implementation pipeline for a single page section: component analysis → implementation → visual QA → review (with up to 3 auto-iterations).

**Usage:** `/implement-section <page-slug> <section-number>`

**Example:**
```
/implement-section home-desktop 2
```

**Prerequisites:**
- `.claude/work/<page-slug>.md` must exist (run `/plan-page` first)
- `bundle exec jekyll serve --livereload` should be running in a terminal (`localhost:4000`)
- ImageMagick installed (`brew install imagemagick`)

**Pipeline:**

```
switch to / create feat/<page-slug>  (shared branch for all sections of this page)
       ↓
component-analyzer          (identifies components, static vs interactive-js, assets, deferred items)
       ↓
asset-extractor             (downloads images + icons to assets/world/2026/; returns local path map)
       ↓
section-implementer         (uses local asset paths, static placeholder data)
       ↓
jekyll-validator            (checks Jekyll/Liquid rules + runs bundle exec jekyll build; feeds fixes
       ↓  ↑fix only loop    back to implementer if needed — does NOT count as a QA iteration)
layout-qa                   (numeric: Figma dimensions vs browser computed CSS — deterministic)
       ↓
visual-qa                   (qualitative: screenshots vs Figma reference — LLM judgment)
       ↓
section-reviewer ──── PASS ───→ commit + push + open/update draft PR
       ↓ ITERATE (max 3x)            ↓
section-implementer → ...       code review (triage + fix AGREE findings + re-QA if needed)
                                      ↓
                                retrospective
```

**Step-by-step:**

1. **Read work file** — Load `.claude/work/<page-slug>.md`, find section `<section-number>`, extract its name and Figma node ID. Update status to `in-progress`.

2. **Switch to the page branch** — All sections of a page share one branch so each section builds on the previous:
   ```bash
   # If branch doesn't exist yet (first section of this page):
   git checkout -b feat/<page-slug>

   # If branch already exists (subsequent sections):
   git checkout feat/<page-slug>
   ```
   Check with `git branch --list feat/<page-slug>` before deciding.

3. **Run `component-analyzer`** — Analyze the section's Figma metadata, scan `_includes/world/2026/`, produce a component plan (what to create/modify/reuse, static vs interactive-js decisions, asset list, deferred items).

4. **Run `asset-extractor`** — Download all images and icons identified by the component plan to `assets/world/2026/icons/` and `assets/world/2026/images/`. Returns a local path map. Assets that already exist are skipped. Missing assets are flagged as deferred.

5. **Run `section-implementer`** — Fetch full design context from Figma, write Jekyll Liquid HTML include files using SCSS custom variables and local asset paths from the extractor's map. Update the page HTML file. For mobile sections (`-mobile` slug): wire components inside the `#section-mobile` wrapper in the page file; use `mobile_` prefix for component names.

6. **Run `jekyll-validator`** — Read all generated files and check against Jekyll/Liquid rules (include syntax, `include.` variable prefix, data access with quoted `'2026'` key, unclosed tags, no React/Astro artifacts, `DOMContentLoaded` wrapper for JS). Also runs `bundle exec jekyll build` to confirm clean build. If violations are found, return specific line-level fixes to `section-implementer` and re-run until PASS. **This loop does not count toward the 3-iteration visual QA limit.**

7. **Run `layout-qa`** — Extract exact pixel dimensions and CSS values from Figma (`get_metadata` + `get_design_context`). Measure the same properties in the browser via `getBoundingClientRect()` and `getComputedStyle()`. Compare numerically with per-property tolerances (≤ 1px for dimensions/spacing, ≤ 0.5px for typography). Produce a deterministic pass/fail table. **If layout-qa FAILS**, pass the specific issues directly to `section-implementer` to fix before running `visual-qa`.

8. **Run `visual-qa`** — Navigate to `localhost:4000`, capture screenshots at 1200px and 1440px (and 393px if mobile), compare against Figma reference using ImageMagick RMSE + LLM assessment, simulate hover states with `hover` tool. Produce QA report.

9. **Run `section-reviewer`** — Parse both `layout_qa_report` and `visual_qa_report`, decide PASS or ITERATE, update work file, provide feedback to implementer if iterating. On PASS, the reviewer commits, pushes, creates/updates the draft PR, then does a code review as a final verification. AGREE findings are fixed immediately and the commit is amended. Both QA reports must PASS for the section to pass.

10. **Repeat steps 5–9** up to 3 times if ITERATE. After 3 failed iterations, mark as `needs-human-review` and stop.

**Output:**
- `feat/<page-slug>` branch with one commit per completed section
- Draft PR on GitHub, updated after each section (ready to mark as ready when all sections are done)
- Files created/modified in `_includes/world/2026/` and `world/2026/`
- Updated `.claude/work/<page-slug>.md` with section status

---

$ARGUMENTS
