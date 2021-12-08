---
layout: post
title: 'Rails 5.1.3.rc1 and 5.0.5.rc1 released'
categories: releases
author: Kasper Timm Hansen
published: true
date: 2017-07-19 21:48:05 +02:00
---

Hi everyone,

I am happy to announce that Rails 5.1.3.rc1 and 5.0.5.rc1 have been released.

If no regressions are found, expect the final releases Monday, July 24, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@kaspth) on it, so that we can fix it before the final release.

## CHANGES since 5.1.2

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.1.2...v5.1.3.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.1.3.rc1:

```
$ shasum -a 256 *-5.1.3.rc1.gem
3716fe810ac09651160af680e0622dba606eadc3532dc6100a09bc3dc46d8a79  actioncable-5.1.3.rc1.gem
9e734dcdb918f269bc027e31430648a58c205842b99c4990d19f33af41862027  actionmailer-5.1.3.rc1.gem
6f3739bea472a54a27b3982ea246028d4277580e2ff98c6343e07d95d54b29ad  actionpack-5.1.3.rc1.gem
482286af2d2146f6208e757fa29337dc73f9237c240bca753485992cf906bdb5  actionview-5.1.3.rc1.gem
2356ecbc1f1393a1577031894074d333fdc6d27e4ab9de796d2b97fff8676b8b  activejob-5.1.3.rc1.gem
f6ade74444578944fc3b8e376c4b050dda63bb7145abec4777dcb16867b42d30  activemodel-5.1.3.rc1.gem
72a886347747b61578a2aac1b34715042cb8f67fe43d8e53a2290220d08b8a3c  activerecord-5.1.3.rc1.gem
9220885a9d919430fa08cf72baf922000f7c36266d8f711498b7a6fb711eab2d  activesupport-5.1.3.rc1.gem
a06eded7f5e2bf1d6ecc69589062966bb701ccb8896d5aac5a6171ff38d037d4  rails-5.1.3.rc1.gem
727e65bc8c8fd359997bd1442c152f8628ddc318f68c9fba1ca603dda2db7766  railties-5.1.3.rc1.gem

```

## CHANGES since 5.0.4

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.0.4...v5.0.5.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.0.5.rc1:

```
$ shasum -a 256 *-5.0.5.rc1.gem
71ae996b0cbadc4836d8de61058870fe3d7ae275c5a3d345b851ca8b88e7c5a7  actioncable-5.0.5.rc1.gem
58fe87b9daf4dc1ddc89110e83846c0e0939fc97c8463e789785d28eddd34ee1  actionmailer-5.0.5.rc1.gem
123d468dcb3e523d1fb82367ebec2d630c6b625d1ad3d1b635bfc718c5d94624  actionpack-5.0.5.rc1.gem
117d39ee700e82903a3f0c3c242e986326acd08e7bab1059fd0afc6e58a2d19c  actionview-5.0.5.rc1.gem
99c51db0728e139a7833af9785323c967cbd474b3f9f1d20f5802628c33398f4  activejob-5.0.5.rc1.gem
9f81997461c252608451c61f5121754fb8aa36f30a1f9f6167a77826cae76be1  activemodel-5.0.5.rc1.gem
9cef200cd17925cd22055d6c5b2d2f22514f434f98983bcba0484e472f208211  activerecord-5.0.5.rc1.gem
ca8be3d1ee126f0e0b84cb9c932771cd718a524c60f2a63dccd32c33831aff74  activesupport-5.0.5.rc1.gem
0fd92b43895a1a73d639b93eec67159bed1003ce2a3f6250030b05091ae40046  rails-5.0.5.rc1.gem
3516bc7c5d3337fe5134ac0a7ec60337078817b569a56381a4f3fe737ef04546  railties-5.0.5.rc1.gem

```

As always, huge thanks to the many contributors who helped with this release.
