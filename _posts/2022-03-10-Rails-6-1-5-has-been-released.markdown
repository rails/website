---
layout: post
title: Rails 6.1.5 has been released
categories: releases
author: rafaelfranca
published: true
date: 2022-03-10 16:30:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 6.1.5 has been released. This is the last bug fix release for Rails 6.1. If you find any regression, please let us know in the issue tracker so we can fix as soon as possible.

## CHANGES since 6.1.4

To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v6.1.5/railties/CHANGELOG.md)

To see a summary of changes, please read the release on GitHub:

[6.1.5 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.1.5)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v6.1.4...v6.1.5).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.1.5:

```
$ shasum -a 256 *-6.1.5.gem
3f7a5de52d722095f74d25abec3a637a9f1cc3b54f46b1526799102043174bff  actioncable-6.1.5.gem
f0512879b0d4e2d2ab486e5de9f23d23c0179672673d84ac2206c11d7771f7df  actionmailbox-6.1.5.gem
ce06a095e3a6223555b434a7490e6f82f8aff23fb92070f68633d22ec5cda56a  actionmailer-6.1.5.gem
1c40a67cb876d5ffc9eeff64f778abeb13c0a7e263789d957fe55192ac61684e  actionpack-6.1.5.gem
2bf6631dfe073359715ba8b3f90bd4cb32185a134e0dc44863db98c3238578c2  actiontext-6.1.5.gem
905bb9eb789c6a6eb2b5adfdbd7bc369032cd118937bcf3cf6bff67fb78af62c  actionview-6.1.5.gem
9ac3707752cf61db00d43fbdd2c092ce4ecbdbb92a28577c726941c5fa262e2b  activejob-6.1.5.gem
2505e30032b2738876d1246970ee1f0f14b9dbae4f076ed687b772cccff75699  activemodel-6.1.5.gem
69245ef38f3e6f15cd66859c67388b06fdcc5fee73556b9da4bacbf41293864a  activerecord-6.1.5.gem
f0a6d0a08ede3e17cc53c093241b6ba01306c422d257673cace16ee579eafd3e  activestorage-6.1.5.gem
a4cfdb0f1fa3527fdf5729fc34ebb028802320c335f6313ebfd010357ab3b84a  activesupport-6.1.5.gem
bbfda8082ca2d76b01fd1e78bff14e17fe07908f1ff4e028f3853b5b8c3626fb  rails-6.1.5.gem
23518682f0016dd4a18090050a1613e51980866cc5a59ce7d54d4c88d186b8b9  railties-6.1.5.gem
```

As always, huge thanks to the many contributors who helped with this release.
