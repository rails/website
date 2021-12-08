---
layout: post
title: Rails 3.2.8.rc2 has been released!
categories: []
author: spastorino
published: true
---

Hi everyone,

Rails 3.2.8.rc2 has been released. If no regressions are found we will
release 3.2.8 final around Wednesday 8th.

## IMPORTANT

We are removing all the deprecation warnings that we introduced in 3.2.x.
We have decided to stop introducing API deprecations in all point releases going forward. From now on, it'll only happen in majors/minors.

## CHANGES since 3.2.8.rc1

*Action Mailer*

* No changes


*Action Pack*

*   html_escape should escape single quotes. *Santiago Pastorino* 


*Active Model*

* No changes


*Active Record*

*   Do not set RAILS_ENV to "development" when using `db:test:prepare` and related rake tasks.
    This was causing the truncation of the development database data when using RSpec.
    In RC2 was fixed again when using config.active_record.schema_format = :sql
    *Rafael Mendonça França*

*   Do not consider the numeric attribute as changed if the old value is zero and the new value is not a string. Fixes #7237. *Rafael Mendonça França*


*Active Resource*

* No changes


*Active Support*

*   Fix ActiveSupport integration with Mocha > 0.12.1. *Mike Gunderloy*


*Railties*

*   ERB scaffold generator use the `:data => { :confirm => "Text" }` syntax instead of `:confirm`. *Rafael Mendonça França*


## SHA-1

* 351b13c792517534b68df02f550cfc335c8d3f5f  actionmailer-3.2.8.rc2.gem
* 0b0f92bb3f2fad426f3b9c0849e5f5457c029586  actionpack-3.2.8.rc2.gem
* c19868c2f4fc20ebf20c1a27c89a65b80592b6e6  activemodel-3.2.8.rc2.gem
* 9d247e14feb6d453aded4ba9edc8bae1cf940891  activerecord-3.2.8.rc2.gem
* 7db76b428fdec2aeea190773d5daea139c7732ba  activeresource-3.2.8.rc2.gem
* b93d62722c854fde8acda511f53481c4f3ceeaf2  activesupport-3.2.8.rc2.gem
* 7fd2e2035469e89e17b3872d51968a5856d6ed8c  rails-3.2.8.rc2.gem
* bf685a73a55fd5ffa77c7c0160b2bec898fa15eb  railties-3.2.8.rc2.gem

You can find a list of changes between v3.2.8.rc1 and v3.2.8.rc2 [here](https://github.com/rails/rails/compare/v3.2.8.rc1...v3.2.8.rc2)
and an exhaustive list of changes since v3.2.7 [here](https://github.com/rails/rails/compare/v3.2.7...v3.2.8.rc2).

Thanks to everyone!
