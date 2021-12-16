---
layout: post
title: '[ANN] Rails 4.2.7.rc1 and 4.1.16.rc1 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2016-07-01 23:41:00 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.7.rc1 and 4.1.16.rc1 have been released.

As [Rails 5 was released](https://rubyonrails.org/2016/6/30/Rails-5-0-final), this is probably
going to be the last release of Rails 4.1. Please take some time to upgrade your application to
Rails 4.2 or Rails 5.

If no regressions are found expect the final release this Thursday, on July 7, 2016.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.15

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.16.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.16.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.16.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.16.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.16.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.16.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.16.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.15...v4.1.16.rc1).

## CHANGES since 4.2.6

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.7.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.7.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.7.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.7.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.7.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.7.rc1/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.7.rc1/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.7.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.6...v4.2.7.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.1.16.rc1:

```
$ shasum *4.1.16.rc1.gem*
8e0be05cfb4e4516c75cc12c971fe4924f111762  actionmailer-4.1.16.rc1.gem
1ad0c0c1bc13ddf9f85c6b1d5cd6288d8d0114d6  actionpack-4.1.16.rc1.gem
ee83721f8f7a95b23aa93163fe3e01ba89ca046a  actionview-4.1.16.rc1.gem
35fa99af4f158079a444cb8473a0a3dd0465220b  activemodel-4.1.16.rc1.gem
680a69dc13474894c84054a1f2a9d23868d6000e  activerecord-4.1.16.rc1.gem
a03b6a27496cf08e215db8e487f3a06a45b0e29a  activesupport-4.1.16.rc1.gem
70bf01fb349592a8473d3ffedb873c9f9abc293d  rails-4.1.16.rc1.gem
5c6cc7659065da6f61fc3ff0bcc13439a4df8ee2  railties-4.1.16.rc1.gem
```

Here are the checksums for 4.2.7.rc1:

```
$ shasum *4.2.7.rc1.gem*
6deda04a33d767f0d9d7be5a199c98c359701b34  actionmailer-4.2.7.rc1.gem
723e016bcf59cb860b6343a4936f417c927dab09  actionpack-4.2.7.rc1.gem
19cef0c8418c294ebc46547e29d460c554a4d77c  actionview-4.2.7.rc1.gem
f1038a46fdcbd888dca12285d7bf8db2ea40f80c  activejob-4.2.7.rc1.gem
c48f4b32f0da8ea64541e8ca80b4e15a47e01ad1  activemodel-4.2.7.rc1.gem
0ef45fd5da001370593558cb8b64f5aba6d7de16  activerecord-4.2.7.rc1.gem
5969a35bf853ce9f872f6c99f4d75572d436a4ed  activesupport-4.2.7.rc1.gem
ac23853084ac321ce40a0e79d2f878ad18dac7a3  rails-4.2.7.rc1.gem
e9dde94765e7a8682ff4675f8ae47244a996644d  railties-4.2.7.rc1.gem
```

I'd like to thank you all, every contributor who helped with this release.
