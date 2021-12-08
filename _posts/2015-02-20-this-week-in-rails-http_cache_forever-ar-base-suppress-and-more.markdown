---
layout: post
title: "This week in Rails: http_cache_forever, AR::Base.suppress and more!"
categories: news
author: claudiob
published: true
date: 2015-02-20 15:37:56 -0800
---

My Valentine’s Day letter to Ruby on Rails:

“Dear Rails, remember the first time we met?  
You were just 1.2, and I was in an unhealthy relationship with Perl and PHP.

I saw you in the library and I immediately fell in love.  
For seven years, you made my code more readable and my skills stronger.

You are the most beautiful framework and always will be.  
I cannot wait to see you turn 5.0.” – [Claudio](http://github.com/claudiob)

## Featured

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

Apparently I'm not the only one in love with Ruby on Rails. 36 programmers contributed to Rails this week, 10 of them for the first time. Keep loving!

## New Stuff

### [Add http\_cache\_forever to ActionController](https://github.com/rails/rails/pull/18394)

The new method is perfect to cache results that are meant to never expire, such as static pages.

### [Add ActiveRecord::Type.register](https://github.com/rails/rails/commit/82d12eb9045cba57172ec7cc0786d0f72a8b711f)

You can now reference with a symbol any database type that is specific to your adapter, such as:  
`ActiveRecord::Type.register(:money, MyMoneyType)`

### [Add ActiveRecord::Base.suppress](https://github.com/rails/rails/pull/18910)

Wrapping a block with `suppress` will prevent any save operation from hitting the database. Check the PR for a real-world example.

## Improved

### [Add :time option to ActiveRecord::Base.touch](https://github.com/rails/rails/pull/18956)

You can now _touch_ an ActiveRecord instance with a different time than the current time.

## Removed

### [Removed RecordTagHelper](https://github.com/rails/rails/pull/18411)

The helpers `div_for` and `content_tag_for` will be gone in Rails 5. Grab the [record\_tag\_helper](https://github.com/rails/record_tag_helper) gem if you still need them!

### [Removed ActiveModel::Errors getters/setters](https://github.com/rails/rails/pull/18634)

If you ever used `person.errors.get(:name)` <del>or `person.errors[:name]`</del> to read an error message, you should now <del>switch to `person.errors.messages[:name]`</del>. `add_on_empty` and `add_on_blank` are [gone too](https://github.com/rails/rails/pull/18996).

**Update**: you [should be using `person.errors[:name]`](https://github.com/rails/rails/commit/f55bfe726045594c78438841cdccd5843522deab) after all! Use `person.errors.add(:name, ...)` to append.

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails/commits/master) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

