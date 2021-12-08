---
layout: post
title: "☀️🏖🏄‍♀️ and schema cache deduplication plus getutc begone"
categories: news
author: kaspth
published: true
date: 2019-06-30
---

Ahoy all! 🚢 Step aboard as we cruise through the Rails news this week. Summer has really hit its simmering point for many a Rails contributor: we're seeing fewer contributions. Take heed! Your trusty captain [Kasper](https://twitter.com/kaspth) is here to reassure you that nothing has gone wrong on this ship and that it's merely summer time seasoning. But also, the engine is on fire? Oh well, it'll probably burn out soon enough and another wrong has been righted! This is fine. 🔥

### [Schema Cache: deduplicate structures](https://github.com/rails/rails/pull/35891)

This week has primarily been a strong one for Active Record's schema cache with no less than 3 improvements. It's a little known feature but it avoids querying your database for its schema every time a new server starts up (handy if you're booting up many app servers). You invoke it with…

### [Schema Cache: stop serializing and parsing columns_hash](https://github.com/rails/rails/pull/36518)

_rails schema:cache:dump_, check its documentation for more. These 3 changes are around deduplication the memory that the schema cache holds in a running app by doing deduplication. Basically running a _uniq_ on objects and reusing already initialized ones. This technique is uncommon, but effective here, because so many tables share the same columns, e.g. _id_, _created\_at_, _updated\_at_ etc. So the first change…

### [Schema Cache: deduplicate when using init_with](https://github.com/rails/rails/pull/36529)

…ran deduplication for most things in the schema cache. The second change skipped storing the _columns\_hash_ in the YML, because it could be derived with _columns.index\_by(&:name)_. Thus saving storing every column object again, but just nested under the name. Neat! Rounding out the features: the deduplication should also be run when parsing YML and the parser invoking _init\_with_. Remedied that, phew! I suggest you do check all three changes out because they show to really re-sculpt a feature over multiple PRs.

### [Active Record: avoid redundant time.getutc when serializing](https://github.com/rails/rails/pull/36508)

Lastly, rounding out the news: some more speed ups! Currently serializing a _Time_ attribute will run _time.getutc_ in multiple places regardless of whether the time is already UTC, which is fairly expensive. This change checks if the time is already UTC and won't bother with any needless conversion. ⏱

[21 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190616-20190701) contributed to Rails in the last two weeks. You can see the [full list of changes here](https://github.com/rails/rails/compare/master@%7B2019-06-16%7D...@%7B2019-07-01%7D).  

Until next time!
