---
layout: post
title: "Hello 2021: Sole record, Same form multiple verbs, Validator with range, Rich text control"
categories: news
author: andyatkinson
published: true
date: 2021-01-11
---

Hi there. [Andy](https://andyatkinson.com) here, with the first newsletter of 2021, highlighting some updates to Ruby on Rails over the last few weeks. Let's jump right in!

### [Find and assert the presence of exactly one record](https://github.com/rails/rails/pull/40768)

Add _FinderMethods#sole_ and _#find\_sole\_by_ to find and assert the presence of exactly one record.

### [Submit the same form with different HTTP methods](https://github.com/rails/rails/pull/41045)

This change provides the ability to post the same form with different HTTP methods. For example PUT and a DELETE requests can be made from the same form.

### [Validate numericality with a Range](https://github.com/rails/rails/pull/41022)

A Ruby range can now be provided as part of a numericality validator.

### [Improve Action Text extensibility](https://github.com/rails/rails/pull/40308)

Allow the HTML surrounding rich text to be customized while retaining private control over how the rich text itself is rendered.

### [Consistently render button_to](https://github.com/rails/rails/pull/40747)

Change Action View helpers to always render a _\<button\>_ element.

### [Add stats to Redis Cache Store](https://github.com/rails/rails/pull/40929)

Add a _RedisCacheStore#stats_ method that is similar to _MemCacheStore#stats_.

### [Add option to disable the Link header](https://github.com/rails/rails/pull/40882)

The option _config.action\_view.preload\_links\_header_ was added to allow disabling of the Link header when using _stylesheet\_link\_tag_ and _javascript\_include\_tag_.

### [Fix: Respect getter overwrites in the model](https://github.com/rails/rails/pull/40782)

_ActiveRecord::AttributeMethods::Query_ will now respect the getter overrides defined in the model.

[45 people](https://contributors.rubyonrails.org/contributors/in-time-window/20201219-20210110) contributed to Rails over the last several weeks. Check out the [open issues](https://github.com/rails/rails/issues) to get involved and help out. Until next week!
