---
layout: post
title: ! '[ANN] Rails 3.1.0.rc3 has been released!'
categories: []
author: aaronp
published: true
date: 2011-06-08 22:14:00.000000000 +01:00
---
Hey folks.  Sorry for the multiple releases in such a short time span, but the security fixes released yesterday seem to have broken people's applications.  Even though this is a release candidate, I am not happy about breaking stuff.

I've pushed a 3.1.0.rc3.  Please test it against your application against this release candidate and report any regressions to the [rails core mailing list](http://groups.google.com/group/rubyonrails-core).  I would like to hear your feedback, good or bad.  Especially if it's good.  <3 <3

In two weeks, if there are no show stopping issues I will release the final version.  If we do find regressions, I will publish another release candidate and we'll put another two weeks on the clock.

However, I will not wait two weeks between release candidates.  I want to get the final done as quickly as possible, so I'll try to release RCs as quickly as possible.

## CHANGES

Here are some of the major changes to the RC branch:

* `mailto` SafeBuffer fixes
* `escape_javascript` SafeBuffer fixes
* Multiple sources in sprocket helpers

For an exaustive list, please check out the commits on [github](https://github.com/rails/rails/compare/v3.1.0.rc2...v3.1.0.rc3).

Thanks for your patience everyone!

<3 <3 <3