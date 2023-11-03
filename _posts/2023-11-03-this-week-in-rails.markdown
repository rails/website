---
layout: post
title: '"INSERT...RETURNING" for MariaDB, "SET CONSTRAINTS" for PostgreSQL, "DEFERRABLE" foreign keys for SQLite and much more!'
categories: news
author: zzak
published: true
date: 2023-11-03
---


Hey, [zzak](https://github.com/zzak) here with the first edition of This Week in Rails for November, 2023.  

[Support RETURNING clause for MariaDB](https://github.com/rails/rails/pull/49840)  
This PR adds support for the `INSERT ... RETURNING` expression for the MariaDB adapter.  
You can read more about this feature in the official [MariaDB docs](https://mariadb.com/kb/en/insertreturning/).  


[Simplify attr_internal_define](https://github.com/rails/rails/pull/49864)  
This PR optimizes the internals of [Module.attr_internal_naming_format=](https://edgeapi.rubyonrails.org/classes/Module.html#method-c-attr_internal_naming_format-3D) to eagerly strip the "@" prefix from the given format.  
Providing a "@" prefix to this method is no longer accepted and will raise a deprecation warning.  

[Accept service as a Proc with "has_one_attached" and "has_many_attached"](https://github.com/rails/rails/pull/49863)  
Now you can specify the service as a callable Proc to make specialized attachment associations even more flexible in Active Storage.
```ruby
class User < ActiveRecord::Base
  has_one_attached :avatar, service: ->(user) do
    user.in_europe_region? ? :s3_europe : :s3_usa
  end
end
```
  

[Move "quote_string" to the AbstractMysqlAadapter class](https://github.com/rails/rails/pull/49817)  
Implementations of the method were exactly the same for `trilogy` and `mysql2` adapters, so it made sense to refactor them into the inherited parent class.  
If you were expecting this method to be defined on the Mysql2Adapter it has moved without a deprecation warning, or changelog as of writing this.  


[Fix using trix in sprockets](https://github.com/rails/rails/pull/49778)  
Action Text was updated to include the latest release of Trix v2.0.7 and an issue was fixed when trying to use the library with Sprockets.  


[Make Dockerfile template compatible with Kubernetes rootless pods](https://github.com/rails/rails/pull/49742)  
As the title says, the generated `Dockerfile` when running `rails new` now works when running in rootless pods in Kubernetes.  
This may have an impact on other environments, but essentially changes from a user and group name to use a UID and GID.  


[Non-zero exit status on migration file creation errors](https://github.com/rails/rails/pull/49644)  
If an error occurs when running `bin/rails generate migration` a non-zero exist status is now returned.  


[Add support for deferred foreign keys to the SQLite3 adapter](https://github.com/rails/rails/pull/49376)  
This PR is a step into the direction to make SQLite a viable option in production, this time adding support for [deferred foreign keys](https://www.sqlite.org/foreignkeys.html#fk_deferred).  


[Add support for "SET CONSTRAINTS" to the PostgreSQL adapter](https://github.com/rails/rails/pull/49187)  
Now you can use the `set_constraints` method instead of executing a query by hand.  
See the [PostgreSQL docs](https://www.postgresql.org/docs/current/sql-set-constraints.html) for more.  


[Improve error messages when asserting change](https://github.com/rails/rails/pull/48482)  
Now the `assert_changes` and `assert_no_changes` error messages show objects using `.inspect` to make it easier to differentiate `nil` from empty strings, strings vs symbols, etc.  


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-10-27%7D...main@%7B2023-11-03%7D)._  
_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231027-20231103) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
