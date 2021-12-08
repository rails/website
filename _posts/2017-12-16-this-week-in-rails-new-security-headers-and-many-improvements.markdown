---
layout: post
title: "This Week in Rails: New security headers and many improvements"
categories: news
author: gregmolnar
published: true
date: 2017-12-16
---

Hello everyone! This is [Kir](https://github.com/kirs) and [Greg](https://twitter.com/gregmolnar)&nbsp;bringing you the latest news from the Rails world.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20171202-20171216)

57 people contributed to Rails the past 2 weeks! If you'd like to join them, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [New security headers added](https://github.com/rails/rails/commit/5d7b70f4336d42eabfc403e9f6efceb88b3eff44)

_X-Download-Options_ and _X-Permitted-Cross-Domain-Policies_ are now in the default header list.  
  


### [Fix an edge case in rails db:create](https://github.com/rails/rails/pull/31311)

Previously, when the schema cache was present and the database was not created yet, _rails db:create_ would get a connection failure.

### [StreamingTemplateRenderer failed to forward I18n.locale](https://github.com/rails/rails/pull/30361)

This commit fixes an issue when you use `render stream: true` and your current locale is not forwarded to the renderer.

### [Quote colum_names when building select](https://github.com/rails/rails/pull/31403)

This PR makes sure the column names are quoted to avoid SQL syntax errors when there is a from clause used, and there are ignored columns set.

### [Cleanup variants in Active Storage ](https://github.com/rails/rails/pull/31319)

Active Storage will now destroy variants together with main blob when it's deleted.

### [Custom server in system tests](https://github.com/rails/rails/pull/31384)

With this PR, Rails won't override your custom capybara server configuration, so for example you can use Unicorn instead of Puma .

### [Provide instant feedback when booting](https://github.com/rails/rails/pull/31434)

From now on when you call `rails s` or `rails console` there is an instant feedback in the console to show Rails is booting.

### [Optimizing information_schema query for foreign_keys](https://github.com/rails/rails/pull/31425)

By using CONSTRAINT\_SCHEMA key for information\_schema.referential\_constraints there are performance improvements for Active Record.

### [Initial support for running Rails on FIPS-certified systems](https://github.com/rails/rails/pull/31289)

This PR enables to set the hash function used by Rails from MD5 to FIPS supported ones by changing the `active_support.use_fips_approved_hash_function` configuration.

### [Log the original call site for an Active Record query](https://github.com/rails/rails/pull/26815)

This change allows you to enable the logging of what line of application code is triggering SQL queries.

That's it for this week, as always, we couldn't cover all of the changes, but feel free to check the [commits](https://github.com/rails/rails/compare/master@%7B2017-12-02%7D...@%7B2017-12-09%7D). If you'd like to join them, check out the list of [open issues](https://github.com/rails/rails/issues). Until next week!
