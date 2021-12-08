---
layout: post
title: '[ANN] Rails 5.0.1.rc2 has been released!'
categories: releases
author: matthewd
published: true
date: 2016-12-10 04:50:25 +10:30
---

Hi everyone,

I am happy to announce that Rails 5.0.1.rc2 has been released.

If no further regressions are found, expect the final release on Wednesday, December 14, 2016.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@matthewd) on it, so that we can fix it before the final release.

## CHANGES since 5.0.0

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc2/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc2/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc2/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc2/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc2/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.0.1.rc2/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.0.0...v5.0.1.rc2).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 5.0.1.rc2:

```
$ shasum *-5.0.1.rc2.gem
52c2dffc42e386aacf28f1033edd975804770bef  actioncable-5.0.1.rc2.gem
0bf7faf211a7d9413432c59a4700bea3b3a41975  actionmailer-5.0.1.rc2.gem
127a122087e941eb245f500dc000779fb85916c6  actionpack-5.0.1.rc2.gem
3622fcb6e46d1ff48c2a2c3e773ecad769c776e0  actionview-5.0.1.rc2.gem
0bf2518768da054b18b871d48107e3afe79e552f  activejob-5.0.1.rc2.gem
ff3e0ef08053bc439f71387410415bf2ddc937b8  activemodel-5.0.1.rc2.gem
7eba5d1214a24e8e0b0e32eaf0560a69b2d6a702  activerecord-5.0.1.rc2.gem
2e601cabcf09057b4322a0069ffb07df38955aa4  activesupport-5.0.1.rc2.gem
b9653fa0724a30cb9ffbb23e39340a0166916bd0  rails-5.0.1.rc2.gem
60c06b55dd5977d0c25f407e39f7325b150cd994  railties-5.0.1.rc2.gem
```

As always, huge thanks to the many contributors who helped with this release.
