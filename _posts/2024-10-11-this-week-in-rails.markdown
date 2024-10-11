---
layout: post
title: "Lazy i18n watcher on boot and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-10-11
---


Hi, [Wojtek](https://twitter.com/morgoth85) here still feeling the good vibe of the Rails World. Cheers to all the attendees and see you in Amsterdam!

[Fireside Chat with DHH, Matz and Tobi](https://www.youtube.com/watch?v=zPBbHu-BKpQ)  
The video from the Rails World is now ready to watch, followed by the [Eileen keynote](https://www.youtube.com/watch?v=olxoNDBp6Rg).
All the videos will be available soon!

[Don't execute i18n watcher on boot](https://github.com/rails/rails/pull/53259)  
It shouldn't catch any file changes initially which unnecessarily slowed down boot of applications with lots of translations.

[Support method names for :block in browser blocking](https://github.com/rails/rails/pull/53158)  
Prior to this commit, `:block` options only supported callables. This commit aims to bring browser blocking closer in parity to callbacks declarations like `before_action` and `after_action` by supporting instance method names as well.

[Add :except_on option for validations](https://github.com/rails/rails/pull/43495)  
Grants the ability to skip Active Model validations in specified contexts.
 
[Update Rails error reporting guide](https://github.com/rails/rails/pull/52885)  
Change can be previewed on the edge version of the [Rails Error Reporting guide](https://edgeguides.rubyonrails.org/error_reporting.html).

[Fix incorrect SQL query when passing an empty hash to model #insert](https://github.com/rails/rails/pull/53244)  
Fixes calling code like `Post.insert({})` to not raise an error.

[Allow to save records with polymorphic join tables that have inverse of specified](https://github.com/rails/rails/pull/53176)  
See the pull request for explained bug case that was fixed.

[Fix incorrect joins for polymorphic "has many through" with association scope](https://github.com/rails/rails/pull/51507)  
Updates Active Record to not apply the previous reflection's join scopes if it's a through reflection, as the scope will eventually be built in the context of the polymorphic reflection.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-10-04%7D...main@%7B2024-10-11%7D)._
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241004-20241011) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
