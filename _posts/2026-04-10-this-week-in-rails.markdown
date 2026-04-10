---
layout: post
title: "Explicit query: and body: kwargs for integration tests and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-04-10
---


Hi, I'm [Emmanuel Hayford](https://hayford.dev/). Here's what caught my eye in Rails this week.

[Fix GET+JSON+params in integration tests for API-only apps](https://github.com/rails/rails/pull/57140)  
`params:` in integration test helpers was ambiguous for GET requests with `as: :json` — it wasn't clear whether params should go in the query string or request body. The original workaround converted GET to POST with `X-Http-Method-Override`, which broke API-only apps that exclude `Rack::MethodOverride`. New `query:` and `body:` kwargs give explicit control: `query:` always lands in the URL query string, `body:` always goes into the encoded request body, and `params:` keeps its existing behavior unchanged.

```ruby
get  "/search", query: { q: "rails" }, as: :json
post "/search", query: { page: 1 }, body: { filters: {} }, as: :json
```

[Add request.safe_method? and request.unsafe_method?](https://github.com/rails/rails/pull/57124)  
Two new predicate methods on `ActionDispatch::Request` let you ask whether the current HTTP method is safe (GET, HEAD, OPTIONS, TRACE) or unsafe (everything else), per [RFC 9110](https://httpwg.org/specs/rfc9110.html#safe.methods).

[Update Action Cable origin check to respect X-Forwarded-Host](https://github.com/rails/rails/pull/56775)  
The `allow_same_origin_as_host` check in `allow_request_origin?` compared the browser's Origin header against the raw `HTTP_HOST`, which fails behind a reverse proxy where the internal host differs from the public one. This updates the check to use `request.host_with_port` and `request.ssl?` instead, consistent with how the rest of Rails resolves the host.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-04-03%7D...main@%7B2026-04-10%7D)._  
_We had [9 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260403-20260410) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
