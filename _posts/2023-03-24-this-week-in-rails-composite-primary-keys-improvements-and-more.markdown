---
layout: post
title: "Composite primary keys improvements and more"
categories: news
author: Wojtek
published: true
date: 2023-03-24
---

Hi, it's [Wojtek](https://twitter.com/morgoth85) with this week's changes in the Rails codebase.

[Allow specifying WHERE clauses with column-tuple syntax.](https://github.com/rails/rails/pull/47729)  
Querying through _Active Record_ `where` now accepts a tuple syntax which accepts, as a key, an array of columns and, as a value, an array of corresponding tuples.
This improves support for composite primary keys.

[Accept composite primary key in `id=`](https://github.com/rails/rails/pull/47720)  
This feature modifies the *Active Record* `id` accessor to accept an array in composite primary key contexts.

[Extract sample rate in the Audio Analyzer](https://github.com/rails/rails/pull/47749)  
Add `sample_rate` to `ActiveStorage::Analyzer::AudioAnalyzer` output.

[Run a load hook when TestFixtures is included](https://github.com/rails/rails/pull/47690)  
Introduces `active_record_fixtures` lazy load hook.
Hooks defined with this name will be run whenever `TestFixtures` is included in a class.

```ruby
ActiveSupport.on_load(:active_record_fixtures) do
  self.fixture_paths << "test/fixtures"
end
```

[Allow SQL Warnings to be ignored using error codes](https://github.com/rails/rails/pull/47650)  
*Active Record* configuration allows now to ignore the warning codes like this:
```ruby
config.active_record.db_warnings_ignore = [
  "1062" # MySQL Error 1062: Duplicate entry
]
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-03-17%7D...main@%7B2023-03-24%7D)._  
_We had [21 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230317-20230324) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
