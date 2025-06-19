---
layout: world/2025/session
title: "Resumable Jobs with Active Job Continuations"
speaker: donal-mcbreen.md
time: 13:45 - 14:15
location: Graanbeurs
running_order: 4
---

Long-running jobs can cause problems. They can delay deployments and leave old versions of your code running longer than expected. Interrupting them can leave data in an inconsistent state or cause redundant rework.

Active Job Continuations let you define multi-step workflows or checkpoint iterations to track your progress, and they’re easy to integrate with your existing jobs. From there, they handle interrupting and resuming jobs across application restarts.

We built Active Job Continuations at 37signals to make Basecamp's jobs container-friendly for deploying with Kamal. Come to this talk to learn more about how it works.
