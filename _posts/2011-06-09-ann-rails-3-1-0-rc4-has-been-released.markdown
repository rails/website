---
layout: post
title: ! '[ANN] Rails 3.1.0.rc4 has been released!'
categories: []
author: aaronp
published: true
date: 2011-06-09 23:11:00.000000000 +01:00
---
I've pushed a 3.1.0.rc4.  Please test it against your application against this release candidate and report any regressions to the [rails core mailing list](http://groups.google.com/group/rubyonrails-core).  I would like to hear your feedback, good or bad.  Especially if it's good.  <3 <3

In two weeks, if there are no show stopping issues I will release the final version.  If we do find regressions, I will publish another release candidate and we'll put another two weeks on the clock.

However, I will not wait two weeks between release candidates.  I want to get the final done as quickly as possible, so I'll try to release RCs as quickly as possible.

## CHANGES

Here are some of the major changes to the RC branch:

* `escape_javascript` safebuffer fixes
* `json_escape` safebuffer fixes
* RDoc / ruby-debug conflict fixes.
* `arel_table` is cached unless the `table_name` changes

For an exaustive list, please check out the commits on [github](https://github.com/rails/rails/compare/v3.1.0.rc3...v3.1.0.rc4).

<3 <3 <3