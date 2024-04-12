---
layout: post
title: "A week of fixes"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-04-12
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.


[Fix union select parentheses](https://github.com/rails/rails/pull/51549)  
When building `UNION` or `UNION ALL` queries involving `LIMIT` or `ORDER BY`, Arel generated invalid SQL previously. This pull request changes `Arel::Visitors::ToSql` so that `SELECT` statements in `Union` and `UnionAll` nodes are enclosed in parentheses to avoid syntax errors.

[Fix copying virtual columns when altering a table in SQLite3](https://github.com/rails/rails/pull/51531)  
When Rails alters a SQLite table, it creates a new table and copies the structure and data from the old one.  
The problem is that virtual columns are incorrectly copied (copied as classic columns). This pull request fixes that.

[Fix **ActiveJob::EnqueueAfterTransactionCommit** API](https://github.com/rails/rails/pull/51525)  
`perform_later` is supposed to return the `Job` instance on success, and `false` on error. When the enqueue is automatically delayed, it is of course impossible to predict if the actual queueing will succeed, but for backward compatibility reasons, it is best to assume it will.<br/>
If necessary, you can hold onto the job instance and check for `#successfully_enqueued?` after the transaction has completed.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-04-05%7D...main@%7B2024-04-12%7D)._  
_We had [31 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240405-20240412) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
