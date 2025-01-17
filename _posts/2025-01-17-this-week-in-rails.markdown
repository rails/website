---
layout: post
title: "Fresh Rails apps Dependabot updates reduced to weekly, and Auth generator gets a safer logout"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-01-17
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Reduce the frequency of Dependabot updates in new projects.](https://github.com/rails/rails/pull/54265)  
This changes frequency of Dependabot updates from `daily` to `weekly` for freshly generated Rails apps.

[Authentication generator's SessionsController clears browser cache at logout](https://github.com/rails/rails/pull/54230)  
On logout the `SessionsController#destroy` action sets a "Clear-Site-Data" header to clear the browser cache. This is in order to prevent possible data leakage after logout via the browser's "back/forward cache".

[Fix inconsistency between "delete_all" & "update_all" allowed methods](https://github.com/rails/rails/pull/54231)  
After this change, trying to call `update_all` with `distinct` or a CTE (`with`, `with_recursive`) is deprecated and will raise an error in Rails 8.2. This is consistent with the behavior of `delete_all`.

[Enable "exists?" queries to be retryable](https://github.com/rails/rails/pull/54243)  
Previously, `#exists?` queries could never be retryable because `"1 AS one"` was passed as a String, which was marked as non-retryable.

[Fix incorrect expiration time in ActiveSupport::Cache::Store#fetch](https://github.com/rails/rails/pull/54236)  
This PR fixes a bug when fetching an expired entry from the cache store, due to the expiration time not being handled correctly.

[Don't include "script" or "style" content to node plain-text conversion](https://github.com/rails/rails/pull/54226)  
This is a reminder that Action Text content should not be rendered in browsers without additional sanitization first.

[Flash.add_flash_types should define helpers as private](https://github.com/rails/rails/pull/54201)  
This PR restores the pre-Rails 7.0 behavior where `notice` and `alert` actions could be defined on a controller, due to the `flash` helper methods.

[Eliminate allocations on Model.respond_to? calls](https://github.com/rails/rails/pull/54186)  
In an effort to make instantiating models cheaper (for example doing `Post.new`), `respond_to?` was optimized to avoid unnecessary allocations during initialization (as well as other queries).

[Delegate Active Storage's Filename "to_str" to "to_s"](https://github.com/rails/rails/pull/54185)  
This change allows string equality (`String#==`) to work with `ActiveStorage::Filename` objects.

[Ensure that Active Storage "analyzers" config doesn't contain nil](https://github.com/rails/rails/pull/54171)  
You may want to disable Active Storage's variant processor by setting `config.active_storage.variant_processor = nil`, but this would cause other issues when booting Rails before this patch.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-01-10%7D...main@%7B2025-01-17%7D)._
_We had [31 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250110-20250117) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
