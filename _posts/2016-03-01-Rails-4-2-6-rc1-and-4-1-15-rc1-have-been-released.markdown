---
layout: post
title: '[ANN] Rails 4.2.6.rc1 and 4.1.15.rc1 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2016-03-01 18:10:00 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.6.rc1 and 4.1.15.rc1 have been released.

If no regressions are found expect the final release this Friday, on March 4, 2016.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.14

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.15.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.15.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.15.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.15.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.15.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.15.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.15.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.14.2...v4.1.15.rc1).

## CHANGES since 4.2.5

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.6.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.6.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.6.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.6.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.6.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.6.rc1/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.6.rc1/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.6.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.5.2...v4.2.6.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.1.15.rc1:

```
$ shasum *4.1.15.rc1.gem*
844351646e7ef5c93b3d21eb14a3d4da0c4bd92d  actionmailer-4.1.15.rc1.gem
1ed87a6847f2f4935f0a16ffa760716f0dc3f2d2  actionpack-4.1.15.rc1.gem
343b96bfe70ebde865fc4c809978cb060a0738c4  actionview-4.1.15.rc1.gem
cc913686a9f8462015d82ea827ddc60431af0db8  activemodel-4.1.15.rc1.gem
f1ff76eb16ba627b7202b2fecaa4219228d14034  activerecord-4.1.15.rc1.gem
2e00ba29b066afe23c152c96becef01fcee3cb10  activesupport-4.1.15.rc1.gem
67a534317cb8446525b644a7abf22bd09273264a  rails-4.1.15.rc1.gem
91b4ec78e9cfcee55e8d92760b6a628ccd20a2d4  railties-4.1.15.rc1.gem
```

Here are the checksums for 4.2.6.rc1:

```
$ shasum *4.2.6.rc1.gem*
09ef4800e26fd97d3cc64d1c53ae72bc16e79fd2  actionmailer-4.2.6.rc1.gem
1f41705eec68218ea291d7cdfa233c50c1172524  actionpack-4.2.6.rc1.gem
3cbf38b5021dbb9e587e003ad1782084e323ec35  actionview-4.2.6.rc1.gem
fea55eddff554d1995868b9891e111b683bbf70c  activejob-4.2.6.rc1.gem
46d87e81f73410631554d34e0548347955a6ced4  activemodel-4.2.6.rc1.gem
9496ed951ff242d9ac0a68643877b3b213d1147a  activerecord-4.2.6.rc1.gem
07ea5df02904eed063dd5093b5a7c6f39b3e70ae  activesupport-4.2.6.rc1.gem
3c3194bc02f22e7eac12d982208418d88c0d7a70  rails-4.2.6.rc1.gem
fc855160f5d04e3997d5a09a24027d9e330959b6  railties-4.2.6.rc1.gem
```

I'd like to thank you all, every contributor who helped with this release.
