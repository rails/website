---
layout: post
title: "This week in Rails: New releases, bugfixes and more!"
categories: news
author: gregmolnar
published: true
date: 2021-12-19
---

Hi there, it is [Greg](https://twitter.com/gregmolnar), bringing you the latest news about Ruby on Rails! We had an exciting week, so let's get to it.

[Rails 7 has been released](https://rubyonrails.org/2021/12/15/Rails-7-fulfilling-a-vision)
There are so many new features, I would rather not list them here, please read the announcement, it has all the details.
As mentioned in the release announcement, there is a new look of the [official Rails website](https://rubyonrails.org/) and [blog](https://rubyonrails.org/blog)!

 [Rails 6.0.4.4, and 6.1.4.4 have been released](https://rubyonrails.org/2021/12/15/Rails-6-0-4-4-and-6-1-4-4-have-been-released)
This is less fun than the above, since they are security releases to address an [Open Redirect vulnerability in the Host Header Authorization Middleware](https://discuss.rubyonrails.org/t/possible-open-redirect-in-host-authorization-middleware/79505).

[Fix dbconsole for 3-tier config](https://github.com/rails/rails/pull/43921)
The dbconsole tried to connect for the _primary_ database from the config before, but with a 3-tier config and application might not have one. This PR fixes the issue by changing dbconsole to pick the first database when there is no primary. It also improved the error message when no database is found.

[Raise an exception when using unrecognized options in change\_table block](https://github.com/rails/rails/pull/43576)
This PR raises an exception when the yielded _Table_ inside a _change\_table_ block receives a method with the keyword arguments _if\_exists_ or _if\_not\_exists_. This prevents unexpected behaviour when a _change\_table_ block called with the option _bulk: true_ will silently ignore the option, but when called without that option, it will be obeyed.

[Allow IPs with port in the HostAuthorization middleware](https://github.com/rails/rails/pull/43882)
The _IPAddr_ object comparison failed with a host with an IP address and a port and raised an exception, but this change fixes that by extracting the hostname for the comparison.

[35 people](https://contributors.rubyonrails.org/contributors/in-time-window/20211211-20211218) contributed to Rails the past week! If you want to check out all of the changes, you can see the [here](https://github.com/rails/rails/compare/@%7B2021-12-11%7D...main@%7B2021-12-18%7D). See you next time!

