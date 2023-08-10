---
layout: post
title: Rails 7.0.7 has been released
categories: releases
author: rafaelfranca
published: true
date: 2023-08-09 20:00:00 -04:00
---

Hi everyone,

I am happy to announce that Rails 7.0.7 has been released.


## CHANGES since 7.0.6

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.0.7/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[7.0.7 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.0.7)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.0.6...v7.0.7).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.0.7:

```
$ shasum -a 256 *-7.0.7.gem
ea1cd05980c0fe89d432c7fa138d7556595ec7550c59a4738356b13369b97fb5  actioncable-7.0.7.gem
7a2dfbb8ed5b618fbd4cc4a2a141aa0f97449bb3ee25aefb0bbb57ac0f07c424  actionmailbox-7.0.7.gem
a069d1c9df4c47bbac44adad5edf6402860189735ad1accba73170cde229d196  actionmailer-7.0.7.gem
4f837254603c8fe329e7a0c1258ad5c8224a44f86c78c9b54af26f11a6961a94  actionpack-7.0.7.gem
355f6706925258d76eb5a232c9780c8ca7681c6d963711f7549ad678f56bcb54  actiontext-7.0.7.gem
0a2d74ad36f62bd2d920434f11e9b7c1a205324dc7e8cea713bb757dcb0cc2da  actionview-7.0.7.gem
fe53f5e05a376962bd7f9866f1917d2a3479f3104870049792f2942ad32fb968  activejob-7.0.7.gem
0e120a270f63d64bdacd91fe244ff7ee2ade147f9b0beab9802ef5ee095f57e7  activemodel-7.0.7.gem
9e8923a8f3d8d78d6410ebadf32517d12825a6ce20971e9608f5d1ce0b09eff9  activerecord-7.0.7.gem
1b8b27cd1ed5ead195100c30c8eaac01884adcd5327115c3ccfdec4a38be5dbd  activestorage-7.0.7.gem
293b492bf3808eed3bcc915f6a4599609d0664c1a306f8168f1e680bc7b6ebf3  activesupport-7.0.7.gem
3269693baa58f49fc6f96afa453630a0e4957093d1ac5e287e49bc76d7002d1b  rails-7.0.7.gem
79bd90c9b6b2acff43fd2e0935e47ad54e424d7c2b450afa8bd6558c095ac246  railties-7.0.7.gem
```

As always, huge thanks to the many contributors who helped with this release.
