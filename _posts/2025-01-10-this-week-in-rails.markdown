---
layout: post
title: "Sorted Columns in Schema Dumper, Deprecations, and lots of fixes!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-01-10
---

Hey everyone, Happy Friday!

[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. 

Before we start, a small update - I am happy to share that my team at Saeloun is joining the Rails Foundation as a contributing member.
Read more about the reasons why we decided to join [here](https://rubyonrails.org/2025/1/10/saeloun-joins-rails-foundation), and why you should too!

[Colorize console prompt on non standard environments](https://github.com/rails/rails/pull/53027)  
Currently, the Rails console prompt is colored according to the following rules: blue for dev and test, red of prod.
On non-standard environments (like staging), the prompt is not colored. With this change, it will now be set to Magenta, for these environments.

[Fix running individual app:update commands](https://github.com/rails/rails/pull/54098)  
This change fixes a regression, where the individual `app:update` commands (like `app:update:configs` or `app:update:bin`) could no longer be run on their own, 
as they require the app to be loaded and it no longer was.

[Fix backtrace of ArgumentErrors raised during template rendering](https://github.com/rails/rails/pull/54133)  
Before this fix, any argument error in a template with strict locals would be swallowed and be replaced by an exception with unrelated backtrace, 
which made debugging templates difficult.
With this change, any `ArgumentError` unrelated to strict locals is re-raised, preserving the original backtrace for developers.

[Fix local variable access in layouts](https://github.com/rails/rails/pull/54020)  
Layouts now have access to local variables passed to `render`.
This fixes a very old regression introduced in Rails 5.1!

[Sort table columns by name when dumping schema](https://github.com/rails/rails/pull/53281)  
The table columns inside `schema.rb` are now sorted alphabetically.
Previously they'd be sorted by creation order, which can cause merge conflicts when two branches modify the same table concurrently.

[Update NotificationAssertions's assert_notifcation to match against payload subsets and return matched notification](https://github.com/rails/rails/pull/54126)  
`ActiveSupport::Testing::NotificationAssertions`'s `assert_notification` now matches against payload subsets by default.

Previously the following assertion would fail due to excess key values in the notification payload. Now with payload subset matching, it will pass.

```ruby
assert_notification("post.submitted", title: "Cool Post") do
  ActiveSupport::Notifications.instrument("post.submitted", title: "Cool Post", body: "Cool Body")
end
```

Additionally, you can now persist a matched notification for more customized assertions.

```ruby
notification = assert_notification("post.submitted", title: "Cool Post") do
  ActiveSupport::Notifications.instrument("post.submitted", title: "Cool Post", body: Body.new("Cool Body"))
end
assert_instance_of(Body, notification.payload[:body])
```

[Load configured Active Storage plugins during boot](https://github.com/rails/rails/pull/45100)    
Previously, the parts of Active Storage using `ruby-vips`, `mini_magick`, or `image_processing` would try to load gems only when used. 
This strategy works well because it allows apps that don't need these features to easily ignore them and not have to depend on gems they don't need.

However, the downsides to this strategy was that it requires loading code during requests and that it moves potential error messages into request
logs instead of those errors being immediately visible on boot.

[Introduce RAILS_MASTER_KEY placeholder to CI template](https://github.com/rails/rails/pull/52230)  
The existing CI templates do not work as expected if custom credentials are utilized, or if `config.require_master_key` is enabled.
This change introduces `RAILS_MASTER_KEY` placeholder in generated `ci.yml` files, to address this issue.

[Don't load ActiveStorage::Blob when validating the service](https://github.com/rails/rails/pull/54142)  
For tasks like `assets:precompile` that don't need it, we should not be loading the entire ActiveStorage code, and instead just relevant parts.

[Use the given form in html_options for the hidden field in collection_check_boxes](https://github.com/rails/rails/pull/51746)  
Respect `html_options[:form]` when `collection_checkboxes` generates the hidden `<input>`.

[Deprecate String#mb_chars and AS::Multibyte::Chars](https://github.com/rails/rails/pull/54081)  
These APIs are a relic of the Ruby 1.8 days when Ruby strings weren't encoding aware.

[Deprecate ActiveSupport::Configurable](https://github.com/rails/rails/pull/53970)  
This was only used once internally by Rails, and is now deprecated going ahead.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-01-04%7D...main@%7B2025-01-10%7D)._  

_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250104-20250110) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
