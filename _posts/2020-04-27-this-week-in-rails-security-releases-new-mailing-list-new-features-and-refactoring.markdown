---
layout: post
title: "This week in Rails - security releases, new mailing list, new features, and refactoring"
categories: news
author: dodecadaniel
published: true
date: 2020-04-27
---

[Daniel] here, holed up in my apartment in New York City trying to stay healthy.
Overwhelmed by all the latest pandemic news? Why not take a break with some
exciting Rails news?

[Daniel]: https://twitter.com/dodecadaniel

### [Security Fixes](https://rubyonrails.org/2020/3/19/Rails-6-0-2-2-and-5-2-4-2-has-been-released)

Rails 6.0.2.2 and 5.2.4.2 were recently released to fix a XSS vulnerability in
Action View. If you are not running one of these versions, it is time to
upgrade. While you are at it, it is also time to [upgrade to Ruby 2.5.8, 2.6.6,
or 2.7.1][ruby releases].

[ruby releases]: https://www.ruby-lang.org/en/downloads/releases/

### [Ruby on Rails on Discourse](https://discuss.rubyonrails.org)

The Ruby on Rails mailing list has migrated to https://discuss.rubyonrails.org/.
If you would like to suggest changes or new features, discuss documentation, or
ask questions about Rails, this is the place to be.

### [Annotate HTML output with template names](https://github.com/rails/rails/pull/38848)

If you have ever opened your HTML source in the browser and wondered which
templates were rendering which part of the page, this feature is for you.
`config.action_view.annotate_template_file_names` adds HTML comments to the
rendered output indicating where each template begins and ends. I am a fan of
this feature, and I also like the clear problem statement in the commit message
and PR description.

### [Quickly generate a Rails app pointing to master](https://github.com/rails/rails/pull/38631)

If you are anything like me, you want to try out new Rails features the moment
they are merged. Why wait? Now generating a new Rails app pointing to master is
as simple as `rails new <app_name> --master`.

### [Just simply improve the documentation](https://github.com/rails/rails/pull/37946)

Removing words like "just" and "simple" from the documentation might seem like a
small change, but removing these superfluous words can make for a significantly
more welcoming experience to folks who are struggling. 😍

### [Use index_by and index_with wherever possible](https://github.com/rails/rails/pull/38646)

I haven't used `index_by` and `index_with` before, but seeing this PR makes me
want to try them out. It certainly looks nicer than `map { ... }.to_h`. And if
you really like these methods you can enforce that with a new rubocop-rails cop.

### [And plenty of refactoring](https://github.com/rails/rails/search?q=Refactor+committer-date%3A%3E2020-03-01+merge%3Afalse&unscoped_q=Refactor+committer-date%3A%3E2020-03-01+merge%3Afalse&type=Commits)

Eileen refactored [invert_predicate] and [fetch_attribute] to get rid of some
case statements in favor of a more object oriented approach. Aaron refactored
the [PartialRenderer], splitting out classes for rendering single objects and
collections. John improved some things by making [ActionView rendering
instrumentation] less DRY (sometimes WET code is better!).

[invert_predicate]: https://github.com/rails/rails/pull/38636
[fetch_attribute]: https://github.com/rails/rails/pull/38719
[PartialRenderer]: https://github.com/rails/rails/pull/38594
[ActionView rendering instrumentation]: https://github.com/rails/rails/pull/38857

[106 people contributed] since our last issue. Check out the [full list of
changes] and Stay healthy out there!

[106 people contributed]: https://contributors.rubyonrails.org/contributors/in-time-window/20200301-20200426
[full list of changes]: https://github.com/rails/rails/compare/master@%7B2020-03-01%7D...@%7B2020-04-26%7D
