---
layout: post
title: 'Rails 5.2.1.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2018-07-30 16:39:31 -04:00
---
Hi everyone,

I am happy to announce that Rails 5.2.1.rc1 has been released.

If no regressions are found, expect the final release on Monday, August 6, 2018.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 5.2.0

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.2.1.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.2.0...v5.2.1.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.2.1.rc1:

```
$ shasum -a 256 *-5.2.1.rc1.gem
cf26a51b6483ce88c352687207557825b5ce22d45276f7b4f1168ef71275c5bb  actioncable-5.2.1.rc1.gem
733f8e2aa203ef83c1bcbc0ffa316b9fafeac8ea5c95dbfc41ec4af440fb8466  actionmailer-5.2.1.rc1.gem
9858e240e67a35fcfed8d87673ec496d3d2bd970d00fd6414d922772bed06460  actionpack-5.2.1.rc1.gem
cf68f757d8d71aee003889d8fd49a9f44d0ed348cd07a3ab34c953310f785565  actionview-5.2.1.rc1.gem
ad4575d404c1339c3782ad55976ab40b123e8217fbebfffc579e56f91b7c9bf1  activejob-5.2.1.rc1.gem
e1ee68dd9a8e659cbc523a1d0972b8fc4344ecab5a85aec7a7280d33a66076a4  activemodel-5.2.1.rc1.gem
e184d5b709e0e8351fa32485f63353272a41505b1dbf30c6034a60be321804b1  activerecord-5.2.1.rc1.gem
04b99f581620933447f10e0e9f8964863994962b3c4580e8c0103b9e3bd5ee18  activestorage-5.2.1.rc1.gem
f19afc75fa8527b850b12c343cd4e94b7d4d81f0de7126b03912db591789e167  activesupport-5.2.1.rc1.gem
78fbe88491b0a68f9fe68d7dd8594e2bc102c1aed99a5c5e8acca87e2ec914e7  rails-5.2.1.rc1.gem
a17f0d61e8da7970c19b98f95196d27115be7603a9badfedccd1329b2daffc93  railties-5.2.1.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.

