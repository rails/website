---
layout: post
title: "Rails World 2025 speaker lineup, deprecations, doc updates and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-05-23
---


Hello! [Emmanuel Hayford](https://x.com/siaw23) here.

The third edition of Rails World is a couple of months away! In case you missed it, The Rails Foundation [has already announced an exciting lineup](https://rubyonrails.org/2025/5/20/rails-world-2025-speakers) that you should check out in case you haven't seen it yet.


[Document `through` with `polymorphic`](https://github.com/rails/rails/pull/55107)
A new addition to the Rails documentation clarifies that polymorphic associations are not supported as :through associations. While Active Record already raises an error when such a setup is attempted, the exceptions were previously undocumented. This update makes the restriction explicit in the docs.


[Deprecate `:class_name` for polymorphic `belongs_to`](https://github.com/rails/rails/pull/55091)
Passing `:class_name` to a polymorphic `belongs_to` is now deprecated and will be removed in Rails 8.1. Since the associated class is already determined by the type column, the option is unnecessary. If you're using `:class_name` in this context, you can safely delete it.


[Add namespaced version of the `db:migrate:reset` command.](https://github.com/rails/rails/pull/55077)
Rails now supports a namespaced version of `db:migrate:reset`, allowing you to reset only the primary database using `db:migrate:reset:primary`.


[Respect `SCHEMA_FORMAT` in `db:schema:load`](https://github.com/rails/rails/pull/55059)
A fix has been applied to ensure the `SCHEMA_FORMAT` environment variable behaves as described in the task description. This correction only applies to Rails 7.2 and addresses an oversight from its initial introduction.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-05-16%7D...main@%7B2025-05-23%7D)._
_We had [17 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250516-20250523) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
