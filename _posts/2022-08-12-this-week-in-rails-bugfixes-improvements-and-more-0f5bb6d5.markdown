---
layout: post
title: "Bugfixes, improvements and more!"
categories: news
author: gregmolnar
published: true
date: 2022-08-12
---

Hola, this is [Greg](https://twitter.com/gregmolnar) bringing you the latest news from the Rails world!

 [Improve failure safety for RedisCacheStore#delete\_multi](https://github.com/rails/rails/pull/45762)
This PR fixes the issue when Redis is down and _Rails.cache.delete\_multi_ is called. With this change this will be gracefully handled rather than raising an exception.

[Ensure drop\_enum is always reversible](https://github.com/rails/rails/pull/45774)
The recently introduced _drop\_enum_ method to drop PostgreSQL Enumerated Types was not reversible with the _if\_exists: true_ option, because _create\_enum_ could not accept options. Not an issue anymore, because this PR fixes it.

[Fix EtagWithFlash when there is no Flash middleware available](https://github.com/rails/rails/pull/45782)
In API only Rails apps, the _flash middleware_ is not available which can lead to errors at _Etag_ generation. This change adds a _respond\_to?(:flash)_ guard to prevent the errors.

[Improvements to assert\_enqueued\_email\_with](https://github.com/rails/rails/pull/45752)
This PR adds the _params_ named argument to _assert\_enqueued\_email\_with_ to explicitly provide the parameters to match against parameterized mailers:


    assert\_enqueued\_email\_with UserMailer, :deliver\_invoice, params: { user: @user }, args: [invoice]


[Support multiple preview paths for mailers](https://github.com/rails/rails/pull/31595)
The changes in this pull request make it possible to preview emails from engines.

[Log redirects from router similarly to controller redirects](https://github.com/rails/rails/pull/43755)
These changes makes the router-based redirects emit the same information to the logs as the controller-based redirects do.

[25 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220805-20220812) contributed to Rails last week, if you want to see all the changes, you can do so [here](https://github.com/rails/rails/compare/main@%7B2022-08-05%7D...main@%7B2022-08-12%7D).

Until next time!
