---
layout: post
title: "Rails 6.0.1, database connection improvements, and more"
categories: news
author: dodecadaniel
published: true
date: 2019-11-17
---

Hey there! This is [Daniel] bringing you the latest news in Rails. I am writing
from [RubyConf] in Nashville, so come find me and say hello if you are here
too!

### [Rails 6.0.1 released]

As always, this release is loaded with fixes and improvements. Today seems like
a good day to upgrade, don't you think?

### [Introduce role manager to manage connections]

I am a big fan of detailed commit messages, and this commit has an impressive
one. This change will help to eventually support sharding in Rails.

### [Disable logging for jobs with sensitive arguments]

Do you have any jobs that include sensitive arguments like passwords? You
probably don't want to see those arguments showing up in your logs. Now you can
disable argument logging for any job by setting the `log_arguments`
configuration option.

### [Use both implicit order column and primary key for ordering]

To ensure deterministic results, records are now ordered by both
`implicit_order_column` and the primary key, when available. This commit is from
a first-time contributor. Nice work!

### [Remove duplicated database configuration logic]

The Rails codebase is fairly complex. It is always nice to see a commit that
simplifies it, reduces duplication, and improves behavior while removing lines.

[36 people contributed] since last time, including several first-time
contributors. Check out the [full list of changes].

Bye for now! 👋🏻

[Daniel]: https://twitter.com/dodecadaniel
[RubyConf]: https://www.rubyconf.org/
[Rails 6.0.1 released]: https://rubyonrails.org/2019/11/5/Rails-6-0-1-released/
[Introduce role manager to manage connections]: https://github.com/rails/rails/pull/37622
[Disable logging for jobs with sensitive arguments]: https://github.com/rails/rails/pull/37660
[Use both implicit order column and primary key for ordering]: https://github.com/rails/rails/pull/37626
[Remove duplicated database configuration logic]: https://github.com/rails/rails/pull/37695

[36 people contributed]: https://contributors.rubyonrails.org/contributors/in-time-window/20191103-20191116
[full list of changes]: https://github.com/rails/rails/compare/master@%7B2019-11-03%7D...@%7B2019-11-16%7D
