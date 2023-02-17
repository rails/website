---
layout: post
title: "This Week in Rails: preloading associations with composite keys and more!"
categories: news
author: gregmolnar
published: true
date: 2023-02-17
---


Hi, this is [Greg](https://greg.molnar.io), bringing you this week's changes in the Rails codebase.

[Support preloading associations with composite keys](https://github.com/rails/rails/pull/47410)  
This pull request adds support for `Associations::Preloader` to be able to preload associations associated by a composite foreign key (`query_constraints`) and by implication adds support for `includes()` relations.
  

[SchemaCache#init_with skip deduplicate if specified](https://github.com/rails/rails/pull/47395)  
This is a very advanced API for people who use a custom Schema Cache serializer, and since the custom serializer might already deduplicate data, in which case going through deduplication again would be very wasteful.

[Rename Dockerfile user to "rails"](https://github.com/rails/rails/pull/47385)  
While a tiny detail, this change lets anyone know who is using this container that they are in a "rails" image, as opposed to a generic "appuser" which may conflict with other images.


[Add rake task to vendor guide javascript](https://github.com/rails/rails/pull/47374)  
The Rails guides were migrated from Turbolinks to Turbo, and this commit adds a rake task to automate the process of grabbing the turbo js file using `Importmap::Packager`, which is what importmap-rails uses for `bin/importmap pin --download`.


You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-02-10%7D...main@%7B2023-02-17%7D).  
We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230210-20230217) to the Rails codebase this past week!

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
