---
layout: post
title: 'Snappier Development Mode in Rails 5'
categories: edge
author: fxn
published: true
date: 2015-11-11 07:52:49 +0100
---

In Rails 5 development mode is going to be a tad snappier for large code bases.

As you know, when a request comes in Rails reloads[<sup>1</sup>](#note-1) applications in
development mode[<sup>2</sup>](#note-2) if something has changed. The way this is done has
evolved over the years.

For a long time Rails simply reloaded unconditionally in every request.

Rails 3.2 improved that with the implementation of a
[file system monitor](https://github.com/rails/rails/blob/72b5a5aae0b2d5ddd3f1cf87d2e5a512207868e2/activesupport/lib/active_support/file_update_checker.rb)
which (mod details) walks the application tree on every request checking `mtime`s.

That tree walk is done per request, not per page view. In particular, it
happens when serving each one of the assets so, albeit walking an application
tree once may not be a big deal, it may add up depending on the number of
assets and how large is your code base.

Rails 5 [is going to ship](https://github.com/rails/rails/pull/22254) also
with an evented file system monitor. When something changes the operating
system calls Rails asynchronously and a flag is toggled. When a request comes
in, the flag is checked, done.

This monitor is disabled by default, applications may opt-in just loading the
[listen gem](https://github.com/guard/listen) in their
`Gemfile`:

```ruby
group :development do
  gem 'listen', '~> 3.0.4'
end
```

On Linux and Mac OS X there are no additional dependencies, but some are
required [for *BSD](https://github.com/guard/listen#on-bsd) and [for
Windows](https://github.com/guard/listen#on-windows). Note that [some setups
are unsupported](https://github.com/guard/listen#issues--limitations).

Even if the evented monitor is enabled, the console still needs manual reload
because it could be surprising that classes change behind the scenes while
there are objects already instantiated. Better be explicit.

Thanks to [Puneet Agarwal](https://github.com/puneet24), who wrote the initial
patch for this feature as part of [this year's
GSoC](https://rubyonrails.org/2015/5/2/welcome-to-gsoc-15).

Also kudos to the [listen authors and
maintainers](https://github.com/guard/listen/graphs/contributors), thanks to
[listen](https://github.com/guard/listen) this was infinitely easier to
implement in a portable way.

* * *

<a name="note-1"></a><sup>1</sup> For a technical explanation of what "reloading" means please check the
[Autoloading and Reloading Constants](http://guides.rubyonrails.org/autoloading_and_reloading_constants.html) guide.

<a name="note-2"></a><sup>2</sup> Technically when `config.cache_classes` is false.

