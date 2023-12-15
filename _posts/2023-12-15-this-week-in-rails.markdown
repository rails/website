---
layout: post
title: "Exposed queries assertion methods and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2023-12-15
---


Hi, it's [Wojtek](https://twitter.com/morgoth85) with latest changes in the Rails codebase.

[Expose queries test assertion methods](https://github.com/rails/rails/pull/50281)  
To assert the expected number of queries are made, Rails internally uses *assert_queries* and *assert_no_queries*. These assertions can now be used in applications as well.

[Allow serving compressed SVG images](https://github.com/rails/rails/pull/50359)  
This adds *image/svg+xml* to the compressible content types of *ActionDispatch::Static*.
  
[Ignore host if socket is set in Trilogy adapter](https://github.com/rails/rails/pull/50349)  
This allows to configure a connection on a UNIX socket via *DATABASE_URL*.

[Take Active Record affixes into account for Action Mailbox database models](https://github.com/rails/rails/pull/50300)  
Fix all Action Mailbox database related models to respect *table_name_prefix* configuration.

[Take Active Record affixes into account for Action Text database models](https://github.com/rails/rails/pull/50299)  
Follow up to do the same for Action Text models.

[Add runner script option to disable executor wrap](https://github.com/rails/rails/pull/50223)  
 Use *bin/rails runner --skip-executor* option to not wrap the runner script with an executor.

[Add nulls_last and nulls_first for MySQL](https://github.com/rails/rails/pull/50079)  
Fixes the inconsistent behaviour when attempting to use ordering with *nulls_first/nulls_last* described in [this issue](https://github.com/rails/rails/issues/50078).
  
[Add support for generated columns in SQLite3 adapter](https://github.com/rails/rails/pull/49346)  
Generated columns (both stored and dynamic) are supported since version 3.31.0 of SQLite.

[Add instrumentation for ActionController::Live#send_stream](https://github.com/rails/rails/pull/49297)  
Allows subscribing to *send_stream* events. The event payload contains the filename, disposition, and type.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-12-08%7D...main@%7B2023-12-15%7D)._
_We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231208-20231215) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
