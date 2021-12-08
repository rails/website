---
layout: post
title: Rails 3.0.11 has been released
categories: []
author: jonleighton
published: true
date: 2011-11-18 01:27:00.000000000 +00:00
---
Rails 3.0.11 has been released. This is a patch-level release containing bug fixes and an important security fix.

## Possible XSS vulnerability in the translate helper method in Ruby on Rails ##

There is a vulnerability in the translate helper method which may allow an attacker to insert arbitrary code into a page.

* **Versions Affected**: 3.0.0 and later, 2.3.X in combination with the rails_xss plugin
* **Not Affected**:      Pre-3.0.0 releases, without the rails_xss plugin, did no automatic XSS escaping, so are not considered vulnerable
* **Fixed Versions**:    3.0.11, 3.1.2

Please see [the rubyonrails-security posting](http://groups.google.com/group/rubyonrails-security/browse_thread/thread/2b61d70fb73c7cc5) and the changelog item below, for more details.

## Changes ##

Action Mailer:

* No changes

Action Pack:

* Fix XSS security vulnerability in the `translate` helper method. When using interpolation
  in combination with HTML-safe translations, the interpolated input would not get HTML
  escaped. *GH 3664*

  Before:

      translate('foo_html', :something =&gt; '&lt;script&gt;') # =&gt; "...&lt;script&gt;..."

  After:

       translate('foo_html', :something =&gt; '&lt;script&gt;') # =&gt; "...&amp;lt;script&amp;gt;..."

  *Sergey Nartimov*

* Implement a workaround for a bug in ruby-1.9.3p0 where an error would be
  raised while attempting to convert a template from one encoding to another.

  Please see [http://redmine.ruby-lang.org/issues/5564](http://redmine.ruby-lang.org/issues/5564) for details of the bug.

  The workaround is to load all conversions into memory ahead of time, and will
  only happen if the ruby version is exactly 1.9.3p0. The hope is obviously
  that the underlying problem will be resolved in the next patchlevel release
  of 1.9.3.

* Fix assert\_select\_email to work on multipart and non-multipart emails as the method stopped working correctly in Rails 3.x due to changes in the new mail gem.

* Fix url_for when passed a hash to prevent additional options (eg. :host, :protocol) from being added to the hash after calling it.

Active Model:

* No changes

Active Record:

* Exceptions from database adapters should not lose their backtrace.

* Backport "ActiveRecord::Persistence#touch should not use default_scope" (GH #1519)

* Psych errors with poor yaml formatting are proxied. Fixes GH #2645 and
  GH #2731

* Fix ActiveRecord#exists? when passsed a nil value

Active Resource:

* No changes

Active Support:

* No changes

Railties:

* Updated Prototype UJS to lastest version fixing multiples errors in IE [Guillermo Iguaran]

As ever, you can [see a full list of commits between the versions](https://github.com/rails/rails/compare/v3.0.10...v3.0.11) on Github.