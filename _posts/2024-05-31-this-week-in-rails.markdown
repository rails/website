---
layout: post
title: "Propshaft default for Rails 8, Guides updates, transaction.active_record events, and more!"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-05-31
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Rails World 2024 speaker lineup announced!](https://rubyonrails.org/world/2024)  
As well as another small run of tickets going live on June 4 at 2pm ET!


The Rails Foundation documentation team has also submitted two Rails guides for community review. If you have feedback, please submit it here: [Action View Form Helpers Guide](https://github.com/rails/rails/pull/51936) and the [Active Record Migrations Guide](https://github.com/rails/rails/pull/51928).


[Change asset pipeline default to Propshaft in Rails 8](https://github.com/rails/rails/pull/51799)  
Sprockets has served us well, but it's time to hand over the torch to [Propshaft](https://github.com/rails/propshaft) in Rails 8.


[Add a Rails Guide called "Tuning Performance for Deployment"](https://github.com/rails/rails/pull/51924)  
This guide explains major concurrency and performance principles for Puma and CRuby.


[Pass the transaction object to "transaction.active_record" subscribers](https://github.com/rails/rails/pull/51955)  
The Active Support Instrumentation event for `transaction.active_record` now comes with the transaction in the payload, way you can refer to transactions if you need to trace database activity.

[Include the current transaction in "sql.active_record" event payloads](https://github.com/rails/rails/pull/51965)  
After the previous change, we also include the current transaction in `sql.active_record` event payloads. This allows tracing database activity including the ability to group queries by transaction, thanks to the [recently added](https://github.com/rails/rails/pull/51949) `ActiveRecord::Transaction#uuid`.

[Define Digest::UUID.nil_uuid](https://github.com/rails/rails/pull/51937)  
As defined in [RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) the so-called nil UUID is now added to `Digest::UUID`.


[Update public directory during app:update command](https://github.com/rails/rails/pull/51952)  
This PR fixes a bug when upgrading Rails versions where the `app:update` command did not generate new files in `/public`.
For example, upgrading from Rails 7.1 to 7.2 does not create the new `406-unsupported-browser.html` file.


[Update permissions policy list with display-capture and keyboard-map](https://github.com/rails/rails/pull/51944)  
Since `display-capture` (Chrome 94) and `keyboard-map` (Chrome 97) are now [standardized policy controlled features](https://github.com/w3c/webappsec-permissions-policy/blob/main/features.md#policy-controlled-features).


[Improve compatibility for "ActiveSupport::BroadcastLogger"](https://github.com/rails/rails/pull/51939)  
This PR changes the return value for all logging methods to return true, similar to the `Logger` class in Ruby.


[Add CSP mapping for "wasm-unsafe-eval"](https://github.com/rails/rails/pull/51934)  
The `'wasm-unsafe-eval'` keyword for the Content Security Policy allows the loading and execution of WebAssembly modules without the need to allow unsafe JavaScript execution via `'unsafe-eval'`.


[Improve ActionCable's TestCookieJar interface](https://github.com/rails/rails/pull/51930)  
This PR makes using `ActionCable::Connection::TestCookieJar` similar to `ActionDispatch::Cookies::CookieJar` with regards to setting the cookie value.


[Raise a descriptive error when a Store column is misconfigured](https://github.com/rails/rails/pull/51898)  
If a developer has neglected to use a structured column type (hstore or json) or to declare a serializer with `ActiveRecord.store`, then a `ConfigurationError` will now be raised with a nice error message instead of a `NoMethodError` with no detail.


[Make `pretty_print` behave more similar to `inspect`](https://github.com/rails/rails/pull/51892)  
This Pull Request makes the behavior of `pretty_print` on Active Record objects match that of `inspect`, instead of using the "raw" attribute it uses `attribute_for_inspect`.


[Fix non-partial inserts for models with composite identity primary keys](https://github.com/rails/rails/pull/51859)  
When doing non-partial inserts, we should ignore not only unchanged columns with a default function, but also which are autoincremented in the database (and so don't have a default function).


[Catch StandardError during Base64 decoding in message encryptor](https://github.com/rails/rails/pull/51846)  
RubyGems.org got recently facing 500 HTTP responses since user mangled cookies (app uses cookie store) and provided custom value which (thanks to series of edge-cases) ended up triggering `NoMethodError: undefined method unpack1' for nil` raised down from `Base64` class.


[Index Result rows rather than to convert them into hashes](https://github.com/rails/rails/pull/51744)  
This optimization improves the performance of `Result#each` by avoiding to convert each row into a hash.


[Add "ActiveRecord::Relation#readonly?"](https://github.com/rails/rails/pull/51371)  
A new method added to the relation object lets developers check if it was marked readonly.


[Fix AllowBrowser versions](https://github.com/rails/rails/pull/51121)  
This PR updates the `:modern` browser settings when using the `allow_browser` helper to support Chrome v120+ and Opera v106+, which includes support for CSS nesting.



_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-05-24%7D...main@%7B2024-05-31%7D)._
_We had [31 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240524-20240531) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
