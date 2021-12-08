---
layout: post
title: Rails 3.2.9.rc1 has been released!
categories: []
author: spastorino
published: true
---

Hi everyone,

Rails 3.2.9.rc1 has been released. If no regressions are found I will
release 3.2.9 final this Thursday 1st. If you find a regression open an
issue on github and mention me on it, mail me or tweet me, whatever but
let me know :).

## CHANGES since 3.2.8

*Action Mailer*

* Do not render views when mail() isn't called.
  Fix #7761

  *Yves Senn*


*Action Pack*

*   Accept :remote as symbolic option for `link_to` helper. *Riley Lynch*

*   Warn when the `:locals` option is passed to `assert_template` outside of a view test case
    Fix #3415

    *Yves Senn*

*   Rename internal variables on ActionController::TemplateAssertions to prevent
    naming collisions. @partials, @templates and @layouts are now prefixed with an underscore.
    Fix #7459

    *Yves Senn*

*   `resource` and `resources` don't modify the passed options hash
    Fix #7777

    *Yves Senn*

*   Precompiled assets include aliases from foo.js to foo/index.js and vice versa.

        # Precompiles phone-<digest>.css and aliases phone/index.css to phone.css.
        config.assets.precompile = [ 'phone.css' ]

        # Precompiles phone/index-<digest>.css and aliases phone.css to phone/index.css.
        config.assets.precompile = [ 'phone/index.css' ]

        # Both of these work with either precompile thanks to their aliases.
        <%= stylesheet_link_tag 'phone', media: 'all' %>
        <%= stylesheet_link_tag 'phone/index', media: 'all' %>

    *Jeremy Kemper*

*   `assert_template` is no more passing with what ever string that matches
    with the template name.

    Before when we have a template `/layout/hello.html.erb`, `assert_template`
    was passing with any string that matches. This behavior allowed false
    positive like:

        assert_template "layout"
        assert_template "out/hello"

    Now it only passes with:

        assert_template "layout/hello"
        assert_template "hello"

    Fixes #3849.

    *Hugolnx*

*   Handle `ActionDispatch::Http::UploadedFile` like `Rack::Test::UploadedFile`, don't call to_param on it. Since
    `Rack::Test::UploadedFile` isn't API compatible this is needed to test file uploads that rely on `tempfile`
    being available.

    *Tim Vandecasteele*

*   Fixed a bug with shorthand routes scoped with the `:module` option not
    adding the module to the controller as described in issue #6497.
    This should now work properly:

        scope :module => "engine" do
          get "api/version" # routes to engine/api#version
        end

    *Luiz Felipe Garcia Pereira*

*   Respect `config.digest = false` for `asset_path`

    Previously, the `asset_path` internals only respected the `:digest`
    option, but ignored the global config setting. This meant that
    `config.digest = false` could not be used in conjunction with
    `config.compile = false` this corrects the behavior.

    *Peter Wagenet*

*   Fix #7646, the log now displays the correct status code when an exception is raised.

    *Yves Senn*

*   Fix handling of date selects when using both disabled and discard options.
    Fixes #7431.

    *Vasiliy Ermolovich*

*   Fix select_tag when option_tags is nil.
    Fixes #7404.

    *Sandeep Ravichandran*

*   `javascript_include_tag :all` will now not include `application.js` if the file does not exists. *Prem Sichanugrist*

*   Support cookie jar options (e.g., domain :all) for all session stores.
    Fixes GH#3047, GH#2483.

    *Ravil Bayramgalin*

*   Performance Improvement to send_file: Avoid having to pass an open file handle as the response body. Rack::Sendfile
    will usually intercept the response and just uses the path directly, so no reason to open the file. This performance
    improvement also resolves an issue with jRuby encodings, and is the reason for the backport, see issue #6844.

    *Jeremy Kemper & Erich Menge*


*Active Model*

*   Due to a change in builder, nil values and empty strings now generates
    closed tags, so instead of this:

        <pseudonyms nil=\"true\"></pseudonyms>

    It generates this:

        <pseudonyms nil=\"true\"/>

    *Carlos Antonio da Silva*


*Active Record*

*   Fix bug where `update_columns` and `update_column` would not let you update the primary key column.

    *Henrik Nyh*

*   Decode URI encoded attributes on database connection URLs.

    *Shawn Veader*

*   Fix AR#dup to nullify the validation errors in the dup'ed object. Previously the original
    and the dup'ed object shared the same errors.

    * Christian Seiler*

*   Synchronize around deleting from the reserved connections hash.
    Fixes #7955

*   PostgreSQL adapter correctly fetches default values when using
    multiple schemas and domains in a db. Fixes #7914

    *Arturo Pie*

*   Fix deprecation notice when loading a collection association that
    selects columns from other tables, if a new record was previously
    built using that association.

    *Ernie Miller*

*   The postgres adapter now supports tables with capital letters.
    Fix #5920

    *Yves Senn*

