---
layout: post
title: "Omit webdrivers gem from new apps Gemfile, support for filtering tests by line range and more!"
categories: news
author: vipulnsward
published: true
date: 2023-08-04
---


Hi! This is [Vipul](https://www.saeloun.com/team/vipul) bringing you the latest from this week's changes in the Rails codebase.

[Introduce config.dom_testing_default_html_version and use Rails::Dom::Testing to parse HTML in test helpers](https://github.com/rails/rails/pull/48682)  

[Previously](https://github.com/rails/rails/pull/48523) support was added to `Rails::Dom::Testing` for HTML5. This may cause issues if we still want to rely on HTML4 based testing.
This change adds a new configuration option `config.dom_testing_default_html_version` to allow users to configure the HTML version 4/5 to use when parsing HTML in test helpers.

[Support filtering tests by line ranges](https://github.com/rails/rails/pull/48807)

This change allows new syntax to filter tests by line ranges. For example, the following command runs tests from line 10 to 20.

```ruby
$ rails test test/models/user_test.rb:10-20
```

[Support NULLS NOT DISTINCT in Postgres 15+](https://github.com/rails/rails/pull/48608)

This change adds full support `NULLS [NOT] DISTINCT` for PostgreSQL 15+ indexes.

Previous work was done to allow the index to be created in a migration, but it was not supported in `schema.rb`. 
Additionally, the matching for `NULLS [NOT] DISTINCT` was not in the correct order, which could have resulted in inconsistent schema detection.
  

[Improve performance of JSON HTML entity escaping](https://github.com/rails/rails/pull/48669)

[John](https://github.com/jhawthorn) has been making various speed improvements to `.to_json`. 
This latest change improves the performance of HTML entity escaping by ~2x.
Overall these changes put the performance of `.to_json` to be around ~4.5 faster than Rails 7.0.

[Allow escaping of literal colons in ActionRecord::Sanitization#replace_named_bind_variables](https://github.com/rails/rails/pull/48852)

This commit adds ability to allow escaping of literal colon characters in `sanitize_sql_*` methods when named bind variables are used. For example:

```ruby
sanitize_sql_array(["TO_TIMESTAMP(:date, 'YYYY/MM/DD HH12\\:MI\\:SS')", date: "foo"])
#  => "TO_TIMESTAMP('foo', 'YYYY/MM/DD HH12:MI:SS')"
```

[Omit webdrivers gem from Gemfile template](https://github.com/rails/rails/pull/48847)

As of Selenium 4.6, [the Selenium Manager is capable of managing Chrome Driver installations and integrations](https://github.com/titusfortner/webdrivers/tree/43f8ac436cc4121c903c1c611dfe76088ef6cbab#update-selenium-manager).
This make the requirement on `webdrivers` gem to be obsolete. This commit makes changes to omit `webdrivers` gem dependency from `Gemfile` template so that newly generated Apps won't need it.


[Adds Arel::FactoryMethods#cast(node, type)](https://github.com/rails/rails/pull/48873)  

`CAST(field as type)` is a widely supported SQL function. This PR adds native Arel support for this named function with a `cast(field, type)` helper.

```ruby
product_table = Product.arel_table
product_table.cast(product_table[:position], "integer")
# => CAST("products"."position" as integer)
```

[Save screenshot path on system test failure ](https://github.com/rails/rails/pull/48863)  

Lots of CI tools support showing a system spec failure screenshot in their UI. 
This Pull Request changes `ActionDispatch::SystemTesting::TestHelpers::ScreenshotHelper` to save the screenshot path in the test metadata on failure, 
which can be used by CI tools to show the screenshot.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-07-29%7D...main@%7B2023-08-04%7D)._  
_We had [27 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230729-20230804) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
