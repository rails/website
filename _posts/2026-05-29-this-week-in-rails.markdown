---
layout: post
title: "Action Cable adapterization and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-05-29
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's see a huge list of this week's changes in the Rails codebase.

[Action Cable server adapterization](https://github.com/rails/rails/pull/50979)  
Extract low-level Action Cable server responsibilities into *ActionCable::Server* abstractions.
This refactoring separates socket handling, concurrency primitives, and other transport-specific behavior from application-level connections and channels. It makes Action Cable more flexible as a framework and opens the door to alternative server implementations without changing user-facing channel and connection code.

[Active Storage Guide update](https://github.com/rails/rails/pull/56340)  
Can be read on [Edge Guides](https://edgeguides.rubyonrails.org/active_storage_overview.html) already.

[Add shims for Ractor shareability methods](https://github.com/rails/rails/pull/57467)  
Adds new core extension to Kernel *ractor_shareable?*, *ractor_make_shareable*, *ractor_shareable_proc*, and *ractor_shareable_lamda*. In environments where those are available, it forwards them to the Ractor method, otherwise they are a no-op.

[Make exception wrapper Ractor safe](https://github.com/rails/rails/pull/57483)  
Adds a configuration for *ActionDispatch::ExceptionWrapper* *silent_exceptions* and *wrapper_exceptions* to silence noisy framework exceptions and be able to decide which exceptions should unwrap to the original cause when reporting.

[Support for default order](https://github.com/rails/rails/pull/39525)  
Adds *default_order* query method and association option which can be used to order records when no other order is specified.
This extends the functionality offered by *implicit_order_column* to scopes and associations.

[Reject malformed Action Mailbox original recipients](https://github.com/rails/rails/pull/57492)  
Return *422 Unprocessable Content* for malformed Mailgun, Postmark, and SendGrid raw email parameters.
Follow up improvements to Action Mailbox added in pull requests [#57495](https://github.com/rails/rails/pull/57495), [#57494](https://github.com/rails/rails/issues/57494), [#57463](https://github.com/rails/rails/pull/57463), [#57452](https://github.com/rails/rails/pull/57452), [#57335](https://github.com/rails/rails/pull/57335).

[Refactor ActiveJob::TestHelper to no longer walk descendants](https://github.com/rails/rails/pull/57477)  
Store the overrides in a couple data structures that can be easily cleared in constant time during teardown.

[Pass a job to stopping? for fine-grained control over interruption](https://github.com/rails/rails/pull/57472)  
Allow queue adapters to inspect a job when deciding whether to interrupt at a checkpoint, and to optionally return a specific interruption reason.

[Fix number_to_delimited mangling non-finite floats](https://github.com/rails/rails/pull/57470)  
Returns the underlying string representation *Infinity*, *-Infinity*, *NaN* for non-finite floats.
Another [change](https://github.com/rails/rails/pull/57451) fixes the *number_to_rounded* in similar manner.

[Fix HTML-aware ERB compiler errors in bundled templates so they pass strict validations](https://github.com/rails/rails/pull/57453)  
Verified by running Herb gem.

[Improve insert_all error message to show key mismatch](https://github.com/rails/rails/pull/57447)  
Includes the mismatched keys in the error raised by *insert_all* / *upsert_all* when the inserted objects have inconsistent attributes.

```ruby
Book.insert_all [{ name: "Rework", author_id: 1 }, { name: "Remote", author_id: 1, isbn: "x" }]
# ArgumentError: All objects being inserted must have the same keys (extra: [:isbn])
```

[Include valid values in Active Record Enum invalid-value error](https://github.com/rails/rails/pull/57446)  
Includes the list of valid values in the error raised when assigning an invalid value to an enum attribute.

```ruby
Book.new(status: "bogus")
# ArgumentError: 'bogus' is not a valid status. Valid values are: "proposed", "written", "published"
```

[Add missing docs for Rails.autoloaders](https://github.com/rails/rails/pull/57435)  
The interface available from *Rails.autoloaders* was documented in the [autoloading guide](https://guides.rubyonrails.org/autoloading_and_reloading_constants.html). This patch adds missing documentation for the API docs.

[Validate subcommand in rails plugin command](https://github.com/rails/rails/pull/57431)  
Command `rails plugin foo bar` silently ignored the invalid subcommand "foo" and proceeded to create a plugin named "bar". Now it prints an error and exits with status 1.

[Fix Active Record Pool Reaper thread leak](https://github.com/rails/rails/pull/57406)  
After parallelized test runs, the parent process leaked the Active Record Pool Reaper thread, holding open connection pools and file descriptors for up to *reaping_frequency* seconds (or indefinitely if never reaped).

[Fix NoMethodError for malformed multiparameter attribute keys](https://github.com/rails/rails/pull/57243)  
Raise *ActiveRecord::MultiparameterAssignmentErrors* when assigning a malformed multiparameter attribute name.

[Allow create_join_table to accept a primary key](https://github.com/rails/rails/pull/56195)  
This is useful for databases like PostgreSQL where logical replication requires primary keys on all tables.

[Fix crash when trying to attach a Blob to a Record](https://github.com/rails/rails/pull/55156)  
Prevent *ActiveStorage.touch_attachment_records = false* from crashing the attachment of a Blob.

[Respect reject in Action Cable before_subscribe callbacks](https://github.com/rails/rails/pull/53101)  
It doesn't call *subscribed* if a *before_subscribe* callback calls *reject*.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-05-22%7D...main@%7B2026-05-29%7D)._  
_We had [47 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260522-20260529) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
