---
layout: post
title: 'Rails 6.0.3 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2020-05-06 14:25:51 -04:00
---
Hi everyone,

I am happy to announce that Rails 6.0.3 has been released. This version fixes warnings when used with Ruby 2.7.


## CHANGES since 6.0.2

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.0.3/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.0.3 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.0.3)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.0.2...v6.0.3).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.0.3:

```
$ shasum -a 256 *-6.0.3.gem
fe6b115017a16527a535088141ceaf465899cb7e4da2cc3dece30d59c2f66b53  actioncable-6.0.3.gem
58bd373233d0d70056de073b5ae0b84b598204c651712f450107294807ea9bdb  actionmailbox-6.0.3.gem
b922a6f15388275e095c4ef2e14a1581bbd84a006bb58242ba652a068304a499  actionmailer-6.0.3.gem
d6d9e228ac083ed9c62e8ea7470cadeebbb77998e523e0ef0902e532342c08ed  actionpack-6.0.3.gem
121c7774a0c9b581e681e84fcb34e8af6e2525e4195a1b815d3407dd77518803  actiontext-6.0.3.gem
f8a82d4f9e925cd9bb208ab5f37f91b297fe260b6fab9df2df99844341c9ce68  actionview-6.0.3.gem
eb3c4e63e96dc3f6746e245479a8e67c0d5b8316c0f034aa98c82a1975b825e3  activejob-6.0.3.gem
1f578a8ac1e111e4770c787d99ec432243ecbfee9593482eef0fadcdbae2295e  activemodel-6.0.3.gem
3bc7bef0857854609ac0e249467a2909f23042b6897284302b148018c84175f2  activerecord-6.0.3.gem
8ed4f462195c5460c3086e57e3441321f832fc396631bb76b8fd1d0cae18c8fb  activestorage-6.0.3.gem
460c7dc137d98409d9964b1216a67572d32904454f55a44f59fdf9d43b19106a  activesupport-6.0.3.gem
399039af4ca160751f87505e13d1a000dfb65e15e4d86601eb34070b85fc73e7  rails-6.0.3.gem
5163bf5652c4419cebb699cd1d723a9b80236bce70e25b1bc2f5d3bab78b0206  railties-6.0.3.gem
```

As always, huge thanks to the many contributors who helped with this release.

