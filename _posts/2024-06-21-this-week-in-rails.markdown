---
layout: post
title: "New database sharding methods, improved Active Record Migration Docs, caching improvements for ActiveStorage and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-06-21
---

Hey everyone, Happy Friday! [Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. Let's dive in.

[Improved Active Record Migration documentation](https://github.com/rails/rails/pull/51928)  
The Rails Foundation documentation team continues on improving different areas of the Guides.
This Pull Request updates the Active Record Migration documentation to receive various additions, improvements and more.

[Add .shard_keys, .sharded?, & .connected_to_all_shards methods to ActiveRecord::Base](https://github.com/rails/rails/pull/51009)  
This change adds `.shard_keys`, `.sharded?`, & `.connected_to_all_shards` methods to start returning sharding information for a model.  

```ruby
class ShardedBase < ActiveRecord::Base
  self.abstract_class = true

  connects_to shards: {
    shard_one: { writing: :shard_one },
    shard_two: { writing: :shard_two }
  }
end

class ShardedModel < ShardedBase
end

ShardedModel.shard_keys => [:shard_one, :shard_two]
ShardedModel.sharded? => true
ShardedBase.connected_to_all_shards { ShardedModel.current_shard } => [:shard_one, :shard_two]    
```

[Expire caching when a download fail while proxying in Active Storage](https://github.com/rails/rails/pull/51288)       
The Proxy controllers in Active Storage set the caching headers early before streaming.
In some instances, it was possible for the file download to fail before we send the first byte to the client.
In those instances, this change would invalidate the cache and return a better response status before closing the stream.

[Lazily generate assertion failure messages](https://github.com/rails/rails/pull/52157)  
Minitest supports passing the failure message as a callable, which allow us to defer generating failure messages.
Some of these failure messages can be a bit costly to generate, particularly when inspecting very large objects or when accessing the AST of procs.
This change, now defers the generation of the failure message by passing it in a callable instead.

[Make "rails g scaffold" with no field produce RuboCop compliant code](https://github.com/rails/rails/pull/52161)  
When there are no fields and we use `rails g scaffold`, the generated code is not RuboCop compliant. 

This change makes it compliant by:

- Omitting a blank line in migration prior to "t.timestamps".
- Omitting leading and trailing spaces in empty hashes in create and update controller and api functional tests.

[Fix alias_attribute to ignore methods defined in parent classes](https://github.com/rails/rails/pull/52145)  
When defining regular attributes, inherited methods aren't overridden. 
However when defining aliased attributes, inherited methods aren't considered.
This change fixes `alias_attribute` to properly ignore methods defined in parent classes.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-06-15%7D...main@%7B2024-06-21%7D)._  
_We had [26 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240615-20240621) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
