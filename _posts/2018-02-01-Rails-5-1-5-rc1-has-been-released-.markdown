---
layout: post
title: 'Rails 5.1.5.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2018-02-01 14:30:03 -05:00
---
Hi everyone,

I am happy to announce that Rails 5.1.5.rc1 has been released.

If no regressions are found, expect the final release on Tuesday, February 6, 2018.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 5.1.4

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.1.5.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.1.5.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.1.5.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.1.5.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.1.5.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.1.5.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.1.5.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.1.5.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.1.5.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.1.4...v5.1.5.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.1.5.rc1:

```
$ shasum -a 256 *-5.1.5.rc1.gem
3efbb4f001a97abce94694a09ebd9108277d1978b6b7290a2bfb431c121021de  actioncable-5.1.5.rc1.gem
7b06628240fc5fee17a56b8d50ecc47469c6be54f3e25cdbd46aa79a0f8f0bc6  actionmailer-5.1.5.rc1.gem
70c6b43e55bad35fc1977fa33b3ec56ab630996befa7cfcb350865fadb9a588a  actionpack-5.1.5.rc1.gem
a88146826ae7753cf50607fe56dfeff7cf80de88a3e6fbf54102365f666ab0d8  actionview-5.1.5.rc1.gem
66ec7a29c5b36f30027a752d0e6c1960c0e22da7a4a1fa81fb122c068fe1dd7d  activejob-5.1.5.rc1.gem
6156e7530215cc9c1aff5a9fa08f587fe014c9fed07f03e7ef159233b5460e4c  activemodel-5.1.5.rc1.gem
2cc375e96454fc3222e620f3183482365baa1c8d9da7f905dde7c86d9b1c5132  activerecord-5.1.5.rc1.gem
f451182d63ba5f1229f91d5e96c4eaf31be1261509576d0a3c6118a275472cb4  activesupport-5.1.5.rc1.gem
aab580fb652a277b9b3801cecd8d93735de02ca650481bf34cef71de6f51f064  rails-5.1.5.rc1.gem
0a42aaed4a53a4f503358c26e797e6593fbf02ec20537205f9f75818e81ea0c5  railties-5.1.5.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.

