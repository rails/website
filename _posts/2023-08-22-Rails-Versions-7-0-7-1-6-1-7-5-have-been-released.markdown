---
layout: post
title: 'Rails Versions 7.0.7.1, 6.1.7.5 have been released!'
categories: releases
author: tenderlove
published: true
date: 2023-08-22 10:46:20 -07:00
---

Hi everyone!  Rails versions 7.0.7.1 and 6.1.7.5 have been released!  These are security releases, so please upgrade when you get a chance!
You can check out the CVE details [here](https://discuss.rubyonrails.org/t/cve-2023-38037-possible-file-disclosure-of-locally-encrypted-files/83544).
The releases only contain the security fix, so hopefully upgrading will be easy.

Thanks, and have a great day!

❤️

Here are the shasums for this release!

```
$ shasum *6.1.7.5*
f2b852b08be575d02d8b2fc3f486707a329c5974  actioncable-6.1.7.5.gem
38a1973278c4c383ab5768f477441ac7e7014078  actionmailbox-6.1.7.5.gem
e905d1f563e96766f57ff46b5410496d9dd16e3a  actionmailer-6.1.7.5.gem
a33f45d702732d519bc7456ba7e71cd7f10e8087  actionpack-6.1.7.5.gem
4c7b72884f775f2c2ccd9f25556bcd76c340b37b  actiontext-6.1.7.5.gem
7fa19a16c7e89005399690236d6820b4d5aa9f5a  actionview-6.1.7.5.gem
6bb0f0a0da916a68d212c91d840bd609ad0c91e0  activejob-6.1.7.5.gem
ff3ca6cbdbdd9d58c7ed0654dc2d865d7de75710  activemodel-6.1.7.5.gem
fbc8ef3f77e7687525a35555c25ee2438610bf33  activerecord-6.1.7.5.gem
e86998a6d77f3954be44cffa1afcacfa9a57b5d2  activestorage-6.1.7.5.gem
f2f5cdbc71f5278d03d80ff77f84c6a8b803e6b9  activesupport-6.1.7.5.gem
3237f9bf26f8fd6050e5d67e953c52d0d68eab26  rails-6.1.7.5.gem
c8d33b22c4435914b2d18b7bb3513c756fd78e35  railties-6.1.7.5.gem
```

```
$ shasum *7.0.7.1*
d6209e038e2714cc8c8c8952585ac64c39fd1ffa  actioncable-7.0.7.1.gem
3d62a2c9bcb898cf8090de7c0a8f6a2cbb233cf7  actionmailbox-7.0.7.1.gem
fa67c64dbc1abe220dec8b31791bc5f5f6be21b5  actionmailer-7.0.7.1.gem
23f7713b078bcf7544f69ef944294423d18341e9  actionpack-7.0.7.1.gem
f2dfe89f37a6aee99012ef4ec43d912900943752  actiontext-7.0.7.1.gem
b1393e2b58c247c78ea731cf629ea5ab413de154  actionview-7.0.7.1.gem
ae53785a326b586cbd31b571c73a7f066fa7e73b  activejob-7.0.7.1.gem
c73f45d42ac307fe5904ce6de3aa181934bc5746  activemodel-7.0.7.1.gem
b04b29b8239a3513af89a1b4b8eccc9c36ee86bf  activerecord-7.0.7.1.gem
ae088064dce2add3fd5c77248033e3169def0ffa  activestorage-7.0.7.1.gem
1320cde14e0b07f0523da03f1eb027ffed9cfe71  activesupport-7.0.7.1.gem
ef30abe8b97708b93687e1ac226bd8d21f082723  rails-7.0.7.1.gem
d7ae9ddec049f00734d58bf26929d402a952c17a  railties-7.0.7.1.gem
```
