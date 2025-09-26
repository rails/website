---
layout: post
title: "Redirect source location logging, filterable engine routes, and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-09-26
---


Happy Friday! After three weeks of conferencing, this is [Greg](https://greg.molnar.io), bringing you the news about the latest changes in your favorite framework.
It was a busy week with a lot of changes, let's dive in.

[Rails Version 8.0.3 has been released!](https://rubyonrails.org/2025/9/22/Rails-Version-8-0-3-has-been-released)  
A new version of Rails has been released. Reaad the [CHANGELOG](https://github.com/rails/rails/releases/tag/v8.0.3) for the list of changes.

[Deprecate usage of custom ActiveJob serializers without public #klass methods](https://github.com/rails/rails/pull/55760)  
With this change, custom Active Job serializers must have a public `#klass` method, the previous behavior is deprecated.

[Make engine routes filterable in bin/rails routes, improve engine formatting](https://github.com/rails/rails/pull/55752)  
This pull request adds engine route filtering and better formatting in `bin/rails routes`.

[Make all framework log subscribers API private](https://github.com/rails/rails/pull/55755)  
Some of the the internal Rails log subscriber classes were not marked as private
APIs, this pull requests corrected that.

[Introduce _with_debug_event_reporting_ to enable event reporter debug mode](https://github.com/rails/rails/pull/55748)  
This pull request changes `ActiveSupport::Testing::EventReporterAssertions` by adding `#with_debug_event_reporting` to enable event reporter debug mode in tests.

[Don't generate system tests by default](https://github.com/rails/rails/pull/55743)  
Starting with Rails 8.1, scaffolds no longer generate system tests by default.
System tests should be reserved for critical user paths due to their slower
execution and higher maintenance cost. To include system tests when scaffolding,
use the `--system-tests=true` option.


[Structured event subscribers](https://github.com/rails/rails/pull/55690)  
Structured events are coming to framework notifications via the use of `ActiveSupport::StructuredEventSubscriber` subclasses. Events may be emitted with the `#emit_event` or `#emit_debug_event` methods like this, similar to a traditional `LogSubscriber`:

```ruby
class MyStructuredEventSubscriber < ActiveSupport::StructuredEventSubscriber
  def notification(event)
    emit_event("my.notification", data: event.payload)
  end
end

MyStructuredEventSubscriber.attach_to :namespace
```

[Support integer shard keys](https://github.com/rails/rails/pull/55680)  
With this change, integers can be used for shared keys. Here as example of doing so:
```ruby
# Now accepts symbols as shard keys.
ActiveRecord::Base.connects_to(shards: {
  1: { writing: :primary_shard_one, reading: :primary_shard_one },
  2: { writing: :primary_shard_two, reading: :primary_shard_two},
})

ActiveRecord::Base.connected_to(shard: 1) do
  # ..
end
```

[Allow logs and notifications for open redirects](https://github.com/rails/rails/pull/55496)  
The new `Rails.configuration.action_controller.action_on_open_redirect` configuration controls how Rails handles open redirect vulnerabilities. When set to `:raise`, Rails will raise an
`ActionController::Redirecting::UnsafeRedirectError` for redirects to external
hosts, which helps prevent open redirect attacks.
This configuration replaces the deprecated `raise_on_open_redirects` setting, providing the
ability for large codebases to safely turn on the protection (after monitoring
it with `:log`(logs a warning but allows the redirect) or `:notifications`(sends an ActiveSupport notification for monitoring).


[Support virtual (not persisted) generated columns on PostgreSQL 18+](https://github.com/rails/rails/pull/55142)  
This pull request adds support for virtual generated columns on PostgreSQL 18 and later.
Usage example:
```ruby
create_table :users do |t|
  t.string :name
  t.virtual :lower_name,  type: :string,  as: "LOWER(name)", stored: false
  t.virtual :name_length, type: :integer, as: "LENGTH(name)"
end
```

[Add _only_columns_ to activerecord](https://github.com/rails/rails/pull/55121)  
This pull request adds `ActiveRecord::Base.only_columns`. Similar in use case to `ignored_columns` but listing columns to consider rather than the ones to ignore.  
This can be useful when working with a legacy or shared database schema, or to make safe schema change
in two deploys rather than three.

[Add setting for logging redirect source locations](https://github.com/rails/rails/pull/52297)  
This pull request adds `action_dispatch.verbose_redirect_logs` setting that logs where redirects were called from.
Similar to `active_record.verbose_query_logs` and `active_job.verbose_enqueue_logs`, this adds a line in your logs that shows where a redirect was called from.  
For example:
```
Redirected to http://localhost:3000/posts/1
↳ app/controllers/posts_controller.rb:32:in `block (2 levels) in create'
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-09-19%7D...main@%7B2025-09-26%7D)._
_We had [36 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250919-20250926) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
