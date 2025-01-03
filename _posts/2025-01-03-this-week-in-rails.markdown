---
layout: post
title: "Schema dumper versions formatter and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-01-03
---

Hi, [Wojtek](https://x.com/morgoth85) here. Let’s explore the first changes of the new year in the Rails codebase.

[Introduce versions formatter for the schema dumper](https://github.com/rails/rails/pull/53797)  
It is now possible to override how schema dumper formats versions information inside the *structure.sql* file. Currently, the versions are simply sorted in the decreasing order. Within large teams, this can potentially cause many merge conflicts near the top of the list.

Now, the custom formatter can be provided with a custom sorting logic (e.g. by hash values of the versions), which can greatly reduce the number of conflicts.

[Replace SyntaxTree with Prism in rail_inspector](https://github.com/rails/rails/pull/54050)  
Now that *Prism* has been stable for a while and is the default parser in Ruby 3.4, use it in the *rail_inspector*.

[Handle path_params gracefully when a user sends a string](https://github.com/rails/rails/pull/51496)  
When url contains the query part *?path_params=string* it is now ignored and does not error.

[Fix setting to_time_preserves_timezone from "new framework defaults"](https://github.com/rails/rails/pull/54017)  
Previously setting `Rails.application.config.active_support.to_time_preserves_timezone = :zone` in the initializer did not have effect.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-12-27%7D...main@%7B2025-01-03%7D)._
_We had [21 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241227-20250103) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
