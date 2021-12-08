---
layout: post
title: 'Rails 6.0.3.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2020-05-01 13:28:10 -04:00
---
Hi everyone,

I am happy to announce that Rails 6.0.3.rc1 has been released.

If no regressions are found, expect the final release on Wednesday, May 6, 2020.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 6.0.2

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.0.3.rc1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.0.3.rc1 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.0.3.rc1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.0.2...v6.0.3.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.0.3.rc1:

```
$ shasum -a 256 *-6.0.3.rc1.gem
582a8303c42d9212bbdfed89dc03c795222240cf63172994af9b1cb53e7d7856  actioncable-6.0.3.rc1.gem
3a3c22c0e4c8ec04a201b96924aca7cc578a00c9dca173e65d86ff10f7a2ca0e  actionmailbox-6.0.3.rc1.gem
037d2c522920b384e4faa54e0f3c05f082421a982db46d91968214e592f95e79  actionmailer-6.0.3.rc1.gem
7e6dc42ff9c0ad6d332a558f6b4216647eae9b799c4e671e7c55abf879a9b4d9  actionpack-6.0.3.rc1.gem
3a8009d4fcb4d8b1b54e251d577f4ad84a27a78876b2ed3f639140e90f4e783b  actiontext-6.0.3.rc1.gem
9a66e602199f4c6a79656e14a314b0026e674f8bb48fa316773484e354ccb291  actionview-6.0.3.rc1.gem
4c39f2a3df77837a3270c04af3a8dccbfa3884240aa6b4b4cdd153b8b702719c  activejob-6.0.3.rc1.gem
c22bcffaf22e343013866d2027dce45472000bd5def1fa96fddf3b02249c1d63  activemodel-6.0.3.rc1.gem
98dbea5db16b2857931fcb252858ff004c5cc1ceebd560cfc20962d785d565e2  activerecord-6.0.3.rc1.gem
aeaf6cdaa8019a451d28487cf1fb32b2818e03a18a147d11b55ef9ade110266c  activestorage-6.0.3.rc1.gem
9be7ec1f69d254ab6379bff92dec8c4852ca6fc0c7bd14d3fb94e71ce7091643  activesupport-6.0.3.rc1.gem
bd2558f622b5c02f3eb40514f861465c24cec0e2903cd6edf3a89da6dfa6c0f0  rails-6.0.3.rc1.gem
98b6b32f0839ba156f6cd5633666ceb816190fc6f5d73af5bee9b4288d5f8428  railties-6.0.3.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.

