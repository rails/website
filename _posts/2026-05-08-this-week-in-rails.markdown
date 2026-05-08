---
layout: post
title: "This Week in Rails: May 8, 2026"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-05-08
---


Hi, it's [zzak](https://github.com/zzak). This week was full of changes, so grab a seat, there's a lot to cover.

[New Accessibility Guide open for review](https://github.com/rails/rails/pull/57293)  
The Rails Foundation is working on a new Rails-flavored Accessibility Guide, covering semantic HTML, ARIA, page structure, forms, Turbo interactions, CSS, and testing. Please take a look and share feedback on the pull request.

[Add ActiveJob::Attributes to persist data between steps](https://github.com/rails/rails/pull/57208)  
Active Job can now declare typed attributes that are serialized with the job and restored on resume, removing the need to override `serialize` and `deserialize`.

```ruby
class SubmitEnrollmentJob < ApplicationJob
  include ActiveJob::Continuable
  attribute :payment_token, :string
end
```

[Add datalist to FormBuilder](https://github.com/rails/rails/pull/57318)  
Form builders now support `f.datalist`, deriving the datalist's ID from the builder object and method so text fields can point to it with `list:`.

[Add datalist_tag to create datalist form elements](https://github.com/rails/rails/pull/52137)  
Action View now has a `datalist_tag` helper for generating standalone HTML `datalist` elements and option values.

[Add delete: true option to Rails.cache.read](https://github.com/rails/rails/pull/56807)  
`Rails.cache.read("otp", delete: true)` atomically reads and deletes Redis-backed cache entries using `GETDEL`, a good fit for single-use values like OTPs.

[Add ActionController::Parameters#fetch_values for multi-key fetching](https://github.com/rails/rails/pull/56384)  
`ActionController::Parameters#fetch_values` works like `Hash#fetch_values`, returning multiple required values or yielding defaults for missing keys.

[Accept Active Record Encryption credentials as ENV](https://github.com/rails/rails/pull/57311)  
Active Record Encryption can now read `primary_key`, `deterministic_key`, and `key_derivation_salt` from environment variables via `Rails.app.creds`.

[Add conflicting record ID to validates_uniqueness_of error details](https://github.com/rails/rails/pull/55826)  
Uniqueness validation errors now include `:existing_id` in `errors.details`, making it easier for APIs to point clients at the conflicting record.

[Deactivate ViewReloader hooks when reloaders are cleared](https://github.com/rails/rails/pull/57285)  
`ViewReloader#deactivate` removes its resolver hook when reloaders are cleared, avoiding unnecessary filesystem scans in forked processes.

[Defer ViewReloader build when no view paths are registered](https://github.com/rails/rails/pull/57269)  
View watcher setup is delayed until view paths exist, avoiding early empty watchers that could trigger repeated rebuilds later.

[Fix image analyzer reporting wrong dimensions for mirrored EXIF orientations](https://github.com/rails/rails/pull/57290)  
Active Storage image analyzers now swap width and height only for EXIF orientations 5, 6, 7, and 8, the cases that rotate by 90 or 270 degrees.

[Define as_json on ActiveStorage::Attached::One and Attached::Many](https://github.com/rails/rails/pull/57288)  
Active Storage attachment proxies now serialize to their attachment record JSON, avoiding recursive `to_json` calls through the owning record.

[Gracefully handle nil during multi-parameter assignment](https://github.com/rails/rails/pull/57271)  
Active Record now treats `nil` like a blank value during multi-parameter assignment, so date/time parts submitted as `nil` resolve cleanly to `nil`.

[Skip CreateUsers migration when User model already exists](https://github.com/rails/rails/pull/57162)  
The authentication generator now skips its `CreateUsers` migration when `app/models/user.rb` already exists, preventing duplicate table migration failures.

[Introduce ActiveSupport::TestCase.around](https://github.com/rails/rails/pull/50889)  
`ActiveSupport::TestCase` now supports `around` callbacks that wrap setup, the test body, and teardown.

[Render Hash and keyword options as dasherized HTML attributes](https://github.com/rails/rails/pull/50320)  
Tag helpers now render nested hash and keyword options as dasherized HTML attributes, making attributes like `hx-post` and `hx-swap` easier to generate.

[Action View: Document TagBuilder as part of the public interface](https://github.com/rails/rails/pull/49368)  
`ActionView::Helpers::TagHelper::TagBuilder` is now part of the public API documentation, making `tag.attributes` and generated tag methods like `tag.div` easier to discover.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-05-01%7D...main@%7B2026-05-08%7D)._  
_We had [31 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260501-20260508) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
