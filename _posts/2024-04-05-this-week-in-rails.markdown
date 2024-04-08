---
layout: post
title: "Deferring jobs enqueueing to after the transaction commit, queries count in rendering logs and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-04-05
---


Hi, [Wojtek](https://twitter.com/morgoth85) here exploring this week's changes.

[Rails World 2024 edition website is now live](https://rubyonrails.org/world/2024)  
With tickets going on sale in April.

[Allow to register transaction callbacks outside of a record](https://github.com/rails/rails/pull/51474)  
*ActiveRecord::Base.transaction* now yields an *ActiveRecord::Transaction* object, which allows to register callbacks on it.
```ruby
Article.transaction do |transaction|
  article.update(published: true)
  transaction.after_commit do
    PublishNotificationMailer.with(article: article).deliver_later
  end
end
```

Added *ActiveRecord::Base.current_transaction* which also allows to register callbacks on it.
```ruby
Article.current_transaction.after_commit do
  PublishNotificationMailer.with(article: article).deliver_later
end
```

Add *ActiveRecord.after_all_transactions_commit* callback.

Useful for code that may run either inside or outside a transaction and needs to perform work after the state changes have been properly persisted.
```ruby
def publish_article(article)
  article.update(published: true)
  ActiveRecord.after_all_transactions_commit do
    PublishNotificationMailer.with(article: article).deliver_later
  end
end
```

[Automatically delay Active Job enqueues to after commit](https://github.com/rails/rails/pull/51426)  
A common mistake with Active Job is to enqueue jobs from inside a transaction, causing them to potentially be picked and ran by another process, before the transaction is committed, which result in various errors.

```ruby
Topic.transaction do
  topic = Topic.create
  NewTopicNotificationJob.perform_later(topic)
end
```

Now Active Job will automatically defer the enqueuing to after the transaction is committed, and drop the job if the transaction is rolled back.

Various queue implementations can choose to disable this behavior, and users can disable it, or force it on a per job basis:
```ruby
class NewTopicNotificationJob < ApplicationJob
  self.enqueue_after_transaction_commit = :never # or :always or :default
end
```

[Add queries count to template rendering instrumentation](https://github.com/rails/rails/pull/51457)  
There is often a need to quickly see how many SQL queries the current action produced. For example, to quickly check if N+1 was solved or if the caching is working and so the number of queries reduced etc. This can be done manually by inspecting the logs and counting the number of queries, but for largish actions with tens-hundreds of SQL queries this is not a simple task.

```
# Before
Completed 200 OK in 3804ms (Views: 41.0ms | ActiveRecord: 33.5ms | Allocations: 112788)
# After
Completed 200 OK in 3804ms (Views: 41.0ms | ActiveRecord: 33.5ms (2 queries, 1 cached) | Allocations: 112788)
```

[Add the ability to ignore counter cache columns while they are backfilling](https://github.com/rails/rails/pull/51453)  
Starting to use counter caches on existing large tables can be troublesome, because the column values must be backfilled separately of the column addition (to not lock the table for too long) and before the use of *:counter_cache* (otherwise methods like *size/any?*, which use counter caches internally, can produce incorrect results). People usually use database triggers or callbacks on child associations while backfilling before introducing a counter cache configuration to the association.

Now, to safely backfill the column, while keeping the column updated with child records added/removed, use:
```ruby
class Comment < ApplicationRecord
  belongs_to :post, counter_cache: { active: false }
end
```

While the counter cache is not "active", the methods like *size/any?* will not use it, but get the results directly from the database. After the counter cache column is backfilled, simply remove the *{ active: false }* part from the counter cache definition, and it will now be used by the mentioned methods.

[Retry Actionable Error when running tests](https://github.com/rails/rails/pull/50941)  
Allow Actionable Errors encountered when running tests to be retried. This feature will only be present on interactive terminals.

[Raise named exception when database reports an invalid version](https://github.com/rails/rails/pull/51478)  
When the MySQL database returns an invalid version string the *ActiveRecord::ActiveRecordError* error will now be raised.

[Make ActiveSupport::BacktraceCleaner copy filters and silencers on dup and clone](https://github.com/rails/rails/pull/51447)  
 Previously the copy would still share the internal silencers and filters array, causing state to leak.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-03-29%7D...main@%7B2024-04-05%7D)._
_We had [16 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240329-20240405) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
