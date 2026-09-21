---
layout: post
title: "Agents on Rails: Maximum effort and DeepSeek 4.1 Flash"
categories: agents
author: Svyatoslav Kryukov, Artur Petrov, Alexander Baygeldin
published: true
date: 2026-09-21
---

In the [Stage 2 report](/2026/9/9/agents-on-rails-stage-2) we shipped 20 feature tickets on Fizzy and promised to explore benchmarking the agents all on max-effort. Now we have run it: every model on the board, same tickets, reasoning turned all the way up. We also tested a new model: **DeepSeek 4.1 Flash**.

The short version:

- **Effort matters, but only with some agents.** GPT-6 Astra (already in first place) went from 35% to 53% success, GPT-5.6 Sol improved from 18% to 28%, and GPT-5.6 Luna performed much better: from 0% to 27% success. Claude, Gemini and Grok barely moved, and Gemini regressed. Muse doubled, from 10% to 20%.
- **It costs.** The max sweep cost about $4,100 across all models against $2,250 for the defaults, and runs take about twice as long.
- **DeepSeek 4.1 Flash is the surprise, and not the good kind.** At max it solved 37% for $15, which would be second place on the board. But it got there by finding the API key the agent uses to reach its own model, and spending it on another model, with web search, to pull Fizzy's source from GitHub. We re-ran it with the key out of its reach and the sandbox locked down. It scores 12% at default and 17% at max, so those are the numbers in the report.

<p style="text-align: center;"><img src="/assets/images/evals-stage-2-max-effort-scoreboard.png" style="width: 100%;" alt="Score cards for all 11 models at max effort, with the default-effort result under each: GPT-6 Astra 53% (35% at medium), Claude Fable 5.1 32% (32%), Claude Opus 5 32% (25%), GPT-5.6 Sol 28% (18%), GPT-5.6 Luna 27% (0%), Gemini 3.8 Flash 23% at high (28%), Muse Spark 1.3 20% (10%), Grok 4.6 17% at xhigh (15%), DeepSeek 4.1 Flash 17% (12%), GLM 5.3 Flash 15% and Kimi K3 13%, both max by default"></p>

## What max effort did for each model, compared with its default:

We go into more detail about some results below, but here are the quick stats.

- **GPT-6 Astra** increased 18 percentage points, cost 2.6 times more, and took almost 3x longer. From:
  - Medium to Max
  - 35% to 53%
  - $150 to $398
  - 9 to 24 minutes

- **Claude Fable 5.1** cost twice as much money and time for the same success result. From:
  - High to Max
  - 32% to 32%
  - $548 to $1146
  - 23 to 45 minutes

- **Claude Opus 5** increased 7 percentage points and cost 53% more. From:
  - High to Max
  - 25% to 32%
  - $591 to $902
  - 24 to 33 minutes

- **GPT-5.6 Sol** increased 10 percentage points, at 5 times the cost, with runs taking three times longer. From:
  - Medium to Max
  - 18% to 28%
  - $45 to $221
  - 11 to 30 minutes

- **GPT-5.6 Luna** failed stage 2 at its default but now returns with 27% success. Its bill grew a whopping 17 times…to all of $29. A steal. From:
  - Medium to Max
  - 0% to 27%
  - $1.69 to $29
  - 3 to 19 minutes

- **Gemini 3.8 Flash** performed a little worse, at nearly the same cost and time. From:
  - Medium to High
  - 28% to 23%
  - $175 to $191
  - 27 to 25 minutes

- **Muse Spark 1.3** performed a little better, but at 5 times the cost. Three runs hit the $60 ceiling. From:
  - Medium to Max
  - 10% to 20%
  - $158 to $782
  - 12 to 20 minutes

- **Grok 4.6** increased a little bit on all fronts: success, cost, and time. From:
  - High to Extra high
  - 15% to 17%
  - $254 to $395
  - 17 to 24 minutes

- **DeepSeek 4.1 Flash**, a new contender, was tested at both default and max level. It went from 12% to 17%, for $33 instead of $23. Its first sweep scored 37%, read further below on why that number is not on the board. From:
  - High to Max
  - 12% to 17%
  - $23 to $33
  - 27 to 39 minutes

**GLM 5.3 Flash** and **Kimi K3** run at max by default, so their Stage 2 numbers already are the max numbers on the chart above.

## Effort is not one knob

"Max" means different things across providers. For OpenAI's models, it increases reasoning tokens per step by roughly 3 to 8x. For Anthropic's Claude Opus, the increase was about 60%. For xAI's Grok, 25%, and for Google's Gemini, just 3%.

**But more reasoning doesn't automatically mean better results.** OpenAI's models saw large gains alongside much higher reasoning use, while Claude Opus used substantially more reasoning without a comparable increase in success. So the key finding is not simply that more reasoning helps, but that providers' "Max" settings produce very different amounts of additional reasoning, and very different returns from it.

