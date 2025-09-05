---
layout: post
title: "Rendering Markdown is real, plus new database connection pool options"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-09-05
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Rails 8.1 Beta 1 lands](https://rubyonrails.org/2025/9/4/rails-8-1-beta-1)  
The first beta release was cut for Rails 8.1, see the post for full details.

[Rails World 2025 Opening Keynote](https://www.youtube.com/watch?v=gcwzWzC7gUA)  
Part of the newsletter team is enjoying Rails World in Amsterdam, say hi to them if you attend. If you (like me) you couldn't go, the first keynote is already up!

[Introduce new database configuration options for managing connection pools](https://github.com/rails/rails/pull/54175)  
This PR adds `keepalive`, `max_age`, and `min_connections` -- and renames `pool` to `max_connections` to match.
There are no changes to default behavior, but these allow for more specific control over pool behavior.

[Move "LIMIT" validation from query generation to when "limit()" is called.](https://github.com/rails/rails/pull/55585)  
While part of Arel's private API, the removal of `sanitize_limit` is possibly worth noting here.

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

[Action Controller now raises "TooManyRequests" error from rate limiting](https://github.com/rails/rails/pull/55501)  
Requests that exceed the rate limit now raise an `ActionController::TooManyRequests` error.
Previously this would call `head :too_many_requests`, but now you can use `rescue_from` to handle these in your app.

[Deprecate built-in Sidekiq adapter](https://github.com/rails/rails/pull/53058)  
Since the Sidekiq adapter was successfully merged upstream we no longer need to maintain it internally in Rails.
If you're using this adapter, upgrade to `sidekiq` 7.3.3 or later to use the `sidekiq` gem's adapter.

[Optimize Active Job argument serialization by ~5x](https://github.com/rails/rails/pull/55583)  
An interesting change for sure, this may impact users with a custom serializer, and maybe not set in stone.

[Add namespace setter and getter to Active Support's Cache Store](https://github.com/rails/rails/pull/55580)  
In development or after initialization a user may want to inspect the current cache namespace. They may also wish to change it. This PR adds this functionality.

[Add "parallel_worker_id" helper for running parallel tests](https://github.com/rails/rails/pull/55565)  
This allows users to know which worker they are currently running in, via `ActiveSupport::TestCase.parallel_worker_id`.

[Enable debug mode for Event Reporter in local environments](https://github.com/rails/rails/pull/55566)  
Rails will now emit debug events by default in development, and test so calls to `Rails.event.debug` should be visible.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-08-29%7D...main@%7B2025-09-05%7D)._
_We had [27 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250829-20250905) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
