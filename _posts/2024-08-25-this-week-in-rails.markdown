---
layout: post
title: "ActionText store_if_blank, SQLite non-GVL-blocking busy handler, and more!"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-08-25
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

In case you missed it, Rails [7.2.1](https://rubyonrails.org/2024/8/22/Rails-7-2-1-has-been-released) and [7.1.4](https://rubyonrails.org/2024/8/22/Rails-7-1-4-has-been-released) were released this week!  

[Allow use of alternative database interfaces](https://github.com/rails/rails/pull/52656)  
Prior to this PR, `rails dbconsole` was hardcoded to use the default interface for the given database.
This command can now be configured via the `config.active_record.database_cli` option.  

[Encryption casting with "encrypts" before "serialize"](https://github.com/rails/rails/pull/52650)  
This PR ensures encrypted binary data is properly handled in PostgreSQL.  

[Add "store_if_blank" option to "has_rich_text"](https://github.com/rails/rails/pull/52573)  
A new option was added to ActionText to allow configuring whether or not to store empty rich text fields.
This PR introduces a `store_if_blank` option on `has_rich_text`. It defaults to `true` (the current behaviour); if you pass `false`, ActionText won't create `ActionText::RichText` records when saving with a blank value.

[SQLite non-GVL-blocking, fair retry interval busy handler](https://github.com/rails/rails/pull/51958)  
This PR improves SQLite connection handling for timeouts, by avoiding Ruby's Global Variable Lock (GVL) it can reduce `SQLite3::BusyException` errors and latency.

[Support dumping PostgreSQL inheritance & partitioning options](https://github.com/rails/rails/pull/50475)  
With this change, we can support PostgreSQL [native partitioning](https://www.postgresql.org/docs/current/ddl-partitioning.html) and inheritance options in `create_table`.

[Infer default ":inverse_of" option for DelegatedType](https://github.com/rails/rails/pull/50280)  
When using [delegated types](https://edgeapi.rubyonrails.org/classes/ActiveRecord/DelegatedType.html), we can now infer the `:inverse_of` option for the association.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-08-16%7D...main@%7B2024-08-23%7D)._
_We had [36 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240816-20240823) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
