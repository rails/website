---
layout: post
title: "This Week in Rails - September 29"
categories: news
author: wojtek
published: true
date: 2023-09-29
---


Hi, [Wojtek](https://twitter.com/morgoth85) here. The [Rails World](https://rubyonrails.org/world) starts next week. Three members of the current _This Week In Rails_ editorial team — Greg, Emmanuel, and myself — will be in attendance. We've got some stickers featuring the newsletter's logo, so be sure to spot us to snag one! Now, let's delve into the latest updates in the Rails codebase.

[Rails 7.1.0.rc1 released](https://github.com/rails/rails/releases/tag/v7.1.0.rc1)  
Getting us closer to the final release of the Rails 7.1.

[Add a public API for broadcasting logs](https://github.com/rails/rails/pull/48615)  
This feature existed for a while but was until now a private API.
Broadcasting log allows to send log message to difference sinks (_STDOUT_, file, etc.) and is used by default in the development environment to write logs both on _STDOUT_ and in the
"development.log" file.
```ruby
broadcast = ActiveSupport::BroadcastLogger.new(Logger.new(STDOUT), Logger.new("development.log"))
broadcast.info("Hello!") # The "Hello!" message is written on STDOUT and in the log file.
```

[Allow attaching File or Pathname to has_one_attached](https://github.com/rails/rails/pull/45606)  
This might be especially handy when creating models in tests, as it's easier to pass a _File_ or a _Pathname_ (from _file_fixture_ for instance)
```ruby
User.create!(avatar: File.open("image.jpg"))
User.create!(avatar: file_fixture("image.jpg"))
```

[Introduce ActionView::TestCase.register_parser](https://github.com/rails/rails/pull/49194)  
Register a callable to decode rendered content for a given MIME type.  
Each registered parser will also define a _#rendered.$MIME_ helper method, where _$MIME_ corresponds to the value of the _mime_ argument.
```ruby
register_parser :rss, -> rendered { RSS::Parser.parse(rendered) }
```
By default, parsers for _:html_ and _:json_ are registered.

[HTML tag validation added for tag names](https://github.com/rails/rails/pull/49175)  
Added validation for HTML tag names in the _tag_ and _content_tag_ helper method. Those methods now check that the provided tag name adheres to the HTML specification. If an invalid HTML tag name is provided, the method raises an _ArgumentError_ with an appropriate error message.

[Add expires_at option to ActiveStorage::Blob#signed_id](https://github.com/rails/rails/pull/48115)  
Providing _expires_at_ will expire the link after given the time:
```ruby
rails_blob_path(user.avatar, disposition: "attachment", expires_at: 30.minutes.from_now)
```

[Introduce ActionMailer::FormBuilder](https://github.com/rails/rails/pull/48542)  
Use the _default_form_builder_ method in mailers to set the default form builder for templates rendered by that mailer. Matches the behavior in Action Controller.

[Factor out deep_merge into Active Support DeepMergeable](https://github.com/rails/rails/pull/45411)  
The _ActiveSupport::DeepMergeable_ module allows a class to provide _deep_merge_ and _deep_merge!_ methods simply by implementing a _merge!(other, &block)_ method. Values will be deep merged only when they are compatible, according to _deep_merge?_ method. By default, that only includes instances of the same class or its subclasses. A class may override _deep_merge?_ to further restrict or expand the domain of deep mergeable values.  
This allowed to [support deep_merge on ActionController::Parameters](https://github.com/rails/rails/pull/45369)
 
[Fix Range#overlap? ignoring empty ranges](https://github.com/rails/rails/pull/49356)  
Previously, _#overlap?_ would incorrectly return true when one of the ranges was effectively "empty".  
[Ruby 3.3 introduces Range#overlap?](https://bugs.ruby-lang.org/issues/19839) so this also ensures that both implementations return same results.

[Performance tune the SQLite3 adapter connection configuration](https://github.com/rails/rails/pull/49349)  
For Rails applications, the Write-Ahead-Log in normal syncing mode with a capped journal size, a healthy shared memory buffer and a shared cache will perform, on average, 2× better.

[Allow SQLite3 busy_handler to be configured with simple max number of retries](https://github.com/rails/rails/pull/49352)  
Retrying busy connections without delay is a preferred practice for performance-sensitive applications. Add support for a _database.yml_ _retries_ integer, which is used in a simple _busy_handler_ function to retry busy connections without exponential backoff up to the max number of _retries_.

[Set Active Job scheduled_at attribute as a Time object](https://github.com/rails/rails/pull/48066)  
Serialize and deserialize the value of _scheduled_at_ as a Time object. Deserialize _enqueued_at_ as a Time object as well.
In addition assigning a numeric/epoch value to _scheduled_at=_ is deprecated.

[Fix duplicate escaping of quotes for check constraint expressions in MySQL schema](https://github.com/rails/rails/pull/42429)  
A check constraint with an expression, that already contains quotes, lead to an invalid schema dump with the _mysql2_ adapter.
 
_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-09-22%7D...main@%7B2023-09-29%7D)._  
_We had [39 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230922-20230929) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
