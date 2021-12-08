---
layout: post
title: "Remove default reliance on Sass and more!"
categories: news
author: gregmolnar
published: true
date: 2021-08-28
---

Hi, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest changes in Rails.

### [Remove default reliance on Sass and CSS generators](https://github.com/rails/rails/pull/43110)

Due to Saas has chosen to focus exclusively on dart-saas, Rails is decreasing its reliance on it. Besides that, this PR also removes the per model css file generation.

### [Avoid use of exceptions to detect invalid floats](https://github.com/rails/rails/pull/43106)

This PR Improves the performance of _ActiveSupport::NumberHelper_ and _ActionView::Helpers::NumberHelper_ formatters by avoiding the use of exceptions as flow control.

### [Make preload_link_tag work with images](https://github.com/rails/rails/pull/43088)

Prior to this change, _preload\_link\_tag_ with an image would generate a tag without an _as_ attribute. If the _as_ attribute doesn't get set, browsers tend to ignore the link tag, making the tag useless. This change fixes the issue.

### [Add ability to ignore tables in the schema cache](https://github.com/rails/rails/pull/43075)

In cases where an application uses pt-osc or lhm they may have temporary tables being used for migrations. Those tables shouldn't be included by the schema cache because it makes the cache bigger and after this change, on_e can set config.active\_record.schema\_cache\_ignored\_tables_ to an array of tables or regex's.

[22 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210821-20210828) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-08-21%7D...main@%7B2021-08-28%7D). Until next week!
