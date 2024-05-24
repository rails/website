---
layout: post
title: "Better error message, opt-in devcontainers and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-05-24
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Raise a descriptive error when a Store column is misconfigured](https://github.com/rails/rails/pull/51898)  
This pull request improves `ActiveRecord::Store` to raise a descriptive exception if the column is not either structured (e.g., PostgreSQL _hstore_/_json_, or MySQL _json_) or declared serializable via `ActiveRecord.store`.
Previously, a `NoMethodError` would be raised when the accessor was read or written, but with this change, a descriptive `ConfigurationError` is raised.

[Don't enable automatically_invert_plural_associations by default](https://github.com/rails/rails/pull/51896)   
Because it can cause a lot of hard to detect issues, `automatically_invert_plural_associations` is turned off by default and you can opt-in if you want to give it a try.

[Make devcontainers opt in and create a devcontainer command](https://github.com/rails/rails/pull/51880)   
This pull request has been created because dev containers will be an opt in feature in Rails 7.2. So, new apps will only get a devcontainer if you pass the `--devcontainer` flag to `rails new`. Additionally, you will be able to generate a devcontainer for an existing app with `bin/rails devcontainer`.

[Make public method for _schema_cache_ignored_table?_](https://github.com/rails/rails/pull/51878)  
This pull request adds a public method for checking if a table is ignored by the schema cache.  
Previously, an application would need to reimplement `ignored_table?` from the schema cache class to check if a table was set to be ignored. This change adds a public method to support this and updates the schema cache to use that directly.

```ruby
ActiveRecord.schema_cache_ignored_table = ["developers"]
ActiveRecord.schema_cache_ignored_table?("developers")
=> true
```

[Don’t configure Kamal storage volume if not needed](https://github.com/rails/rails/pull/51838)  
This pull request changes the app generator to only configure a Docker persistent storage volume in Kamal for sqlite or Active Storage. If using a different database and the `--skip-active-storage` option, configuration can be skipped.  
In another pull request, the same change was done for the `storage/` directory.

[Add rubocop and GitHub Actions to plugin generator](https://github.com/rails/rails/pull/51822)  
This pull request adds Rubocop and GitHub Actions to the plugin generator to make it similar to the app generator. This can be skipped using `--skip-rubocop` and `--skip-ci`.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-05-17%7D...main@%7B2024-05-24%7D)._  
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240517-20240524) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
