---
layout: post
title: 'Rails 6.1.2 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2021-02-09 22:42:21 +00:00
---
Hi everyone,

I am happy to announce that Rails 6.1.2 has been released.

## CHANGES since 6.1.1

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.1.2/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.1.2 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.1.2)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.1.1...v6.1.2).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.1.2:

```
$ shasum -a 256 *-6.1.2.gem
fd12348ec00f26b2f247e23cbe73804755c90236d9aebcbc136fc149ebee0901  actioncable-6.1.2.gem
3fd0400d1277c711e085162c5a35caa15dd98f84fefc4a0773dc336a1fef65e0  actionmailbox-6.1.2.gem
98118a814826715a9f88cc0ff07a517a229d21ce08e53ed5024e0af889292689  actionmailer-6.1.2.gem
16d09ebb77253a30abe7eb4fd554d17706418f639c61da9a14903ddbf72976ae  actionpack-6.1.2.gem
0b7dc18051a91b995298971e3871a8e20be088a2a2831e484bacfeeebcf6cb77  actiontext-6.1.2.gem
7c72aeae52d42ce3757a5ae4ef68b0e8ece09ce26baea071ed4fa80cae1a0406  actionview-6.1.2.gem
f297e27c0c2d5363e7b574806939944e3656a34eb32b5b43a28a059e9c4a6ca3  activejob-6.1.2.gem
58fd5b3b68ca2a54c6ba7801936e9cb6b1ce50c6154f894dbaf6275cb8778c4b  activemodel-6.1.2.gem
8e8fdeb864b02a7a360d78bc97f5064a53bcacbc812c8ae4e9ea5cf6d1e28f1e  activerecord-6.1.2.gem
fd19ac42caf2a8a654027eb510092cdf8d43384e352dc397246aac9bccf62469  activestorage-6.1.2.gem
098f2cc82f7232364ad9493155d3a34f44baecb5b51ce6646a015396a6d525a8  activesupport-6.1.2.gem
e62c90c4a62f0d177161e0df05d7ba417010858fa418affdb2d93981e407a04e  rails-6.1.2.gem
753527d97b2f68db999417a30d274b62317e082a7f96f88e7e1b10c846ad6d21  railties-6.1.2.gem
```

As always, huge thanks to the many contributors who helped with this release.
