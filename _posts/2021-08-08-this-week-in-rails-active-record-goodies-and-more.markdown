---
layout: post
title: "Active Record goodies and more!"
categories: news
author: gregmolnar
published: true
date: 2021-08-08
---

Hi there, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest new about the Rails framework.

### [Allow entirely opting out of deprecation warnings](https://github.com/rails/rails/pull/42913)

Previously if you set _app.config.active\_support.deprecation = :silence_, some work would still be done on each call to _ActiveSupport::Deprecation.warn_, which had computing cost, but from now on, you can disable it completely.

### [Output Action Cable Javascript without transpiling and as ESM](https://github.com/rails/rails/pull/42856)

This PR updates all the Rails Javascript to target ES2017 and ESM, as far as is possible. This makes it easier to use these outputs directly in browsers without bundling, yet still use ESM module.

### [Create database via UI when ActiveRecord::NoDatabaseError](https://github.com/rails/rails/pull/39723)

This PR adds the possibility to create the database via the UI when database has not been created in development mode.

### [Add ActiveRecord::QueryMethods#in_order_of](https://github.com/rails/rails/pull/42061)

_#in\_order\_of_ allows you to specify an explicit order that you'd like records
returned in based on a SQL expression, for instance:
_Post.in\_order\_of(:id, [3, 5, 1])_

### [Add ActiveRecord::Relation#structurally_compatible?](https://github.com/rails/rails/pull/41841)

_#structurally\_compatible?_ can be used to check if the relation that you are about to use for _#or_ or _#and_ is structurally compatible with the receiver.

[20 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210731-20210807) contributed to Rails since last time. All the changes can be checked [here.](https://github.com/rails/rails/compare/@%7B2021-07-24%7D...main@%7B2021-07-31%7D) Until next week!
