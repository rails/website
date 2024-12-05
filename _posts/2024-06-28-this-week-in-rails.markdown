---
layout: post
title: "Immutable Rails Cache Header, Local Assigns in Strict Local Templates, Threaded Active Storage Mirror Service"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-06-28
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.


[Support "immutable" directive in Cache-Control](https://github.com/rails/rails/pull/52197)  
This PR adds a new option to the `expires_in` method to support the `immutable` directive for the "Cache-Control" header.


[Also pass "local_assigns" to strict locals templates](https://github.com/rails/rails/pull/52205)  
When using [Strict Locals](https://edgeguides.rubyonrails.org/action_view_overview.html#strict-locals) in a partial, `local_assigns` is now passed to the view in order to workaround an issue where trying to access the default values of a name that is also a reserved Ruby keyword.


[Fix mailer templates to be RuboCop compliant](https://github.com/rails/rails/pull/52199)  
An issue was fixed with the mailer generator and [scaffolding](https://github.com/rails/rails/pull/52161) to make the generated code RuboCop compliant. This would impact newly generated apps, that create a mailer or a scaffold would immediately fail in the generated CI configuration by default.


[Correctly generate Devcontainer setting for applications that using mysql2 gem](https://github.com/rails/rails/pull/52175)  
This PR ensures that applications using the `mysql2` gem for their database adapter still work with the `devcontainer` command.


[Don't make rdoc generation take an unreasonable amount of time](https://github.com/rails/rails/pull/52225)  
Due to a bug in RDoc, which was only discovered recently, the `docs-preview` pipeline in Rails CI was taking _far too long_ to finish. I hope you are taking advantage of this pipeline when submitting PRs to update Rails documentation.


[Add a config for preserving timezone information when calling "to_time" on TimeWithZone object](https://github.com/rails/rails/pull/52091)  
When using Active Support's `to_time` method on a TimeWithZone object, you can now configure whether to preserve the timezone or use the UTC offset.


[Improve performance of Active Storage Mirror Service](https://github.com/rails/rails/pull/51740)  
This started as a `FIXME` in the original Active Storage implementation for Mirror Service, but now methods being called across all services are done using threads. This should improve the performance for uploads, especially if there are multiple mirrors, however you should be aware that the underlying service must be thread-safe.


[Add condensed #inspect for Pool, Adapter, Config](https://github.com/rails/rails/pull/50405)  
Previously, it was very easy to accidentally leak a database password in production logs if an error ends up calling inspect on a `ConnectionPool` or an individual connection (Adapter). This is due to the default `#inspect` output for Pools and Adapters being unnecessarily large, and both currently including passwords (through the `DatabaseConfig` of a Pool, and the internal configuration of an Adapter).


[Use Thor for built-in stats task](https://github.com/rails/rails/pull/47713)  
Currently, we use both Thor and Rake for `bin/rails` commands. We eventually want to get all the built-ins task promoted to Thor Commands. This migrates the `stats` task to Thor and deprecates the use of `bin/rake stats` directly.



_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-06-21%7D...main@%7B2024-06-28%7D)._
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240621-20240628) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
