---
layout: post
title: "Squish as fast as you can"
categories: news
author: claudiob
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-01-23
---


Hi, it's [Claudio Baccigalupo](https://github.com/claudiob). Let's explore this week's changes in the Rails codebase.

[Optimize String#squish](https://github.com/rails/rails/pull/56626)  
A RegExp improvement in the Rails codebase makes squishing a string twice as fast.

[Render stream errors are reported to Rails.error](https://github.com/rails/rails/pull/56625)  
Now that Rails has a dedicated API to report errors we can call it also when an error is raised during streaming.

[reload! will reset the console's executor when present](https://github.com/rails/rails/pull/56639)  
The Rails console is [wrapped with an executor](https://github.com/rails/rails/pull/56297) which can have side effects such as [implicitly enabling the Query Cache](https://github.com/rails/rails/issues/56473).
After this PR, calling `reload!` will not just reload the console, but reset the executor too.

[Detect JS package manager from lockfiles in generators](https://github.com/rails/rails/pull/56636)  
Generators can now use the lockfiles to detect the package manager, whether it's bun (bun.lockb or [bun.lock](https://github.com/rails/rails/pull/56655)), pnpm (pnpm-lock.yaml), npm (package-lock.json), or yarn (yarn.lock or default).

[Skip unique index lookup for insert_all!](https://github.com/rails/rails/pull/56666)  
`insert_all!` uses `on_duplicate: :raise` which performs a plain INSERT without any `ON CONFLICT` clause. 
Previously, `find_unique_index_for` was called unconditionally which caused unnecessary failures for tables with composite primary keys.

[Add &block params to `ActionController` methods using yield](https://github.com/rails/rails/pull/56665)  
Several methods in Action Controller used `block_given?` or `yield` without explicitly declaring a `&block` parameter. 
While this is valid Ruby, it created issues for static analysis tools like Sorbet that check for blocks being passed to methods.

[Load minitest server plugin to run minitest with --bisect option](https://github.com/rails/rails/pull/56647)  
Before this, `minitest_bisect` with `--bisect` option raised the `invalid option: --server`.

[Upgrade from bundler 2.7.2 to 4.0.4](https://github.com/rails/rails/pull/56663)  
The bundler version in the `Gemfile.lock` is now the latest: bundler 4.0.4.

[Explicitly use Marshal serializer for MemCacheStore Dalli client](https://github.com/rails/rails/pull/56652)  
There are no options to change the serializer for MemCacheStore Dalli so it's safe to assume Marshal will be used.

[Deprecate queue_classic Active Job adapter](https://github.com/rails/rails/pull/56629)  
This is the last Active Job adapter to be ejected.
The queue_classic gem gem has not seen any activity in two years.

[Handle Ruby 4.1 stabby lambda in Proc#source_location start_column](https://github.com/rails/rails/pull/56624)  
Adjusts the code for a [recent change in Ruby](https://github.com/ruby/ruby/commit/c970d2941d56a862bb9bb3b808cb588c2982f436) to include the full syntax definition in the source, even when using stabby lambdas

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-01-16%7D...main@%7B2026-01-23%7D)._  
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260116-20260123) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
