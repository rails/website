---
layout: post
title: "More async queries, pattern matching and no more autoclosed PRs!"
categories: news
author: p8
published: true
date: 2022-05-14
---

Hi, this is Petrik, bringing you the latest news from the Rails world.  
  
[**Async aggregate and find\_by queries**](https://github.com/rails/rails/pull/44446)  
Active Record async support was limited to loading collections, but among the not so fast queries that would benefit from asynchronicity you often find aggregates as well as hand crafted find\_by\_sql queries.  
We now support the following methods:

- async\_count
- async\_sum
- async\_minimum
- async\_maximum
- async\_average
- async\_pluck
- async\_pick
- async\_find\_by\_sql
- async\_count\_by\_sql

  

[**Allow CSRF tokens to be stored outside of session**](https://github.com/rails/rails/pull/44283)

When sessions are not stored in cookies, millions of sessions may be created and constantly evicted just for the CSRF token. This new configuration parameter will make it possible to store the CSRF token somewhere other than the session (i.e. in an encrypted cookie).  
  

[**Introduce html: and screenshot: kwargs for system test screenshot helper**](https://github.com/rails/rails/pull/44720)

Being able to request html or screenshot from test code is nicer as it means you can do this selectively per-screenshot, rather than screenshotting/HTML dumping everything when running a test.  
  

[**Support encrypted attributes on columns with default values**](https://github.com/rails/rails/pull/45033)

Reading these columns failed because their contents were not encrypted. Now, it will encrypt those values at record-creation time.  
  

[**Stop autoclosing of PRs**](https://github.com/rails/rails/commit/acf48169943011834c4c885b956e29050548fa98)  
While the idea of cleaning up the PRs list by nudging reviewers with the stale message and closing PRs that didn't got a review in time could work for the maintainers, in practice it discourages contributors to submit contributions.

  

[**Provide pattern matching for ActiveModel**](https://github.com/rails/rails/pull/45035)

This provides the Ruby 2.7+ pattern matching interface for hash patterns, which allows the user to pattern match against anything that includes the _ActiveModel::AttributeMethods_ module (e.g., _ActiveRecord::Base_).

  

[**Avoid query from calculations on contradictory relations**](https://github.com/rails/rails/pull/45030)

Previously calculations would make a query even when passed a contradiction, such as _User.where(id: []).count_. We no longer perform a query in that scenario.  
  

[**Add --name option to the app generator**](https://github.com/rails/rails/pull/44941)

The option _--name_ will override the application name to be different from the folder name.

  
[**Add active\_record.destroy\_association\_async\_batch\_size configuration**](https://github.com/rails/rails/pull/44617)

This allows applications to specify the maximum number of records that will be destroyed in a single background job by the _dependent: :destroy\_async_ association option. If the number of dependent records is greater than this configuration, the records will be destroyed in multiple background jobs.

  
Since last time, [102 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220222-20220513) contributed to Rails. As usual, there are too many changes to cover them all, but you can check out all of these [here](https://github.com/rails/rails/compare/main@%7B2022-02-22%7D...main@%7B2022-05-13%7D). Until next time!

