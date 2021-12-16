---
layout: post
title: "Rails 6 excitement, connection pool reaping, bug fixes"
categories: news
author: dodecadaniel
published: true
date: 2019-08-25
---

Greetings! [Daniel](https://twitter.com/dodecadaniel) here, reporting from
Brooklyn, NY.

### [Rails 6 in the wild](https://rubyonrails.org/2019/8/15/Rails-6-0-final-release)

I know we mentioned this last week, but I am so excited I wanted to mention it
again. Rails 6 has been out for a little over a week and has had over 60,000
downloads. Check it out today!

### [Ensure connection reaper threads respawn in forks](https://github.com/rails/rails/pull/36998)

I didn't know much about this part of Rails before looking at this PR. The
[connection pool][] synchronizes thread access to database connections. The
[reaper][] continuously calls `reap` and `flush` on the connection pool. I have
just one question: can somebody translate Aaron Patterson's comment for me?

[connection pool]: https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/ConnectionPool.html
[reaper]: https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/ConnectionPool/Reaper.html

### [Avoid reaping parent connection pool after fork](https://github.com/rails/rails/pull/37002)

This is from the same part of Rails as above. I really enjoyed seeing the
collaboration between Guo Xiang Tan and John Hawthorn in these PRs. Nice work!

### [Fix memoization bug in Active Record](https://github.com/rails/rails/pull/36985)

Anmol Arora noticed and fixed an Active Record bug that has been around for
years. Excellent work on your first commit to Rails!

[29 people][] contributed to Rails over the past week, including 8 first-timers.
Check out the [full list of changes][], and if you are interested in helping out
check out the [open issues][]. Until next time...

[29 people]: https://contributors.rubyonrails.org/contributors/in-time-window/20190818-20190824
[full list of changes]: https://github.com/rails/rails/compare/master@%7B2019-08-18%7D...@%7B2019-08-24%7D
[open issues]: https://github.com/rails/rails/issues
