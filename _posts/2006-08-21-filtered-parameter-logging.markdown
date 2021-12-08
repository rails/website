---
layout: post
title: Filtered parameter logging
categories:
- documentation
author: josh
published: true
date: 2006-08-21 04:33:00.000000000 +01:00
---
Now that the hubbub about the recent security issues has died down, I think it's worth pointing out a little jewel that was snuck into the 1.1.6 security release of Rails that most people missed.

[ActionController#filter\_parameter\_logging](http://api.rubyonrails.org/classes/ActionController/Base.html#M000201) lets you filter form data that you don't want saved in the log. This is useful for preventing sensitive data like passwords and credit card numbers from being logged in the clear, for keeping huge pieces of data from clogging the log file, and so on.

If your application accepts passwords, paste this line into your ApplicationController class:

    filter_parameter_logging "password"

That will prevent any field with a name matching the pattern `/password/i` from being logged, so both `[user][password]` and `[user][password_confirmation]` will be filtered out. If you care about preventing exposure of passwords, go do that right now.

Credit to Jeremy Evans for his patch!