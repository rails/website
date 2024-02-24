---
layout: post
title: "Parameter filtering and an improved ActionView::Helpers::TagHelper#token_list"
categories: news
author: Emmanuel Hayford
published: true
date: 2023-02-10
---

Përshëndetje! [Emmanuel](https://hayford.dev/about/) here with the usual stuff.

[_filtered_path_&nbsp;in _ActionController::Instrumentation_&nbsp;event payloads over _fullpath_](https://github.com/rails/rails/pull/47296)
For security reasons, some data need to be filtered before it reaches bad actors. Rails now filters parameters in paths that may include sensitive information in logs. Instead of passing _fullpath_ to _ActionController::Instrumentation_, Rails now passes _filtered_path_. Here's some code for the difference:

    get "/posts?password=test"

      request.fullpath # => "/posts?password=test"
      request.filtered_path # => "/posts?password=[FILTERED]"

[Guard Stimulus' data-action from multiple escapes](https://github.com/rails/rails/pull/47318)
_ActionView::Helpers::TagHelper_'s _token_list_ saw some improvements in this pull request. Previously, utilizing multiple consecutive calls to the _token_list_ function with a _data-action_ attribute value caused an excess of HTML escapes. This has now been fixed.

[Added option to show all headers for mailer previews](https://github.com/rails/rails/pull/47317)
This pull request enhances the mailer preview template by introducing an expandable section. Upon expansion, the section displays a comprehensive table of all headers relevant to the mailer.

[Stop logging filtered params in Action Cable](https://github.com/rails/rails/pull/47300)
This pull request adds parameter filtering to filter out sensitive information that might be passed over WebSockets so logs won't leak out information.

We saw [42 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230204-20230210) in the past week.
Until next week!

Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
