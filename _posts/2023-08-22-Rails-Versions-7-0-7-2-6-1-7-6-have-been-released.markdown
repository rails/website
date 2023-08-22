---
layout: post
title: 'Rails Versions 7.0.7.2, 6.1.7.6 have been released!'
categories: releases
author: tenderlove
published: true
date: 2023-08-22 13:18:20 -07:00
---

Hi everyone!  While I was testing the workaround for the most recent [security release](https://rubyonrails.org/2023/8/22/Rails-Versions-7-0-7-1-6-1-7-5-have-been-released), I set my `umask` to 0077 and forgot to set it back before packaging the release.
This caused some of the files in the gem file to be readable only by the current user rather than world readable.
I've shipped new versions 7.0.7.2, and 6.1.7.6, which are identical to 7.0.7.1 and 6.1.7.5, but with corrected file permissions.
I'm really sorry about the mixup.

🤦🏻‍♀️🙇🏻‍♀️

Here are the shasums for this corrected release!

```
$ shasum *6.1.7.6*
9035697b11c3550b52943aac608f8fa2a38f0f67  actioncable-6.1.7.6.gem
2a47970f6f2f45df4e59e8926b665565258775bb  actionmailbox-6.1.7.6.gem
4264ffa98c938ed0ba2ab2daa69e5eadb2b4458d  actionmailer-6.1.7.6.gem
d08f8f51c937cd6de17e1dbf094e15c89cd19184  actionpack-6.1.7.6.gem
a149ec0691aae8efc5ac3de4911e15e3e1d3544f  actiontext-6.1.7.6.gem
2c4a199734f07d8adbf561ecda19228a7c834c64  actionview-6.1.7.6.gem
11f4b4d23137c0aed9f941f6d92623b7ad10fc87  activejob-6.1.7.6.gem
5cd71398e2ac3c142a12823e5fcb295b376bbcb2  activemodel-6.1.7.6.gem
eead0975733b1d7c3c70cf56054733777f2aa798  activerecord-6.1.7.6.gem
2ebe8d60530d945f7931173ef162abc17d53cceb  activestorage-6.1.7.6.gem
b3e73981d447f11473b8ef29cc6e819432f44bf2  activesupport-6.1.7.6.gem
fcd2ee754e0f3511aef8d4aedbfd200bea5ac631  rails-6.1.7.6.gem
4e55d9b2255df5b3ce7d20519c0ec657f829143d  railties-6.1.7.6.gem
```

```
$ shasum *7.0.7.2*
50dd1b7b9ab335605fe18f55fcc6349a34a5ddca  actioncable-7.0.7.2.gem
ba8bb10260bf6d3e661726f515efc95d55c6ec6d  actionmailbox-7.0.7.2.gem
df32d5b9c89bd9a895f126d4cbb8942685109b99  actionmailer-7.0.7.2.gem
faa3b09d8383965b510c2858e2da777e1b8fd02d  actionpack-7.0.7.2.gem
f721ec31ed1122a88698c0cf43daa5f1e1e75edf  actiontext-7.0.7.2.gem
36be4d9032ca78f09ccbd592ae48013a4fb9ee47  actionview-7.0.7.2.gem
bcec850a6487fde22abfe8d5b4fea370884c075e  activejob-7.0.7.2.gem
a0529f1145f47ce38129d95d061670febadb6d41  activemodel-7.0.7.2.gem
637859d1c2e9d6e069c682cb3dcb619f46e6ce0f  activerecord-7.0.7.2.gem
991ab857802174b7dfbd63a75a2a5f7b0d8e6f4a  activestorage-7.0.7.2.gem
0a0bf5b6b7e9a210829164bdd8924c91ea778210  activesupport-7.0.7.2.gem
fa4ac4c5bd0f7d0b50b96c5518c6c4aae9e560db  rails-7.0.7.2.gem
c4a8234b4e25a576eca9fda5bb05bfcf0ea7cd01  railties-7.0.7.2.gem
```
