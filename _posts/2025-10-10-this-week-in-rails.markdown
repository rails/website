---
layout: post
title: "RemoteIp trusts link-local IP ranges, and has_secure_token expiration gets config"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-10-10
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[New documentation PR is up for community review](https://github.com/rails/rails/pull/55862)  
The Rails Initialization Guide covers how Rails boots up, including the internal method calls, file load order, and how to hook into the initialization process.
If you want to help by reviewing, find the PR here: <https://github.com/rails/rails/pull/55862>

[Add link-local IP ranges to RemoteIp default proxies](https://github.com/rails/rails/pull/55821)  
This PR updates the RemoteIp middleware to include the following link-local addresses as trusted proxies: `169.254.0.0/16` for IPv4 and `fe80::/10` for IPv6.

[Don’t ignore X-Forwarded-For IPs with ports attached (again)](https://github.com/rails/rails/pull/49894)  
A change originally requested over 4 years ago lands that deals with proxies which include ports in the `X-Forwarded-For` header.

[Add request.variant API and guides documentation](https://github.com/rails/rails/pull/50273)  
This welcome PR updates the Action Controller docs and guide to include context-specific request handling based on variants, like platform, browser, or any arbitrary thing you want to match a request to a template.

[Make reset token expiry configurable in has_secure_password](https://github.com/rails/rails/pull/55574)  
Previously the password reset token was default to 15 minutes, but is now configurable:

```ruby
has_secure_password reset_token: { expires_in: 1.hour }
```

[Place template annotation on a separate line](https://github.com/rails/rails/pull/53731)  
With `config.action_view.annotate_rendered_view_with_filenames` enabled, rendering HTML views now adds a line break after the comment annotation which includes the file path to the template.

[Add an explicit dependency on json gem](https://github.com/rails/rails/pull/55847)  
This pull request adds `json` as a dependency to the `activesupport` gemspec, ensuring that the gem version is listed as a dependency even though it's included with Ruby.

[Bump devcontainer Ruby from 3.4.6 to 3.4.7](https://github.com/rails/rails/pull/55872)  
This is just a reminder that Ruby 3.4.7 was [released](https://www.ruby-lang.org/en/news/2025/10/07/ruby-3-4-7-released), yay!


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-10-03%7D...main@%7B2025-10-10%7D)._  
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251003-20251010) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
