---
layout: post
title: ! '[ANN] Rails 3.0.9.rc1 has been released!'
categories: []
author: aaronp
published: true
date: 2011-06-08 22:12:00.000000000 +01:00
---
Hey folks.  Sorry for the multiple releases in such a short time span, but the security fixes released yesterday seem to have broken people's applications.  I am not happy about that.

I've pushed a 3.0.9.rc1.  Please test it against your application against this release candidate and report any regressions to the [rails core mailing list](http://groups.google.com/group/rubyonrails-core).  I would like to hear your feedback, good or bad.

I will release the final in 72hours if there are no reported regressions.  If there are reported regressions, I will release another RC and the clock will start over.

## CHANGES

Here are some of the major changes:

* MemCacheStore works with Ruby 1.9 and -Ku
* `mailto` SafeBuffer fixes
* `escape_javascript` SafeBuffer fixes

For an exaustive list, please check out the commits on [github](https://github.com/rails/rails/compare/v3.0.8...v3.0.9.rc1).

Thanks for your patience everyone!

<3 <3 <3