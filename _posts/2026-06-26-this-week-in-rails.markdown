---
layout: post
title: "This Week in Rails: RFC 9110 Accept headers, dotenv fixes, and Ractor safety"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-06-26
---

Hi, it's [Vipul](https://www.saeloun.com/team/vipul/). This week was heavy on fixes: config parsing, association edge cases, caller-owned state, and more Ractor safety.

[Add RFC 9110 compliant Accept header content negotiation opt-in](https://github.com/rails/rails/pull/57579)  
New opt-in: `config.action_dispatch.respect_accept_header_rfc9110`. Default: off.
Enable it when you want RFC-compliant media type specificity and quality handling, for example `Accept: application/json, */*` returning JSON.
If your app relies on old browser-like fallbacks, leave it off until you test real browser `Accept` headers in your app and CI.

[Strip inline comments from unquoted `.env` values](https://github.com/rails/rails/pull/57789)  
Unquoted dotenv values now strip whitespace-prefixed inline comments before interpolation and command execution.
So `PORT=5432 # primary` resolves to `5432`, while `URL=http://host#frag` and quoted values still keep their `#` content.
No action needed unless your app relied on trailing comments being part of unquoted values.

[Fix `Rails.app.dotenvs` to honor an explicit path argument](https://github.com/rails/rails/pull/57787)  
`Rails.application.dotenvs(path)` now memoizes by path instead of returning the first dotenv configuration it saw.
The default `.env` file remains cached, and custom dotenv files now work as expected.
Useful when reading multiple dotenv files in one process.

[Fix `create_or_find_by` scope pollution on the non-transactional retry](https://github.com/rails/rails/pull/57711)  
This completes the earlier [`create_or_find_by` fix](https://github.com/rails/rails/pull/57192) by covering the branch that runs outside an open transaction.
On a uniqueness retry, Rails now uses `rewhere(attributes).take!` there too, so a caller scope no longer pollutes the lookup and turns an existing record into `RecordNotFound`.
Create keeps the caller scope; the retry lookup drops it.

[Validate offset value at call time like limit](https://github.com/rails/rails/pull/57808)  
`offset` now mirrors `limit` and raises `ArgumentError` for invalid values instead of silently coercing `"abc"` to `OFFSET 0`.
Clean numeric strings still work.
Bad input now fails where it enters the relation.

[Avoid mutating params hash passed to `ActionDispatch::Http::URL.url_for`](https://github.com/rails/rails/pull/57782)  
`url_for` no longer deletes nil-valued entries from the caller's `params:` hash.
That fixes corrupted `request.query_parameters` and avoids `FrozenError` when the hash is frozen.
Rails no longer mutates caller-owned state here.

[Fix `Http::Headers#merge` mutating the original request](https://github.com/rails/rails/pull/57805)  
`ActionDispatch::Http::Headers#merge` is documented to return a new headers object, but it was still mutating the original request env.
The implementation now duplicates the env before merging, so the method follows its contract.
Merging headers should not change the original request.

[Avoid mutating the override options passed to `ActiveModel::Errors#import`](https://github.com/rails/rails/pull/57792)  
`Errors#import` now duplicates override options before normalizing `:attribute` and `:type`.
Rails duplicates first, then normalizes internally.

[Don't share the actions Hash across `ActionableError` subclasses](https://github.com/rails/rails/pull/57720)  
`ActionableError.action` now uses copy-on-write for the `_actions` class attribute.
An action registered on one subclass no longer leaks into the parent or sibling subclasses.
Same direction: no shared mutable defaults.

[Split template lookup into raising and non-raising](https://github.com/rails/rails/pull/57783)  
Action View lookup now has a non-raising `#find` path, replacing places that had to call `find_all(...).first` or rescue exceptions.
It also adds an `#any_formats?` finder, keeping more of the template lookup behavior inside `LookupContext`.
Less exception-driven lookup.

[Support polymorphic associations with custom primary keys through `:inverse_of`](https://github.com/rails/rails/pull/57795)  
Polymorphic associations with an explicit `:inverse_of` now respect custom primary keys from the inverse association.
This helps applications where associated records use identifiers like `uuid` or `slug` instead of the default `id`.

[Fix inverse matching for association composite primary keys](https://github.com/rails/rails/pull/57784)  
Composite primary-key associations got another fix.
Inverse matching now uses the association's `active_record_primary_key` when that is what the foreign key maps to.

[Fix associations on a new record when the owner has a composite primary key](https://github.com/rails/rails/pull/57651)  
`foreign_key_present?` now checks each component of a composite key instead of treating the key array as one attribute name.
That fixes `has_many` and `has_one` lookups on new records when all key columns are present.

[Make ActiveRecord::Base.primary_key a class attribute](https://github.com/rails/rails/pull/57775)  
`primary_key`, like `table_name`, is now a class attribute.
Overriding it on an abstract class or STI base now behaves like applications would expect: subclasses inherit the override.
Less surprise for abstract models and STI.

[Parse intentional JSON comments with `allow_comments: true`](https://github.com/rails/rails/pull/57832)  
Rails bumped `json` to 2.20.0 and now opts in to `allow_comments: true` where comments are expected.
That keeps the Active Support serializer fallback and devcontainer JSONC handling ready for stricter json 3.0 behavior.
Good cleanup before json 3.0 tightens behavior.

[Remove the use of `$,` as a default value for `safe_join`](https://github.com/rails/rails/pull/57844)  
`safe_join` now defaults `sep` to `nil` instead of reading Ruby's deprecated global output field separator.
This behavior was undocumented in Rails, and Ruby has warned about setting `$,` for years.
Boring default. Better default.

**Ractor safety continues**  
More internals moved to the boring pattern we want: freeze defaults, copy-on-write, avoid shared mutable state.
Touched areas include [TimeFormats](https://github.com/rails/rails/pull/57857), [rescue handlers](https://github.com/rails/rails/pull/57850), [parameter encodings](https://github.com/rails/rails/pull/57848), [view cache dependencies](https://github.com/rails/rails/pull/57754), [ExecutionContext.after_change](https://github.com/rails/rails/pull/57753), and the [Active Record Railtie](https://github.com/rails/rails/pull/57602).
Some Active Record and Active Model memoization was also [removed](https://github.com/rails/rails/pull/57642).
If your app patches internals with global mutation, audit those patches.
Prefer frozen defaults, copy-on-write, or explicit duplication.

**Documentation fixes**  
The guides got several cleanup passes this week, including [fixed internal guide anchors](https://github.com/rails/rails/pull/57806), an [8-1-stable backport](https://github.com/rails/rails/pull/57809), and a narrower public API page for [`ActionView::Template`](https://github.com/rails/rails/pull/57858).

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-06-19%7D...main@%7B2026-06-26%7D)._  
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260619-20260626) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
