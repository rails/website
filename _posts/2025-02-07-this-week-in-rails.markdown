---
layout: post
title: "Support joins in update_all for PG and SQLite and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-02-07
---


Hi, [Wojtek](https://x.com/morgoth85) here presenting you this week's changes in the Rails codebase.

[Clio joins the Rails Foundation](https://rubyonrails.org/2025/2/3/clio-joins-rails-foundation)  
We’re excited to welcome [Clio](https://www.clio.com/) as the newest Contributing Member of the Rails Foundation.

[Support joins in update_all for Postgresql and SQlite](https://github.com/rails/rails/pull/53950)  
Previously when generating update queries with one or more JOIN clauses,
Active Record would use a sub query which would prevent to reference the joined
tables in the *SET* clause, for instance:

```ruby
Comment.joins(:post).update_all("title = posts.title")
```

This is now supported as long as the relation doesn't also use a *LIMIT*, *ORDER* or *GROUP BY* clause. This was supported by the MySQL adapter for a long time.

[Rate limit password resets in auth generator](https://github.com/rails/rails/pull/54442)  
This helps mitigate abuse from attackers spamming the password reset form.

[Enable statement-cached queries to be retryable](https://github.com/rails/rails/pull/54436)  
Enable automatically retrying idempotent association queries on connection errors.

[Add allow_retry to sql.active_record](https://github.com/rails/rails/pull/54454)  
This enables identifying queries which queries are automatically retryable on connection errors.

[Migrate multiple DBs with pending migration action](https://github.com/rails/rails/pull/54456)  
Fix migrating multiple databases with *ActiveRecord::PendingMigration* action.
  
[Speed up Docker build](https://github.com/rails/rails/pull/54428)  
By removing recursive *chown* command in the default Dockerfile template, docker build should now be a bit faster.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-01-31%7D...main@%7B2025-02-07%7D)._
_We had [19 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250131-20250207) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
