---
layout: post
title: 'Rails Version 8.0.1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2024-12-13 3:57:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 8.0.1 has been released.


## CHANGES since 8.0.0

To see a summary of changes, please read the release on GitHub:

[8.0.1 CHANGELOG](https://github.com/rails/rails/releases/tag/v8.0.1)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v8.0.1/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v8.0.0...v8.0.1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 8.0.1:

```
$ shasum -a 256 *-8.0.1.gem
f911dd3df2fd265e43980a591d280736989b22017847868cbb657afad5b2b5f3  actioncable-8.0.1.gem
9c98ecfebafb2791b8147e03ab4271bff2f6ef09c84afe18f926b445bf1394ee  actionmailbox-8.0.1.gem
532e12d22473b95cb29ae93661140bf64286e50386dbbb4addca8a4271a6a3fe  actionmailer-8.0.1.gem
287e798e9239b84f2744779e48e75c8c2ea3a4f22fd4c68d91f6d92fe0e14600  actionpack-8.0.1.gem
903acdefac9a80db4e14adb6c4324af6c07e51c65e9f2714f72ebf87477cf978  actiontext-8.0.1.gem
3e41bebeee9bdcb8577c19d7bf19efa50ab60838cbafcd00c3c4c9c675bcffd9  actionview-8.0.1.gem
d5bc2a03ecbe6e5a4192b49c478835d1028d166716766b5bdf5f35a32fc5fbc1  activejob-8.0.1.gem
030677d69abb84e8f6fb3a81fb48d9e612635d8cc1b2ebd67b816f2f7ddf7cad  activemodel-8.0.1.gem
a10beb8cb7066c2aa6a70c22ad0fb600ad4aac0d06381f2d8320ff48b2ead6c7  activerecord-8.0.1.gem
0e7d4a340d95aa6a3c35dfc1ed52ce8008a690a5ac538d853c956698818c3bd0  activestorage-8.0.1.gem
ab5561f80c34e613dec882fe77df5d78abd3b632e53116a35ef4490f814034b3  activesupport-8.0.1.gem
feef256282bc91e6e4665cb4cd7fe888bc838e8e176b8fc1f5c84ef638005384  rails-8.0.1.gem
516ab68b8110392581bd4ae506a86600278c046571c9b80ca2b54da69c4ac5f2  railties-8.0.1.gem
```

As always, huge thanks to the many contributors who helped with this release.
