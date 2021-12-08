---
layout: post
title: Rails 4.0.11.1 and 4.1.7.1 have been released
categories: releases
author: rafaelfranca
published: true
date: 2014-11-19 17:16:18 -02:00
---
Hi everyone!

Rails 4.0.11.1 and 4.1.7.1 have been released!

These two releases contain only security fix that was already released as 4.0.12 and 4.1.8.
You can read more about the issue [here (CVE-2014-7829)](https://groups.google.com/forum/#!topic/rubyonrails-security/rMTQy4oRCGk).

4.0.12 and 4.1.8 were inadvertently based on their respective stable branches, and so incorporated
additional changes beyond those necessary to resolve the security issue. In keeping with our security
policy, it is our intention to include only the minimum necessary changes in security releases, to
ensure everyone can upgrade without fear of regressions. As those releases included unrelated changes,
we are providing new releases, based on the previous release, which contain only the security fix
itself.

If you have already successfully upgraded to 4.0.12 or 4.1.8, no further action is required.
Otherwise, if you are still on 4.0.11 or 4.1.7, please do upgrade to 4.0.11.1 or 4.1.7.1 at your
earliest convenience.

The 3.2.21 release did incorporate a second change, but that change was intended: by policy, minor
security-relevant bugs (which do not independently warrant a security release) are occasionally
backported to 3-2-stable, and rolled into a subsequent security release.

The commits for 4.0.11.1 can be found [here](https://github.com/rails/rails/compare/v4.0.11...v4.0.11.1),
and the commits for 4.1.7.1 can be found [here](https://github.com/rails/rails/compare/v4.1.7...v4.1.7.1).

Here are the checksums for 4.0.11.1:

```
$ shasum *4.0.11.1*
f35d8d54b15b83b25aa6a46aa57b58cd9888b5cc  actionmailer-4.0.11.1.gem
9d656c7959dc913fc208fa7ffdab265b73abb8f1  actionpack-4.0.11.1.gem
bde6aa4985bff22ca7046f5ad855ccacee3e345e  activemodel-4.0.11.1.gem
26d91f7d7f5cf828d25503326f6fe598f275cca3  activerecord-4.0.11.1.gem
2040d73aeb8ec84945e5ac5a1e060a703770f0a4  activesupport-4.0.11.1.gem
1dde2b45a0039ccef166030bdbc1948fa899a5e5  rails-4.0.11.1.gem
86cc0c06139bc085e830fbd0994a0bf7480e68dc  railties-4.0.11.1.gem
```

Here are the checksums for 4.1.7.1:

```
$ shasum *4.1.7.1*
3e0c627e2f35293c7f963586ddedad84fe140c3b  actionmailer-4.1.7.1.gem
038d1dd8eab2471f44cf456cbb8f94f4e413e069  actionpack-4.1.7.1.gem
6a6e2a188b58855748e0f400d6c562a779e76130  actionview-4.1.7.1.gem
6dcfeca9cb28490a4d3fde1cfbb9d14850130167  activemodel-4.1.7.1.gem
b1d5b4bab0873e712f270fdb7ad8acb81d487a73  activerecord-4.1.7.1.gem
0af0c9e374f1a83f06db82457c219b29556233ca  activesupport-4.1.7.1.gem
1fbef83600552fc18d83e61c39da752c7d6ba07c  rails-4.1.7.1.gem
f50d5902047d96b8836c3f6376ed9c212506268b  railties-4.1.7.1.gem
```

<3<3<3<3
