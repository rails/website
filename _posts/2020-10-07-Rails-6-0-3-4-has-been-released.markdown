---
layout: post
title: 'Rails 6.0.3.4 has been released'
categories: releases
author: tenderlove
published: true
date: 2020-10-07 09:57:37 -07:00
---

Hey everyone!  Rails version 6.0.3.4 has been released!  This version is a
security release and addresses one possible XSS attack vector in Actionable
Exceptions.

You can read more about the issue [here](https://discuss.rubyonrails.org/t/cve-2020-8264-possible-xss-vulnerability-in-action-pack-in-development-mode/76368).

Here are the checksums for the gems:

```
$ shasum *6.0.3.4*
04ec20fe5d23d9e21ed2dd04139563e4173f6c1b  actioncable-6.0.3.4.gem
c96926a293abcb63a9471e9064824160b7348683  actionmailbox-6.0.3.4.gem
e2a0221f78f260b93ac57c1d40f2c0cabe82b1c9  actionmailer-6.0.3.4.gem
83a4fc7ebb7e7b41795149e1d1879e2bce4540f2  actionpack-6.0.3.4.gem
b080d368861b406b2b78ae46f905476d66b8ba4b  actiontext-6.0.3.4.gem
27ecb9befa64104c7b27bc547f4f58de4ba25d9c  actionview-6.0.3.4.gem
5405baf9298cc3af01a5160ebed4ebb79eec0a69  activejob-6.0.3.4.gem
777cf1db073a988d47e1669f494801065560772d  activemodel-6.0.3.4.gem
1f8b15b082531461d7fa029e238b4a53034ddb5c  activerecord-6.0.3.4.gem
07d31d2e1c690384aa6e196c9e844f953551918b  activestorage-6.0.3.4.gem
0c145c62c94dae5c36641d0abcd0026ff40cba95  activesupport-6.0.3.4.gem
a1503f158074aae4dce10d9c1ef6110a3cb61657  rails-6.0.3.4.gem
6066d3a3975184aa566c803aa6c573086f0b296e  railties-6.0.3.4.gem
```

Have a great day!

<3
