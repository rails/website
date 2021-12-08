---
layout: post
title: 'Rails 4.2.9.rc2 has been released'
categories: releases
author: rafaelfranca
published: true
date: 2017-06-19 18:29:49 -04:00
---
Hi everyone,

I am happy to announce that Rails 4.2.9.rc2 has been released.

This is going to be the last bug fix release of the 4.2 series, so please test this release candidate.

If no regressions are found, expect the final release on Monday, June 26, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.2.8

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc2/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc2/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc2/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc2/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc2/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.8...v4.2.9.rc2).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 4.2.9.rc2:

```
$ shasum -a 256 *-4.2.9.rc2.gem
72037af7844a5b7c9da34d8f177ea5ddc02cc50746cf0f7a2423d9fdaf8daf79  actionmailer-4.2.9.rc2.gem
025ce2b5480da4ead138318256f525b233869f5d6dddd3532ab5eb9129da54ea  actionpack-4.2.9.rc2.gem
d000f1f891b3744000ae73bae8adfe97488b5cfb83929be0e02585e8ef5354bf  actionview-4.2.9.rc2.gem
5e894159ca0fdab9c1ff34626380431c84b1bd080132019ba3c9a42e2bf7ff97  activejob-4.2.9.rc2.gem
33d44145becef028f8d241c800cd049e9e0151111c4b2aca30b68f4eff1d8095  activemodel-4.2.9.rc2.gem
bdc035ad3ac9687af6897e532aae7b7a3111f7a6bf88444bd20746a1e3633970  activerecord-4.2.9.rc2.gem
c548e36f68ed575394559951de7d798a6e5d2da1c48a489ac40032ae3b667327  activesupport-4.2.9.rc2.gem
eb7cdb1b7bb1196ff40d74a98ec44d4521fe3c4e0f4226c814be41e8b1f17d6b  rails-4.2.9.rc2.gem
b939bbf06be8eb7b8a21fdb64c010a96aa4d23d9346f92b1a105f14bc994c112  railties-4.2.9.rc2.gem

```

As always, huge thanks to the many contributors who helped with this release.
