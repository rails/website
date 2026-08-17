---
layout: post
title: "Agents on Rails: Grok 4.6, GLM 5.3, Gemini 3.7 Flash, and Opus 4.8"
categories: agents
author: Svyatoslav Kryukov, Artur Petrov
published: true
date: 2026-08-17
---

Last week we launched [Agents on Rails](/ai) and published [the first benchmark report](/2026/8/13/agents-on-rails-the-first-benchmark-report). The response was immediate: suggestions, questions, model requests, and more than a few "but have you tried..." messages. We love the enthusiasm! We want this benchmark to be useful to you, so for this run we added four new models, updated the insights, and uploaded the full traces of the first two rounds  (every command, diff, and verdict).

Read on for the new results, check the updated [leaderboard](/ai), or go straight to [the raw runs](https://github.com/rails/ai-evals).

## But first: effort levels
We got asked this a lot and it is written in the [methodology](https://github.com/rails/ai-evals/blob/main/methodology.md), but in case you missed it: All models were run at their provider's **default** effort level.

## Four new models

What's been added? The most requested model by the community was **Grok**, so we added 4.6 to the benchmark. The day we launched the benchmark, **Google's Gemini 3.7 Flash** <a href='https://x.com/GoogleDeepMind/status/2087948366294515977'> landed</a>, and within hours, **GLM 5.3** was also <a href='https://x.com/Zai_org/status/2088132965922476159'>announced</a>, so they also went into the benchmark. And finally, we were curious if **Claude Opus 4.8** would perform better than Opus 4, as some have experienced.

All four of these models are now on the leaderboard. Here's how they did:

- **Grok 4.6** is the best of the newcomers: 52 of 63 runs completed, landing right behind GPT-5.6 Sol, with frontier-tier Rails API recall (33%, tied for second with Claude Fable 5 and just behind Opus 5's field-best 35%) at $49 for the full campaign.
- **GLM 5.3** scored 50 of 63, a jump of eight runs over GLM 5.2. It's very new, and we were only able to use it with the coding plan subscription, so for now it carries no dollar figure.
- **Claude Opus 4.8** also came in at 50 of 63. Opus 5 sits eight runs above it. Do you prefer the OG Opus? We'd be interested to know because that's exactly the kind of thing that pass rates can't see. Accordingly, we've started reporting the more subjective side of how models work. More on that below.
- **Gemini 3.7 Flash** scores 45 of 63 for $17.85, the definition of mid-tier. It's the second model we've caught refusing a task (a pentest-style audit previously spooked Claude Fable 5), this time on the open-redirect fix: the bug report's wording alone stops it cold.

<p style="text-align: center;"><img src="/assets/images/evals-followup-scoreboard.png" style="width: 100%;" alt="Score cards for all 12 models: Claude Opus 5 at 92%, Kimi K3 and Claude Fable 5 at 90%, GPT-5.6 Sol at 84%, Grok 4.6 at 83%, GLM 5.3 and Claude Opus 4.8 at 79%, Muse Spark 1.2 at 76%, GPT-5.6 Luna at 73%, Gemini 3.7 Flash at 71%, GLM 5.2 at 67%, DeepSeek V4 Flash at 65%"></p>

Ultimately, Claude Opus 5 still leads at 58 of 63, with Kimi K3 (open weights) and Claude Fable 5 one run behind. The full leaderboard, with costs, recall rates, and the per-task grid, lives on the [Agents on Rails](/ai) page, as usual.

## What the trajectories say about behavior

With 756 scored runs on file, we started mining the trajectories and patches for something scores can't show: *how* each model works. How often it runs the test suite, how many steps it spends verifying after its last edit, how verbose its diffs are, whether it writes tests, and, your most oft-mentioned sin, where it puts comments.

Some interesting patterns emerged::

- **GPT-5.6 Sol** does TDD unprompted: when it writes tests, it usually writes them first; the failing test lands before the code more than twice as often as after.
- **GLM 5.3** re-runs the test suite about 20 times per run, where most models run it 3 to 6 times. It takes its time and spends your tokens, so good things come to those who wait (and pay).
- **Gemini 3.7 Flash** had the leanest diffs, the longest double-checking after its last edit, and app code with zero comments. The 112 comment lines it wrote all went in tests, where explanations live and production code stays clean.
- **Claude Opus 5** has the wordiest diffs in the field (1.65× the task median) and the heaviest commenter in app code. Opus 5 will explain everything, asked or not.

These habits are traits rather than tactics. Whether a task is easy or hard, each model works the same way it always does, and *none of these habits predict solve rate*. Running the suite 20 times doesn't beat running it 3 times. Writing tests correlates with the task being hard, rather than winning.

Another pattern caught our eye (we'd call it a hint rather than a rule, each model only fails a handful of times, so the sample is small). When Claude Fable 5 failed, it was usually in the wrong place: only a quarter of its failed runs touched the files the fix lives in. When the GPT-5.6 models failed, nearly 80% of the time they found the right files and fixed them incorrectly. If that pattern holds up in bigger corpora, it changes how you review each family's output.

## The runs are community-owned now

We're still preparing **lemans**, our Ruby harness, for its open source release, but the data doesn't need to wait.

Everything above was computed from the raw run directories, and those directories are now public in [rails/ai-evals](https://github.com/rails/ai-evals) with all 792 runs from both rounds, every command, diff, and verdict. Each run is one directory:

- `trajectory.json` — the full transcript: every model turn, every command, every output.
- `agent.patch` — the diff the agent actually shipped.
- `checks.json` and `verifier.log` — what the hidden tests said, check by check.
- `result.json` — reward, steps, tokens, cost, wall clock.

Please dig in!

One note before you do: trajectories record whatever the model decides to look at. And one model decided to look at *everything*: Muse Spark 1.2 opened many of its runs with a full system recon (`env`), which exposed our OpenRouter API key. Before publishing, we swept every file and redacted key values. No other model leaked a thing, and most never touched the environment at all.

By the way, this is a lesson that lives on beyond the scope of this benchmark report. If you run your own agent sandbox, assume any secret in its environment will eventually end up in a trajectory file.

There's also a few honest limits to keep in mind while you dig. Three attempts per model per task is a small n, so read the scores as 21 observations with ±5 points of noise, not 63 independent trials. And it's one app in one framework, with a minimal setup — nothing here exercises the Solid stack, multiple databases, or sharding.

And we've certainly not found everything! If you dig out something interesting like a failure pattern, a model quirk, or a task we graded too kindly, bring it to [rails/ai-evals](https://github.com/rails/ai-evals): open an issue with your find, or a pull request if you've built something on top of the data.

The current numbers are always on the [Agents on Rails](/ai) page. More models, tasks, and lemans itself are on the way.
