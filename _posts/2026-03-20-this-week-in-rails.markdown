---
layout: post
title: "This Week in Rails: March 20, 2026"
categories: news
author: gregmolnar
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-03-20
---


Hi, it's [gregmolnar](https://github.com/gregmolnar). Let's explore this week's changes in the Rails codebase.

[Batch SQL statements when creating tables](https://github.com/rails/rails/pull/57000)  
This change batches the SQL statements during loading a database schema to improve the performance of the process.  

[Deprecate require_dependency](https://github.com/rails/rails/pull/56992)  
`require_dependency` is deprecated without replacement and will be removed in Rails 9.

[Add MySQL lock option and extend algorithm to column Data Definition Language (DDL) operations](https://github.com/rails/rails/pull/56972)  
This pull request adds:

- `lock:` option for MySQL `add_index`, `remove_index`, and ALTER TABLE column operations (`add_column`, `remove_column`, `change_column`, `rename_column`)
- `algorithm:` option support extended to ALTER TABLE column operations on MySQL
- `CommandRecorder#invert_rename_column` now preserves `algorithm:` and `lock:` options on rollback

MySQL supports `ALGORITHM = {DEFAULT|COPY|INPLACE|INSTANT}` and `LOCK = {DEFAULT|NONE|SHARED|EXCLUSIVE}` to control how DDL operations are performed, enabling online schema changes without blocking reads or writes.

```ruby
add_index    :users, :email, algorithm: :inplace, lock: :none
remove_index :users, :email, algorithm: :inplace, lock: :none
add_column    :users, :name, :string, algorithm: :instant, lock: :none
change_column :users, :name, :string, null: false, algorithm: :inplace, lock: :none
remove_column :users, :name, algorithm: :inplace, lock: :none
rename_column :users, :name, :full_name, algorithm: :inplace, lock: :none
```

[Optimize generated Dockerfile build performance](https://github.com/rails/rails/pull/56967)  
The Dockerfile generated for new Rails applications received two performance optimizations. You can look at the diff and copy over the changes to your Dockerfile to have a faster Docker build.

[Active Record: Support Postgres _RESET_ on readonly queries](https://github.com/rails/rails/pull/56945)  
This Pull Request has been created because the PostgreSQL adapter currently raises an ActiveRecord::ReadOnlyError when attempting to execute a [RESET](https://www.postgresql.org/docs/current/sql-reset.html) command within a read-only context (e.g., `prevent_writes: true`).

`RESET` acts as a syntactic shortcut for `SET configuration_parameter TO DEFAULT`.

[Action Text: support block children in editor elements alongside value](https://github.com/rails/rails/pull/56926)  
Blocks were introduced to Action Text earlier, but only as an alternative to the value argument: the block was captured and used as the initial editor content, making it either value OR block — not both.  
This pull request changes the block semantics so that blocks render as DOM children of the editor element instead. Value and block are now independent: value flows into the editor's content binding, while the block renders as inner DOM children — useful for embedding custom elements such as prompt menus or toolbar extensions. This enables other editors like Lexxy to use the block form for configuration — injecting child elements into the editor tag — while the rich text value is preserved separately and passed via standard `value` attribute.  
Trix preserves the original block-as-initial-value contract by capturing the block in `TrixEditor::Tag#render_in` when no value is present, keeping its hidden input populated as before.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-03-13%7D...main@%7B2026-03-20%7D)._  
_We had [15 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260313-20260320) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
