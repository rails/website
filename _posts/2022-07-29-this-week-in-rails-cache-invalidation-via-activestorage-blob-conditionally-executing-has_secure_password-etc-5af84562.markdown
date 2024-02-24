---
layout: post
title: "Cache invalidation via ActiveStorage::Blob, Conditionally executing has_secure_password, etc"
categories: news
author: Emmanuel Hayford
published: true
date: 2022-07-29
---

Maadwo! [Emmanuel](https://twitter.com/siaw23) with some updates on activities in Rails over the last week.

[Allow passing Hash on secure password validations](https://github.com/rails/rails/pull/45487)
You can now pass an option hash to _has\_secure\_password._ If the option evaluates to _true_, then _has\_secure\_password_ executes along with validations, otherwise it doesn't.&nbsp;

[Touch model records after ActiveStorage::Blob is analyzed
](https://github.com/rails/rails/pull/45579)Models directly associated to an ActiveStorage::Blob will now be _touched_ if the blob in question is re-analysed, invalidating a model's cache and fixing a race condition where a record can be requested and have a cache entry built.

[Generate _master.key_ even when _require_master_key_](https://github.com/rails/rails/pull/45672)
Previously, if _config.require\_master\_key_ was set to _true_ in _config/application.rb_, the _credentials:edit_ command couldn't automatically generate a master key file, this PR fixes that. The same fix also applies to _encrypted:edit_.

[Return _Promise\<void\>_ from _Turbo.visit_](https://github.com/hotwired/turbo/pull/650)
When consumer applications navigate through the _Turbo.visit_, a _Promise\<void\>_ is now returned that will resolve when the visit is complete. If a visit fails or is cancelled, the _Promise_ will be rejected.

That's it for this week. Until next time!

 [13 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220723-20220729) contributed to Rails since the last time.&nbsp;
