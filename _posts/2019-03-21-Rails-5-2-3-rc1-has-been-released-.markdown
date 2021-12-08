---
layout: post
title: 'Rails 5.2.3.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2019-03-21 23:51:41 -04:00
---
Hi everyone,

I am happy to announce that Rails 5.2.3.rc1 has been released.

If no regressions are found, expect the final release on Wednesday, March 27, 2019.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 5.2.2

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.2.3.rc1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[5.2.3.rc1 CHANGELOG](https://github.com/rails/rails/releases/tag/v5.2.3.rc1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.2.2...v5.2.3.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.2.3.rc1:

```
$ shasum -a 256 *-5.2.3.rc1.gem
353ad8bf6ae456c3392d2d38817263b242eafb8c36a56dc39ef168dba85913cf  actioncable-5.2.3.rc1.gem
489322d94165891a2aa3a5274f54fbba75f06d669d490bd265170356bcf8dd7e  actionmailer-5.2.3.rc1.gem
7b55fa598d3c4826112d482bafb2f34c94457bc142a2989cae56fdd4282212c8  actionpack-5.2.3.rc1.gem
43c69fc7e4f0088d67db47b048785d00568706e5959bd634d9c4b8c59bba6f85  actionview-5.2.3.rc1.gem
350e2e04dc5e18c69f8d9aa2b784bc30c170d4b8ea152fbb3a4a28423b6c639b  activejob-5.2.3.rc1.gem
c4e52ac78e393f30c3f553f772942d0e6b5834baa3046a4c7a5db028f894b414  activemodel-5.2.3.rc1.gem
8c4858ccee67a420f5c4cea16c558e8502eb7fa72808d532dc1ef33586fb23b1  activerecord-5.2.3.rc1.gem
c83e05b7906ae4f9c657d46fc007acb3ef6c2ad602e633980bc22e59a0c7aa5c  activestorage-5.2.3.rc1.gem
88e334741d202bf95ebdf0d8db54b7abb299ecdb6e516d7b5033c19ad6f3dedf  activesupport-5.2.3.rc1.gem
419a56071b85f5496de89810700d6bfab8c373ceb8beccc3052bbb6c8e3fc6b3  rails-5.2.3.rc1.gem
1a907c12473dec3cd543099245d7a23c045d4b52f92eb35f38fee211ee613084  railties-5.2.3.rc1.gem
```

As always, huge thanks to the many contributors who helped with this release.
