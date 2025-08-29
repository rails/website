---
layout: post
title: "Dark mode on welcome page and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-08-29
---


Hi, [Wojtek](https://x.com/morgoth85) here. Part of our newsletter team - Claudio, Greg, Vipul, and me will be at the Rails World next week. Greg and Claudio will also be MCing the Lightning Track. Come say hi and grab some stickers with newsletter logo!

Now let's take a look at this week's changes.

[Dark mode support in the app welcome page](https://github.com/rails/rails/pull/55538)  
Made by the first time Rails contributor.
Welcome to the committers community!

[Slightly speed up Active Job enqueueing with hashes/keyword arguments](https://github.com/rails/rails/pull/55544)  
The splat in the case/when is not great since it allocates an array each time it is encountered.
This avoids the allocation, uses a set for the reserved keys, and avoids string allocations for symbol keys.
About 18% faster when the hash has many string keys.

[Make local cache middleware updatable](https://github.com/rails/rails/pull/55553)  
If the cache client at `Rails.cache` of a booted application changes, the corresponding mounted middleware needs to update in order for request-local caches to be setup properly. Otherwise, redundant cache operations will erroneously hit the datastore.
  
[Add new error class for exclusion constraint violations](https://github.com/rails/rails/pull/55545)  
When an exclusion constraint is violated in PostgreSQL, the error will now be raised as *ActiveRecord::ExclusionViolation* instead of the generic *ActiveRecord::StatementInvalid*, making it easier to handle these specific constraint violations in application code.
  
[Add new error class for check constraint violations](https://github.com/rails/rails/pull/55551)  
Introduced *ActiveRecord::CheckViolation*. This follows the same pattern as other constraint violation error classes like *RecordNotUnique* for unique constraint violations, *InvalidForeignKey* for foreign key constraint violations, and *ExclusionViolation* for exclusion constraint violations.

[Add headers to engine route inspection command](https://github.com/rails/rails/pull/55550)  
When running `rails routes`, the routes of engines are shown in a separate block. It now includes the headers for those engines as well.

[Allow unsubscribing from events](https://github.com/rails/rails/pull/55487)  
Minor addition to the events API.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-08-23%7D...main@%7B2025-08-29%7D)._
_We had [14 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250823-20250829) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
