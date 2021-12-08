---
layout: post
title: '[ANN] Rails 3.2.14.rc2 has been released!'
category: releases
author: rafaelfranca
published: true
---

Hi everyone,

One regression was found on the 3.2.14.rc1 release. So, following the script
We are releasing a new release candidate, Rails 3.2.14.rc2.

If no regressions are found we will release 3.2.14 final final this Friday, on July
19, 2013. If you find one, please [open an Issue on
GitHub](https://github.com/rails/rails/issues/new) and mention me (@rafaelfranca) on it,
so that we can fix it before the final release.

## CHANGES since 3.2.14.rc1

*Action Mailer*

No changes.

*Action Pack*

No changes.

*Active Model*

No changes.

*Active Record*

*   Do not re-create destroyed association when saving the parent object.

    Fixes #11450.

    *Paul Nikitochkin*

*Active Resource*

No changes.

*Active Support*

No changes.

*Railties*

No changes.

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v3.2.14.rc1...v3.2.14.rc2).

## SHA-1

If you'd like to verify that your gem is the same as the one we've uploaded,
please use these SHA-1 hashes:

* 8126e9ca60ca050fd4e809d70f2035deae1e681f  actionmailer-3.2.14.rc2.gem
* bc0c7594aebc42fe0cdd7213017e3280d6111c40  actionpack-3.2.14.rc2.gem
* 1b3de1ee862ef055b7a300e180ae97140d51534b  activemodel-3.2.14.rc2.gem
* 57a9ede96d56eaac5e484f8becd41ff9513918f3  activerecord-3.2.14.rc2.gem
* 2ad96e7ab80ef8801234774f81d85cc800abfc96  activeresource-3.2.14.rc2.gem
* 02c03d4d8b888b02bf9898ab663126760e3b3678  activesupport-3.2.14.rc2.gem
* 561edde241b39ba54f79b32f93f29db699fbf668  rails-3.2.14.rc2.gem
* 4d16819efc81d3a4c761cad460c094f69a58171c  railties-3.2.14.rc2.gem

Thank you everyone!
