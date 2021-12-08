---
layout: post
title: 'Rails 6.0.2.rc2 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2019-12-09 13:27:24 -03:00
---
Hi everyone,

I am happy to announce that Rails 6.0.2.rc2 has been released.

If no regressions are found, expect the final release on Friday, December 12, 2019.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 6.0.1

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.rc2/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.0.2.rc2 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.0.2.rc2)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.0.1...v6.0.2.rc2).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.0.2.rc2:

```
$ shasum -a 256 *-6.0.2.rc2.gem
201051352bd868c379fc76d59b847766ea0af4b168af808ba1e0269d6b939583  actioncable-6.0.2.rc2.gem
a158bc7909e33fee990e41fe0c010fd2750b3ae33d71668fd2e9b8985277e6bd  actionmailbox-6.0.2.rc2.gem
35dcd9231ba61ad072d2123d6aa2cac67cce4d8393530d5d8cd4916b16e3801c  actionmailer-6.0.2.rc2.gem
23b23cbf12cb8ec1b1373276ee37f7f32691500667fd9e14c0bb4848057bd15b  actionpack-6.0.2.rc2.gem
a6246e525e110de4bea18e82da4d3b7538fdc308949dde250df986175b911d8e  actiontext-6.0.2.rc2.gem
215cf27ebe42d8991bf4151fc02e4fd043b7a486890cec7faa15387b6847d074  actionview-6.0.2.rc2.gem
47959894de499ea57043c77d06fc492b29f2b448e65c76cda779968a43b24aaa  activejob-6.0.2.rc2.gem
042f0409d8b109d96246b45f255515d0a98533bab44bc15af7c511c8f4893486  activemodel-6.0.2.rc2.gem
123a2959e6dc9f87e7b39ca436248dac7a40415e6d2b6a9266418bb24bcb02ca  activerecord-6.0.2.rc2.gem
2e652d35e7bca6ea5e72a979c6d08534cb53e9ff647bf7e05f4ba2c525a8b721  activestorage-6.0.2.rc2.gem
007f106c1419b6cfdc0a82cac72550f302821d53ca74a1ffafaf11eb93fb0ef3  activesupport-6.0.2.rc2.gem
5cb22ec58dd58fb79fa1f3da50adff4692a41cf19ff4a2fa6cde482885d9f310  rails-6.0.2.rc2.gem
c33a3986cfc1dda1f561abb92a2ef9826fa0b574db42bb2b2f51b01f0cf0517b  railties-6.0.2.rc2.gem
```

As always, huge thanks to the many contributors who helped with this release.

