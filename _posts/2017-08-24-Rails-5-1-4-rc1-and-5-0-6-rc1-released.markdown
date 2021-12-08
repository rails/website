---
layout: post
title: 'Rails 5.1.4.rc1 and 5.0.6.rc1 released'
categories: releases
author: eileencodes
published: true
date: 2017-08-24 15:47:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 5.0.6.rc1 and 5.1.4.rc1 have been released.

If no regressions are found, expect the final release on Tuesday, August 29, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@eileencodes) on it, so that we can fix it before the final release.

## CHANGES since 5.0.5

To view the changes for each gem, please read the changelogs on GitHub:
  
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.0.6.rc1/actioncable/CHANGELOG.md)  
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.0.6.rc1/actionmailer/CHANGELOG.md)  
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.0.6.rc1/actionpack/CHANGELOG.md)  
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.0.6.rc1/actionview/CHANGELOG.md)  
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.0.6.rc1/activejob/CHANGELOG.md)  
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.0.6.rc1/activemodel/CHANGELOG.md)  
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.0.6.rc1/activerecord/CHANGELOG.md)  
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.0.6.rc1/activesupport/CHANGELOG.md)  
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.0.6.rc1/railties/CHANGELOG.md)  

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.0.5...v5.0.6.rc1).
  
## CHANGES since 5.1.3

To view the changes for each gem, please read the changelogs on GitHub:
  
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.1.4.rc1/actioncable/CHANGELOG.md)  
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.1.4.rc1/actionmailer/CHANGELOG.md)  
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.1.4.rc1/actionpack/CHANGELOG.md)  
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.1.4.rc1/actionview/CHANGELOG.md)  
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.1.4.rc1/activejob/CHANGELOG.md)  
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.1.4.rc1/activemodel/CHANGELOG.md)  
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.1.4.rc1/activerecord/CHANGELOG.md)  
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.1.4.rc1/activesupport/CHANGELOG.md)  
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.1.4.rc1/railties/CHANGELOG.md)  

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.1.3...v5.1.4.rc1).
  
## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.0.6.rc1:

```
$ shasum -a 256 *-5.0.6.rc1.gem
0490ac6c4621756871839ad584f0a0349a72a9ccdeac0f72dafd3539638ba5ef  actioncable-5.0.6.rc1.gem
fc7697724d884307bf2ea307c028902f71f96304b9a882418e6ec94d10202cd9  actionmailer-5.0.6.rc1.gem
b0f1f4479f61ada80b3dbe3e9ccaa0db390119918e5da632dda3c8398e6e4f5f  actionpack-5.0.6.rc1.gem
673d06523edf733163ad668fe3cd64bd1c7fb97244c952241d1e00ee6835101b  actionview-5.0.6.rc1.gem
ac6521d4df459db19fc0f2740d0e0c0a6f3102252c8124ecb25e8d33335d6cf4  activejob-5.0.6.rc1.gem
0824cd58f175a3c825dce9d42d73254d25af25d824ae1c5c3465f12bb0812f72  activemodel-5.0.6.rc1.gem
7972a8a76c711b8fc01ab52d95c4f16a73e9683e4d745a17d61ab91051df856c  activerecord-5.0.6.rc1.gem
40f0c77de7e54b6a3581272ce5b6409ae0c61b5bfad3239db46807d8342ce8a3  activesupport-5.0.6.rc1.gem
7873311d5340bffbabeb33cb9d3ce2c97056bc2bebad3abfcba6f5b38b209075  rails-5.0.6.rc1.gem
3fd4b347f19fb4ff2ec7cee4c9a45aba31d1e287583943269bc9d09bef61ca93  railties-5.0.6.rc1.gem
```

Here are the checksums for 5.1.4.rc1:

```
$ shasum -a 256 *-5.1.4.rc1.gem
6ebb05e31a5d46379f638092742aa1543ab3522302a62351de9e5dc746fc7c77  actioncable-5.1.4.rc1.gem
fb3e3743a29a70524c64caa656056f7cf0085998a1438b28325c6e10a6330efd  actionmailer-5.1.4.rc1.gem
c4b39e9b721a4b2eb37be9f18bfbc0a479b61ae4d6b536b1b9f2fc06f83f6ad8  actionpack-5.1.4.rc1.gem
9930cccacbe71085b894ca0410da07625b801c4db1775b655357bd2bf5824ae9  actionview-5.1.4.rc1.gem
e0c7610f4fe20c778e5f9739f80ae4d5d3450bbacff49d24064b0b3b048f9dd6  activejob-5.1.4.rc1.gem
11dae082bd1dfea9541a60501135bef6c32d792407dea57250dc95ba5e415a77  activemodel-5.1.4.rc1.gem
3b058a80c8f14c324dad4c185825a4ce4c4f853af37002bec92e179bef583fcb  activerecord-5.1.4.rc1.gem
c9984249c0200e9c1f462779294e0cec6bb6c8b95421dc01b579a0efa2db6561  activesupport-5.1.4.rc1.gem
c8134e1efcc5f17ac28927a76423146f3a7baf618d97a5d752d09edf4c5eeb7c  rails-5.1.4.rc1.gem
7589a79f6b4a4de73d2d427193eb9beacd1628530958dd4d8f9404531748a973  railties-5.1.4.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release!
