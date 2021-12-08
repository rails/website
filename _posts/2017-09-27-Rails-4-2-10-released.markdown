---
layout: post
title: 'Rails 4.2.10 released'
categories: releases
author: eileencodes
published: true
date: 2017-09-27 10:33:00 -04:00
---

Hi everyone,

I am happy to announce that Rails 4.2.10 final has been released!

As noted in the rc1 post, Rails 4.2 is no longer supported except for severe security patches, but the last release introduced a couple regressions that warranted a release. Unless more regressions are found this will likely be the last bug fix release for Rails 4.2. :champagne:

## CHANGES since 4.2.9

The following gems had changes since 4.2.9. Changes are listed below, or you can read the CHANGELOG's on GitHub:

* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.10/actionpack/CHANGELOG.md)

> Fix regression in behavior of `normalize_path`.

> In Rails 5 there was a change to ensure the encoding of the original string
in a path was maintained. This was incorrectly backported to Rails 4.2 which
caused a regression.

* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.10/activerecord/CHANGELOG.md)

> `Relation#joins` is no longer affected by the target model's
`current_scope`, with the exception of `unscoped`. Fixes #29338.

The remaining gems (Action Mailer, Action View, Active Job, Active Model, Active Support, and Railties) had no changes.

*Full list of changes*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.9...v4.2.10).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 4.2.10:

```
$ shasum -a 256 *-4.2.10.gem
a93cedc87c05e4360dee32777872a9b851295e96d8a32b96ebc13e7c95967ec7  actionmailer-4.2.10.gem
fd6625bcb84dbfb48d7e7f6ab7d2b88ede925a455db02fbaec5047d57a7eca50  actionpack-4.2.10.gem
1bae4a0385ba7384ed2ae4eddff80076f0c6b21cfc9d60cf0767723feb153dcb  actionview-4.2.10.gem
e80776a73ba5cc32fefb372f11db289153b954c91db378ad689ad1896f515a82  activejob-4.2.10.gem
3b513adc4f7483da117d25ac6505cc46794b4eb457b28597014975a97a929b30  activemodel-4.2.10.gem
3218dbfa6f46df8e820577d56a21a3c9b9bb3f32410803a4357200b756594c5a  activerecord-4.2.10.gem
275b14e515eb8c924bafa734417ec053a57f177ae9d3369f753d6f4437922268  activesupport-4.2.10.gem
141067e1dd4ec59d7a49e54936b68d8e44d8616515625dcf0387405a276d6b97  rails-4.2.10.gem
3709315c522a2729bb7dcf97c05acc2d47b61521cac450ee03143321b1abde6a  railties-4.2.10.gem
```

As always, huge thanks to the many contributors who helped with this release.
