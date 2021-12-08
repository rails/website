---
layout: post
title: '[ANN] Rails 4.2.1.rc2 and 4.1.10.rc2 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-02-25 19:40:06 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.1.rc2 and 4.1.10.rc2 have been released.

There were found some regressions in the last release candidates so, following release process we are
releasing new release candidates.

If no regressions are found expect the final release this Monday, on March 2, 2015.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.9

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc2/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc2/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc2/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc2/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.9...v4.1.10.rc2).

## CHANGES since 4.2.0

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc2/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc2/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc2/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc2/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc2/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc2/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.0...v4.2.1.rc2).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.1.10.rc2:

```
$ shasum *4.1.10.rc2*
2ac66bc18099e97e91433dd2a16610840adbe229  actionmailer-4.1.10.rc2.gem
7af1a70d5436936df7602ce25b8607dd657d26fd  actionpack-4.1.10.rc2.gem
25f87be1c36551583c5bdc3034731ab9d327e650  actionview-4.1.10.rc2.gem
61eddccaa119592a8fa3424e33af26f3c52afd87  activemodel-4.1.10.rc2.gem
30bd5d356e704f9122f51d0503a3d57bd4b7c456  activerecord-4.1.10.rc2.gem
1da6fd1c9f6a5bebf743ddbc13d25c54293baf5a  activesupport-4.1.10.rc2.gem
7c42be6e6a7f059dcad390f0d690aff842138870  rails-4.1.10.rc2.gem
3f036bc1450f4e784ee0ce8118f057f68e56422d  railties-4.1.10.rc2.gem
```

Here are the checksums for 4.2.1.rc2:

```
$ shasum *4.2.1.rc2*
af8d52587a348ea70e9b6a751207a9a6aa4044f3  actionmailer-4.2.1.rc2.gem
ab218bb9396357b48027e1512544cfb3188ec3bd  actionpack-4.2.1.rc2.gem
5315fd389885775fc03863146704aab37333e0c8  actionview-4.2.1.rc2.gem
15c11c2aff82876241a3a9ff90b00dfb6d834fa2  activejob-4.2.1.rc2.gem
f700c318378a8e3292b23c9495e68bc49f9a1ef1  activemodel-4.2.1.rc2.gem
dc91f9e52b8fd9ab0fac294f13ab7f9425cb0a67  activerecord-4.2.1.rc2.gem
ab95e792e93392605985469b3ec0546d3917c63c  activesupport-4.2.1.rc2.gem
af242d941255666ce08a51813898fe8c29bb613d  rails-4.2.1.rc2.gem
c0e72712484fdc821d6a0f08504318e075feba83  railties-4.2.1.rc2.gem

```

I'd like to thank you all, every contributor who helped with this release.
