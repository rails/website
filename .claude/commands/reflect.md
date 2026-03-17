Invoke the `retrospective` agent in manual mode to capture a learning or observation.

**Usage:** `/reflect <notes>`

**Example:**
```
/reflect After /plan-page output is reviewed, commit the work file to the dedicated branch before starting implementation.
```

**What happens:**
1. The `retrospective` agent receives your notes as free-form context
2. Categorizes the learning (figma-translation, jekyll-liquid, component-analysis, project-convention, or one-off)
3. Writes to the appropriate agent file(s) if generalizable
4. Appends an entry to `.claude/work/learnings.md`

**Output file:** `.claude/work/learnings.md` (always updated)

---

Invoke the `retrospective` agent with:
- trigger: "manual"
- notes: $ARGUMENTS
