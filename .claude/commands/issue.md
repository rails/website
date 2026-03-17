Report a visual or functional bug found during testing. Takes a free-form description, figures out where the issue is, and runs the full fix + verification pipeline. Always ends with a retrospective to prevent recurrence.

**Usage:** `/issue <natural language description>`

**Examples:**
```
/issue the hero section gradient is getting clipped at the top
/issue speaker cards have the wrong background color on hover
/issue "Register Now" button looks taller than in the design
/issue there's a visible gap between the nav and the hero section
/issue schedule tabs are not switching on click
```

**Prerequisites:**
- `bundle exec jekyll serve --livereload` running in a terminal (`localhost:4000`)
- ImageMagick installed (`brew install imagemagick`)

---

## Pipeline

```
locate (read work files + infer affected section — ask human if ambiguous)
       ↓
diagnose (read code + identify root cause)
       ↓
apply targeted fix (surgical code edit — no full re-implementation)
       ↓
jekyll-validator (validate Jekyll/Liquid rules + bundle exec jekyll build)
       ↓  ↑ fix-only loop (does not count toward iteration cap)
layout-qa (numeric: dimensions + spacing)
       ↓
visual-qa (screenshots vs Figma reference)
       ↓
section-reviewer ── PASS ──→ commit + push + code review
       ↓ ITERATE (max 3x)
apply fix → jekyll-validator → layout-qa → visual-qa → section-reviewer
       ↓
retrospective (ALWAYS — trigger: "bug-fix")
```

---

## Step-by-step

### 1. Locate the affected section

Read all work files under `.claude/work/` to understand the page structure and what has been implemented.

Use the issue description to identify:
- **Which page** (e.g., home-desktop, speakers, schedule)
- **Which section** (e.g., Section 2: Hero, Section 3: Speaker Grid)
- **Which element** within the section (e.g., "Register Now" button, nav links, hero background)

**If confident** (the description clearly maps to one section): state your inference and proceed.
> e.g., "This sounds like Section 2: Hero on home-desktop — proceeding."

**If ambiguous**: stop and ask the user. List the candidates.

Once confirmed, set:
- `page_slug`, `section_number`, `section_name`, `section_node_id`

Update the section status to `in-progress` in the work file.

### 2. Read and understand the current implementation

Read all include files associated with the section. Infer them from:
- The work file notes or PR body (if listed)
- Standard paths: `_includes/world/2026/homepage_sections/<section_name>.html`
- Sub-components referenced inside the section file
- The page file (`world/2026/index.html` for home)

Also read any component files adjacent to the reported issue.

### 3. Diagnose the root cause

Using the description, the code just read, and knowledge of the Figma design:

1. **Identify the specific element or CSS/SCSS property** causing the issue
2. **State the root cause** clearly:
   - Wrong SCSS variable?
   - Missing or incorrect `overflow`?
   - Wrong z-index layering?
   - Incorrect Figma value translated to code?
   - Liquid template/include boundary issue?
   - Missing `DOMContentLoaded` wrapper on JS?
3. **Map the fix** to specific files and lines

Output:
```
🔍 Root cause: <concise explanation>
Files to change: <list>
Fix: <specific SCSS/HTML/JS change>
```

### 4. Apply the fix

Make **targeted, surgical changes** — only modify what is needed to address the reported issue. Do not refactor surrounding code or add unrelated improvements.

**Fix scope rule — always prefer the most local fix:**
Before changing a shared component (button, card, nav, etc.), ask: "Can I fix this in the parent layout instead?" If yes, fix the parent.

For each change:
- Use the Edit tool (preferred) or Write for complete file rewrites
- Add a comment only if the fix is non-obvious (e.g., `/* overflow-x: clip preserves vertical bleed for gradient */`)

### 5. Run `jekyll-validator`

Run the `jekyll-validator` agent on all modified files.

If it returns violations, apply the fixes immediately and re-run until PASS. This loop does **not** count toward the 3-iteration cap.

Also confirm the build is clean:
```bash
bundle exec jekyll build 2>&1 | tail -30
```

### 6. Run `layout-qa` + DOM measurement verification

Run the `layout-qa` agent with:
- `page_slug`, `section_number`, `section_name`, `section_node_id` from step 1
- `figma_file_key`: `<FIGMA_FILE_KEY>`
- `page_url`: `http://localhost:4000/world/2026/`
- `component_files`: all files read or modified in steps 2–4

Focus measurements on the elements related to the reported bug, plus the standard measurement set for the section.

**DOM measurement verification (required for layout shift, displacement, spacing, and alignment bugs):**

When the bug description involves "pushes", "shifts", "moves", "jumps", "misaligned", "off by", "gap", "overlaps" — you MUST perform a numeric before/after DOM measurement using `evaluate_script` + `getBoundingClientRect()`.

Protocol:
1. **Before applying the fix**: use `evaluate_script` to record the exact pixel position of all affected elements. Then simulate the triggering interaction (hover, click, focus) and record positions again.
2. **After applying the fix**: repeat the same before/after measurement. A correct fix produces 0px delta on elements that should not move.
3. Record both sets of measurements in your output so the fix is provable.

### 7. Run `visual-qa`

Run the `visual-qa` agent with the standard inputs. Capture screenshots at 1200px and 1440px. Run hover simulations if the bug was hover-related.

**For hover-related bugs, visual-qa MUST check BOTH states:**
1. **Default (non-hover) state**: screenshot without hovering, compare against the Figma Default variant.
2. **Hover state**: simulate hover, compare against the Figma Hover variant.

Both states must pass before visual-qa can issue an overall PASS verdict.

### 8. Run `section-reviewer`

Run the `section-reviewer` agent with both QA reports and `iteration_count` starting at 1.

**On PASS:** Update work file, proceed to retrospective, then commit.

**On ITERATE:** Return to step 4 with the reviewer's feedback. Max 3 iterations; after 3, mark as `needs-human-review` and proceed to retrospective anyway.

### 9. Run `retrospective` — ALWAYS

Run the `retrospective` agent regardless of outcome.

Pass:
- `trigger`: `"bug-fix"`
- `page_slug`, `section_number`, `section_name`
- `bug_description`: the original description
- `root_cause`: the diagnosis from step 3
- `fix_applied`: summary of files and SCSS/HTML/JS changes
- `qa_outcome`: PASS / ITERATE(N) / needs-human-review
- `iteration_history`: all layout-qa, visual-qa, and reviewer outputs from this run

The retrospective should focus on: **what earlier step should have caught this?**

### 10. Commit and push (if PASS)

```bash
git add _includes/world/2026/ world/2026/ .claude/work/<page-slug>.md
git commit -m "fix(<section-name-slug>): <brief description of fix>

Root cause: <one line>
Verified: layout-qa PASS, visual-qa PASS

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"

git push
```

Then commit retrospective outputs if the agent modified any files:
```bash
git add .claude/work/learnings.md .claude/agents/
git commit -m "chore(<section-name-slug>): capture bug-fix retrospective

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push
```

---

## Output

**On PASS:**
```
✓ Issue resolved: <Section N> — <Section Name>
Root cause: <diagnosis>
Fix: <what changed>
Retrospective: <N learnings captured>
Committed: <commit sha>
```

**On needs-human-review:**
```
⚠ Could not auto-resolve after 3 iterations.
Remaining issues:
  - <issue 1>
  - <issue 2>
Retrospective: captured — see .claude/work/learnings.md
```

---

$ARGUMENTS
