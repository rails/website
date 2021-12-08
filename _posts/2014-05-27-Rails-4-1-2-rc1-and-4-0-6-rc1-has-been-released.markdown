---
layout: post
title: '[ANN] Rails 4.1.2.rc1 and 4.0.6.rc1 have been released!'
category: releases
author: rafaelfranca
published: true
date: 2014-05-27 13:17:03 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.1.2.rc1 is the first bug fix release for the 4.1 series.
Also, we are releasing a new bug fix release for the 4.0 series, as 4.0.6.rc1.

If no regressions are found expect the final release this Friday, on May 30, 2014.
If you find one, please open an Issue on GitHub and mention me (@rafaelfranca) on it,
so that we can fix it before the final release.

## CHANGES since 4.0.5

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc1/actionpack/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.0.5...v4.0.6.rc1).

## CHANGES since 4.1.1

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.1...v4.1.2.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.0.6.rc1:

```
$ shasum *4.0.6.rc1*
bfaa81992f296ef78ca9fc3bb91f0774d791a2f1  actionmailer-4.0.6.rc1.gem
f5bda30b6b4055fead69615cb1002e0a7d0b3ea8  actionpack-4.0.6.rc1.gem
8ebc8ee9fc2397938779145fd72a4b3bdf1403f0  activemodel-4.0.6.rc1.gem
3c7020e743f0ae31a50ec66ca539d1edec6f056a  activerecord-4.0.6.rc1.gem
d2fd5241f4725e5c8cea638e2a5e9f9fbff653b7  activesupport-4.0.6.rc1.gem
b44d1a9fc30939c5d83e1f09fba0c0f6cb7f675a  rails-4.0.6.rc1.gem
dbe182d875924600750972e9c0a5025ee2921e55  railties-4.0.6.rc1.gem
```

Here are the checksums for 4.1.2.rc1:

```
$ shasum *4.1.2.rc1*
7eb15b9912f8f6948be4091a165417552930950c  actionmailer-4.1.2.rc1.gem
4dde8326e5fdf09a682966d048855d6adb9c49cc  actionpack-4.1.2.rc1.gem
86c81d9dc97b7e23a8ff39826ee7d92d3b0bc78c  actionview-4.1.2.rc1.gem
df193047dc7daabfea8e0a59326ba35ffa7bdd9a  activemodel-4.1.2.rc1.gem
231e81b5baa8eec3a5f7d9b1eb476951f5af619b  activerecord-4.1.2.rc1.gem
ab905ad3df3b4e76622dc209e3f4804612ccf0b7  activesupport-4.1.2.rc1.gem
3f550100c230a76da51b844f88b606eee8e19594  rails-4.1.2.rc1.gem
d2fd2645af58591f09c9a0af6ca61b6005fd8854  railties-4.1.2.rc1.gem
```

I'd like to thank you all, every contributor who helped with this release.
