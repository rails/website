---
layout: post
title: 'Rails 6.1.1 has been released'
categories: releases
author: rafaelfranca
published: true
date: 2021-01-07 23:05:10 +00:00
---
Hi everyone,

I am happy to announce that Rails 6.1.1 has been released.

## CHANGES since 6.1.0

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.1.1/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.1.1 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.1.1)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.1.0...v6.1.1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.1.1:

```
$ shasum -a 256 *-6.1.1.gem
bc156d04d7a2f5d0702e319a3e01751ccff27e54a627a1beebb3cb89dff1aefe  actioncable-6.1.1.gem
34146a9e7a3ea23824c53f42593d6a621ffc653686c186f9a379fce30737e2fa  actionmailbox-6.1.1.gem
9c4394d61b22d791c38dcf026b91039e1b5a86ea634b67fe2cd9b7cc06168f17  actionmailer-6.1.1.gem
3ecfe3b11e31e4a9e6db771244085c7783b482b82380fdce52abd11dab1153e3  actionpack-6.1.1.gem
6e749845fca914cf0ba4358d96eb8d8428b903a0192442aa9c3edfdace6c996c  actiontext-6.1.1.gem
dc9e6c2a15e66601822d089c7f4322c2a44fa86ae6c53bea57ef0bcdd8597e9f  actionview-6.1.1.gem
f35e026b49d9f53b70aece18846a641446f0bc3f78640612806330d55502a189  activejob-6.1.1.gem
b2b9d455446097e36968c009644a3c38345d1cbc449028e20a4bd43fb63fd12f  activemodel-6.1.1.gem
d10fa2c7a91b3b24a7b42b47590d3d5c46b80eb49a63c184a6cd1743ee31e9da  activerecord-6.1.1.gem
798b2806b3f485a7b65e8b39944a65ef216d39f92dfa3e7dcd0d829e5051a4b8  activestorage-6.1.1.gem
a1d7d91586b2bbebb93f931802e5b1ceab565137d0769c55d9941052de85ea22  activesupport-6.1.1.gem
b7710f82e68af72db1ffa30ff3d67437e8fb91c26255659f3c2602964b834a64  rails-6.1.1.gem
fa0818457755b22de1fc673d8e924300f8f730fc4c2a223bd9a94837f7ce81c5  railties-6.1.1.gem
```

As always, huge thanks to the many contributors who helped with this release.
