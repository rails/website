---
layout: post
title: Rails version 3.1.5 has been released!
categories: []
author: tenderlove
published: true
---

Good news everyone!  Rails version 3.1.5 has been released.

This release of Rails contains two important security fixes:

  * [CVE-2012-2660 Ruby on Rails Active Record Unsafe Query Generation Risk](https://groups.google.com/group/rubyonrails-security/browse_thread/thread/f1203e3376acec0f)
  * [CVE-2012-2661 Ruby on Rails Active Record SQL Injection Vulnerability](https://groups.google.com/group/rubyonrails-security/browse_thread/thread/7546a238e1962f59)

It is suggested that all users upgrade immediately.  For more information about
these issues, please see the annoumcenents on the [rubyonrails-security mailing list](https://groups.google.com/group/rubyonrails-security).

Other changes for this release can be found in each component's CHANGELOG:

  * [Action Mailer](https://github.com/rails/rails/blob/3-1-stable/actionmailer/CHANGELOG.md)
  * [Action Pack](https://github.com/rails/rails/blob/3-1-stable/actionpack/CHANGELOG.md)
  * [Active Model](https://github.com/rails/rails/blob/3-1-stable/activemodel/CHANGELOG.md)
  * [Active Record](https://github.com/rails/rails/blob/3-1-stable/activerecord/CHANGELOG.md)
  * [Active Support](https://github.com/rails/rails/blob/3-1-stable/activesupport/CHANGELOG.md)
  * [Railties](https://github.com/rails/rails/blob/3-1-stable/railties/CHANGELOG.md)

All changes can be found [here](https://github.com/rails/rails/compare/v3.1.4...v3.1.5).

I want to give a special thanks to Ben Murphy for responsibly reporting the two
security issues that are fixed in this release.  Thank you very much!

<3<3<3

