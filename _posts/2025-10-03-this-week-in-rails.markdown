---
layout: post
title: Virtual columns, real bugfixes
categories: news
author: Claudio Baccigalupo
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-10-03
---


Hi, it's [Claudio Baccigalupo](https://github.com/claudiob). Let's explore this week's changes in the Rails codebase.

[Bump PostgreSQL client version to 18](https://github.com/rails/rails/pull/55784)
  
The PostgreSQL client version in the devcontainer now points to the latest release of PostgreSQL, which is great because…

[Support virtual generated columns on PostgreSQL 18+](https://github.com/rails/rails/pull/55142)

PostgreSQL 18 supports virtual (not persisted) columns, which can be added in Rails migrations with `stored: false`. For instance:
  
```ruby
create_table :users do |t|
    t.string :name
    t.virtual :lower_name,  type: :string,  as: "LOWER(name)", stored: false
    t.virtual :name_length, type: :integer, as: "LENGTH(name)"
end
```

[Fix Enumerable#sole when element is a tuple](https://github.com/rails/rails/pull/55808)
  
Restores the original behavior so that calling `Enumerable#sole` on a tuple returns the full tuple (same as `Enumerable#first`).

[Don't leave parallel tests hanging when worker processes die](https://github.com/rails/rails/pull/55794)

When parallel tests are running and a worker process dies abruptly, the test suite would hang forever.
This fix now tracks PIDs alongside worker IDs, allowing it to map dead processes back to their worker entries for cleanup.

[Stop escaping JS separators in JSON by default](https://github.com/rails/rails/pull/55800)

Historically LINE SEPARATOR (U+2028) and PARAGRAPH SEPARATOR (U+2029) were not valid inside JavaScript literal strings but that changed in ECMAScript 2019, so there is no need to escape them anymore.
  
[Don't output deprecated message in newly generated applications](https://github.com/rails/rails/pull/55793)
  
Prevents a depreciation message about `raise_on_open_redirects` from being shown in newly generated applications.
  
[Don't raise NameError when class_attribute is defined on a singleton](https://github.com/rails/rails/pull/55786)

Defining `class_attribute` on an instance's singleton class and then accessing the attribute through the instance was raising a `NameError`.

[Add replicas to test database parallelization setup](https://github.com/rails/rails/pull/55769)

Setup and configuration of databases for parallel testing now includes replicas.
This fixes an issue where integration tests running in parallel would select the base test database instead of the numbered parallel worker database.

[Add setting for logging redirect source locations](https://github.com/rails/rails/pull/52297)
 
Redirects are used a lot and often defined in different locations for different purposes (authentication, authorization, fallbacks).
A new config setting `action_dispatch.verbose_redirect_logs` is introduced to log the source location of all redirects. 

[Don't let ActiveRecord#select generate duplicate columns](https://github.com/rails/rails/pull/55798)

Fixes an [issue in Rails 8.1.0.beta1](https://github.com/rails/rails/issues/55785) where using `select` in a subquery with `distinct` would cause a SQL error.

[Prefer changed_for_autosave?](https://github.com/rails/rails/pull/55778)

Fixes a regression in Rails 8.0.2 where previously valid models could become invalid through autosave when a distantly related record was deleted via nested attributes.

[Clearing optional composite keys in belongs_to should preserve primary keys](https://github.com/rails/rails/pull/55332)

Fixes an [Active Record issue](https://github.com/rails/rails/issues/54882) where trying to unset composite foreign key associations would raise an error.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-09-26%7D...main@%7B2025-10-03%7D)._
_We had [15 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250926-20251003) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
