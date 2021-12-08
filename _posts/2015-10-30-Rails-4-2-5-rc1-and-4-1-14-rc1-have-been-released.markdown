---
layout: post
title: '[ANN] Rails 4.2.5.rc1 and 4.1.14.rc1 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-10-30 19:00:00 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.5.rc1 and 4.1.14.rc1 have been released.

If no regressions are found expect the final release this Wednesday, on November 4, 2015.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.13

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.14.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.13...v4.1.14.rc1).

## CHANGES since 4.2.4

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc1/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc1/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.5.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.4...v4.2.5.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.1.14.rc1:

```
$ shasum *4.1.14.rc1*
6c4513c4f2a57d11fe8e9abafacde175a284a0fc  actionmailer-4.1.14.rc1.gem
27eeb9c788be0323eb459edda2b4d09418f37c40  actionpack-4.1.14.rc1.gem
2f70d52109b8be2c2dfbc57992fb1070a3a49fc5  actionview-4.1.14.rc1.gem
d3aafc6b61999fa0c9a363dfc626c93df9e460a2  activemodel-4.1.14.rc1.gem
55ea63bcca5925652956d194e8dbf4aca1780888  activerecord-4.1.14.rc1.gem
f771aa7d47c8a390449f577024d9335f7487294e  activesupport-4.1.14.rc1.gem
b3a16b8372ec44927196d38a12cc72fc97ad54c8  rails-4.1.14.rc1.gem
f1be582957f2494e13462f464e28afbaf938d233  railties-4.1.14.rc1.gem
```

Here are the checksums for 4.2.5.rc1:

```
$ shasum *4.2.5.rc1*
95125668842661dda2db412a45226f9b1219b522  actionmailer-4.2.5.rc1.gem
d9c6b7e38f9eab5975ca2549cb88b6700a0acdfd  actionpack-4.2.5.rc1.gem
f40ad9c7a5cd2c4b14f96615fdf5627d4fcaa9f3  actionview-4.2.5.rc1.gem
edcc197c162d64d663cf1049851105777c9a41ff  activejob-4.2.5.rc1.gem
eff7203c26da06c76a667428c70dc8741afac67e  activemodel-4.2.5.rc1.gem
c719ffeaffbd0f3bc1e23ed1db32df84662c0460  activerecord-4.2.5.rc1.gem
311d02a075d1669eba52b026ac60b834e02e96c6  activesupport-4.2.5.rc1.gem
810f02ff2930062f269340bc7df4e4e213a168a3  rails-4.2.5.rc1.gem
e7f842b19b4e3f67625d3df3127ed99392f19bed  railties-4.2.5.rc1.gem
```

I'd like to thank you all, every contributor who helped with this release.
