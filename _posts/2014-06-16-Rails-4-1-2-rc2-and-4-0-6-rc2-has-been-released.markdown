---
layout: post
title: '[ANN] Rails 4.1.2.rc2 and 4.0.6.rc2 have been released!'
category: releases
author: rafaelfranca
published: true
date: 2014-06-16 14:07:03 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.1.2.rc2 and 4.0.6.rc2 have been released.

We had a regression with the `protected_attributes` gem, so if you are using it in your Rails
application make sure you are using `protected_attributes` 1.0.8 to get it working with these Rails
versions.

If no new regressions are found expect the final release this Thursday, on Jun 19, 2014.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.0.5

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc2/actionpack/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc2/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.0.6.rc2/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.0.5...v4.0.6.rc2).

## CHANGES since 4.1.1

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc2/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc2/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc2/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.2.rc2/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.1...v4.1.2.rc2).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.0.6.rc2:

```
$ shasum *4.0.6.rc2*
4f92e40428cf3513823b16fb674cc59367c30e13  actionmailer-4.0.6.rc2.gem
87449d571f13806399bf26aa1fe666787a197af2  actionpack-4.0.6.rc2.gem
b8b9927eb65b43c10d0b7d79a4942925105c7dbb  activemodel-4.0.6.rc2.gem
3c37325ff3f763dce52554046ff07bacbfbb1dd6  activerecord-4.0.6.rc2.gem
f3572822ab03eeee772d849cb9201d29464e0bbb  activesupport-4.0.6.rc2.gem
020211149871991b45926e23a72c483826e14904  rails-4.0.6.rc2.gem
a86b1e31db544c762ebe1005db0e783ad6de604b  railties-4.0.6.rc2.gem
```

Here are the checksums for 4.1.2.rc2:

```
$ shasum *4.1.2.rc2*
a34885dfbadd9bb8aeb8047428f04f5680ef40ef  actionmailer-4.1.2.rc2.gem
4800e2ddac6c248817a2bedf2c8b35bd1dab7edd  actionpack-4.1.2.rc2.gem
777e2030dde924fb0a851f6227ee2224a9479735  actionview-4.1.2.rc2.gem
80597481e829dad1e8c7a9a331f3d1d64b7ac97d  activemodel-4.1.2.rc2.gem
5636ec01c68be14d3fb111a2a0c97ad7954929e5  activerecord-4.1.2.rc2.gem
cd64099318e90c72c8588f86c2355aef32580ab6  activesupport-4.1.2.rc2.gem
0f1a970cb66799374db8cbb68f536a515e6d87c0  rails-4.1.2.rc2.gem
86662065b041095ad318256f3a8cda2986849f4c  railties-4.1.2.rc2.gem
```

I'd like to thank you all, every contributor who helped with this release.
