---
layout: post
title: "This week in Rails: Enumerable#pluck, SQLite Collation and lots more"
categories: news
author: vipulnsward
published: true
date: 2015-05-30 00:02:36 -0700
---

####

Hello everyone!

This is [Vipul](https://twitter.com/vipulnsward) , happily reporting from a Simmering Summer 😎. Pour yourself a drink 🍹, sit back, relax and enjoy, as we go through these [hot off the press](https://github.com/rails/rails) changes.

## Featured

### [This week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150522-20150528)

43 people helped make Rails even awesome this week. Checkout the pulse [page](https://github.com/rails/rails/pulse) for more details.

## New Stuff

### [`Enumerable#pluck`](https://github.com/rails/rails/pull/20350)

`Enumerable#pluck` has just landed on master, providing similar functionality as Active Record's `#pluck`.

This allows for something like
`[{ name: "David" }, { name: "Rafael" }, { name: "Aaron" }].pluck(:name)` to get everyone's names. Pretty handy!

## Improved

### [Collation support in SQLite](https://github.com/rails/rails/pull/20041)

Active Record now supports specifying a [collation function](https://www.sqlite.org/datatype3.html#collation) for SQLite string columns.

### [Default procs in Attributes API](https://github.com/rails/rails/pull/19914)

With the new [Attributes API](http://confreaks.tv/videos/railsconf2015-designing-a-great-ruby-api-how-we-re-simplifying-rails-5), it is now possible to specify a proc as the default values for an attribute, which allows for runtime-generated default values such as `attribute :year, :integer, default: -> { Time.now.year }`. See also these [related changes](https://github.com/rails/rails/commit/a6e3cdae0ce1d05a6b9f7dff4499f6be3fbf63c2).

### [Preserve MySQL's `sql\_mode` with `strict: :default`](https://github.com/rails/rails/pull/17654)

By default, Rails overrides MySQL's `sql_mode` setting with `sql_mode=STRICT_ALL_TABLES` to prevent silent data loss. While this is helpful, it has the unfortunate side-effect of overriding any user customizations.

If you prefer to manage this yourself, you can now specify `strict: :default` [in your connection's config](https://github.com/rails/rails/issues/17370#issuecomment-106159323) and Rails will leave your `sql_mode` alone. (`STRICT_ALL_TABLES` is still highly recommended though!)

## Deprecated

### [Deprecate `render nothing: true`](https://github.com/rails/rails/pull/20336)

If you are using `render nothing: true`, you should start replacing it with `head :ok`, which does the same thing and is more semantic. This option will go away permanently in Rails 5.1.

### [Deprecate `Relation#uniq`](https://github.com/rails/rails/commit/adfab2dcf4003ca564d78d4425566dd2d9cd8b4f)

The superficial similarity between `Relation#uniq` and `Array#uniq` has been a source of confusion, which led to the addition of [`Relation#distinct`](https://github.com/rails/rails/pull/9683) which better communicates what is happening under the hood.

The recent discussion on [#20198](https://github.com/rails/rails/pull/20198) put the final nail in the coffin for `Relation#uniq` and its friends, `#uniq!` and `#uniq_value`. These methods are deprecated and scheduled for removal in Rails 5.1, so you might want to start using `#distinct`, `#distinct!` and `#distinct_value` soon.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-05-22%7D...@%7B2015-05-29%7D)!

P.S. If you enjoyed this newsletter, why not share it with your friends? :) If you wish to be part of this project please don't hesitate to [contact Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

