---
title: "Durable orchestration on Rails: from continuation to workflow"
day_label: "24 SEPT"
time: "1:00 PM"
track: "TRACK 2"
speaker: "vladimir-dementyev"
tags:
  - Active Job
  - Workflows
  - Orchestration
description: >-
  Rails 8.1 shipped Active Job Continuation so long-running jobs survive restarts and resume from a checkpoint. This was a real step forward, but can only be the beginning. The workflows Rails apps orchestrate today need more than interruptibility: durable state across steps, pause/resume capabilities, and human-in-the-loop-like interactions. This talk introduces a small, principled extension to Active Job that connects the dots: same step DSL, same job runner, now with persistent context, scheduled steps, and first-class resumeability.
---
