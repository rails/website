---
layout: post
title: "Action Cable testing utilities, bugfixes and more!"
categories: news
author: gregmolnar
published: true
date: 2018-08-26
---

Happy Sunday! This is [Greg](https://twitter.com/gregmolnar) bringing you the latest news about Rails.



### [The initializers Rake task is moved to Rails::Command](https://github.com/rails/rails/pull/33631)

Another Rake task is moved to Rails::Command, so in Rails 6 you will need to call _bin/rails initializers_ instead of&nbsp;_bin/rake initializers._

### [Improve Active Job test helpers](https://github.com/rails/rails/pull/33635)

This change adds a _queue_ option to _perform\_enqueued\_jobs_, and if it is set, only the specified _queue_ will be performed.



### [Fix `rails routes -c` ](https://github.com/rails/rails/pull/33662)

This PR fixes the issue of _rails routes -c UserPermissionsController_ did not output routes for the corresponding controller, because its name consists of multiple words.&nbsp;



### [Action Cable testing](https://github.com/rails/rails/pull/33659)

This PR is basically a merge of the _actioncable-testing_ gem into Rails, to provide testing utilities for Action Cable.

### [Fail more gracefully from Active Storage missing file exceptions](https://github.com/rails/rails/pull/33666)

This PR translates service-specific missing object exceptions into one generic _ActiveStorage::FileNotFoundError,_ so the application can fail more gracefully when a missing file is accessed.

### [Omit BEGIN/COMMIT statements for empty transactions](https://github.com/rails/rails/pull/32647)

With this change, if a transaction is opened and closed without any queries being run, the BEGIN and COMMIT statements are omitted to remove the overhead, and make workarounds like _save if changed?_ unnecessary.

### [Support multiple submit buttons in Active Storage forms](https://github.com/rails/rails/pull/33413)

Often times forms have more than one submit button enabling different actions, but before this change, Active Storage used the first submit button of the form, rather than the one the user actually clicked.

[28 people](https://contributors.rubyonrails.org/contributors/in-time-window/20180818-20180825) contributed to Rails this week. If you also want help out, check out the list of [open issues](https://github.com/rails/rails/issues)!
Until next time!
