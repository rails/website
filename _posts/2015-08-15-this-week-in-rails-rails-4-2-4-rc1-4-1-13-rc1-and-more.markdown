---
layout: post
title: "This week in Rails: Rails 4.2.4 RC1, 4.1.13 RC1 and more!"
categories: news
author: repinel
published: true
date: 2015-08-15 01:37:36 -0700
---

Hello Everyone! This is [Roque](https://twitter.com/repinel) bringing the latest from [Rails](https://github.com/rails/rails) with some help from [Kasper](https://twitter.com/kaspth).

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150808-20150814)

We had 36 awesome contributors to the Rails codebase this week. Check out the active [issues](https://github.com/rails/rails/issues) over on GitHub if you'd like to see your name here.

### [Rails 4.2.4 RC1 and 4.1.13 RC1 have been released!](https://rubyonrails.org/2015/8/14/Rails-4-2-4-rc1-and-4-1-13-rc1-have-been-released)

There's new release candidates, please try them and report any regressions you find, so that the Rails team can fix them before the final release.

Thank you to all contributors for these releases!

## New Stuff

### [Active Record relations come in batches](https://github.com/rails/rails/pull/20933)

This week Active Record got a new method that works like `find_in_batches` but yields relations instead of arrays. It also added a cool delegation API that lets you do something like:

`People.in_batches.delete_all('age > 21')`

Oh, in case you were wondering – this is pretty much how Skynet works.

## Improved

### [i18n reloading picks up new and deleted files](https://github.com/rails/rails/pull/21124)

This patch allows new locale YAML files to be loaded without having to restart the Rails server. It also reloads the available locales when files are deleted.

### [Active Job assertions returns matched job](https://github.com/rails/rails/pull/21010)

The matched job returned by these methods can be used for advanced assertions like:

    job = assert_enqueued_with(job: SomeJob) do
      some_business_logic
    end
    assert_equal 5, job.arguments.second

## Spun Off

### [XML serialization have been moved to a gem](https://github.com/rails/rails/pull/21161)

As usage for XML serialization declined, it's become less of a core concern of Rails. In Rails 5, this feature will be moved to the [activemodel-serializers-xml](https://github.com/zzak/activemodel-serializers-xml) gem.

If you're still using the XML Serialization feature in your app, you will need to add this to your Gemfile when you upgrade.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-08-08%7D...@%7B2015-08-14%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

