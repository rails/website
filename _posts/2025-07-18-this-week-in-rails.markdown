---
layout: post
title: A new touch option, accessing the editor from the error page and better migration logs
categories: news
author: claudiob
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-07-18
---


Hi, it's [Claudio Baccigalupo](https://github.com/claudiob). So many great changes to the Rails codebase this week. Let’s check them out.


[Add touch option to update_column(s)](https://github.com/rails/rails/pull/51455)  
Particularly useful for ETL processes that rely on the `updated_at` timestamps instead of copying the whole table. Previously, to keep timestamps current, the `touch` method had to be called after using `update_column`.

[Add support to open files in the code editor from the crash page](https://github.com/rails/rails/pull/55295)  
All the [most common editors](https://github.com/rails/rails/blob/b22fd5a519f92e5c51c62e3b74b4407e492b89e2/activesupport/lib/active_support/editor.rb#L56-L68) are supported, from Atom to Zed.

[Fix errors when query string keys have invalid encoding](https://github.com/rails/rails/pull/55319)  
Bots hitting your Rails app with malformed requests could generate noisy 500 Server Errors. After this PR the requests won’t be reported as an app exception.

[Fix log message for down migrations](https://github.com/rails/rails/pull/52749)  
When reverting a migration, the message in the log will stop saying “Migrating to [version]” and will instead say “Reverting [version]”.

[Raise an error in finder methods when the model has no ORDER columns](https://github.com/rails/rails/pull/54608)  
Adds a new `ActiveRecord::MissingRequiredOrderError` which gets raised in methods like `last` and `find_nth` when there are no order columns to use for the default order.

[Return a 500 on MissingController errors](https://github.com/rails/rails/pull/53964)  
A controller not existing isn't a routing error that should result in a 404, but a programming error that should result in a 500 and be reported.

[Optimize Active Record batching further when using ranges](https://github.com/rails/rails/pull/51243)  
Improves the efficiency of the `in_batches` method by using `OFFSET` in the SQL query when the `use_ranges: true` option is provided. 

[Optimize ActiveSupport::SafeBuffer](https://github.com/rails/rails/pull/55352)  
Saves allocating unnecessary memory based on the assumption that the overwhelming majority of SafeBuffer instances are never mutated.
  
[Ensure RequestForgeryProtection#normalize_action_path is private](https://github.com/rails/rails/pull/55317)  
The method added in [033acf8](https://github.com/rails/rails/pull/55317) was not intended to be public.

[Add tsort as a runtime dependency to railties](https://github.com/rails/rails/pull/55322)  
`tsort` has been [extracted from the Ruby standard library](https://bugs.ruby-lang.org/issues/21442) and is now included as a gem.

[Propshaft upgraded to 1.2.0](https://github.com/rails/rails/pull/55343)  
See [what has changed](https://github.com/rails/propshaft/releases/tag/v1.2.0) in the latest release of the library.



_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-07-11%7D...main@%7B2025-07-18%7D)._
_We had [16 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250711-20250718) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
