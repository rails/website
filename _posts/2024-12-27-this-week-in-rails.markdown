---
layout: post
title: "This year in Rails"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-12-27
---


This is Greg, Vipul, Wojciech, and Zzak, bringing you the summary of what happened with Rails in the past year. It was a busy year with close to [4000 commits](https://github.com/rails/rails/compare/@%7B2024-01-01%7D...main@%7B2024-12-31%7D) from [555 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240101-20241231) and 50 releases, including Rails 8!

For this year end issue, as a team we each hand-picked some of our favorite pull requests from the year.

[2024 Wrap Up from the Rails Foundation](https://rubyonrails.org/2024/12/18/wrap-up-2024-from-rails-foundation)  
Amanda wrote a summary of what the Rails Foundation has been up to this year and what she is plannning for next year.

[Add default PWA manifest and service worker file](https://github.com/rails/rails/pull/50528)  
Progressive Web Apps got a lot of support in Rails this year starting with freshly generated Rails apps now include a manifest and service worker file to become full-fledged Progressive Web Applications.

[Add allow_browser to set minimum versions for your application](https://github.com/rails/rails/pull/50505)  
Now you can easily specify which browsers you've supported to allow access to your application.

[Add rate limiting to Action Controller via the Kredis limiter type](https://github.com/rails/rails/pull/50490)  
Rails got a built in rate limiter this year. Originally it was dependent on
Kredis, but it was [quickly refactored](https://github.com/rails/rails/pull/50781) to use the Rails cache store.

```ruby
class SessionsController < ApplicationController
  rate_limit to: 10, within: 3.minutes, only: :create
end

class SignupsController < ApplicationController
  rate_limit to: 1000, within: 10.seconds,
    by: -> { request.domain }, with: -> { redirect_to busy_controller_url, alert: "Too many signups!" }, only: :new
end
```

[Generate devcontainer files by default](https://github.com/rails/rails/pull/50914)  
This change generates a `.devcontainer` folder and its contents when creating a new app.
The `.devcontainer` folder includes everything needed to [boot the app and do development in a remote container](https://containers.dev/).
These files can be skipped using the `--skip-devcontainer` option.

[Add customized prompt for Rails console](https://github.com/rails/rails/pull/50796)  
Rails console now indicates the current Rails environment with the name and color (red for production).

[Add Kamal by default to Rails 8 ](https://github.com/rails/rails/pull/51798)  
This PR adds Kamal for deployment by default, which includes generating a Rails-specific `config/deploy.yml`.
This can be skipped using  `--skip-kamal`. Check out more about Kamal on its [official site](https://kamal-deploy.org/).

[Change asset pipeline default to Propshaft in Rails 8](https://github.com/rails/rails/pull/51799)  
Sprockets has served us well, but it's time to hand over the torch to [Propshaft](https://github.com/rails/propshaft) in Rails 8.

[Add a basic sessions generator](https://github.com/rails/rails/pull/52328)  
This change adds a new sessions generator to give a basic start to an authentication system using database-tracked sessions.

```bash
# Generate with...
bin/rails generate session

# Generated files
app/models/current.rb
app/models/user.rb
app/models/session.rb
app/controllers/sessions_controller.rb
app/views/sessions/new.html.erb
db/migrate/xxxxxxx_create_users.rb
db/migrate/xxxxxxx_create_sessions.rb
```

The generator was later renamed to "authentication" generator and got a bunch of improvements.

[Implement new maintenance policy](https://github.com/rails/rails/pull/52471)  
The Rails maintenance policy was updated this year. The main changes are:
 - Releases are maintained by a pre-defined, fixed period of time. One year for bug fixes and two years for security fixes.
 - Distinction between severe security issues and regular security issues is removed.
 - Npm versioning is updated to match not use the pre-release - separator.

[Use Thruster by default for Rails 8](https://github.com/rails/rails/pull/51793)  
[Thruster](https://github.com/basecamp/thruster/) is an asset compression and caching proxy with X-Sendfile acceleration that speeds up simple production-ready deployments of Rails applications.
It runs alongside the Puma and usually behind the Kamal 2 proxy, which offers HTTP/2 and SSL auto-certificates,
to help your app run efficiently and safely on the open Internet.

This change configures the use of Thruster in the Dockerfile by default, starting with Rails 8.

[Add support for SQLite3 full-text search and other virtual tables](https://github.com/rails/rails/pull/52354)  
SQLite3 full-text search and other virtual tables are now supported in Rails.
Previously, adding SQLite3 virtual tables messed up `schema.rb`, but with this change, virtual tables can safely be added using `create_virtual_table`.

[Add Solid Cache](https://github.com/rails/rails/pull/52790)  
Solid Cache will be the new default caching backend for production deployments out of the box in Rails 8.

[Add Solid Queue](https://github.com/rails/rails/pull/52804)  
Configure Solid Queue as the default Active Job backend alongside Solid Cache. Both can be skipped with `--skip-solid`.

[Add Solid Cable](https://github.com/rails/rails/pull/52889)  
This change starts to use [Solid Cable](https://github.com/rails/solid_cable) as the default Action Cable adapter in production, configured as a separate queue database in `config/database.yml`. 
It keeps messages in a table and continuously polls for updates. 

This makes it possible to drop the common dependency on Redis, if it isn't needed for any other purpose. 
Despite polling, the performance of Solid Cable is comparable to Redis in most situations. 
And in all circumstances, it makes it easier to deploy Rails when Redis is no longer a required dependency for Action Cable functionality.

[Silence healthcheck requests from the log](https://github.com/rails/rails/pull/52789)  
Add `Rails::Rack::SilenceRequest` middleware and use it via `config.silence_healthcheck_path = path` to silence requests to "/up".
This prevents the Kamal-required healthchecks from clogging up the production logs.

[Add Parameters#expect to safely filter and require params](https://github.com/rails/rails/pull/51674)  
This PR adds a new way to handle params giving more control over what you expect to receive in your controller actions.
```ruby
# Before
params.require(:table).permit(:attr)

# After
params.expect(table: [ :attr ])
```

[Tidy up the error pages](https://github.com/rails/rails/pull/53045)  
The error pages built into Rails have been updated, here's a preview of the new look:
<img width="1512" alt="Screenshot 2024-09-26 at 10 46 56 AM" src="https://github.com/user-attachments/assets/225dbc1f-309e-4f31-9da7-106f7d312424">

[Support loading SQLite3 extensions](https://github.com/rails/rails/pull/53827)  
The *sqlite3* gem v2.4.0 introduces support for loading extensions passed as a kwarg to *Database.new*. This PR leverages that feature to allow configuration of extensions in the *config/database.yml* file using either filesystem paths or the names of modules that respond to *to_path* method.

[Add ActiveSupport::Testing::NotificationAssertions test helper module](https://github.com/rails/rails/pull/53065)  
With this addition, we can now use various test helper methods for notification assertions:

```ruby
assert_notification("post.submitted", title: "Cool Post") do
  post.submit(title: "Cool Post") # => emits matching notification
end

assert_notifications_count("post.submitted", 1) do
  post.submit(title: "Cool Post")
end

assert_no_notifications("post.submitted") do
  post.destroy
end

notifications = capture_notifications("post.submitted") do
  post.submit(title: "Cool Post") # => emits matching notification
end
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-01-01%7D...main@%7B2024-12-31%7D)._
_We had [555 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240101-20241231) to the Rails codebase this year!_

Merry Christmas and a happy New Year! Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
