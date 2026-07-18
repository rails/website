---
layout: post
title: "What time is it? Rails time!"
categories: news
author: Claudio Baccigalupo
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-07-17
---


Let's explore this week's major changes in the Rails codebase.

[Preserve sub-second precision when coercing a DateTime in Time.at](https://github.com/rails/rails/pull/58085)  
Fix `Time.at` to always return the correct number of milliseconds for a `DateTime`.

[Accept Date and numeric inputs in relative_time_in_words](https://github.com/rails/rails/pull/58092)  
Normalize the argument in the same way `distance_of_time_in_words` does, so every documented input type works.

[Respect a limit set on the relation in rails query](https://github.com/rails/rails/pull/58043)  
An Active Record expression that carries a limit like `bin/rails query "Post.limit(5)"` had its limit silently replaced by the pagination window returning up to a full page instead of the requested 5 rows.

[Introduce ActionView::Helper::NavigationHelper](https://github.com/rails/rails/pull/55410)  
Methods like `button_to` and `link_to` now belong to this model (together with their siblings `link_to_unless_current`, `link_to_unless`, and `link_to_if`).

[Honor if_not_exists: in SQLite3 add_check_constraint and add_foreign_key](https://github.com/rails/rails/pull/58091)  
The SQLite3 adapter never declared `if_not_exists:` so it fell into the bucked of unused options and a duplicate was added.

[Read foreign key names from the schema on SQLite3](https://github.com/rails/rails/pull/58096)  
Before the change, on SQLite3, `foreign_keys(table)` returned `nil` for every foreign key's `name` because the constraint name was never read from the table definition.

[Support dumping schema_migrations in db/schema.rb](https://github.com/rails/rails/pull/58134)  
Provide a new flag that lets `db/schema.rb` include a dump of `schema_migrations`. The output will look like this:

```ruby
ActiveRecord::Schema[8.2].define do
  ...
end

ActiveRecord::Schema.load_schema_migrations(__FILE__)
__END__
20260716101900
20260716112003
20260716130752
...
```

[Fix MySQL POINT and MULTIPOINT columns misreported as integers](https://github.com/rails/rails/pull/58087)  
ActiveRecord was misreporting MySQL `POINT` and `MULTIPOINT` columns as integer columns instead of treating them as an unknown type like the other spatial types.

[Convert Symbol keys in a transform_keys mapping](https://github.com/rails/rails/pull/58086)  
Ensures that the `transform_keys` method in `HashWithIndifferentAccess` transforms a hash that maps old keys to new ones even with Symbol keys.

[Allow to access Controller#controller_path in a Ractor](https://github.com/rails/rails/pull/58119)  
Also note that [AbstractController::Base#action_methods](https://github.com/rails/rails/pull/58113) are now ractor safe.

[Raise for empty shards on connected_to_all_shards](https://github.com/rails/rails/pull/58117)  
If an app isn't sharded then `connected_to_all_shards` will now raise an error.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-07-10%7D...main@%7B2026-07-17%7D)._  
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260710-20260717) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
