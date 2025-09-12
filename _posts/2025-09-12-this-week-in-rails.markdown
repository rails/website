---
layout: post
title: "ActiveJob serialize array improvements, rails/info/routes additions and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-09-12
---

Hi everyone, it's [Vipul](https://www.saeloun.com/team/vipul/). Let's explore this week's changes in the Rails codebase!

[Do not add seed step to config/ci if active record is skipped](https://github.com/rails/rails/pull/55651)  
This PR ensures that in CI configuration templates, Rails does **not** add a `db:seed` step when Active Record is skipped. 
This prevents CI failures or unnecessary steps for applications that are database-free or that intentionally disable Active Record.

[AJ serialize array](https://github.com/rails/rails/pull/55662)  
Improves how arrays are handled in ActiveJob argument serialization. 
Ensures serialized arrays round-trip correctly and fixes inconsistencies/bugs in how arrays were converted or stored.

[Restore exact behavior of `AJ Arguments.serialize`](https://github.com/rails/rails/pull/55662)  
Brings back previous behavior of the `ActiveJob::Arguments.serialize` method to avoid breaking changes, so that apps depending on old behavior won’t be surprised by serialization differences.

[Job-date: fix date/time parsing in job arguments](https://github.com/rails/rails/pull/55661)  
Fixes situations where when `ActiveSupport.parse_json_times` is enabled, date/time values in job arguments could end up as plain strings. 
Now, dates/times are properly parsed back into `Time` (or appropriate time objects), preserving the intended type through serialization.

[Suppress debug events in tests “ac no debug events in test”](https://github.com/rails/rails/pull/55657)  
Updates ActionController (or related) test behavior so that debug-level events are not emitted during test runs. Less log noise, more predictable test outcomes.

[Fixes and refinements to `deliver_all_later`](https://github.com/rails/rails/pull/55659)  
Multiple improvements ensure mailers scheduled with `deliver_all_later` are never processed inline or duplicated, while also adding support for passing job options like queue and priority for more reliable background delivery.

[Emit structured debug events in development only](https://github.com/rails/rails/pull/55657)  
Changes so that structured debug events are only emitted in the **development** environment, reducing overhead and unwanted information in test/production environments.

[Show engine routes in `/rails/info/routes`](https://github.com/rails/rails/pull/55635)  
Enhances the routes/info page (`/rails/info/routes`) to include routes from any  mounted engines in the application, making debugging easier when engines are used.

[Optimize getting primary keys for PostgreSQL](https://github.com/rails/rails/pull/55654)  
Improves efficiency of retrieving primary keys in PostgreSQL (faster introspection of table schemas, possibly making migrations or reflection-based operations snappier).

[Fix Bootsnap precompilation in Docker builds](https://github.com/rails/rails/pull/55636)  
Addresses issues with precompiling Bootsnap cache inside Docker builds; ensures that the compile cache setup works in containerized environments correctly.

[Allow disabling `action_controller.logger`](https://github.com/rails/rails/pull/55625)  
Adds support to disable the ActionController logger by setting it to `nil` or `false`. Useful in environments where full logging is too verbose.

[Fix Auth generator to skip tests unless Minitest is used](https://github.com/rails/rails/pull/55495)  
Updates the authentication generator to only generate test files if the app is using Minitest. Keeps generator output cleaner for users of other test frameworks.

[Improve route visualizer regex labels](https://github.com/rails/rails/pull/54558)  
Makes route visualizer output more readable by adding better labels to regex/constrained routes; helps developers see what patterns or constraints are applied.

---

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-09-06%7D...main@%7B2025-09-12%7D)._

_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250906-20250912) to the Rails codebase this past week!_

Until next time!
