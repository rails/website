---
layout: post
title: "Agents on Rails, query method and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-08-14
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore this week's news in the Rails.

[Agents on Rails](https://rubyonrails.org/ai)  
Read the [announcement](https://rubyonrails.org/2026/8/12/llm-benchmarking-project) and the first [benchmark report](https://rubyonrails.org/2026/8/13/agents-on-rails-the-first-benchmark-report).

[Add support for the HTTP QUERY method](https://github.com/rails/rails/pull/57973)  
*QUERY* is a safe and idempotent HTTP method that conveys the query in the request content, making it suitable for queries too large or structured for a URL query string:

```ruby
# config/routes.rb
query "search", to: "search#index"
match "filter", to: "search#filter", via: :query

# request handling
request.query?                # => true
request.request_method_symbol # => :query

# integration tests
query "/search", params: { filters: { status: "active" } }, as: :json
```

[Show bin/console startup banner based on IRB](https://github.com/rails/rails/pull/58455)  
Show a Rails-flavored startup banner (a small logo, Rails/Ruby version, a rotating tip about console helpers like *reload!*, and *Rails.root*) when starting *bin/rails console*.

Set *RAILS_TIPS=false* to hide the rotating tip.

[Allow ffmpeg and ffprobe input arguments to be configured](https://github.com/rails/rails/pull/58461)  
Two new configuration parameters are introduced.
*config.active_storage.video_preview_input_arguments* is passed to *ffmpeg* before *-i*, and *config.active_storage.ffprobe_arguments* is passed to *ffprobe* before the file path. Both default to empty string.

*ffmpeg*'s flags are position dependent, and these parameters carry the ones that apply to the input, such as -codec_whitelist, -f, and -protocol_whitelist. For example, an application that accepts only H.264 video with AAC audio:

```ruby
config.active_storage.video_preview_input_arguments = "-codec_whitelist h264,aac"
config.active_storage.ffprobe_arguments = "-codec_whitelist h264,aac"
```

[Allow config.active_storage.variant_processor to be set to a class](https://github.com/rails/rails/pull/58384)  
The class must implement the interface defined by *ActiveStorage::Transformers::Transformer*. Active Storage then uses it for variant processing:
```ruby
config.active_storage.variant_processor = CustomTransformer
```

[The schema readers answer for many tables at once](https://github.com/rails/rails/pull/58421)  
*indexes / primary_keys / foreign_keys / check_constraints / exclusion_constraints / unique_constraints* now accept a list of tables and answer for all of them at once:

```ruby
connection.indexes(:users)            # => [IndexDefinition, ...]
connection.indexes([:users, :posts])  # => { "users" => [...], "posts" => [...] }
```

[Fix LengthValidator crash with proc minimum and nil value](https://github.com/rails/rails/pull/58428)  
The proc was resolved only when the value was present, so for a nil value it leaked unresolved into the error message and was invoked with the message options hash instead of the record. It is now resolved before the error is built, producing the expected "is too short" message.

```ruby
validates_length_of :title, minimum: ->(record) { record.min_length }
# title = nil now yields "is too short (minimum is N characters)"
# instead of raising NoMethodError
```

[Use bind parameters for array-form arguments in find_by_sql / count_by_sql](https://github.com/rails/rails/pull/58427)  
The API doc claims parity with *where*, but array-form values were eagerly interpolated via *sanitize_sql*.

[Deprecate create alias of insert in connection adapters](https://github.com/rails/rails/pull/58426)  
*insert / update / delete* correspond to their SQL DML verbs, but *create* reads like DDL (*create_table / create_database*) rather than the *INSERT* it actually performs.

[Split keyword arguments off #args on Rails.application.middleware entries](https://github.com/rails/rails/pull/58420)  
Middleware entries now expose keyword arguments through a new *#kwargs* accessor. *#args* previously bundled kwargs as a trailing hash inside the positional array (via *Hash.ruby2_keywords_hash*). It now returns positional arguments only.

[Allow to configure ERB options through ActionView::Base](https://github.com/rails/rails/pull/58359)  
The *ActionView::Template::Handlers::ERB* class is now private API. Applications that used to configure ERB options such as *escape_ignore_list* now need to do this on the *ActionView::Base* class or on the railtie *config.action_view* configuration.

[Append TRADITIONAL instead of STRICT_ALL_TABLES to MySQL's sql_mode by default](https://github.com/rails/rails/pull/58350)  
On environments whose global *sql_mode* is empty — most notably Amazon RDS and Aurora MySQL default parameter groups — appending only *STRICT_ALL_TABLES* leaves out *NO_ZERO_IN_DATE*, *NO_ZERO_DATE*, and *ERROR_FOR_DIVISION_BY_ZERO*, which MySQL 5.7+ has otherwise made part of its own default. Appending *TRADITIONAL* closes the gap.

[Allow ActiveSupport::ProxyLogger to ignore messages by pattern](https://github.com/rails/rails/pull/58328)  
Useful to silence noisy logs from gems that your application may not care about, without needing to change the log level and losing other useful logs.

[Add Pacific Time (Canada) and Alberta Time zone mappings](https://github.com/rails/rails/pull/58321)  
Adds two friendly zone mappings:

- *Pacific Time (Canada)* → *America/Vancouver*
- *Alberta* → *America/Edmonton*

[Change the shape of ActiveRecord::Migration::CommandRecorder#commands](https://github.com/rails/rails/pull/58239)  
Each recorded migration command is now stored as *[cmd, args, kwargs, block]* (4-element) instead of *[cmd, args, block]* (3-element) with kwargs bundled into a trailing hash inside *args*. Code that inspects *recorder.commands* directly needs to adapt to the new tuple shape.

[Fix normalizes to run before the underlying type validates an assigned value](https://github.com/rails/rails/pull/57846)  
When *normalizes* was combined with another type that rejects invalid input (such as an Active Record *enum*), the underlying type's *assert_valid_value* ran against the raw, un-normalized value and raised before normalization had a chance to run. The normalization is now applied first, so a value like "  Pending  " is normalized to "pending" and accepted by the enum.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-08-07%7D...main@%7B2026-08-14%7D)._  
_We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260807-20260814) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
