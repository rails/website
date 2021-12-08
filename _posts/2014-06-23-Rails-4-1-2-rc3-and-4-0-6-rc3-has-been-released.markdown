---
layout: post
title: '[ANN] Rails 4.1.2.rc3 and 4.0.6.rc3 have been released!'
category: releases
author: rafaelfranca
published: true
date: 2014-06-23 14:35:03 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.1.2.rc3 and 4.0.6.rc3 have been released.

We fixed two regressions on Active Record component.

If no more new regressions are found expect the final release this Thursday, on Jun 26, 2014.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.0.5

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc3/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc3/actionpack/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc3/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc3/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc3/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc3/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.0.5...v4.0.6.rc3).

## CHANGES since 4.1.1

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc3/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc3/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc3/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc3/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc3/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc3/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc3/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.1...v4.1.2.rc3).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.0.6.rc3:

```
$ shasum *4.0.6.rc3*
af0d0aab4192f9d37ae238085cd9b410015a1b08  actionmailer-4.0.6.rc3.gem
6911962ef02985ed42fb8829fc4c2c11d0cb7563  actionpack-4.0.6.rc3.gem
e6d6ede05f749122875e171183e7f619af742d53  activemodel-4.0.6.rc3.gem
e4e206c07f42e52785d2964ff90d79c62818ed46  activerecord-4.0.6.rc3.gem
69ede48c8330b294a9eb3ed4c597624842b170ca  activesupport-4.0.6.rc3.gem
2793dd17405af95695c9988fddcbc5c2a2429aca  rails-4.0.6.rc3.gem
369a895d38d264b01f7cd370e7a9edba8cc7f71b  railties-4.0.6.rc3.gem
```

Here are the checksums for 4.1.2.rc3:

```
$ shasum *4.1.2.rc3*
4693dd6351e942abadd5c91b20a329ecfcb48374  actionmailer-4.1.2.rc3.gem
a4d75f35b9d8ccc6d80fb797ce94866cf3491ae7  actionpack-4.1.2.rc3.gem
ee9cd1b5cd319c41fdf7a067fd49e042853c6465  actionview-4.1.2.rc3.gem
e2c715ab894261187f1bfe3ce1845bab846ec905  activemodel-4.1.2.rc3.gem
902e4d82d03d460ab4aa3cbcdbaeb5d11135500e  activerecord-4.1.2.rc3.gem
1c086568424a2e511cd2ba3c97c42963c9a474eb  activesupport-4.1.2.rc3.gem
bfb012898f5f4af3f7da0a33929cd9f7ae888902  rails-4.1.2.rc3.gem
5b0c6c33db6aaf8fb7ad940e88c87c345949c84b  railties-4.1.2.rc3.gem
```

I'd like to thank you all, every contributor who helped with this release.
