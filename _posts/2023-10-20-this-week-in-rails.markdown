---
layout: post
title: "Rails World talks online, fix of a 13 years old bug and more!"
categories: news
author: Greg Molnar
published: true
date: 2023-10-20
---

Hi, it's [Greg](https://greg.molnar.io), bringing you this week's changes in the Rails codebase.

[Rails World talks are online](https://www.youtube.com/watch?v=9RZVdXyzwCw&list=PLHFP2OPUpCeY9IX3Ht727dwu5ZJ2BBbZP)  
The talks from Rails World 2023 are now available to watch online!  You can watch all of them on the YouTube playlist.  
Also, Amanda Perino wrote [a recap of Rails World](https://rubyonrails.org/2023/10/19/rails-world-2023-recap).

[Do not memoize auto/eager load paths in engines](https://github.com/rails/rails/pull/49636)  
This pull request fixes an issue from 13 years ago. In a Rails engine, if you manipulate the auto/eager load paths like this:
```ruby
config.eager_load_paths << "#{Rails.root}/extras"
config.paths["app/helpers"] << "#{Rails.root}/custom/helpers"
```
Then custom/helpers would not end up in the autoload and eager load paths. In newly generated Rails 7.1 applications lib is pushed to to `config.eager_load_paths`. If they are used together with something that edits `config.paths` afterwards, that latent bug now surfaces. I guess this combination, while possible, was not happening much in practice until now.

[Raise on _foreign_key:_ being passed as an array in associations](https://github.com/rails/rails/pull/49625)  
Associations have never allowed nor supported `foreign_key` option being passed as an _Array_. This still holds true for Rails 7.1. However, with support for composite primary keys it may become more common for applications to mistakenly pass an array to `foreign_key:`. With this commit, an exception is raised when `foreign_key:` is passed as an array.

[Fix _capture_ view helper for HAML and Slim](https://github.com/rails/rails/pull/49612)  
When a blank string is captured in HAML or Slim (and possibly other template engines) it returns an entire buffer. This pull request fixes that.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-10-13%7D...main@%7B2023-10-20%7D)._  
_We had [26 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231013-20231020) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
