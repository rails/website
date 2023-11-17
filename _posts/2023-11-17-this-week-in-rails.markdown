---
layout: post
title: "Action Mailer bug report template, Active Storage fixes and more!"
categories: news
author: Greg Molnar
published: true
date: 2023-11-17
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Fix _word_wrap_ with empty string](https://github.com/rails/rails/pull/50069)  
This pull request fixes `word_wrap` to return an empty string instead of `nil` when given an empty string.

[Process preview variant when processing preview](https://github.com/rails/rails/pull/50044)  
This pull request updates `ActiveStorage::Preview#processed` to generate both the full-sized preview image and the requested variant. For example, `attached_pdf.preview(:thumb).processed` will now immediately generate the full-sized preview image and the `:thumb` variant of it. Previously, the `:thumb` variant would not be generated until a further call to e.g. `processed.url`.


[Fix _TransformJob_ not accepting previewables](https://github.com/rails/rails/pull/50006)  
The `ActiveStorage::TransformJob` is being used when an attachment has predefined variants with the preprocessed option. When you upload a file which is not an image but a previewable file like a pdf-document it failed with `ActiveStorage::InvariableError`. This pull request fixes that by determining if a blob is capable of being previewed. If so, a preview will be generated.

[Add _Action Mailer_ bug report template](https://github.com/rails/rails/pull/50004)  
This pull request introduces Action Mailer bug report templates for contributors to reproduce issues with failing `ActionMailer::TestCase` instances.

[Make return value of _Cache::Store#write_ consistent](https://github.com/rails/rails/pull/49873)  

The return value of `Cache::Store#write` was not specified before, and varied between backends. This pull request makes it consistent:

- **true** indicates a successful write
- **nil** indicates an error talking to the cache backend
- **false** indicates a write that failed for another reason

This helps to distinguish the case where the key already exists from the case where there was a memcached (or Redis) error.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-11-10%7D...main@%7B2023-11-17%7D)._  
_We had [25 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231110-20231117) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
