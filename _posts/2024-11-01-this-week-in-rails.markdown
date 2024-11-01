---
layout: post
title: "Default Regexp.timeout and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-11-01
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Cast _query_cache_ value when using URL configuration for Active Record](https://github.com/rails/rails/pull/53491)  
When configuring the Active Record connection with `DATABASE_URL`, due to not
casting the value to an integer, the query cache was not set to the given value.
This pull request fixes this issue.

[Default _Regexp.timeout_ to 1s](https://github.com/rails/rails/pull/53490)  
This pull requests sets `Regexp.timeout` to 1 second by default to improve security over Regexp Denial-of-Service attacks. If a timeout was already configured in the application, Rails won't override it.

[Authenticate the Action Cable connection too](https://github.com/rails/rails/pull/53444)  
The new authentication generator will add authentication to Action Cable too
now.

[Expand documentation of _.attributes_for_inspect_](https://github.com/rails/rails/pull/53472)  
This pull request adds more documentation to the `.attributes_for_inspect`
method of Active Record.

[Fix bundle install for vendored gems](https://github.com/rails/rails/pull/53466)  
This change fixes an issue with the generated Dockerfile to copy the
`vendor` folder to the image, otherwise vendored gems threw an error due to not
being on the filesystem.

[Improve accessibility of Rails Guides](https://github.com/rails/rails/pull/51499)  
The accessibility of the Rails Guides is improved further. There are quite a bit of changes, read the description for all the details.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-10-25%7D...main@%7B2024-11-01%7D)._
_We had [33 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241025-20241101) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
