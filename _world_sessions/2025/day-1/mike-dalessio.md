---
layout: world/2025/session
title: "Multi-Tenant Rails: Everybody Gets a Database!"
speaker: mike-dalessio.md
time: 11:15 -  11:45
location: Effectenbeurs
running_order: 2
---

As Rails’s SQLite support has improved, it's finally possible to have truly multi-tenant Rails applications - isolated data for each account! - without sacrificing performance or ease of use. This talk describes a novel, production-vetted approach to isolating tenant data everywhere in Rails: the database, fragment caches, background jobs, Active Storage, Turbo Stream broadcasts, Action Mailer, and even the testing framework.

You’ll learn how to build a new multi-tenant app or migrate an existing one. You'll learn the technical details of how Rails can support multiple tenants and strict data isolation. You'll see a live demonstration of a multi-tenant app. And you'll learn why a deployment topology like this might make sense for you, and how it scales up and out.
