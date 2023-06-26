---
layout: post
title: 'Rails Versions 7.0.5.1, 6.1.7.4 have been released!'
categories: releases
author: tenderlove
published: true
date: 2023-06-26 14:51:20 -07:00
---

Hi everyone!  Rails versions 7.0.5.1 and 6.1.7.4 have been released!  These are security releases, so please upgrade when you get a chance!
You can check out the CVE details [here](https://discuss.rubyonrails.org/t/cve-2023-28362-possible-xss-via-user-supplied-values-to-redirect-to/83132).
Also, the 6.0 and older series are no longer supported. We'd encourage users on that release to upgrade to a supported version as soon as possible.

Thanks, and have a great day!

❤️

For those interested, below are the awesome shasums for these releases

```
$ shasum *6.1.7.4*
5fc9b505a9b1ea45d7284be7f16286bf3072bcd3  actioncable-6.1.7.4.gem
9c06b4414dd99dd313fe7c4621f7fad24938ef96  actionmailbox-6.1.7.4.gem
58a36dcc503ca2f06407639f86652c2ce3806805  actionmailer-6.1.7.4.gem
2f0909f40480e4406ee1560b65de2fd1492c0423  actionpack-6.1.7.4.gem
6750e3c6f6258aa2357af0f35ba2dad65a040c3d  actiontext-6.1.7.4.gem
ec1800949a51195493e403981a86bae56018e928  actionview-6.1.7.4.gem
0352d90ed32424a111dd133cd351f5fa76e9ee87  activejob-6.1.7.4.gem
31bdf2cf645a0409d406d7b51301fc11392d63e1  activemodel-6.1.7.4.gem
2130428acb0b52c189fa65a01b639e15011059d9  activerecord-6.1.7.4.gem
bef96a71bdbcf91e7e24feb4e717953426ffca8a  activestorage-6.1.7.4.gem
0b7acfff857d06f18d19bcc32f17206a62167645  activesupport-6.1.7.4.gem
563d08e083e61d41e3b533e0f2d035dec7ddecea  rails-6.1.7.4.gem
61c3cca6742d8488c6b340a14fe0e7ecd3309281  railties-6.1.7.4.gem
```

```
$ shasum *7.0.5.1*
6583d1e85348a24f1a1702b755443761a74df4c1  actioncable-7.0.5.1.gem
10ff1476492309440d4a1f85c7cf532e70d8afe4  actionmailbox-7.0.5.1.gem
4bb1c292f36a12883f89c069738890b3910bee5a  actionmailer-7.0.5.1.gem
04e81b4024c877f1962c6bb9068373038c9d1b8f  actionpack-7.0.5.1.gem
777c700fffd6778bb5fcae57260b995324d6ab69  actiontext-7.0.5.1.gem
ba707c8ca676103711f1cc36f21c2c99e39c23d0  actionview-7.0.5.1.gem
847334b66460f4ff4876724f3a1083b2134bf49a  activejob-7.0.5.1.gem
eb290aab47b98df8818df099aa6d1e5b4c97fb6e  activemodel-7.0.5.1.gem
86d52d20c63eb2e9b1e8cfdb66f0cc95b705804b  activerecord-7.0.5.1.gem
8601300ea7096602ff643389e20d75ca7438c4cd  activestorage-7.0.5.1.gem
7fe0ebedd292f8c72fcae18850ad1ed276c70e7e  activesupport-7.0.5.1.gem
b46971ce871d2526cc793d83ee99f030d8df92e5  rails-7.0.5.1.gem
6c5f3d51809c70b4160549a693a98b201565a6c1  railties-7.0.5.1.gem
```
