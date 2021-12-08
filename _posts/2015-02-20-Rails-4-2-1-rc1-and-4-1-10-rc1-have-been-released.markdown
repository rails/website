---
layout: post
title: '[ANN] Rails 4.2.1.rc1 and 4.1.10.rc1 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-02-20 20:26:06 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.1.rc1 and 4.1.10.rc1 have been released.

If no regressions are found expect the final release this Wednesday, on February 25, 2015.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.9

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.9...v4.1.10.rc1).

## CHANGES since 4.2.0

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc1/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc1/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.0...v4.2.1.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.1.10.rc1:

```
$ shasum *4.1.10.rc1*
173663408f82f4f6b718d0493ccd7372b1ebb04b  actionmailer-4.1.10.rc1.gem
e2f2239ba08498b0222c73d749ce1fc0b80227ce  actionpack-4.1.10.rc1.gem
3ea60b85b2c6d9c6dd517f19cca6d4184f168c3e  actionview-4.1.10.rc1.gem
fad32c6fa623c848c59c7ec4ea6f95bbe55c800e  activemodel-4.1.10.rc1.gem
5fa2bbfc017cd5000d5a05923b0ed00eaf0763d2  activerecord-4.1.10.rc1.gem
593986a562d2967690def2acfb4f3807b749c8d5  activesupport-4.1.10.rc1.gem
9b3243b73e8094bdef92a9a3fe8e13c59660fcb8  rails-4.1.10.rc1.gem
629269e65fb4b2eaacf3341060b06a6857479ec8  railties-4.1.10.rc1.gem
```

Here are the checksums for 4.2.1.rc1:

```
$ shasum *4.2.1.rc1*
7540e2101c574c1b28428d25b26e2840bd811b07  actionmailer-4.2.1.rc1.gem
2256120417e0a2c554fa622f59bfce672c565df2  actionpack-4.2.1.rc1.gem
6add23517bf1c2cdc29b04e5634305c0b5bcc496  actionview-4.2.1.rc1.gem
894a9419a70e6061e07ab2c23f75f0c5fd886b10  activejob-4.2.1.rc1.gem
c268d0711889e2df9991a80f1e01180573b79f9f  activemodel-4.2.1.rc1.gem
39ca67053e52260954876fbf385e260b56c870b9  activerecord-4.2.1.rc1.gem
a937629fed3f6ddeb9f939273dd5e7955a7f25a1  activesupport-4.2.1.rc1.gem
773cce2bacede08390bf9488665d03af33995271  rails-4.2.1.rc1.gem
703b959222cd0466a244cca5bd322de9fb7b76a6  railties-4.2.1.rc1.gem
```

I'd like to thank you all, every contributor who helped with this release.
