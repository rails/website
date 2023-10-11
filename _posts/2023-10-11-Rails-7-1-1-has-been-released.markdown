---
layout: post
title: 'Rails 7.1.1 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2023-10-11 19:00:00 -04:00
---

Hi everyone,

I am happy to announce that Rails 7.1.1 has been released.

## CHANGES since 7.1.0

To see a summary of changes, please read the release on GitHub:

[7.1.1 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.1.1)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.1.1/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.1.0...v7.1.1).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.1.1:

```
$ shasum -a 256 *-7.1.1.gem
e96962eb545403838299140f087257b933574992baf6ec639406f45caffca37d  actioncable-7.1.1.gem
e1e9e9d9072953edad32bddbfab855c4ddfab7f34140bdb5b8c26375d109c78e  actionmailbox-7.1.1.gem
82506adb5fd9cf4c5552a7f8d9d853e338072b62359a71317d8c5d93a9b427db  actionmailer-7.1.1.gem
2de4b4cc50becc3ca8746439214cc7fec221d1c8d2b1d889016d79070624592c  actionpack-7.1.1.gem
dfc964fc60b90a5e1057a8afa3bb2d684f1b829a55c4ad7443700fe2e3e19213  actiontext-7.1.1.gem
36c737f2ab6f1b90633964ee2928a93d7d2911e83a885a881e564da1860b8509  actionview-7.1.1.gem
a565b3d575b1b2750a97ef0a99f81dc13aafba0ecffa10227ea86a04a9fc17e2  activejob-7.1.1.gem
1f2fd3c2136b111fe523cf80ee5c141990290e8aedacb866b6fd68c8dfd7a69a  activemodel-7.1.1.gem
f8dd03c0f3a462d616781dba3637a281ec86aaf6e643b56bea308e451ee96325  activerecord-7.1.1.gem
0cc259e1fe5ff20777a206ed71f1b1ed03825c8e14a86a344e637fa25c5a0090  activestorage-7.1.1.gem
8770bca4af1cbd6e9ffb944b41056321499ff82e8e7c2ed34e48eff4a5ee58a2  activesupport-7.1.1.gem
66e736acc1d1ba5ca1b598fc8b6024715aee02025467bfa87682dbeb823ddc17  rails-7.1.1.gem
3cf348b365e9a00285bceadef0ed7d264440fcf165541ab211e198bc75a2faa7  railties-7.1.1.gem
```

As always, huge thanks to the many contributors who helped with this release.
