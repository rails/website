---
layout: post
title: "Solid Cable as default, 2 new Guides PRs, and much more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-09-13
---

Hey everyone, Happy Friday the 13 🎃 

[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails, 
from the very awesome [EuRuKo](https://2024.euruko.org/) this week! Let's dive in.

**New Guides Pull Request for review**  
Two new Guides Pull Requests are up for community review this week. If you are well versed in Action Mailer, or Error Reporting please review and submit your feedback here:

- [Action Mailer Guides PR](https://github.com/rails/rails/pull/52905)
- [Rails Error Reporting Guides PR](https://github.com/rails/rails/pull/52885)

[Add Solid Cable](https://github.com/rails/rails/pull/52889)  
This change starts to use [Solid Cable](https://github.com/rails/solid_cable) as the default Action Cable adapter in production, configured as a separate queue database in `config/database.yml`. 
It keeps messages in a table and continuously polls for updates. 

This makes it possible to drop the common dependency on Redis, if it isn't needed for any other purpose. 
Despite polling, the performance of Solid Cable is comparable to Redis in most situations. 
And in all circumstances, it makes it easier to deploy Rails when Redis is no longer a required dependency for Action Cable functionality.

[Deprecate Benchmark.ms and add benchmark to the gemspec](https://github.com/rails/rails/pull/52746)  
Ruby plans to make `benchmark` a bundled gem. This change sets up deprecation of Rails core extension in favour of the bundled gem for future.

[Deprecate unsigned_float and unsigned_decimal short-hand column methods](https://github.com/rails/rails/pull/52828)  
This change deprecates `unsigned_float` and `unsigned_decimal` short-hand column methods.

As of MySQL 8.0.17, the `UNSIGNED` attribute is deprecated for columns of type `FLOAT`, `DOUBLE`,
and `DECIMAL`. Consider using a simple CHECK constraint instead for such columns.
More details can be found [here](https://dev.mysql.com/doc/refman/8.0/en/numeric-type-syntax.html).

[Allow BroadcastLogger to pass through kwargs ](https://github.com/rails/rails/pull/52868)  
Some Logger implementations may want extend the logging interface to provide optional information via keyword argument.
This change enhances `BroadcastLogger` to allow the same.

[Fix travel_to to set usec 0 when with_usec is false and the given argument is String or DateTime](https://github.com/rails/rails/pull/52533)  
Before this change `travel_to` did not set `usec` to `0` depending on the argument (`String` or `DateTime`).
This PR fixes this behavior to make it uniform.

[Fix .left_outer_joins when multiple associations have the same child](https://github.com/rails/rails/pull/52850)  
This change fixes an issue where `.left_outer_joins` used with multiple associations that have 
the same child association but different parents does not join all parents.

Previously, using `.left_outer_joins` with the same child association would only join one of the parents. After this fix it now correctly joins both parents.

[alias_attribute: handle user defined source methods](https://github.com/rails/rails/pull/52842)  
Before this change, when using `alias_attribute` and trying to alias user defined source methods would error, for example:

```ruby
class Person
  include ActiveModel::AttributeMethods

  define_attribute_methods :name
  attr_accessor :name

  alias_attribute :full_name, :name
end

person = Person.new
person.name = "Joe Doe"
person.full_name #=> Raises error
```
This change fixes `alias_attribute` behavior to handle user defined source methods properly.

[Enable DependencyTracker to evaluate renders with trailing interpolation](https://github.com/rails/rails/pull/50944)  

```erb
<%= render "maintenance_tasks/runs/info/#{run.status}" %>
```

Previously, the `DependencyTracker` would ignore this render, but now it will
mark all partials in the `maintenance_tasks/runs/info` folder as dependencies after this change.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-09-07%7D...main@%7B2024-09-13%7D)._
_We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240907-20240913) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
