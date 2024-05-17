---
layout: post
title: "Start of Rails 8 development, 7.0.8.2 & 7.1.3.3 released, Kamal by default, and lots more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-05-17
---

Hey everyone, Happy Friday!

[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. Let's dive in.


[Development of Rails 8.0 starts now 🎉](https://github.com/rails/rails/commit/37fd0e7fe4990c4e5db10813bae3bba10c8be479)  
This week marks the official start of Rails 8.0 development. Stay tuned for more updates on Rails 8.0 features and changes ahead 🎉.

[Rails 8 will target Ruby 3.3+ only for new apps](https://github.com/rails/rails/commit/dc96d29d2bd64948c444c76e5aabc641da6f7aa0)  

[Add Kamal by default to Rails 8 ](https://github.com/rails/rails/pull/51798)  
This PR adds Kamal for deployment by default, which includes generating a Rails-specific `config/deploy.yml`.
This can be skipped using  `--skip-kamal`. Check out more about Kamal on its [official site](https://kamal-deploy.org/). 

[Add support for :if_not_exists and :force options to create_schema](https://github.com/rails/rails/pull/51790)  
This change adds missing support for `:if_not_exists` and `:force` options to `create_schema`.

[7.0.8.2 and 7.1.3.3 have been released](https://github.com/rails/rails/commit/f3f2773c52c5a2948a287fec4104b1ad01630a5d)       
Two new Rails version have been released upgrading Trix to 2.1.1 to fix CVE-2024-34341

Check here for more details - [XSS Vulnerabilities in Trix Editor](https://github.com/basecamp/trix/security/advisories/GHSA-qjqp-xr96-cj99)

[Fix ActiveRecord::Relation#touch_all with custom attribute aliased as attribute for update ](https://github.com/rails/rails/pull/51787)  
Before this change if we had something like

```ruby
create_table :users do |t|
  t.timestamp :legacy_updated_at
end

class User < ActiveRecord::Base
  alias_attribute :updated_at, :legacy_updated_at
end

User.touch_all(:updated_at)
```

then ActiveRecord would not resolve `updated_at` to its alias correctly and resulted to a query that updates the same column twice.
This PR fixes the behavior to correctly resolve the alias.

[Support duration in ActiveSupport::XmlMini ](https://github.com/rails/rails/pull/51651)  
Before this change `ActiveSupport::XmlMini` could not handle duration type in XML, which is one of the primitive data type. This PR adds support for duration type using `ActiveSupport::Duration`.    

[Support touch_all in batches](https://github.com/rails/rails/pull/51785)  
This change adds support for `touch_all` in batches.  This is similarly supported for update_all/delete_all/etc)

```ruby
  Post.in_batches.touch_all
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-05-11%7D...main@%7B2024-05-17%7D)._  
_We had [27 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240511-20240517) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
