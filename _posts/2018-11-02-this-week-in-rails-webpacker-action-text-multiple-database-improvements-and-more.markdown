---
layout: post
title: "Webpacker, Action Text, Multiple database improvements, and more"
categories: news
author: dodecadaniel
published: true
date: 2018-11-02
---

Boo! It's [Daniel](https://twitter.com/dodecadaniel) here, bringing you news about Rails for October. 🎃

### [Make Webpacker the default JavaScript compiler for Rails 6](https://github.com/rails/rails/pull/33079)

Less than two years ago Rails introduced the Webpacker gem, making it easy to manage JavaScript with webpack. We started October strong by merging a whole bunch of commits by a number of people to make Webpacker the default for Rails 6.

### [Introducing Action Text](https://rubyonrails.org/2018/10/3/introducing-action-text-for-rails-6)

Combining the powers of Active Storage, Webpacker, and Trix, Action Text brings rich text content and editing to Rails. Check it out!

### [Improvements for multiple databases](https://github.com/rails/rails/pull/34052)

In [part 4](https://github.com/rails/rails/pull/34052) of the series, Eileen adds _connects\_to_ and _connected\_to_. Stay tuned for the next episode!  
 We also got multi-db support for _db:migrate:status_. I like the approach of [making the change easy](https://github.com/rails/rails/pull/34081), then [making the change](https://github.com/rails/rails/pull/34137).

### [Support default expression and expression indexes for MySQL](https://github.com/rails/rails/pull/34307)

With the release of MySQL 8.0.13, we can now support functions and expressions as default values, and functional key parts that index expression values rather than column or column prefix values.

### [Add guides section on verbose query logs](https://github.com/rails/rails/pull/34257)

Why spend time tracking down which line of your code is triggering a database query when Active Record can just tell you? Well you might do just that if you don't know about the _verbose\_query\_logs_ option. Luckily we now have a section in our guides describing the option in detail.

### [Document deep_interpolation parameter for bulk lookups](https://github.com/rails/rails/pull/34309)

This is a fun option I didn't know existed. There is something mildly foreboding about the name _deep\_interpolation_, I think. Anyway, our I18n guide now documents it.

### [Show allocations  for template and partial rendering](https://github.com/rails/rails/pull/34136)

_Completed 200 OK in 858ms (Views: 848.4ms | ActiveRecord: 0.4ms |_ **_Allocations: 1539564_** _)_ 🙂

### [ Fix autoloading issue with Active Storage](https://github.com/rails/rails/pull/34253)

This brave soul wandered into&nbsp;_dependencies.rb_ and made it to the other side. Bravo!

### [Preparing Rails for winter](https://github.com/rails/rails/pull/32031)

As the weather gets colder here in New York, I am glad I don't need to be reminded of how freezing I am whenever I look through the Rails codebase.

[77 people](https://contributors.rubyonrails.org/contributors/in-time-window/20181001-20181031) contributed to Rails since our last issue. There are also 77 partitions for the number 12. Spooky coincidence? I think so.   
  
Check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2018-10-01%7D...@%7B2018-10-31%7D).&nbsp; If you are interested in contributing, we have plenty of [open issues](https://github.com/rails/rails/issues). I hope to see your name on the list next week!
