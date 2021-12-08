---
layout: post
title: 'Rails 5.2.4.3 and 6.0.3.1 have been released'
categories: releases
author: tenderlove
published: true
date: 2020-05-18 09:00:57 -07:00
---
Hi everyone!  Rails 5.2.4.3 and 6.0.3.1 have been released!  These releases
contain important security fixes, so please upgrade when you can.

Both releases contain the following fixes:

* [[CVE-2020-8162] Circumvention of file size limits in ActiveStorage](https://groups.google.com/forum/#!topic/rubyonrails-security/PjU3946mreQ)
* [[CVE-2020-8164] Possible Strong Parameters Bypass in ActionPack](https://groups.google.com/forum/#!topic/rubyonrails-security/f6ioe4sdpbY)
* [[CVE-2020-8165] Potentially unintended unmarshalling of user-provided objects in MemCacheStore and RedisCacheStore](https://groups.google.com/forum/#!topic/rubyonrails-security/bv6fW4S0Y1c)
* [[CVE-2020-8166] Ability to forge per-form CSRF tokens given a global CSRF token](https://groups.google.com/forum/#!topic/rubyonrails-security/NOjKiGeXUgw)
* [[CVE-2020-8167] CSRF Vulnerability in rails-ujs](https://groups.google.com/forum/#!topic/rubyonrails-security/x9DixQDG9a0)

Here are the checksums for 5.2.4.3:

```
57936c04e421d5626dae6384645d2c04c50fade9  actioncable-5.2.4.3.gem
b9574346692494c816ba90c6c9f882e7535d3d6e  actionmailer-5.2.4.3.gem
d9abd6496bb593bcd6ded01eb2970d6c68591913  actionpack-5.2.4.3.gem
94b6025625aaf8a58271f29a8fcf2ab731bb2ba5  actionview-5.2.4.3.gem
261537dfe4b9becacadb97b5a4b1745a1a2ad88e  activejob-5.2.4.3.gem
3152765c56701234d56505be6f9f335686335d42  activemodel-5.2.4.3.gem
2db5dfbeb0860c4287fe1f6f7f4d180213c95393  activerecord-5.2.4.3.gem
80d1942082dfac378fa2446c4d9b90b59a209b16  activestorage-5.2.4.3.gem
1bfd68dcae101feb5a6414f3d449de07f179366b  activesupport-5.2.4.3.gem
27a4883d96f4bdfb67f89194e55f72c80ded8bcb  rails-5.2.4.3.gem
0ca72c6ab581f088394096f28290cb3fcc5abed6  railties-5.2.4.3.gem
```

Here are the checksums for 6.0.3.1:

```
7a791c75121a2d291c940c42dee32bab6f79b28d  actioncable-6.0.3.1.gem
8ab6c70bb51c65365f0ecf45bc313a92538bdc51  actionmailbox-6.0.3.1.gem
32abbd8b860e0eb4dc6ddc7eb91229f138f41be5  actionmailer-6.0.3.1.gem
b4e2f362f9e3f64c463f13a355c91eac4faf5c3c  actionpack-6.0.3.1.gem
d2830250080c6ddfce32d7eed3b5e06868593679  actiontext-6.0.3.1.gem
d6fd791dd17410eedc792a83114bd2226d809081  actionview-6.0.3.1.gem
d93fa09175cd3a4260aaa04576405caeaea5c722  activejob-6.0.3.1.gem
751083db939d5b00ee66e383688365f06221b9a5  activemodel-6.0.3.1.gem
799344ebdf08a45c56ace16e3f124d4e2a0ecc46  activerecord-6.0.3.1.gem
5066a273cc46d7a71e69f34c6d17b1f0eeac74ef  activestorage-6.0.3.1.gem
637121aaab5d88902f686d64e86fd4b4967b2031  activesupport-6.0.3.1.gem
faebc6a2d71d81b8fdababff057b91bea2bba47e  rails-6.0.3.1.gem
5dacf3de55b1c1aa6f9f31b346e963a3745a15d2  railties-6.0.3.1.gem
```

Stay safe, and have a great day everyone!
