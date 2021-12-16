---
layout: post
title: "Rails 6.0.0 beta1, and more"
categories: news
author: dodecadaniel
published: true
date: 2019-01-22
---

[Daniel](https://twitter.com/dodecadaniel) here, writing from chilly NYC to bring you the latest Rails news.

### [Rails 6.0.0 beta1](https://rubyonrails.org/2019/1/18/Rails-6-0-Action-Mailbox-Action-Text-Multiple-DBs-Parallel-Testing)

Many thanks to everyone who helped get this amazing release together. It includes [Action Text](https://github.com/rails/rails/pull/34873) and [Action Mailbox](https://github.com/rails/rails/pull/34786), both recently merged into Rails. Try it out today!

### [New command to change databases](https://github.com/rails/rails/pull/34832)

Have you ever created a new Rails app without specifying the database system upfront, then realized you need to switch over from SQLite to PostgreSQL? That change is now as simple as running: `bin/rails db:system:change --to=postgresql`

### [Improved multi-db errors](https://github.com/rails/rails/pull/34753)

I think we can all appreciate helpful error messages. Many thanks to Eileen for helping us out, and for all of the incredible work to support multiple databases.

### [Action Cable Testing](https://github.com/rails/rails/pull/34845)

The test helpers from the [action-cable-testing](https://github.com/palkan/action-cable-testing) gem are now fully merged into Rails. Testing your cables has never been easier.

### [Endless ranges in where conditions](https://github.com/rails/rails/pull/34906)

Ruby 2.6 introduced endless ranges. In Rails 6 we will be able to use them in where conditions: `features.where(awesomeness: 10..)`

### [Don't watch your parents](https://github.com/rails/rails/pull/33822)

Before this change, if a directory to be watched was not present in the project, Rails would watch that directory's parent directory instead. In some cases this could lead to watching the entire Rails root directory.

[72 people](https://contributors.rubyonrails.org/contributors/in-time-window/20181215-20190121) contributed to Rails over the past month. There are still plenty of [open issues](https://github.com/rails/rails/issues) that could use your help. Will we see your name on the list next week?[  
](https://github.com/rails/rails/issues)  

