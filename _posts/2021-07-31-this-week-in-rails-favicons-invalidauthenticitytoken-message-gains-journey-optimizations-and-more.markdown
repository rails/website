---
layout: post
title: "Favicons, InvalidAuthenticityToken message gains, Journey optimizations and more!"
categories: news
author: zzak
published: true
date: 2021-07-31
---

Hello, [zzak](https://github.com/zzak) here! Congrats on making it through another month and another week of Rails development.

### [Add favicon to internal routes "/favicon.ico"](https://github.com/rails/rails/pull/42702)

They finally fixed that pesky `No route matches [GET] "/favicon.ico"` error on the default Rails welcome page.

### [Introduce Journey::Ast to avoid extra ast walks](https://github.com/rails/rails/pull/39935)

This PR started its journey almost exactly a year ago...!

### [Improve help for Rake tasks](https://github.com/rails/rails/pull/41442)

Rails help command now includes the Rake task description which is much more helpful. Give it a try: `bin/rails db:migrate -h`!

### [Help identifying why we have an InvalidAuthenticityToken exception](https://github.com/rails/rails/pull/41822)

Unverified CSRF requests now display a helpful error message in the `ActionController::InvalidAuthenticityToken` exception.

### ["Middleware#remove" is renamed "Middleware#delete!"](https://github.com/rails/rails/pull/42867)

Recently "Middleware#remove" was added to mirror the behavior of "Middleware#delete" but raise an exception if the middleware isn't found. This name makes more sense as "#delete!".

### [Add support for defining default values as option for ActiveSupport::Configurable accessors](https://github.com/rails/rails/pull/42030)

This PR adds the ability to specify a default value when using "config\_accessor".

### [Permit attachments in inbound email conductor mail params](https://github.com/rails/rails/pull/42395)

This PR fixes an issue in actionmailbox when testing inbound email with attachments.

[29 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210724-20210731) contributed to Rails since last time. All the changes can be checked [here.](https://github.com/rails/rails/compare/@%7B2021-07-24%7D...main@%7B2021-07-31%7D) Until next week!
