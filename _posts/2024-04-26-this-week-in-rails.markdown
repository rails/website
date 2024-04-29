---
layout: post
title: "Rails World 2024 tickets on April 30, legacy index name format for Rails 7.0, etc"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-04-26
---

[Emmanuel Hayford](https://twitter.com/siaw23) here, writing from Toruń, Poland.

We'll keep this one short.

Tickets for this year's Rails World will be available for purchase on Tuesday, April 30, 2024, at 1 PM EDT from the [official Rails World site](https://rubyonrails.org/world/2024). The Foundation has more information on tickets [here](https://rubyonrails.org/2024/4/24/rails-world-tickets-on-sale-april-30).

On to your weekly dose of Rails updates:

[Pre-7.1 Rails migrations use legacy index names when using rename_table](https://github.com/rails/rails/pull/50837)  
This pull request ensures compatibility for Rails versions before 7.1 by retaining the legacy index name format. Beginning with version 7.1, Rails introduced a new index name format. Consequently, migrations containing rename_table might generate index names distinct from those created between Rails 7.0 and 7.1. A [similar pull request](https://github.com/rails/rails/pull/47863) addressing migrations containing create_table was initiated last year.

[Support hexBinary type in XML](https://github.com/rails/rails/pull/51631)  
This pull request introduces a hexBinary parser in XML. hexBinary stands out as one of the fundamental data types in XML that's not included in Rails until this addition.

[Deprecate ActiveSupport::ProxyObject](https://github.com/rails/rails/pull/51638)  
This pull request deprecates ActiveSupport::ProxyObject in favor of Ruby's built-in BasicObject.

_We had [31 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240419-20240426) to the Rails codebase this past week! You can view this week's contributions in its entirety [here](https://github.com/rails/rails/compare/@%7B2024-04-19%7D...main@%7B2024-04-26%7D)._

Take care.


_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
