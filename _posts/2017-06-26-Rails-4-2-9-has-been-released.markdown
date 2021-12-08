---
layout: post
title: 'Rails 4.2.9 has been released'
categories: releases
author: rafaelfranca
published: true
date: 2017-06-26 17:31:44 -04:00
---
Hi everyone,

I am happy to announce that Rails 4.2.9 has been released.

Following our [maintenance policy](http://guides.rubyonrails.org/maintenance_policy.html),
since the release of Rails 5.1.0, the 4.2 series will only receive new releases in case of severe security issues.

## CHANGES since 4.2.8

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.9/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.9/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.9/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.9/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.9/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.9/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.9/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.9/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.8...v4.2.9).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 4.2.9:

```
$ shasum -a 256 *-4.2.9.gem
bffbd5830a26af64d92548a831624a5422c77d97b2115c08b668fcbcc26f34ad  actionmailer-4.2.9.gem
8471fb1f9cc4962f3e000325821f1de0538a12cb580b0772ff9f89fbc8c1f9cd  actionpack-4.2.9.gem
d7fbbe069f74a6e7ce76cf91d0fede1593a0ed0db875f4630d8343551fb96f12  actionview-4.2.9.gem
a0086b19823d056efc1c8e7052d6684f54bebe7c9101ba69bd1a58c33d737451  activejob-4.2.9.gem
dbcd32a5e6294323b893565c0c334f6d89bb92d5085ce5e3d0454de0ed8eb5e3  activemodel-4.2.9.gem
0be77a1f77b2c8ae0e767c6fafb4c8fdda89c0be49ded0ae6f9644e81a4827a2  activerecord-4.2.9.gem
5717d2fe6409d4df72f0d20e46d7261503ccafc80ab228e91455d47185190ab4  activesupport-4.2.9.gem
eaaa4c1cafb3f9bd9f8dd58dd142522e398a5ad0d03abf2e3de364a63d4b7d1a  rails-4.2.9.gem
ad7b7765849a9aff0c42674f9512c39c098af63bb8476a4076a252fac3b4b2bc  railties-4.2.9.gem

```

As always, huge thanks to the many contributors who helped with this release.
