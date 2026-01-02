---
layout: post
title: "This Week in Rails: January 2, 2026"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-01-02
---


Hi, it's [zzak](https://github.com/zzak). Hope everyone had a great holiday season and a happy new year! 🎊  
Let's explore this week's changes in the Rails codebase.

[Add Rails.app.revision](https://github.com/rails/rails/pull/56490)  
Add `Rails.app.revision` to provide a version identifier for error reporting, monitoring, cache keys, etc.

[Add ActionDispatch::Request#bearer_token](https://github.com/rails/rails/pull/56474)  
Add `ActionDispatch::Request#bearer_token` to extract the bearer token from the Authorization header. Bearer tokens are commonly used for API and MCP requests.

[Allow Rails.app.creds to access .env values in dev](https://github.com/rails/rails/pull/56455)  
In addition to ENV and the encrypted file, `Rails.app.creds` can now access values from `.env` files in development mode.

[Fixed bin/rails notes command to work with CSS comments](https://github.com/rails/rails/pull/56412)  
This PR changes the comment lookup expression for `bin/rails notes` to correctly pick up CSS-style `/* ... */` comments.

[Add block support to ActionController::Parameters#merge](https://github.com/rails/rails/pull/56410)  
Now when merging `params`, you can provide a block to resolve conflicts between new and existing values, consistent with `merge!`.

[Remove support for psych < 4](https://github.com/rails/rails/pull/56409)  
Active Support now requires Psych 4.0.0 or newer.

[Deprecate built-in Sneakers adapter from Active Job](https://github.com/rails/rails/pull/53335)  
The ["sneakers" gem](https://github.com/jondot/sneakers?tab=readme-ov-file#sneakers-has-a-new-home-and-a-new-name) has been moved to ["kicks" gem](https://github.com/ruby-amqp/kicks), and as part of [#52929](https://github.com/rails/rails/issues/52929) Rails is cleaning up old adapters from Active Job.

[Make jobs enqueued after transaction commit by default](https://github.com/rails/rails/pull/55788)  
This PR changes the default behavior of Active Job for jobs enqueued inside an Active Record transacation to be deferred until after the transaction commits. This can be controlled by the previously deprecated `config.active_job.enqueue_after_transaction_commit` config, which is now un-deprecated.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-12-19%7D...main@%7B2026-01-02%7D)._  
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251219-20260102) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
