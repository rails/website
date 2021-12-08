---
layout: post
title: 'Rails 6.0.1 released'
categories: releases
author: george
published: true
date: 2019-11-05 09:00:00 -08:00
---
Hi everyone,

I am happy to announce that Rails 6.0.1 has been released.

## CHANGES since 6.0.0

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.0.1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.0.1 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.0.1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.0.0...v6.0.1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.0.1:

```
$ shasum -a 256 *-6.0.1.gem
e905a3e13e62cca763bde6c7ada869db335aec5736c306855b55953b26ec7acc  actioncable-6.0.1.gem
9723a51f65261a46746ed1ebb1044884619daa8c016ac42e4a010d22a34d10f0  actionmailbox-6.0.1.gem
9912e82fa14a56b1cec70ab3a3a3a7051ba0bb35f41834d7b5cf4f996509f4ef  actionmailer-6.0.1.gem
e5b94c53514f56bdb9273145392611ba1e3483fbd4d6a4c3fa5b8dfe2bab0632  actionpack-6.0.1.gem
7ea35140009b63907daad9818e5ae08f84b7ce5f4674a3826ca1dd8544003a67  actiontext-6.0.1.gem
cac8225dcd12a047e13b9f78646c55350679587a59262ca982eb535f0584b16d  actionview-6.0.1.gem
0cabdae0c2839637d70a527b7d5640e7012904ffdd844dda87a6d97b0774ae6a  activejob-6.0.1.gem
c0e0e20886e0b5e695af57cbd7d52b9f46b4939e6227bd536eaadadbe115f091  activemodel-6.0.1.gem
d5cd3b3fb74ce292366b17fdb2e48dcd10a015f791eee1669231ae0633be016b  activerecord-6.0.1.gem
4300352bb8f108ea08d33071166b25cb4a4cbdb9996c7a9af5c43e4bd0b53d79  activestorage-6.0.1.gem
3af069dbd4b0181fbfb209453e7fc9321594e329c553472dfa7f80ef83d81da4  activesupport-6.0.1.gem
87c242b5dbac85026ef3fe1278a51bee6d81913fb631465c4bfee2e8e8759ec8  rails-6.0.1.gem
05d4ccdbd8dc4232ed779c85a15795ecc47df5fca017f6dd483d10f2a14040f7  railties-6.0.1.gem
```

As always, huge thanks to the many contributors who helped with this release.
