---
layout: post
title: "This Year in Rails"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-12-26
---

Happy Holidays, this is Emmanuel, Greg, Vipul, Wojciech, and Zzak, bringing you the summary of what happened with Rails in the past year. It was a busy year with close to 2700 commits from 430 contributors and 14 releases, including Rails 8.1! The Rails Foundation also released a [wrap up of 2025](https://rubyonrails.org/2025/12/24/2025-wrap-up-rails-foundation), and here are the most noteworthy changes landed in Rails this year.

[Fix inconsistency between “delete_all” & “update_all” allowed methods](https://github.com/rails/rails/pull/54231)  
After this change, trying to call update_all with distinct or a CTE (with, with_recursive) is deprecated and will raise an error in Rails 8.2. This is consistent with the behavior of delete_all.

[Add a script for using dev containers outside VSCode](https://github.com/rails/rails/pull/54285)  
I you want to use the devcontainer info, but don’t want to use VSCode, the small script added by this pull request will be handy. It reads the devcontainer JSON file and runs docker commands based on the information in the JSON file. 
The the devcontainer script also [works with podman](https://github.com/rails/rails/pull/54378). If you have it installed, the devcontainer script will use it, otherwise it will fall back to Docker. 
[Add a default bin/bundle-audit configuration](https://github.com/rails/rails/pull/54695)  
This pull request adds bin/bundler-audit and config/bundler-audit.yml for discovering and managing known security problems with app gems.

[Add a config for automatically including nonce in javascript_tag, javascript_include_tag and stylesheet_link_tag](https://github.com/rails/rails/pull/53835)  
This pull requests adds a new configuration, content_security_policy_nonce_auto for automatically adding a nonce to the tags affected by the directives specified by the content_security_policy_nonce_directives configuration option.

[Structured CI with bin/ci](https://github.com/rails/rails/pull/54693)  
Introduce bin/ci to standardize CI workflows based on a new DSL for declaring workflow steps in config/ci.rb. bin/ci runs your all tests, linters, and security scanners. And it optionally signs off on your work by giving your PR a green status.

[Introduce with_default_isolation_level in ActiveRecord](https://github.com/rails/rails/pull/54836)  
This change introduces the with_default_isolation_level method in ActiveRecord, allowing to set a default database isolation level for specific code blocks. This is particularly useful when migrating large applications to a new isolation level, as it enables enforcing the desired level in targeted areas, such as base controllers, facilitating smoother transitions and ensuring consistent transaction behavior.
```ruby
class ApiV2Controller < ApplicationController
  around_action :set_isolation_level

  def set_isolation_level
    Product.with_default_isolation_level(:read_committed) do
      yield
    end
  end
end
# forces all controllers that subclass from ApiV2Controller to start getting new isolation level
```
[Introduce Active Job Continuations](https://github.com/rails/rails/pull/55127)  
A job can use Continuations by including the `ActiveJob::Continuable` concern. Continuations split jobs into steps. When the queuing system is shutting down jobs can be interrupted and their progress saved.
```ruby
class ProcessImportJob
  include ActiveJob::Continuable

  def perform(import_id)
    @import = Import.find(import_id)

    # block format
    step :initialize do
      @import.initialize
    end

    # step with cursor, the cursor is saved when the job is interrupted
    step :process do |step|
      @import.records.find_each(start: step.cursor) do |record|
        record.process
        step.advance! from: record.id
      end
    end

    # method format
    step :finalize

    private
      def finalize
        @import.finalize
      end
  end
end
```
[Deprecated associations](https://github.com/rails/rails/pull/55285)  
You can now mark associations as deprecated using:
```ruby
has_many :posts, deprecated: true
```
Active Record will report any usage of the deprecated association. Three reporting modes are supported: `:warn` (default), `:raise`, and `:notify`. You can also enable or disable backtraces (disabled by default).

[Allow hosts redirects from hosts Rails configuration](https://github.com/rails/rails/pull/55420)  
With this change, it is possible to allow hosts redirects from the Rails configuration:
```ruby
config.action_controller.allowed_redirect_hosts << "example.com"
```

[Add relative_time_in_words helper to ActionView](https://github.com/rails/rails/pull/55405)  
This pull request introduces a relative_time_in_words helper:
```ruby
relative_time_in_words(3.minutes.from_now) # => "in 3 minutes"
relative_time_in_words(3.minutes.ago) # => "3 minutes ago"
relative_time_in_words(10.seconds.ago, include_seconds: true) # => "less than 10 seconds ago"
```

[Add credentials:fetch command](https://github.com/rails/rails/pull/53119)  
This new command allows fetching the value of a credential from the Kamal 2 credentials file.

```ruby
$ bin/rails credentials:fetch kamal_registry/password
```

[Structured Event Reporting in Rails](https://github.com/rails/rails/pull/55334)  
Rails adds a first‑class Event Reporter with a unified API for structured telemetry. Access it via Rails.event and emit events with context and tags:
```ruby
Rails.event.set_context(request_id: "abc123", shop_id: 456)

Rails.event.tagged("graphql") do
  Rails.event.notify("user.signup", user_id: 123, email: "user@example.com")
end
Applications subscribe to events and choose an encoder (e.g., JSON) for output:

class MySubscriber
  def emit(event)
    encoded = ActiveSupport::EventReporter.encoder(:json).encode(event)
    StructuredLogExporter.export(encoded)
  end
end

Rails.event.subscribe(MySubscriber.new)
```

[Add deliver_all_later to enqueue multiple emails at once](https://github.com/rails/rails/pull/55448)  
You can now enqueue many emails in one go—reducing round trips to your queue backend. Build an array of `MessageDelivery` objects and push them at once. Options (like `queue:` ) are forwarded to the jobs. Under the hood this uses `ActiveJob.perform_all_later` , and if the adapter doesn’t support bulk enqueue it gracefully falls back to enqueuing individually. 

```ruby
# Build deliveries
user_emails = User.find_each.map { |user| Notifier.welcome(user) }

# Enqueue all at once
ActionMailer.deliver_all_later(user_emails)
```

[Allow current_page? to match against specific HTTP method(s) with a method: option](https://github.com/rails/rails/pull/55286)  
Before this chage, the `current_page?` helper only matched on GET and HEAD requests, but with the new optional method option, it will match against explicit HTTP methods.

[Add markdown mime type and renderer](https://github.com/rails/rails/pull/55511)  
Add .md/.markdown as Markdown extensions and add a default `markdown:` renderer:
```ruby
class Page
  def to_markdown
    body
  end
end

class PagesController < ActionController::Base
  def show
    @page = Page.find(params[:id])

    respond_to do |format|
      format.html
      format.md { render markdown: @page }
    end
  end
end
```

[Don’t generate system tests by default](https://github.com/rails/rails/pull/55743)  
Starting with Rails 8.1, scaffolds no longer generate system tests by default. System tests should be reserved for critical user paths due to their slower execution and higher maintenance cost. To include system tests when scaffolding, use the `--system-tests=true` option.


[Support virtual (not persisted) generated columns on PostgreSQL 18+](https://github.com/rails/rails/pull/55142)  
This pull request adds support for virtual generated columns on PostgreSQL 18 and later. Usage example:
```ruby
create_table :users do |t|
  t.string :name
  t.virtual :lower_name,  type: :string,  as: "LOWER(name)", stored: false
  t.virtual :name_length, type: :integer, as: "LENGTH(name)"
end
```

[Make reset token expiry configurable in has_secure_password](https://github.com/rails/rails/pull/55574)  
Previously the password reset token was default to 15 minutes, but is now configurable:
```ruby
has_secure_password reset_token: { expires_in: 1.hour }
```
[Add ability to use a block when rendering a collection](https://github.com/rails/rails/pull/56044)  
When using a partial that yields, we could already use this partial with render partial: or render @model. Now we can do that with collections as well, writing code like this:
```ruby
// index.html.erb
<%= render @posts do |post| %>
  <%= link_to "Edit", [:edit, post] %>
<% end %>

// _post.html.erb
<article class="post">
  <h1><%= post.title %></h1>
  <%= yield post if block_given? %>
</article>
```
[Support text/markdown format in DebugExceptions middleware](https://github.com/rails/rails/pull/56180)  
Add support for returning markdown-formatted error responses when the HTTP client prefers text/markdown in the Accept header. When text/markdown is requested, the middleware renders the existing text templates with Content-Type: text/markdown instead of text/html. This allows CLI tools (e.g., Claude Code) and other clients to receive byte/token-efficient error output in markdown format.

[ActiveStorage immediate variants](https://github.com/rails/rails/pull/51951)  
Attachment variants gain the process: :immediately option:
```ruby
has_one_attached :avatar_with_immediate do |attachable|
  attachable.variant :thumb, resize_to_limit: [4, 4], process: :immediately
end
```
Attachments with process: :immediately variants now [eagerly analyze during validation](https://github.com/rails/rails/pull/56327), making [metadata like image dimensions available for custom validations](https://github.com/rails/rails/pull/56335):
```ruby
def validate_avatar_dimensions
  if avatar.metadata[:width] < 200 || avatar.metadata[:height] < 200
    errors.add(:avatar, "must be at least 200x200")
  end
end
```
Immediate variant processing and blob analysis use local files directly instead of re-downloading after upload. Applies when attaching uploadable io, not when attaching an existing Blob.

[Use a modern approach for cross-site request forgery protection](https://github.com/rails/rails/pull/56350)  
Modern browsers send the Sec-Fetch-Site header to indicate the relationship between request initiator and target origins. Rails now uses this header to verify same-origin requests without requiring authenticity tokens. Two verification strategies are available via protect_from_forgery using:

`:header_only` - Uses Sec-Fetch-Site header only. Rejects requests without a valid header. Default for new Rails 8.2 applications.
`:header_or_legacy_token` - Uses Sec-Fetch-Site header when present, falls back to authenticity token verification for older browsers.
Configure trusted origins for legitimate cross-site requests (OAuth callbacks, third-party embeds) with trusted_origins:

```ruby
protect_from_forgery trusted_origins: %w[ https://accounts.google.com ]
```
[Add Rails.app.creds to provide combined credentials lookup in ENV and encrypted file](https://github.com/rails/rails/pull/56404)  
Many applications use a mix of ENV and encrypted keys to store cloud service keys and the like. Depending on the service, it might make sense only to inject the ENV during Docker boot or to keep it as part of the Rails encrypted credentials. And applications might migrate from one form to another.
But whether ENV or encrypted keys are both used or you wish to migrate in the future, you shouldn't have to change your application code.

So these combined credentials are now available via `Rails.app.creds`.

```ruby
Rails.app.creds.require(:db_host) # ENV.fetch("DB_HOST") || Rails.app.credentials.require(:db_host)
Rails.app.creds.require(:aws, :access_key_id) # ENV.fetch("AWS__ACCESS_KEY_ID") || Rails.app.credentials.require(:aws, :access_key_id)
Rails.app.creds.option(:cache_host) # ENV["CACHE_HOST"] || Rails.app.credentials.option(:cache_host)
Rails.app.creds.option(:cache_host, default: "cache-host-1") # ENV["CACHE_HOST"] || Rails.app.credentials.option(:cache_host) || "cache-host-1"
Rails.app.creds.option(:cache_host, default: -> { "cache-host-1" }) # ENV["CACHE_HOST"] || Rails.app.credentials.option(:cache_host) || "cache-host-1"
```
You can also access just envs using the new API via `Rails.app.envs`, which uses the same require/option API. And finally, you can set a custom set of backends for Rails.app.creds by assigning your own combined configuration:

```ruby
Rails.app.creds = ActiveSupport::CombinedConfiguration.new(Rails.app.envs, OnePasswordConfiguration.new)
```

[Add Rails.app alias for Rails.application](https://github.com/rails/rails/pull/56403)  
This is especially so when it's followed by a long name, like `credentials`. Now that's `Rails.app.credentials`. Reads a lot more pleasantly too.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-01-01%7D...main@%7B2025-12-31%7D)._
_We had [430 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250101-20251231) to the Rails codebase this past year!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
