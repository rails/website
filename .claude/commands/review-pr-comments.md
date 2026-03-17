Systematically process all unresolved review comments on the current branch's PR. For each comment: triage, respond, and fix if agreed. Then validate Jekyll build and run visual QA on every affected section. Always ends with a retrospective.

**Usage:** `/review-pr-comments`

**Prerequisites:**
- On a branch with an open PR
- `gh` CLI authenticated
- Jekyll dev server running: `bundle exec jekyll serve --livereload` (`localhost:4000`)
- ImageMagick installed (`brew install imagemagick`)

---

## Pipeline

```
fetch PR comments (gh api)
       ↓
for each comment → read affected file → triage
       ↓
┌─────────────────────────────────────────────┐
│  AGREE        → apply fix + reply           │
│  UNSURE       → reply asking human          │
│  NOT AN ISSUE → reply with explanation      │
│  ALREADY FIXED→ reply noting it's resolved  │
└─────────────────────────────────────────────┘
       ↓
jekyll-validator (bundle exec jekyll build)
       ↓  ↑ fix loop until PASS
for each affected section:
  visual-qa  (screenshots vs Figma reference)
       ↓
  section-reviewer (PASS / ITERATE — up to 2 fix rounds)
       ↓
commit + push all fixes in one commit
       ↓
reply to all comments on GitHub
       ↓
retrospective (ALWAYS — trigger: "pr-review")
       ↓
summary table to user
```

---

## Step-by-step

### 1. Fetch all PR review comments

Detect the PR for the current branch:
```bash
gh pr list --head $(git branch --show-current) --json number --jq '.[0].number'
```

Fetch all review comments:
```bash
gh api repos/{owner}/{repo}/pulls/{pr_number}/comments --paginate
```

Filter out:
- Bot comments
- Reply comments (`in_reply_to_id != null`) — process only top-level comments
- Comments already replied to in a previous run

### 2. Read context for each comment

For each comment, read the affected file at the referenced line (±20 lines of context). Understand the full behavior, not just the single line.

### 3. Triage each comment

#### AGREE — Real issue
- Accessibility violation (missing alt, aria, keyboard nav)
- Functional bug (wrong behavior)
- Correctness issue (typo, wrong data, broken link)
- Jekyll/Liquid error
- Missing required frontmatter field

Action: Queue the fix.

#### UNSURE — Needs human judgment
- Design decision that could go either way
- Change that might conflict with Figma design intent
- Content requiring business knowledge

Action: Reply explaining the tradeoff and ask the reviewer to decide.

#### NOT AN ISSUE — Incorrect or inapplicable
- Code already handles the concern
- Comment misunderstands Jekyll/Liquid behavior
- Purely stylistic preference
- About a DEFERRED item already tracked

Action: Reply with a clear, respectful explanation.

#### ALREADY FIXED — Resolved in a later commit
Action: Reply noting the commit that addressed it.

### 4. Apply all AGREE fixes

Apply fixes in a batch. For each fix:
- Use targeted edits — do not refactor surrounding code
- Verify shared includes/layouts don't break other pages

### 5. Run `jekyll-validator`

Invoke the `jekyll-validator` agent. Fix any errors before proceeding.

Also confirm clean local build:
```bash
bundle exec jekyll build --strict_front_matter 2>&1 | tail -20
```

### 6. Identify affected sections

Map each modified file to the section(s) it belongs to. Read `.claude/work/<page-slug>.md` for the section list with Figma node IDs.

### 7. Visual QA — for each affected section

Run the `visual-qa` agent per affected section. Compare browser screenshots against Figma references.

Then run the `section-reviewer` agent. On ITERATE, apply fixes → re-run jekyll-validator → re-run visual-qa → re-run section-reviewer. Max 2 additional rounds per section.

### 8. Commit and push

```bash
git add <specific files>
git commit -m "fix: address PR review comments

- <summary of fix 1>
- <summary of fix 2>

Jekyll build: PASS. Visual QA: PASS per affected section.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"

git push
```

### 9. Reply to all comments on GitHub

```bash
gh api repos/{owner}/{repo}/pulls/{pr_number}/comments/{comment_id}/replies \
  -f body="<reply>"
```

Reply templates:
- **AGREE:** `Fixed in [commit sha]. [Brief explanation]. Jekyll build + visual QA verified.`
- **UNSURE:** `[Explain tradeoff]. Leaving as-is — please confirm which direction to go.`
- **NOT AN ISSUE:** `Thanks for flagging. [Explanation of why it's correct / already handled].`
- **ALREADY FIXED:** `This was addressed in [commit sha].`

### 10. Run `retrospective` — ALWAYS

Invoke `retrospective` with trigger `"pr-review"`. Focus on:
1. What patterns do AGREE comments reveal? (Should the implementing agent have caught them?)
2. Were any NOT AN ISSUE verdicts borderline?
3. Were any fixes harder than expected?

Commit the retrospective:
```bash
git add .claude/work/learnings.md .claude/agents/
git commit -m "chore: capture PR review retrospective

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push
```

### 11. Summary table

```
## PR Comment Review Summary

| # | File | Comment (short) | Verdict | Action |
|---|------|-----------------|---------|--------|
| 1 | _includes/world/2026/components/navbar.html:12 | Missing aria-label | AGREE | Fixed |
| 2 | _sass/world/2026/modules/_hero_banner.scss:34 | Wrong color variable | AGREE | Fixed |
| 3 | ... | ... | NOT AN ISSUE | Explained |

### QA Results
| Section | visual-qa | Verdict |
|---------|-----------|---------|
| hero_banner | PASS | PASS |

### Totals
- Fixed: N | Needs input: N | Not an issue: N | Already fixed: N
- Retrospective: N learnings captured
```

---

## Triage guidelines

- **Accessibility issues are almost always AGREE.** Fix them.
- **Functional bugs are always AGREE.**
- **Jekyll/Liquid correctness issues are AGREE** — wrong data access patterns, missing includes, broken frontmatter.
- **"You should also..." scope creep is NOT AN ISSUE** if current code is correct.
- When in doubt, lean toward AGREE.

---

$ARGUMENTS
