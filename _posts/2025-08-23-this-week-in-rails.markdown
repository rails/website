---
layout: post
title: "Updated Plugins Guide, current_page? with any HTTP method and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-08-23
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Rails Plugin documentation update](https://github.com/rails/rails/pull/55522)  
As part of improving the documentation of the framework, The Rails Plugins Guide
has been updated.

[Fix consistency of generated _structure.sql_ for latest PostgreSQL versions which include _\restrict_](https://github.com/rails/rails/pull/55510)  
This pull request fixes the removal of _pg_dump_'s versioning comments by also removing the new `\restrict` lines. By removing all these lines, the generated _structure.sql_ can again be consistent between runs of `rails db:schema:dump` on the latest versions of PostgreSQL.

[Allow _current_page?_ to match against specific HTTP method(s) with a _method:_ option](https://github.com/rails/rails/pull/55286)  
Before this chage, the `current_page?` helper only matched on GET and HEAD
requests, but with the new optional `method` option, it will match against
explicit HTTP methods.

[Filter sensitive attributes in logs](https://github.com/rails/rails/pull/55251)  
Attributes filtered by `filter_attributes` will now also be filtered by
`filter_parameters` to assure that sensitive information is not leaked to the
logs.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-08-16%7D...main@%7B2025-08-23%7D)._
_We had [18 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250816-20250823) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
