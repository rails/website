---
layout: post
title: '[ANN] Rails 4.1.6.rc1 and 4.0.10.rc1 have been released!'
category: releases
author: rafaelfranca
published: true
date: 2014-08-19 18:05:03 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.1.6.rc1 and 4.0.10.rc1 have been released.

If no regressions are found expect the final release this Friday, on August 22, 2014.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.0.9

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.0.10.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.0.10.rc1/actionpack/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.0.10.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.0.10.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.0.10.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.0.10.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.0.9...v4.0.10.rc1).

## CHANGES since 4.1.5

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.6.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.6.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.6.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.6.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.6.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.6.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.6.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.5...v4.1.6.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.0.10.rc1:

```
$ shasum *4.0.10.rc1*
fa4efa72a6b89c6dcf55280f6bbfab00564982e8  actionmailer-4.0.10.rc1.gem
bfbb408c6c2ab89eafda1b84a33f83a9f58eda8c  actionpack-4.0.10.rc1.gem
f1bedb27e877ca6493541a69491910ce70a34ed0  activemodel-4.0.10.rc1.gem
f211a80fc134f38f4eb2d503b3ca7e92a83eabed  activerecord-4.0.10.rc1.gem
e751d258407d02c3f8790775ffa99f0895c56704  activesupport-4.0.10.rc1.gem
34b8908b2738e78917a434b45ae9fe82b4908425  rails-4.0.10.rc1.gem
a2d4ee8203ce07785b15b367ffe31f9ea96268a7  railties-4.0.10.rc1.gem
```

Here are the checksums for 4.1.6.rc1:

```
$ shasum *4.1.6.rc1*
3589d4ea69a04f87ea5335994a43f8d814c6c8df  actionmailer-4.1.6.rc1.gem
b51d28e356c58d08d2f65a3a4912a2911b9d4ffe  actionpack-4.1.6.rc1.gem
f2a8ba7e7ca8fa9e74688cbca3af1e8d48b23de7  actionview-4.1.6.rc1.gem
9a2778d02bd596d629eca6265f0a6d7cecb7d2ef  activemodel-4.1.6.rc1.gem
681023c5764cb1336b6d74bf2ff76efd9c1386b7  activerecord-4.1.6.rc1.gem
85c4e30b5b0eba99c9d43049206591250aed2072  activesupport-4.1.6.rc1.gem
fd10c0533065471768d8fe4b7e7ba81738c607dd  rails-4.1.6.rc1.gem
ec05790e0d256a474f0eaf3ae61e9556e71f1b18  railties-4.1.6.rc1.gem
```

I'd like to thank you all, every contributor who helped with this release.
