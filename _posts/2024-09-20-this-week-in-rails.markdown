---
layout: post
title: "Kamal 2, Bye-bye Sprockets, and so much more!"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-09-20
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Rails World 2024 is next week](https://www.youtube.com/watch?v=iIPHzr64c1U)  
Safe travels to everyone heading to Toronto! All sessions will be recorded and published on the [Rails YouTube channel](https://www.youtube.com/@railsofficial), so subscribe to get notified.  

[[RF Guides] Active Record Validations](https://github.com/rails/rails/pull/52951)  
The Foundation is still hard at work on updating the guides, this time they have made a pass through the Active Record Validations guide.
Give it a look and help them spot any issues!  

[Add ability to use multiple rate limits per controller](https://github.com/rails/rails/pull/52960)  
With this PR, you can now add multiple `rate_limit` definitions in your controller.  

[Remove Sucker Punch Active Job adapter](https://github.com/rails/rails/pull/52935)  
Sucker Punch existed before ActiveJob, but ultimately uses similar code to the async adapter under the covers.
This adapter will be removed in a future release of Rails.  

[Do not include redis by default in dev container](https://github.com/rails/rails/pull/52934)  
In Rails 8, newly generated apps will use the Solid gems by default, which do not depend on Redis.  

[Add if_not_exists option to add_enum_value](https://github.com/rails/rails/pull/52916)  
This PR adds support to use the PostgreSQL option `IF NOT EXISTS` when adding enum values via `add_enum_value`.  

[Include options when instrumenting ActiveSupport::Cache::Store delete](https://github.com/rails/rails/pull/52912)  
Now `cache_delete.active_support` and `cache_delete_multi.active_support` events will include the options passed to the delete method.  

[No new apps should be started with sprockets](https://github.com/rails/rails/pull/52887)  
The `--asset-pipeline` flag will no longer take an argument for "propshaft" or "sprockets", when generating a new Rails application.

[Kamal 2 compatible configuration](https://github.com/rails/rails/pull/52883)  
Kamal 2 is bringing auto-SSL and multi-app deploys to the party.
Along with other updates like simpler builders, aliases, and secrets.  

[Set "config.active_record.attributes_for_inspect" to ":all" in the console](https://github.com/rails/rails/pull/52801)  
In Rails 7.2, `ActiveRecord::Core#inspect` was made configurable but people noticed that the console in production was not showing any attributes.
This PR sets the default to the previous behavior that was expected.  

[Support dropping multiple tables at once](https://github.com/rails/rails/pull/52773)  
This PR enables you to pass multiple names to the `drop_table` method.  

[Use thread pool for ActionController::Live](https://github.com/rails/rails/pull/52731)  
Exactly what it says on the tin, a thread pool is now used to reuse threads across requests.  

[Add Parameters#expect to safely filter and require params](https://github.com/rails/rails/pull/51674)  
This PR adds a new way to handle params giving more control over what you expect to receive in your controller actions.
```ruby
# Before
params.require(:table).permit(:attr)

# After
params.expect(table: [ :attr ])
```


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-09-13%7D...main@%7B2024-09-20%7D)._
_We had [37 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240913-20240920) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
