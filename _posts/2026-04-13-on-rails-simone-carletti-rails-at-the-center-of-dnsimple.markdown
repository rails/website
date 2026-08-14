---
layout: post
title: "On Rails — Simone Carletti: Rails at the Center of DNSimple"
categories: podcast
authors:
  - Rails Foundation
  - Robby Russell
og_image: assets/images/on-rails-podcast.png
youtube: 9n9ld04i43Q
published: true
date: 2026-04-13
---

<p>In this episode of On Rails, Robby is joined by <a href='https://simonecarletti.com/'>Simone Carletti</a>, CTO of <a href='https://dnsimple.com/'>DNSimple</a>, where Rails has sat at the core of a globally distributed DNS platform since the company launched in 2010. Simone walks through how DNSimple&apos;s infrastructure is organized across three primary languages - Ruby on Rails, Go, and Erlang - each chosen deliberately for the role it plays: Rails powering the main application and API, Go handling the zone server, and Erlang running their custom-built name servers. He explains why Rails has remained central even as the platform grew well beyond a typical web app, and what it takes to keep a long-lived codebase healthy with a lean team of around 15 engineers.</p><p><b>Tools &amp; Libraries Mentioned</b></p><p><a href='https://sidekiq.org/'><b>Sidekiq</b></a>: Background job processing (enterprise edition).</p><p><a href='https://rspec.info/'><b>RSpec</b></a>: Testing framework.</p><p><a href='https://github.com/KnapsackPro/knapsack'><b>Knapsack</b></a>: Parallel test suite splitting.</p><p><a href='https://github.com/roidrage/lograge'><b>Lograge</b></a>: Structured JSON logging for Rails.</p><p><a href='https://viewcomponent.org/'><b>ViewComponent</b></a>: Component-based view layer for Rails.</p><p><a href='https://hanamirb.org/'><b>Hanami</b></a>: Ruby web framework, used for portions of the DNSimple API.</p><p><a href='https://www.postgresql.org/'><b>PostgreSQL</b></a>: Primary relational database.</p><p><a href='https://clickhouse.com/'><b>ClickHouse</b></a>: Analytics database for DNS query log processing.</p><p><a href='https://www.erlang.org/'><b>Erlang/OTP</b></a>: Runtime for DNSimple&apos;s custom name server (ErlyDNS).</p><p><a href='https://go.dev/'><b>Go</b></a>: Language powering DNSimple&apos;s zone server.</p><p><a href='https://www.docker.com/'><b>Docker / Docker Compose</b></a>: Used to run the full DNSimple infrastructure stack locally.</p><p><a href='https://www.cursor.com/'><b>Cursor</b></a> / <a href='https://docs.claude.com/en/docs/claude-code/overview'><b>Claude Code</b></a>: AI coding tools adopted across the DNSimple team.</p><p><a href='https://www.terraform.io/'><b>Terraform / Infrastructure as Code</b></a>: Used to manage DNSimple&apos;s own domains and GitHub repositories.</p><p><b>Books Mentioned</b></p><p><a href='https://pragprog.com/titles/elruby/eloquent-ruby/'><b>Eloquent Ruby</b></a> by Russ Olsen</p><p><a href='https://www.informit.com/store/design-patterns-elements-of-reusable-object-oriented-9780201633610'><b>Design Patterns</b></a> (Gang of Four)</p>

<p><a href="https://podcast.rubyonrails.org/2462975/episodes/18999348-simone-carletti-rails-at-the-center-of-dnsimple">Listen to this episode</a> (1h 45m) or <a href="https://podcast.rubyonrails.org">subscribe to On Rails</a> in your podcast player.</p>
