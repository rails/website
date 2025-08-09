---
layout: post
title: "Support for rack.response_finished callbacks in executor"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-08-09
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Add support for "rack.response_finished" callbacks in Action Dispatch's Executor](https://github.com/rails/rails/pull/55425)  
The executor middleware now supports deferring completion callbacks to later in the request lifecycle by utilizing Rack's `rack.response_finished` mechanism, when available. This enables applications to define callbacks that may rely on state that would be cleaned up by the executor's completion callbacks.

[Enable configuring Action View's render tracker](https://github.com/rails/rails/pull/55194)  
You can opt-in to the new parser with `config.action_view.render_tracker = :ruby` or `load_defaults(8.1)`.
This new render tracking implementation was added in Rails 7.2, the [RubyTracker](https://github.com/rails/rails/commit/d743a2b).

[Add credentials:fetch command](https://github.com/rails/rails/pull/53119)  
This new command allows fetching the value of a credential from the Kamal 2 credentials file.

```
$ bin/rails credentials:fetch kamal_registry/password
```

[Make Logger freeze-friendly](https://github.com/rails/rails/pull/55465)  
Previously, you would get a `FrozenError` when trying to use a logger you called `freeze` on.

[Stop trying to tidy bytes when escaping HTML](https://github.com/rails/rails/pull/55467)  
When using `ERB::Util.html_escape` we no longer try to handle invalid UTF-8 strings, since this is an issue for handling user-input, not escaping, we can optimize this method by not doing it.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-08-02%7D...main@%7B2025-08-09%7D)._
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250802-20250809) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
