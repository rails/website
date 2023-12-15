---
layout: world/2023/session
title: Rails and the Ruby Garbage Collector - How to Speed Up Your Rails App
redirect_from: world/agenda/day-2/3b-peter-zhu-session
speaker: peter-zhu.md
time: 11:00 - 11:30
location: Track 2
running_order: 4
---

The Ruby garbage collector is a highly configurable component of Ruby. However, it’s a black box to most Rails developers. In this talk, we’ll look at:

- How Ruby’s garbage collector works
- The various ways to collect garbage collector metrics, analyze the data, and apply optimizations and configurations
- How we sped up Shopify’s highest traffic app, Storefront Renderer, by 13%
- Improvements we made in Ruby 3.3 to automatically make Rails apps faster for everyone
