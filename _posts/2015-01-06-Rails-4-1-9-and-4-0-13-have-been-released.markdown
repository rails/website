---
layout: post
title: '[ANN] Rails 4.1.9 and 4.0.13 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-01-06 17:13:06 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.1.9 and 4.0.13 have been released.

This will be also the last release of 4.0 series as announced
[in a previous blog post](https://rubyonrails.org/2014/9/12/Rails-4-1-6-and-4-0-10-has-been-released).

As per our maintenance policy, the release of Rails 4.2.0 means bug fixes will only apply to 4-2-stable,
regular security issues to 4.2.x, 4.1.x, and severe security issues to 4.2.x, 4.1.x, and 3.2.x.
In addition to these already stated commitments, I agreed to also apply bug fixes to 4-1-stable
until the Rails 5 release.

As before, we will announce in a future blog post when we will drop bug fixes support
for Rails 4.1.

## CHANGES since 4.0.12

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.0.13/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.0.13/actionpack/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.0.13/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.0.13/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.0.13/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.0.13/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.0.12...v4.0.13).

## CHANGES since 4.1.8

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.9/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.9/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.9/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.9/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.9/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.9/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.9/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.8...v4.1.9).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes.

Here are the checksums for 4.0.13:

```
$ shasum *4.0.13*
75f128ffb5813f6ec895a2f6c000a18531232bfb  actionmailer-4.0.13.gem
7356b2d90904ea3e5854a5fd5c969ff5521ee6bf  actionpack-4.0.13.gem
019bc6e77c2c430e52d93642bee8ad137ec288d8  activemodel-4.0.13.gem
fb367963994f153f68b904b8508b215b60a6a0ca  activerecord-4.0.13.gem
55cbd61d330d29fac50249d5ab9964e34a102f44  activesupport-4.0.13.gem
e4d679c792f0a2faafe69fd87217320bc318fc03  rails-4.0.13.gem
856d1f60df48479c4faba3de6d3ffcfadeee2f6b  railties-4.0.13.gem
```

Here are the checksums for 4.1.9:

```
$ shasum *4.1.9*
7d4a8ce21aa0429ec5fc05c64e2f64fa769a1c4a  actionmailer-4.1.9.gem
37b3990b77669877ab675124662ca5c0e880e556  actionpack-4.1.9.gem
baf6c54a9f411e9399dc7f9ad99aaa892a43293a  actionview-4.1.9.gem
cd9c214923ea0094fb65825b1866c3bc5b80fbdb  activemodel-4.1.9.gem
330a753ec001e38834406c464e306c3c43e276b5  activerecord-4.1.9.gem
66904e1371b047348d0247c43b9f1c3c596671bf  activesupport-4.1.9.gem
12a8b208566f4c822cc9199f51f60fd8baf010bc  rails-4.1.9.gem
2c494849ac54b8b3238d23fe62c81da37ca08e1b  railties-4.1.9.gem
```

I'd like to thank you all, every contributor who helped with this release.
