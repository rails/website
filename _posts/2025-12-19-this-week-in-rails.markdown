---
layout: post
title: "Rails Luminary, modern approach to CSRF and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-12-19
---


Hi, [Wojtek](https://x.com/morgoth85) here. The Rails Community is not slowing down giving us another week of great news and features.

[Marco Roth as 2025 Rails Luminary](https://rubyonrails.org/2025/12/17/marco-roth-2025-rails-luminary)  
If you attended any Ruby/Rails conference this year, there are high chances you met Marco in person sharing his passion and if you didn't try his excellent [herb](https://herb-tools.dev/) gem yet, then install it and run in your Rails app: *herb analyze app/views* - for sure it will find a bunch of small HTML mistakes for you.

Congratulations Marco, well deserved!

[Use a modern approach for cross-site request forgery protection](https://github.com/rails/rails/pull/56350)  
Modern browsers send the *Sec-Fetch-Site* header to indicate the relationship between request initiator and target origins.
Rails now uses this header to verify same-origin requests without requiring authenticity tokens.
Two verification strategies are available via *protect_from_forgery* using:
* `:header_only` - Uses *Sec-Fetch-Site* header only. Rejects requests without a valid header. Default for new Rails 8.2 applications.
* `:header_or_legacy_token` - Uses *Sec-Fetch-Site* header when present, falls back to authenticity token verification for older browsers.

Configure trusted origins for legitimate cross-site requests (OAuth callbacks, third-party embeds) with *trusted_origins*:
```ruby
protect_from_forgery trusted_origins: %w[ https://accounts.google.com ]
```

[Deprecate verify_authenticity_token](https://github.com/rails/rails/pull/56369)  
*verify_authenticity_token* was renamed to *verify_request_for_forgery_protection*, to more accurately reflect its purpose, now that an authenticity token is not necessarily verified.

[Active Support notifications for CSRF warnings](https://github.com/rails/rails/pull/56355)  
Switches from direct logging to event-driven logging, allowing others to subscribe to and act on CSRF events.

New notification events:
* csrf_token_fallback.action_controller
* csrf_request_blocked.action_controller
* csrf_javascript_blocked.action_controller

[Add Rails.app alias for Rails.application](https://github.com/rails/rails/pull/56403)  
Particularly helpful when accessing nested accessors inside application code, like when using *Rails.app.credentials*.

[Implement exclude keys for Action Controller Live execution sharing](https://github.com/rails/rails/pull/56393)  
Add *config.action_controller.live.streaming_excluded_keys* to control execution state sharing in *ActionController::Live*.

When using *ActionController::Live*, actions are executed in a separate thread that shares state from the parent thread.
This new configuration allows applications to opt-out specific state keys that should not be shared.
This is useful when streaming inside a *connected_to* block, where you may want the streaming thread to use its own database connection context.

```ruby
# config/application.rb
config.action_controller.live.streaming_excluded_keys = [:active_record_connected_to_stack]
```

By default, all keys are shared.

[Add controller action source location to routes inspector](https://github.com/rails/rails/pull/56361)  
The routes inspector now shows where controller actions are defined.
In *rails routes --expanded*, a new "Action Location" field displays the file and line number of each action method.

On the routing error page, when *RAILS_EDITOR* or *EDITOR* is set, a clickable ✏️ icon appears next to each *Controller#Action* that opens the action directly in the editor.

[Yield key to Parameters fetch method](https://github.com/rails/rails/pull/56400)  
The *Hash#fetch* method yields the key to the block, so this commit changes the *ActionController::Parameters#fetch* behavior to do the same.

[Upgrade minitest to version 6](https://github.com/rails/rails/pull/56207)  
This bumps the dependency on minitest to 6.0+ and adds a *minitest-mock* dependency.
Support for minitest 6 was added in [this pull request](https://github.com/rails/rails/pull/56202).

[Include Ruby prerelease string in generated .ruby-version file](https://github.com/rails/rails/pull/56365)  
When using Ruby prerelease like 4.0.0-preview2, rails new generated a *.ruby-version* file that only contained 4.0.0 without the -preview2 suffix. This made Ruby version managers like *asdf* or *mise* error out as there was no stable release yet.

[Do not clean directories directly under the application root with backtrace cleaner](https://github.com/rails/rails/pull/56333)  
Improved *Rails.backtrace_cleaner* so that most paths located directly under the application's root directory are no longer silenced.

[Fix unique index generator for token migrations](https://github.com/rails/rails/pull/56398)  
Previously it was possible to generate it twice.

[Fix the file input tag to include the accept option as an array](https://github.com/rails/rails/pull/56389)  
It now properly joins array values with "," delimiter.
```ruby
file_field("import", "file", { accept: ["image/*", "video/*"] })
```

[Fix delegate and delegate_missing_to work in Basic Object subclasses](https://github.com/rails/rails/pull/56353)  
Previously it would raise a *SystemStackError* when attempting to raise a *DelegationError* from a *BasicObject* subclass, due to infinite recursion in *method_missing*.

[Fix request load leak when building middleware stack](https://github.com/rails/rails/pull/56349)  
Fixes *action_dispatch_request* early load hook call when building Rails app middleware.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-12-12%7D...main@%7B2025-12-19%7D)._  
_We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251212-20251219) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
