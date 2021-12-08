---
layout: post
title: Rails version 3.0.14 has been released!
categories: []
author: tenderlove
published: true
---

Good news everyone!  Rails version 3.0.14 has been released.

This release of Rails contains two important security fixes:

  * [CVE-2012-2694 Ruby on Rails Unsafe Query Generation Risk in Ruby on Rails](https://groups.google.com/group/rubyonrails-security/browse_thread/thread/8c82d9df8b401c5e)
  * [CVE-2012-2695 Ruby on Rails SQL Injection](https://groups.google.com/group/rubyonrails-security/browse_thread/thread/9782f44c4540cf59)

Please note that the last round of security fixes DO NOT cover the situations that these patches fix.  Therefore it is suggested that all users upgrade immediately.  For more information about these issues, please see the annoumcenents on the [rubyonrails-security mailing list](https://groups.google.com/group/rubyonrails-security).


Other changes for this release can be found in each component's CHANGELOG:

  * [Action Mailer](https://github.com/rails/rails/blob/3-0-stable/actionmailer/CHANGELOG)
  * [Action Pack](https://github.com/rails/rails/blob/3-0-stable/actionpack/CHANGELOG)
  * [Active Model](https://github.com/rails/rails/blob/3-0-stable/activemodel/CHANGELOG)
  * [Active Record](https://github.com/rails/rails/blob/3-0-stable/activerecord/CHANGELOG)
  * [Active Support](https://github.com/rails/rails/blob/3-0-stable/activesupport/CHANGELOG)
  * [Railties](https://github.com/rails/rails/blob/3-0-stable/railties/CHANGELOG)

All changes can be found [here](https://github.com/rails/rails/compare/v3.0.13...v3.0.14).

<3<3<3

