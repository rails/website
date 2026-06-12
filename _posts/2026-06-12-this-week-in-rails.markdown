---
layout: post
title: "This Week in Rails: June 12, 2026"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-06-12
---


Hi, it's [Greg](https://greg.molnar.io), bringing you this week's changes in the Rails codebase.

[Fix increment! with explicit query constraints](https://github.com/rails/rails/pull/57679)  
This pull request fix `increment!` / `decrement!` on models with query
constraints to include every query constraint column in the counter update.
```ruby 
self.class.update_counters(id, attribute => change, touch: touch) 
```

[Support a single composite primary key id in _delete_](https://github.com/rails/rails/pull/57657)  
This change aligns the class level `delete` method with `destroy` and now they both accept a single ID of a composite primary key.

[Return an empty array from _find([])_ on a composite primary key](https://github.com/rails/rails/pull/57649)  
With this fix, `Model.find([])` returns `[]` for a model with a composite primary key, the same as it does with a single primary key.

[Introduce a new mechanism for applications to prepare for ractor safety](https://github.com/rails/rails/pull/57626)  
This pull request introduces a way for applications to know whether all procs passed to Rails API are ractors safe. It's opt-in by default and include 3 modes:

* `:raise` -> Rails attempt to make the proc shareable. It it's not, a loud `Ractor::IsolationError` will be raised.
* `:warn` -> We attempt to make the proc shareable. If it's not, we rescue `Ractor::IsolationError` and output a warning.
* `nil` -> We *do not* attempt to make the proc shareable.


[Allow _insert!_ to accept the _:unique_by_ option](https://github.com/rails/rails/pull/57614)  
`insert!` now accepts the `:unique_by` option, consistent with `insert`.

[Make _rails new_ work again on systems that do not have vips](https://github.com/rails/rails/pull/57613)  
`rails new` was broken on Rails main if you do not have vips, but developers running `rails new` are not  expected to have `vips` installed, especially if they are not using ActiveStorage. This change fixes the generator to work even when `vips` is not installed.

[Fix _update_all_ / _delete_all_ ignoring _group_/_having_ (updates/deletes every row)](https://github.com/rails/rails/pull/57601)  
This change fixes the issue of `update_all` / `delete_all` ignoring `group` and
`having`, updating or deleting every row in the table instead of only the rows
that satisfy the `HAVING` clause.

[Updated Active Job Basics guide](https://github.com/rails/rails/pull/57592)  
As part of the Rails Foundation documentation project, the Active Job Basics guide received a big update.

[Support _only:_ and _except:_ on __deliver_ callbacks in ActionMailer](https://github.com/rails/rails/pull/57581)  
This pull request adds support for
`config.action_mailer.raise_on_missing_callback_actions` when using `_deliver`
callbacks with `only:` and `except:` options.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-06-05%7D...main@%7B2026-06-12%7D)._  
_We had [39 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260605-20260612) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
