---
first_name: Vladimir
last_name: Dementyev
image_path: https://sessionize.com/image/441c-400o400o1-NGw3PWsf5gEWJJjsv3U6t7.jpg
tagline: Principal Engineer
company: Evil Martians
specific_order: 23
keynote: false
github: https://github.com/palkan
twitter: https://twitter.com/palkan_tula
talk_title: "Durable orchestration on Rails: from continuation to workflow"
talk_description: |
  Rails 8.1 shipped Active Job Continuation so long-running jobs survive restarts and resume from a checkpoint. This was a real step forward, but can only be the beginning. The workflows Rails apps orchestrate today need more than interruptibility: durable state across steps, pause/resume capabilities, and human-in-the-loop-like interactions. Building complex workflows and agentic pipelines in Rails has been simplified but still requires manual plumbing or reaching out to third-party gems or services.
  
  This talk explores the preexisting patterns and solutions to the durable workflow orchestration problem and introduces a small, principled extension to Active Job that connects the dot: same step DSL, same job runner, now with persistent context, scheduled steps, and first-class resumeability.
---

Vladimir is a mathematician who found his happiness in programming Ruby and Erlang, contributing to open source and being an Evil Martian. Author of AnyCable, TestProf, Ruby Next and many yet unknown ukulele melodies.
