---
layout: post
title: "Disabled query cache in console and bugfixes"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-01-30
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's see what changed in the Rails codebase.

[Disable the Active Record query cache in the console by default](https://github.com/rails/rails/pull/56678)  
Pass *--query-cache* to enable it for the session.

[Fix inflections to better handle overlapping acronyms](https://github.com/rails/rails/pull/56679)  
```ruby
ActiveSupport::Inflector.inflections(:en) do |inflect|
  inflect.acronym "USD"
  inflect.acronym "USDC"
end

"USDC".underscore # => "usdc"
```

[Skip unique index lookup for insert_all!](https://github.com/rails/rails/pull/56666)  
*insert_all!* uses *on_duplicate: :raise* which performs a plain insert without any *ON CONFLICT* clause. Previously, *find_unique_index_for* was called unconditionally, requiring a unique index even when one wasn't needed.

This caused unnecessary failures for tables with composite primary keys where *model.primary_key* differs from the schema's primary key columns.

*insert_all* (*on_duplicate: :skip*) and *upsert_all* (*on_duplicate: :update*) still require the unique index for generating the conflict target clause.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-01-23%7D...main@%7B2026-01-30%7D)._  
_We had [14 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260123-20260130) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
