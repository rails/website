---
layout: post
title: "Added fixture method and bugfixes"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-03-01
---


Hi, [Wojtek](https://twitter.com/morgoth85) from this side. Let's explore this week's few changes in the Rails codebase.

[Rails security update releases](https://rubyonrails.org/2024/2/21/Rails-Versions-6-1-7-7-7-0-8-1-and-7-1-3-2-have-been-released)  
Rails Versions 6.1.7.7, 7.0.8.1, and 7.1.3.2 have been released last week which contain fixes for security issues.

[Expose a generic "fixture" method in tests](https://github.com/rails/rails/pull/51213)  
To avoid conflicting methods, in example with Minitest, it is possible now to load fixtures like this:

```ruby
assert_equal "Ruby on Rails", web_sites(:rubyonrails).name
assert_equal "Ruby on Rails", fixture(:web_sites, :rubyonrails).name
```

[Introduce assert_initializer](https://github.com/rails/rails/pull/51176)  
Compliments the existing *initializer* generator action.

[Set default_url_options values in development/test environments](https://github.com/rails/rails/pull/51191)  
 Prior to this commit, new Rails applications would raise *ActionView::Template::Error* if a mailer included a url built with a *\*_path* helper.

[Fix error message for not derived foreign key in Active Record](https://github.com/rails/rails/pull/51165)  
Using *query_constraints* method with a single non-primary-key column used to raise as expected, but with an incorrect error message. This has been fixed to raise with a more appropriate error message.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-02-25%7D...main@%7B2024-03-01%7D)._
_We had [13 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240225-20240301) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
