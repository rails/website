---
layout: post
title: "Improvements to routing, Active Storage configs, time tracking, and more"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-09-18
---


Hey, [Emmanuel Hayford](https://x.com/siaw23) here with the latest from the Rails codebase. Let's get to it!

Oh! In case you missed it, all the talks from #RailsWorld 2025 are [now available online here](https://www.youtube.com/playlist?list=PLHFP2OPUpCebhAv1ZWb_978cTl1o-yue-).


[Fix SCRIPT_NAME handling for engines mounted at root.](https://github.com/rails/rails/pull/55668) 
When an engine is mounted at `/` and `SCRIPT_NAME` is in use, URL helpers were incorrectly dropping the script name from generated URLs. The issue was traced to `RoutesProxy#merge_script_names`, which didn’t handle the edge case where the script name was just `/`. The fix trims trailing slashes from `new_script_name`, restoring correct URL generation for apps deployed under a path prefix.


[Generalize `:rich_text_area` Capybara selector](https://github.com/rails/rails/pull/55666)  
The `:rich_text_area` Capybara selector no longer depends on a `<trix-editor>` element and instead looks for `role="textbox"` and `contenteditable` attributes. This change makes it easier to support other Action Text–capable WYSIWYG editors. The `fill_in_rich_textarea` test helper was also updated to use the `.value` property on `<trix-editor>` (available since trix v2.1.7) before falling back to `editor.loadHTML()`.


[Show engine routes in `/rails/info/routes`](https://github.com/rails/rails/pull/55635) 
Engine routes are now displayed in `/rails/info/routes` alongside application routes. Previously, only the main application routes were shown because `_routes.routes` excluded engine routes. This change uses `Rails.application.routes.routes`, ensuring that mounted engines appear in the routes output as well.


[Restore Active Storage config to disable variants and analyzers](https://github.com/rails/rails/pull/55303) 
Active Storage now lets you fully configure which analyzers and variant processor to use. You can clear out analyzers entirely or provide your own:

    ```ruby
    # ActiveStorage.analyzers can be set to an empty array:
    config.active_storage.analyzers = []
    # => ActiveStorage.analyzers = []

    # or use custom analyzer:
    config.active_storage.analyzers = [ CustomAnalyzer ]
    # => ActiveStorage.analyzers = [ CustomAnalyzer ]
    ```

    If no configuration is provided, it will use the default analyzers.

    You can also disable variant processor to remove warnings on startup about missing gems.

    ```ruby
    config.active_storage.variant_processor = :disabled
    ```


[Fix time attribute dirty tracking with timezone conversions](https://github.com/rails/rails/pull/55298) 
Time-only attributes could be incorrectly marked as changed when assigning the same time, due to timezone conversions shifting the hidden date part. The fix normalizes time values to a fixed date (`2000-01-01`) during conversions, preventing false dirty tracking while leaving datetime attributes unchanged.

Before (Bug)
  ```ruby
  # Configuration
  Time.zone = "Tokyo"
  ActiveRecord.default_timezone = :utc

  user = User.create!(created_at: "14:30")
  user.reload

  user.created_at = "14:30"
  user.changed_attribute_names_to_save
  # => ["created_at"] # Incorrectly marked as changed!
  ```

After (Fixed)
  ```ruby
  # Configuration
  config.active_record.use_fixed_date_for_time_attributes = true

  user = User.create!(created_at: "14:30")
  user.reload

  user.created_at = "14:30"
  user.changed_attribute_names_to_save
  # => [] # Correctly not marked as changed
  ```


[RateLimiting: support method names for `:by` and `:with`](https://github.com/rails/rails/pull/53146) 
Prior to this commit, `:by` and `:with` options only supported callables. This commit aims to bring rate limiting closer in parity to callbacks declarations like `before_action` and `after_action` by supporting instance method names as well.

Without this change, multi-line customized callables can make declarations difficult to read. Similarly, shared customization would require a local variable to be re-used. For example:

  ```ruby
  rate_limiting_bucket = -> { ... }

  rate_limit to: 3, within: 1.minutes, by: rate_limiting_bucket
  rate_limit to: 10, within: 5.minutes, by: rate_limiting_bucket
  rate_limit to: 30, within: 10.minutes,
    by: -> {
      # ...
      # multiple lines
      # ...
    },
    with: -> {
      # ...
      # multiple lines
      # ...
    }
  ```


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-09-12%7D...main@%7B2025-09-19%7D)._
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250912-20250919) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
