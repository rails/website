---
layout: post
title: 'Maintenance policy for Ruby on Rails'
category: releases
author: steveklabnik
published: true
---

Since the most recent patch releases there has been some confusion about what
versions of Ruby on Rails are currently supported, and when people can expect
new versions.  Our maintenance policy is as follows. 

Support of the Rails framework is divided into four groups: New features, bug
fixes, security issues, and severe security issues.  They are handled as
follows, all versions in x.y.z format:

## New Features

New Features are only added to the master branch and will not be made available
in point releases.

## Bug fixes

Only the latest release series will receive bug fixes. When enough bugs are
fixed and its deemed worthy to release a new gem, this is the branch it happens
from.

Currently included series: 3.2.z

After the Rails 4 release: 4.0.z

## Security issues:

The current release series and the next most recent one will receive patches
and new versions in case of a security issue. 

These releases are created by taking the last released version, applying the
security patches, and releasing. Those patches are then applied to the end of
the x-y-stable branch. For example, a theoretical 1.2.3 security release would
be built from 1.2.2, and then added to the end of 1-2-stable. This means that
security releases are easy to upgrade to if you're running the latest version
of Rails.

Currently included series: 3.2.z, 3.1.z

After the Rails 4 release: 4.0.z, 3.2.z

## Severe security issues:

For severe security issues we will provide new versions as above, and also the
last major release series will receive patches and new versions. The
classification of the security issue is judged by the core team.

Currently included series: 3.2.z, 3.1.z, 2.3.z

After the Rails 4 release: 4.0.z, 3.2.z

## Unsupported Release Series

When a release series is no longer supported, it's your own responsibility to
deal with bugs and security issues.  We may provide back-ports of the fixes and
publish them to git, however there will be no new versions released.  If you
are not comfortable maintaining your own versions, you should upgrade to a
supported version.

You should also be aware that Ruby 1.8 will reach End of Life in June 2013, no
further Ruby security releases will be provided after that point.  If your
application is only compatible Ruby 1.8 you should upgrade accordingly.


