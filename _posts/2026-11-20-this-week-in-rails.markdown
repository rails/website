---
layout: post
title: "Securing Rails"
categories: news
author: Claudio Baccigalupo
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-11-20
---


Hi, it's [Claudio Baccigalupo](https://easyfaa.com/about). This week's changes to the Rails codebase have a strong focus on security, from a rewritten guide to safer defaults for new apps.

[Rewrite the Securing Rails guide](https://github.com/rails/rails/pull/58618)  
As part of the Rails Foundation documentation effort, the [refreshed guide](https://edgeguides.rubyonrails.org/security.html) drops outdated sections and old gems, adds a new section on cookies, and covers file uploads with Active Storage.

[Patch Rack::Multipart::Parser to not allow arbitrary encoding](https://github.com/rails/rails/pull/59872)  
Multipart form data submitted in arbitrary encodings has little to no legitimate use, but it has been used several times in exploit chains targeting Rails applications. Rails now patches Rack to disregard it. The change is also backported to [8.1](https://github.com/rails/rails/pull/59873) and [8.0](https://github.com/rails/rails/pull/59874). If your app depends on that behavior, opt out with:

```ruby
config.action_dispatch.allow_rack_multipart_encoding = true
```

[Harden generated GitHub Actions workflows](https://github.com/rails/rails/pull/59846)  
The `ci.yml` of new apps pins the versions of actions to a SHA to mitigate repointed git tag attacks, in a format that Dependabot keeps up to date. `ruby/setup-ruby` stays unpinned so new Ruby releases are available right away. Checkout actions also set `persist-credentials: false`, so later steps can't read GitHub tokens from the filesystem.

[Add config.active_record.association_scope_keeps_owner_conditions](https://github.com/rails/rails/pull/59836)  
`unscope(where: ...)`, `unscope(:where)` and `rewhere` in an association scope could [remove the condition](https://github.com/rails/rails/pull/59825) that ties the records to their owner, so `update_all`, `delete_all` and `dependent: :delete_all` could affect records of other owners. With `load_defaults "8.2"`, those conditions are always applied. Otherwise the old behavior is kept with a deprecation warning:

```ruby
class Car < ActiveRecord::Base
  has_many :all_bulbs, -> { unscope(:where) }, class_name: "Bulb"
end

car.all_bulbs
# Before: SELECT "bulbs".* FROM "bulbs"
# After:  SELECT "bulbs".* FROM "bulbs" WHERE "bulbs"."car_id" = ?
```

[Break hard dependency between Action Mailer and Active Job](https://github.com/rails/rails/pull/59820)  
Apps that use Action Mailer without Active Job now load much less code. If you use Action Mailer outside of Rails and rely on `deliver_later`, you may need to add Active Job to your Gemfile.

[Check for protect_from_forgery in ActiveStorage::BaseController](https://github.com/rails/rails/pull/59759)  
Apps that turned off `default_protect_from_forgery` get forgery protection on Active Storage controllers again.

[Entirely drop support for Active Record 6.1 marshal format](https://github.com/rails/rails/pull/59837)  
Writing in that format was already dropped. Now Active Record models marshaled with Rails 6.1 can't be loaded either.

[Support sets in class attributes and token lists](https://github.com/rails/rails/pull/59818)  
`Set` became a core class in Ruby 4.0, and it's a natural fit for HTML classes:

```ruby
tag.button("Save", class: Set["button", "primary"])
# Before: <button class="Set[&quot;button&quot;, &quot;primary&quot;]">Save</button>
# After:  <button class="button primary">Save</button>
```

[Remove job from the execution context after perform_now](https://github.com/rails/rails/pull/59893)  
The name of a job performed with `perform_now` leaked into the SQL comments of queries run after the job had finished.

[Don't generate fixture values for virtual columns](https://github.com/rails/rails/pull/59863)  
Fixtures no longer fail to load with "table has no columns named..." for tables with virtual columns, as their values are now left to the database.

[Cast grouped keys and plucked columns unknown to the schema](https://github.com/rails/rails/pull/59816)  
Grouping by or plucking a column of a joined subquery or a CTE now casts it with the type the database reports:

```ruby
Topic.with(read_topics: Topic.select("id AS topic_id", :last_read)).joins(:read_topics).pluck("read_topics.last_read")
# Before: ["2004-04-15"]
# After:  [Thu, 15 Apr 2004]
```

[Fix numericality :odd and :even options raising for non-finite values](https://github.com/rails/rails/pull/59853)  
Infinity and NaN now add the `:odd` or `:even` error instead of raising `FloatDomainError`.

[Fix disable_joins ignoring the polymorphic type condition of an as: association](https://github.com/rails/rails/pull/59828)  
A `has_many :through` with `disable_joins: true` through an `as:` association loaded records of other types sharing the same ID.

[Install the pinned connection's lock before pinning it](https://github.com/rails/rails/pull/59770)  
Fixes a race condition in `pin_connection!` where another thread could be handed the connection being pinned, which could lead to a deadlock.

[Speed up String#truncate_words on long strings](https://github.com/rails/rails/pull/59848)  
Truncating a 100k character string to 10 words is now about 100 times faster, and no longer causes a spike in memory.

[Four new versions benchmarked in Agents on Rails](https://x.com/rails/status/2123808115619471857)  
GPT-6.2 Astra (xhigh and medium), GPT-6.2 Sol (xhigh), and DeepSeek v4.1 Flash 1017 (max) are the newest models added the list.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-11-13%7D...main@%7B2026-11-20%7D)._
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20261113-20261120) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
