---
layout: post
title: "Better instrumentation, enhanced Postgres helpers and more"
categories: news
author: kirshatrov
published: true
date: 2018-07-29
---

Hello from London! The heatwave is finally over and we can get back to 🌧. This is [Kir](https://twitter.com/kirshatrov), bringing you the latest Rails updates.

### [Add cpu time, idle time, and allocations features to log subscriber events](https://github.com/rails/rails/pull/33449)

The change makes it much easier to instrument CPU time and object allocations with _ActiveSupport::Notifications_ events.

### [Prefer rails command over bin/rails](https://github.com/rails/rails/pull/33229)

In some files we recommended using _rails_, in others _bin/rails_. The inconsistency is now fixed [🎉](https://emojipedia.org/party-popper)  

Why prefer _rails_ as the recommended executable? It does all the heavy lifting of dispatching to the app appropriate Rails version, so that's why users don't need to target _bin/rails_ manually.

### [PostgreSQL 10 new relkind for partitioned tables](https://github.com/rails/rails/pull/31336)

The PR brings support for Postgres' partitioned tables to _create\_table_ helper.

### [Add strict argument checking to Active Record callbacks](https://github.com/rails/rails/pull/30919)

Callbacks like _before\_save_ will now raise when they receive unsupported arguments.

[26 people](https://contributors.rubyonrails.org/contributors/in-time-window/20180721-20180729) contributed to Rails this week. You can see all the changes [here](https://github.com/rails/rails/compare/master@%7B2018-07-21%7D...@%7B2018-07-29%7D). There might be some [open issues](https://github.com/rails/rails/issues) you can try tackling?  

Stay tuned!
