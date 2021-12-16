---
layout: post
title: "Rails 6.1 RC2 and some enhancements"
categories: news
author: morgoth85
published: true
date: 2020-12-04
---

Hi, [Wojtek](https://twitter.com/morgoth85) from this side with a small set of changes since the last week.

### [Rails 6.1 RC2 released](https://rubyonrails.org/2020/12/1/Rails-6-1-rc2-release)

The second release candidate for Rails 6.1 has been released and brings a more robust experience for those already trying this version.

### [Add option for "default_scope" to run on all queries ](https://github.com/rails/rails/pull/40720)

This change allows for applications to optionally run a _default\_scope_  
on _update_ and _delete_ queries in addition to current behavior on _get_ and _insert_ statements, by adding _all\_queries: true._

### [Add "id" and "field_id" methods to FormBuilder](https://github.com/rails/rails/pull/40127)

Ease generating consistent DOM ids in given form context.

### [New default for "local" option on "form_with"](https://github.com/rails/rails/pull/40708)

With Rails 6.1 version _form\_with_ will generate non-remote forms by default.

[17 people](https://contributors.rubyonrails.org/contributors/in-time-window/20201129-20201204) contributed to Rails since last time. Check out [the detailed list of all changes](https://github.com/rails/rails/compare/@%7B2020-11-29%7D...master@%7B2020-12-04%7D). Until next week!
