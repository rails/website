---
layout: post
title: "Preprocessed Active Storage variants and more"
categories: news
author: wojtek
published: true
date: 2023-07-07
---

Hi, [Wojtek](https://twitter.com/morgoth85) here. Let's see what changed in the Rails codebase.

[Add an option to preprocess Active Storage variants in background job](https://github.com/rails/rails/pull/47473)  
Active Storage variants are processed on the fly when they are needed but sometimes we're sure that they are accessed and want to process them upfront.
```ruby
class User < ApplicationRecord
  has_one_attached :avatar do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100], preprocessed: true
  end
end
```

[Introduce sanitizer_vendor config for Action Text](https://github.com/rails/rails/pull/48644)  
Use `Rails::HTML5::SafeListSanitizer` by default in the Rails 7.1 configuration if it is supported.
Action Text's sanitizer can be configured by setting `config.action_text.sanitizer_vendor`.

[Improve performance of ActiveSupport::JSON.encode](https://github.com/rails/rails/pull/48614)  
This about doubles the performance of `.to_json`/`ActiveSupport::JSON.encode`. The benchmarks are included in the pull request.

[Allow opting in/out of `Link preload` headers when calling `stylesheet_link_tag` or `javascript_include_tag`](https://github.com/rails/rails/pull/48553)  
```ruby
# will exclude header, even if setting is enabled:
javascript_include_tag("http://example.com/all.js", preload_links_header: false)
```

[Disable database prepared statements when query logs are enabled](https://github.com/rails/rails/pull/48631)  
Prepared statements and query logs are incompatible features due to query logs making every query unique so Active Record will create a new prepared statement for each, potentially exhausting system resources.

[Fix has_one through singular building with inverse](https://github.com/rails/rails/pull/48674)  
Allows building of records from an association with a _has_one_ through a singular association with inverse. For _belongs_to_ through associations, linking the foreign key to the primary key model isn't needed.

[Don't double-encode nested `field_id` and `field_name` index](https://github.com/rails/rails/pull/47436)  
This fixes the bug with adding an extra index parameter in form builder for deeply nested associations.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-06-30%7D...main@%7B2023-07-07%7D)._  
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230630-20230707) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
