---
layout: post
title: 'Rails 7.0.4.2 and 6.1.7.2 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2023-01-24
---

Hello again! We've just released Rails 7.0.4.2 and 6.1.7.2 addressing a
compatibility issue with the 7.0.4.1 and 6.1.7.1 security releases from last
week. This release adds a single extra commit to fix an issue users were seeing
when using `domain: :all` for cookies on a one-level two-letter TLD.

The 6.0.6.1 release did not include the problematic code as that series is no
longer receiving security patches for non-critical issues. Users on this
release are encouraged to upgrade to a newer version.

This doesn't contain any additional security fixes, so users who have already
upgraded to either 7.0.4.1 or 6.1.7.1 can upgrade at their convenience.


Below are the shas for the released versions:

```
$ shasum *-6.1.7.2*
e368be89664ea6a95d7a6fecbd6125cf81f14755  actioncable-6.1.7.2.gem
09498c17fb82cee9dc84bfd52016bcb3c686c7a2  actionmailbox-6.1.7.2.gem
d28dae736f31200add434477a94b6028d4c5bf6f  actionmailer-6.1.7.2.gem
a16c60f19f33770acca1d3803062fa19f40ffac8  actionpack-6.1.7.2.gem
acf87526d7b0592075956abc99bd8c382f5f4b5a  actiontext-6.1.7.2.gem
e2a2877edea42c68272cb998e3e375104cc5dda1  actionview-6.1.7.2.gem
950fd50d65340f0fcccf144c4768902eb3d2e6bc  activejob-6.1.7.2.gem
3d0959bb1638c62af251d2829232b6a5bd430872  activemodel-6.1.7.2.gem
84a19085edb9d104804cad98da8785166732e7d6  activerecord-6.1.7.2.gem
ee8c4f330acdff5116913e6b2f1a117ac3d37dc4  activestorage-6.1.7.2.gem
3f066326dea20022c79586c620c8c98c7df271c5  activesupport-6.1.7.2.gem
739732f9cf1e5324983b193b373ea7aecdbc9c04  rails-6.1.7.2.gem
c49224ec07d874a2518c2a1416df683ed60dcfe7  railties-6.1.7.2.gem
```

```
$ shasum *-7.0.4.2*
e64dbf2659370f7a3f5b47ca96eeeb92bf11eb75  actioncable-7.0.4.2.gem
b18c343c203cac87fad8809d977d46b1fa187d16  actionmailbox-7.0.4.2.gem
614c10b481470371790c51a7cde68074e3bf67f5  actionmailer-7.0.4.2.gem
ccea43af0757b3d8fefd8d22c9a7ecb691f0f160  actionpack-7.0.4.2.gem
39ab1c47e84c45499fd46810602731672ae8681b  actiontext-7.0.4.2.gem
acb25492cb5d7660cf8cbdfc748953b64803f3b5  actionview-7.0.4.2.gem
9eee6b81e284e6db00159992daa873a80eb4f096  activejob-7.0.4.2.gem
71b5326db7790f352b81a5bb238a53628a371c5b  activemodel-7.0.4.2.gem
d5ebe40d106a983851536ac2d63e4e635f2a5be8  activerecord-7.0.4.2.gem
595c3dac533ae8708c1d8e5e4743aba4a601852e  activestorage-7.0.4.2.gem
a1edfc89ffa34498cf554307a088d40f54b54605  activesupport-7.0.4.2.gem
6ff420da7ec58c2a8f2f64cf4b0dbd0cf77b4157  rails-7.0.4.2.gem
f9525eaaccc3de0ee91e56635b6a0250405aeafe  railties-7.0.4.2.gem
```

If you run in to any further issues, please sure to let us know in the issue tracker.

Thank you!
