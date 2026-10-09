---
layout: post
title: "Better ACL S3 control and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-10-09
---

Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore this week's changes in the Rails codebase.

[Stop setting the public-read ACL on S3 uploads for services configured with public: true](https://github.com/rails/rails/pull/58781)  
Bucket owner enforced is now both the default and the recommended S3 object ownership setting, and rejects any request that specifies an ACL. Uploading through a *public: true* service to such a bucket previously failed outright because Active Storage always attached a *public-read* ACL, with no way to opt out.
Setting this to *false* skips the ACL; grant public read access through a bucket policy instead. Buckets that still use ACLs can restore the previous behavior for a given service by setting the *acl* option explicitly in its *upload* configuration.

[Add maintenance_database option to the PostgreSQL adapter](https://github.com/rails/rails/pull/58923)  
Database tasks connect to the *postgres* database by default. Some managed PostgreSQL services, such as DigitalOcean, do not provide a *postgres* database, so these tasks fail there. *maintenance_database* sets the database to connect to instead, like the *--maintenance-db*.

[Forward other options from has_one_attached and has_many_attached](https://github.com/rails/rails/pull/58860)  
It is now possible to write:
```ruby
class User < ApplicationRecord
  has_one_attached :avatar, deprecated: true
end
```

[Freeze events emitted by ActiveSupport::EventReporter](https://github.com/rails/rails/pull/58913)  
Subscribers can no longer change the event seen by later subscribers. Modifying the event in place now raises *FrozenError*, so *dup* it first.

[Fix rails.deprecation structured events not being emitted](https://github.com/rails/rails/pull/58992)  
*Rails::StructuredEventSubscriber* was never required by the framework, so with *config.active_support.deprecation = :notify* no *rails.deprecation* structured event was ever emitted to *Rails.event*. 

[Fix 5.1 version change_column to honor table_name_prefix](https://github.com/rails/rails/pull/58846)  
Migrations declaring version 5.1 or earlier now honor *table_name_prefix* and *table_name_suffix*.

[Honor an explicit type on SQLite references in 6.0 migrations](https://github.com/rails/rails/pull/58845)  
References without a *type:* are unchanged, ie the adapter still makes them integer.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-10-02%7D...main@%7B2026-10-09%7D)._  
_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20261002-20261009) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
