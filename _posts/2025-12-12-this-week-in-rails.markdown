---
layout: post
title: "'Tis the season for contributing to Rails"
categories: news
author: claudiob
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-12-12
---

Hi, it's [Claudio Baccigalupo](https://github.com/claudiob). So many improvements to the Rails codebase this week!

If you are also looking to contribute, there are [several documentation PRs open for community review](https://github.com/rails/rails/pulls?q=is%3Apr+is%3Aopen+label%3A%22rails+foundation%22).
Oh and we also have some [Rails World 2026 updates](https://rubyonrails.org/2025/12/11/rails-world-2026-update)! And now, let's get to the PR-esents 🎁


[ActiveStorage immediate variants](https://github.com/rails/rails/pull/51951)  
Attachment variants gain the `process: :immediately` option:

```
has_one_attached :avatar_with_immediate do |attachable|
  attachable.variant :thumb, resize_to_limit: [4, 4], process: :immediately
end
```

Attachments with `process: :immediately` variants now [eagerly analyze during validation](https://github.com/rails/rails/pull/56327), making [metadata like image dimensions available for custom validations](https://github.com/rails/rails/pull/56335):

```ruby
def validate_avatar_dimensions
  if avatar.metadata[:width] < 200 || avatar.metadata[:height] < 200
    errors.add(:avatar, "must be at least 200x200")
  end
end
```

Immediate variant processing and blob analysis use local files directly instead of re-downloading after upload. Applies when attaching uploadable io, not when attaching an existing Blob.

[Deprecate PreviewImageJob](https://github.com/rails/rails/pull/56311)  
PreviewImageJob is [no longer called by Rails](https://github.com/rails/rails/pull/51951) and is now officially deprecated.

[Add SVG renderer](https://github.com/rails/rails/pull/56345)  
Define a `to_svg` method on your model and render SVG directly in your controller:

```ruby
respond_to do |format|
  format.html
  format.svg { render svg: @page }
end
```


[Yield the transaction for Model#with_lock](https://github.com/rails/rails/pull/56334)  
`ActiveRecord::Base#with_lock` now yields the transaction the same way that `transaction` does:

```ruby
person.with_lock do |transaction|
  transaction.after_commit { puts "hello" }
end
```

[Enable debug events by default](https://github.com/rails/rails/pull/56330)  
The use case is primarily for test or when using framework libraries outside of Rails. 
In these cases, we shouldn't assume debug events need to be obfuscated.

[Respect config.log_level to emit debug events](https://github.com/rails/rails/pull/56213)  
Using `RAILS_LOG_LEVEL=debug` in production will now work as expected.

[Add structured event for open redirects](https://github.com/rails/rails/pull/56019)  
Applications with `config.action_controller.action_on_open_redirect = :notify` automatically get a structured log event rather than having to configure their own subscriber to the Active Support Notification.

[Fix ERB strict locals spanning multiple lines](https://github.com/rails/rails/pull/56270)  
ERB partials with the `locals:` magic comment on multiple lines will now work without issues, [even when the closing parenthesis is on a new line](https://github.com/rails/rails/pull/56316):

```ruby
<%# locals: (arg_1:,
             arg_2: nil,
             arg_3: []) %>
```

[Combine tag content supplied via both parameter and block](https://github.com/rails/rails/pull/56293)  
A snuppet of code such as `tag.div("Hello ") { "World" }` would just return `<div>World</div>`. 
With this fix, it's going to return `<div>Hello World</div>`.


[Allow schema_dump configuration to be an absolute path](https://github.com/rails/rails/pull/56290)  
`ActiveRecord::Tasks::DatabaseTasks.schema_dump_path` now supports absolute paths to specifyi the schema dump database configuration.

[Make flaky parallel tests easier to diagnose](https://github.com/rails/rails/pull/56175)  
Rails assigns tests to workers in round-robin order so the same `--seed` and worker count will result in the same sequence of tests running on each worker increasing the odds of reproducing test failures caused by test interdependence.

[Register file extensions for rails stats](https://github.com/rails/rails/pull/56017)  
`Rails::CodeStatistics` gains a `register_extension` method to for adding file extensions to be included when generating code analytics with `rails stats`.

[Fix Inflections.instance_or_fallback to properly find :en fallback](https://github.com/rails/rails/pull/56344)  
The `pluralize` helper will now respect fallback to :en for custom locales.

[Wrap console command with an executor by default](https://github.com/rails/rails/pull/56297)  
This can be disabled with `-w` or `--skip_executor`, same as runner.

[Extract ActionText::Editor base class and ActionText::TrixEditor adapter](https://github.com/rails/rails/pull/51238)  
The aim is to provide a single, extensible entrypoint for third-party editors  to integrate with Action Text.

[Validate RemoteImage URLs](https://github.com/rails/rails/pull/56283)  
Within Action Text, `RemoteImage.from_node` now validates the URL before creating a `RemoteImage` object in order to avoid a potential `ActionView::Template::Error` when the image is rendered.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-12-05%7D...main@%7B2025-12-12%7D)._  
_We had [32 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251205-20251212) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
