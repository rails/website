---
layout: post
title: Rails 3.2.21, 4.0.12, and 4.1.8 have been released
categories: releases
author: tenderlove
published: true
date: 2014-11-17 07:44:42 -08:00
---
Hello everyone!!! It's that time again.

I would like to announce that Rails 3.2.21, 4.0.12, and 4.1.8 have been released.  These releases contain a security fix where the existence of arbitrary files on the file system can be leaked, but the contents of the file **will not** be leaked.  The issue generally only impacts people who are using Rails to serve static assets, and will generally not impact people who use a proxy to serve static assets.  This issue is similar to CVE-2014-7818, but is slightly different.  You can read more about the issue [here (CVE-2014-7829)](https://groups.google.com/forum/#!topic/rubyonrails-security/rMTQy4oRCGk).

For ease of upgrading, the only changes in these releases are the security fixes.

Here are the checksums for the gems:

```
[aaron@TC release]$ shasum *3.2.21*
5f59bb7e463fa3a443593bdd650a258b34ae8db6  actionmailer-3.2.21.gem
1f7ffef317f7808aa3f6b3f63f292c136a827b7c  actionpack-3.2.21.gem
aaf186bc935b66e52e43a5e5c8b0af37b0444ccc  activemodel-3.2.21.gem
9e5645ea4536238a3fec7f04e6f74a22db9057ec  activerecord-3.2.21.gem
fe64a4b4d5a0680ce2b05e4fb75d325454671c5f  activeresource-3.2.21.gem
0a503dfc64a73980b18d799f9b80f02b3b1645b7  activesupport-3.2.21.gem
b757a3161412742fd9f0323ff7ab6b31212e115c  rails-3.2.21.gem
9cb5de52049319e1c837be75deaab0eba3695e42  railties-3.2.21.gem
[aaron@TC release]$ shasum *4.0.12*
c62e361241fd26a7e31ed3a9c87489bc5a86b12f  actionmailer-4.0.12.gem
f63c9d0e7a637c114b96cd864c12641e09eed373  actionpack-4.0.12.gem
2e9a64d08b9bcef0953132f1b9d4f295dfa167a4  activemodel-4.0.12.gem
d3e59b3c9a0c5fc9045783905f53e49d4d6bc1ba  activerecord-4.0.12.gem
6bf2468d9466b019d2ffaf21e44cb7a4d4ed8dde  activesupport-4.0.12.gem
d759db3bb1420c02c97852358e425b4a168198ff  rails-4.0.12.gem
729345b543653507dfea3d2e158a870d49260548  railties-4.0.12.gem
[aaron@TC release]$ shasum *4.1.8*
db4fc0a8ac77332b96947480db7ff529c18ead44  actionmailer-4.1.8.gem
24cd5ff7bcc78a2d4997ebe6bc962f09e394f59e  actionpack-4.1.8.gem
0c22174fbe03bf461aad27bf8ddebf7ae93988fa  actionview-4.1.8.gem
2b2b98b8dfd96012b443a2ddf3cbf4267c378c4d  activemodel-4.1.8.gem
f263ff5ee5a4436184390aaf825d5072c71afc4e  activerecord-4.1.8.gem
c25e858743372f197ecfdbbbc5b1dbd71934947a  activesupport-4.1.8.gem
4b96a78c669b7122f9ad905ee8f36772ac1bd8d9  rails-4.1.8.gem
cbae764aa4a635f37c7bb52c84028dc032e1afea  railties-4.1.8.gem
[aaron@TC release]$
```

Happy RubyConf and have a great day!!! <3

