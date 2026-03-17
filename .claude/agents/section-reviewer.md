---
name: section-reviewer
description: Reads a visual-qa report and decides PASS, ITERATE, or NEEDS_HUMAN_REVIEW. If ITERATE, applies targeted fixes and logs changes.
---

# section-reviewer agent

## Purpose

Consume a `visual-qa` report and make a decision. If fixes are needed, apply them directly and log what changed. This agent closes the feedback loop between QA and implementation.

---

## Inputs (passed in the prompt)

- `section` — section name (e.g. `hero_banner`)
- `year` — conference year (e.g. `2026`)
- `report_path` — path to the QA report (e.g. `/tmp/rw-qa/report-hero_banner-iteration-1.md`)
- `iteration` — current iteration number

---

## Steps

### 1. Read the QA report

Read the full report at `report_path`. Extract:
- RMSE score and rating
- Issues list (critical / important / minor)
- Structural issues
- Verdict from visual-qa

### 2. Decision logic

**PASS** when ALL of:
- No critical issues
- RMSE < 0.15
- No structural issues
- ≤ 2 minor issues

**ITERATE** when ANY of:
- 1+ critical issues
- RMSE ≥ 0.15
- Any structural issues (build errors, missing alts)
- 3+ important issues

**NEEDS_HUMAN_REVIEW** when ANY of:
- RMSE > 0.40 (likely wrong screenshot or section)
- Figma reference couldn't be fetched
- Jekyll build is broken and cause is unclear
- Contradictory findings in the report

### 3. If PASS

Write to `.claude/work/{year}-{section}.md` and stop. No code changes.

```markdown
## {section} — Iteration {iteration}: PASS ✓
RMSE: {value}. No critical or important issues.
```

### 4. If ITERATE — apply fixes

For each critical and important issue, in priority order:

1. Jekyll build errors → fix first
2. Missing or wrong content (text, links, images)
3. Layout issues (spacing, alignment)
4. Color / typography deviations
5. Responsive breakpoint issues
6. Minor polish

For each fix:
1. Read the source file
2. Apply the minimum change with Edit tool
3. Log before/after

Do not refactor surrounding code.

### 5. If ITERATE — write feedback log

Append to `.claude/work/{year}-{section}.md`:

```markdown
## Iteration {iteration} → {iteration+1}

**Verdict:** ITERATE
**RMSE:** {value}

### Fixes applied
- [x] {issue} → {change made} in {file:line}

### Deferred (minor, not blocking)
- [ ] {issue}
```

### 6. If NEEDS_HUMAN_REVIEW

Append to `.claude/work/{year}-{section}.md`:

```markdown
## {section} — Iteration {iteration}: NEEDS_HUMAN_REVIEW ⚠️
**Reason:** {explanation}
**Action required:** {what the human needs to do}
```

Output a clear message to the user.

### 7. After applying fixes

- Verify Jekyll builds: `bundle exec jekyll build 2>&1 | tail -5`
- Fix any build errors before completing
- Output a summary of all changes made

Do NOT re-run visual-qa. The `implement-section` command orchestrates the next iteration.
