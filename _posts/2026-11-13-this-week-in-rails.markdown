---
layout: post
title: "Hotwire guide and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-11-13
---

Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore this week's changes with another big round of fixes in the Rails codebase.

[Add a guide for using Hotwire with Rails](https://github.com/rails/rails/pull/59753)  
The guide can already be read on the [Edge Guides](https://edgeguides.rubyonrails.org/using_hotwire_with_rails.html).

[Use an Array for storing Active Record attributes](https://github.com/rails/rails/pull/59141)  
Cast and freeze a model's attribute defaults when its schema is loaded.

[Deprecate unscope(where: :column) removing conditions on other tables](https://github.com/rails/rails/pull/59767)  
An unqualified column passed to `unscope(where: ...)` currently removes conditions on every table that has a column of that name, including joined and eager loaded tables. In Rails 9.0 it will only remove conditions on the relation's own table.

[Detect Kamal in app:update command](https://github.com/rails/rails/pull/59779)  
The update command didn't pass `skip_kamal`, so it rendered config files as if every application deployed with Kamal.

[Filter parameters from the message logged when a command can't be handled](https://github.com/rails/rails/pull/59527)  
When a channel action raised, the error log included the raw WebSocket message, so values hidden by *filter_parameters* in the action's debug log were written in clear at the error level.

[Cast numeric values to the scale of the PostgreSQL money type](https://github.com/rails/rails/pull/59719)  
*money* only rounded strings to its scale, so a numeric value was held unrounded and as given, while it was rounded on save and read back as a *BigDecimal*.

[Qualify unscope values with table name when merging relations](https://github.com/rails/rails/pull/59709)  
Fixes an issue where merging a relation with an `unscope(where: ...)` clause unscoped conditions on joined or eager loaded tables that share the same column name.

[Force UTF8 encoding when reading source annotation](https://github.com/rails/rails/pull/59688)  
Notes extracted from files such as ERB, YAML, JS or CSS are now UTF-8 like the ones extracted from Ruby files, with invalid bytes replaced.

[Shift local times in a DST gap forward by the gap's length](https://github.com/rails/rails/pull/59475)  
*TimeZone#local*, *TimeZone#parse*, and *TimeWithZone#change* assumed every gap was one hour long, which overshot in zones with a shorter gap and collapsed distinct local times onto the same instant in zones with a longer one.

[Implement button_to in terms of form_tag](https://github.com/rails/rails/pull/50312)  
Forms rendered by *button_to* include *[accept-charset="UTF-8"]* and render their hidden fields before the button, rather than after it.

[Fix :integer attributes silently truncating 64-bit integer strings](https://github.com/rails/rails/pull/59702)  
Strings cast by *ActiveModel::Type::Integer* are cut to *limit * 4* bytes. Types without a limit, such as Active Model attributes, used the default limit of 4, so a 19-digit value like *"9223372036854775807"* was silently truncated to 16 digits. Types without a limit now use a 32-byte window, which fits any 64-bit value. Types with an explicit limit are unchanged.

[Group bound SQL literals in where clause like other SQL literals](https://github.com/rails/rails/pull/59642)  
Fixes *where* and *having* not parenthesizing bound SQL literals passed as Arel nodes.

[Don't convert the given scheduled_at to UTC in place](https://github.com/rails/rails/pull/59601)  
Fixes *ActiveJob::Core#serialize* converting the given *scheduled_at* to UTC in place.

[Don't show the encryption key in ActiveSupport::EncryptedFile#inspect](https://github.com/rails/rails/pull/59754)  
Previously the key, read from the key file or environment variable, was included in the default *inspect* output, so it could end up in logs or error pages.

[Fix preloading has_many :through with conditions ignoring preload and eager_load in the scope](https://github.com/rails/rails/pull/59593)  
Only *includes* in the scope was applied, so the nested association was loaded with a query per record, or raised under *strict_loading*.

[Fix a default_order being ignored by a disable_joins through association](https://github.com/rails/rails/pull/59591)  
An explicit order in an association's scope was carried over to the queries the chain is split into, but a *default_order* was dropped, so the records came back in whatever order the database returned them.

[Fix nested preloads under a through association using copies of its records](https://github.com/rails/rails/pull/59528)  
When the owners already had the through association loaded, the nested association was preloaded on fresh copies of its records, so it raised with *strict_loading*, and without it was loaded again lazily, one query per record. Nested preloads now always use the records held by the owners.

[Fix FrozenError in frozen MessageVerifier, MessageEncryptor and CachingKeyGenerator](https://github.com/rails/rails/pull/59501)  
A *MessageVerifier* with an unknown digest now raises when it is frozen, instead of when it first signs or verifies a message

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-11-06%7D...main@%7B2026-11-13%7D)._  
_We had [41 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20261106-20261113) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
