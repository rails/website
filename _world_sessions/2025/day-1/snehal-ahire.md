---
layout: world/2025/session
title: "Rails Under a Microscope: Diagnosing Slowness at the Byte Level"
speaker: snehal-ahire.md
time:
location:
running_order:
---

We realized our legacy code didn’t need a rewrite, it needed a performance plan.

This talk shares how we tackled real production issues like memory bloat, slow queries, and Sidekiq queues piling up under load, where simple fixes like batching jobs or tweaking retries didn’t help much.

We thought Active Record was the bottleneck, but fixing it only scratched the surface. We optimised query access patterns, chose more efficient data structures, restructured background jobs, and introduced smarter database caching and indexing strategies.

I’ll share how we analysed query plans, fine-tuned database performance, and replaced slow, fragile logic with leaner, more explicit code paths that scaled better and failed less while Rails stayed right at the center of it all.
