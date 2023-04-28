---
layout: post
title: "End of April 2023 Edition"
categories: news
author: zzak
published: true
date: 2023-04-28
---


Hi, it's [zzak](https://github.com/zzak). ✈️ RailsConf has come to a close, and Golden Week is upon us here in Japan. Lots to catch up on in This Week in Rails.

[Many documentation improvements to extend our SEO posture](https://github.com/rails/rails/pulls?q=is%3Apr+is%3Aclosed+merged%3A2023-04-21..2023-04-28+author%3Ap8)  
The venerable [@p8](https://github.com/p8) has been very busy trying to improve Rails documentation fortune with search engines.  

On the topic of documentation, the **PostgreSQL guide** received new sections on [INCLUDE](https://github.com/rails/rails/pull/48027), [UNIQUE](https://github.com/rails/rails/pull/48026), and [EXCLUDE](https://github.com/rails/rails/pull/48026).  

[Only flatten first level to preserve nested for Enumerable#in_order_of](https://github.com/rails/rails/pull/48063)  
This is a great example where a developer was actively testing their application against Rails main branch and discovered this bug, and even sent a patch! Good work!  

[Fix pg 1.5.0 deprecation warning](https://github.com/rails/rails/pull/48048)  
This warning occurs when using the recently released `pg` gem version 1.5.0. The PR has been backported, so the next point release should quiet things!  

[Consistently raise an `ArgumentError` if the `ActiveSupport::Cache` key is blank](https://github.com/rails/rails/pull/48043)  
For example,

```ruby
@cache.read(nil) #=> ArgumentError
```

This PR ensures that we consistently raise on a blank key for all store implementations.  

[Make Rails cookies RFC6265-compliant with domain: :all](https://github.com/rails/rails/pull/48036)  
Rails has incorrectly been adding leading dots to cookie domain values in `Set-Cookie` headers when the `domain: :all` option is present.  

This leading dot was required in cookies based on [RFC 2965][rfc2965] (October 2000), but [RFC 6265][rfc6265] (April 2011) changed the behavior, making a leading dot strictly incorrect. Todays browsers aim to conform to RFC6265 with respect to cookies. The `domain: :all` functionality in Rails predates RFC6265.  

[rfc2965]: https://www.rfc-editor.org/rfc/rfc2965#section-3.2
[rfc6265]: https://www.rfc-editor.org/rfc/rfc6265#section-4.1.1
  

[Allow symbols as queue names in Active Job test assertions](https://github.com/rails/rails/pull/48034)  
This PR allows `assert_enqueued_with` and `assert_performed_with` to accept both symbol or strings.  

The `assert_enqueued_jobs` and `assert_performed_jobs` variation already accepted both.  

[Raise if setting a config key that is a method name](https://github.com/rails/rails/pull/48030)  
For example,

```ruby
config.load_defaults = 7.0 #=> NoMethodError
```

Should be,

```ruby
config.load_defaults(7.0)
```

Previously the first example would be silently accepted, although take no effect.  

[Add load hook for `ActiveRecord::ConnectionAdapters::Mysql2Adapter`](https://github.com/rails/rails/pull/48012)  
Now you are free to extend the MySQL adapter using the following hook:

```ruby
ActiveSupport.on_load(:active_record_mysql2adapter) do
  # change some behavior
end
```

This PR brings the MySQL adapter up to speed with PostgreSQL and SQLite3.  

[Fix updated_at not updating in before_update callback](https://github.com/rails/rails/pull/47767)  
As described, this PR makes sure the `updated_at` timestamp is updated once all `update` callbacks have run, wherever mutations may occur, including `before_update`.  

[Using Rack::Test::UploadedFile.new with StringIO causes an exception](https://github.com/rails/rails/pull/47725)  
This PR fixes an issue in Active Storage with `Rack::Test::UploadedFile` and `Attached::Changes::CreateOne#upload`.  

[PostgreSQL can accept deferrable foreign key option for TableDefinition#references](https://github.com/rails/rails/pull/47671)  
Rails 7.0 added support for deferrable foreign key constraints via the `add_foreign_key` method, this PR adds support to `t.references` as well.  

[Deprecate "deferrable: true" option in favor of "deferrable: :immediate"](https://github.com/rails/rails/pull/47659)  
Because `deferrable: true` and `deferrable: :deferred` are hard to understand.  

Using `deferrable: true` with `add_foreign_key` is deprecated in favor of `deferrable: :immediate`, and will be removed in Rails 7.2.  

[Add support for Array#intersects? to ActiveRecord::Relation](https://github.com/rails/rails/pull/47670)  
Ruby 3.1 added `intersects?` which is equivalent to `(a & b).any?`.  

This PR adds the delegation of `intersects?` to `Relation` which fixes an issue with Rubocop false positive on `CollectionProxy`.  

[Add CTE support for joins](https://github.com/rails/rails/pull/46843)  
Last but certainly not least, you can now use `joins` and `left_outer_joins` when using the `.with` query method to create a Common Table Expression (CTE).  


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-04-21%7D...main@%7B2023-04-28%7D)._  
_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230421-20230428) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
