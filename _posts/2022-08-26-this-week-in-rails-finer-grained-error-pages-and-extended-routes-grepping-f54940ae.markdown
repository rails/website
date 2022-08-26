---
layout: post
title: "Finer-grained error pages and extended routes grepping"
categories: news
author: p8
published: true
date: 2022-08-26
---

Hi, this is [Petrik](https://twitter.com/four54) with more Rails updates.

[Use the _error\_highlight_&nbsp;gem to locate the columns where an error was raised](https://github.com/rails/rails/pull/45818)
Ruby 3.1 added the _error\_highlight_ &nbsp;gem to display the fine-grained location of where an error occurred. Rails will now use _error\_highlight_ on error pages to show the column range of where an error occurred.

[Extend _bin/rails routes --grep_&nbsp;to also filter routes by matching against a path](https://github.com/rails/rails/pull/45874)
When looking at a path like _/users/orhantoy/settings_ it's not always obvious which controller action corresponds to this route. _bin/rails routes --grep_ will now also match on a path.

    $ bin/rails routes --grep /cats/1
    Prefix Verb URI Pattern Controller#Action
       cat GET /cats/:id(.:format) cats#show
           PATCH /cats/:id(.:format) cats#update
           PUT /cats/:id(.:format) cats#update
           DELETE /cats/:id(.:format) cats#destroy

[Do not return CSP headers for 304 Not Modified responses](https://github.com/rails/rails/pull/45859)

After the fix for [CVE-2022-22577](https://github.com/advisories/GHSA-mm33-5vfq-3mm3), Rails sends CSP headers for every response, even if the response contains no HTML. However, when we return a 304 Not Modified without any HTML, browsers will update the CSP header, but otherwise reuse the cached HTML. If that HTML contains a script tag with a nonce, this nonce may no longer match a new nonce from the CSP header. This has been fixed by not returning the CSP headers for 304s.

[Normalize virtual attributes on&nbsp;_ActiveRecord::Persistence#becomes_](https://github.com/rails/rails/pull/42650)

When source and target classes have different attributes, _becomes_ will now adapt attributes such that the extra attributes from the target class are added.

We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20220818-20220825) since last week.&nbsp;

That's it for this week!

