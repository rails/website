---
layout: post
title: "Read replica database configurations, faster parameter filtering, and more!"
categories: news
author: eugeneius
published: true
date: 2018-09-02
---

Hello everyone! This is [Eugene](https://twitter.com/eugeneius), bringing you the highlights from the last week of activity in the [Rails codebase](https://github.com/rails/rails).

### [Add hooks to Active Job on retries and discards](https://github.com/rails/rails/pull/33751)

Your application can now subscribe to be notified whenever a job is retried or discarded. Neat!

### [Support read replica database configurations](https://github.com/rails/rails/pull/33770)

Database configurations can now be flagged as "replicas", indicating that the database they connect to is read-only.

For now this just means they're ignored by database tasks like `db:create`, but the comments on the pull request mention some other features that could be built on top of this change.

### [Reduce allocations during parameter filtering](https://github.com/rails/rails/pull/33758)

Initially this patch looked like a micro-optimisation, but the author produced a benchmark which demonstrated saving 1% of both memory and time on a real world Rails app.

### [Find inverse associations with plural names](https://github.com/rails/rails/pull/33729)

Previously, inverse associations would only be detected when they matched the model name exactly. Now, the case where they use the plural form of the model name will work too.

### [Clear mutation tracker after yielding in around callbacks](https://github.com/rails/rails/pull/33689)

This change ensures that a record's view of the database is up to date immediately after an around callback yields, just as it would be in an after callback.

[21 people](https://contributors.rubyonrails.org/contributors/in-time-window/20180826-20180901) contributed to Rails this week; feel free to check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2018-08-25%7D...@%7B2018-09-01%7D). If you want help out, maybe look for an interesting [open issue](https://github.com/rails/rails/issues)?

Until next time!
