---
layout: post
title: Rails 7.0.5 has been released
categories: releases
author: rafaelfranca
published: true
date: 2023-05-24 15:30:00 -04:00
---

Hi everyone,

I am happy to announce that Rails 7.0.5 has been released.

## CHANGES since 7.0.4

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.0.5/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[7.0.5 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.0.5)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.0.4...v7.0.5).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.0.5:

```
$ shasum -a 256 *-7.0.5.gem
29f25720a704a6f1fedeb1d08b3a6ea33134ef7ad017b23c11659a18ad531465  actioncable-7.0.5.gem
91d57e6e3fac581014b51777daa68875fa42e72039a14489c2c846397c072935  actionmailbox-7.0.5.gem
2527c2fdb8358a48f98629a1544e2f01eb21f1c5555d772fa21be0056940690c  actionmailer-7.0.5.gem
1c129019b3c59b799f5946c9dfde1f8f47f1a60985d86fa4a0fc4c837f3ce170  actionpack-7.0.5.gem
81e59a7b5f05ce45c0b341ea378aebed6ef49d55d1090c0f24f419bc2094972d  actiontext-7.0.5.gem
b1d74a0105b77976fe23cfe859a33016227e93db57ac1ef60e0e7c43840f2037  actionview-7.0.5.gem
fb988160c19b1f7606908e664bacbd72c70ada2704c3e5c4441e3dba4fecfaa1  activejob-7.0.5.gem
510bcf2033f463cc59c310c3972bd475fda31acab6dfcfb469824a437b984b32  activemodel-7.0.5.gem
542e800fe3ade7cec04d979f7ac47b9a546dc3788e89122bb4918602c65fa013  activerecord-7.0.5.gem
281375a68b0ddcccc2b5fc8982e6fa524d885f92c6a7395f56adce3cba19e255  activestorage-7.0.5.gem
d58f62bf992ffe1c0efdaedc6edf1a94fdd3cfcecbca80098de587514c2cf3b0  activesupport-7.0.5.gem
57ef2baa4a1f5f954bc6e5a019b1fac8486ece36f79c1cf366e6de33210637fe  rails-7.0.5.gem
dcf38098623cf03e7d99fee50954a0f664307b0358cc00ad5c6759094067c34e  railties-7.0.5.gem
```

As always, huge thanks to the many contributors who helped with this release.
