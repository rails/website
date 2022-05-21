---
layout: post
title: "Bugfixes, guides improvement and more!"
categories: news
author: gregmolnar
published: true
date: 2022-05-21
---

Hi, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest news from the Rails world.

[**Add ability to ignore tables by a regular expression for SQL schema dumps**](https://github.com/rails/rails/pull/45091)
It was already possible to ignore tables by a regexp for ruby schema dump, but from now on if you use a SQL based structure dump, you can do so to by configuring _ActiveRecord::SchemaDumper.ignore\_tables = [/^\_/]_

[**Add skip\_nil: support to RedisCacheStore**](https://github.com/rails/rails/pull/42909/files)
This change allows RedisCacheStore to also accept a default value for _skip\_nil_.

[**Support unbounded time ranges for PostgreSQL**](https://github.com/rails/rails/pull/45099)
This PR fixed an issue when passing unbounded ranges to PostgreSQL.

[**Fixes Active Storage proxy downloads of files over 5Mb in S3-like storages**](https://github.com/rails/rails/pull/45102)
Downloading files over 5Mb in proxy mode didn't work properly with Active Storage, but this PR fixes the issue. A detailed description of the issue and the fix is in the description.

[**Make validators accept lambdas without record argument**](https://github.com/rails/rails/pull/45118)
Now you can set validators without passing the object to the lambda like this: _validates\_comparison\_of :birth\_date, less\_than\_or\_equal\_to: -\> { Date.today }_

[**Fix using helpers in content\_security\_policy and permissions\_policy**](https://github.com/rails/rails/pull/45115)
Helpers that are generated using _helper\_method_ were not possible to use in _content\_security\_policy_ and _permissions\_policy_, because the use of yield caused _self_ to be set incorrectly. But by using _instance\_exec_, this PR ensures the scoping is correct.

[**Add db\_runtime to Active Job instrumentation**](https://github.com/rails/rails/pull/40058)
This PR adds _db\_runtime_ to the notification payload of a _perform.active\_job_ event. _db\_runtime_ tracks the total time taken by database queries while performing a job, which helps in understanding how a job's time is spent.

[**More details to several HTTP Security Headers in guides**](https://github.com/rails/rails/pull/45120)
Some improvements to the security related HTTP headers in the guides.

[**Introduce config.log\_file\_size**](https://github.com/rails/rails/pull/44888)
No more huge log files in development! This config variable is set to 100Mb in development and test environments and Rails will rotate your log file when reaches the limit. In production the limit is unlimited by default.


Since last week, [39 people contributed to Rails](https://contributors.rubyonrails.org/contributors/in-time-window/20220513-20220521). As usual, there are too many changes to cover them all, but you can check out all of them [here](https://github.com/rails/rails/compare/main@%7B2022-05-13%7D...main@%7B2022-05-21%7D). Until next time!

