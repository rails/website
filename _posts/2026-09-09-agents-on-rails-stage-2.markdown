---
layout: post
title: "Agents on Rails: Stage 2. Can a model ship a feature?"
categories: agents
author: Svyatoslav Kryukov, Artur Petrov, Alexander Baygeldin
published: true
date: 2026-09-09
---

Today we're expanding **Agents on Rails** with Stage 2, a new set of benchmark tasks that exercise a model's ability to deliver real-world features, more in line with how a developer would actually work.

Before we go deep, here are the results:

<p style="text-align: center;"><img src="/assets/images/evals-stage-2-scoreboard.png" style="width: 100%;" alt="Score cards for all 10 models on Stage 2 feature tickets: GPT-6 Astra 35%, Claude Fable 5.1 30%, Gemini 3.8 Flash 28%, Claude Opus 5 25%, GPT-5.6 Sol 15%, GLM 5.3 Flash 13%, Grok 4.6 13%, Kimi K3 13%, Muse Spark 1.3 10%, GPT-5.6 Luna 0%"></p>

First results for Stage 2:

- **Most accurate:** GPT-6 Astra, with 35% of runs solved (21 of 60).
- **Cheapest:** GLM 5.3 Flash, 13% for $18.78 across all 60 runs. (Luna's $1.69 would win, but it finished 0 of 60 tasks.)
- **Fastest:** GPT-6 Astra again, 9 minutes median per run. (Luna's 3 minutes don't count here, either.)
- **Best combination of all three:** GPT-6 Astra, for the third time. At $150.47 for the campaign it's on the cheaper end too, which makes it the model of this round. It’s also worth pointing out that Astra achieved this at its default effort level, which is **medium**.

## What is Stage 2?

How is Stage 2 different from Stage 1? Harder, as you can guess from the results, but it goes a bit deeper than that. [Stage 1](/2026/8/13/agents-on-rails-the-first-benchmark-report) asked whether a model knows Rails. Technically, they do: two models solve the corpus at 92%. With a huge caveat, though: models might know Rails, but the tasks were deliberately small, and more than half the time the models reinvented the wheel instead of reaching for the framework.

Stage 2 demands more. It asks whether a model can take a feature ticket and come back with a complete result.

To answer that, we wrote 20 feature tickets against [Fizzy](https://github.com/basecamp/fizzy), 37signals' kanban app, bigger and deeper than Stage 1's Writebook.

Each ticket is written the way a product person writes it to a developer: "Let's add Japanese to the app, ASAP." Real-world tickets don't list every requirement or name an API. A careful developer understands that anyway, and the hidden checks we built grade against what that developer would ship. These hidden checks test genuinely good engineering practices and some honest edge cases that might slip past a human developer, since we believe agents should perform better.

One hard rule: the verifier is still deterministic. The app's own suite has to stay green, then every hidden check must pass, with the test directories restored to their pre-agent state first. That's how it stays fair.

We started with 10 models this round, at their provider's **default effort**: GPT-6 Astra (medium), Claude Fable 5.1 (high), Gemini 3.8 Flash (medium), Claude Opus 5 (high), GPT-5.6 Sol (medium), GLM 5.3 Flash (max), Grok 4.6 (high), Kimi K3 (max), Muse Spark 1.3 (medium), GPT-5.6 Luna (medium).

Three are new to the benchmark: Astra, Gemini 3.8 Flash and Muse Spark 1.3. We kept the newest model from each family and left out superseded versions and the models that trailed behind on Stage 1. Feature runs cost 5 to 8 times what atomic runs did, about $2,250 for the whole set.

## Two ways to be at the top

Astra and Gemini Flash are first and third place on the Stage 2 leaderboard, respectively, and could not work more differently. Gemini reads everything and runs everything: 200 steps and 27 minutes per run. Astra takes a tenth of the steps, spends a fraction of the tokens, and is done in 9 minutes. Decisive and exhaustive both work, and the cost is relatively similar.

As you might guess there is a third way... Fable burns through money like it's nothing to come in second place.

## The clock

This time agents have a generous 90 minutes to complete each task. Kimi K3 hit this wall and timed out 14 times in 60 runs, GLM 5.3 Flash 12 times. Kimi's median run is 70 minutes. Both are open-weight, and both might move under a bigger budget, if you’re willing to spend both the time and the money

No other agent timed out more than once.

## A dollar gets you nothing now

Luna completing 46 tasks out of 63 for 90 cents was one of the most fascinating results of Stage 1, but on feature tickets it completed 0 out of 60. Big tasks require diligence, and smaller models like Luna try lucky guesses instead: submitting a half-done job, or skipping the test suite and the migrations altogether. At atomic scale you can ship a model’s work without checking with relatively few repercussions, but adding features requires more high-level planning, and a model that doesn’t or cannot do that, doesn't ship.

<p style="text-align: center;"><img src="/assets/images/evals-stage-2-cost-vs-accuracy.png" style="width: 100%;" alt="Solve rate against mean cost per run on a log scale, cheaper to the right. GPT-6 Astra 35% at $2.51 per run, Claude Fable 5.1 30% at $9.14, Gemini 3.8 Flash 28% at $2.92, Claude Opus 5 25% at $9.85, GPT-5.6 Sol 15% at $0.75, GLM 5.3 Flash 13% at $0.31, Kimi K3 13% at $5.16, Grok 4.6 13% at $4.23, Muse Spark 1.3 10% at $2.63, GPT-5.6 Luna 0% at $0.028"></p>

## Sometimes even money won't buy you feature completeness

Even the best models struggle with ambitious tasks like "Japanese has to ship complete." Only one run got there, and it was Fable's. Everyone else stopped short in their own way: most translated what they could see, ran their own suite, saw green, and shipped; a few were still translating when the clock ran out. "Complete" is the whole requirement, and no model has a way to know when it's met.

## The ticket doesn't say it, so the model doesn't do it

This is where most of the zeros come from. Tickets don't describe edge cases. A developer who has shipped this kind of feature before fills those in without being asked. The models mostly don't. The pattern repeats across the corpus: the happy path is usually there and usually works, and the edge cases are where the runs fall over.

## How we ran it

**Corpus:** 20 feature tickets on Fizzy, each with a rationale explaining why it's relevant, why it's hard, and what it exercises.

**Budgets:** 90 minutes, 400 steps, $60 per run.

**Harness:** [lemans](https://github.com/rails/lemans) and miniswen, unchanged.

**Judging:** Fizzy’s own test suite, and the hidden checks we built.

**Known limitations:**

- Default effort, as always. (Note: **A max-effort sweep is coming soon**.)
- No agent scaffolding and no internet access. The model is on its own with the task.
- Three attempts per task. We balance noise against speed, and k=3 is good enough for now.

## Next step: Stage 3

The next natural question after "can it ship this ticket" is "can it build on its own work across sessions?"

We plan to explore this in a few ways:

1. **From Zero to IPO:** how far can an agent get building a Rails application (and adding features) from scratch.
2. **Monolith survival with no guidance:** how do agents cope inside huge, non-conventional OSS projects.

Finally, DX. Now that the benchmark has enough headroom, we can experiment with MCPs and skills and see whether they result in better agentic workflows for Rails developers.

Check out the latest results and Stage 2 leaderboard on the [Agents on Rails](/ai#stage2) page. Raw data from the runs can be found in the [ai-evals](https://github.com/rails/ai-evals) repo.
