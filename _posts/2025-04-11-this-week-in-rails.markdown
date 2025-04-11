---
layout: post
title: "Refactoring Active Record Signed ID verifiers"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-04-11
---


Hi, it's [zzak](https://github.com/zzak). Hopefully everyone got their Rails World CFPs in on time! Let's explore this week's changes in the Rails codebase.

[Allow allocated Active Records to lookup associations](https://github.com/rails/rails/pull/54892)  
Previously, the association cache isn't setup on allocated record objects, so association lookups will crash. 
Test frameworks like mocha use allocate to check for stubbable instance methods, which can trigger an association lookup.  

[ActiveRecord Signed ID with global Rails.application.message_verifiers](https://github.com/rails/rails/pull/54422)  
This change ensures a unified configuration for all message verifiers, making it easier to rotate secrets and upgrade signing algorithms. 
See [`message_verifiers`](https://api.rubyonrails.org/classes/Rails/Application.html#method-i-message_verifiers) for more details.  

[Allow enabling unencrypted data fallback at a per-attribute level](https://github.com/rails/rails/pull/51100)  
Previously the global configuration for `support_unencrypted_data` could be overridden on a per-attribute bases to disable it, but not the other way around.  

[Fix "create_or_find_by" not rolling back a transaction](https://github.com/rails/rails/pull/54845)  
This change addresses an edge case when rolling back a transaction inside a nested transaction would be silently ignored.  

[Add support for filtering notes by tag in "/rails/info/notes"](https://github.com/rails/rails/pull/54876)  
When viewing the Rails notes browser, you can now filter by tag, like "FIXME," "TODO," and "OPTIMIZE".  

[Fix "Enumerable#sole" for infinite collections](https://github.com/rails/rails/pull/54341)  
This PR optimizes the `Enumerable#sole` method to handle infinite collections more efficiently.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-04-04%7D...main@%7B2025-04-11%7D)._
_We had [15 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250404-20250411) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
