---
layout: post
title: '[ANN] Rails 3.2.14.rc1 has been released!'
category: releases
author: rafaelfranca
published: true
---

Hi everyone,

I am happy to announce that Rails 3.2.14.rc1 has been released. If no regressions
are found I will release 3.2.14 final final this Monday, on July
15, 2013. If you find one, please [open an Issue on
GitHub](https://github.com/rails/rails/issues/new) and mention me on it,
so that I can fix it before the final release.

## CHANGES since 3.2.13

*Action Mailer*

No changes.

*Action Pack*

*   Merge `:action` from routing scope and assign endpoint if both `:controller`
    and `:action` are present. The endpoint assignment only occurs if there is
    no `:to` present in the options hash so should only affect routes using the
    shorthand syntax (i.e. endpoint is inferred from the the path).

    Fixes #9856

    *Yves Senn*, *Andrew White*

*   Always escape the result of `link_to_unless` method.

    Before:

        link_to_unless(true, '<b>Showing</b>', 'github.com')
        # => "<b>Showing</b>"

    After:

        link_to_unless(true, '<b>Showing</b>', 'github.com')
        # => "&lt;b&gt;Showing&lt;/b&gt;"

    *dtaniwaki*

*   Use a case insensitive URI Regexp for #asset_path.

    This fix a problem where the same asset path using different case are generating
    different URIs.

    Before:

        image_tag("HTTP://google.com")
        # => "<img alt=\"Google\" src=\"/assets/HTTP://google.com\" />"
        image_tag("http://google.com")
        # => "<img alt=\"Google\" src=\"http://google.com\" />"

    After:

        image_tag("HTTP://google.com")
        # => "<img alt=\"Google\" src=\"HTTP://google.com\" />"
        image_tag("http://google.com")
        # => "<img alt=\"Google\" src=\"http://google.com\" />"

    *David Celis + Rafael Mendonça França*

*   Fix explicit names on multiple file fields. If a file field tag has
    the multiple option, it is turned into an array field (appending `[]`),
    but if an explicit name is passed to `file_field` the `[]` is not
    appended.
    Fixes #9830.

    *Ryan McGeary*

*   Fix assets loading performance in 3.2.13.

    Issue #8756 uses Sprockets for resolving files that already exist on disk,
    for those files their extensions don't need to be rewritten.

    Fixes #9803.

    *Fred Wu*

*   Fix `ActionController#action_missing` not being called.
    Fixes #9799.

    *Janko Luin*

*   `ActionView::Helpers::NumberHelper#number_to_human` returns the number unaltered when
    the units hash does not contain the needed key, e.g. when the number provided is less
    than the largest key provided.

    Examples:

        number_to_human(123, units: {})                # => 123
        number_to_human(123, units: { thousand: 'k' }) # => 123

    Fixes #9269.
    Backport #9347.

    *Michael Hoffman*

*   Include I18n locale fallbacks in view lookup.
    Fixes GH#3512.

    *Juan Barreneche*

*   Fix `ActionDispatch::Request#formats` when the Accept request-header is an
    empty string. Fix #7774 [Backport #8977, #9541]

    *Soylent + Maxime Réty*

*Active Model*

No changes.

*Active Record*

*   Do not shallow the original exception in `exec_cache` on PostgreSQL adapter.

    Fixes #11260.

    *Rafael Mendonça França*

*   Fix `ActiveRecord::Store` incorrectly tracking changes of its attributes.
    Fixes #10373.

    *Janko Marohnić*

*   Fix a bug that prevented the use of the default STI inheritance column
    (ActiveRecord::Base.inheritance_column = 'some_column'.)

    *chapmajs + Takehiro Adachi*

*   Fix mysql2 adapter raises the correct exception when executing a query on a
    closed connection.

    *Yves Senn*

*   Fixes bug where `Company.new.contract_ids` would incorrectly load
    all non-associated contracts.

    Example:

        company = Company.new # Company has many :contracts

        # before
        company.contract_ids # => SELECT ... WHERE `contracts`.`company_id` IS NULL

        # after
        company.contract_ids # => []

    *Jared Armstrong*

*   Fix the `:primary_key` option for `has_many` associations.
    Fixes #10693.

    *Yves Senn*

*   fixes bug introduced by #3329.  Now, when autosaving associations,
    deletions happen before inserts and saves.  This prevents a 'duplicate
    unique value' database error that would occur if a record being created had
    the same value on a unique indexed field as that of a record being destroyed.

    Backport of #10417

    *Johnny Holton*

*   Fix that under some conditions, Active Record could produce invalid SQL of the sort:
    "SELECT DISTINCT DISTINCT".

    Backport of #6792.

    *Ben Woosley*

*   Require `ActiveRecord::Base` in railtie hooks for rake_tasks, console and runner to
    avoid circular constant loading issues.

    Backport #7695.

    Fixes #7683 and #882

    *Ben Holley*

*   Maintain context for joins within ActiveRecord::Relation merges.
    Backport #10164.

    *Neeraj Singh + Andrew Horner*

*   Make sure the `EXPLAIN` command is never triggered by a `select_db` call.

    *Daniel Schierbeck*

*   Revert changes on `pluck` that was ignoring the select clause when the relation already
    has one. This caused a regression since it changed the behavior in a stable release.

    Fixes #9777.

    *Rafael Mendonça França*

*   Confirm a record has not already been destroyed before decrementing counter cache.

    *Ben Tucker*

*   Default values for PostgreSQL bigint types now get parsed and dumped to the
    schema correctly.
    Backport #10098.

    *Erik Peterson*

*   Removed warning when `auto_explain_threshold_in_seconds` is set and the
    connection adapter doesn't support explain.
    This is causing a regression since the Active Record Railtie is trying to
    connect to the development database in the application boot.

    *Rafael Mendonça França*

*   Do not reset `inheritance_column` when it's set explicitly.
    Backport of #5327.

    *kennyj + Fred Wu*

*   Fix a problem wrong exception is occured
    when raising no translatable exception in PostgreSQL.

    *kennyj*

*   Resets the postgres search path in the structure.sql after the structure
    is dumped in order to find schema_migrations table when multiples schemas
    are used.
    Fixes #9796.

    *Juan M. Cuello + Dembskiy Alexander*

*   Reload the association target if it's stale. `@stale_state` should be nil
    when a model isn't saved.
    Fixes #7526.

    *Larry Lv*

*   Don't read CSV files during execution of `db:fixtures:load`. CSV support for
    fixtures was removed some time ago but the task was still loading them, even
    though later the code was looking for the related yaml file instead.

    *kennyj*

*Active Resource*

*   Fixes an issue that ActiveResource models ignores ActiveResource::Base.include_root_in_json.
    Backported from the now separate repo rails/activeresouce.

    *Xinjiang Lu*

*Active Support*

*   Make `Time.at_with_coercion` retain the second fraction and return local time.

    Fixes #11350

    *Neer Friedman*, *Andrew White*

*   Fix `ActiveSupport::TaggedLogging` incorrectly providing program name the same as log message
    even when block is not provided.

    *Carson Reinke*

*   Override `Time.at` to support the passing of Time-like values when called with a single argument.

    *Andrew White*

*   Revert the changes on unicode character encoding from `ActiveSupport::JSON.encode`.
    This was causing a regression where the resulting string is always returning UTF-8.
    Also it changes the behavior of this method on a stable release.
    Fixes #9498.

    *Rafael Mendonça França*

*   Fix `ActiveSupport::TimeZone.parse` when time is at a local DST jump.
    Fixes #9678.

    *Andrew White*

*Railties*

*   Fix bugs that crashed `rake test:benchmark`, `rails profiler` and
    `rails benchmarker`.
    Fixes #4938.
    Backport rails/rails-perftest#2.

    *Dmitry Vorotilin + Yves Senn*

*   Add support for runner hook.

    Backport #7695.

    *Ben Holley*

*   Fixes bug with scaffold generator with `--assets=false --resource-route=false`.
    Fixes #9525.

    *Arun Agrawal*

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v3.2.13...v3.2.14.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes:

* 1b8d20d39c9c5bb2fa56c835fe564bfcf6f55c66  actionmailer-3.2.14.rc1.gem
* ccf1df0c3daa92e5e72ec11f3399167e16d2a48f  actionpack-3.2.14.rc1.gem
* 263cbf1ce202095f92648171c6be92eca85837e0  activemodel-3.2.14.rc1.gem
* 51de13da5e9c9c9ccdd7f7bd4c2bfb3e1dd3dbb1  activerecord-3.2.14.rc1.gem
* da709adcc9f56364e0d697ea10e4acc9af48068a  activeresource-3.2.14.rc1.gem
* e45cd0115705514d00b1be917f06092af389fe5d  activesupport-3.2.14.rc1.gem
* 9fd0569cdee1ca0ab7b170f1c40c6c48304ec29e  rails-3.2.14.rc1.gem
* a2d485229708af4cdbbdaef72ef6f756fb1b1341  railties-3.2.14.rc1.gem

Thank you everyone!
