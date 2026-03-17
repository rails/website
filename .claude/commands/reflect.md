Invoke the `retrospective` agent in manual mode to capture a learning or observation.

**Usage:** `/reflect <notes>`

**Examples:**
```
/reflect When scaffolding a new year, always verify the SCSS entry point has the empty frontmatter block before the @charset line.
/reflect The sponsor logo naming convention should always use RW-logo-companyname.svg — not the company's own file naming.
/reflect Mobile navbar z-index needs to be higher than the announcement banner or it gets obscured.
```

**What happens:**
1. The `retrospective` agent receives your notes as free-form context
2. Categorizes the learning: `figma-translation`, `jekyll-framework`, `scss-patterns`, `project-convention`, or `one-off`
3. Writes to the appropriate agent file(s) if generalizable
4. Appends an entry to `.claude/work/learnings.md`

**Output file:** `.claude/work/learnings.md` (always updated)

---

Invoke the `retrospective` agent with:
- trigger: "manual"
- notes: $ARGUMENTS
