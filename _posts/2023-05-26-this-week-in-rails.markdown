---
layout: post
title: "This Week in Rails - May 26, 2023"
categories: news
author: zzak
published: true
date: 2023-05-26
---


Hey! [zzak](https://github.com/zzak) here with another edition of This Week in Rails.

Reminder: The [Rails World CFP](https://www.papercall.io/rails-world-2023) is open until June 16.  
Whether you’re a seasoned veteran or a newcomer to the Rails ecosystem, we encourage you to submit proposals that showcase forward-thinking ideas and push the boundaries of what’s possible with Rails.  

[Rails 7.0.5 has been released](https://rubyonrails.org/2023/5/24/Rails-7-0-5-has-been-released)  
In case you missed it, a bugfix release for the 7.0 series of Rails was cut.  
  

[Improve performance of MemoryStore](https://github.com/rails/rails/pull/48302)  
This PR optimizes the _MemoryStore::DupCoder_ internal API to avoid unnecessary work when writing and reading complex objects.  
  

[Refactor error highlight detection](https://github.com/rails/rails/pull/48299)  
Before this commit, some calls to render were hard-coding error highlight as "not available".  This was causing some error pages to show the "you should install error highlight" message even though the right version of error highlight was installed.  
  

[Use short-form fixed-width RDoc form for namespaces](https://github.com/rails/rails/pull/48288)  
Some work went into replacing occurrences of "<tt>Some::Namespace::Thing</tt>" with the shorter "+...+" syntax supported by RDoc.  
This is just a reminder to folks writing documentation that this syntax can be used for nearly all fixed-width code that doesn't contain brackets, spaces, or like raw "strings". Which is much nicer on the eyes for readers looking directly at the code (and writing).  
  

[Automatically add "test/fixtures" in engines to "fixture_paths"](https://github.com/rails/rails/pull/48287)  
This PR takes advantage of the recently added _TestFixtures#fixture_paths_ feature so that any engines your application uses fixtures will also be automatically loaded.  
  

[Fix "change_in_place?" for binary serialized columns](https://github.com/rails/rails/pull/48274)  
A bug occurred when giving unicode characters to serialized attributes stored in a blob column, that would always show changes had occurred on that attribute.  
  

[Run "after_bundle" blocks with "app:template" command](https://github.com/rails/rails/pull/48269)  
App templates may contain _after_bundle_ blocks which should be run after the template is executed, after running `bundle install`.  For example:
  
```ruby
gem "devise"

after_bundle do
  generate "devise:install"
end
```
  

["ERB::Util.html_escape_once" now always returns an "html_safe" string](https://github.com/rails/rails/pull/48265)  
This method previously maintained the `html_safe?` property of a string on the return value. Because this string has been escaped, however, not marking it as `html_safe` causes entities to be double-escaped.
Before this change, that would be double-escaped and render as:

```html
<p>this &amp;amp; that &amp;amp; the other</p>
```

After this change, it renders correctly as:

```html
<p>this &amp; that &amp; the other</p>
```
  

[Deprecate "SafeBuffer#clone_empty"](https://github.com/rails/rails/pull/48264)  
This internal method hasn't been used within the Rails codebase since the last caller was removed in 2014 (Rails 4.2.0).  
  

[Add "Arel::Nodes::Cte" for use in WITH expressions](https://github.com/rails/rails/pull/48261)  
While Arel is still private API, this PR is still worth noting. This addition gives the `with` method the ability to accept a Common Table Expression (CTE) which adds `MATERIALIZED` or `NOT MATERIALIZED` hints to the generated SQL statement.  
Postgres and SQLite both support a non-standard extension to the CTE syntax to indicate that a CTE subquery should be materialized, i.e., not folded into the main query but evaluated separately. This can be useful in cases where the query planner would otherwise make poor decisions.
  

[Deprecate params via ":args" for "assert_enqueued_email_with"](https://github.com/rails/rails/pull/48194)  
When testing Action Mailer using `assert_enqueued_email_with`, you should be using the `:params` kwarg to pass a hash of options to the mailer. For example:

```ruby
assert_enqueued_email_with MyMailer, :my_method, params: { my_param: "value" }
```
  

[Fix issue with empty values within delimited authorization header](https://github.com/rails/rails/pull/47910)  
The bug here occurs when delimited `Authorization` header values containing blanks (e.g. `,,,`) will produce an `ArgumentError` resulting in a 500 error response.  
  

[Adds "ActiveRecord.disconnect_all!" to close all connections](https://github.com/rails/rails/pull/47856)  
This is basically a multi-db aware version of `ActiveRecord::Base.connection.disconnect!`. It also avoid connecting to the database if we weren't already. This can be useful to reset state after `establish_connection` has been used.  
  

[Improve JS and CSS options of app generator](https://github.com/rails/rails/pull/47689)  
The UX for generating new Rails applications when using the `--javascript` and `--css` flags has been improved here. Take a look at the table in the PR that explains the behavior changes in greater detail.  
  

[Model Generator Source Paths Should Allow for Customization](https://github.com/rails/rails/pull/47181)  
This PR resurrects and older PR that had been lost to time, with the addition of tests and silenced warnings. It's always good to see folks who can scratch their own itch, and recycle code from an older PR. Not everything needs to be reinvented!  
  

[Update comments in all three en.yml files relating to booleans](https://github.com/rails/rails/pull/46476)  
I'm calling this one out because as this was [@justinperkins](https://github.com/justinperkins) first PR to Rails! They've gone and fixed up the comments for the generated locale files. Congrats!  
  

[Make the test environment show rescuable exceptions in responses](https://github.com/rails/rails/pull/45867)  
The last PR for the week is changing the behavior of the `config.action_dispatch.show_exceptions` option to use the new "rescuable" option which will only show exceptions that can be rescued (e.g. `ActiveRecord::RecordNotFound`) in the test environment.  
  


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-05-19%7D...main@%7B2023-05-26%7D)._  
_We had [26 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230519-20230526) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
