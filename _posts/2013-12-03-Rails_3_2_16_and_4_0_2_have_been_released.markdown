---
layout: post
title: Rails 3.2.16 and 4.0.2 have been released!
categories:
author: tenderlove
published: true
date: 2013-12-03 11:05:03 -08:00
---

Hi everyone!

Rails 3.2.16 and 4.0.2 have been released!

These two releases contain important security fixes, so please upgrade as soon
as possible!  In order to make upgrading as smooth as possible, we've only
included commits directly related to each security issue.

The security fixes in 3.2.16 are:

* [CVE-2013-6417](https://groups.google.com/forum/#!topic/ruby-security-ann/niK4drpSHT4)
* [CVE-2013-4491](https://groups.google.com/forum/#!topic/ruby-security-ann/pLrh6DUw998)
* [CVE-2013-6415](https://groups.google.com/forum/#!topic/ruby-security-ann/9WiRn2nhfq0)
* [CVE-2013-6414](https://groups.google.com/forum/#!topic/ruby-security-ann/A-ebV4WxzKg)

The security fixes in 4.0.2 are:

* [CVE-2013-6417](https://groups.google.com/forum/#!topic/ruby-security-ann/niK4drpSHT4)
* [CVE-2013-4491](https://groups.google.com/forum/#!topic/ruby-security-ann/pLrh6DUw998)
* [CVE-2013-6415](https://groups.google.com/forum/#!topic/ruby-security-ann/9WiRn2nhfq0)
* [CVE-2013-6414](https://groups.google.com/forum/#!topic/ruby-security-ann/A-ebV4WxzKg)
* [CVE-2013-6416](https://groups.google.com/forum/#!topic/ruby-security-ann/5ZI1-H5OoIM)

The commits for 3.2.16 can be found [here](https://github.com/rails/rails/compare/v3.2.15...v3.2.16), and the commits for 4.0.2 can be found [here](https://github.com/rails/rails/compare/v4.0.1...v4.0.2).

Here are the checksums for 3.2.16:

```
[aaron@higgins release]$ shasum *3.2.16*
6ae0b4c073d51ca6c1c8a48c2223151058809e83  actionmailer-3.2.16.gem
6b28544b8671834814d27195c53be0bf4c91b72f  actionpack-3.2.16.gem
7f8e51d15bcda6f88d4a64d8de4251e2dedbc2da  activemodel-3.2.16.gem
1af9470cba9e2a768db94161142a3db1329da05c  activerecord-3.2.16.gem
46fdcf37936ca9184ad20e3eb70a4eceacd9f75f  activeresource-3.2.16.gem
6182ce0acd1ed8e355c0c588c186e7a4613634de  activesupport-3.2.16.gem
a1e46e22822a908d2f74ef6c1be6f67b98217889  rails-3.2.16.gem
8b964801c3c0272dbef93de05de793799df8b1f1  railties-3.2.16.gem
```

Here are the checksums for 4.0.2:

```
[aaron@higgins release]$ shasum *4.0.2*
744369829411616d403b09eb8d64370d1acd6ee1  actionmailer-4.0.2.gem
f16172154a7bfc6f95722aa035ded4228cbfe28d  actionpack-4.0.2.gem
7e0fbf71b18796ff35c8a76ce9568bd0fef4d0be  activemodel-4.0.2.gem
0e3e050c9d8ba2232a7ca9904f3215915001e9d1  activerecord-4.0.2.gem
aafba8dda508d8fd887788411c8881a31d4311a6  activesupport-4.0.2.gem
17689cefe57cb793d2fdb32cfbac6c9952df0186  rails-4.0.2.gem
b913a022a591d31edd8d9e436947072ac85428f7  railties-4.0.2.gem
```

Happy Tuesday! <3<3<3<3
