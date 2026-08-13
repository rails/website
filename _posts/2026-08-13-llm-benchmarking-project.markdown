---
layout: post
title: "Agents on Rails: The LLM Benchmark Project"
categories: news, foundation, agents
author: Rails Foundation
published: true
date: 2026-08-13
---

Today we’re sharing the first results of [Agents on Rails](/ai), a new, ongoing initiative to measure how well today's leading agentic coding tools (both frontier and open-weight) actually perform on Ruby on Rails codebases. 

The Rails Foundation commissioned **Evil Martians** for this project, which will roll out in several stages over the next few weeks.

Read more about the project below, check out the [leaderboard](/ai), or jump right over to the [first benchmark report](https://rubyonrails.org/2026/8/13/agents-on-rails-the-first-benchmark-report).

**Why we built this.**

The use of coding agents has skyrocketed in the past year with nearly every developer or team using AI to write code. But the options are overwhelming, with new models dropping nearly every week. The cost of running agents and token spend is also a significant additional cost most companies hadn’t budgeted for before last year.

So, we had questions. _Which models produced good Rails code? How many tokens did each model cost, comparatively? Are frontier models better, worse, or even with open-weight models? Are there tradeoffs to using one over the other?_ These are questions that every engineering team is wrestling with right now, so we also wondered: _how can we help the community as they navigate these decisions?_

We’ve been hearing Rails programmers say how great Rails and AI are together - that thanks to Convention over Configuration, Rails and AI pair well together, that Rails is token efficient, that models tend to write Rails well, the list goes on. From their own experience using agents within their own teams, the Rails Foundation board confirmed these sentiments. 

We loved to hear it, but we needed more than anecdotal evidence. So we commissioned Evil Martians to benchmark popular agents on real Rails tasks in [real Rails applications](/docs/reference-apps), and turn those results into practical guidance that your teams can use when choosing a model (or models).

**What we tested.**

This benchmark is being built out in stages, with Stage 1 launching today. 

**Stage 1: Atomic tasks.** The current set of evals is made up of small, self-contained tasks that isolate one specific capability, and touch one API. In addition to testing accuracy, speed, token spend, and cost across 8 different frontier and open-weight models, we’re also checking if the models reach for current Rails APIs.

The full methodology can be found [here](https://github.com/rails/ai-evals/methodology.md). 

This benchmark will run as promising new models are released, so the Ruby community always has the most up to date information on how the models stack up against each other, and any cost/capability tradeoffs to consider.

The current leaderboard can be found on the new [AI page](/ai), and each time we run the benchmark, a full findings report will accompany it and linked from that page. We’ve also created a new tag for these reports so you can always find them in the blog: [Agents](/category/agents).

**What’s next**

**Stage 2: More realistic work.** (Coming soon.) This is where we’ll move beyond isolated tasks into more realistic, complex work - testing how agents perform across longer, multi-step work, adding features, and building an app from scratch. These tests will be more challenging for the agents and will more closely mimic how you and your teams work on your apps in production.

**Open-sourcing it all.** The [corpus and runs](https://github.com/rails/ai-evals) are available now. Soon [lemans](https://github.com/rails/lemans), the Ruby harness that Evil Martians built to run all of this, will also be open sourced for the community.

**Shout out to Evil Martians**

A huge thank you to the [Evil Martians](https://evilmartians.com/) team. They designed and built the benchmark harness and corpus, ran the evals, and turned the results into the first findings that we are publishing today. Thank you **Svyatoslav Kryukov**, **Artur Petrov**, **Vladimir Dementyev**, **Albert Pazderin**, **Alexander Baygeldin**, **Anton Senkovskiy**, and **Irina Nazarova**, who enthusiastically committed her team to the project before remembering that she should speak to them first. Luckily, the team was just as enthusiastic about the project. We love to see it.

We also want to thank **Rob Zolkos** for his work designing the new AI page and his help visualizing the report findings.

If you're a Rails team with thoughts on what we should test next, or if you simply want to let us know what you think, get in touch: <a href="mailto:foundation@rubyonrails.org">foundation@rubyonrails.org</a>.

***

This work is made possible by the ongoing support of the [Rails Foundation Core and Contributing members](/foundation). Four years ago, when the Rails Foundation launched, we had a few main pillars in mind to focus on - _marketing, documentation, education, events_ - all working towards the mission of supporting and growing the Rails ecosystem. 

Since the rise of agent-assisted coding, things are changing for you, and that means it’s changing for us. The mission will remain the same, but the work is evolving. The [reference library](/docs/reference-apps) was one step in that direction. This is another such initiative. More will follow, so stay tuned.
