---
layout: post
title: Rails 3.2.18, 4.0.5 and 4.1.1 have been released!
categories: releases
author: rafaelfranca
published: true
date: 2014-05-06 14:17:03 -03:00
---

Hi everyone!

Rails 3.2.18, 4.0.5 and 4.1.1 have been released!

These three releases contain important security fix, so please upgrade as soon
as possible! In order to make upgrading as smooth as possible, we've only
included commits directly related to each security issue.

The security fixes is:

* [CVE-2014-0130](https://groups.google.com/d/msg/rubyonrails-security/NkKc7vTW70o/NxW_PDBSG3AJ)

The commits for 3.2.18 can be found [here](https://github.com/rails/rails/compare/v3.2.17...v3.2.18),
the commits for 4.0.5 can be found [here](https://github.com/rails/rails/compare/v4.0.4...v4.0.5),
and the commits for 4.1.1 can be found [here](https://github.com/rails/rails/compare/v4.1.0...v4.1.1).

Here are the checksums for 3.2.18:

```
$ shasum *3.2.18*
971d49dac1d0d2576e9bd01b9a96c393098a96c5  actionmailer-3.2.18.gem
4c99239a646f8c662559f9fc4924c20a0f29eae7  actionpack-3.2.18.gem
51f280b8c606a3c7cd503933cabff7b0c6172d1b  activemodel-3.2.18.gem
b99c31493ddaf0af4c0007b526dd5213222c2bd9  activerecord-3.2.18.gem
a9d35d1c837047ee328d0f16f420cd2c60a612c9  activeresource-3.2.18.gem
1526e35aaa02ffb526f5cda77425fecdfd449f56  activesupport-3.2.18.gem
8ad5bf5ab760112100e29d8515d7c5181f8dbae0  rails-3.2.18.gem
97e6e478dbebff9cf31c301381b8527f2a523ee5  railties-3.2.18.gem
```

Here are the checksums for 4.0.5:

```
$ shasum *4.0.5*
80be4d61b42fc532d87ba8816f521b7413a52ce2  actionmailer-4.0.5.gem
b830f763f6b621cb066002eef02f8ada4826baa2  actionpack-4.0.5.gem
b1aefc15e8b506a53975705840e0445065e14822  activemodel-4.0.5.gem
f263e52056be02628308ccb1980903f3f5fb7668  activerecord-4.0.5.gem
3fba584240a62ad0267f77abbcbd849f138f724b  activesupport-4.0.5.gem
166a8ee2064d34fefcda0a383672e83818e5961f  rails-4.0.5.gem
fefa3c5e348b05027f4181e5e6d39f14599f1724  railties-4.0.5.gem
```

Here are the checksums for 4.1.1:

```
$ shasum *4.1.1*
796ec07e257a98f31eeea38def505cbf3f1e2747  actionmailer-4.1.1.gem
25e4ad2bc143df849941ba54bb47b1d2dca55c2c  actionpack-4.1.1.gem
61a9662e06b32f29d89278105e87c230377a6dfd  actionview-4.1.1.gem
672d510e216019776b66f1e07e7faf4ac5bb21f5  activemodel-4.1.1.gem
63100443a3416cdde474cca56967bd55029ac507  activerecord-4.1.1.gem
937c7faa903e678e55536c18ee1ea9bafe08b8af  activesupport-4.1.1.gem
558547922545bf8f7c1c2d3bc845b2a66f9d826a  rails-4.1.1.gem
c5c5763e164eb9fb5e3a93fc25df436c379b0d54  railties-4.1.1.gem
```

Happy Tuesday! <3<3<3<3
