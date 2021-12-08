---
layout: post
title: "Performance improvements, configuration options, and more"
categories: news
author: dodecadaniel
published: true
date: 2018-09-16
---

Greetings! [Daniel](https://twitter.com/dodecadaniel) here, reporting from Brooklyn, NY.

### [Use faster globs for template resolving](https://github.com/rails/rails/pull/33860)

Resolving templates used to get pretty slow as the number of view paths, handlers, and formats increased. Replacing 1682 system calls with 14 sounds pretty great to me!

### [Do less work and use less memory](https://github.com/rails/rails/pull/33821)

[2.4% faster](https://github.com/rails/rails/pull/33821), [1.7% faster](https://github.com/rails/rails/pull/33817), [1.58% faster](https://github.com/rails/rails/pull/33805). Many thanks to Richard for working hard so our applications don't need to!

### [Improve performance of Integer#multiple_of?](https://github.com/rails/rails/pull/33854)

With a few clever tweaks, it has never been easier to find out if 4611686018427387903 is a multiple of 42.

### [Default to utf8mb4 for MySQL](https://github.com/rails/rails/pull/33608)

The previous default character set did not support supplemental characters like emoji. The 4-Byte utf8mb4 has you covered. 👍&nbsp;

### [Introduce model-level configuration for filtering sensitive attributes](https://github.com/rails/rails/pull/33756)

Nobody wants sensitive data to show up in logs. The new _filter\_attributes_ setting allows you to filter out sensitive attributes when calling a model's _inspect_ method.

### [Introduce configurable prefix for Active Storage routes](https://github.com/rails/rails/pull/33883)

By default the Active Storage routes begin with   
_/rails/active\_storage_. If that doesn't suit you, you can now use any scope you like by setting _config.active\_storage.routes\_prefix_ in your application config.

### [Include an id in Action Cable's Redis configuration](https://github.com/rails/rails/pull/33798)

Action Cable now passes an id to Redis, which can help you distinguish between Action Cable's connection and any other connections you might have.

[44 people](https://contributors.rubyonrails.org/contributors/in-time-window/20180902-20180915) contributed to Rails over the past two weeks. Check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2018-09-02%7D...@%7B2018-09-15%7D). If you are interested in helping out, we have plenty of [open issues](https://github.com/rails/rails/issues). I hope to see your name on the list next week!
