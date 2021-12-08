---
layout: post
title: 'Rails 5.0.4.rc1 has been released'
categories: releases
author: rafaelfranca
published: true
date: 2017-06-14 16:52:41 -04:00
---
Hi everyone,

I am happy to announce that Rails 5.0.4.rc1 has been released.

If no regressions are found, expect the final release on Monday, June 19, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 5.0.3

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.0.4.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.0.4.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.0.4.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.0.4.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.0.4.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.0.4.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.0.4.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.0.4.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.0.4.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.0.3...v5.0.4.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.0.4.rc1:

```
$ shasum -a 256 *-5.0.4.rc1.gem
c99354a6392225b29f01f2c0c73d27cd641a247298871640eeee032d1e6d9f58  actioncable-5.0.4.rc1.gem
07698e6e34e4d4c848cf6b13ea5555c7fa7904c8b6bc2583c9675e19ba91fda8  actionmailer-5.0.4.rc1.gem
828705ee694b5818ec06f05405223ce2f396aa23156e1084a02f0fac9ded2d9d  actionpack-5.0.4.rc1.gem
c8f07e7f26dd86467be877e17f637b76770ee571dd858e037995754ae38dbcd7  actionview-5.0.4.rc1.gem
6cf499ce3625be2f9ef8d998885651cee88335767311b6652bca3f1c271161a9  activejob-5.0.4.rc1.gem
147ec420d4e88fec7b10edb2efb404c563b0551230fc5e930f5c9fe627520c81  activemodel-5.0.4.rc1.gem
bc8f9aa699f31e5642a14afc3566f6744ad93ac80454306cba986ad530923c08  activerecord-5.0.4.rc1.gem
95fa2d6d89dec776faabc2878eb6334884455ff6836daaceaf2e7de3f3f07c64  activesupport-5.0.4.rc1.gem
44843943d4fc377d589bbead59fb74b5bb82e2ab9d1c160fe8884cac6bc17c17  rails-5.0.4.rc1.gem
95785e5e333e2db554e10e733069db1a3cd0d3137f63ec180491082c8b8afa71  railties-5.0.4.rc1.gem

```

As always, huge thanks to the many contributors who helped with this release.

