---
layout: post
title: "This week in Rails: locate_many, emoji partials and more!"
categories: news
author: huoxito
published: true
date: 2015-02-06 16:10:49 -0800
---

Hey there!

Newsletter team is back to your inbox delivering all latest good commits and pull requests from [Rails](https://github.com/rails/rails). Hopefully you have your favorite drink right there with you to make this quick reading ever better.

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

Over 25 people contributed to Rails this week alone. Perhaps by our next newsletter your name could be on that list too!

## Improved

### [Efficient lookup for many models in Global ID](https://github.com/rails/globalid/commit/ab5f975fefa62054b3acd4845d77fac60f5bc213)

Latest version of Global ID 0.3.2 brings better look up for models. You can pass an array of ids to `locate_many` to fetch records only once per model. Check out the juicy comments of Core Team members figuring out their own API.

### [Partial names don't have to be valid Ruby identifiers](https://github.com/rails/rails/commit/da9038eaa5d19c77c734a044c6b35d7bfac01104)

Rails master can render partial names like `_the-friday-party.html.erb` just fine now as well. If you are feeling extra adventurous, you might even try naming your partials with [emojis](https://github.com/amatsuda/rails/commit/039980478074c42a1cff88df0c16e75a4fb8825c#diff-3)!

### [`perform_enqueued_jobs` can filter jobs by type](https://github.com/rails/rails/pull/18833)

By passing a `only` option you are able to test only those particular jobs while any other inside the block won't be performed. Checkout the changelog entry introduced for a crystal clear example usage.

## Fixed

### [Child record validation respects `validate: false` on parents](https://github.com/rails/rails/pull/18612)

Took a few years but this is fixed! Persisting child records will respect the current validation state of the parent record. Also good to see how the team is worrying about performance penalties for fixes in ActiveRecord core logic.

## Removed

### [Dropping `xhr` helper to simplify AC::TestCase](https://github.com/rails/rails/pull/18771)

You will need to update your test suites in case they use either `xhr` or `xml_http_request` test helpers. Instead switch to the regular `get` and pass the keyword argument `xhr: true`

### [Farewell Rails built in documentation tasks](https://github.com/rails/rails/commit/cd7cc5254b090ccbb84dcee4408a5acede25ef2a)

Now comes a goodbye to a few friends most of us never knew we had: the documentation rake tasks. The three siblings `doc:app`, `doc:rails` and little `doc:guides` joins local documentation in a better place - online. Our thoughts are with the remaining rake tasks. Rest In Protocols.

## One More Thing™

### [Eileen M. Uchitelle is a Rails Committer](https://twitter.com/rails/status/562300100169728001)

[Eileen](https://twitter.com/eileencodes) has been doing [awesome work](https://github.com/rails/rails/commits/master?author=eileencodes) on Active Record related to performance refactoring and bug fixes besides mentoring some students in the [Facebook Open Academy](https://www.facebook.com/OpenAcademyProgram) program.

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

