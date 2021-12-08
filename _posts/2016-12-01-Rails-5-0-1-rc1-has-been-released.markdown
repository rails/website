---
layout: post
title: '[ANN] Rails 5.0.1.rc1 has been released!'
categories: releases
author: matthewd
published: true
date: 2016-12-01 06:37:36 +10:30
---

Hi everyone,

I am happy to announce that Rails 5.0.1.rc1 has been released.

If no regressions are found, expect the final release on Tuesday, December 6, 2016.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@matthewd) on it, so that we can fix it before the final release.

## CHANGES since 5.0.0

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.0.0...v5.0.1.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 5.0.1.rc1:

```
$ shasum *-5.0.1.rc1.gem
f912b040b65f335c93ae888eb3317a8b161abbb1  actioncable-5.0.1.rc1.gem
2f6190125148b61871fd01323798cfbfbf267723  actionmailer-5.0.1.rc1.gem
161e6e15206028d76c8f2d4822c8783f16ac46ec  actionpack-5.0.1.rc1.gem
09f86171dfdb6d60146b3028cd71b5760e8c2432  actionview-5.0.1.rc1.gem
8506ea383e722304614f89e3757bf2546d5c6d8f  activejob-5.0.1.rc1.gem
25c3f96faee14dcbc3d91a465ad6b3866fd19cfb  activemodel-5.0.1.rc1.gem
2e01ee70c2e3b49885ae9b1a845d33327c7010e8  activerecord-5.0.1.rc1.gem
02412998c47a1ca8d1b7459976b98414aa535916  activesupport-5.0.1.rc1.gem
cae7d263e8128fab14b72d32ad6e82e436fd58bc  rails-5.0.1.rc1.gem
5193a647536cd700b13c18e6de6a4382ead7c6e0  railties-5.0.1.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.
