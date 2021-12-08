---
layout: post
title: 'Rails 5.2.2.rc1 has been released'
categories: releases
author: rafaelfranca
published: true
date: 2018-11-28 17:59:51 -05:00
---

Hi everyone,

I am happy to announce that Rails 5.2.2.rc1 has been released.

If no regressions are found, expect the final release on Monday, December 3, 2018.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 5.2.1

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.2.2.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.2.1...v5.2.2.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.2.2.rc1:

```
$ shasum -a 256 *-5.2.2.rc1.gem
c412268c40fc61c16480952c801261d4901c2b0ca81518c6b8ed1c619e38cbe4  actioncable-5.2.2.rc1.gem
33dcd916c7097823a598e02ee27af657f452c9e1ca5b56d5e8d33871870e84d5  actionmailer-5.2.2.rc1.gem
ad0178b8e4115eb7b6447f536c24f7725a6022a615a0d9dca1fca055856a6bba  actionpack-5.2.2.rc1.gem
f0202029b41eeda234e52136191604a52adda23445722172ec2398efe830efd1  actionview-5.2.2.rc1.gem
56102eeb75e9a29d400a648334f2f7e16f21948a608abd448c4663235752a7ea  activejob-5.2.2.rc1.gem
cca50c361514be3e901b695cece93ae5230a9018305d336b683fd35a1e97832e  activemodel-5.2.2.rc1.gem
7bded9a0bfe31eca3df543e59945cf16e3d0d1b32908d879fa1f9469a9cbd3e3  activerecord-5.2.2.rc1.gem
5cd7d2938d615637201326083edcb5b832254dec3a64638440777c34f1ad030c  activestorage-5.2.2.rc1.gem
bcd01d80cd4863368d3c3c8914527170b488b354611eeecd6e57553019c776ef  activesupport-5.2.2.rc1.gem
8e1fdbabab9eae02fc76078eea1dc1d975a9be8cbcfeda4395137503da3f1bf7  rails-5.2.2.rc1.gem
1d9950a611acb8fef50ba1477efa3e4730d713db55f834bdccd12fd950f2de51  railties-5.2.2.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.

