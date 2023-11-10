---
layout: post
title: 'Rails 7.1.2 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2023-11-10 17:00:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 7.1.2 has been released.

## CHANGES since 7.1.1

To see a summary of changes, please read the release on GitHub:

[7.1.2 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.1.2)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.1.2/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.1.1...v7.1.2).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.1.2:

```
$ shasum -a 256 *-7.1.2.gem
9e7c1bcf5bf57e5bdce846f6281b0ca2aec1ebd0ce1b99b0454194b6e52c7416  actioncable-7.1.2.gem
b7785621fcda24c518c343f037d17da37065c818ad9d92d2a42c206537a57d51  actionmailbox-7.1.2.gem
e3ecff2e4fe22ee5133ca4ab1c5284052a91429697f5bae7752992c89a6a6e1e  actionmailer-7.1.2.gem
eaa2ba517134a7e6495c51e42bfd73424c6c66fbb35f5b6160c7374128341a63  actionpack-7.1.2.gem
ba2d42595358b3fe6f79b1ae2840c08c8c134b6417ae3432505ccab446328e34  actiontext-7.1.2.gem
f540c4360fc94e56e1085b3b4c4916bc5934a6633d5a5ed45014baabaa18b3cb  actionview-7.1.2.gem
d7867b27fa9bb0435da176d76c4392b92eb677a8e9b7971f1d407daadf5313a1  activejob-7.1.2.gem
34d78721cd47899caea662e2a5b5c84768ebd0670845c691ce4ac769990a6ebf  activemodel-7.1.2.gem
7e7305deb74ee4e924815b90b53bdc5fe79fcfb09fb4d8d66a02a581b1f92b34  activerecord-7.1.2.gem
42b0f9a9bde084edb4aa045a99413885826262251b6bd5ad9727039b90bcd9ce  activestorage-7.1.2.gem
5bd81ef71524a14725ecb6c3b07bfc00ae0ccc77dd611190bd93bd9f92abd0d0  activesupport-7.1.2.gem
e0a5c335f02356ed3fa0fc2d28718a2541505119ac30d91002bdbf4786db3eeb  rails-7.1.2.gem
f0394dc4ff065aafe6c87103ad3188a54268d811cb1549e4ac8bc56f71581858  railties-7.1.2.gem
```

As always, huge thanks to the many contributors who helped with this release.
