---
layout: post
title: "Updated Puma configuration, Object#with block support, and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-01-12
---


Hi! [Vipul](https://www.saeloun.com/team/vipul) here with the second edition of This Week in Rails for 2024!

This second week continues with a flurry of activity with more than [140+](https://github.com/rails/rails/compare/@%7B2024-01-06%7D...main@%7B2024-01-12%7D) changes making in.

Lets dive into some of these changes!

[Update the default Puma configuration](https://github.com/rails/rails/pull/50669)  
There was an extensive discussion in this issue about - [setting a new default for the Puma thread count](https://github.com/rails/rails/issues/50450), over the last few days. 
Give it a read to get some insights from different members in community sharing details about latency vs throughput tradeoffs wrt to the number of threads in Puma config.
Based on this discussion, the default number of threads in Puma config has now been updated from 5 to 3.

[Yield instance to Object#with block](https://github.com/rails/rails/pull/50470)  
The introduction of the block argument means that `Object#with` can now achieve something like below:

```ruby
client.with(timeout: 5_000) do |c|
  c.get("/commits")
end
```

[Add explain support for methods like last, pluck and count](https://github.com/rails/rails/pull/50482)  
The object returned by `explain` now responds to `pluck`, `first`, `last`, `average`, `count`, `maximum`, `minimum`, and `sum`. Those new methods run `EXPLAIN` on the corresponding queries, ex:

```ruby
User.all.explain.count
# EXPLAIN SELECT COUNT(*) FROM `users`

User.all.explain.maximum(:id)
# EXPLAIN SELECT MAX(`users`.`id`) FROM `users`
```

[Do not generate server pidfile in production environments](https://github.com/rails/rails/pull/50644)  
When running Rails applications with Docker containers may fail to restart if they crashed (e.g. because of OOM) because the `/rails/tmp/pids/server.pid` file is already present. To avoid this, new Apps now avoid generating this pid file.

[Support :on option in #set_callback ](https://github.com/rails/rails/pull/50261)  
Introduces `ActiveRecord::Transactions::ClassMethods#set_callback` which behaves like `ActiveSupport::Callbacks::ClassMethods#set_callback` with support for the `:on` option available on `#after_commit` and `#after_rollback` callbacks. Ex: 

```ruby
class User
  set_callback :commit, :after, :do_some_work, on: :update
end
```

[Add default: support for ActiveSupport::CurrentAttributes.attribute](https://github.com/rails/rails/pull/50677)  
This change extends the `.attribute` class method to accept a `:default` option for its list of attributes:

```ruby
class Current < ActiveSupport::CurrentAttributes
  attribute :counter, default: 0
end 
``` 

[Add oven-sh/setup-bun to GitHub CI when generating an app with bun](https://github.com/rails/rails/pull/50636)  
This is a follow-up change for [adding GitHub CI workflow by default to new applications](https://github.com/rails/rails/issues/50502).
It adds `oven-sh/setup-bun` to GitHub CI when generating an app with bun, for proper CI env setup.

[Prevent unnecessary application reloads in development](https://github.com/rails/rails/pull/50708)  
This PR fixes this issue by ensuring the application reloads correctly according to `Rails.autoloaders.main.dirs`, thereby preventing unnecessary reloads, ex: when editing `app/README.md` would trigger a reload.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-01-06%7D...main@%7B2024-01-12%7D)._
_We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240106-20240112) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
