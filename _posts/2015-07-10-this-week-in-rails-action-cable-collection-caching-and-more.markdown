---
layout: post
title: "This week in Rails: Action Cable, collection caching and more"
categories: news
author: _cha1tanya
published: true
date: 2015-07-10 17:40:57 -0700
---

####

Hi This is [Prathamesh](https://twitter.com/_cha1tanya) bringing together all the latest happenings from the Rails world.

## Featured

### [Action Cable alpha is out!](https://github.com/rails/actioncable)

Action Cable is out in wild as promised by DHH in his Railsconf keynote. There is flurry of activity happening with it right now. It's still in alpha mode and will get production ready with Rails 5.

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150704-20150710)

Meet the 21 lovely people who contributed to Rails this week, the community can't thank you all enough!

## New Stuff

### [Explicit collection caching directive](https://github.com/rails/rails/pull/20781)

Now we can explicitly specify collection caching using a special directive `# Template Collection`. The partials which do not start with `<% cache do %>` calls will get benefitted by this feature.

## Improved

### [Filter params based on parent keys](https://github.com/rails/rails/pull/13897)

Do you have nested params with same child key and different parent keys? Do you want to filter the child keys for only some of the parent keys? Now you can! Params can be filtered based on parent key using a simple config.

## Fixed

### [Fix inconsistent behavior of HWIA with default_proc](https://github.com/rails/rails/pull/20828)

Thanks to this fix, behavior of `HWIA` is now in sync with Ruby's built-in `Hash` when a `default_proc` is set on the instance and it is `dup`ed.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-07-04%7D...@%7B2015-07-10%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

