---
layout: post
title: "Added rename_schema and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-07-11
---

Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore this week's changes in the Rails codebase.

*Farewell RailsConf!*  
800 devs gathered in Philadelphia to share memories and say goodbye at the final RailsConf. Huge thanks to Ruby Central and all the speakers and attendees who made it such a memorable event over the past 19 years.

[Add rename_schema method for PostgreSQL](https://github.com/rails/rails/pull/55293)  
To complement already existing *add_schema*, *drop_schema* and *schema_exists?* methods.

[Improve error message for table index length validation](https://github.com/rails/rails/pull/55313)  
Includes current character length in error messages for index and table name length validations.

[Validate encoding on query keys](https://github.com/rails/rails/pull/55319)  
Always check query string keys for valid encoding just like values are checked.

[Deprecate escape_json_responses at the method call](https://github.com/rails/rails/pull/54840)  
Instead of emitting the deprecation in an initializer, it now emits the deprecation when calling the writer method. 
Follow up to [#54643](https://github.com/rails/rails/pull/54643).

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-07-04%7D...main@%7B2025-07-11%7D)._
_We had [26 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250704-20250711) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
