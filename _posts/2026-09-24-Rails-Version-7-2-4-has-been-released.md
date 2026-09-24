---
layout: post
title: 'Rails Version 7.2.4 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2026-09-24 14:15:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 7.2.4 has been released.

As stated in the [maintenance policy](https://rubyonrails.org/maintenance), this
is the last release of the 7.2.x series.

Security issues and bug fixes will only be provided for the 8.0.x and 8.1.x series.


## CHANGES since 7.2.3

To see a summary of changes, please read the release on GitHub:

[7.2.4 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.2.4)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.2.4/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.2.3...v7.2.4).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.2.4:

```
$ shasum -a 256 *-7.2.4.gem
b97027b31e111675dba67b86edcd589acc25a0dddf8eecacca18d33a703a0788  activesupport-7.2.4.gem
c6a2f2290fdf8728b596fba1fc528e65852c6e015ccc385ddf0f93c455588773  activemodel-7.2.4.gem
b3549deb6a4c469e0cb652194cf566b6010f1f1796404b4213d8b47469d411e5  activerecord-7.2.4.gem
6005a3427881b2e8f509a5f7ed894e66f256410f734f7a227d01c4d3d9cb06a2  actionview-7.2.4.gem
c7acf80263cf09125e5c4d866abda3536cc941f436e81673f17be11ad407a4eb  actionpack-7.2.4.gem
a83376234173c67e2d7b155132b79750776215ab16f1a0a2f20ad59a50a7054b  activejob-7.2.4.gem
9c58352e79df660aecddb1cdfbe1e6e555169c3328ae15ec06b6eae611de8917  actionmailer-7.2.4.gem
053e939f728eac986ff5321e42ba5b884de6ab64a392af0e8d45866d0d3fb63a  actioncable-7.2.4.gem
cc82c0d1c50cfcd52197067a61ca16e5b3716c0ac2eba666b30449ba3532bddc  activestorage-7.2.4.gem
92d4d107554eb29cdffce9aaaf41daf07b9e6579d5a0d4cc9b64de6e87eadee9  actionmailbox-7.2.4.gem
49b0a18a387e983d48fa559ef8aa8d9c37c21399998b59984d87c387d81f3c9c  actiontext-7.2.4.gem
e4b754edc7b42c9f3d6cc3048832efe634d727aa59093a03bf8a78096917f121  railties-7.2.4.gem
28b530f2db9dc112ce896fd93a00863d7e9ee98c4e7dbd02ea5b7647cb63738e  rails-7.2.4.gem
```

As always, huge thanks to the many contributors who helped with this release.
