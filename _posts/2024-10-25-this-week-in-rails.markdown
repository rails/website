---
layout: post
title: "Active Job config `enqueue_after_transaction_commit` has been deprecated"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-10-25
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Deprecate setting the behavior of deferring job queueing until after commit](https://github.com/rails/rails/pull/53375)  
The `active_job.enqueue_after_transaction_commit` setting has been deprecated. This behavior is not intended to be changed globally, but on a per-job basis.

[Add support for using Kamal inside of the generated devcontainer](https://github.com/rails/rails/pull/53327)  
Just like the title implies, you can now use Kamal when running Rails in the [devcontainer](https://github.com/rails/devcontainer).

[Fix enum labels to accept keyword arguments](https://github.com/rails/rails/pull/53408)  
Now you can define enums without the extra brackets using keyword arguments.

```ruby
# Before
enum :status, { default: 0, scopes: 1, prefix: 2, suffix: 3 }

# After
enum :status, default: 0, scopes: 1, prefix: 2, suffix: 3
```

[Allow renaming enums to accept two from/to positional arguments similar to renaming tables](https://github.com/rails/rails/pull/53396)  
This change makes the API for `rename_enum` to be more consistent with `rename_table`.

[Add prefix address when IPAddr of CIDR encoded with JSON](https://github.com/rails/rails/pull/53393)  
If you're using IPaddr with CIDR notation, the prefix will now be included when encoding with ActiveSupport::JSON.

[Make internal query() retryable](https://github.com/rails/rails/pull/53425)  
This change takes advantage of deferred connection verification to reduce the number of times a connection must be verified during a single request.

[Fix Current Attributes' "attributes" method to return new object each time](https://github.com/rails/rails/pull/53440)  
Now calling `Current.attributes` will return a new object each time it is called.

[Treat "no connection to the server" as ConnectionNotEstablished](https://github.com/rails/rails/pull/53400)  
This PR updates the PostgreSQL adapter to treat the `PG::UnableToSend: no connection to the server` error as a `ConnectionNotEstablished` error.

[Fix strict loading propagation even if statement cache is not used](https://github.com/rails/rails/pull/53398)  
Now a `StrictLoadingViolationError` will be raised even if the statement cache is not used.

[Reduce allocations in Active Support Duration's "since" and "ago"](https://github.com/rails/rails/pull/53372)  
This change reduces the number of allocations by a very small amount, but is interesting if you're learning about optimization and benchmarks.

[Fix "NoMethodError" when content type is set to nil in tests](https://github.com/rails/rails/pull/53325)  
It might seem like a small change, but this PR resolves the `NoMethodError` when setting `request.content_type = nil` in tests. That seems like maybe an easy trap to fall into.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-10-18%7D...main@%7B2024-10-25%7D)._
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241018-20241025) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
