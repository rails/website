---
layout: post
title: "Agents on Rails: Claude Fable 5.1 and GLM 5.3 Flash (formerly known as ox-alpha)"
categories: agents
author: Svyatoslav Kryukov, Artur Petrov
published: true
date: 2026-09-02
---

**Claude Fable 5.1** dropped yesterday. See how it handles real Rails tasks, and where it landed on the [leaderboard](/ai) today. We also finally have a name for the stealth model from [the last round](/2026/8/24/agents-on-rails-lemans).

## Fable 5.1: We have a new best.

Fable 5.1 scored as well as Claude Opus 5 on accuracy, but surpassed it in all other marks (including price!). And it does security work now.

Fable 5.1 solved **58 of 63 runs (92%)**, matching Claude Opus 5 at the top of the leaderboard, and passed 20 of the 21 tasks at least once. Here is how it compares:

- **Claude Fable 5.1**: 58 of 63, **$75** for all 63 runs, **5.4 minutes** median per run.
- **Claude Opus 5**, the sole leader until now: 58 of 63, $120, 9.7 minutes.
- **Claude Fable 5**: 57 of 63, $146, 6.8 minutes.

<p style="text-align: center;"><img src="/assets/images/evals-fable-5-1-scoreboard.png" style="width: 100%;" alt="Score cards for all 17 models: Claude Fable 5.1 92%, Claude Opus 5 92%, Kimi K3 90%, Claude Fable 5 90%, GPT-5.6 Sol 84%, Grok 4.6 83%, GLM 5.3 Flash 83%, GLM 5.3 79%, Claude Opus 4.8 79%, GPT-5.6 Terra 78%, Qwen3.8-27B 76%, Muse Spark 1.2 76%, GPT-5.6 Luna 73%, Gemini 3.7 Flash 71%, Claude Sonnet 5 70%, GLM 5.2 67%, DeepSeek V4 Flash 65%"></p>

Efficiency is the clearest difference between 5.1 and the previous generation: the bill is ~50% lower than Fable 5's and ~40% lower than Opus 5's. It's also the fastest model across the top tier, on par with Sol.

Fable 5.1 also seems less likely to mistake a security task for a security problem. [In the first report](/2026/8/13/agents-on-rails-the-first-benchmark-report), Fable 5 failed all three attempts at a task phrased like a pen-test report. Fable 5.1 read the same report and fixed every finding.

These results come from a relatively small number of runs. At this stage of the benchmark, we run each task 3 times, a compromise between runtime and accuracy. Fable performed better in the preliminary runs, completing around 95% of tasks, but got unlucky in the official run.

## The best Rails recall so far

We also ranked 5.1 on Rails API recall [again](/2026/8/13/agents-on-rails-the-first-benchmark-report). Each task points to a specific Rails API that should be used by the ideal solution. (A hand-rolled replacement may pass the checks, but it isn't the Rails way.)

Until now, scores ranged from 8% to 35%. **Fable 5.1 reached 41%**. That improvement isn't simply a newer model recognizing newer APIs. For example, `quote_column_name` is nearly as old as Active Record, and no previous model had mentioned it unprompted.

<p style="text-align: center;"><img src="/assets/images/evals-fable-5-1-recall.png" style="width: 100%;" alt="Rails API recall per run, 63 runs each. Claude Fable 5.1: 26 recalled unprompted (41%), 9 found in output, 20 passed over, 8 hand-rolled. Claude Opus 5: 20 recalled (32%), 14 found, 15 passed over, 14 hand-rolled. Claude Fable 5: 21 recalled (35%), 6 found, 21 passed over, 12 hand-rolled, 3 runs without a patch"></p>

## One more thing...

Last round's ox-alpha has come out of stealth too: it's **GLM 5.3 Flash** from Z.ai. We retired the stealth slug and reran all 63 attempts under the real name and price. It matched the pre-release results with 52 of 63 (83%) scored at a total cost of $3.31.
At five cents a run, Flash is a great value pick. It matches Grok 4.6's 83% score at one-fifteenth the cost.

## The fine print and small updates to the Agents on Rails page

Everything ran the usual way: the [lemans](https://github.com/rails/lemans) harness, **default effort levels**, three attempts per task across the 21 atomic Writebook tasks, hidden verification. The raw runs are in [rails/ai-evals](https://github.com/rails/ai-evals/tree/main/runs/2026-09-01-atomic-tasks-fable-5-1-and-glm-5-3-flash) if you want to dig in.
The current numbers live on the [Agents on Rails](/ai) page, as always. We added default effort levels used during the benchmark run for transparancy. We also updated the charts there, thanks to an idea from Nate Berkopec: whatever you compare, the better models now appear in the top-right corner. There's a tie at the top: two models score 92%, and both were stopped by the same task. The atomic corpus is starting to run out of room, so we're preparing larger, more realistic tasks for [Stage 2](/2026/8/12/llm-benchmarking-project). Stay tuned!
