---
layout: post
title: "ERB in YAML keys, performance boosts, a new option for QueryLogs!"
categories: news
author: Emmanuel Hayford
published: true
date: 2022-09-30
---

こんにちは。I'm [Emmanuel](https://hayford.dev/), and I've got some updates for you!

[Avoid double type cast when serialising attributes](https://github.com/rails/rails/pull/44625)
_ActiveModel::Attribute#value_ already casts model attributes when persisting models, however some model attribute types try to cast a given value before serialising it. This means casting is done twice in most cases. This PR fixes that, giving us some performance boost.

[Add ability to set the tags_format for QueryLogs](https://github.com/rails/rails/pull/45081)
_ActiveRecord::QueryLogs_ gets a new _tags_format_ option. This makes it possible to specify if we want to use the default _:legacy_ formatter or _:sqlcommenter_.

[Facilitate use of any regular ERB in database.yml](https://github.com/rails/rails/pull/46134)
_DummyCompiler_ has been replaced with _ERB::Compiler_. True to what _dummy_ compilers do, it'd blow up when one tried to use ERB in a YAML key. This PR makes it possible to use ERB in YAML keys. While at it, we also deprecated _config.active_record.suppress_multiple_database_warning_.

[Rails.error.report now marks errors as reported](https://github.com/rails/rails/pull/46131)
_Rails.error.report_ now marks errors as reported to avoid reporting them twice. This PR also enables catching and reporting errors outside of the execution context.

We saw [23](https://contributors.rubyonrails.org/contributors/in-time-window/20220923-20220930) contributors in the last seven days.

That's it. Until next week!

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
