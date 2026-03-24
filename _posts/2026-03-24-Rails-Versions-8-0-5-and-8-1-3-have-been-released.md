---
layout: post
title: 'Rails Versions 8.0.5 and 8.1.3 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2026-03-24 13:00:00 -07:00
---

Hello again everyone! [Long time no see 😆](/2026/3/23/Rails-Versions-7-2-3-1-8-0-4-1-and-8-1-2-1-have-been-released).

Rails Versions 8.0.5 and 8.1.3 have been released! These are regular bugfix releases.

These also include the changes from [yesterday's security releases](/2026/3/23/Rails-Versions-7-2-3-1-8-0-4-1-and-8-1-2-1-have-been-released), so if you haven't upgraded yet you'll get those fixes too.

The Rails 8.1 series will continue receiving bug fixes until October 2026.  The
8.0 series will change to only receiving security updates in May next month, so
this might be the last bug fix release in that series. See our [Maintenance
policy](https://rubyonrails.org/maintenance) for more information.

## CHANGES since 8.1.2

To see a summary of changes, please read the release on GitHub:

[8.1.3 CHANGELOG](https://github.com/rails/rails/releases/tag/v8.1.3)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v8.1.3/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v8.1.2...v8.1.3).

## CHANGES since 8.0.4

To see a summary of changes, please read the release on GitHub:

[8.0.5 CHANGELOG](https://github.com/rails/rails/releases/tag/v8.0.5)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v8.0.5/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v8.0.4...v8.0.5).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 8.0.5:

```
37f213ff6a37cf3fadfa1a28c1a9678e2cb73b59bb9ebd0eeeca653cccadcb23  pkg/activesupport-8.0.5.gem
c796813d46dc1373f4c6c0ec91dfc520b53683ea773c3b3f9a12c4b3eb145bc2  pkg/activemodel-8.0.5.gem
89b261b6cd910c9431cf2475f3f6e5e2f5ce589805043a33ef2b004376a129e6  pkg/activerecord-8.0.5.gem
6d0fa9e63df0cf2729b1f54d0988336c149eb2bbc6049f4c2834d7b62f351413  pkg/actionview-8.0.5.gem
c9de868975dd124a0956499140bd5e63c367865deca01292df7c3195c8da4b35  pkg/actionpack-8.0.5.gem
2dabe5c3bfe284aba4687c52b930564335435dde3a60b047821f9d3bd0d2ea10  pkg/activejob-8.0.5.gem
7918fac842cfe985ed21692f3d212c914a0c816e30e6fa68633177bb22f38561  pkg/actionmailer-8.0.5.gem
01a1d1a48b63b1a643fae6b7b4eb2859af55f507b335fca9ab869a5c6742bb8b  pkg/actioncable-8.0.5.gem
25898a3f8f8aced15ea6a8578cb56955acf3a96ad931e000b2e77e9c8db43df3  pkg/activestorage-8.0.5.gem
2651a87c0cc3dd1243a3afe64c052e71138f99006b3a5d3fa519198735500054  pkg/actionmailbox-8.0.5.gem
12f3ce3d6326230728316ba14eeac27b2100d6e7d9bfcb4b01fb27b187a812e1  pkg/actiontext-8.0.5.gem
ad98c6e9a096b7e8cf63c70872b60ec6c1d4152be2a4ffa63483ec02a837a9d5  pkg/railties-8.0.5.gem
4cb40f90948be292fa15cc7cb37757b97266585145c6e76957464b40edfd5be6  pkg/rails-8.0.5.gem
```

Here are the checksums for 8.1.3:

```
21a5e0dfbd4c3ddd9e1317ec6a4d782fa226e7867dc70b0743acda81a1dca20e  pkg/activesupport-8.1.3.gem
90c05cbe4cef3649b8f79f13016191ea94c4525ce4a5c0fb7ef909c4b91c8219  pkg/activemodel-8.1.3.gem
8003be7b2466ba0a2a670e603eeb0a61dd66058fccecfc49901e775260ac70ab  pkg/activerecord-8.1.3.gem
1347c88c7f3edb38100c5ce0e9fb5e62d7755f3edc1b61cce2eb0b2c6ea2fd5d  pkg/actionview-8.1.3.gem
af998cae4d47c5d581a2cc363b5c77eb718b7c4b45748d81b1887b25621c29a3  pkg/actionpack-8.1.3.gem
a149b1766aa8204c3c3da7309e4becd40fcd5529c348cffbf6c9b16b565fe8d3  pkg/activejob-8.1.3.gem
831f724891bb70d0aaa4d76581a6321124b6a752cb655c9346aae5479318448d  pkg/actionmailer-8.1.3.gem
e5bc7f75e44e6a22de29c4f43176927c3a9ce4824464b74ed18d8226e75a80f0  pkg/actioncable-8.1.3.gem
0564ce9309143951a67615e1bb4e090ee54b8befed417133cae614479b46384d  pkg/activestorage-8.1.3.gem
df7da474eaa0e70df4ed5a6fef66eb3b3b0f2dbf7f14518deee8d77f1b4aae59  pkg/actionmailbox-8.1.3.gem
d291019c00e1ea9e6463011fa214f6081a56d7b9a1d224e7d3f6384c1dafc7d2  pkg/actiontext-8.1.3.gem
913eb0e0cb520aac687ffd74916bd726d48fa21f47833c6292576ef6a286de22  pkg/railties-8.1.3.gem
6d017ba5348c98fc909753a8169b21d44de14d2a0b92d140d1a966834c3c9cd3  pkg/rails-8.1.3.gem
```

As always, huge thanks to the many contributors who helped with this release.

Happy upgrading and have a good day!
