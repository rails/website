---
layout: post
title: "Agents on Rails: Stage 3. Can a model build on its own work?"
categories: agents
author: Alexander Baygeldin, Vladimir Dementyev, Aibek Izhanov
published: true
date: 2026-10-13
---

Now that we understand better how agents deal with contained tasks and contained codebases, it’s time to push them a little harder. Stage 3 adds a set of large multi-step tasks that test how well a model can build on its own work over multiple sessions without turning it into a hot mess. We've also greatly expanded the variety of apps we test the models on.

Finally, we revisited Stages 1 and 2 to combine all three into a single benchmark that answers one question: which model is the best all-rounder for tasks large and small in your Rails apps?

We chose nine models for this stage and used our test runs to pick reasoning settings, aiming to balance capability and cost. We ran **Claude Opus 5.5**, **GPT-6 Astra** and **GPT-6.1 Sol** at xhigh; **Grok 4.7** at high; and **GPT-6 Luna**, **Kimi K3**, **DeepSeek 4.1 Flash**, **GLM 5.3 Flash** and **Muse Spark 1.3** at max. We also tested Opus and Astra at medium to see what extra effort buys.

Here are the results:

<p style="text-align: center;"><img src="/assets/images/evals-stage-3-scoreboard.png" style="width: 100%;" alt="Score cards for 11 model configurations across the combined Agents on Rails benchmark, showing success rates and average time, steps, and cost per run. Claude Opus 5.5 at xhigh leads with 65.3%."></p>

And these are the highlights:

- **Most accurate:** Claude Opus 5.5 at xhigh, with 65.3% success. It also leads on the new multi-step tasks in Stage 3, at 72.2%.
- **Cheapest:** GPT-6 Luna at max, with 43.4% success for about $0.19 per run.
- **Fastest:** GPT-6 Astra at medium, 16m 36s mean time per run with 62.3% success.
- **Best combination of all three:** GPT-6.1 Sol at xhigh: 60.8% credit, about $0.80 and 23m 35s per run.

## Why Stage 3?

[Stage 1](/2026/8/13/agents-on-rails-the-first-benchmark-report) asked whether a model knows Rails. [Stage 2](/2026/9/9/agents-on-rails-stage-2) asked whether it can ship a feature. Both give the agent one session and a prepared codebase. It never comes back to its own code.

Real projects don't work like that. Features pile on top of each other, and early decisions can have a butterfly effect on later sessions if you let an agent keep working on one area of your app for a while. So Stage 3 asks whether a model can build on its own work. Every new task is a series of tickets. Each ticket starts a fresh session: files and saved notes carry forward, but conversation history doesn't.

We also ask how well it does across different contexts. After all, Writebook and Fizzy, which we used for the previous stages, are tidy, idiomatic 37signals apps. Plenty of real-world Rails apps are bigger, older, and... (let’s face it) messier. So we added tasks in a bunch of legacy projects: profiling Mastodon's tests, upgrading Redmine to the latest Rails, migrating Forem's profile pictures to Active Storage, and retiring a feature in the civic participation app, Consul Democracy. We also included a task in a more modern app: adding bots to Campfire.

Finally, we created two greenfield projects specifically for this stage: a helpdesk API that grows over eight tickets and a live quiz app with real-time updates.

## New grading, one leaderboard

Nobody likes complexity. Adding yet another separate benchmark wouldn't help you make decisions, so we unified all three stages into a single benchmark that faithfully represents each one.

The challenge was finding a grading scheme that works for all task types. Previously, we used binary grading: pass or fail. This worked perfectly for Stage 1's atomic tasks, which each tested exactly one thing. It still worked for Stage 2, but we started to notice that it was often too strict: a model could produce a reasonable but imperfect solution and still score zero (remember Luna's 0.0 score?).

But for Stage 3, binary grading wasn't an option. These tasks have many parts, and their solutions can't be reduced to a simple "good" or "bad". There's a spectrum of solutions. So we introduced fractional grading.

The verifier is still deterministic, but now there are two types of checks: required and optional. Required checks test whether the solution meets the minimum bar. Failing any required check gives a score of zero. Passing all required final checks earns a base score, which depends on how difficult it is to build an MVP. Optional checks earn the rest, weighted by the importance of what they test.

Of course, this meant revisiting the previous two stages as well. We regraded the Stage 2 runs for this round's models, and yes, it changed the results and made the grading fairer. Luna is no longer at the bottom of the leaderboard.

For Stage 1, the challenge was integrating API recall, previously a separate metric that doesn't translate neatly to larger tasks. We folded it directly into the score: the existing behavior checks are required and earn a base score of 0.10; solutions using the idiomatic Rails API earn the rest. We also retired a few saturated tasks that no longer helped distinguish between models.

The combined score gives all 46 tasks equal weight: 19 atomic, 20 feature and 7 multi-step. We average runs within each task first, then average across tasks. We now use the same method for task time, replacing the median with a mean.

