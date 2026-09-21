---
layout: post
title: "Agents on Rails: lemans goes open source"
categories: agents
author: Vladimir Dementyev, Svyatoslav Kryukov, Artur Petrov
published: true
date: 2026-08-24
---

Another week, another step for [Agents on Rails](/ai). This one is a big one: [lemans][], the harness behind every number we've published, is now open source. We also ran four new models: **Sonnet 5**, **Terra**, an open-weight **Qwen** you can run on your own machine, and one that won't tell us its name.

If you're here for the ride, read on for the tour of lemans. If you're here for the scores, they're on the [leaderboard](/ai), and the [raw runs](https://github.com/rails/ai-evals) are updated too.

## Four new models, and one of them has no name

Qwen 3.8-27B is the one we (and many of you) were most curious about: it's open weight and small enough to run on hardware you may already own. Should you ditch your cloud LLM subscriptions and go `#supportlocal`? Well: it **scores 48 of 63**, right in the middle of the pack. Pretty good for a model that you can run locally. However, there's a catch! Qwen takes a median of **27 minutes per run** (we even had to raise our timeouts from 30 to 60 minutes to fit it), which is 1.7x the next-slowest model in the benchmark. Its Rails API recall is also the worst **at 7.9%**. Impressive for a model that might be run on a laptop.

**Terra** is another great option from the GPT family: it **scores 49 of 63** for 20 cents a run, at a median of **182 seconds**, which means it is now the fastest in the entire field bumping Luna into second place.

OpenAI's three models (Sol, Terra, and Luna) score 84%, 78%, and 73%, in exactly that order by price. The more you pay, the better you do, and all three run in the fastest third of the field, so the stronger model never costs you time.

Anthropic's lineup is the opposite story. **Sonnet 5** lands **at 44 of 63**, the weakest Anthropic result we've recorded, stretching the family's range from 92% down to 70%. Wide, and hard to explain. Sonnet 5 reaches for the right Rails API more often than Opus 4.8 (25.4% against 15.9%). It still finishes six runs behind, at twice the time. Better recall doesn't buy the result.

**ox-alpha** is the odd one out. It's a stealth model on OpenRouter: unnamed, unattributed, and free while it's in preview. It scores 52 of 63, matching Grok 4.6 exactly, with 28.6% Rails API recall.

<p style="text-align: center;"><img src="/assets/images/evals-lemans-scoreboard.png" style="width: 100%;" alt="Score cards for all 16 models: claude-opus-5 92%, kimi-k3 90%, claude-fable-5 90%, gpt-5.6-sol 84%, grok-4.6 83%, ox-alpha 83%, glm-5.3 79%, claude-opus-4.8 79%, gpt-5.6-terra 78%, qwen3.8-27b 76%, muse-spark-1.2 76%, gpt-5.6-luna 73%, gemini-3.7-flash 71%, claude-sonnet-5 70%, glm-5.2 67%, deepseek-v4-flash 65%"></p>

## lemans

We started our Agents on Rails experiments using [Harbor](https://www.harborframework.com), and it worked okay-ish. One thing bothered us from the very first day of this journey: why do we have to use this Python-esque (in all senses) good-enough tool? Why does our beloved Ruby and Rails community have no such tooling? We believed we deserved it. So with further encouragement from the Rails Foundation, we wrote one: [lemans][].

We didn't build lemans just to stay 100% Ruby and to be able to tweak the harness and tasks however we like (thanks to Ruby's openness). We also wanted:

- **Convention over configuration.** Less boilerplate than a benchmark usually asks for.
- A **CLI-first** tool, for engineers and for the agents they point at it.
- **Safeguards and fair grades.** Sandboxes an agent can't escape, and verification an agent can't talk its way past. More on both below.

You can see all of this yourself by giving lemans a try.

### Quick start