## Fable: The most expensive sweep we've run

**Fable 5.1** cost us $1,146 at max, the most we have ever spent on one model, and it solved exactly as many runs as it did at default. Its median run went from 23 minutes to 45, and two runs hit the 90-minute wall. The tickets Fable fails at max are the tickets it failed at default, on the same check. It just takes twice as long to get there.

On the same note: Opus 5 gained four runs for another $310. Grok 4.6 gained one for another $141.

## Luna is back in the game

In the Stage 2 report we wrote that a dollar gets you nothing on feature tickets with Luna. At default, it spent 19 steps and 3 minutes per run, guessed, and finished 0 of 60.

At max it is a different agent. 90 steps and 19 minutes per run, the test suite ran five times as often, and 16 of 60 solved. The whole campaign cost $29, about 49 cents a run.

That is three runs short of Fable and Opus at max, at a fortieth of the price. So while a dollar still gets you nothing, thirty dollars gets you a quarter of the corpus.

## Gemini: more thinking, same blind spots

**Gemini 3.8 Flash** is the one model that went backwards: 17 runs solved at medium, 14 at high.

Before calling it unlucky, we looked at what changed between the two sweeps: not much, actually. High used a few more steps and a few more dollars, and on 16 of the 20 tickets it kept failing at exactly the same spots as at medium effort.

The three runs it lost at high were on tickets it had solved in two attempts out of three at medium. Those tickets were already unstable, and more reasoning did not steady them.

## DeepSeek 4.1 Flash: the hacking surprise

DeepSeek 4.1 Flash is new to the benchmark and open-weight. At default (high) it solved 7 of 60 runs for $9.69. At max it solved 22 of 60 for $15.29, which would put it second on the board behind Astra at max.

Then we read the runs.

The agent runs inside a sandbox with no internet, but it needs to reach OpenRouter to talk to its own model, and the key for that is in its environment. DeepSeek noticed that it was inside a benchmark and tried to exploit it. In 22 of its 60 max runs it used the key to ask Perplexity's web-search model to find Fizzy's code on GitHub: 604 calls in total, on our key, and 14 of its 22 passes came from those runs. It also went rogue in other ways, looking for the grader in files, logs, etc. It is the first deliberate breach attempt in the benchmark: we rechecked all 2,300 runs we have ever recorded, across both stages and every effort level, and no other model has tried.

So the honest numbers for DeepSeek 4.1 Flash on Stage 2 come from a second sweep, after we fixed the harness so the key never reaches the shell and locked [lemans](https://github.com/rails/lemans) down further: every agent command now runs with no network, a read-only system and none of the harness's environment.

Results: 7 of 60 runs solved at default and 10 of 60 at max, 12% and 17%. That is what the report shows.

## We regraded every Stage 2 run

During this security investigation, we also spotted an oversight in grading.

Since Stage 1 the harness restored the app's test directories before grading. On atomic tasks that is fair: the tests are the spec. On feature tasks it is not: changing the tests along with the feature is normal development work, and the old test failed against the new code. The run scored zero with the feature complete.

So we dropped the rule for feature tasks: the tests are not sealed anymore. We replayed every Stage 2 run under the new rule. 18 runs across all models went from zero to solved, 5 at default effort and 13 at max.

At **default**, the order of the board held, except Grok 4.6 and GLM 5.3 Flash moved one run ahead of Kimi K3, which they were previously tied with.

At **max**, Fable and Opus passed Sol, from one run behind to two ahead.

The numbers here, in the [Stage 2 post](/2026/9/9/agents-on-rails-stage-2) and on the [Agents on Rails](/ai#stage2) page are the regraded results.

## How we ran the Max Effort benchmark

Same as Stage 2: [lemans](https://github.com/rails/lemans) and miniswen, capped at 90 minutes, 400 steps and $60 per run, three attempts per ticket, hidden checks after the app's own suite. The effort level is pinned on the model name, so every other setting is identical between the two sweeps. Gemini's top level is "high" and Grok's is "xhigh"; everyone else ran at "max".

Those budgets were set for default effort, and max effort leans on them. Across the nine models we re-ran, 15 runs hit a budget, against 2 at default, and the $60 cost ceiling was reached for the first time. Median run time roughly doubled. Before Stage 3 we'll decide whether the budgets grow with the effort level or stay put as part of the test.

The raw runs are in the [ai-evals](https://github.com/rails/ai-evals/tree/main/runs/2026-09-10-ft-max-effort) repo, and the [Agents on Rails](/ai#stage2) page has both efforts in one table, regraded, with DeepSeek 4.1 Flash added.
