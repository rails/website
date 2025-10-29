---
layout: post
title: 'New Rails Releases and End of Support Announcement'
categories: releases
author: rafaelfranca
published: true
date: 2025-10-28 21:12:00 -04:00
---

Hi everyone,

We are pleased to announce that Rails versions 7.0.10, 7.1.6, 7.2.3, 8.0.4, and 8.1.1 have been released!

These releases contain bug fixes and improvements across all supported versions.

## End of Support for Rails 7.0 and 7.1

Along with these releases, we are announcing that **Rails 7.0 and 7.1 have reached their end-of-life** and are no longer supported.

- **Rails 7.0.x** was released on December 15, 2021, and has now completed its security support period.
Version 7.0.10 is the final release of this series.
- **Rails 7.1.x** was released on October 5, 2023, and has now completed its security support period.
Version 7.1.6 is the final release of this series.

If you are still running Rails 7.0 or 7.1, we strongly encourage you to upgrade to a supported version as soon as possible. These versions will no longer receive security fixes or bug fixes.

## Extended Support for Rails 8.0

We are also announcing that **Rails 8.0 support has been extended by 6 months**. This extension was made because Rails 8.1 was released more than six months after Rails 8.0, and per our maintenance policy, we extend support when no release is made within one year.

This means Rails 8.0 will now receive Bug fixes until May 7, 2026 (extended from November 7, 2025).

## Currently Supported Versions

After these releases, the following versions are currently supported:

### Bug Fixes Support
- **Rails 8.1.x** - Supported until October 10, 2026
- **Rails 8.0.x** - Supported until May 7, 2026

### Security Fixes Support
- **Rails 8.1.x** - Supported until October 10, 2027
- **Rails 8.0.x** - Supported until November 7, 2026
- **Rails 7.2.x** - Supported until August 9, 2026

For more information about our maintenance policy, please visit the [Rails Maintenance Policy](https://rubyonrails.org/maintenance) page.

## CHANGES

To see a summary of changes for each release, please read the releases on GitHub:

- [8.1.1 CHANGELOG](https://github.com/rails/rails/releases/tag/v8.1.1)
- [8.0.4 CHANGELOG](https://github.com/rails/rails/releases/tag/v8.0.4)
- [7.2.3 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.2.3)
- [7.1.6 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.1.6)
- [7.0.10 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.0.10)

To view the detailed changes for each gem, please read the changelogs on GitHub for each version:

### Rails 8.1.1
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v8.1.1/railties/CHANGELOG.md)

### Rails 8.0.4
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v8.0.4/railties/CHANGELOG.md)

### Rails 7.2.3
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.2.3/railties/CHANGELOG.md)

### Rails 7.1.6
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.1.6/railties/CHANGELOG.md)

### Rails 7.0.10
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.0.10/railties/CHANGELOG.md)

As always, huge thanks to the many contributors who helped with these releases.
