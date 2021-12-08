---
layout: post
title: 'Rails 6.0.4 has been released'
categories: releases
author: rafaelfranca
published: true
date: 2021-06-15 5:30:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 6.0.4 has been released.


## CHANGES since 6.0.3

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.0.4/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.0.4 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.0.4)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.0.3...v6.0.4).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.0.4:

```
$ shasum -a 256 *-6.0.4.gem
384a4edf491b5a77d81cd4e39f9e7ccc1d758178a342df5a874a0d3694bef21a  actioncable-6.0.4.gem
a9bbbe0ef49cbbb5c88bd2bd9c76afb56e4204d958eaea7482393acf8a4f4263  actionmailbox-6.0.4.gem
5eee44456af0201339787aab249f946cdb65fb0a042164ddd7889206de80f716  actionmailer-6.0.4.gem
815b66107fca6f872a7fe1badd9d7fb5dabc20634b538b35bce828b981845372  actionpack-6.0.4.gem
88eddd0d4be7650d374eecb14e8bb409776ee86e775c1a14f9db7477c9c3562b  actiontext-6.0.4.gem
433f05773ac40f4f8b8df5fdcd6bc83701b262963b097759eb6d8a9367dbe89b  actionview-6.0.4.gem
648ad0e611171b969572ff2cb898f43bbd6887daf532d49bab5f3d0edc573f3f  activejob-6.0.4.gem
e61b2e6f2c167c64bd9eb1db35b97ae8c724fabf8604e5e3d7456c1e87760de9  activemodel-6.0.4.gem
8dcf08a6c780cc4f34140c624c2f4adfc96e6a6b9538c94db16e221d62976958  activerecord-6.0.4.gem
d18793d1b42d80e49b3c2e4772624c9b61a066ad841c21fa4f6046eac002fdee  activestorage-6.0.4.gem
ddc14fc858d8a3ac8b22fa612c74d96f6ca5bea91aab1969b579b7b5d2b6f25e  activesupport-6.0.4.gem
4fcf7ceeae044e95be52efd5a3f94ec14872643121a461187424246fdd0df7cb  rails-6.0.4.gem
c5bf0d0a9e78f5481e1b96ead3450d0888aa01fd8b55be07f55d7237eaca2792  railties-6.0.4.gem
```

As always, huge thanks to the many contributors who helped with this release.
