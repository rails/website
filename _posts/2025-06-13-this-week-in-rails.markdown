---
layout: post
title: "New Rails Foundation Guides PR, fix affected_rows for SQLite adapter and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-06-13
---

Hi, it's [Vipul](https://www.saeloun.com/team/vipul/). Happy Friday 🎃!   
Let's explore this week's changes in the Rails codebase.

**New Guides Pull Request for review**  
A new guides [Pull Request](https://github.com/rails/rails/pull/55188) is up, which updates the Active Record Encryption Guide. If you are well versed in these areas, please review and submit your feedback on the PR!

We also have 2 other Guides PRs open where you can help out! 
- Update [Threading and Code Execution Guide](https://github.com/rails/rails/pull/55179) 
- Move and merge [PostgreSQL Guide into the API](https://github.com/rails/rails/pull/55135) and other guides   

[Fix affected_rows for SQLite adapter](https://github.com/rails/rails/pull/55180)  
This update refines the SQLite adapter's `affected_rows` logic. It addresses two issues: `#changes` wasn't reset for non-mutating queries like SELECT, while `#total_changes` could overcount due to including cascading deletes. 
The new approach uses `#total_changes` to detect whether any rows were affected and `#changes` to return the most accurate count.

[Add ability to change the transaction isolation for all pools within a block](https://github.com/rails/rails/pull/55176)
This change introduces a new method, `ActiveRecord.with_transaction_isolation_level`, which allows temporarily changing the transaction isolation level for all database pools accessed within a block. This simplifies handling multiple databases or shards by avoiding the need to loop through each pool individually, improving performance and easing transaction management.

[Active Job Continuations improvements](https://github.com/rails/rails/pull/55174)  
This PR improves Active Job’s continuation system by adding runtime instrumentation for each step, introducing configurable job resumption options; 
preventing checkpoints inside database transactions; adjusting checkpoint timing to before each step; and ensures errors are raised if step order changes when resuming.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-06-06%7D...main@%7B2025-06-13%7D)._
_We had [8 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250606-20250613) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
