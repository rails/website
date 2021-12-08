---
layout: post
title: 'Rails 6.0.2.1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2019-12-18 16:25:51 -03:00
---
Hi everyone,

I am happy to announce that Rails 6.0.2.1 has been released. This is a complementary release to
rack in order to address [CVE-2019-16782](https://www.openwall.com/lists/oss-security/2019/12/18/2).


## CHANGES since 6.0.2

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.0.2.1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.0.2.1 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.0.2.1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.0.2...v6.0.2.1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.0.2.1:

```
$ shasum -a 256 *-6.0.2.1.gem
3eedea1285b08d40762a14a122dc5a9c1d6226526f8380dc4ac0d0f4ef086dbe  actioncable-6.0.2.1.gem
6132861d7706cefed207817d6a097e3e991e5656bdefd5b2c927e88465b957f7  actionmailbox-6.0.2.1.gem
13e6eb571bc3764859982d5b3f19f43c88969e99cf5fa4b42696d962b85d2d84  actionmailer-6.0.2.1.gem
df65fc4db1eb21dad71a0c73b9acf21373644580787e2eecd68fb6244af95ebd  actionpack-6.0.2.1.gem
7857e4f1242ca2064d0b24154fb1d2d05537e24ec78b31ccd51eab7549459c09  actiontext-6.0.2.1.gem
ccc69763b6d02069a2c5fef62a08d247620e0f9213ce3eaaa79118384141230c  actionview-6.0.2.1.gem
11dc8701c7d5b80572786e928e264f42cb1ab75b07957955f41d4d367074b0cd  activejob-6.0.2.1.gem
6d138b1e3e5f009b5fa9a0587f65f25ff58ef42e6a95a3f720fc53caa2aaf84b  activemodel-6.0.2.1.gem
083928e6fda8b886f24c198d37a6e9e0a077c1bf178ae76668a973175b6b578b  activerecord-6.0.2.1.gem
e88e5ae590df2fcf7fe3cf4bdd1822dc95841dd1c10fcb5fe26cb66799ce235a  activestorage-6.0.2.1.gem
817e19e0ce4bc8c6afc63ed064ea84d0e3c8a2ee3d8fb1bb86ab39670c7ca6b5  activesupport-6.0.2.1.gem
32a07bc27a22c80752847936aa52497c5d97de9c577b1120a2e897dda77f93b0  rails-6.0.2.1.gem
8f6b9622975fc0f4807770b0633c9998c54ff59a98045a78f6fab110d87bcd66  railties-6.0.2.1.gem
```

As always, huge thanks to the many contributors who helped with this release.