Clone the [evals repo](https://github.com/rails/ai-evals), install the `lemans` gem, grab your LLM provider and Daytona API keys, and you're ready to rock!

Which LLM? Any supported by [RubyLLM](https://rubyllm.com), the workhorse of our harness's LLM integration. Provide a token of your choice via environment variables, e.g., `ANTHROPIC_API_KEY=<token> lemans run ...` or `OPENROUTER_API_KEY=<token> lemans run ...`.

[Daytona](https://daytona.io) is the primary _sandbox provider_ supported by lemans. We've also just shipped a Docker backend, so you can run everything on your machine—useful for developing and debugging new tasks. However, in this post we will stick to Daytona, since this is what allowed us to spin up dozens of isolated concurrent trials for the Agents on Rails page.

We've figured out the dependencies. Now let's run some tests. Here is a complete snippet:

```sh
git clone https://github.com/rails/ai-evals.git
cd ai-evals

gem install lemans

export DAYTONA_API_KEY=<your key> OPENROUTER_API_KEY=<your key>

lemans run \
  --model openrouter/openai/gpt-5.6-luna \
  --runs-dir ./my-runs \
  --task ac-throttle-search \
  --task hw-scoped-broadcast \
  --attempts 3
```

The `lemans run` command takes a bunch of arguments. The most useful ones are:

- `--model`: specify the model on the fly (overriding the one defined in `bench.yml`); we use the following notation: `<provider-id>/<model-name>`
- `--task`: pick the tasks you want to run (all tasks are executed by default)
- `--runs-dir`: choose the folder to store the results (could be omitted but the default, `./runs`, is already populated with our historic results)

That's it. When the run finishes, you can find the results stored in the `my-runs/` directory:

```txt
my-runs/
  gpt-5.6-luna/
     ac-throttle-search__aGApA4O/
       agent.patch
       agent.trajectory.json
       checks.json
       result.json
       verifier.log
     ...
```

Each trial is represented by a single folder with the result record (`result.json`) and other evidence (for example, a full agent session log called _trajectory_ in [ATIF](https://www.harborframework.com/docs/agents/trajectory-format) format).

We don't expect you to read these files as-is—there is the `lemans report` command:

```sh
$ lemans report --runs-dir ./my-runs

task                 agent     model         reward  outcome    cost_usd  steps  tokens  duration  trial
ac-throttle-search   miniswen  gpt-5.6-luna  1       completed  0.0131    12     153536  130.7     ac-throttle-search__UDIqyvU
ac-throttle-search   miniswen  gpt-5.6-luna  1       completed  0.0122    12     139615  155.5     ac-throttle-search__OVrDYDN
ac-throttle-search   miniswen  gpt-5.6-luna  1       completed  0.0159    16     236046  191.6     ac-throttle-search__NOQ0EF0
hw-scoped-broadcast  miniswen  gpt-5.6-luna  0       completed  0.0153    17     220508  516.8     hw-scoped-broadcast__EdajQdT
hw-scoped-broadcast  miniswen  gpt-5.6-luna  1       completed  0.013     16     180751  137       hw-scoped-broadcast__Lpx2qrc
hw-scoped-broadcast  miniswen  gpt-5.6-luna  1       completed  0.0133    15     185271  136       hw-scoped-broadcast__vBdxmk9
6 trials: 6 scored, 0 invalid, 5 solved (83%) · $0.0828 · pass@3 2/2 tasks (100%)

# or aggregated per model-task
$ lemans report --runs-dir ./my-runs -A model-task

model         task                 score  time    cost     steps  tokens
gpt-5.6-luna  ac-throttle-search   3/3    2m 36s  $0.0138  13.3   176399
gpt-5.6-luna  hw-scoped-broadcast  2/3    2m 17s  $0.0138  16     195510
6 trials: 6 scored, 0 invalid, 5 solved (83%) · $0.0828 · pass@3 2/2 tasks (100%)
```

This is exactly how we obtained the results published on the [Agents on Rails AI](/ai) page: many `lemans run`-s and many `lemans report`-s.

lemans also ships the `lemans-remote` CLI to schedule task execution on the Daytona platform (so you can launch a bunch of tasks and pull the results as they're done).

We designed lemans not just as a CLI but as a library you can use in your applications (and in a potential future `lemans-web`). The library has a component-based architecture, meaning that you can easily plug in custom backends, storage providers (to store results anywhere), and concurrent executors.

Finally, lemans also includes a companion gem/CLI, **miniswen**. miniswen is a Ruby port of [mini-SWE-agent](https://github.com/swe-agent/mini-swe-agent), which can also be used as a dead-simple standalone coding agent:

```sh
gem install miniswen

export OPENROUTER_API_KEY=<your key>

miniswen \
  --model=openrouter/openai/gpt-5.6-luna \
  -p "Create a new eval task that would require an LLM to create a complex migration that wouldn't cause downtimes"
```

So far, we've talked only about how to use lemans. Now, let's peek under its hood and learn about the tricks we've implemented to make it even more useful.

### Fair and safe

A benchmark is worth nothing if an agent under eval can tamper with the tests, make up evidence or fool you some other way. We learned this the hard way, and turned these learnings into the harness's guardrails. lemans comes with many; the following three deserve your special attention.

#### The agent cannot tweak verification

Every task ships a hidden `verification_test.rb` the agent never sees. However, hiding just a test file is not enough. We also run the `bin/rails test` command before running the eval as a sanity check. An agent that can edit `test/` can make the existing suite green without fixing anything. Worse, an agent can rewrite the `bin/rails` executable itself and make not only the application tests but also the `verification_test.rb` turn green without doing anything else!

So before the verification phase, lemans restores the graded surfaces (`test/`, `bin/`, and `config/environments/test.rb` by default) from a snapshot taken before the agent started: any changes to these files disappear. What's left is the app code judged by tests the agent never had access to.

#### The agent cannot access the Internet

Daytona sandboxes get network access during setup: we need to execute `gem install miniswen`. We could be stricter and allow access only to `rubygems.org`, but such a complication wouldn't make sense: we can simply turn the firewall on as soon as the agent starts working. That's exactly what we do: limit network access to the LLM provider's API host and nothing else. The agent can't fetch a patch from GitHub, can't look up the task on the web, and can't use a phone-a-friend lifeline. The agent is left alone with its _inner_ Rails knowledge.

#### The agent cannot leak your tokens

As you've already learned, lemans stores a bunch of files on disk for each run (and we publish them on GitHub). What could go wrong? Well...

You may have seen that [in the last round](https://rubyonrails.org/2026/8/17/agents-on-rails-grok-4-6-glm-5-3-gemini-3-7-flash-and-opus-4-8), Muse Spark 1.2 opened many of its runs by dumping env for a look around, which put our OpenRouter key straight into the trajectory files. Luckily, we caught and redacted it before publishing. We turned this almost-incident into a feature: lemans now filters the provider credentials it knows about out of every file it writes to disk, just in case there is some evil agent scanning your file system. So we have Muse Spark 1.2 to thank for that feature.

---

What's next for lemans?

We will probably be tuning it here and there while preparing the next set of tasks, but most features are already there, waiting for your feedback. Please give it a try and let us know what you think!

[lemans]: https://github.com/rails/lemans
