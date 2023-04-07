---
layout: post
title: "Column information in ERB template exceptions, migration option validation and more!"
categories: news
author: gregmolnar
published: true
date: 2022-10-14
---

Hey, this is [Greg](https://twitter.com/gregmolnar) bringing you the latest news from the Rails world.

[Add column information to exceptions inside ERB templates](https://github.com/rails/rails/pull/46171)
This PR adds column information to exceptions that occurred inside ERB templates. There are before and after screenshots of the Rails error page, and a great explanation of the change in the PR description.

[Validate options when managing columns and tables in migration](https://github.com/rails/rails/pull/46178)
With this change, when an invalid option is passed to a migration method(_create\_table_ for instance), an error will be raised. The options validation is only applied to newly created migrations, to make it backward compatible.

[Update documentation of Range#to\_s](https://github.com/rails/rails/pull/46230)
Rails 7 deprecated passing a format option to _to\_s_, and added _to\_fs_ as a replacement, and the documentation has also been updated now.

[Add Rails.application.deprecators](https://github.com/rails/rails/pull/46049)
 With this change, _deprecators_ added by gem maintainers can be configured for the whole application. So when the user sets _Rails.application.deprecators.behavior = :raise_, this behavior will be applied to all _deprecators_.&nbsp;

&nbsp;
[Turbo 7.2.2 release](https://github.com/hotwired/turbo/releases/tag/v7.2.2)
A new minor version of Turbo has been released this week.

[18 people](https://contributors.rubyonrails.org/contributors/in-time-window/20221007-20221014) contributed to Rails this week! If you want the be part of that, checkout the [list of open issues](https://github.com/rails/rails/issues)!
Until next week!

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
