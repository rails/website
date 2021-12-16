---
layout: post
title: "This week in Rails: Rails 4.2.6.rc1 and 4.1.15.rc1, AS::Executor and AS::Reloader APIs and more!"
categories: news
author: vipulnsward
published: true
date: 2016-03-04
---

Hi All!

This is [Vipul](https://twitter.com/vipulnsward) bringing you the latest news from [Rails](https://github.com/rails/rails)!

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160227-20160304)

This week 48 contributors helped to move Rails forward! Want to be one of them? Look at the [issues](https://github.com/rails/rails/issues) list and make a contribution!

### [Rails 4.2.6.rc1 and 4.1.15.rc1 have been released](https://rubyonrails.org/2016/3/1/Rails-4-2-6-rc1-and-4-1-15-rc1-have-been-released)

Rails 4.2.6.rc1 and 4.1.15.rc1 have been released!
If no regressions are found expect the final release around March 4, 2016.

### [Publish AS::Executor and AS::Reloader APIs](https://github.com/rails/rails/pull/23807)

These both allow external code to run blocks of user code to do "work" at a similar unit size to a web request without needing to get intimate with Action Dispatch.

This change is intended to allow interested callers (Sidekiq, Action Cable), to just do:

    Rails.application.reloader.wrap do
      # run some user code
    end

and Rails will take care of the interlock, code reloading, returning Active Record connections to the pool, and anything else that might be relevant.
Exciting, if you have ever been stung by concurrent processing in jobs, etc.

## New Stuff

### [Rails now defaults to Puma 3](https://github.com/rails/rails/pull/23906)

With related changes from [Puma](https://github.com/puma/puma/pull/856), Puma 3.0 and up introduced compatibility to read from `config/puma.rb` when booting from the command `$ rails server`. Rails now depends on Puma 3.0, so that support for `config/puma.rb` comes out of the box.

### [Add `exclude` option to SSL middleware](https://github.com/rails/rails/pull/22591)

The `force_ssl` option redirects each request to HTTPS. This change now allows redirection to be constrained to only whitelisted requests with `exclude`:

    config.ssl_options = { redirect: { exclude: -> request { request.path !~ /healthcheck/ } } }

## Improved

### [Generate config/spring.rb in new applications](https://github.com/rails/rails/commit/b04d07337fd7bc17e88500e9d6bcd361885a45f8)

This change makes the application generator create a new file `config/spring.rb`, which tells Spring to watch additional common files, for example `.ruby-version`. This file can then be edited to suit each application.

### [Added log "Rendering ...", when starting to render a template](https://github.com/rails/rails/pull/23915)

This change added log "Rendering ...", when starting to render a template, to log that we have started to render something, at the very beginning.

This helps to easily identify queries called from controller vs views.

## Deprecations

### [Deprecate :controller and :action path parameters in routes](https://github.com/rails/rails/commit/6520ea5f7e2215a763ca74bf6cfa87be2347d5df)

Allowing `:controller` and `:action` values to be specified via the path in `config/routes.rb` has been an underlying cause of a number of issues in Rails that have resulted in security releases. In light of this it's better that controllers and actions are explicitly whitelisted rather than trying to blacklist or sanitize bad values.
This change deprecates passing these options in routes.

### [Deprecate `{insert|update|delete}_sql` in `DatabaseStatements`](https://github.com/rails/rails/pull/23086)

This change deprecates `{insert|update|delete}_sql` in `ActiveRecord::ConnectionAdapters::DatabaseStatements` in favor of `{insert|update|delete}` public methods.
Originally, `{insert|update|delete}_sql` were protected methods, and were not intended for external use.

### [Deprecate `Module.local_constants`](https://github.com/rails/rails/commit/86d4e189580e84c4b7effc0c3ebd25b4e8dc4fee)

`Module.local_constants` has now been deprecated.
After Ruby 1.9 (and since Rails 5 supports Ruby 2.2+), we can easily get the constants that have been defined locally by `Module.constants(false)`. Hence, `Module.local_constants` is no more necessary.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a look at the [changes](https://github.com/rails/rails/compare/master@%7B2016-02-27%7D...@%7B2016-03-04%7D) yourself.

Until next time!
