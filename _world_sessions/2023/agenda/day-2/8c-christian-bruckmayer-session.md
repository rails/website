---
layout: world/2023/session
title: Workshop - Test Smarter, Not Harder - Crafting a Test Selection Framework from Scratch
redirect_from: world/agenda/day-2/8c-christian-bruckmayer-session
speaker: christian-bruckmayer.md
time: 15:00 - 16:00
location: Workshop Hall
running_order: 14.5
---

The simplest way of running tests is to run all of them, regardless of what changes you are testing. However, depending on the size of your test suite, this will either get slow or expensive. At Shopify we have almost 300,000 Rails tests and we add 50,000 more annually. The sheer amount of tests and their growth makes it impossible to run all tests, all the time! Hence we implemented a framework to only run tests relevant to your code changes.

We will build a test selection framework from scratch in this workshop. We will begin by exploring the fundamentals of such a framework: code analysis. After that we will dive into minitest reporters, how they work and how we can use them to generate a test map. Finally we will use the generated test map to only run tests relevant to your code changes. Attendees will walk away with a solid understanding of what test selection is, how it works and how to implement it.
