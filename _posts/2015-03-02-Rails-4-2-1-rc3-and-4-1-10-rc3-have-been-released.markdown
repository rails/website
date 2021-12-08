---
layout: post
title: '[ANN] Rails 4.2.1.rc3 and 4.1.10.rc3 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-03-02 18:41:06 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.1.rc3 and 4.1.10.rc3 have been released.

There were found some regressions in the last release candidates so, following release process we are
releasing new release candidates.

If no regressions are found expect the final release this Thursday, on March 5, 2015.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.9

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc3/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc3/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc3/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc3/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc3/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc3/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc3/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.9...v4.1.10.rc3).

## CHANGES since 4.2.0

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc3/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc3/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc3/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc3/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc3/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc3/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc3/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc3/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.0...v4.2.1.rc3).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 4.1.10.rc3:

```
$ shasum -a 256 *4.1.10.rc3*
3fdef2245e3d1cbd23403e319e90504de5a6d9c1d3882520555d5474888e64e8  actionmailer-4.1.10.rc3.gem
b6ee8ce93aeb4e1c3698b5d181997a6cfd903df4ee5ad4ff006ba1e8e4f9cbeb  actionpack-4.1.10.rc3.gem
855a02aa85d9df389ee401d9374ba1b6de97302bfa5b16cc3461b2068f2bac8c  actionview-4.1.10.rc3.gem
1f255ba5894e9c4ba62ff1362eefb5d4f69341e1b6633f34f5a74f3e5f50abe7  activemodel-4.1.10.rc3.gem
ae172a7ad49fe1aa007f99d33c9365f4027f7460aa20b3f2c4e699a029894e9f  activerecord-4.1.10.rc3.gem
efc14fb6fb046314e770f39702cebae5108abfe8a2f972baf503354b4d8962f6  activesupport-4.1.10.rc3.gem
6958130cadf8306732bd0ef09a49f689c85e8f675aa77392c2bff605dc6fe795  rails-4.1.10.rc3.gem
056ae92c2c280c30683bff33840b580dd95a4f6d6a76d760f82dc48d84a39862  railties-4.1.10.rc3.gem
```

Here are the checksums for 4.2.1.rc3:

```
$ shasum -a 256 *4.2.1.rc3*
7290338a93cb8d1552aca33b09a8bc00e7774f0110fc1e28af0b495cbd393f24  actionmailer-4.2.1.rc3.gem
9838985eb38550060d4220a9015ca983df1c87c8d059f8943c52db721f2fb7d3  actionpack-4.2.1.rc3.gem
a9af6c312c869ddae79a220c5179d0d80f4fab397115976287a5877d2f80dea2  actionview-4.2.1.rc3.gem
922c47a84ffb1bfde8bc2e3fb18f2e19bb61c8326428c31c09be56296ce6a63b  activejob-4.2.1.rc3.gem
1183c5e4f8c2d608b1d7b774a1720c7595359356c77b495880acf79d22ae0865  activemodel-4.2.1.rc3.gem
7976ea67cd5f7193247751bb6300990d3c5ba9eb74c5ea0c4b382e776a23889e  activerecord-4.2.1.rc3.gem
69704869beccae0694ba5f1e9179eaaa60b99b19adc9a48e890fe1b573894a82  activesupport-4.2.1.rc3.gem
90043b5ce4c1191e62a0c5b6bc4580553a540d7e6d18c7975de180fe8af61462  rails-4.2.1.rc3.gem
a72254f18ab76fca24f3a478779aa34f41a5bf89f71a8fe16f1945f991f0b10f  railties-4.2.1.rc3.gem
```

I'd like to thank you all, every contributor who helped with this release.
