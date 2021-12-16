---
layout: post
title: 'Rails 6.1 RC2: Horizontal Sharding, Multi-DB Improvements, Strict Loading, Destroy Associations in Background, Error Objects, and more!'
categories: releases
author: rafaelfranca
published: true
date: 2020-12-01 17:30:00 -05:00
---
The second release candidate for Rails 6.1 has been released and brings a more robust
experience for those already trying this version. We've been hard
at work tweaking and adjusting the nobs to have so using this version is a smooth ride
to everyone. The final release is scheduled to happen next week.

It's amazing how Rails has grown over the years and while we have some improvements to make to the
[onboarding process](https://rubyonrails.org/2020/5/7/A-May-of-WTFs), Rails has never been better. The features
in this release focus on adding the functionality you need to keep your application up and running for years to come.

Let's look at some of the new functionality:

## Multi-DB Improvements

### Per-database Connection Switching

Rails 6.1 provides you with the ability to [switch connections per-database](https://github.com/rails/rails/pull/40370). In 6.0 if you switched to the `reading` role then all database connections also switched to the reading role. Now in 6.1 if you set `legacy_connection_handling` to `false` in your configuration, Rails will allow you to switch connections for a single database by calling `connected_to` on the corresponding abstract class.

### Horizontal Sharding

Rails 6.0 provided the ability to functionally partition (multiple partitions, different schemas) your database but wasn't able to support horizontal sharding (same schema, multiple partitions). Rails wasn't able to support horizontal sharding because models in Active Record could only have one connection per-role per-class. This is now fixed and [horizontal sharding](https://github.com/rails/rails/pull/38531) with Rails is available.

### Additional Improvements

In addition to adding horizontal sharding support we added tons of new functionality and improved a lot of internals for multiple databases. [Kyle Thompson](https://github.com/kylekthompson) added support for [database namespaced tasks](https://github.com/rails/rails/pull/38449) like `db:schema:dump:namespace`, `db:schema:load:namespace`, `db:structure:dump:namespace`, and `db:structure:load:namespace`. [Jean Boussier](https://github.com/casperisfine) from Shopify improved [connection pool management](https://github.com/rails/rails/pull/37296).

## Strict Loading Associations

In addition to the many database and connection management improvements, [Aaron Patterson](https://github.com/tenderlove) and [Eileen M. Uchitelle](https://github.com/eileencodes) added support for [strict loading associations](https://github.com/rails/rails/pull/37400). With this feature you can ensure that all your associations are loaded eagerly and stop N+1's before they happen. [Kevin Deisz](https://github.com/kddeisz) added additional support to [association declarations](https://github.com/rails/rails/pull/38541) and [bogdanvlviv](https://github.com/bogdanvlviv) added support to turn [strict loading on by default](https://github.com/rails/rails/pull/39491).

## Delegated Types

Rails 6.1 adds "Delegated Types" as an alternative to single-table inheritance. This is helpful for representing class hierarchies allowing the superclass to be a concrete class that is represented by its own table. Each subclass has its own table for additional attributes. Check out the [pull request](https://github.com/rails/rails/pull/39341) written by [DHH](https://github.com/dhh).

## Destroy Associations Async

Destroy associations async adds the ability for applications to `destroy` associations in a background job. This can help you avoid timeouts and other performance issues in your application when destroying data. The [implementation](https://github.com/rails/rails/pull/40157) was a group effort - the PR was started by [George Claghorn](https://github.com/georgeclaghorn) from Basecamp, further support added by [Cory Gwin](https://github.com/gwincr11) of GitHub and finalized by [Rafael França](https://github.com/rafaelfranca) and [Adrianna Chang](https://github.com/adrianna-chang-shopify) from Shopify.

## Error Objects

Active Model's errors are now objects with an interface that allows your application to more easily handle and interact with errors thrown by models. [The feature](https://github.com/rails/rails/pull/32313) was implemented by [lulalala](https://github.com/lulalala) and includes a query interface, enables more precise testing, and access to error details.

## Active Storage Improvements

Active Storage got a nice update in Rails 6.1! You can now configure attachments for service you want to store them in. The [feature](https://github.com/rails/rails/pull/34935) was implemented by [Dmitry Tsepelev](https://github.com/DmitryTsepelev).

Additionally, Rails 6.1 adds support to Active Storage for [permanent URLs for blobs](https://github.com/rails/rails/pull/36729). Implemented by [Peter Zhu](https://github.com/peterzhu2118) from Shopify, this feature allows configuring your attachments to use a private or public URL and ensures that public URLs will always use a permanent URL.

## Disallowed Deprecation Support

If you like to run your application deprecation-warning free then this feature is for you. The feature allows applications to [optionally raise an error](https://github.com/rails/rails/pull/37940) if a deprecation warning is thrown. This is useful for making sure developers don't reintroduce deprecation warnings that have already been fixed. The feature was implemented by [Cliff Pruitt](https://github.com/cpruitt) of Test Double!

## Performance Improvements and Bug Fixes!

A release isn't just about the awesome features you get. It's also about fixing bugs, improving performance, and making Rails more stable for everyone. This release includes an improvement that [avoids making a query if `where` passes an empty array](https://github.com/rails/rails/pull/37266) reported by [Molly Struve](https://github.com/mstruve) and the fix implemented by [John Hawthorn](https://github.com/jhawthorn). [Eileen M. Uchitelle](https://github.com/eileencodes) and [Aaron Patterson](https://github.com/tenderlove) also implemented a [performance improvement](https://github.com/rails/rails/pull/39009) that speeds up `where` queries when we know all the values are an integer.

## The `classic` Autoloader is Deprecated

The `classic` autoloader has served us well since the first Rails release, but there's a new kid on the block and it is going to start its deprecation cycle.

New Rails projects are strongly discouraged from using the `classic` autoloader, and we recommend that existing projects running on `classic` switch to `zeitwerk` mode when upgrading. Please check the [_Upgrading Ruby on Rails_](https://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html) guide for tips.

## And more!

There are so many great changes in Rails 6.1. [686](https://contributors.rubyonrails.org/edge/contributors) people made contributions to Rails. Check out the [CHANGELOGS](https://github.com/rails/rails/tree/v6.1.0.rc2) for more details on bug fixes, performance improvements, and other features.

Thank you to everyone who reported a bug, sent a pull request, and helped improve Rails. Rails is better because of your hard work!

We hope you test out Rails 6.1 and love it as much as we do. Please report any bugs to the [Rails issue tracker](https://github.com/rails/rails/issues).
