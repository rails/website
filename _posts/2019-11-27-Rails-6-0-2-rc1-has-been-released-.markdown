---
layout: post
title: 'Rails 6.0.2.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2019-11-27 12:27:04 -03:00
---
Hi everyone,

I am happy to announce that Rails 6.0.2.rc1 has been released.

If no regressions are found, expect the final release on Monday, December 2, 2019.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 6.0.1

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.0.2.rc1 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.0.2.rc1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.0.1...v6.0.2.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.0.2.rc1:

```
$ shasum -a 256 *-6.0.2.rc1.gem
f7f620f3042bc73f8e461deab8005f089dc58adcbcf5ab8112878245ad62db75  actioncable-6.0.2.rc1.gem
98860fedcb06a53bf0bb6367810f148bfd387fab2461aaa3511966c332ccaba7  actionmailbox-6.0.2.rc1.gem
30c442e289504fd4847341c702a2096954218107b8dd033c9e460ab6fb812e28  actionmailer-6.0.2.rc1.gem
8ef626574ee988c0d59fcf03b6e60202fda2797bc387cf85922011053bcb7951  actionpack-6.0.2.rc1.gem
4fa0062cdc66ca2fa30d28d1681b22fa245cbd4fe1cc7219573bc790131f3f95  actiontext-6.0.2.rc1.gem
5760324a0ea085391c97cd072dd39a3aa352f40935308344f2e19ac7f244b772  actionview-6.0.2.rc1.gem
48c91cf9ee11ba60519cd7daca0914c0310491b69b1c03b5ca5a0383af29f863  activejob-6.0.2.rc1.gem
694d5c84aa0cc7a8b438dc6ecb18b8b22b69773aced6d5982b00941d5f905dfe  activemodel-6.0.2.rc1.gem
399098bb60e1ee3897ee82db7ec98152d8465a08917f3e5dcccb4085fcb06904  activerecord-6.0.2.rc1.gem
c8ce7396d623e794bb2568b6c2d6f7b8b2c26b0246547b9f7e91c3c55f56be36  activestorage-6.0.2.rc1.gem
c1ba538d3ac80e1a3aaf2c8ff36db215f0a1fcd7a1908df8de5cad56f711efd0  activesupport-6.0.2.rc1.gem
64981b76140ca930e008f8e58879ec963a8ad5386fb894d58e655b491a7bd1fd  rails-6.0.2.rc1.gem
37f224e83d39408dbc240549ab866b11bb53409563cb677ee65bd58bc39cfcef  railties-6.0.2.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.

