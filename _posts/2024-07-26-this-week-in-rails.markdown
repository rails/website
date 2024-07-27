---
layout: post
title: "Model Missing Attributes, SQLite Immediate Transactions, and CVV/CVC Parameter Filtering by default"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-07-26
---


Hi, it's [zzak](https://github.com/zzak). This is a short week, but let's jump in.

[Drop Hash#except core extension](https://github.com/rails/rails/pull/52424)  
Rails 8.0 will be Ruby 3.1 or greater only `except` natively got added in Ruby 3.0 so this is dead code now.


[Introduce ActiveModel::AttributeAssignment#attribute_writer_missing](https://github.com/rails/rails/pull/52417)  
Provide instances with an opportunity to gracefully handle assigning to an unknown attribute:

```ruby
class Rectangle
  include ActiveModel::AttributeAssignment

  attr_accessor :length, :width

  def attribute_writer_missing(name, value)
    Rails.logger.warn "Tried to assign to unknown attribute #{name}"
  end
end

rectangle = Rectangle.new
rectangle.assign_attributes(height: 10)
  # => Logs "Tried to assign to unknown attribute 'height'"
```

[Add "cvv" and "cvc" as default parameters to filter out in new apps](https://github.com/rails/rails/pull/52413)  
For new apps, this PR adds `cvv` and `cvc` to the defaults for [ActiveSupport::ParameterFilter](https://api.rubyonrails.org/v7.1.3.4/classes/ActiveSupport/ParameterFilter.html).


[Ensure SQLite transaction default to IMMEDIATE mode](https://github.com/rails/rails/pull/50371)  
This PR updates the SQLite adapter to use [IMMEDIATE mode](https://www.sqlite.org/lang_transaction.html#deferred_immediate_and_exclusive_transactions) whenever possible in order to improve concurrency support and avoid busy exceptions.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-07-20%7D...main@%7B2024-07-27%7D)._
_We had [15 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240720-20240727) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
