---
layout: post
title: "Query command for database queries and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-04-17
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's see what's new in the Rails on this finally sunny day (at least in this part of Earth ;-)

[Query command for read-only database queries](https://github.com/rails/rails/pull/57156)  
Adds *rails query* — a read-only database query command with structured JSON output.

```bash
rails query "Account.where(plan: 'premium').limit(2)"
```

```json
{
  "columns": ["id", "name", "plan", "created_at"],
  "rows": [
    [1, "Acme", "premium", "2025-01-15T10:30:00Z"],
    [2, "Widgets Co", "premium", "2025-03-22T14:00:00Z"]
  ],
  "meta": {
    "row_count": 2,
    "query_time_ms": 4.2,
    "page": 1,
    "per_page": 100,
    "has_more": false,
    "sql": "SELECT \"accounts\".* FROM \"accounts\" WHERE \"accounts\".\"plan\" = 'premium' LIMIT 2"
  }
}
```

There are much more possibilities and more subcommands available, like *query schema*, *query models*, and *query explain*.

[Add charset=utf-8 to Content-Type for static CSS and HTML files](https://github.com/rails/rails/pull/57188)  
*ActionDispatch::FileHandler#try_files* now appends *; charset=utf-8* to the Content-Type header for *CSS* and *HTML* static files.
This is consistent with the rest of the Rails stack, which already assumes UTF-8 in all possible places. 

[Add offline fallback page to the PWA scaffold](https://github.com/rails/rails/pull/57184)  
New Rails apps now include an *app/views/pwa/offline.html.erb* template and a commented *get "offline"* route, alongside the existing manifest and service worker. The service worker template also includes a commented example for caching and serving the offline page.

[Rewrite the Layouts and Rendering guide](https://github.com/rails/rails/pull/57152)  
New documentation pull request awaiting community review.

[Fix IO copy stream writing to Action Controller Live Buffer](https://github.com/rails/rails/pull/57190)  
In addition return the number of bytes written from *write* method.

[Fix reset_counters when using string IDs](https://github.com/rails/rails/pull/57187)  
Makes it consistent with other Active Record methods that already accepted string IDs.

[Use hash lookup for exact-match regexp filters in ParameterFilter](https://github.com/rails/rails/pull/57166)  
When *ParameterFilter* is initialized with anchored regexp filters like */^code$/* or */\Atoken\z/*, extract the literal string and store it in a Hash for O(1) lookup instead of iterating all regexps with *.any?*.

[Make the warning about Active Storage redirect and proxy mode stronger](https://github.com/rails/rails/pull/55865)  
The existing documentation implied that the "hard to guess" URLs Active Storage generates provides some sort of access control. This is not the case. Rather, as they rely on *ActiveRecord::SignedId*, they're tamper proof and don't expose the underlying id.
The security risk of using these URLs isn't that someone will guess them. Rather, it is if the URLs are ever leaked, the files will be exposed.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-04-10%7D...main@%7B2026-04-17%7D)._  
_We had [12 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260410-20260417) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
