---
layout: post
title: 'Rails 7.2.1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2024-08-22 16:50:00 -03:00
---

Hi everyone,

I am happy to announce that Rails 7.2.1 has been released.

## CHANGES since 7.2.0

To see a summary of changes, please read the release on GitHub:

[7.2.1 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.2.1)

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.2.1/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.2.0...v7.2.1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.2.1:

```
$ shasum -a 256 *-7.2.1.gem
b409c96b0acc90abe6aa8fd9656eaff0980c1b36c9e22b8f7c490a46eafc2204  actioncable-7.2.1.gem
09c20d0bcb769a6521d22cb8987e2d1d8335b58610957a6c615c85e6743adf89  actionmailbox-7.2.1.gem
e4853a32c84105066e64d900ee1025ef075893ee3c51de3a3bc59a6e09586e56  actionmailer-7.2.1.gem
260b80acc720123f23eb2b106b04d2de7d8cf0492d4eeb2dfa7afc8be36dcaad  actionpack-7.2.1.gem
1257a2384373188039fc35d46946e757014710361a4af4481e37b510ac7d7d79  actiontext-7.2.1.gem
d1f8f4df2bff842a03e2a6e86275e4d73e70c654159617ad4abbe7c6b2aed4f4  actionview-7.2.1.gem
eb145f5aaf8276f37b9e4e9f72f3d56b1733172b4be680e836c765f2e6a3c503  activejob-7.2.1.gem
7b24e3927122b99c4623f07607a1d0f1cfd598f9dc5077e70178536dd6663348  activemodel-7.2.1.gem
b58a26b9337594f2639cafcc443f4d28d786289f5b5b07b810e8251eeace533c  activerecord-7.2.1.gem
e5d6746aa9e5d92fff9d214fad782b6a7189bc080d319c0b196e3dfa1595a676  activestorage-7.2.1.gem
7557fa077a592a4f36f7ddacf4d9d71c34aff69ed20236b8a61c22d567da8c24  activesupport-7.2.1.gem
fd5684e5d007220960666a3a8b31a57cd1c8cd7f60d88cb40e28e95f1911b705  rails-7.2.1.gem
4b6ad279bbfb9228d7e7fbc8df562a8f5d4910e179b957d801fcec176d548463  railties-7.2.1.gem
```

As always, huge thanks to the many contributors who helped with this release.
