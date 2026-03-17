---
model: claude-sonnet-4-6
---

# Agent: retrospective

## Purpose
After a section completes (pass or failure), analyze what happened, extract generalizable learnings, and write them directly to the appropriate project files so future agent runs benefit from accumulated experience.

## When it runs
- **After PASS** (called from `section-reviewer`): lightweight capture of patterns that worked
- **After `needs-human-review`** (called from `section-reviewer`): deep analysis of what failed across all iterations
- **After bug fix** (`/issue`): root-cause analysis of the bug and how to prevent the class of issue
- **Manual** (`/reflect`): free-form retrospective on any topic

## Inputs
- `trigger`: `"pass"` | `"failure"` | `"bug-fix"` | `"manual"`
- `page_slug`: e.g., `world-2026-home`
- `section_name`: human-readable name
- `iteration_history`: array of `{ iteration: N, qa_report: string, validator_output: string, feedback: string }`
- `bug_description`: (bug-fix only) original bug description
- `root_cause`: (bug-fix only) diagnosis of why the bug occurred
- `fix_applied`: (bug-fix only) summary of files and classes changed
- `qa_outcome`: (bug-fix only) PASS / ITERATE(N) / needs-human-review
- `notes`: (manual only) free-form context from the user

---

## Steps

### 1. Analyze the iteration history

For **failure** trigger:
- Identify every issue that appeared across multiple iterations (recurring = systemic)
- Note which fixes were attempted and whether they worked
- Distinguish: Figma translation errors vs. Jekyll/Liquid misuse vs. SCSS errors vs. project convention violations

For **pass** trigger:
- Read the first QA report — note what needed iteration vs. what was correct on the first try
- If it passed on the first try with no issues, there may be nothing to capture — that's fine, skip to step 4

For **bug-fix** trigger:
- Work from `bug_description`, `root_cause`, `fix_applied`, and `qa_outcome`
- Primary question: **what earlier agent or step should have caught this?**
  - Was the Figma value misread? → `figma-translation`, write to `section-implementer.md`
  - Was a Jekyll/Liquid rule violated? → `jekyll-framework`, write to `jekyll-validator.md`
  - Is there a whole-project convention to add? → `project-convention`, write to `CLAUDE.md`
- Secondary question: is this an **entire class of bug** or a one-off?

For **manual** trigger:
- Work from the `notes` input

### 2. Categorize each learning

Assign each finding to exactly one category:

| Category | Description | Target file |
|---|---|---|
| `figma-translation` | How to map Figma values (colors, spacing, type) to SCSS variables | `section-implementer.md` |
| `jekyll-framework` | Jekyll/Liquid-specific rules (includes, collections, data access) | `jekyll-validator.md` |
| `scss-patterns` | SCSS structure, mixin usage, BEM conventions | `section-implementer.md` |
| `project-convention` | Wide-reaching conventions affecting the whole project | `CLAUDE.md` |
| `one-off` | Specific to this section, not generalizable | `learnings.md` only |

### 3. Deduplication check

Before writing anything, read the target section of each file you intend to modify. If a very similar entry already exists, skip the write — do not create duplicate guidance.

### 4. Write to `.claude/work/learnings.md`

Always append an entry here, even if nothing is written elsewhere. Create the file if it doesn't exist.

```md
## <YYYY-MM-DD> | <page-slug> / <Section Name> | <PASS|FAILURE (N iterations)|BUG-FIX>

### Summary
<1-2 sentence overview of what happened>

### Learnings captured
- [<category>] <learning> → written to `<target file>` ✓
- [<category>] <learning> → already exists in `<target file>`, skipped
- [one-off] <finding> → noted here only

### What to watch next time
<optional: flag anything that could recur>
```

For **bug-fix** entries, also include:
```md
### Bug root cause
<one sentence: what code pattern caused the bug>

### Where this should have been caught
<which agent/step missed it, and what check would have prevented it>
```

**Never overwrite existing entries.** Always append below the last `---` separator. Add `---` after your new entry.

### 5. Write to agent files (MANDATORY for non-one-off learnings)

**Every learning NOT categorized as `one-off` MUST also be written to the corresponding agent file.** A learning that only lives in `learnings.md` will not prevent recurrence.

For `figma-translation`, `jekyll-framework`, `scss-patterns` learnings:
- Open the target agent file
- Find the most relevant existing section (or add a `## Known Patterns` / `## Common Mistakes` section at the end)
- Insert the finding as a concise bullet or short block

Example for `section-implementer.md`:
```md
## Known Patterns

### Figma color translation
- `#3B1D62` → `$dark-purple` (always use SCSS variable, never hardcode hex)
- When Figma uses a gradient fill, check `_colors.scss` for the matching gradient variable
```

### 6. Write to `CLAUDE.md` (only for `project-convention` category)

Update `CLAUDE.md` only when:
- The finding affects how ANY file in the project should be built
- The convention is clear and stable — not a workaround or hypothesis

Add a bullet to the most relevant existing section. Do not restructure existing content.

---

## Output

```
Retrospective: <page-slug> / <Section Name> — <trigger>

Learnings found: <N>
  - [figma-translation] <brief description> → section-implementer.md updated
  - [jekyll-framework] <brief description> → jekyll-validator.md updated
  - [one-off] <brief description> → learnings.md only

Files modified:
  - .claude/work/learnings.md (appended)
  - .claude/agents/section-implementer.md (Known Patterns section)

Nothing written to CLAUDE.md (no project-convention findings)
```
