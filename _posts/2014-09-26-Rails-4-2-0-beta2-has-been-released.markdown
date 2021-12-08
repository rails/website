---
layout: post
title: '[ANN] Rails 4.2.0.beta2 has been released!'
category: releases
author: chancancode
published: true
date: 2014-09-29 11:00:00 -08:00
---

Happy Monday everyone!

Today the Rails team is happy to announce that we have released Rails
[4.2.0.beta2](http://rubygems.org/gems/rails/versions/4.2.0.beta2).

Thanks to all the early adopters who have participated in the first round of
beta testing, we have identified a number of bugs, regressions and other
imperfections in the codebase. These problems have since been fixed and included
in this release.

## Security Issues

This release also includes two security patches.

### Web Console 2.0.0.beta4

Along with the Rails 4.2.0.beta2 release we also released Web Console [2.0.0.beta4](https://rubygems.org/gems/web-console/versions/2.0.0.beta4)
which includes a security fix.

If you are already using Web Console in development we recommend you to upgrade
to this new version of the gem.

### Active Job vulnerability

We also fixed an Active Job bug that allowed String arguments to be deserialized
as if they were Global IDs, an object injection security vulnerability.

## Breaking Changes

In addition to the security and bug fixes, some of the new APIs have also been
refined after further testing in real-world applications. This resulted in the
following list of breaking changes that are not backwards-compatible with
4.2.0.beta1:

### Active Job

The Active Job API has been overhauled:

```
# The enqueueing method has changed from +enqueue+ to +perform_later+.
#
# In 4.2.0.beta1:
MyJob.enqueue(*args)
#
# In 4.2.0.beta2:
MyJob.perform_later(*args)

# The ways jobs are scheduled has changed.
#
# In 4.2.0.beta1:
MyJob.enqueue_at(Date.tomorrow.noon, record)
MyJob.enqueue_in(1.week, record)
#
# In 4.2.0.beta2:
MyJob.set(wait_until: Date.tomorrow.noon).perform_later(record)
MyJob.set(wait: 1.week).perform_later(record)
#
# You can also specify a queue to enqueue the job onto with this new API:
MyJob.set(queue: :low_priority).perform_later(record)
```

### Action Mailer

The Action Mailer API has also undergone some changes:

```
# Two new methods +#deliver_now+ and +#deliver_now!+ were introduced for
# clarity. +#deliver+ and +#deliver!+ have been deprecated and applications are
# encouraged to use the +#deliver_*+ instead.
#
# In 4.2.0.beta1:
Notifier.welcome(User.first).deliver!
#
# In 4.2.0.beta2:
Notifier.welcome(User.first).deliver_now!

# The options for +#deliver_later+ and +#deliver_later!+ has changed to match
# those on Active Job.
#
# In 4.2.0.beta1:
Notifier.welcome(User.first).deliver_later!(in: 1.hour)
Notifier.welcome(User.first).deliver_later!(at: 10.hours.from_now)
#
# In 4.2.0.beta2:
Notifier.welcome(User.first).deliver_later!(wait: 1.hour)
Notifier.welcome(User.first).deliver_later!(wait_until: 10.hours.from_now)
```

### Action Controller `render` behavior change

Historically, calling `render "foo/bar"` in a controller action is equivalent
to calling `render file: "foo/bar"`. Since beta 2, this has been changed to mean
`render template: "foo/bar"` instead. This is due to a number of potential
security issues with the old default behavior. If you need to render a file,
please change your code to use the explicit form (`render file: "foo/bar"`)
instead.

## Full list of changes

As always, you can browse the Rails source code repository on GitHub to view the
[full list of changes](https://github.com/rails/rails/compare/v4.2.0.beta1...v4.2.0.beta2)
that were included in this release.

## Acknowledgement

The Rails team would like to thank the 66 people who contributed patches to make
this release possible!
