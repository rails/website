---
layout: post
title: 'Rails 7.1.3 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2024-01-16 18:30:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 7.1.3 has been released.


## CHANGES since 7.1.2

To see a summary of changes, please read the release on GitHub:

[7.1.3 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.1.3)

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.1.3/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.1.2...v7.1.3).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.1.3:

```
$ shasum -a 256 *-7.1.3.gem
0f736f24e1a225682784f175dd51da1b251721cdd0510fba78a66e87fa175314  actioncable-7.1.3.gem
fcaf583b2d66f5d979b5776deaa1a455101567b93e89be3276c05c519a0f7720  actionmailbox-7.1.3.gem
df9e9d791c62a8aafac219f017fe87c70bc72cee027e3c1fb33a06f077f8498c  actionmailer-7.1.3.gem
e3e9d13ba1f4d37f64a6fac186f2c3c8c0af5883ec44fbe234796af5a8710ebd  actionpack-7.1.3.gem
bfeb73715785a900e383699b7312371975e3a66a1a0e2d3c4cf06f87a5713ad1  actiontext-7.1.3.gem
5b6b37261da58b10a53a68a547412525460ca68d8336ce1320107cda26a7b0d1  actionview-7.1.3.gem
017adc92725f4e5003082ba84cdb5eb55235571775e6e41da6354060517a562e  activejob-7.1.3.gem
edd9da96450783a100dfa8ce7ed3baa21c8d58197359216cb1843d8e9e90fc24  activemodel-7.1.3.gem
e04e43a4823aff7605cef559afd1acc0b69d138453cc9e5a313c647f6c977551  activerecord-7.1.3.gem
1db37dd877d038173f1eea5e01697bab42cb08adbe0574239641172f7ce949d9  activestorage-7.1.3.gem
fbfc137f1ab0e3909bd3de3e2a965245abf0381a2a7e283fa766cee6f5e0f927  activesupport-7.1.3.gem
4eed257c42f22e2590d1e5c0720b7982aea727cfd5e621c080fb613cbde4238c  rails-7.1.3.gem
7a1dc59c93296f239a9d97b5a9c52c49fd8f7dcdac33ebe4cf39842ff92b50a6  railties-7.1.3.gem
```

As always, huge thanks to the many contributors who helped with this release.
