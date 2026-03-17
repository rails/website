Report a visual or functional bug found during testing. Takes a free-form description, diagnoses the root cause, and runs the fix + verification pipeline. Always ends with a retrospective.

**Usage:** `/issue <natural language description>`

**Examples:**
```
/issue the hero logo is not showing on mobile
/issue sponsor logos have the wrong size in the gold tier
/issue the mobile nav menu doesn't close after clicking a link
/issue announcement banner text is not readable against the background color
```

**Prerequisites:**
- Jekyll dev server running: `bundle exec jekyll serve --livereload` (`localhost:4000`)
- ImageMagick installed (`brew install imagemagick`)

---

## Pipeline

```
locate (read work files + infer affected section — ask human if ambiguous)
       ↓
diagnose (read code + identify root cause)
       ↓
apply targeted fix (surgical edit — no full re-implementation)
       ↓
jekyll-validator (bundle exec jekyll build)
       ↓  ↑ fix-only loop (does not count toward iteration cap)
visual-qa (screenshots vs Figma reference)
       ↓
section-reviewer ── PASS ──→ commit + push
       ↓ ITERATE (max 3x)
apply fix → jekyll-validator → visual-qa → section-reviewer
       ↓
retrospective (ALWAYS — trigger: "bug-fix")
```

---

## Step-by-step

### 1. Locate the affected section

Read all work files under `.claude/work/` to understand the page structure.

Use the issue description to identify:
- **Which page** (e.g., `world/2026/index.html`, `world/2026/speakers.html`)
- **Which section / include** (e.g., `hero_banner`, `navbar`, `sponsor_logos`)
- **Which element** within the section

**If confident:** state your inference and proceed.
**If ambiguous:** stop and ask the user. List candidates. Do not guess.

### 2. Diagnose the root cause

Read the relevant files:
- The include file (`_includes/world/YEAR/...`)
- The SCSS module (`_sass/world/YEAR/modules/...`)
- The data file (`_data/world/YEAR/...`) if content-related
- The layout file (`_layouts/world/YEAR/...`) if structural

Identify the specific line(s) causing the issue. State the root cause clearly before making any changes.

### 3. Apply targeted fix

Fix only the lines causing the issue. Do not:
- Refactor surrounding code
- Add unrelated improvements
- Change other sections

If the fix touches a shared include (e.g., `navbar.html`), verify it doesn't break other pages.

### 4. Run `jekyll-validator`

Invoke the `jekyll-validator` agent. Fix any errors immediately (this loop does not count toward the iteration cap).

### 5. Run `visual-qa`

Invoke the `visual-qa` agent on the affected section. Compare browser screenshots against the Figma reference.

### 6. Run `section-reviewer`

Invoke the `section-reviewer` agent with the QA report.

**On PASS:** proceed to commit.
**On ITERATE:** apply feedback → jekyll-validator → visual-qa → section-reviewer. Max 3 rounds total.
**After 3 rounds:** report `needs-human-review`, commit current state, note remaining issues.

### 7. Commit and push

```bash
git add <specific files>
git commit -m "fix: <short description of the bug fixed>

Root cause: <one sentence>
Fix: <one sentence>
Verified: jekyll build PASS, visual QA PASS

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"

git push
```

### 8. Run `retrospective` — ALWAYS

Invoke `retrospective` with:
- `trigger`: `"bug-fix"`
- `bug_description`: the original description from the user
- `root_cause`: the diagnosed root cause
- `fix_applied`: files changed + what was changed
- `qa_outcome`: PASS / ITERATE(N) / needs-human-review

---

$ARGUMENTS
