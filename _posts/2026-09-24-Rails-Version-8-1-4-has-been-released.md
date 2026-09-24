---
layout: post
title: 'Rails Version 8.1.4 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2026-09-24 10:00:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 8.1.4 has been released.


## CHANGES since 8.1.3

To see a summary of changes, please read the release on GitHub:

[8.1.4 CHANGELOG](https://github.com/rails/rails/releases/tag/v8.1.4)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v8.1.4/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v8.1.3...v8.1.4).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 8.1.4:

```
$ shasum -a 256 *-8.1.4.gem
cfcd72f8c861e01ccdc96d772ad8c5ad6ed0ea7c571aef81a794b6027eaa7f11  actioncable-8.1.4.gem
9c4525e577ebb671ce558f3ea78b8a634f64e56a0e6e8d105b28b873793a06eb  actionmailbox-8.1.4.gem
f82d95d6762ae46ea38f221d3363639266af4f8e56d50e2bd367558674baf093  actionmailer-8.1.4.gem
245493cc51be195a7645e6fc184880fa7e5b32ff1a08e053ee31f58c76e30ea4  actionpack-8.1.4.gem
33ee99bea7da6af911fc7d98b17013a8e1ec62aa01b20b20e9a5366f40dbf644  actiontext-8.1.4.gem
eff1efd07c4d969abad288322b423bcb67fdbab5e324c91ca37352b80f226076  actionview-8.1.4.gem
4ed5b2ed8d4cc5c8f5f09becfef8346f202a4884eee0c8c73cae5ac378824099  activejob-8.1.4.gem
9a0906c127bd118aa5f06157db12b8f750da83dccee72db2f658547a0ae7a0e8  activemodel-8.1.4.gem
3b4957ea7f246c9231bd7faa909312eac03a9101aaf87977b6c52733ff00b04f  activerecord-8.1.4.gem
f4956f3ec9ee63e5e0b332b57c877cb627f82b56f4cc902279310d2aa285c7a8  activestorage-8.1.4.gem
891dd3fe43c4fc8391934b237b1189bb1f661c932a84a840043db9d46a4e80df  activesupport-8.1.4.gem
5f3ecdf9a2a3b79b2e31b8fee3b64a00f7284d76e5631f87d0e58e665911a33b  rails-8.1.4.gem
b5e7a8e8984e33114d68af62227971960aae1e6c02bd7c9d826ffad97fff583c  railties-8.1.4.gem
```

As always, huge thanks to the many contributors who helped with this release.
