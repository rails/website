---
layout: post
title: "Perform destroy_all in batches and a lot more features"
categories: news
author: morgoth85
published: true
date: 2021-07-02
---

Hello. News about latest changes in Rails delivered to you by [Wojtek](https://twitter.com/morgoth85).

### [Active Record destroy_all performs in batches](https://github.com/rails/rails/pull/40445)

By default it will load records in batches of 100 and allow to specify the custom batch size.

### [Add support for ordinal date values](https://github.com/rails/rails/pull/41779)

A valid ordinal value will be converted to an instance of _TimeWithZone._  
In example "21087" value will be parsed to 28-03-2021 date.

### [Add existence check to foregin key migrations](https://github.com/rails/rails/pull/42616)

It is now possible to use _if\_exists / if\_not\_exist_ on _remove\_foreign\_key / add\_foreign\_key_ in database migrations.

### [Add possibility to configure Active Storage for Action Mailbox](https://github.com/rails/rails/pull/42634)

It is now possible to configure Active Storage service for storing email raw source via _config.action\_mailbox.storage\_service._

### [Support strict_loading_by_default in Active Storage](https://github.com/rails/rails/pull/42535)

Before the patch, Active Storage representation objects did not play nice with strict loading configuration.

### [Replace uglifier with terser](https://github.com/rails/rails/pull/42622)

Terser is more up to date with modern javascript features, and the uglifier gem repository recommends using it for minifying ES6+ code.

[32 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210627-20210702) contributed to Rails since last time. All the changes can be checked [here.](https://github.com/rails/rails/compare/@%7B2021-06-27%7D...main@%7B2021-07-02%7D) Until next week!
