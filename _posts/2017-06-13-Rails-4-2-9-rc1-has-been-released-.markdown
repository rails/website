---
layout: post
title: 'Rails 4.2.9.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2017-06-13 14:57:28 -04:00
---

Hi everyone,

I am happy to announce that Rails 4.2.9.rc1 has been released.

This is going to be the last bug fix release of the 4.2 series, so please test this release candidate.

If no regressions are found, expect the final release on Monday, June 19, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.2.8

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.9.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.8...v4.2.9.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 4.2.9.rc1:

```
$ shasum -a 256 *-4.2.9.rc1.gem
f989619bd008bb131ac51c9523a67cf07b04fd02ccbb6a4c862a7e91399abf29  actionmailer-4.2.9.rc1.gem
ce36a4c32d738bdf0f225c427ed7e31c2e681004fa827f7bbe0c4bd05fb6b264  actionpack-4.2.9.rc1.gem
e815d4d9ee866145cf9ae78716fed8453a12eace055f4fbd80ae7f4b74e08d27  actionview-4.2.9.rc1.gem
b03d68ecc055160bc903055649bb47b57de09b68749bd6e40e2e4378cd9a3ce7  activejob-4.2.9.rc1.gem
734e28fff15f3319be32b6e3cba40519e7c730c88ba49f0b334eb1d63f32c872  activemodel-4.2.9.rc1.gem
a2f25b8132cca325bf855d7e45c809a122282d8e65f3d6580e40da624c71996a  activerecord-4.2.9.rc1.gem
7b3b69479110a64f50ac53681f076b5ec21a073b1120c9d7ab201eec0af09d12  activesupport-4.2.9.rc1.gem
c7de4f0e62498acf407928a5f147a9e297a63e900882f627489e91b033026b69  rails-4.2.9.rc1.gem
425e43203b35fa28dd9708848c4aaa11706c53fcd75819228a92e6893653f8da  railties-4.2.9.rc1.gem

```

As always, huge thanks to the many contributors who helped with this release.
