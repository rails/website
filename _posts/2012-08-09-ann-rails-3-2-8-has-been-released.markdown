---
layout: post
title: Rails 3.2.8 has been released!
categories: []
author: spastorino
published: true
---

Good news everyone! Rails version 3.2.8 has been released.

## IMPORTANT

This version contains three important security fixes, please upgrade immediately.

  * [CVE-2012-3463 Ruby on Rails Potential XSS Vulnerability in select_tag prompt](https://groups.google.com/d/msg/rubyonrails-security/fV3QUToSMSw/eHBSFOUYHpYJ)
  * [CVE-2012-3464 Potential XSS Vulnerability in Ruby on Rails](https://groups.google.com/d/msg/rubyonrails-security/kKGNeMrnmiY/r2yM7xy-G48J)
  * [CVE-2012-3465 XSS Vulnerability in strip_tags](https://groups.google.com/d/msg/rubyonrails-security/FgVEtBajcTY/tYLS1JJTu38J)

One of security fixes impacts all users and is related to HTML escaping code. The other two fixes impacts people using select_tag's prompt option and strip_tags helper from ActionPack.

We are also removing all the deprecation warnings that we introduced in 3.2.x.
We have decided to stop introducing API deprecations in all point releases going forward. From now on, it'll only happen in majors/minors.

## CHANGES since 3.2.7

*Action Mailer*

* No changes


*Action Pack*

*   html_escape should escape single quotes. *Santiago Pastorino* 

*   Reverted the deprecation of `:confirm`. *Rafael Mendonça França*

*   Reverted the deprecation of `:disable_with`. *Rafael Mendonça França*

*   Reverted the deprecation of `:mouseover` option to `image_tag`. *Rafael Mendonça França*

*   Reverted the deprecation of `button_to_function` and `link_to_function` helpers. *Rafael Mendonça França*


*Active Model*

* No changes


*Active Record*

*   Do not set RAILS_ENV to "development" when using `db:test:prepare` and related rake tasks.
    This was causing the truncation of the development database data when using RSpec.
    In RC2 was fixed again when using config.active_record.schema_format = :sql
    *Rafael Mendonça França*

*   Do not consider the numeric attribute as changed if the old value is zero and the new value is not a string. Fixes #7237. *Rafael Mendonça França*

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

*   Fix ActiveSupport integration with Mocha > 0.12.1. *Mike Gunderloy*

*   Reverted the deprecation of ActiveSupport::JSON::Variable. *Rafael Mendonça França*


*Railties*

*   ERB scaffold generator use the `:data => { :confirm => "Text" }` syntax instead of `:confirm`. *Rafael Mendonça França*

## SHA-1

* 20525face84f3cdc8b0fc039e0f75ec4963e3677  actionmailer-3.2.8.gem
* ccc63cc2fcb3131b92d45cf5834aa629857d7258  actionpack-3.2.8.gem
* df7fb9febe248201fd1ad741a2044324f4c90cc9  activemodel-3.2.8.gem
* 96e876f625b98915d2b1994c06ea057bf7dd23b8  activerecord-3.2.8.gem
* 195e1e4653e6e06f469ea20e181727ef9d940ee7  activeresource-3.2.8.gem
* e5136f556b62343425cc147a8990bd043430354d  activesupport-3.2.8.gem
* 35581ffc256d73d217537170b0e116cf4545752e  rails-3.2.8.gem
* e44accc5d057866087856a521398250fe082b70b  railties-3.2.8.gem

You can find an exhaustive list of changes on
[github](https://github.com/rails/rails/compare/v3.2.7...v3.2.8).

Thanks to everyone!
