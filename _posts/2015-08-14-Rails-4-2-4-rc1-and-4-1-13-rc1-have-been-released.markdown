---
layout: post
title: '[ANN] Rails 4.2.4.rc1 and 4.1.13.rc1 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-08-14 12:04:06 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.4.rc1 and 4.1.13.rc1 have been released.

If no regressions are found expect the final release this Wednesday, on August 19, 2015.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.12

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.13.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.13.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.13.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.13.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.13.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.13.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.13.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.12...v4.1.13.rc1).

## CHANGES since 4.2.3

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.4.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.4.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.4.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.4.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.4.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.4.rc1/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.4.rc1/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.4.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.3...v4.2.4.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.1.13.rc1:

```
$ shasum *4.1.13.rc1*
284f1eb3a000d54f07435e0b19e88f1ba80f738b  actionmailer-4.1.13.rc1.gem
352ad673a18efe226ed3e1b1eb7e61818ccae1a2  actionpack-4.1.13.rc1.gem
f7e147aa4377149a7516bf23fa5892979a7ff77f  actionview-4.1.13.rc1.gem
70da96abb737ef31eba8e1b57fa2cb122110bb59  activemodel-4.1.13.rc1.gem
c571e1092a3982517d353ff85fab2c5e9b3c28cc  activerecord-4.1.13.rc1.gem
19e9f8f248261d6b605c62eca071e29e9c7e5a90  activesupport-4.1.13.rc1.gem
7c418986f10ff82fbb1be1b3a6c9defb80aac5eb  rails-4.1.13.rc1.gem
e5ca51e2cb32fa57bd7ba18f8fe52cd3c0e2bbb9  railties-4.1.13.rc1.gem
```

Here are the checksums for 4.2.4.rc1:

```
$ shasum *4.2.4.rc1*
7f343fd97d1e41920feac65020fa487c4d0be67e  actionmailer-4.2.4.rc1.gem
f815f40569f0e6b93f10c61d696d9ab06aba6531  actionpack-4.2.4.rc1.gem
bca83efa6384b88b5429f1dad1dd1a05e7c8e491  actionview-4.2.4.rc1.gem
7d8694143e23712da67606ea78919ed71605dd19  activejob-4.2.4.rc1.gem
674d0fd053f8365a1be9fe787f6fe10c5b9b3993  activemodel-4.2.4.rc1.gem
ec34623a19a136dcb62308ad3dfeba3209a5beac  activerecord-4.2.4.rc1.gem
8673028f02630357ea1f086323468b4a733b00aa  activesupport-4.2.4.rc1.gem
970ee741e3e2ffcaae6cbb33895ee2dc407bb5a3  rails-4.2.4.rc1.gem
69f16c95fac8739bc62e5f2cbe352bfa05746223  railties-4.2.4.rc1.gem
```

I'd like to thank you all, every contributor who helped with this release.
