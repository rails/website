---
layout: post
title: "Devcontainers without VSCode, a deprecation and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-01-24
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Eliminate queries loading dumped model schema on Postgres](https://github.com/rails/rails/pull/54333)  
This pull request improves resiliency by avoiding the need to open a database connection to load the type map, while defining attribute methods at boot, when a schema cache file is configured on PostgreSQL databases.

[Allow passing in a date or time to ActiveSupport::Testing::TimeHelpers#freeze_time](https://github.com/rails/rails/pull/54303)  
This change allows the `#freeze_time` testing helper to accept a date or time argument.

```ruby
    Time.current # => Sun, 09 Jul 2024 15:34:49 EST -05:00
    freeze_time Time.current + 1.day
    sleep 1
    Time.current # => Mon, 10 Jul 2024 15:34:49 EST -05:00
```

[Make column name optional for _index_exists?_](https://github.com/rails/rails/pull/54298)  
This pull request makes the column name optional for `index_exists?`. It aligns well with `remove_index` signature, where the index name doesn't need to be derived from the column names.

[Add a script for using dev containers outside VSCode](https://github.com/rails/rails/pull/54285)  
I you want to use the devcontainer info, but don't want to use VSCode, the small script added by this pull request will be handy. It reads the devcontainer JSON file and runs docker commands based on the information in the JSON file.

[Add _application-name_ metadata to application layout](https://github.com/rails/rails/pull/54257)  
To better support Progressive Web Apps(PWAs), this pull request adds an
`application-name` meta tag to application layout.

[JSON serialized attributes can return symbolized keys](https://github.com/rails/rails/pull/54172)  
With this change, options can now be passed to `ActiveRecord::Coder::JSON` when instantiating the coder. This allows to pass in the `symbolize_names` option for instance:

```ruby
serialize :config, coder: ActiveRecord::Coder::JSON.new(symbolize_names: true)
```

[Deprecate _insert_all_ with unpersisted associations](https://github.com/rails/rails/pull/53920)  
This pull request deprecates using `insert_all`/`upsert_all` with unpersisted records in associations. Using these methods on associations containing unpersisted records will now show a deprecation warning, as the unpersisted records will be lost after the operation. This will become an error in Rails 8.2.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-01-17%7D...main@%7B2025-01-24%7D)._
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250117-20250124) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
