---
layout: post
title: 'Rails 5.1.7.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2019-03-22 00:22:39 -04:00
---
Hi everyone,

I am happy to announce that Rails 5.1.7.rc1 has been released.

This is going to be the final bug fix release for the 5.1 series, so please make sure you test
the release candidates to make sure no regressions are found.

If no regressions are found, expect the final release on Wednesday, March 27, 2019.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.



## CHANGES since 5.1.6

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.1.7.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.1.7.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.1.7.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.1.7.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.1.7.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.1.7.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.1.7.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.1.7.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.1.7.rc1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[5.1.7.rc1 CHANGELOG](https://github.com/rails/rails/releases/tag/v5.1.7.rc1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.1.6...v5.1.7.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.1.7.rc1:

```
$ shasum -a 256 *-5.1.7.rc1.gem
4b50c8213b6b4846f35d994991458da797185f9e0ca92063131a59f5890bb5e3  actioncable-5.1.7.rc1.gem
65c84a566b58a4faf10e02abe4dd09f5d7101cfb79896cbf3bfb0d623c06f07b  actionmailer-5.1.7.rc1.gem
8c230b21146c155793c874da49f032be595343df4e8cca59b4be172d10b95e5a  actionpack-5.1.7.rc1.gem
cd9b9acf025c99c113155192622ebb333c729e8a99dea43d91c6016bdb287e0b  actionview-5.1.7.rc1.gem
3308343948ca041b58068c34cc312de1b867f46c8feaf997421ce4e182d8a2e7  activejob-5.1.7.rc1.gem
9ad6fc7f9cb05b5d38462672315b4b05863d263ba46b035367d7e290dc7dd160  activemodel-5.1.7.rc1.gem
4940e5f4c2e4cc1ca8e2d3d41ebf514e5d315e1f39884d518e22e8600b7b0d22  activerecord-5.1.7.rc1.gem
26e956e7b2d16e0783f48ae05e6822da2aabac96ecf1f3b78d6e035145f10b6c  activesupport-5.1.7.rc1.gem
ca0f895446ceece1d904e96bedff90224e715acb9f124b60ffc9ac1b568ed07d  rails-5.1.7.rc1.gem
bbd0b366890da1c6baa3bd68c3132e499f53143351b7ab382c661a0fb9f07ac1  railties-5.1.7.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.

