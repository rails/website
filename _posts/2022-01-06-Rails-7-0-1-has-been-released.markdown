---
layout: post
title: Rails 7.0.1 has been released
categories: releases
author: rafaelfranca
published: true
date: 2022-01-06 17:10:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 7.0.1 has been released. The focus of this release is bring support to Ruby 3.1,
released last Christmas (December 25, 2021). This release also brings a few bug fixes and documentation improvements.

## CHANGES since 7.0.0

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.0.1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[7.0.1 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.0.1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.0.0...v7.0.1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.0.1:

```
$ shasum -a 256 *-7.0.1.gem
55cb6103c59076066e915dd2b017574b5a22bbf53eee4e420b9fb73288a13f88  actioncable-7.0.1.gem
4fe6f86876db0dc5dac61eb9d0c76f2a10fbaed05205d398a81729986ec37dca  actionmailbox-7.0.1.gem
78e6a2fb594e063b2c273ff09e7d2cf4497a5883a004ca7e3d629d0c5e514764  actionmailer-7.0.1.gem
55c2e2d93e2775a80e2d23b429041ed2fb50f38b8ef5ae8f4f2f9941199e4760  actionpack-7.0.1.gem
dc7c864242c8de58b7ed4b387ae5b4bc9f89dd47acbc6de7b8080fa15a37ca7b  actiontext-7.0.1.gem
2b70532064198b674bfd83e7e634496cef283ecb19f8c5fa1c4fd156c9d98059  actionview-7.0.1.gem
231782b9b88f81f3d041eb0ac269dfc55e2999c91ea42d5317e0a049bc5e50fb  activejob-7.0.1.gem
b0dafa12925d63a37deeaf46e711916987729cf3ac35a944b0470736bd57236f  activemodel-7.0.1.gem
4b0edc94eb1091366127a3f969b24f84ca235e80f900c9535fc504b1430ef6b6  activerecord-7.0.1.gem
0bd587f8bb3bcf0640e7e296f455b6ad745e98b68b867f66085411f8a4efb25f  activestorage-7.0.1.gem
46ddc45b4ed13175d4ea1d89c3ce44110160e5c73194a23fd330a5656fd29e0a  activesupport-7.0.1.gem
3f03f0a134807e99ae587206d25d199ed4f6f715818ef1c1ac618c845487d8f9  rails-7.0.1.gem
bc2bdc8dbd29f84b589cc1c8f6c9bcbe636c5df04f622d633a6b1f3b64c0243e  railties-7.0.1.gem
```

As always, huge thanks to the many contributors who helped with this release.
