---
layout: post
title: '[ANN] Rails 4.2.8.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2017-02-10 00:10::00 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.8.rc1 has been released.

If no regressions are found, expect the final release on Wednesday, February 15, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.2.7.1

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.8.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.8.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.8.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.8.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.8.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.8.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.8.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.8.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.7.1...v4.2.8.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.2.8.rc1:

```
$ shasum *-4.2.8.rc1.gem
cb6ffe33124a95c84598437c3698f016acc30b01  actionmailer-4.2.8.rc1.gem
ed4c50bf4418ec6b82bf17cf41fcd8dd28a4c423  actionpack-4.2.8.rc1.gem
7ccc80e22af39350f0f2d8055663d1adb2320caa  actionview-4.2.8.rc1.gem
7dc4923abcbf3587c5aa6d6cf425ad0e3f69877e  activejob-4.2.8.rc1.gem
b97863c12a06beca60fe0f1e5760fd2e21f0d40d  activemodel-4.2.8.rc1.gem
40e7d2c780f8b0e70adb2a725fb773648539b4fe  activerecord-4.2.8.rc1.gem
edc12197ae5d6e13d6618c40143196ddd5debadd  activesupport-4.2.8.rc1.gem
04849eea3d5c5f20aa51b6dbd31357c9328d10ab  rails-4.2.8.rc1.gem
e05dce3a6c14b36b35bf1ea13433677e867602ae  railties-4.2.8.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.
