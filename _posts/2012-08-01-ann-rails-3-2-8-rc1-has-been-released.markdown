---
layout: post
title: Rails 3.2.8.rc1 has been released!
categories:
- releases
author: spastorino
published: true
---

Hi everyone,

Rails 3.2.8.rc1 has been released. If no regressions are found we will
release 3.2.8 final on Friday.

## IMPORTANT

We are removing all the deprecation warnings that we introduced in 3.2.x.
We have decided to stop introducing API deprecations in all point releases going forward. From now on, it'll only happen in majors/minors.

## CHANGES since 3.2.7

*Action Mailer*

* No changes


*Action Pack*

*   Reverted the deprecation of `:confirm`. *Rafael Mendonça França*

*   Reverted the deprecation of `:disable_with`. *Rafael Mendonça França*

*   Reverted the deprecation of `:mouseover` option to `image_tag`. *Rafael Mendonça França*

*   Reverted the deprecation of `button_to_function` and `link_to_function` helpers. *Rafael Mendonça França*


*Active Model*

* No changes


*Active Record*

*   Removes the deprecation of `update_attribute`. *fxn*

*   Reverted the deprecation of `composed_of`. *Rafael Mendonça França*

*   Reverted the deprecation of `*_sql` association options. They will
    be deprecated in 4.0 instead. *Jon Leighton*

*   Do not eager load AR session store. ActiveRecord::SessionStore depends on the abstract store
    in Action Pack. Eager loading this class would break client code that eager loads Active Record
    standalone.
    Fixes #7160

    *Xavier Noria*

*   Do not set RAILS_ENV to "development" when using `db:test:prepare` and related rake tasks.
    This was causing the truncation of the development database data when using RSpec.
    Fixes #7175.

    *Rafael Mendonça França*


*Active Resource*

* No changes


*Active Support*

*   Reverted the deprecation of ActiveSupport::JSON::Variable. *Rafael Mendonça França*


*Railties*

* No changes


## SHA-1

* 2e12c71925f8f7f5f05e3225f80e9359db8b0401 actionmailer-3.2.8.rc1.gem
* d6947496fb560393d7eeb18fbb77e7ee2dff2a37 actionpack-3.2.8.rc1.gem
* 4be43d52aa3af70f154101b605ac80c45f0b68ff activemodel-3.2.8.rc1.gem
* 84bc989af7f1bd2e9320fa39d80ca783e3499e94 activerecord-3.2.8.rc1.gem
* 0ba8e537711adabd81fec69f4762a32c5ceb381c activeresource-3.2.8.rc1.gem
* 74c2445d8d2541e04e10a969d2ce14419ee3bb9d activesupport-3.2.8.rc1.gem
* 470bc8d4402b44e9f5f82f0610d31e6e6945b897 rails-3.2.8.rc1.gem
* b615346580471aa6dcf338826824f78d0aec8512 railties-3.2.8.rc1.gem

You can find an exhaustive list of changes on
[github](https://github.com/rails/rails/compare/v3.2.7...v3.2.8.rc1).

Thanks to everyone!
