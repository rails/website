---
layout: post
title: '[ANN] Rails 4.2.5.rc2 and 4.1.14.rc2 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-11-06 20:00:00 -02:00
---

Hi everyone,

I am happy to announce that Rails 4.2.5.rc2 and 4.1.14.rc2 have been released.

If no regressions are found expect the final release this Wednesday, on November 11, 2015.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.13

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc2/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc2/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc2/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc2/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.13...v4.1.14.rc2).

## CHANGES since 4.2.4

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc2/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc2/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc2/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc2/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc2/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc2/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.4...v4.2.5.rc2).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.1.14.rc2:

```
$ shasum *4.1.14.rc2*
7c546616f87939a01807a55e78ed8494acc7c2ec  actionmailer-4.1.14.rc2.gem
8f80145fa65746c8a0a5492ae6213f447bbb0aaa  actionpack-4.1.14.rc2.gem
f0186571e89372ffbea47fbc4a3b901e46b0760e  actionview-4.1.14.rc2.gem
558e4eabcd1cec6a5089348dfd5a6f949d7606cc  activemodel-4.1.14.rc2.gem
0db20360a75bfa74b6539df190af8920bd75ff2f  activerecord-4.1.14.rc2.gem
3a2608827b895234e3d3b99e95df29344e31f875  activesupport-4.1.14.rc2.gem
5a9bd84dbc15a06128fc71d197cd6ee3d783114a  rails-4.1.14.rc2.gem
742da45dc3d63b43c882d7ce1d71f682bd1149c0  railties-4.1.14.rc2.gem
```

Here are the checksums for 4.2.5.rc2:

```
$ shasum *4.2.5.rc2*
d8fa2707c7f88aaf033b6ef2f0e39b5805823a8b  actionmailer-4.2.5.rc2.gem
80e43409399bcf3377c4a1aab803c442a635cadb  actionpack-4.2.5.rc2.gem
21d4a14dfec4ccfb321d51c1a73854f7c90003e0  actionview-4.2.5.rc2.gem
c1e258c2ed4b4e91b6d2f31d1a2020179043b5ba  activejob-4.2.5.rc2.gem
72f86e0ccb22e1b0f2980b500f1d7ced4d887da1  activemodel-4.2.5.rc2.gem
dc8cbcd461f3d3b583ac18c2d3c4fc5a8857ce72  activerecord-4.2.5.rc2.gem
40b5b72140f30bc97b7dc9e30c12d86ade0692b8  activesupport-4.2.5.rc2.gem
d3b7ee2ef71d9a9a4cb0a237162a67393549eeed  rails-4.2.5.rc2.gem
5969ef6ef00239fb5d2b012eb23068f1620a2563  railties-4.2.5.rc2.gem
```

I'd like to thank you all, every contributor who helped with this release.
