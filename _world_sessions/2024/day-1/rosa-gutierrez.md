---
layout: world/2024/session
title: Solid Queue internals, externals and all the things in between
speaker: rosa-gutierrez.md # name of md speaker file
time: 11:15 - 11:45
location: Track 1
running_order: 3
---

We’ve used Resque and Redis to run background jobs in multiple apps for many years at 37signals. However, performance, reliability, and our own apps' idiosyncrasies led us to use a lot of different gems, some developed by us, some forked or patched to address our struggles. After multiple war stories with background jobs, looking at our increasingly complex setup, we wanted something we could use out-of-the-box without having to port our collection of hacks to every new app and with fewer moving pieces. After exploring existing alternatives, we decided to build our own and aim to make it the default for Rails 8. In this talk, I’ll present Solid Queue, explain some of the problems we had over the years, how we designed Solid Queue to address them, and all the Fun™ we had doing that.
