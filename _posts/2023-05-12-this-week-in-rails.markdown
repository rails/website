---
layout: post
title: "Rails World CFP, picture_tag helper and more!"
categories: news
author: Greg
published: true
date: 2023-05-12
---

Hi, this is [Greg](https://greg.molnar.io), bringing you this week's changes in the Rails codebase.

[Rails World Call for Papers now open](https://rubyonrails.org/2023/5/9/rails-world-call-for-papers-now-open)  
This CFP is open until June 16, with space in the agenda for 26 talks on two tracks, and up to six workshops. Read the full announcement for more details and submit your proposal!

[Prevent duplicate filters for encrypted attributes](https://github.com/rails/rails/pull/48182)  
When an Active Record encrypted attribute is declared, a filter for it is automatically added to `config.filter_parameters`.  Prior to this pull request, the filter would be re-added every time the model was reloaded. This change ensures filters are only added once so that config.filter_parameters does not grow unbounded.

[Prevent non-anonymous modules from becoming frozen](https://github.com/rails/rails/pull/48178)  
In #48106, `Module#deep_dup` was changed to return the module itself (not a copy) when the module is not anonymous.  However, that causes non-anonymous modules to become frozen via `value.deep_dup.freeze` when passed to `ActiveModel::Type::Helpers::Mutable#immutable_value`.  So, for example, class attributes can no longer be set on the module.  
To prevent such issues, this pull request removes the `freeze` from `immutable_value`.  `immutable_value` is only called by `ActiveRecord::PredicateBuilder#build_bind_attribute`, which only cares that other code cannot mutate the value, not that the value is actually frozen.  

[Allow PredicateBuilder to recognize schema namespaced table names](https://github.com/rails/rails/pull/48171)  
Before this change, `ActiveRecord::PredicateBuilder` assumed that a column name will only be specified in dot notation with a single period. If a column is specified in dot notation for a table that is namespaced in a schema, it used the schema name as the table name. This pull request allows columns to specified in the format __schema.table.column__ as well as __table.column__.

[Support _:message_pack_ as cookies serializer](https://github.com/rails/rails/pull/48103)  
This commit adds support for `:message_pack` and `:message_pack_allow_marshal` as serializers for `config.action_dispatch.cookies_serializer`, just like `config.active_support.message_serializer`.

[Support _:message_pack_ as message serializer ](https://github.com/rails/rails/pull/47964)  
This change adds support for `:message_pack` as a serializer for `MessageEncryptor` and `MessageVerifier`, and, consequently, as an option for `config.active_support.message_serializer`.
  

[Default message serializer to _:json_allow_marshal_](https://github.com/rails/rails/pull/48170)  
This pull request changes the default message serializer set by `config.load_defaults 7.1` from `:json` to `:json_allow_marshal` so that upgraded apps can continue to read old messages without additional configuration.  
The intention is to eventually change the default to `:json` (with no Marshal fallback) in Rails 7.2, after some time has passed with apps generating JSON-serialized messages.  
Apps can opt in to JSON-only serialization before Rails 7.2 by manually setting `config.active_support.message_serializer = :json`. 

[Handle empty list of cache keys](https://github.com/rails/rails/pull/48154)  
With this change, `read_multi`, `write_multi` and `fetch multi` will bail out early if somehow called with an empty list.  
The same change was done for [`delete_multi`](https://github.com/rails/rails/pull/48159) in a follow-up pull request.

[Make _increment_counter_/_decrement_counter_ accept an amount argument](https://github.com/rails/rails/pull/48128)  
This pull request introduces the `by` option to `increment_counter` and `decrement_counter` to make it easier to change counters by an arbitrary value. Example usage:

```
Company.increment_counter(:users_count, 5, by: 3)
```

[Make Active Record's query cache an LRU](https://github.com/rails/rails/pull/48110)  
Active Record query cache is now evicts least recently used entries, with 100 entries as a default. The cache size can be configured via `database.yml`
```yaml
development:
  adapter: mysql2
  query_cache: 100
```

It can also be entirely disabled:
```yaml
development:
  adapter: mysql2
  query_cache: false
```

[Add a _picture_tag_ helper](https://github.com/rails/rails/pull/48100)  
This pull request adds support for the HTML picture tag. It supports passing a String, an Array or a Block and passing properties directly to the img tag via the `:image` key.  
Since the picture tag requires an img tag, the last element you provide will be used for the img tag.  
For complete control over the picture tag, a block can be passed, which will populate the contents of the tag accordingly.
See the pull request for usage examples.

[Add matcher support to _assert_enqueued_email_with_](https://github.com/rails/rails/pull/46626)  
Currently `assert_enqueued_with` allows you to pass procs for matching `args`. However, `assert_enqueued_email_with` doesn't let you do that for `args` and `params`.  
This pull request made `assert_enqueued_email_with` accept procs for args and params:
```ruby
assert_enqueued_email_with DeliveryJob, params: -> p { p[:token] =~ /\w+/ } do
  UserMailer.with(token: user.generate_token).email_verification.deliver_later
end
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-05-05%7D...main@%7B2023-05-12%7D)._  
_We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230505-20230512) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
