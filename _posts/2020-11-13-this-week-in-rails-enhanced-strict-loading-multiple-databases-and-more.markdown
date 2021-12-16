---
layout: post
title: "Enhanced strict loading, multiple databases and more!"
categories: news
author: morgoth85
published: true
date: 2020-11-13
---

Hi, [Wojtek](https://twitter.com/morgoth85) from this side with a summary of the latest changes that will be available in the upcoming Rails 6.1.

### [Rails 6.1 RC1 released](https://rubyonrails.org/2020/11/2/Rails-6-1-rc1-release)

Release candidate of Rails 6.1 is ready for testing.

### [Enhance strict loading to log violations](https://github.com/rails/rails/pull/40511)

This change allows for an application to optionally log instead of raise when using [_strict\_loading_](https://github.com/rails/rails/pull/37400).

### [Add connected_to_many for multiple databases](https://github.com/rails/rails/pull/40510)

This would come in especially handy for deeper nesting past 2 databases when declaring connections.

### [Add request exclusion to host authorization](https://github.com/rails/rails/pull/38829)

Host authorization checks can be skipped for specific requests. This allows for health check requests to be permitted for requests with missing or non-matching host headers.

### [Add server Railtie block](https://github.com/rails/rails/commit/868866c1fd7f6c79fd48d90febb1fd02a83380e1)

Allow the application or a railtie to load code after the server start (similar to _console_ and _tasks_ blocks).

[39 people](https://contributors.rubyonrails.org/contributors/in-time-window/20201101-20201113) contributed to Rails since last time. Check out [the detailed list of all changes](https://github.com/rails/rails/compare/@%7B2020-11-01%7D...master@%7B2020-11-13%7D). Until next week!
