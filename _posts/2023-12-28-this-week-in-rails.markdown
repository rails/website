---
layout: post
title: "This year in Rails, a summary of 2023"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2023-12-29
---

This is Emmanuel, Greg, Vipul, Wojciech, and Zzak, bringing you the summary of what happened with Rails in the past year. It was a busy year with over [4300 commits](https://github.com/rails/rails/compare/@%7B2023-01-01%7D...main@%7B2023-12-31%7D) from [520 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230101-20231231) and 23 releases, including Rails 7.1!

For this year end issue, as a team we each hand-picked some of our favorite pull requests from the last year.

[Reflecting on 2023: Rails Foundation's Inaugural Year](https://rubyonrails.org/2023/12/27/reflecting-on-2023)  
Amanda wrote a summary of what the Rails Foundation has been up to this year and what she is plannning for next year.

[Allow use of SSL-terminating reserve proxy that doesn't set headers](https://github.com/rails/rails/pull/47139)  
Add _ActionDispatch::AssumeSSL_ middleware that can be turned on via _config.assume\_ssl_. It makes the application believe that all requests are arriving over _SSL_. This is useful when proxying through a load balancer that terminates _SSL_, the forwarded request will appear as though it's _HTTP_ instead of _HTTPS_ to the application. This makes redirects and cookie security target _HTTP_ instead of _HTTPS_.  
  
[Add ActiveJob.perform_all_later to enqueue multiple jobs at once](https://github.com/rails/rails/pull/46603)  
This adds the ability to bulk enqueue jobs, without running callbacks.
This can greatly reduce the number of round-trips to the queue datastore. For queue adapters that do not implement the new `enqueue_all` method, we fall back to enqueuing jobs individually.

[Implement Object#with](https://github.com/rails/rails/pull/46681)  
This pull request adds `Object#with` to set and restore public attributes around a block:

```ruby
client.timeout # => 5
client.with(timeout: 1) do
  client.timeout # => 1
end
client.timeout # => 5
```
More examples and details about this change can be found on the pull request.

[Introduce adapter for Trilogy](https://github.com/rails/rails/pull/47880)  
Trilogy is a client library for MySQL-compatible database servers, designed for performance, flexibility, and ease of embedding.
The [Trilogy database client](https://github.com/github/trilogy) and corresponding [Active Record adapter](https://github.com/github/activerecord-trilogy-adapter) were both open sourced by GitHub last year. 

[Add ActiveSupport::MessagePack](https://github.com/rails/rails/pull/47770)  
`ActiveSupport::MessagePack` is a serializer that integrates with the [`msgpack` gem](https://github.com/msgpack/msgpack-ruby) to serialize a variety of Ruby objects.
Compared to `JSON` and `Marshal`, `ActiveSupport::MessagePack` can provide a performance improvement and message size reduction.

[Introduce config.autoload_lib](https://github.com/rails/rails/pull/48572)  
The new method `config.autoload_lib(ignore:)` provides a simple way to autoload from `lib` folder:

 ```ruby
 # config/application.rb
 config.autoload_lib(ignore: %w(assets tasks))
 ```

Normally, the `lib` directory has subdirectories that should not be autoloaded or eager loaded. 
This new method allows you to specify which subdirectories to be autoloaded as needed.

Read more about this new feature in the  [autoloading guide](https://guides.rubyonrails.org/v7.1/autoloading_and_reloading_constants.html).

[Active Job verbose logging](https://github.com/rails/rails/pull/47839)  
A `verbose_enqueue_logs` configuration option is added to Active Job to display the caller of background job enqueue in the log to help with debugging.
It is enabled in development only for new and upgraded applications. Not recommended for use in the production environment since it relies on Ruby's `Kernel#caller` which is fairly slow.

[Add Bun support](https://github.com/rails/rails/pull/49241)  
Bun is a new and viable alternative to the node.js runtime, yarn package manager, and esbuild bundler. Bun's primary differentiating characteristic is speed. It's often multiple times faster than node.js and friends.  
Since most vanilla Rails projects are looking to simply sprinkle a little JavaScript here and there (but sometimes want a bit better more of the JavaScript ecosystem than the import-maps provide) Bun is a really good fit and can be easily adopted by new Rails projects.

[Support filtering tests by line ranges](https://github.com/rails/rails/pull/48807)
This change allows new syntax to filter tests by line ranges. For example, the following command runs tests from line 10 to 20.

```ruby
$ rails test test/models/user_test.rb:10-20
```

[Performance tune the SQLite3 adapter connection configuration](https://github.com/rails/rails/pull/49349)  
For Rails applications, the Write-Ahead-Log in normal syncing mode with a capped journal size, a healthy shared memory buffer and a shared cache will perform, on average, 2× better.

[Enable YJIT by default if running Ruby 3.3+](https://github.com/rails/rails/pull/49947)  
There was many public reports of 15-25% latency improvements for Rails apps that did enable Ruby 3.2 YJIT, and in 3.3 it's even better.
Following the [change](https://github.com/ruby/ruby/pull/8705), in Ruby 3.3 YJIT is paused instead of disabled by default, allowing us to enable it from an initializer.

[Make the output of Active Records inspect configurable.](https://github.com/rails/rails/pull/49765)  
One can use *attributes_for_inspect* method:
```ruby
Post.attributes_for_inspect = [:id, :title]
Post.first.inspect #=> "#<Post id: 1, title: "Hello, World!">"
```
With the *attributes_for_inspect* set to _:all_, all record's attributes will be listed (default for development and test environment).
One can also call *full_inspect* to get an inspection with all the attributes.

[Rails 8 milestone](https://github.com/rails/rails/milestone/87)  
This one is about what's ahead. DHH created a milestone for Rails 8 with very interesting issues. In my humble opinion, Rails 8 will be amazing.

That's a wrap! Have a great New Year's Eve and see you next year!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
