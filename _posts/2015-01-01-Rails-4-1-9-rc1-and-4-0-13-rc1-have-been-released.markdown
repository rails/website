---
layout: post
title: '[ANN] Rails 4.1.9.rc1 and 4.0.13.rc1 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-01-01 21:56:06 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.1.9.rc1 and 4.0.13.rc1 have been released.

This is the first release of the year and it includes a lot of bug fixes. This will be also
the last release of 4.0 series as announced
[in a previous blog post](https://rubyonrails.org/2014/9/12/Rails-4-1-6-and-4-0-10-has-been-released).

As per our maintenance policy, the release of Rails 4.2.0 means bug fixes will only apply to 4-2-stable,
regular security issues to 4.2.x, 4.1.x, and severe security issues to 4.2.x, 4.1.x, and 3.2.x.
In addition to these already stated commitments, I agreed to also apply bug fixes to 4-1-stable
until the Rails 5 release.

As before, we will announce in a future blog post when we will drop bug fixes support
for Rails 4.1.

If no regressions are found expect the final release this Tuesday, on January 6, 2015.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.0.12

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.0.13.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.0.13.rc1/actionpack/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.0.13.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.0.13.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.0.13.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.0.13.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.0.12...v4.0.13.rc1).

## CHANGES since 4.1.8

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.9.rc1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.9.rc1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.9.rc1/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.9.rc1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.9.rc1/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.9.rc1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.9.rc1/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.8...v4.1.9.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.0.13.rc1:

```
$ shasum *4.0.13.rc1*
bf4ddb5aa6eefc6e2495a1364974a5b396d94596  actionmailer-4.0.13.rc1.gem
2bf785e91159bba8fe324e2f48a72277f2b3cf33  actionpack-4.0.13.rc1.gem
f9d92979e211ce7fa71252cf1b6b4ac94c7f0b91  activemodel-4.0.13.rc1.gem
d5147f64e08a3f5aed4c22ff1ebf640ca6fc0ae3  activerecord-4.0.13.rc1.gem
e6f1421262fd1064e973f3d2628c6129b4c20d17  activesupport-4.0.13.rc1.gem
f7416fc8485bb8a622fb50e0dd2c3fa5ca4215fa  rails-4.0.13.rc1.gem
8a0690bab5e43712e8e982fe02bf76ea989f9356  railties-4.0.13.rc1.gem
```

Here are the checksums for 4.1.9.rc1:

```
$ shasum *4.1.9.rc1*
8afbb9c71a8f6e0dff26daacde407fe35aac8375  actionmailer-4.1.9.rc1.gem
a5fd439bc41844a3c02671d7425bfa71d96cfbf1  actionpack-4.1.9.rc1.gem
a77aaa2f936445211e7455b3228a9bfe8f27a4ac  actionview-4.1.9.rc1.gem
65a7acbf9ef9b47392a48ab4c9ace44f12ea1f60  activemodel-4.1.9.rc1.gem
eb66d5c52f0740114de46e1a1b76a0079c723d1f  activerecord-4.1.9.rc1.gem
e758d54d7fabc7d23ff995646096f40d28df42a9  activesupport-4.1.9.rc1.gem
479a31dd8d9eea3de6f444139eaefc830c6db170  rails-4.1.9.rc1.gem
dae65c526ec8ee3abab9a9e8807ad7b210b7941d  railties-4.1.9.rc1.gem
```

I'd like to thank you all, every contributor who helped with this release.

Happy new year! :tada:
