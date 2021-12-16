---
layout: post
title: '[ANN] Rails 4.2.7 and 4.1.16 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2016-07-13 00:32:00 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.7 and 4.1.16 have been released.

As [Rails 5 was released](https://rubyonrails.org/2016/6/30/Rails-5-0-final), this is probably
going to be the last release of Rails 4.1. Please take some time to upgrade your application to
Rails 4.2 or Rails 5.

## CHANGES since 4.1.15

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.16/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.16/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.16/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.16/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.16/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.16/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.16/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.15...v4.1.16).

## CHANGES since 4.2.6

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.7/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.7/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.7/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.7/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.7/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.7/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.7/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.7/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.6...v4.2.7).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.1.16:

```
$ shasum *4.1.16.gem*
73d32e6b3cdb1969a717fc3ca8f5c3efcf83b13c  actionmailer-4.1.16.gem
09a7871a038b949e3b694fb342b4ed8b7aca5cb2  actionpack-4.1.16.gem
a819dd539d801a32cd38ab5de4d87f02fc0319f9  actionview-4.1.16.gem
06d0b51e36752d8359c3c2328a3dd8d74d3e2ae0  activemodel-4.1.16.gem
ee90f4a21ccf60b389faf1aa0c2f98c5d2615e17  activerecord-4.1.16.gem
4249169a2ec9c61a0ebdcc79a42f7c878c1a88e5  activesupport-4.1.16.gem
a34763cea87724c64b020550c61b14f10f770e54  rails-4.1.16.gem
3ac57878a20dc3d676e90658201bd57f51a12eaf  railties-4.1.16.gem
```

Here are the checksums for 4.2.7:

```
$ shasum *4.2.7.gem*
60b53f522dc7769ad03fe4d16bedc2fccd2ea238  actionmailer-4.2.7.gem
6660830b452dd1f074b2279c6e229eaf48a82ffd  actionpack-4.2.7.gem
434f4ef869ba26eedfc9faaa7f7fc26d9eff24b4  actionview-4.2.7.gem
4c32473e6f408b70993cede2f1718aef69ce7122  activejob-4.2.7.gem
f21ddf419aa6db5b2aed441d8d3849e22b5b4bbf  activemodel-4.2.7.gem
e2ad80b89e6af968286855a4913c2460adc888c4  activerecord-4.2.7.gem
517fd2649deacd98339954ac41d5378e8215a98a  activesupport-4.2.7.gem
34475b44a9195d440523af4a0cbac8f8435c7c47  rails-4.2.7.gem
5ea798d4276084cf446f9e24599ad24fa2e873b4  railties-4.2.7.gem
```

I'd like to thank you all, every contributor who helped with this release.
