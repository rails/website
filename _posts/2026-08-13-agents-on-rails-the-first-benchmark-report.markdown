---
layout: post
title: "Agents on Rails: the first benchmark report"
categories: agents
author: Svyatoslav Kryukov, Artur Petrov
published: true
date: 2026-08-13
---

## TL;DR

We ran 8 models against 21 atomic Rails tasks, 3 runs each. Every task runs against [Writebook](https://github.com/basecamp/writebook): a bug report, a security finding, a feature request, each written the way you'd actually file it. Read [our announcement post](/2026/8/13/llm-benchmarking-project) for more information about the project.

<p style="text-align: center;"><img src="/assets/images/evals-atomic-scoreboard.png" style="width: 100%;"></p>

So, as of August 2026, which model is best?

- **Most accurate:** Claude Opus 5, 92% of runs solved (58 of 63)<sup>\*</sup>.
- **Cheapest:** GPT-5.6 Luna, 73% at its default medium reasoning effort, and all 63 of its runs cost 91 cents combined. Not a typo.
- **Fastest:** Luna again, at a median of 3.3 minutes per run task.
- **Best combination of all three:** GPT-5.6 Sol: 84%, about $1.50 and five minutes per task.

<sup>\*</sup> Claude Fable 5 would lead at ~95%, but it refused the one task worded like a security report.

## A dollar gets you most of the way. Each point after that gets expensive.

Luna ran all 63 of its runs for 91 cents and beat two models that cost more. Sol costs 36× Luna and buys eleven points. Opus costs 132× and buys nineteen. Past that, price stops predicting the score: Kimi matches Fable's 90% at half the bill, and Muse spends three times what Sol does to land eight points below it. Every number here is the model at its default API settings: no reasoning dial, no extra context.

<p style="text-align: center;"><img src="/assets/images/evals-atomic-cost-vs-accuracy.png" style="width: 100%;"></p>

Time doesn't track price either. Sol finishes a task in five minutes. Muse takes sixteen, and the transcripts show where they go: 18% executing commands, 82% thinking. The gap between models is thinking speed, not test speed. Your suite still matters, though. Opus runs it nine times per task, and an agent pays for a slow suite nine times over.

## Knowing Rails is what separates the models

Every task in the corpus turns on one Rails API, and the descriptions never name it. So for each run there is a question: did the model reach for the API, or write its own version from scratch?

Mostly, it writes its own. Rails API recall runs from 8% (DeepSeek) to 35% (Fable). Those same two models are 1.4× apart on score and four times apart on recall: knowing Rails separates the field far more sharply than solving the tasks does. And even the best model in the field ships a hand-rolled solution in most runs where the framework already had the answer.

<p style="text-align: center;"><img src="/assets/images/evals-atomic-api-recall.png" style="width: 100%;"></p>

Reaching for the API pays, too: runs that recalled it solved 92% of the time, against 87% for hand-rolled solutions. Runs that met the API and shipped something else anyway did worst of all, at 64%.

<p style="text-align: center;"><img src="/assets/images/evals-atomic-solve-rate-by-recall.png" style="width: 100%;"></p>

This matters beyond benchmarks: hand-rolled code is code your team now maintains.

## Luna to the moon

Luna's line on the leaderboard begged a follow-up: pennies, default medium effort, 73%. No model in the field had more room to grow on this corpus, so we picked it for two experiments in pushing the score without touching the model.

First, the reasoning-effort dial, and it worked. At high effort Luna scored around 86%, replicated across four sweeps, at $1.36 for a full corpus pass. At xhigh, 89% for $2.34. Give the 91-cent model room to think and it really does head for the moon: most of the frontier gap, gone.

Second, enriched context. We gave the agent more to read: the Rails guides, API docs, pointers to the right places. Recall moved, and Luna reached for the API more and hand-rolled less. The success score barely did. Context clearly steers style, but can it fix reasoning? That one stays open, and the next rounds will test richer setups.

## Fable would prefer not to

Fable would lead the field at ~95%, except it went zero for three on the one task worded like a pen-test report. If you're pointing agents at security work, this is worth knowing before you pick a model.

## Six tasks are solved. One resists everybody.

Six of 21 tasks are solved by every run of every model. Atomic Rails work is mostly a solved problem for frontier models, and the score turns on the other fifteen. The sharpest separator is a GDPR-inspired account-erasure task with no clear stop line: 8 of 24 runs, and it cleanly splits the top clump from everyone else.

<p style="text-align: center;"><img src="/assets/images/evals-atomic-task-grid.png" style="width: 100%;"></p>

The hardest task in the corpus is purging embedded images, a bug whose visible half hides a second one. That's the shape of task we want more of, and the next rounds will be built around it. Expect the top of the leaderboard to spread apart as the tasks catch up with the models.

## How we ran it, for the record

- **Corpus:** 21 atomic tasks on Writebook, each turning on one Rails API, spanning bug fixes, security hardening, performance, small features, and a flaky test suite. Tasks describe the problem, never the API.
- **Models:** all at their provider's default reasoning effort: Claude Opus 5 (high), Claude Fable 5 (high), GPT-5.6 Sol (medium), GPT-5.6 Luna (medium), Muse Spark 1.2 (medium), Kimi K3 (max), GLM 5.2 (max), DeepSeek V4 Flash (high).
- **Protocol:** 3 runs per model per task, 504 runs total, $493. Fair by construction: every run uses the same frozen harness, the same minimalistic agent with a lightweight prompt and only one bash tool (miniswen, our Ruby port of [mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)), the same step and cost limits, and default API settings for every model. The only thing that changes is the model.
- **Judging:** hidden test suites per task. A run passes when the tests do. No hidden assumptions: the tests check behavior, not implementation, so a hand-rolled fix passes just like an idiomatic one. Recall use is scored separately.

The tooling is going open source too: the corpus, the runs, and **lemans**, the Ruby harness we built to run all of this. Find it all in the rails GitHub soon.

If you want the current numbers rather than this snapshot, they're on the [Agents on Rails](/ai) page. Send feedback to <foundation@rubyonrails.org>.