*   `CollectionAssociation#count` returns `0` without querying if the
    parent record is not persisted.

    Before:

        person.pets.count
        # SELECT COUNT(*) FROM "pets" WHERE "pets"."person_id" IS NULL
        # => 0

    After:

        person.pets.count
        # fires without sql query
        # => 0

    *Francesco Rodriguez*

*   Fix `reset_counters` crashing on `has_many :through` associations.
    Fix #7822.

    *lulalala*

*   ConnectionPool recognizes checkout_timeout spec key as taking
    precedence over legacy wait_timeout spec key, can be used to avoid
    conflict with mysql2 use of wait_timeout.  Closes #7684.

    *jrochkind*

*   Rename field_changed? to _field_changed? so that users can create a field named field

    *Akira Matsuda*, backported by *Steve Klabnik*

*   Fix creation of through association models when using `collection=[]`
    on a `has_many :through` association from an unsaved model.
    Fix #7661.

    *Ernie Miller*

*   Explain only normal CRUD sql (select / update / insert / delete).
    Fix problem that explains unexplainable sql. Closes #7544 #6458.

    *kennyj*

*   Backport test coverage to ensure that PostgreSQL auto-reconnect functionality
    remains healthy.

    *Steve Jorgensen*

*   Use config['encoding'] instead of config['charset'] when executing
    databases.rake in the mysql/mysql2. A correct option for a database.yml
    is 'encoding'.

    *kennyj*

*   Fix ConnectionAdapters::Column.type_cast_code integer conversion,
    to always convert values to integer calling #to_i. Fixes #7509.

    *Thiago Pradi*

*   Fix time column type casting for invalid time string values to correctly return nil.

    *Adam Meehan*

*   Fix `becomes` when using a configured `inheritance_column`.

    *Yves Senn*

*   Fix `reset_counters` when there are multiple `belongs_to` association with the
    same foreign key and one of them have a counter cache.
    Fixes #5200.

    *Dave Desrochers*

*   Round usec when comparing timestamp attributes in the dirty tracking.
    Fixes #6975.

    *kennyj*

*   Use inversed parent for first and last child of has_many association.

    *Ravil Bayramgalin*

*   Fix Column.microseconds and Column.fast_string_to_date to avoid converting
    timestamp seconds to a float, since it occasionally results in inaccuracies
    with microsecond-precision times. Fixes #7352.

    *Ari Pollak*

*   Fix `increment!`, `decrement!`, `toggle!` that was skipping callbacks.
    Fixes #7306.

    *Rafael Mendonça França*

*   Fix AR#create to return an unsaved record when AR::RecordInvalid is
    raised. Fixes #3217.

    *Dave Yeu*

*   Remove unnecessary transaction when assigning has_one associations with a nil or equal value.
    Fix #7191.

    *kennyj*

*   Allow store to work with an empty column.
    Fix #4840.

    *Jeremy Walker*

*   Remove prepared statement from system query in postgresql adapter.
    Fix #5872.

    *Ivan Evtuhovich*

*   Make sure `:environment` task is executed before `db:schema:load` or `db:structure:load`
    Fixes #4772.

    *Seamus Abshere*


*Active Resource*

* No changes


*Active Support*

*   Add logger.push_tags and .pop_tags to complement logger.tagged:

        class Job
          def before
            Rails.logger.push_tags :jobs, self.class.name
          end

          def after
            Rails.logger.pop_tags 2
          end
        end

    *Jeremy Kemper*

*  Add %:z and %::z format string support to ActiveSupport::TimeWithZone#strftime. [fixes #6962] *kennyj*


*Railties*

*   Don't eager-load app/assets and app/views *Elia Schito*

*   Update supported ruby versions error message in ruby_version_check.rb *Lihan Li*

## SHA-1

* 24af6eff6b7c647d04eee9585184ba89f0746d40  actionmailer-3.2.9.rc1.gem
* c34ea8f12308c9f6fc4d6b31ce8caa2a562b210a  actionpack-3.2.9.rc1.gem
* 8b3171fdde905c76a541286192e6cef211d83a70  activemodel-3.2.9.rc1.gem
* 0752e47880da4bb9be2b0309bce5a444a9271420  activerecord-3.2.9.rc1.gem
* d8c1eeedbf3bc33d1560700cc70cb1752cdc811a  activeresource-3.2.9.rc1.gem
* 8ad917f70cc3b0a04864c8aa705a0e4997736872  activesupport-3.2.9.rc1.gem
* 6fdc627a032f1f3ded7830e044298e20fd3fc6ce  rails-3.2.9.rc1.gem
* 444da0c3f2a1e3200d2a613973062c2d3e4ad7d0  railties-3.2.9.rc1.gem

You can find a list of changes between v3.2.8 and v3.2.9.rc1 [here](https://github.com/rails/rails/compare/v3.2.8...v3.2.9.rc1)

Thanks to everyone!
