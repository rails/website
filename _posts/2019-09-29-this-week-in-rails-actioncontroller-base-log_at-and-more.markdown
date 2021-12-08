---
layout: post
title: "ActionController::Base.log_at and more!"
categories: news
author: gregmolnar
published: true
date: 2019-09-29
---

Hi there, this is [Greg](https://twitter.com/gregmolnar), bringing you the changes in Rails from the past week. Let's dive in!

### [Reduce stat(2) calls](https://github.com/rails/rails/pull/37265)

This commit adds a slight performance improvement by reducing stat(2) calls in Rails.

### [Serialize symbols to strings in ImmutableString serialize method](https://github.com/rails/rails/pull/36907)

This PR updates the immutable string class to serialize symbols to strings to mirror this behavior as _ActiveModel::Attribute_ calls this serialize method to determine the return value for _changed\_in\_place?._ Prior to this change, this code would wrongly report that "something" had changed.

### [Add ActionController::Base.log_at](https://github.com/rails/rails/pull/37289)

This PR makes it possible to set a different log level on a per request basis.&nbsp;


    # Use the debug level if a particular cookie is set.
 class ApplicationController \< ActionController::Base
 log\_at :debug, if: -\> { cookies[:debug] }
 end





[25 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190920-20190928)contributed to Rails last week, if you want to be part of that, check out the [open issues](https://github.com/rails/rails/issues) on Github.&nbsp;
Until next time.
