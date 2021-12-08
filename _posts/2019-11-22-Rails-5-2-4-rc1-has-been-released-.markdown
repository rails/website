---
layout: post
title: 'Rails 5.2.4.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2019-11-22 19:39:57 -05:00
---
Hi everyone,

I am happy to announce that Rails 5.2.4.rc1 has been released.

This is going to be the last bug fix release of the 5.2 series, so please test the releases candidates
and report regressions so we can fix before the final release.

If no regressions are found, expect the final release on Wednesday, November 27, 2019.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 5.2.3

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.rc1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[5.2.4.rc1 CHANGELOG](https://github.com/rails/rails/releases/tag/v5.2.4.rc1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.2.3...v5.2.4.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.2.4.rc1:

```
$ shasum -a 256 *-5.2.4.rc1.gem
71c875fc798edf11372e801319dc0f85b22a6c3b15ee269f7e354bbd0b525df3  actioncable-5.2.4.rc1.gem
c623597a1ca76930cb28e5d07085b0ce5e89d465fbc5784753344633898d5118  actionmailer-5.2.4.rc1.gem
45393dfd757daa4e375846199fde5fce6713eb85793e441cc7b2cd091f543a14  actionpack-5.2.4.rc1.gem
74a0508940d34bad7c3f84668c20d0277f9cbdffc13c3cf55ee754c33afa1612  actionview-5.2.4.rc1.gem
12baf95010f778044d70ae2b3fae5755dc89113576082dbfc76f88b2a32ee70b  activejob-5.2.4.rc1.gem
7cd8ac1e7739181c83ad63e164a4e92d058f5b57dc040e2f03a724243dc6cb2a  activemodel-5.2.4.rc1.gem
088d6ebe600b8147ca0764c688ea5c184c3127dd8dfc4c41d36778335c8e4d85  activerecord-5.2.4.rc1.gem
0cc29d1439c4302f7515a9f703a4672b7a1764b67650074cd00c83914106daab  activestorage-5.2.4.rc1.gem
138926da539471bb91fd8270ded2f44aeafafcf45ede8ee68dee63873b1d0b4e  activesupport-5.2.4.rc1.gem
c9f9a2381a465888619736d6dd5108c795bbffabf0f1cd7cf49fbac26e4e88c8  rails-5.2.4.rc1.gem
e455f200dd872c710684db8e45b982a5d9de6c7e481c397715d1a232918a95db  railties-5.2.4.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.

