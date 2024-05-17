---
layout: post
title: 'Rails Versions 7.0.8.2, and 7.1.3.3 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2024-05-17 13:30:42 -04:00
---

Hi folks,

Rails versions 7.0.8.2, and 7.1.3.3 have been released!

These are security releases, so please upgrade at your earliest convenience.

Here is a list of security issues that these releases address:

* [CVE-2024-34341 XSS Vulnerabilities in Trix Editor](https://discuss.rubyonrails.org/t/xss-vulnerabilities-in-trix-editor/85803)

Here are the shasums for the released gems:

```
$ shasum *7.0.8.2*
c6c9318305c1cf4b86d3b78f8444806a414ef888  actioncable-7.0.8.2.gem
398650050120f28176eced97f31a99218df00f9d  actionmailbox-7.0.8.2.gem
d95a8da4dc79ce7e84721342dc18a40f7db72155  actionmailer-7.0.8.2.gem
f614e0921f3fead1183e51a26ffc373efbe4458c  actionpack-7.0.8.2.gem
d71bd159b1b8d75aae7aaa9cee37ec087bc6daa7  actiontext-7.0.8.2.gem
675e07e28e03b5c5e40406537b61caa17cbceeb8  actionview-7.0.8.2.gem
bb660c1bbc22851a8b947a6b38eab781c998bc4a  activejob-7.0.8.2.gem
44cc153bbfad4d3ddda4e07cc2e813ef8e08115a  activemodel-7.0.8.2.gem
2f7f0df9e1c5966e9337529d2b308cd9783bf26c  activerecord-7.0.8.2.gem
0ea1f55731f4bbdbdb6515d551d604c3ec670abc  activestorage-7.0.8.2.gem
7f79ce8b5f0f2b67957dceecc0827ce6c540e567  activesupport-7.0.8.2.gem
5631c7597032b8e806ab4ccc7458bff2a18b00a1  rails-7.0.8.2.gem
d794ea9bf58f97f2861b27d6a40dbb20d9bde008  railties-7.0.8.2.gem

$ shasum *7.1.3.3*
d34509dd6b3318d90b65fea852b55e3a3f4cf80f  actioncable-7.1.3.3.gem
61c2f6c417f5597c5c3fba51c7d65c5d7fa3ccc2  actionmailbox-7.1.3.3.gem
4bbba35e11e50a6604a5bb9a47e6514b4175af93  actionmailer-7.1.3.3.gem
2f64ff54f0b03097e0b01ca42e35b72cf9681d0b  actionpack-7.1.3.3.gem
71c10c94b605ff0882c381ee602d6024db69fbf0  actiontext-7.1.3.3.gem
58996b9a3c39595f4a834e4acdec49e9ce7c06e4  actionview-7.1.3.3.gem
0f8250870dd5817b50120b9f22b1519ebea84331  activejob-7.1.3.3.gem
095e38860d76f929dc364581b38ee956845c3bb8  activemodel-7.1.3.3.gem
39bc33101fae796df920399a8f1b48fb1581a915  activerecord-7.1.3.3.gem
fe1071221f1712b5c3484c073691384e9a0ecb4d  activestorage-7.1.3.3.gem
b1c720360a9df809ea39e6891ca6843d466ea860  activesupport-7.1.3.3.gem
bdc9e420cbba5594585f43468919750f31ae78c2  rails-7.1.3.3.gem
e10939f9e513c0467478f989d0adde8d112075a6  railties-7.1.3.3.gem
```

Have a good day!
