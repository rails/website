---
layout: post
title: '[ANN] Rails 4.2.3.rc1 and 4.1.12.rc1 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-06-22 12:04:06 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.3.rc1 and 4.1.12.rc1 have been released.

If no regressions are found expect the final release this Thursday, on June 25, 2015.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.11

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.12.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.12.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.12.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.12.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.12.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.12.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.12.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.11...v4.1.12.rc1).

## CHANGES since 4.2.2

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.3.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.3.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.3.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.3.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.3.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.3.rc1/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.3.rc1/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.3.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.2...v4.2.3.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.1.12.rc1:

```
$ shasum *4.1.12.rc1*
5309022944d12fcf015f8993db2c69f66d0fa9c4  actionmailer-4.1.12.rc1.gem
7e66207c9bd27bd07966a93e4a14abbf792920d7  actionpack-4.1.12.rc1.gem
17a9c55edf3988a28af2017f901bcbcc7257c99a  actionview-4.1.12.rc1.gem
78a04199bb509617d672e62076a704849b90650d  activemodel-4.1.12.rc1.gem
b7ffcf6ac2c9929d18e406dfb9fd6b9858d3d893  activerecord-4.1.12.rc1.gem
c8bbbc325547bd3707b445e79c95406e057037c2  activesupport-4.1.12.rc1.gem
a3307e12472796620e1e7b3b71ce1e0c6a112854  rails-4.1.12.rc1.gem
dfd11e7529f6b21049644c16b62e53d898ce4013  railties-4.1.12.rc1.gem
```

Here are the checksums for 4.2.3.rc1:

```
$ shasum *4.2.3.rc1*
3af2c0a834e8f6c26656720419bedc2935df4424  actionmailer-4.2.3.rc1.gem
bdf102b742a963d3b1697e4e876900c1644fe502  actionpack-4.2.3.rc1.gem
94020ee0a2372d601de8c2e62a672ea35d1548cd  actionview-4.2.3.rc1.gem
f9429285835d11a9de31f51349d35f75bf242a02  activejob-4.2.3.rc1.gem
92cedde54d1c3951ed431825b36e6868b5c79142  activemodel-4.2.3.rc1.gem
9cafdd1bd85ca8a61c73f2cb31973cc4074c252f  activerecord-4.2.3.rc1.gem
8c2740af13ff4e664edef95f49a1e7536168e8fa  activesupport-4.2.3.rc1.gem
a1eeaaa8e7bb3a2f9ee29bf5525eaea54313a4a6  rails-4.2.3.rc1.gem
8aa764a9befa9ecad476bb7d07403da4ceea67a6  railties-4.2.3.rc1.gem
```

I'd like to thank you all, every contributor who helped with this release.
