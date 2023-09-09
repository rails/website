---
layout: post
title: Rails 7.0.8 has been released
categories: releases
author: rafaelfranca
published: true
date: 2023-09-09 15:40:00 -04:00
---

Hi everyone,

I am happy to announce that Rails 7.0.8 has been released.


## CHANGES since 7.0.7

To see a summary of changes, please read the release on GitHub:

[7.0.8 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.0.8)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.0.8/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.0.7...v7.0.8).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.0.8:

```
$ shasum -a 256 *-7.0.8.gem
1f504ddb4ab6a34f7c52e9df924441a403e9f358bace330c36dcca6358ecfb84  actioncable-7.0.8.gem
9420037b801e44aa4e36cf113f4bd6eb25c17eb1b84d9c8865e8abf8846c14e5  actionmailbox-7.0.8.gem
22574f270ed80bcd158f16b99068fad7772173e21c4332504238dae58fdccf70  actionmailer-7.0.8.gem
2b998c6f6540ec07ad2e16b39f9acae22c8c4fda6b377417c2cfddf8c04d61d0  actionpack-7.0.8.gem
f7966296cec0a48e8644b59de2bfc8b7847d43a7809dfe040015a32aecc88744  actiontext-7.0.8.gem
a22d692b9a6422f36882425301a4043fbe078a66e94a909a60a6a216246fd776  actionview-7.0.8.gem
cb63d6a9f9af3379b7927bcb09a453d63db66ba9ec681018a8b21c5a0f8bc1b2  activejob-7.0.8.gem
95beb8a2f6d1e0c7b4e3c0f17771b3a3024a25ad8c6e9d2d357e3cf1d5479c00  activemodel-7.0.8.gem
f236255235ab8c15f7a7bea3b77a35377801827e24d6e536dc776080f4dd8a13  activerecord-7.0.8.gem
8c2cae8de321ec899c7e7c4655331714fdd57f0966215286330f5c4d95a9db34  activestorage-7.0.8.gem
458316bb5098211ba9436d3c64d883177f09c49d1e29aa00f970d160275f13a1  activesupport-7.0.8.gem
8e43af921acf766fb429126f020ec90c3b25809631f8fbdff95c3553828d5867  rails-7.0.8.gem
12325c3933efd33f8ead640197dec3b8c27c8d45607dd68b7b925896bf09cc69  railties-7.0.8.gem
```

As always, huge thanks to the many contributors who helped with this release.
