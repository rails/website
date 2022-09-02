---
layout: post
title: "Bugfixes, improvements and more!"
categories: news
author: gregmolnar
published: true
date: 2022-09-02
---

Hi, this is [Greg](https://twitter.com/gregmolnar) with the latest news from the world of Rails.

[Return "Range Not Satisfiable" return code for partial downloads with incorrect range](https://github.com/rails/rails/issues/45890)
This PR fixes an issue when a partial download request with an incorrect range was made. Before the fix, Rails threw a _RoutingError_, but from now on it returns a "Range Not Satisfiable" return code.

[Allow ActiveRecord::QueryMethods#select to accept a hash](https://github.com/rails/rails/pull/45612)
If you prefer hashes over raw SQL strings, now you can use them with _select_ when you join tables. For instance:

    Post.joins(:comments).select(
      posts: { id: :post_id, title: :post_title },
      comments: { id: :comment_id, body: :comment_body}
    )


[Pass options accessor to Cache#fetch block](https://github.com/rails/rails/pull/45905)
With this change, it is possible to pass cache options to the fetch method, so if you use 3rd party auth tokens and store them in the cache, you can set the cache expiry time to the same as the token's:

    Rails.cache.fetch("3rd-party-token") do |name, options|
      token = fetch_token_from_remote
      # set cache's TTL to match token's TTL
      options.expires_in = token.expires_in
      token
    end


[Update guides for update\_all](https://github.com/rails/rails/pull/45853)
The outdated description of _ActiveRecord#update\_all_ in the Rails guides has been updated.

[29 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220825-20220902) contributed to Rails since last week!

Thanks for reading, until next week!
