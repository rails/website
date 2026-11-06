---
layout: post
title: "This Week in Rails: November 6, 2026"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-11-06
---


Hi, it's [Greg](https://greg.molnar.io), bringing you the latest changes in the Rails codebase. It was a busy week, with a lot of changes, so buckle up!

[Rails 8.0.5.2 and 8.1.4.1 have been released!](https://rubyonrails.org/2026/11/4/Rails-8.0.5.2-and-8.1.4.1-have-been-released)
These are security releases, addressing 21 security issues, so you should upgrade if you haven't already.

[Allow anonymous subclasses of cache stores with LocalCache](https://github.com/rails/rails/pull/59640)  
A recent change built the local cache's registry key from the store's class name in `initialize`, and that name is `nil` for an anonymous class, so `Class.new(ActiveSupport::Cache::MemoryStore).new` blew up with a `NoMethodError`. Anonymous stores are handy in tests to record what a request writes to the cache, and they work again.

[Fix Active Record _includes_ with _merge_ of an order on another model](https://github.com/rails/rails/pull/59638)  
Merging a relation that orders by another model's table lost the reference to that table, so `includes` didn't know it had to join it. The merge now records the references for the order values it copies over.

[Accept bind values in _where!_ and _having!_ again](https://github.com/rails/rails/pull/59634)  
`where!` and `having!` are `:nodoc:`, but plenty of apps and gems call them with bind values, Discourse and Canvas among them. A recent refactor made `where!("id = ?", 1)` raise a `NoMethodError`, and this brings the old signature back.

[Skip nested values that serialize to an empty query in to_query](https://github.com/rails/rails/pull/59626)  
`{ q: [[]], page: 2 }.to_query` returned `"&page=2"` with a stray separator in front, and since `url_for` passes extra options through, you ended up with URLs like `/search?&page=2`. Values that serialize to an empty query string are skipped now, in both `Hash#to_query` and `Array#to_query`, while `nil`, `false` and empty strings are still kept.

[Generate URLs for empty arguments with default URL options as before](https://github.com/rails/rails/pull/59625)  
Since the optimized URL helpers started kicking in with default URL options, `post_url(post)` raised an `UrlGenerationError` when the record's `to_param` was empty, where it used to generate a URL. In a mailer, where `default_url_options[:host]` is set, that means an exception instead of `http://example.com/posts/`. The helpers now fall back to the general path when the optimized one can't build the path.

[Show the template's line for syntax errors compiled through Herb](https://github.com/rails/rails/pull/59602)  
When a template has a syntax error and Herb compiles it, the error didn't name the template, so the error page couldn't highlight the line you care about. The handler passes the template identifier along now, and nothing is re-parsed to get it.

[Fix _in_order_of_ modifying the receiver relation](https://github.com/rails/rails/pull/59586)  
`in_order_of` added the referenced table to the relation you called it on instead of the one it returns, so using it on an already loaded relation raised `ActiveRecord::UnmodifiableRelation`.

[Fix _merge_ dropping _RECURSIVE_ from a relation built with _with_recursive_](https://github.com/rails/rails/pull/59580)  
The recursive flag lived in an instance variable rather than with the relation's other values, and `Relation::Merger` only merges values, so merging a `with_recursive` relation gave you a plain `WITH`. It is a proper value now, which also means `except(:with)` and `unscope(:with)` remove it along with the CTEs.

[Use _count(:all)_ for _one?_ and _many?_](https://github.com/rails/rails/pull/59575)  
`one?` and `many?` counted the select list, so with multiple select values or an aggregate select they built an invalid `COUNT(...)` and raised `ActiveRecord::StatementInvalid`. They only need to know how many records the relation loads, so they count `:all` now. `distinct` relations are still counted through a subquery.

[Fix _one?_ and _many?_ on grouped relations](https://github.com/rails/rails/pull/59559)  
A grouped count returns a hash, so `one?` was always `false` on a grouped relation and `many?` raised a `TypeError`. Both count the groups now, which is what you would expect them to do.

[Keep the local cache consistent with batched writes and deletes](https://github.com/rails/rails/pull/59573)  
`LocalCache` kept its entries in sync by hooking the single-key primitives, and `MemCacheStore`'s Dalli batch paths go around those, so a key deleted with `delete_multi` was still readable inside `with_local_cache`. The multi variants are hooked in `LocalCache` itself now, so the local cache stays consistent whatever a store does in its batch implementation.

[Fix stale reads from the local cache after _ActiveSupport::Cache::MemCacheStore#write_multi_](https://github.com/rails/rails/pull/59566)  
On the `set_multi` path the local cache kept the old values, so a `read` right after a `write_multi` handed you stale data. The written keys are dropped from the local cache before the call, so the next read goes to memcached. They aren't filled in directly because `set_multi` doesn't report which keys were actually stored.

[Index what _each_ yields in Enumerable#index_with again](https://github.com/rails/rails/pull/59555)  
`index_with` was switched to `to_h` to presize the result, but `to_h` is not `each` for every enumerable. `Hash#to_h` yields the key and the value as two arguments, so `{a: 1}.index_with { |k, v| ... }` indexed `:a` with `v` as `nil` where 8.1 indexed `[:a, 1]`, and `Struct#to_h` yielded member names instead of values. `Enumerable#index_with` is back on `each`, and a new `Array#index_with` keeps the faster `to_h`.

[Fix -n ClassName#test_name filter in the test runner](https://github.com/rails/rails/pull/59531)  
`bin/rails test -n ClassName#test_name` ran no tests at all, broken since Rails 7.1, because the runner added a `test_` prefix to a filter that already had one. It also made isolated tests fail on platforms without `fork`, like JRuby and Windows. Declarative names with a `#` in them, like `test "issue #123"`, still get the prefix.

[Let a frozen CachingKeyGenerator work on Ruby 3.3](https://github.com/rails/rails/pull/59524)  
The key cache goes through `ActiveSupport::Ractors.[]` now, which falls back to `Ractor.current[]` on Ruby 3.3, so a frozen `CachingKeyGenerator` still returns its cached keys there.

[Fix in_batches with use_ranges keeping an ignored default_order](https://github.com/rails/rails/pull/59523)  
Batching ignores `default_order` the same way it ignores an explicit order, but the relations yielded by `in_batches(use_ranges: true)` still carried it, so every batch query had a pointless `ORDER BY`.

[Allow _ActiveRecord::Relation#unscope(:default_order)_ to remove default ordering while keeping explicit ordering](https://github.com/rails/rails/pull/59516)  
`unscope(:default_order)` used to raise an `ArgumentError`. It now removes the default ordering and leaves your explicit `order` alone, the mirror image of what `unscope(:order)` does:

```ruby
Post.order(:id).default_order(:title).unscope(:default_order)
# SELECT "posts".* FROM "posts" ORDER BY "posts"."id" ASC
```

[Percent-encode href in preload Link header entries](https://github.com/rails/rails/pull/59511)  
A URL with a `>` in it closed the URI reference early in the `Link` header, so the rest of the URL was parsed as extra link parameters, or even extra links. `<`, `>`, whitespace and control characters are percent-encoded now, while `,` and `;` are left alone because they are common in CDN URLs. The HTML tag is unchanged.

[Exclude _default_order_ from collection cache version query](https://github.com/rails/rails/pull/59508)  
`cache_key` on a relation with a `default_order` built its `COUNT(*), MAX(updated_at)` query with the ordering still in place, and PostgreSQL rejects that with a `GroupingError`. The default order is stripped there too now, as it already was for an explicit order.

[Pass enums added to a parent down to existing subclasses](https://github.com/rails/rails/pull/59502)  
Add an `enum` to a parent class after a subclass is already defined and the subclass's `defined_enums` didn't include it.

[Fix FrozenError in frozen MessageVerifier, MessageEncryptor and CachingKeyGenerator](https://github.com/rails/rails/pull/59501)  
Freezing a `MessageVerifier` or `MessageEncryptor` before it had verified or decrypted anything, which is exactly what `Ractor.make_shareable` does, raised a `FrozenError` on first use. Note that a verifier with an unknown digest now raises when you freeze it, rather than when it first signs or verifies a message.

[Fix preloading has_many :through with a default_order scope](https://github.com/rails/rails/pull/59497)  
The through preloader looked at explicit `order_values` in three places and ignored `default_order_values`, so a default order anywhere in the chain was dropped when preloading. All three follow the lazy query now: an explicit order still wins, and an empty one like `reorder(nil)` falls back to the default.

[Fix eager loading with limit and default_order](https://github.com/rails/rails/pull/59496)  
Eager loading with `limit` or `offset` runs a `SELECT DISTINCT` of primary keys first, and that query ignored `default_order`, so the `ORDER BY` columns were missing from its select list. PostgreSQL and MySQL both refuse that, so the query raised instead of returning your records.

[Keep the scale of non-:decimal types in numericality validation](https://github.com/rails/rails/pull/59495)  
The numericality validator only kept the type's scale for `:decimal` columns, so a `money` column lost its scale and the wrong value was validated. It keeps the type whenever it has a scale now and rounds the cast value to it, which also covers attributes wrapped by `normalizes`.

[Raise on assigning _attr_readonly_ attributes on subclasses with generated writers](https://github.com/rails/rails/pull/59494)  
`attr_readonly` only undefined the attribute methods of the class it was called on, so a subclass whose writers were already generated kept them. Assigning such an attribute on the subclass didn't raise `ActiveRecord::ReadonlyAttributeError`, the value was just silently not saved.

[Pass readonly attributes added to a parent down to existing subclasses](https://github.com/rails/rails/pull/59492)  
A subclass that had declared readonly attributes of its own kept its own copy of the list, so attributes marked readonly on the parent afterwards could still be changed and saved through the subclass.

[Pass attribute aliases added to a parent down to existing subclasses](https://github.com/rails/rails/pull/59491)  
The same problem with `alias_attribute`: a subclass holding its own copy of the aliases didn't see aliases added to the parent later, `attribute_alias?` returned `false` and queries like `where` used the alias as a column name.

[Pass aggregations added to a parent down to existing subclasses](https://github.com/rails/rails/pull/59490)  
And the same with `composed_of`: `reflect_on_aggregation` returned `nil` on the subclass, so `where` couldn't expand the value object.

[Fix preloading has_one through associations sharing a table](https://github.com/rails/rails/pull/59488)  
When the through and source models live in the same table, STI subclasses for example, the source conditions, including the STI type condition, were merged into the through model's query, where they filtered the through records instead of the source records. They are applied by the source preloader now.

[Honor unless_exist and avoid double compression in MemCacheStore#write_multi](https://github.com/rails/rails/pull/59486)  
`write_multi` ignored `unless_exist: true` and happily overwrote existing values, and it compressed entries twice, once itself and once through Dalli. It falls back to per-entry writes for `unless_exist` now, and drops `:compress` before handing the batch over.

[Add support for comma-separated values in _ENV["RAILS_MASTER_KEY"]_](https://github.com/rails/rails/pull/59485)  
You can pass several master keys in `RAILS_MASTER_KEY` separated by commas, and Rails tries each one until it finds the one that works. Handy for rotating the key without a window where nothing can decrypt your credentials.

[Fix preloading ordered has_many :through reusing loaded source records](https://github.com/rails/rails/pull/59473)  
If you preload two through associations that share a source, one ordered and one not, the ordered one reused the records the unordered one had already loaded and came back in the wrong order.

[Don't add a trailing slash after a required format in optimized URL helpers](https://github.com/rails/rails/pull/59470)  
With `trailing_slash` and a route where the format is a required part, the optimized helper added a slash after the format, so the URL didn't match what the general path generates.

[Pass associations added to a parent down to existing subclasses](https://github.com/rails/rails/pull/59462)  
This is the one that started the series above. A subclass that defined an association of its own kept a copy of the parent's reflections, so an association added to the parent afterwards, by an engine or a concern loaded later, had its methods defined on the subclass but raised `ActiveRecord::AssociationNotFoundError` when you called them.

[Expose the untouched association name to restrict_with_error messages](https://github.com/rails/rails/pull/59461)  
The `restrict_dependent_destroy` message interpolates `%{record}`, which is always downcased. That reads well in English, but German ends up with "abhängige firmen", so the name is now also available untouched as `%{association_name}`. Existing translations keep working.

[Validate reflections before precomputing in _freeze_](https://github.com/rails/rails/pull/59449)  
Freezing a reflection precomputes its memoized values and only ran `check_validity!` afterwards, so a misconfigured association, a through with a missing source association for example, raised a `NoMethodError` instead of the error that tells you what is actually wrong.

[Fix preloading _source_type_ through with conditions on the through table](https://github.com/rails/rails/pull/59448)  
A `has_many :through` with `source_type` and conditions on the through table loaded fine lazily or with `eager_load`, but preloading it raised `ActiveRecord::StatementInvalid`, because the source query never joined the through table.

[Fix preloading _source_type_ / _disable_joins_ through with conditions](https://github.com/rails/rails/pull/59446)  
With `source_type` or `disable_joins`, the conditions of a through association are applied by the source query, and source records already loaded on the through records were reused without those conditions. So a scoped association could come back holding records it was supposed to filter out.

[Fix preloading scoped _has_many :through_ reusing loaded through records](https://github.com/rails/rails/pull/59444)  
Preloading a scoped and an unscoped through association together let the scoped one reuse the unscoped one's through records, so an `inactive_tags` association happily included active tags.

[Fix preloading _source_type_ through associations with loaded through records](https://github.com/rails/rails/pull/59443)  
When the through association was already loaded, the source records were preloaded for every through record, including the ones whose polymorphic type doesn't match `source_type`, which could raise a `NameError` for an unknown type. A Symbol `source_type` never matched the stored type either, so the association was preloaded as empty.

[Exclude default_order from aggregate calculations](https://github.com/rails/rails/pull/59436)  
Same story for the calculations: `count`, `sum` and friends drop an explicit order already, and now they drop `default_order` as well. That fixes invalid SQL on PostgreSQL, including `distinct.count` with a custom select.

[Fix counter cache double increment with partial inserts disabled](https://github.com/rails/rails/pull/59435)  
With `partial_inserts` disabled, creating a record through a `has_many :through` incremented the counter cache twice: once by the owner's `INSERT`, which wrote the in-memory value, and then again by the join model's `belongs_to`. Unchanged counter cache columns are left out of the `INSERT` now, as they already are with partial inserts enabled.

[Accept Symbol values for the routing format: option](https://github.com/rails/rails/pull/59418)  
`format: :json` now sets the same requirement and default as `format: "json"`, including in `scope` and `resources`.

[Retry _ActiveRecord::SerializationFailure_ errors on safely-retryable queries](https://github.com/rails/rails/pull/59411)  
A serialization failure rolls back whatever the statement was part of, so a query that wasn't inside an open transaction can simply be retried on the same connection, exactly like `ActiveRecord::Deadlocked` already is.

[Don't require Capybara and Selenium on boot in new apps](https://github.com/rails/rails/pull/59408)  
The generated `Gemfile` declares `capybara` and `selenium-webdriver` with `require: false`, like it already does for bootsnap and friends, so `Bundler.require` stops loading them into test processes that never run a system test. Rails requires both where they are used. If you reach for Capybara outside of system tests, `Capybara.string` in a view test for example, you need to require it yourself now.

[ActiveStorage: Fix JSON::ParserError from ffprobe duplicate keys](https://github.com/rails/rails/pull/59383)  
ffprobe can report duplicate keys in its JSON output, and newer versions of the json gem reject those, so analyzing a video raised a `JSON::ParserError`. The analyzer passes `allow_duplicate_key: true` now.

[Read libvips' orientation field in the Vips image analyzer](https://github.com/rails/rails/pull/59380)  
The analyzer parsed the `exif-ifd0-Orientation` label to decide whether width and height are swapped. It reads libvips' normalized `orientation` field instead, the same one `autorot` uses when generating variants, so the reported dimensions match the variant by construction. It also covers formats that keep the orientation outside an EXIF block, like TIFF.

[Write Duration#iso8601 values as plain decimal numbers](https://github.com/rails/rails/pull/59374)  
Very small or very large float parts came out in scientific notation and rational parts as fractions, neither of which is valid ISO 8601, so `ActiveSupport::Duration.parse` couldn't read them back:

```ruby
0.00005.seconds.iso8601     # => "PT0.00005S", was "PT5.0e-05S"
Rational(3, 2).days.iso8601 # => "P1.5D", was "P3/2D"
```

[Ignore blank forwarded hosts during request host extraction](https://github.com/rails/rails/pull/59320)  
An `X-Forwarded-Host` header of just a comma left `raw_host_with_port` as `nil`, and `request.host` then raised a `NoMethodError`. A blank forwarded host falls back to the `Host` header now, and non-blank ones keep their existing precedence.

[Instrument connection pool checkout waits](https://github.com/rails/rails/pull/59308)  
There is a new `checkout_wait.active_record` notification, emitted when a connection checkout has to wait because the pool is full, with the wait itself as the event's duration and the error in the payload if it times out. You can finally measure pool saturation without patching `ConnectionPool`.

[Add Northwest Territories time zone mapping](https://github.com/rails/rails/pull/59221)  
The Northwest Territories no longer share their winter clocks with US Mountain time, so there is a new `Northwest Territories` entry in the mapping. `Mountain Time (US & Canada)` stays on `America/Denver` for compatibility, but prefer the new one, or the IANA `America/Inuvik`, for users in that region.

[Read structure dump exclusions from the database being dumped](https://github.com/rails/rails/pull/58728)  
The ignored table list for a structure dump was read through whatever connection happened to be current rather than the database being dumped, so the wrong tables were excluded. The dump opens a connection to the config it is dumping now. MySQL and SQLite still shell out without connecting at all when the list is empty.

[Apply has_many default_order: when the association is preloaded](https://github.com/rails/rails/pull/58667)  
The `default_order:` option on a `has_many` never reached the preloader, so preloaded records came back unordered while lazy loading them was ordered. The reflection passes the option along now, so both forms behave the same. Ordering is still not applied on the JOIN path, but that was already true for the lambda form.

[Wrap PostgreSQL null byte error in ActiveRecord::NullByteError](https://github.com/rails/rails/pull/58442)  
PostgreSQL cannot store null bytes in text columns, and until now all you got was the `pg` gem's generic `ArgumentError`, which you could only catch by rescuing every `ArgumentError` or matching on the message. It is wrapped in `ActiveRecord::NullByteError` now, a subclass of `ActiveRecord::StatementInvalid`, with the original error in `#cause`:

```ruby
begin
  Book.create!(name: "a\0b")
rescue ActiveRecord::NullByteError
  # handle invalid input
end
```
If you were rescuing `ArgumentError` around queries for this, you need to update it.

[Fix belongs_to _touch_ option incorrectly triggering on models with composite primary keys](https://github.com/rails/rails/pull/58315)  
With a composite primary key, `touch` reconstructed the previous parent's key even when some of its columns were nil, and then went looking for a parent with `IS NULL` conditions that can never match a real record. The lookup is skipped when any component is nil, which is what the single-column branch already did.

[Action Controller: Fix bug to support _render(renderable: …) { … }_](https://github.com/rails/rails/pull/58118)  
The block passed to `render` wasn't forwarded along the rendering chain, so `render renderable: something do ... end` silently ignored it.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-10-30%7D...main@%7B2026-11-06%7D)._  
_We had [46 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20261030-20261106) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
