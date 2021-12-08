---
layout: post
title: "This week in Rails: Job IDs, inline images preview and more"
categories: news
author: huoxito
published: true
date: 2015-05-10 12:05:08 -0700
---

Hi there!! [Washington](https://twitter.com/huoxito) here again.

Glad we all made to another Friday. A lot of small patches around Rails repository this week. So we had another relatively calm week after the major announcements on RailsConf. The [talks list](http://confreaks.tv/events/railsconf2015) is getting bigger on confreaks by the way. You might want to watch some of those this weekend.

## Featured

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150502-20150508)

38 people made it to the Rails repository this week. Check out the [pulse page](https://github.com/rails/rails/pulse) on github too for the full list of recent issues and PRs.

## New Stuff

### [Keeping original job IDs with `ActiveJob#provider_job_id`](https://github.com/rails/rails/pull/19910)

ActiveJob will be able to report the original adapter job ID in Rails 5. The patch started targeting Delayed Job then [Sidekiq and Que](https://github.com/rails/rails/pull/20056) got their own about a week later. Great team work.

### [Mailer previews support inline images](https://github.com/rails/rails/commit/60239f3e5a3303b4135e30469ba7dbf27890008d)

This commit adds a preview interceptor to search for inline `cid:` urls in `src` attributes and convert them to data urls. P.S. I had to look up the [cid protocol](http://tools.ietf.org/html/rfc2111) myself to get this one.

## Deprecated

### [Removed `assigns` from functional test templates](https://github.com/rails/rails/pull/19976)

Rails is moving towards deprecating the `assigns` helper on controller tests. The main motivation is that it's asserting against the internals of the implementation which we shouldn't care about in a unit test.

See some [comments](https://github.com/rails/rails/pull/18305#issuecomment-68605166) from DHH about that and a couple other test helpers.

## Improved

### [Allow custom response messages on authentication methods](https://github.com/rails/rails/pull/19981)

This adds the same functionality already provided in `Digest` to the HTTPAuth `Basic` and `Token` modules.

### [Apply schema cache dump when creating connections](https://github.com/rails/rails/pull/17632)

Quite interesting patch on improving the set up for database connection pools. The schema cache dump will now be applied to every connection as they are created to avoid querying the database for its schema.

## That's a wrap

That's all for This week in Rails. As always, there are more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails)!

P.S. If you enjoyed this newsletter, why not share it with your friends? :) If you wish to be part of this project please don't hesitate to [contact Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

