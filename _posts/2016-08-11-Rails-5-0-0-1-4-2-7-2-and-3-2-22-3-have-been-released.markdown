---
layout: post
title: 'Rails 5.0.0.1, 4.2.7.1, and 3.2.22.3 have been released!'
categories:
author: tenderlove
published: true
date: 2016-08-11 10:21:41 -07:00
---
Hi everyone!

Rails 5.0.0.1, 4.2.7.1, and 3.2.22.3 have been released!
These release contain important security fixes, so please upgrade when you can.

Versions 5.0.0.1, 4.2.7.1, and 3.2.22.3 contain a fix for [CVE-2016-6316](https://groups.google.com/forum/#!topic/ruby-security-ann/8B2iV2tPRSE) which you can read about [here](https://groups.google.com/forum/#!topic/ruby-security-ann/8B2iV2tPRSE).
Version 4.2.7.1 also contains [CVE-2016-6317](https://groups.google.com/forum/#!topic/ruby-security-ann/WccgKSKiPZA) which you can read about [here](https://groups.google.com/forum/#!topic/ruby-security-ann/WccgKSKiPZA).

To ease upgrading, these releases contain only security fixes.

Here are checksums for the gems:

### Rails 3.2.22.3

```
[aaron@TC release]$ shasum *3.2*
6ba79586fa0c60de8e13d0e2bdd9508ae03e0222  actionmailer-3.2.22.3.gem
aa26322bef392b2911d94d4d7390b7c20d2ac8c6  actionpack-3.2.22.3.gem
8a5c3cf72592d670b23e2ccfa22d13929dbbed6e  activemodel-3.2.22.3.gem
2354c885903252bc8acd6cd03c13f0b8f3f4d9a4  activerecord-3.2.22.3.gem
824b2a7eb4b65fd70051006645400ad16aeb095e  activeresource-3.2.22.3.gem
3d026ae2c0aa9807510d033abee424ada82782bf  activesupport-3.2.22.3.gem
9d40b008c664fb234158f8e68c589dc410520c96  rails-3.2.22.3.gem
26e6d7cb9b6fdb160486e8b850ca31fff250b69f  railties-3.2.22.3.gem
```

### Rails 4.2.7.1

```
[aaron@TC release]$ shasum *4.2*
00a9b8ed92e96abf11aead750f98558a0bc136a7  actionmailer-4.2.7.1.gem
b7c08b66da4532acc84d099733a8148bbbdbb108  actionpack-4.2.7.1.gem
1e843b678e08b503f1521fcbf159f166141221b9  actionview-4.2.7.1.gem
93acc93ae1098ef0c5ac6798ca700422b484114c  activejob-4.2.7.1.gem
b0a0008a67d8995da0c25e610c659ff69c031c0d  activemodel-4.2.7.1.gem
07537cb059779e92615a34b205f3b1e8a722d78b  activerecord-4.2.7.1.gem
33b1220c3739453b872cdc1eda193841c0a14033  activesupport-4.2.7.1.gem
d39f1fc8c7d86ada1c7243bd713b03ec09889b8b  rails-4.2.7.1.gem
5f39ebc0f270d95df72ef38311362cf2d0aaaa87  railties-4.2.7.1.gem
```

### Rails 5.0.0.1

```
[aaron@TC release]$ shasum *5.0*
721f9e6079d184b58b225a88b28c8aeca6b3f388  actioncable-5.0.0.1.gem
1dfd080bd3e780816fb0d4b25a8d5cf111e78784  actionmailer-5.0.0.1.gem
b557b5c3b94b63356de93c985bf70be8df7619f3  actionpack-5.0.0.1.gem
d58cf5cb5b4dc4e0cc33eea9c3d9c4426363922a  actionview-5.0.0.1.gem
9f1038a26bac62c97189f664c53729bf74abee24  activejob-5.0.0.1.gem
b09333355633f7674f04e098e6766c0fe3ac966b  activemodel-5.0.0.1.gem
4ca136b557265b4ee307c8f936180680cc0fcde0  activerecord-5.0.0.1.gem
297d6b1bb741226a1aec4081cbdfa61ce27d8e8b  activesupport-5.0.0.1.gem
24b7f00cbd411784be774dc526e5398a9c438a3d  rails-5.0.0.1.gem
a46d76ae93a8c740a63ef245af3bbe75e491e4f0  railties-5.0.0.1.gem
```
