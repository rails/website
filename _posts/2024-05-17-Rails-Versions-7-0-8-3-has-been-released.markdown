---
layout: post
title: 'Rails Versions 7.0.8.3 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2024-05-17 16:00:00 -04:00
---

Hi folks,

Rails versions 7.0.8.3 has been released!

These is a security release, and substitute the 7.0.8.2 that was previously released by has a bug with Trix CSS.

Here is a list of security issues that these releases address:

* [CVE-2024-34341 XSS Vulnerabilities in Trix Editor](https://discuss.rubyonrails.org/t/xss-vulnerabilities-in-trix-editor/85803)

Here are the shasums for the released gems:

```
$ shasum *7.0.8.3*
fc6c722547a6c42d62a1b728db60f28f97da44f1  actioncable-7.0.8.3.gem
7abdf2c73233bf909eedf7ba56aa910b6d877c87  actionmailbox-7.0.8.3.gem
58315b74710473a62aca408b7e54e2ce6d1242f6  actionmailer-7.0.8.3.gem
27430a6d013397e7e7202c05b8d3e98c574596c5  actionpack-7.0.8.3.gem
2798ab84e24a77fd7f9cd595411a9be35a35af79  actiontext-7.0.8.3.gem
76bf89bf6c6ce8ffc1aa6278d28cdeebcd9aaa8e  actionview-7.0.8.3.gem
e67983e7616f26e74e87b0bac5c01eb497cea30b  activejob-7.0.8.3.gem
e7a2a0f6bb9cebafb97bf08d6203733e5a01abc9  activemodel-7.0.8.3.gem
30c1a6898cf9d651058c3ff1761f7e8c92a21407  activerecord-7.0.8.3.gem
a8642b5bb90c124cbf1bd0c5797d57270b7c1a19  activestorage-7.0.8.3.gem
0ac0dfde07db38ad1e669c97cb3a0c4b7e24524a  activesupport-7.0.8.3.gem
65ef7f5cade6848e777087256bd03e4c7e57ac13  rails-7.0.8.3.gem
b4727d188065cd83fa3686e2985ca8ff1d74e62b  railties-7.0.8.3.gem
```

Have a good day!
