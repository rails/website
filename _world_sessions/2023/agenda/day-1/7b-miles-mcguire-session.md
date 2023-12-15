---
layout: world/2023/session
title: Guardrails - Keeping Customer Data Separate in a Multi Tenant System
redirect_from: world/agenda/day-1/7b-miles-mcguire-session
speaker: miles-mcguire.md
time: 14:15 - 14:45
location: Track 2
running_order: 12
---

Many companies are built upon a multitenant architecture. This means that all customers share the same storage and computing resources: databases, caches, search engines, etc. An individual workspace’s data is isolated and made invisible to others at runtime. This is achieved by using logical safeguards, the most common being: query time filtering using a customers’s unique ID.

Engineers are human, and most engineers are not security experts. This means that sometimes these logical safeguards are implemented incorrectly or they become incorrect after a large architectural change.

We have solved this problem by weaving the customer id into all inline and async work and introducing a middleware that raises an exception of work is attempted outside of that customers workspace. I will talk about how we achieved this and the lessons learned, as well as touching on additional benefits we unlocked along the way.
