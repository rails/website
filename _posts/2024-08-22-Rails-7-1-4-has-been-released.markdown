---
layout: post
title: 'Rails 7.1.4 has been released!'
categories: releases
author: rafaelfranca
published: true
date: 2024-08-22 18:30:00 -03:00
---

Hi everyone,

I am happy to announce that Rails 7.1.4 has been released.

## CHANGES since 7.1.3

To see a summary of changes, please read the release on GitHub:

[7.1.4 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.1.4)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.1.4/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.1.3...v7.1.4).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.1.4:

```
$ shasum -a 256 *-7.1.4.gem
8443dfe12129cf6d7c93b16a5f0be83bf0d3f686875d7ff5e1110c884c3e8fbc  actioncable-7.1.4.gem
30be3b404290ef19c477aab19ee48cbcb6b409cc3f377f732c7b907998e6f36f  actionmailbox-7.1.4.gem
eae396a3f2de43c54f1d267ecc2e4593a0122f20e321dbee5c96ffcbbdfa4b25  actionmailer-7.1.4.gem
f5f8879debbf0b1a73dcc60f91c975b7bed7ff87c873b5fa794acaa1f3b7e230  actionpack-7.1.4.gem
5d07bfe0d50cec80f55f71526aa67bbcc401f0ea6dcb611687119294b0da9b92  actiontext-7.1.4.gem
c02bf0665edbfaf1616b41aad0ce8919820005226d4e78e56a998b6b32593953  actionview-7.1.4.gem
65f65a552aeb33f444fb57b9dc75ecc01693ef13ae410591c7a5f7763c3c0bf6  activejob-7.1.4.gem
188d055afdd07d2f037d23403c939618ea0d7fa518a7de1b76324c2876d410b6  activemodel-7.1.4.gem
836d6dac137ec5bb71e7ab943f6eca97917c8a2968fa466b38920f4812642cdd  activerecord-7.1.4.gem
23ebbb59fb9563f035ffa18d30b6bbc3a5d3f5cda004d19765f594db24f70b46  activestorage-7.1.4.gem
3a8e1a7ce5541ab2ffefaa390c40c89d7f54273dc671ed429614953cffd8a232  activesupport-7.1.4.gem
dfcf9e78d26db70320b99958e7ee8957db9cee5969279d449b925cdab18cc51e  rails-7.1.4.gem
54395f2753366699e54417aea67d8b3c0eefd994de2f4152d364a400de634a5a  railties-7.1.4.gem
```

As always, huge thanks to the many contributors who helped with this release.
