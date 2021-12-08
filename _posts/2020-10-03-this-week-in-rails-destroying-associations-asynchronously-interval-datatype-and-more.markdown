---
layout: post
title: "Destroying associations asynchronously, interval datatype and more"
categories: news
author: morgoth85
published: true
date: 2020-10-03
---

Hi, [Wojtek](https://twitter.com/morgoth85) from this side. We are coming back with newsletter! Here are the changes in Ruby on Rails codebase from the last week.

### [Destroy associations via background job](https://github.com/rails/rails/pull/40157)

Destroying associated records can now be done in background job by setting _dependent: :destroy\_async_ option.

### [Support for PostgreSQL interval datatype](https://github.com/rails/rails/commit/e5a5cc483573f41fa396779057bd83ce389640d8)

Add support for PostgreSQL _interval_ data type with conversion to _ActiveSupport::Duration_ when loading records from database and serialization to ISO 8601 formatted duration string on save.

### [Per environment Active Storage config files](https://github.com/rails/rails/pull/40294)

Active Storage configuration files for specific environment like _config/storage/production.yml_ will take precedence over _config/storage.yml._  
It should ease complex configuration scenarios which may arise when [configuring services per attachment](https://github.com/rails/rails/pull/34935).

### [Base class for Active Storage, Action Text and Action Mailbox](https://github.com/rails/rails/pull/40274)

Permit applications to hack in custom databases for Active Storage, Action Text and Action Mailbox models by extracting base Active Record class.

[17 people](https://contributors.rubyonrails.org/contributors/in-time-window/20200925-20201002) contributed to Rails since the last week. Check out [the detailed list of all changes](https://github.com/rails/rails/compare/@%7B2020-09-25%7D...master@%7B2020-10-02%7D). Until next week!
