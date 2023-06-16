---
layout: post
title: "This Week in Rails - June 16, 2023"
categories: news
author: zzak
published: true
date: 2023-06-16
---


Hi, it's [zzak](https://github.com/zzak). We're officially half-way through June, and we've got a shorter edition this week but let's hop in.

[Enable force_ssl=true in production by default](https://github.com/rails/rails/pull/47852)  
This PR affects newly generated apps to make SSL enforcement the default behavior in production mode, ensuring all access to the application occurs over SSL, with Strict-Transport-Security and use secure cookies.  

[Adding PG enum drop, rename, add value, rename value](https://github.com/rails/rails/pull/44898)  
Initially opened over a year ago, this PR has finally been merged and adds `rename_enum`, `rename_enum_value`, and `add_enum_value` support to the PostgreSQL adapter.  

[Fix setting inverses for composite primary key associations](https://github.com/rails/rails/pull/48484)  
This bug fix for models using the [`inverse_of` option](https://guides.rubyonrails.org/association_basics.html#options-for-belongs-to-inverse-of) which caused the related record not to be saved when using composite primary keys.  

[Fix "destroy_all" for "has_many through:" associations that points to a CPK model](https://github.com/rails/rails/pull/48474)  
Another bug fix for composite primary keys was affecting `destroy_all` when using the [`has_many through:` association](https://guides.rubyonrails.org/association_basics.html#the-has-many-through-association) that points to a model with composite primary key.  


[Store "secret_key_base" in "Rails.config" for local environments.](https://github.com/rails/rails/pull/48470)  
Since `secrets` have been [deprecated](https://github.com/rails/rails/pull/47801) in favor of `credentials`, this PR removes the last dependency for local environments by using `Rails.config.secret_key_base` instead of `Rails.application.secrets.secret_key_base`.  

[Deprecate calling "Rails.application.secrets"](https://github.com/rails/rails/pull/48472)  
With the last PR merged a deprecation warning will now show up when you call `Rails.application.secrets`, instead you should use `Rails.application.credentials`.  

[Use cache ":coder" option to specify ":message_pack"](https://github.com/rails/rails/pull/48449)  
This PR removes the unreleased `:message_pack` option from `config.active_support.cache_format_version` and instead provides a new `:coder` option to the `config.cache_store` flag.  


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-06-09%7D...main@%7B2023-06-16%7D)._  
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230609-20230616) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
