---
layout: post
title: 'Rails 6.0.1 RC1 released'
categories: releases
author: george
published: true
date: 2019-10-31 09:00:00 -08:00
---

Hi everyone,

I am happy to announce that Rails 6.0.1.rc1 has been released.

If no regressions are found, expect the final release on Tuesday, November 5, 2019.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
so that we can fix it before the final release.

## CHANGES since 6.0.0

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.0.1.rc1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.0.1.rc1 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.0.1.rc1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.0.0...v6.0.1.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.0.1.rc1:

```
$ shasum -a 256 *-6.0.1.rc1.gem
23adccc8bade5c3bdc8d76b69a1e9988052358aad406a6ca81eb642749088e4f  actioncable-6.0.1.rc1.gem
c7f2aa9fa3767f82479ad9fd714ca97d0586c5e957d149bc4ef7ca02d8617180  actionmailbox-6.0.1.rc1.gem
58df98a5aa58bf827262dcfa1b12b45bb161a59bf2bbe50dccb2bb639b65da8d  actionmailer-6.0.1.rc1.gem
6a5ffbcc23e298f58d7e0bb3f17bfa3f95c4ada1f90b523be2757e7de029b132  actionpack-6.0.1.rc1.gem
3e410969cad6acc26604e59fe2857ed8b251418f8446e4fafcecad6306f526b0  actiontext-6.0.1.rc1.gem
9402970f158d28b74373a8c400418f42bfcc50f2ad96b4771d66d06e68eb62a3  actionview-6.0.1.rc1.gem
6e896a34c717462b4e34c8f67a707daedec83f45760b0fcedf373b4a1c536675  activejob-6.0.1.rc1.gem
1f69c1a337eaa0a0b0a76fe95a26fa0bad1d29f0bb365b35a20ebdda4eb6f56b  activemodel-6.0.1.rc1.gem
1b2471d934650cf6484e7d110c3da9fed64252a0de8f449dcd3e4df9d066283d  activerecord-6.0.1.rc1.gem
e48d836948164471e91ca8a9ef495b8c6d6976b845a13836f9572119118d74c9  activestorage-6.0.1.rc1.gem
fe62486cd9665a725304db287bc942829f9faaf6c6e243155d706351a4590439  activesupport-6.0.1.rc1.gem
eee594a0a944fc2d182a29a440c2bca62b8e55ec63ada2a77cfe003d6447e4ed  rails-6.0.1.rc1.gem
3052fa0d642aca19e1a7f44e9ad8de75576726053859a98477ceb796edb1bbd7  railties-6.0.1.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.
