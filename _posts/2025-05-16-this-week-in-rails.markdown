---
layout: post
title: "RFC-9111 style Cache-Control directives hit or miss"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-05-16
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

**Message from the Rails Foundation**  
While Rails World sold out quickly this year, a friendly reminder that the sessions will be recorded and published on YouTube quickly- the Opening and Closing Keynotes immediately, with all other sessions published shortly thereafter.  
If you didn’t manage to get a ticket, this is a fantastic opportunity to check out some of the other Ruby events taking place this year: <https://rubyconferences.org/>

[Add ActiveRecord::Result#affected_rows](https://github.com/rails/rails/pull/55060)  
The result returned from calling [exec_query](https://edgeapi.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/DatabaseStatements.html#method-i-exec_query) now provides a method to get the number of affected rows.

```ruby
# Get the number of rows affected by the query:
result = ActiveRecord::Base.lease_connection.exec_query <<~SQL.squish
  INSERT INTO posts (title, body)
  VALUES ("title_1", "body_1"), ("title_2", "body_2")
SQL
result.affected_rows
# => 2
```

[Drop vendored Trix files in favor of the "action_text-trix" gem](https://github.com/rails/rails/pull/55058)  
This change shouldn't have affect on applications, but makes maintenance easier for the Rails team.
Meaning that bug fixes or security patches to Trix no longer have to wait for a Rails release to be available for application developers.

[Bump Trix to v2.1.15](https://github.com/rails/rails/pull/55046)  
Speaking of which, [CVE-2025-46812](https://github.com/advisories/GHSA-mcrw-746g-9q8h) was fixed in the latest release of Trix. Please update your applications as soon as possible.

[Only load from CGI when required for Ruby 3.5](https://github.com/rails/rails/pull/55037)  
By [retiring CGI](https://bugs.ruby-lang.org/issues/21258) from Ruby's Standard Library of bundled gems, Rails was updated to load the `cgi/escape` which is still supported without emitting warnings from the other parts of the gem.

[Add support for Cache-Control request directives](https://github.com/rails/rails/pull/55033)  
This PR adds support for various cache control directives in requests to control how caching is handled by the HTTP client.
Based on [RFC-9111](https://www.rfc-editor.org/rfc/rfc9111.html#name-request-directives) which details strategies for `max-age`, `max-stale`, `min-fresh`, and `no-cache`.

```ruby
def show
  if request.cache_control_directives.only_if_cached?
    @article = Article.find_cached(params[:id])
    return head(:gateway_timeout) if @article.nil?
  else
    @article = Article.find(params[:id])
  end
  render :show
end
```


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-05-09%7D...main@%7B2025-05-16%7D)._
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250509-20250516) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
