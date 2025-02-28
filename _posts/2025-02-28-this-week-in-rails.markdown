---
layout: post
title: "Ignoring indexes in MySQL has never been so easy..."
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-02-28
---


Hey, [zzak](https://github.com/zzak) here. Last week was a short one, so we took the week off, let's catch up.

Heads up: the **Rails World CFP** will open on **March 11th**.  
The 2025 landing page is currently being built, but if you are going to submit a talk, keep an eye on: [rubyonrails.org/world/](https://rubyonrails.org/world)

[Add Podman instructions for devcontainers](https://github.com/rails/rails/pull/54572)  
This is not necessarily a change to Rails itself, but worth noting that you don't have to rely on Docker to use devcontainers and we actually use Podman to test the `rails new` flow in CI as well.

[Add login_as(user) testing helper when generating authentication](https://github.com/rails/rails/pull/53708)  
When using the Authentication generator, you now get `sign_in_as(user)` and `sign_out` test helper methods.

[Introduce "ActiveSupport::ErrorReport#add_middleware"](https://github.com/rails/rails/pull/54512)  
This PR introduces the concept of a middleware stack to the ErrorReporter. Middleware are used to add or mutate the context which the error being reported occurs, and can be added using [`add_middleware`](https://edgeapi.rubyonrails.org/classes/ActiveSupport/ErrorReporter.html#method-i-add_middleware).

[Add "report" option to "ActiveJob::Base#retry_on" and "#discard_on"](https://github.com/rails/rails/pull/54541)  
When using Active Job you can now specify to report errors to [ErrorReporter](https://edgeapi.rubyonrails.org/classes/ActiveSupport/ErrorReporter.html) when retrying or discarding jobs occurs.

[Support disabling indexes for MySQL v8+ and MariaDB v10.6+](https://github.com/rails/rails/pull/54332)  
This PR takes advantage of "invisible" or "ignored" indexes in newer versions of MySQL and MariaDB, which can be managed using migrations.  
See the [MySQL](https://dev.mysql.com/blog-archive/mysql-8-0-invisible-indexes/) or [MariaDB](https://mariadb.com/kb/en/ignored-indexes/) docs for more.

[Add column types to "ActiveRecord::Result" for SQLite3](https://github.com/rails/rails/pull/54594)  
When using the SQLite3 adapter you can now get the column type information from a query using [column_types](https://edgeapi.rubyonrails.org/classes/ActiveRecord/Result.html#method-i-column_types).

[Raise "ActiveRecord::ReadOnlyError" when pessimistically locking with a readonly role](https://github.com/rails/rails/pull/54580)  
This PR ensures that calling `lock!` when [`current_preventing_writes`](https://edgeapi.rubyonrails.org/classes/ActiveRecord/Core.html#method-c-current_preventing_writes) is enabled will raise an error to improve the usability in this scenario.

[Ensure "reverse_order" respects "implicit_order_column"](https://github.com/rails/rails/pull/54607)  
This PR makes sure that `reverse_order` takes into account the model [`implicit_order_column`](https://edgeapi.rubyonrails.org/classes/ActiveRecord/ModelSchema.html#method-c-implicit_order_column) when reversing the order.

[Add SafeBuffer to the list of messagepack serializable type](https://github.com/rails/rails/pull/54584)  
When using MessagePack to serialize cookies, this PR fixes an issue when trying to persist SafeBuffer type objects in a cookie.

[Fix "LocalStore#read_multi_entries" to distinguish recorded misses](https://github.com/rails/rails/pull/54586)  
This PR addresses a bug when using LocalStore cache where a read or exists? check for a key would inadvertently result in consecutive `fetch_multi` calls return `nil` for the value.

[Add Timezone America/Asuncion](https://github.com/rails/rails/pull/54571)  
They stopped observing DST last year, and a new IANA timezone was added.

[Add "prepend" method to "MessageEncryptors" and "MessageVerifiers"](https://github.com/rails/rails/pull/54525)  
This adds a _#prepend_ method to [_ActiveSupport::MessageEncryptors_](https://edgeapi.rubyonrails.org/classes/ActiveSupport/MessageEncryptors.html) and [_ActiveSupport::MessageVerifiers_](https://edgeapi.rubyonrails.org/classes/ActiveSupport/MessageVerifiers.html).  
This method behaves like _#rotate_, but it prepends to the list instead of appends.  Thus it can be used to override the way messages are generated for preconfigured instances such as _Rails.application.message_verifiers_.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-02-13%7D...main@%7B2025-02-28%7D)._
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250213-20250228) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
