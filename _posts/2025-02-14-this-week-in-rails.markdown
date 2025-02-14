---
layout: post
title: "Routes Lookup Optimizations, PostgreSQL Alter Table improvements and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-02-14
---

Hey everyone, Happy Friday!

[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. 

This week saw several improvements in Routes lookup. Below are a few notable changes- 

[Speed up GTG Simulator by reducing slices/matches](https://github.com/rails/rails/pull/54491)  
This change improves the performance of routing by 10-20% in simple cases by removing the duplication and preventing excess string allocations. 
The improvement is larger for routes deeper in the tree.

[Micro-Optimize Router#find_routes](https://github.com/rails/rails/pull/54517)  
This PR slightly improves the routes finding process by removing overheads and speeds up the route look up process by 2-2.5x faster compared to Rails 8.0.

[Simplify stdparam state to reduce retained hashes](https://github.com/rails/rails/pull/54476)  
This PR simplifies the data stored in `stdparam_state` to be a simpler hash mapping and improving performance in hash intensive operations.

Here's a list of other PRs with improvements around this area: [#54504](https://github.com/rails/rails/pull/54504), [#54491](https://github.com/rails/rails/pull/54491), [#54505](https://github.com/rails/rails/pull/54505),  [#54515](https://github.com/rails/rails/pull/54515), [#54516](https://github.com/rails/rails/pull/54516), [#54526](https://github.com/rails/rails/pull/54526).

[Allow execution wrapper to handle all exceptions](https://github.com/rails/rails/pull/54455/files)  
This PR changes the execution wrapper and execution middleware to default to catching all `Exception`s instead of all `StandardError`s.

Essentially, before this change:

```ruby
Rails.error.handle do
  raise Exception
end
```
would not handle the exception, but now it does.

[Make Value type default to mutable](https://github.com/rails/rails/pull/54435)  
This change makes the ActiveModel type values mutable by default, which in turn guarantees that custom type values are duplicated appropriately when modified.

[Pass keyword arguments to PostgreSQL Adapter Table methods](https://github.com/rails/rails/pull/54472)  
With the use of forward argument `(...)` PostgreSQL adapter table definition methods can now accept keyword arguments.
This change lays essential groundwork for `validate_constraint` and `validate_check_constraint` to start accepting keyword arguments.

[Further restrict which contradicted queries need to be run](https://github.com/rails/rails/pull/54430)  
This change ensure that only fully matching queries trigger aggregation, ignoring mismatches and certain ARel values to avoid some additional queries.

[Allow to skip HashWithIndifferentAccess value conversion](https://github.com/rails/rails/pull/54437)  
This PR addresses an inefficiency in ActiveModel’s handling of attribute changes, specifically when working with HashWithIndifferentAccess in serialized attributes.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-02-08%7D...main@%7B2025-02-14%7D)._  

_We had [18 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250208-20250214) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
