---
layout: post
title: '[ANN] Rails 5.0.2.rc1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2017-02-24 20:05:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 5.0.2.rc1 has been released.

If no regressions are found, expect the final release on Wednesday, March 1, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 5.0.1

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.0.2.rc1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.0.2.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.0.2.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.0.2.rc1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.0.2.rc1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.0.2.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.0.2.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.0.2.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.0.2.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.0.1...v5.0.2.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.0.2.rc1:

```
$ shasum -a 256 *-5.0.2.rc1.gem
89e447f43e924c465d4bc19efe333e67966daddb3d163cf6cf9b324578628811  actioncable-5.0.2.rc1.gem
56621e6cea32533f15ae0abab1c3a385c4f0b92f3eab2f3e6e6a292f41a3d8f4  actionmailer-5.0.2.rc1.gem
deacc6b0c965d73adf2259fca2d2e81dd27ed81402e742fd6b70210b6970dd0c  actionpack-5.0.2.rc1.gem
f0e55b9cc876f55dd4d1585a65db8f4b15b3e90ad4e65cc1f3e2dfe893da4460  actionview-5.0.2.rc1.gem
23ffc888458274eb251b181d9a8457f8aea2ee1307815809c5fa087f016cc2ea  activejob-5.0.2.rc1.gem
b56723d63d8cb5bea72318162a97c6b9062ced57f784252434a562b964eebeb5  activemodel-5.0.2.rc1.gem
e5821ea73f6ad65c5f26c236fec5bd443f962b8f6caa22b277fc2654c0cbf137  activerecord-5.0.2.rc1.gem
e35c127ae13bb87f10ef2e39661586103619e963b9135f66bfa076a9378fa222  activesupport-5.0.2.rc1.gem
a7e221850b4ba50150d814c12750b559b2bf20c164cad3f647e8c7b41da267ed  rails-5.0.2.rc1.gem
e14777d86c544f7c368f02b8e6d805cdc3bd62c40245ddb4c0f438220437e73a  railties-5.0.2.rc1.gem

```

As always, huge thanks to the many contributors who helped with this release.
