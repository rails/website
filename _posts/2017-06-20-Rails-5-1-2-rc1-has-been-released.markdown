---
layout: post
title: 'Rails 5.1.2.rc1 has been released'
categories: releases
author: rafaelfranca
published: true
date: 2017-06-20 13:26:20 -04:00
---
Hi everyone,

I am happy to announce that Rails 5.1.2.rc1 has been released.

If no regressions are found, expect the final release on Monday, June 26, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 5.1.1

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.1.2.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.1.2.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.1.2.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.1.2.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.1.2.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.1.2.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.1.2.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.1.2.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.1.2.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.1.1...v5.1.2.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.1.2.rc1:

```
$ shasum -a 256 *-5.1.2.rc1.gem
ae90de7d8f5d1129a162e9419b65e08870a433ed4eb067bcd44be161de394773  actioncable-5.1.2.rc1.gem
bd7b3ac7dacb1a983bf2b5dcc56255261421285ef9b5cc5d645d416a1ba42378  actionmailer-5.1.2.rc1.gem
21b097d2ea1009eaad2487b4461f20a2c76d2ea9786e2fb37dd1e87116ca3621  actionpack-5.1.2.rc1.gem
689d6580dbef9c81e43fc77185a7916ef7ca2a3d863300f6e47d8199e4bdbd1c  actionview-5.1.2.rc1.gem
dfa1afc5d701241e25282c318738a8c379fdbd9cf682725f87e1c16584bf3be6  activejob-5.1.2.rc1.gem
040c3aaa4bf7686efa0e716dc4cf077d4d5b1ef598c81f7d32e86f1f8f26817a  activemodel-5.1.2.rc1.gem
8bc8b1677051975083717c65a3ee3df612b5e9d381db9d90dc71f3484f514a0b  activerecord-5.1.2.rc1.gem
69aab1c234f1223ceedb62168df071bdb3483a00be5e186278983eb1ed636e69  activesupport-5.1.2.rc1.gem
50a14c6e4952297f0a9a510b268ea845833474dccbe1619594c0406ceab5c7fa  rails-5.1.2.rc1.gem
7c18b3a185f73740b020ecf9414ea8d5c254edddefce64e7383bd137c7626d45  railties-5.1.2.rc1.gem

```

As always, huge thanks to the many contributors who helped with this release.
