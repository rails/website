---
layout: post
title: Rails 3.1.2 has been released
categories: []
author: jonleighton
published: true
date: 2011-11-18 01:51:00.000000000 +00:00
---
Rails 3.1.2 has been released. This is a patch-level release containing bug fixes and an important security fix.

## Possible XSS vulnerability in the translate helper method in Ruby on Rails ##

There is a vulnerability in the translate helper method which may allow an attacker to insert arbitrary code into a page.

* **Versions Affected**: 3.0.0 and later, 2.3.X in combination with the rails_xss plugin
* **Not Affected**:      Pre-3.0.0 releases, without the rails_xss plugin, did no automatic XSS escaping, so are not considered vulnerable
* **Fixed Versions**:    3.0.11, 3.1.2

Please see [the rubyonrails-security posting](http://groups.google.com/group/rubyonrails-security/browse_thread/thread/2b61d70fb73c7cc5) and the changelog item below, for more details.

## Changes ##

Action Mailer:

*   No changes

Action Pack:

* Fix XSS security vulnerability in the `translate` helper method. When using interpolation
  in combination with HTML-safe translations, the interpolated input would not get HTML
  escaped. *GH 3664*

  Before:

      translate('foo_html', :something =&gt; '&lt;script&gt;') # =&gt; "...&lt;script&gt;..."

  After:

       translate('foo_html', :something =&gt; '&lt;script&gt;') # =&gt; "...&amp;lt;script&amp;gt;..."

  *Sergey Nartimov*

*   Upgrade sprockets dependency to ~> 2.1.0

*   Ensure that the format isn't applied twice to the cache key, else it becomes impossible to target with expire_action.

    *Christopher Meiklejohn*

*   Swallow error when can't unmarshall object from session.

    *Bruno Zanchet*

*   Implement a workaround for a bug in ruby-1.9.3p0 where an error would be raised while attempting to convert a template from one encoding to another.

    Please see [http://redmine.ruby-lang.org/issues/5564](http://redmine.ruby-lang.org/issues/5564) for details of the bug.

    The workaround is to load all conversions into memory ahead of time, and will only happen if the ruby version is *exactly* 1.9.3p0. The hope is obviously that the underlying problem will be resolved in the next patchlevel release of 1.9.3.

    *Jon Leighton*

*   Ensure users upgrading from 3.0.x to 3.1.x will properly upgrade their flash object in session (issues #3298 and #2509)

Active Model:

*   No changes

Active Record:

*   Fix problem with prepared statements and PostgreSQL when multiple schemas are used.
    *GH #3232*

    *Juan M. Cuello*

*   Fix bug with PostgreSQLAdapter#indexes. When the search path has multiple schemas, spaces
    were not being stripped from the schema names after the first.

    *Sean Kirby*

*   Preserve SELECT columns on the COUNT for finder_sql when possible. *GH 3503*

    *Justin Mazzi*

*   Reset prepared statement cache when schema changes impact statement results. *GH 3335*

    *Aaron Patterson*

*   Postgres: Do not attempt to deallocate a statement if the connection is no longer active.

    *Ian Leitch*

*   Prevent QueryCache leaking database connections. *GH 3243*

    *Mark J. Titorenko*

*   Fix bug where building the conditions of a nested through association could potentially
    modify the conditions of the through and/or source association. If you have experienced
    bugs with conditions appearing in the wrong queries when using nested through associations,
    this probably solves your problems. *GH #3271*

    *Jon Leighton*

*   If a record is removed from a has_many :through, all of the join records relating to that
    record should also be removed from the through association's target.

    *Jon Leighton*

*   Fix adding multiple instances of the same record to a has_many :through. *GH #3425*

    *Jon Leighton*

*   Fix creating records in a through association with a polymorphic source type. *GH #3247*

    *Jon Leighton*

*   MySQL: use the information_schema than the describe command when we look for a primary key. *GH #3440*

    *Kenny J*

Active Resource:

*   No changes

Active Support:

*   No changes

Railties:

*   Engines: don't blow up if db/seeds.rb is missing.

    *Jeremy Kemper*

*   `rails new foo --skip-test-unit` should not add the `:test` task to the rake default task.
    *GH 2564*

    *José Valim*

As ever, you can [see a full list of commits between the versions](https://github.com/rails/rails/compare/v3.1.1...v3.1.2) on Github.