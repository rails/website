---
layout: post
title: "Parallel testing improvements and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-05-02
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's see what's new in the Rails.  

### Rails World tickets coming soon
We've been informed that General Admission tickets will be available *May 13*. More information is coming soon, but you can already mark your calendar!

[Implement ability to skip creating parallel testing databases](https://github.com/rails/rails/pull/54984)  
With parallel testing, Rails will create a database per process. If this isn't desirable or you would like to implement databases handling on your own, you can now turn off this default behavior.

To skip creating a database per process, you can change it via the *parallelize* method:

```ruby
parallelize(workers: 10, parallelize_databases: false)
```

or via the application configuration:

```ruby
config.active_support.parallelize_databases = false
```

[Add public API for before_fork_hook in parallel testing](https://github.com/rails/rails/pull/54985)  
This can be used to run anything before the processes are forked.

```ruby
parallelize_before_fork do
  # perform an action before test processes are forked
end
```

[Set default for primary keys in insert_all/upsert_all](https://github.com/rails/rails/pull/54962)  
Previously in PostgreSQL, updating and inserting new records in one upsert wasn't possible due to null primary key values.
*nil* primary key values passed into *insert_all* and *upsert_all* are now implicitly set to the default insert value specified by the adapter.

[Update bundled trix](https://github.com/rails/rails/pull/54990)  
Updates trix to [v2.1.14](https://github.com/basecamp/trix/releases/tag/v2.1.14) which contains a security fix.

  
_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-04-25%7D...main@%7B2025-05-02%7D)._
_We had [12 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250425-20250502) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
