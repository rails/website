---
layout: post
title: "Support preloads on instance dependent associations and more!"
categories: news
author: gregmolnar
published: true
date: 2021-06-27
---

Hi there, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest changes in Rails!

### [Time#change should pass the zone property through if it's set](https://github.com/rails/rails/pull/42583)

This PR fixes an issue with changing date objects when the zone is set.

### [Fix number_to_currency to avoid negative format when displaying zero](https://github.com/rails/rails/pull/42581)

This PR fixes number\_to\_currency to avoid negative format when displaying zero. Before this change, _number\_to\_currency(-0.00456789, precision: 2)&nbsp;_returned _$-0.00_

### [Support preloads on instance dependent associations](https://github.com/rails/rails/pull/42553)

From now on instance dependent associations are supporting preloading. To get more details about this change, read the PR descriptions, it explains it really well.

[37 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210619-20210627) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-06-20%7D...main@%7B2021-06-27%7D). Until next week!
