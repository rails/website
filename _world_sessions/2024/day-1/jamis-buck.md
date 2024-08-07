---
layout: world/2024/session
title: Repurposing the Rails CLI
speaker: jamis-buck.md # name of md speaker file
time: 13:00 - 13:30
location: Track 2
running_order: 7
---

The Rails CLI works great for the vast majority of us, but what do you do when it doesn't? At MongoDB, we recently wanted to add a tighter integration between Rails and Mongoid (our ODM), and were able to create our own CLI tool that extends the Rails CLI, overriding the pieces that weren't compatible or relevant and extending it with the functionality we wanted.

I'll show you how we did it, and how you can do it yourself.
