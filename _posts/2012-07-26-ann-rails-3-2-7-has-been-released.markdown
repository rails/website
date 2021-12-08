---
layout: post
title: Rails version 3.2.7 has been released!
categories: []
author: tenderlove
published: true
---

Good news everyone!  Rails version 3.2.7 has been released.

This version contains an important security fix, please upgrade immediately.  The security fix impacts people using digest authentication from Action Pack.  You can read more about the problem [here](https://groups.google.com/group/rubyonrails-security/browse_thread/thread/bf1263adcd79a983).

Thank you to Charlie Somerville for reporting the problem and sending a patch.

The rest of the changes can be found in the CHANGELOG file for each gem:

  * [Action Mailer](https://github.com/rails/rails/blob/v3.2.7/actionmailer/CHANGELOG.md)
  * [Action Pack](https://github.com/rails/rails/blob/v3.2.7/actionpack/CHANGELOG.md)
  * [Active Model](https://github.com/rails/rails/blob/v3.2.7/activemodel/CHANGELOG.md)
  * [Active Record](https://github.com/rails/rails/blob/v3.2.7/activerecord/CHANGELOG.md)
  * [Active Resource](https://github.com/rails/rails/blob/v3.2.7/activeresource/CHANGELOG.md)
  * [Active Support](https://github.com/rails/rails/blob/v3.2.7/activesupport/CHANGELOG.md)
  * [Railties](https://github.com/rails/rails/blob/v3.2.7/railties/CHANGELOG.md)

A comprehensive list of changes can be found on [github](https://github.com/rails/rails/compare/v3.2.6...v3.2.7).

Thanks to all the contributors, especially everyone who tested the release candidate.  I appreciate it!

<3<3
