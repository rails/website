---
layout: world/2025/session
title: "Ruby Stability at Scale"
speaker: peter-zhu.md
time: 11:15 - 11:45
location: Effectenbeurs
running_order: 2
---

There are many talks, articles, and tutorials on how to monitor your Rails app for stability. These assume the source of the bug comes from your application code, from Rails itself, or from a gem. But what if the source of instability comes from Ruby or a native gem? If Ruby crashes, do you have any monitoring or ways to debug it?

In this talk, we'll look at how we deal with Ruby crashes in the Shopify monolith, the world's largest Ruby on Rails application, and how you can use some of our techniques. We'll cover topics such as how we monitor crashes, capture core dumps for debugging, prevent crashes, and minimize the impact of crashes on production.
