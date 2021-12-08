---
layout: post
title: ! '[ANN] Rails 3.2.2 has been released!'
categories: []
author: aaronp
published: true
date: 2012-03-01 18:12:00.000000000 +00:00
---
Rails 3.2.2 has been released.  This release contains various bug fixes and two important security fixes.  All users are recommended to upgrade as soon as possible.

## CHANGES

For information regarding the possible vulnerabilities, please see the announcements [here](http://groups.google.com/group/rubyonrails-security/browse_thread/thread/edd28f1e3d04e913) and [here](http://groups.google.com/group/rubyonrails-security/browse_thread/thread/9da0c515a6c4664).

Some highlights from this release are:

  * Log files are always flushed

  * Failing tests will exit with nonzero status code

  * Elimination of calls to deprecated methods

  * Query cache instrumentation includes bindings in the payload

  * Hidden checkbox values are not set if the value is nil

  * Various Ruby 2.0 compatibility fixes

For a comprehensive list, see the [commits on github](https://github.com/rails/rails/compare/v3.2.1...v3.2.2).