---
layout: post
title: 'Rails Version 8.1.2 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2026-01-22 18:15:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 8.1.2 has been released.


## CHANGES since 8.1.1

To see a summary of changes, please read the release on GitHub:

[8.1.2 CHANGELOG](https://github.com/rails/rails/releases/tag/v8.1.2)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v8.1.2/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v8.1.1...v8.1.2).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 8.1.2:

```
$ shasum -a 256 *-8.1.2.gem
16a89943b2d9db4a39e7408e032822739b9d0a3b386fd4f946de6eeaf8b1d237  actioncable-8.1.2.gem
2342e5596b790d064cb5cfdb95d35c7862d281d8309f3441d6d422eaff0cfe9d  actionmailbox-8.1.2.gem
aca204eb2475dea545a8a65ae41b24c5dc20fdcd21296d5a0c2800724c07c5d9  actionmailer-8.1.2.gem
db0d6bb5f8378bea776eeb0311391a7df0a15fa668143240c08d9be7ad304272  actionpack-8.1.2.gem
d147bfa6b3c081bf109770d2d0f562d1b07ee7d282e4a2522e5b62c6c7a1d557  actiontext-8.1.2.gem
7e8769f86ad7b74769c4eff676865cc1f59fc5ffb24cd169e1505540e7da82b7  actionview-8.1.2.gem
5a7301a646955255647097eec123586b455d75e59e3de8e532d6e098da7ed659  activejob-8.1.2.gem
bcd38bba0adf0e599471def743e790f634c207f1eed46f11807df9b6ab09c743  activemodel-8.1.2.gem
746698bbd249d13f9d5c4c37490e5c5f48ed078e59db064cb600000c0a9b2789  activerecord-8.1.2.gem
4d50c7d7ebdc3b455350d1b18940859cb9af38e36ad8057197bc043abe18d2c0  activestorage-8.1.2.gem
10fb29b79a1da504edb49ac7544b9a2b1647b460ccb231828830b9994d0c057f  activesupport-8.1.2.gem
2c5b34609bbc28715103e3f03d3d1cefa22a3c20e146db310fb7b67c96e787a9  rails-8.1.2.gem
5e53e64aff85ce67c635b85af4ac6e872794f457fe9347ac69edc028ddb3d658  railties-8.1.2.gem
```

As always, huge thanks to the many contributors who helped with this release.
