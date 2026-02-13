---
layout: post
title: "This Week in Rails: February 13, 2026"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-02-13
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Add extension point to customize transaction for persistence methods](https://github.com/rails/rails/pull/56732)  
Extracts the implicit transaction creation in persistence methods into an overridable private method, giving models full control over transaction behavior for save and destroy operations.

[Load hook guard](https://github.com/rails/rails/pull/56201)  
Adds a new `guard_load_hooks` method to `Rails::Railtie` that checks if the Rails app is loaded when a load hook is called, with options to log or raise on early loading.

[Avoid combinatory explosion of filter parameters](https://github.com/rails/rails/pull/56759)  
Fixes a performance degradation where using Active Record encryption with many models caused `filter_parameters` to grow into thousands of entries, producing a massive regexp and making attribute filtering very slow.

[ActiveSupport::ParameterFilter: optimize redundant patterns out](https://github.com/rails/rails/pull/56762)  
Active Record encryption automatically registers deep patterns for all encrypted attributes, which can grow large and impact performance. This performs dead code elimination during the precompilation step to remove redundant filters.

[EventReporter: filter events before building the payload](https://github.com/rails/rails/pull/56761)  
Changes event filtering to only provide the event name, avoiding the cost of building the full payload for filtered events.

[Fix Marshal deserialisation of Integer type from Rails 8.0](https://github.com/rails/rails/pull/56768)  
Fixes a regression where `ActiveModel::Type::Integer` objects serialised under Rails 8.0 raised `NoMethodError` when loaded under 8.1. The fix lazy-initialises `@max` and `@min` from the correctly restored `limit` attribute.

[Don't eagerly cache JSON Encoder in ActiveRecord::Type::Json](https://github.com/rails/rails/pull/56767)  
Caching the encoder when the class is first referenced prevented overriding it later. This now uses `ActiveSupport::JSON`'s cached encoder instead.

[Fix ThroughReflection#association_primary_key with composite keys](https://github.com/rails/rails/pull/56703)  
Fixes a bug where composite `primary_key` arrays were converted to a string via `.to_s` instead of mapping each element, causing `UnknownAttributeReference` errors on `_ids` reader methods.

[Deprecate Mail::Address.wrap](https://github.com/rails/rails/pull/56778)  
This deprecates `Mail::Address.wrap` for removal in 8.2.

[Remove the deprecated Multibyte Chars class](https://github.com/rails/rails/pull/56777)  
Removes the deprecated `ActiveSupport::Multibyte::Chars` class and `String#mb_chars` method.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-02-06%7D...main@%7B2026-02-13%7D)._  
_We had [11 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260206-20260213) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