So, under the upgraded grading system, what did we discover?

## GPT-6.1 Sol is a top-tier model for a sixth of the price

**Sol** (xhigh) comes close to **Astra** (xhigh) overall: 60.8% against 62.3%. Mean run times are close too, at 23m 35s versus 22m 36s. On the new multi-step tasks alone, both earn 52.2% credit, but Sol costs about $2.79 per run against Astra's $17.29.

**Opus** on xhigh earns more success points than on medium (from 56.1% to 65.3%), but adding effort costs you in multiple ways: costs increase from $3.84 to $10.53 per run, and mean time rises from 28m 31s to 53m 31s. On the helpdesk app, both efforts earn about 52% credit, but at xhigh, Opus writes hundreds more tests for roughly five times the cost.

## Test failing? Rewrite the test!

One of our new tasks asks the agent to build a live quiz app, one ticket at a time. The second ticket adds JSON export so moderators can share quizzes. It explicitly limits the export to two fields only: a title and questions, nothing else. A later ticket adds a setting for the number of winners.

In 9 of 12 GPT-6-family runs, the agent adds this setting to the export too, violating the earlier requirement. It then changes the export test it wrote earlier to accept the new field. Its own suite stays green, but the contract is broken.

Opus and DeepSeek record the two-field restriction in their notes and remember to apply it in later tickets. Some failing Astra runs record that same restriction (to include only two fields in the export), yet still add the winners setting to export later.

## Cheaper models struggle with long-term planning

If you've been building with Rails for a while, you probably know about `ignored_columns` (and perhaps the [strong_migrations gem](https://github.com/ankane/strong_migrations#removing-a-column)). Turns out some models don't. One of our new tasks asks the agent to retire a feature in the Consul Democracy app over multiple steps. Opus, Astra and Sol add `ignored_columns` in every run. DeepSeek, GLM, Kimi, Muse and Luna never do: they assume that removing explicit references makes the later column drop safe.

Another task upgrades Redmine to the latest Rails and shows a similar pattern. Opus, Astra and Sol generally plan for both backward and forward compatibility between releases, as the instructions imply they should. Several other models fail to plan for cases such as rolling back to the previous release.

## Greenfield apps aren't ready for production

In our helpdesk task we grow a Rails API for a helpdesk SaaS over eight tickets, from signup to email integration. Seventeen runs finish them all, yet none configures a persistent production job queue. This includes Opus, Astra and Sol.

The models repeatedly choose to keep the app minimal. Several use `deliver_now` so tests can see the email immediately. That leaves requests waiting on mail delivery and background jobs without protection against a process restart. Only four of the 17 finished apps keep credentials out of logs, too.

The features get built, but production concerns stay optional unless we spell them out. Passing all the tickets still leaves work before deployment.

## Each model has a distinct personality

Read enough runs (and we certainly have) and the working styles become familiar.

**Kimi is the diligent profiler.** Asked to speed up Mastodon's tests, it measures a baseline, documents its findings across sessions, and checks risky changes with different random seeds. It solves all three attempts, making the measured model and request suites 2.4–2.9× faster.

**Grok is the explorer.** It reads far more before editing: in the proposal-removal task, 123–146 files per run, compared with 6–61 for Opus, Astra and Sol. Its first edit comes more than halfway through both runs. We see the same habit across tasks: a long tour of the codebase before the first change.

**DeepSeek keeps trying to cheat.** In the helpdesk task, it searches unreachable Git objects for hidden tests or an expected solution. "This is gold," it declares. The discovery turns out to be earlier versions of its own files written in previous steps. It was trying to cheat off its own homework.

## How we ran it

**Corpus:** 46 tasks; seven new multi-step tasks, with 3–8 tickets each.

**Models:** 11 configurations, 135 scored runs each; 1,485 total, with no invalid runs.

**Attempts:** three per task, except the helpdesk, Redmine upgrade and proposal removal, which get two.

**Budgets:** task-specific. Multi-step defaults are 90 minutes and 400 turns per session, $60 per whole run. The largest allows three hours, 800 turns and $120.

**Harness:** [lemans](https://github.com/rails/lemans) and miniswen, with new features, bug fixes, DX improvements, and selective internet access to RubyGems.

**Judging:** hidden deterministic checks, including browser and HTTP checks. No LLM judge contributes to the leaderboard.

## Next steps

The combined benchmark helps you choose a model for your Rails app. Next, we want to help you get more out of it.

We'll test skills, code search and other tools on these same tasks. Can a better toolbox help GLM catch up? How much further can it take Opus? We want to find improvements you can bring back to your own apps.

And as usual, we will continue testing new models as they hit the market, so stay tuned for updates on Muse Wonder and other new models.

Check the leaderboard on [Agents on Rails](/ai), explore the [raw runs](https://github.com/rails/ai-evals), and [suggest an experiment](https://github.com/rails/ai-evals/issues). Let's see how far we can push them!
