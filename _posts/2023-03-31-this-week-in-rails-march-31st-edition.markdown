---
layout: post
title: "March 31st 2023 edition 🌸"
categories: news
author: zzak
published: true
date: 2023-03-31
---


Hi, it's [zzak](https://github.com/zzak), writing in from [Aomori, Japan](https://aomori-tourism.com/en/spot/detail_101.html), home of the great [Jonan Scheffler](https://twitter.com/thejonanshow).  
**2023 is officially 25% over, time to enjoy 🌸 and explore this week's changes in the Rails codebase.**

[Add debug gem back to the Gemfile template](https://github.com/rails/rails/pull/47823)  
With the release of Ruby v3.2.2, which [happened today](https://www.ruby-lang.org/en/news/2023/03/30/ruby-3-2-2-released/), we can safely add the "debug" gem back to the Gemfile template for generated Rails apps.

[Infer _foreign_key_ when _inverse_of_ is present](https://github.com/rails/rails/pull/47797)  
This PR makes `has_one` and `has_many` associations automatically infer the `foreign_key` option when the `inverse_of` option is present.
  

[Action Cable: _assert_broadcasts_ return the messages that were broadcast](https://github.com/rails/rails/pull/47793)  
This PR makes Action Cable's `assert_broadcasts` return the messages that were broadcast.

This way you can more easily test them, for example:
  
```ruby
messages = assert_broadcasts("test", 2) do
  ActionCable.server.broadcast "test", { message: "one" }
  ActionCable.server.broadcast "test", { message: "two" }
end
assert_equal 2, messages.length
assert_equal({ "message" => "one" }, messages.first)
assert_equal({ "message" => "two" }, messages.last)
```
  
This is helpful if you expect lots of messages to be broadcast or if you want to only match on some element of the data; `assert_broadcast_on` doesn't work well in either of those scenarios.


[Active Storage: Safe for Direct Uploads in js Libraries or Frameworks](https://github.com/rails/rails/pull/47773)  
This PR allows support for additional headers when using direct uploads from the client side, in order to support various types of authentication such as Bearer tokens, API keys, Basic auth, OAuth 1.0, Digest auth, etc.
  

[Add zettabyte to _number_to_human_size_](https://github.com/rails/rails/pull/47771)  
Zettabytes (ZB) has been added to Active Support.  

```ruby
ActiveSupport::NumberHelper.number_to_human_size(1.kilobyte**7)
#=> "1 ZB"
```

[Set charset in content type response headers (OWASP)](https://github.com/rails/rails/pull/47758)  
This PR ensures the charset is included in all Content-Type headers emitted from Rails.  

[OWASP](https://github.com/OWASP/ASVS/blob/v4.0.3/4.0/en/0x22-V14-Config.md#v144-http-security-headers) recommends that every HTTP Response contains a Content-Type header with safe character set.  
  

[Active Storage: Remove _mini_mime_ usage in favour of _marcel_](https://github.com/rails/rails/pull/47754)  
One less dependency to worry about upgrading!  
  

[Fix Rails generated index name being too long](https://github.com/rails/rails/pull/47753)  
Auto generated index names are now limited to 62 bytes, which fits within the default index name length limits for MySQL, Postgres and SQLite.  
  

[Implement _marshal_dump_ and _marshal_load_ on ActiveRecord::Base](https://github.com/rails/rails/pull/47747)  
A more stable and optimized Marshal serializer for Active Record models has been introduced.  

You can opt in via `config.active_record.marshalling_format_version = 7.1`.  
  

[Add ActiveSupport load hook for _ActionText::EncryptedRichText_](https://github.com/rails/rails/pull/47737)  
Previously `ActionText::Record` and `ActionText::RichText` have dedicated load hooks.  
This PR adds an additional hook for `ActionText::EncryptedRichText`, so that external libraries have a similarly simple way to run code after the subclass is loaded.  
  

[Implement _provider_job_id_ for Backburner jobs](https://github.com/rails/rails/pull/47732)  
This PR implements `provider_job_id` for the Beanstalk ActiveJob QueueAdapter.  
For example, if you want to be able to cancel jobs:  

```ruby
Beaneater::Job.new(
  Backburner::Connection.new(Backburner.configuration.beanstalk_url),
  {id: job.provider_job_id}
).delete
```
  

[Load Rake tasks only once for command suggestions](https://github.com/rails/rails/pull/47718)  
After this PR the `bin/rails --help` command will now list only framework and plugin commands. Rake tasks defined in `lib/tasks/*.rake` files will no longer be included.  
For a list of those tasks, use `rake -T`.  
  

[Include READMEs in main framework pages of the API documentation](https://github.com/rails/rails/pull/47717)  
This PR teaches RDoc to include the Rails API docs to include each of the relevant libraries READMEs for the top-level constant.  
Previously many of these libraries modules had empty descriptions in the API docs, so now they have all of the relevant information which is a nice improvement!  
  

[Alias ActionController::Parameters except as without](https://github.com/rails/rails/pull/47687)  
This PR adds support for `without` as an alias to `except` on StrongParameters.  

For example, you can now do:  

```ruby
@params[:person].without(:name)
```

Which is the same as:

```ruby
@params[:person].except(:name)
```
  

[Rubocop markdown snippets](https://github.com/rails/rails/pull/47186)  
This PR adds [rubocop-md](https://github.com/rubocop/rubocop-md) for linting all markdown files.  
Ensuring any code snippets in the guides also follow the Rails coding conventions, without having to manually review every change that comes in.  
  

[Add markdownlint to guides](https://github.com/rails/rails/pull/47779)  
A follow up to the previous PR, now all markdown content in the guides is linted using [markdownlint](https://github.com/markdownlint/markdownlint).  
  

[Allow destroying active storage variants](https://github.com/rails/rails/pull/47150)  
When creating active storage variants, `ActiveStorage::VariantRecord` is inserted, then a file is uploaded.  
If the upload fails, the file can be missing even though an `ActiveStorage::VariantRecord` exists in the database.  
In this case, we can now delete the corresponding record of just one variant via this API:  

```ruby
attachable.variant(resize_to_limit: [100, 100]).destroy
```
  

[Allow Attachables to override default template when attachment is missing](https://github.com/rails/rails/pull/46101)  
When rendering ActionText attachments, if the underlying attachable has been removed, currently Rails renders the `action_text/attachables/missing_attachable` partial for all attachable types. Consuming applications can override this partial, but it is global across all attachable models.  

Now you can render model-specific partials when necessary, for example, you could render a placeholder image for a file attachment or the text "Deleted User" for a User attachment.  
  


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-03-24%7D...main@%7B2023-03-31%7D)._  
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230324-20230331) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
