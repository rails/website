---
layout: post
title: Rails version 3.0.16 has been released!
categories: []
author: tenderlove
published: true
---

Good news everyone!  Rails version 3.0.16 has been released.

This version contains an important security fix, please upgrade immediately.  The security fix impacts people using digest authentication from Action Pack.  You can read more about the problem [here](https://groups.google.com/group/rubyonrails-security/browse_thread/thread/bf1263adcd79a983).

Thank you to Charlie Somerville for reporting the problem and sending a patch.

This release only contains the security fix, but you can still take a look at the changelog for each gem (if you like):

  * [Action Mailer](https://github.com/rails/rails/blob/v3.0.16/actionmailer/CHANGELOG)
  * [Action Pack](https://github.com/rails/rails/blob/v3.0.16/actionpack/CHANGELOG)
  * [Active Model](https://github.com/rails/rails/blob/v3.0.16/activemodel/CHANGELOG)
  * [Active Record](https://github.com/rails/rails/blob/v3.0.16/activerecord/CHANGELOG)
  * [Active Resource](https://github.com/rails/rails/blob/v3.0.16/activeresource/CHANGELOG)
  * [Active Support](https://github.com/rails/rails/blob/v3.0.16/activesupport/CHANGELOG)
  * [Railties](https://github.com/rails/rails/blob/v3.0.16/railties/CHANGELOG)

A comprehensive list of changes can be found on [github](https://github.com/rails/rails/compare/v3.0.15...v3.0.16).

Thanks to all the contributors, especially everyone who tested the release candidate.  I appreciate it!

<3<3

