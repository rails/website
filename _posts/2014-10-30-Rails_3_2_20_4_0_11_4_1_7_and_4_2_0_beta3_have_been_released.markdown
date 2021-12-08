---
layout: post
title: Rails 3.2.20, 4.0.11, 4.1.7, and 4.2.0.beta3 have been released
categories: releases
author: tenderlove
published: true
date: 2014-10-30 11:16:55 -07:00
---

Hello everyone!!! It's that time again.

I would like to announce that Rails 3.2.20, 4.0.11, 4.1.7, and 4.2.0.beta3 have been released.  These releases contain a security fix where the existence of arbitrary files on the file system can be leaked, but the contents of the file **will not** be leaked.  The issue generally only impacts people who are using Rails to serve static assets, and will generally not impact people who use a proxy to serve static assets.  You can read more about the issue [here (CVE-2014-7818)](https://groups.google.com/forum/#!topic/rubyonrails-security/dCp7duBiQgo).  A release of sprockets has also been made to help with this issue.  You can read about it [here (CVE-2014-7819)](https://groups.google.com/forum/#!topic/rubyonrails-security/doAVp0YaTqY).

For ease of upgrading, the only changes in these releases are the security fixes.

Here are the checksums for the gems:

```
[aaron@TC release]$ shasum *3.2.20*
b14ca1ad923e035ab2a7785e657c5653447c3149  actionmailer-3.2.20.gem
d6fea767996a954e4bc95fd0ca101ec912fcb093  actionpack-3.2.20.gem
97f5bb424aee73fbbd319baab3fd35c3f5eeb5f4  activemodel-3.2.20.gem
32d76836675a4c88685c3904271b16d9d2338ce9  activerecord-3.2.20.gem
640d83a96accc24e6afcae3cc5b253e5d355983f  activeresource-3.2.20.gem
d1d0a19a589c62278e7d9ac4275d5f8d75df20b3  activesupport-3.2.20.gem
f8b4d3c56d89760c02b37d4c67efd31dedd4df80  rails-3.2.20.gem
41c272d53dd748407210a2270ad17bc7c9f30594  railties-3.2.20.gem
[aaron@TC release]$ shasum *4.0.11*
9718b62f4428a7e4bbf66df4ac57dd82d197905a  actionmailer-4.0.11.gem
f1aec3d29e781e3beb685852db00ecf495150077  actionpack-4.0.11.gem
2ba4ceeff0a76df850d6294e2e1da703f3f6e7cb  activemodel-4.0.11.gem
714dca99a452adfec76b507241896ffd7978a254  activerecord-4.0.11.gem
2791791c5c1eeefb3eee76712656bf674a20867d  activesupport-4.0.11.gem
56bb306d4f0309dcf3a804a97104a3ee26b64b94  rails-4.0.11.gem
243e265c879db8876cce8688374cb7f9bb752d7d  railties-4.0.11.gem
[aaron@TC release]$ shasum *4.1.7*
4e4ce2530ff8773af784340e17e925b3b2c8cb20  actionmailer-4.1.7.gem
81628e433ca4335409677a33cfe9b56627f6ae1a  actionpack-4.1.7.gem
7dc2626f5bc85379c55e49a712f5c0e060340ca8  actionview-4.1.7.gem
83c8be73d22973c843d43a988b27a449d2ca8a9d  activemodel-4.1.7.gem
001156373c248a20c69bcf1451d6f7166dac3ddb  activerecord-4.1.7.gem
217f25a911f8e89cd2834849232555cbc47ca850  activesupport-4.1.7.gem
a1d9bb181d718e7f6cf380136425444e627c2345  rails-4.1.7.gem
1b9c8d08afc8fa77786fef13c54d4e6985cdc6d6  railties-4.1.7.gem
[aaron@TC release]$ shasum *4.2.0*
e5d608e8ce32abdd73c73c91fd34cb8f7075a251  actionmailer-4.2.0.beta3.gem
2e2034c285943777ad325c35292e202a46b937c2  actionpack-4.2.0.beta3.gem
a008833cd1045c926fb6f36ee03e3d34499a0aa9  actionview-4.2.0.beta3.gem
02f4438363419c59b33d85b2dda4d4cf741a6098  activejob-4.2.0.beta3.gem
c8a7dc2134c885ad3b23d4c36be95abc1ec1b769  activemodel-4.2.0.beta3.gem
192e33ab3b9d54954ff834ce6ee7f67a9197cb36  activerecord-4.2.0.beta3.gem
00437ab52df0ed0dd9afe571d083c92c3cdbe361  activesupport-4.2.0.beta3.gem
ca81d6ac9fdd658775d32a6dbfe248ee13f5c87b  rails-4.2.0.beta3.gem
cc302e363248e4bc2d245201f922c576f9fe6f15  railties-4.2.0.beta3.gem
```

Have a great day!!! <3

