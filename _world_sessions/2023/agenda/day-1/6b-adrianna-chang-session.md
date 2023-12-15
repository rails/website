---
layout: world/2023/session
title: Migrating Shopify’s Core Rails Monolith to Trilogy
redirect_from: world/agenda/day-1/6b-adrianna-chang-session
speaker: adrianna-chang.md
time: 13:30 - 14:00
location: Track 2
running_order: 9
---

Trilogy is a client library for MySQL-compatible database servers. It was open sourced along with an Active Record adapter by GitHub this past year. With promises of improved performance, better portability and compatibility, and fewer dependencies, Shopify’s Rails Infrastructure team decided to migrate our core Rails monolith from Mysql2 to Trilogy.

In this talk, we’ll explore why the Trilogy client was built and why Shopify wanted to adopt it. We'll learn a bit about MySQL protocols and look at some of the missing features we implemented in order to migrate Shopify to Trilogy. Finally, we’ll discuss the impact of migrating on Shopify's production monolith, and look at the process of upstreaming the adapter to rails/rails.
