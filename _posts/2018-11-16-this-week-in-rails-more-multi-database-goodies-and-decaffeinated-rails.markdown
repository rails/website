---
layout: post
title: "More multi database goodies and decaffeinated Rails"
categories: news
author: morgoth85
published: true
date: 2018-11-16
---

Hello fellow Rubyists. This is [Wojtek](https://twitter.com/morgoth85) bringing you the latest updates from Rails.

### [Note about CVE gems version bumps](https://github.com/rails/rails/pull/34392)

Usually it is enough to update vulnerable gem within the application without a need to force it in the Rails codebase.

### [Multi database support for schema cache dump & clear](https://github.com/rails/rails/pull/34181)

More goodies coming for multiple databases.  

### [Add if_not_exists option to create_table](https://github.com/rails/rails/pull/31382)

It is now possible to silently skip adding a table if it already exists during a migration.

### [Add support for unlogged PostgreSQL tables](https://github.com/rails/rails/pull/34221)

If you ever wanted to create unlogged tables, now you can.

### [Convert CoffeeScript to JavaScript](https://github.com/rails/rails/pull/34177)

So Rails is having fewer sips of coffee these days and of course never indulged in those dark blends of Java 😄.

[37 people](https://contributors.rubyonrails.org/contributors/in-time-window/20181101-20181116) contributed to Rails within latest two weeks. Check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2018-11-01%7D...@%7B2018-11-16%7D).  

Special wishes to all RubyConf attendees ❤️. Until next time.
