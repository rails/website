---
layout: post
title: 'Rails 5.2.4.1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2019-12-18 16:26:01 -03:00
---
Hi everyone,

I am happy to announce that Rails 5.2.4.1 has been released. This is a complementary release to
rack in order to address [CVE-2019-16782](https://www.openwall.com/lists/oss-security/2019/12/18/2).


## CHANGES since 5.2.4

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/actioncable/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.2.4.1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[5.2.4.1 CHANGELOG](https://github.com/rails/rails/releases/tag/v5.2.4.1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.2.4...v5.2.4.1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.2.4.1:

```
$ shasum -a 256 *-5.2.4.1.gem
95531ad4731ff341e0df4bff722bc28cf534ca9ed9e00d8a4949474225abe5fb  actioncable-5.2.4.1.gem
aad99ddae83c22162ba580fc0efe10611bb407832605c21e3ff540ef071e7cb5  actionmailer-5.2.4.1.gem
5f9cfff904e6d8ed5bd9439a76639e22393308a295c13d663a4622e085a9b738  actionpack-5.2.4.1.gem
327e504aea3cfd7484c9ec059b7e58faad96be65379a2da959ee336444f7d342  actionview-5.2.4.1.gem
2141876d50219726ea17b9d8aa8604e6a8fc555fb6230d7987a422e6981b924c  activejob-5.2.4.1.gem
a1df0522b937364f1ff7f748457644de1863dfba4b4bf01386fd8270bef7e169  activemodel-5.2.4.1.gem
2fdbe670205b040f0de64198bdbb4093857a32a409e37ba9ade08c20af6965dc  activerecord-5.2.4.1.gem
ee841d3c038cc45f393bc384be8afc8f4629587411f3eb6b396821b4429aa835  activestorage-5.2.4.1.gem
57874366b06882ad0c0a0557640851aef13afec19bd4d6c2ee286c9d4eb7b452  activesupport-5.2.4.1.gem
402c80f8533052bb9f62e9c61aad9a559b96c04961ddda93151852b8f8572885  rails-5.2.4.1.gem
0b6b0ec65aedae1f3627b05091d63a55bfabd214f483389a9096332dbdc71ac7  railties-5.2.4.1.gem
```

As always, huge thanks to the many contributors who helped with this release.

