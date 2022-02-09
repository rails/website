---
layout: post
title: Rails 7.0.2 has been released
categories: releases
author: rafaelfranca
published: true
date: 2022-02-08 18:30:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 7.0.2 has been released. While this looks like a regular patch release there
are a few notable changes.

First, one feature that was introduced in 7.0.0 was removed, the ability to pass a `service_name` param to
`DirectUploadsController`. This feature was causing significant issues when upgrading from Rails 6.1, so the Rails
team decided to remove it while we work in a backward compatible change. You can read more about the original
feature in the [original pull request](https://github.com/rails/rails/pull/38957) and about the problems in the
[related issue](https://github.com/rails/rails/issues/43971).
We don't take this decision lightly, and usually don't remove features after they are released without a proper
deprecation cycle, but at this time we decided to prioritize making it easier for people to upgrade.

Finally, with the same goal in mind, Rails 7.0.2 introduced a new feature, [the ability to version the database
schema based on the Rails version](https://github.com/rails/rails/pull/44286). This new feature will allow existing
applications to still load their database schemas generated in Rails 6.1, with the same behavior as before, keeping
it matching the production database schema. The `rails app:update` command was updated to change the database schema
to include the Rails version. As soon the first schema dump is made using Rails 7.0 the schema will be updated to use
the Rails 7.0 format. Read more about this change in the
[upgrading guide](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html#rails-version-is-now-included-in-the-active-record-schema-dump).

## CHANGES since 7.0.1

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.0.2/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[7.0.2 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.0.2)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.0.1...v7.0.2).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.0.2:

```
$ shasum -a 256 *-7.0.2.gem
48409db96e6d788b4d95ead9a475dbb5e4b5b72b22a716a57fb83b3ac9c8f3af  actioncable-7.0.2.gem
2fa7b721372b1a2a32604a7cdf6a2b0696c91ee6da794fec486144eb7e0c5d72  actionmailbox-7.0.2.gem
4d3906735d04a77d9d2d3a14bdb147204f3bab0c7bc3ad44d86431883869cb2a  actionmailer-7.0.2.gem
8f7568d692376b89bd45004fb37d107ebf089f04eb49c7f9ee72e4798bfb9929  actionpack-7.0.2.gem
afec44c03e400848bb2ff4fc63383cd0f111e73b6a59b89a816d0a431ce14557  actiontext-7.0.2.gem
097077cab8eff144e1cddaae8316baf0a3abd6d987e0e8621749ef1672252cd4  actionview-7.0.2.gem
3f7d3209b9f376bdaa4bda683bbc9544629812876c3244fdc870b0ca38f10089  activejob-7.0.2.gem
6f73399177c3632fd57f763341b2acb8d8dbb7074561c89d9a11d3175d94d147  activemodel-7.0.2.gem
44a6b09afb8cdf193b138568c5a32f5eab58d7d1f17dc539e746467a0695d0ea  activerecord-7.0.2.gem
8b9cde0a53524190eed9d41e0b3e83f89abd0122dea74fb69968c3826c2ac52b  activestorage-7.0.2.gem
a1c24e125460325933b71b6287462dda6d7b60984436d690943cfcc94506557c  activesupport-7.0.2.gem
ef82869adc909aa7f318519d6b3e5c930a29f507e730e8b5af532d8f14d2ab72  rails-7.0.2.gem
e0cbd3a75038a5d1b3c2bd5f91cf0e6b6edf41fcb63b87270d4be9287f25fc30  railties-7.0.2.gem
```

As always, huge thanks to the many contributors who helped with this release.
