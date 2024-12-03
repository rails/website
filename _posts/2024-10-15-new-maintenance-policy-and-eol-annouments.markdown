---
layout: post
title: New Rails maintenance policy and end of maintenance announcements
categories: news
author: rafaelfranca
published: true
date: 2024-10-15 16:00:00 -04:00
---

We're excited to announce updates to our maintenance policy for Ruby on Rails.

These changes are designed to provide clarity on our support timelines and help you plan your Rails upgrades effectively. You can find the full details of our new policy in [our site](https://rubyonrails.org/maintenance).

## New Maintenance Policy Overview

Our support is now divided into three categories:

1. **New Features**
   - We aim to release a version containing new features every six months.

2. **Bug Fixes**
   - Minor releases will receive bug fixes for one year after the first release in their series.
   - For example, if version 1.1.0 is released on January 1, 2023, it will receive bug fixes until January 1, 2024.

3. **Security Issues**
   - Minor releases will receive security fixes for two years after the first release in their series.
   - For example, if version 1.1.0 is released on January 1, 2023, it will receive security fixes until January 1, 2025.

## Currently Supported Releases

As of now, the following releases are supported:

- 7.2.x - Bug fixes until August 9, 2025; Security fixes until August 9, 2026
- 7.1.x - Bug fixes until October 1, 2024; Security fixes until October 1, 2025
- 7.0.x - Security fixes until April 1, 2025
- 6.1.x - Reached end of maintenance (see Important Updates)

## Important Updates

1. **Rails 6.1.x End of Maintenance**
   - Rails 6.1.x reached its end of maintenance on October 1, 2024.
   - While regular maintenance has concluded, we will provide one extra security release for Rails 6.1.x.
   - After this additional security release, no further updates will be provided for this version.
   - We strongly urge users of Rails 6.1.x to plan their upgrade to a supported version as soon as possible.

2. **Rails 7.0.x Bug Fix Release**
   - We will be releasing one final bug fix update for Rails 7.0.x later this month.
   - After this release, Rails 7.0.x will no longer receive bug fix updates.
   - Security updates for Rails 7.0.x will continue until April 1, 2025, as previously scheduled.

## What This Means for You

As we move forward with these changes, it's important to understand how they affect your Rails applications.

If you're running Rails 6.1.x, while we're providing one last security release, it's crucial to upgrade to a supported version as soon as possible.
This extra release provides a brief window to plan and execute your upgrade, but remember that after this, no further updates will be available, potentially leaving your application vulnerable.

For those using Rails 7.0.x, you'll benefit from one last bug fix release this month, but it's advisable to start planning your upgrade to ensure continued support.

Users of Rails 7.1.x and 7.2.x can rest assured knowing they'll continue to receive both bug fixes and security updates as outlined in our new policy.

We encourage all users to stay on supported versions to ensure the security and stability of their applications.

## Our Commitment to You

We remain committed to providing a stable and secure framework for all our users. These policy updates allow us to focus our resources on improving the latest versions of Rails and developing new features that benefit the entire community.

For unsupported release series, it becomes the responsibility of the user to deal with bugs and security issues. While we may provide backports of fixes and publish them to git, no new versions will be released for unsupported series.

We appreciate your continued support and understanding as we work to keep Ruby on Rails at the forefront of web development frameworks.
