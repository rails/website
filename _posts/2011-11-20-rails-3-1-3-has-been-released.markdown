---
layout: post
title: Rails 3.1.3 has been released
categories: []
author: jonleighton
published: true
date: 2011-11-20 23:14:00.000000000 +00:00
---
Rails 3.1.3 has been released. This release mainly contains fixes for regressions that popped up in 3.1.2.

## Changes ##

Action Pack:

*   Downgrade sprockets to ~> 2.0.3. Using 2.1.0 caused regressions.

*   Fix using `translate` helper with a html translation which uses the `:count` option for pluralization.

    *Jon Leighton*

Active Record:

*   Perf fix: If we're deleting all records in an association, don't add a IN(..) clause to the query. *GH 3672*

    *Jon Leighton*

*   Fix bug with referencing other mysql databases in set_table_name. *GH 3690*

*   Fix performance bug with mysql databases on a server with lots of other databses. *GH 3678*

    *Christos Zisopoulos and Kenny J*

Railties:

*   New apps should be generated with a sass-rails dependency of 3.1.5, not 3.1.5.rc.2

As ever, you can see [a full list of changes](https://github.com/rails/rails/compare/v3.1.2...v3.1.3) on Github.