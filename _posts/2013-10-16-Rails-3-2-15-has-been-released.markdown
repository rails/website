---
layout: post
title: '[ANN] Rails 3.2.15 has been released!'
category: releases
author: tenderlove
published: true
---

Hi everyone,

I am happy to announce that Rails 3.2.15 has been released. This is a bug fix
release and includes 56 commits.

This release also contains one security fix that you can read about [here](https://groups.google.com/forum/#!topic/ruby-security-ann/yvlR1Vx44c8).  Users are encouraged to upgrade as soon as possible.

## CHANGES since 3.2.14

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v3.2.15/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v3.2.15/actionpack/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v3.2.15/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v3.2.15/activerecord/CHANGELOG.md)
* [Active Resource CHANGELOG](https://github.com/rails/rails/blob/v3.2.15/activeresource/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v3.2.15/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v3.2.15/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v3.2.14...v3.2.15).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes:

```
$ shasum *
3c9bf15a9b2ea5c4c3280638776f84783adefe6d  actionmailer-3.2.15.gem
34cc3d5cbcee97a4e57ee9d909f51f0f387991bb  actionpack-3.2.15.gem
b1c631dd75fffee2f34407aaf01405aef6c63a43  activemodel-3.2.15.gem
7c86074b47c3864943b719d5b969264e2ace722c  activerecord-3.2.15.gem
a95f88e30d1af9c377f01725282d0e581bd9f88f  activeresource-3.2.15.gem
08b57d2bf95fd16eb9bf1de144f7f0461894ee68  activesupport-3.2.15.gem
da220b9b6f37871d7f32f4c66fe33d42acc92a5a  rails-3.2.15.gem
66e189a5331dabc675459001d57e0fd906f3a888  railties-3.2.15.gem
```

I'd like to thank you all, every contributor who helped with this release,
especially everyone who tried the release candidates.
