---
layout: post
title: 'Rails 4.2.10.rc1 released'
categories: releases
author: eileencodes
published: true
date: 2017-09-20 16:01:10 -04:00
---

Hi everyone,

I am happy to announce that Rails 4.2.10.rc1 has been released!

Per our release policy Rails 4.2 is no longer supported except for severe security fixes, but the last release introduced some regressions that warranted a release.

If no new regressions are found, expect the final release on Wednesday, September 27, 2017.
If you find a regression, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@eileencodes) on it.

## CHANGES since 4.2.9

The following gems had changes since 4.2.9. You can read about the specific changes in the changelogs on GitHub:

* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.10.rc1/actionpack/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.10.rc1/activerecord/CHANGELOG.md)

The remaining gems (Action Mailer, Action View, Active Job, Active Model, Active Support, and Railties) had no changes.

*Full list of changes*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.9...v4.2.10.rc1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 4.2.10.rc1:

```
$ shasum -a 256 *-4.2.10.rc1.gem
91f279396cd0757784445294a0422c37113a6d49c856ed1b6ce60cd2d6cd4c57  actionmailer-4.2.10.rc1.gem
2f582b5c3b42dea2a877af76812168ad721b583f501c748c32699686d8996c6e  actionpack-4.2.10.rc1.gem
1f587908650b6e96a500de3ccbeb229e8ffe1b8a06bbadc930acad762dd70503  actionview-4.2.10.rc1.gem
b68b1e2475e6cb118a66c9b1daa172965b634b311e81e6ec686f819f0c71c1c4  activejob-4.2.10.rc1.gem
18507309ed0f00f5a6ffc09da1df5076f016f516ce8e7afe2b4138353ca7c915  activemodel-4.2.10.rc1.gem
53a094625fe76d353d95cfd5cf0d989e5f0f18572cded546e3942e2647fdac5e  activerecord-4.2.10.rc1.gem
e4bb02e67d57e9c52fbe0f90b367eb653f4906351b470ce60b34556bb5710b96  activesupport-4.2.10.rc1.gem
9e43e2cda17c4d68b65eff9ef4df6c62c87a0f5779a612fd3dc06e80f0182c7c  rails-4.2.10.rc1.gem
360a5c67a78c5fffaa27c6caa6ae4663d49ab675507ed61f95d2f51869b671b4  railties-4.2.10.rc1.gem

```

As always, huge thanks to the many contributors who helped with this release.
