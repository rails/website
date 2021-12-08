---
layout: post
title: "Strict loading in Active Record and more"
categories: news
author: morgoth85
published: true
date: 2020-02-21
---

Hi, [Wojtek](https://twitter.com/morgoth85) from this side with latest changes in Ruby on Rails codebase.

### [Add strict_loading mode to Active Record](https://github.com/rails/rails/pull/37400)

To prevent lazy loading of associations, _strict\_loading_ will cascade down from the parent record to all the associations to help you catch any places where you may want to _preload_ instead of lazy loading.

### [Serialize schema cache dump with Marshal](https://github.com/rails/rails/pull/38432)

In addition to YAML it is now possible to use Marshal as schema cache dump serializer.

### [Improve assert_changes output](https://github.com/rails/rails/commit/074265a6c19b8f629e3211405e940b069ccd5667)

Provides more specific diffs when comparing complex objects. Co-authored by few contributors.

[36 people](https://contributors.rubyonrails.org/contributors/in-time-window/20200210-20200222) contributed to Rails since last time. Check out [the detailed list of all changes](https://github.com/rails/rails/compare/master@%7B2020-02-10%7D...@%7B2020-02-22%7D). Until next time!
