---
layout: post
title: "New Maintenance policy, CVE releases, Rails World talks and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-10-18
---

Hey everyone, Happy Friday! 

[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. Let's dive in!

[Rails World talks are out!](https://rubyonrails.org/2024/10/15/rails-world-2024-recap)  
Check out the recap of these talks in this [blog post](https://rubyonrails.org/2024/10/15/rails-world-2024-recap), 
or head over [to Rails' YouTube](https://www.youtube.com/watch?v=-cEn_83zRFw&list=PLHFP2OPUpCeb182aDN5cKZTuyjn3Tdbqx) for the full playlist.

[New Rails maintenance policy and end of maintenance announcements](https://rubyonrails.org/2024/10/15/new-maintenance-policy-and-eol-annouments)  
These changes are designed to provide clarity on support timelines and help to plan Rails upgrades effectively. 
Full details of the new policy can be found on the [Rails website.](https://rubyonrails.org/maintenance)

[Rails Versions 6.1.7.9, 7.0.8.5, 7.1.4.1, and 7.2.1.1 have been released!](https://rubyonrails.org/2024/10/15/Rails-Versions-7-0-8-5-7-1-4-1-and-7-2-1-1-have-been-released)  
These are security patches addressing 4 possible ReDoS (Regular expression Denial of Service) attacks.
All of these only affect Ruby versions below 3.2, so if you are using any of these old Rubies, its time to update Rails versions at your earliest convenience.

[Fix db:migrate:reset task](https://github.com/rails/rails/pull/53240)  
Before this fix `db:migrate:reset` was broken, because we started to load the schema before migrating. This prevented migrations from running. 
This patch empties the schema before migrating, ensuring that migrations run as expected.

[Improve ActionController::TestCase to expose a binary encoded request.body](https://github.com/rails/rails/pull/53298)  
This change improves `ActionController::TestCase` to expose a binary encoded `request.body`. The rack spec clearly states:

> The input stream is an IO-like object which contains the raw HTTP POST data.
> When applicable, its external encoding must be “ASCII-8BIT” and it must be opened in binary mode.

Until now, its encoding was generally UTF-8, which doesn't accurately reflect production behavior.

[Fix marshalling of unsaved associated records in 7.1 format](https://github.com/rails/rails/pull/53360)  
Before this change the 7.1 format would only marshal associated records if the association was loaded. 
But associations that would only contain unsaved records would be skipped.

[Update vendored Trix version to 2.1.7](https://github.com/rails/rails/pull/53329)  
This change updates vendored Trix version to [2.1.7](https://github.com/basecamp/trix/releases/tag/v2.1.7), which includes support for the upcoming security fix in [#51729](https://github.com/rails/rails/pull/51729) and [enhanced form support](https://github.com/basecamp/trix/pull/1190) (ElementInternals and HTML5 validations).

[Do more params parsing on Rails instead of Rack](https://github.com/rails/rails/pull/53193)  
Rack is looking at some minor changes to how they parse query strings. 
To be more independent of these upstream changes when handling various scenarios, 
this Pull Request introduces various improvements to handle parsing more on Rails side. 

[Revamped Action Mailer Guide](https://github.com/rails/rails/pull/52905)  
This Pull Request updates and improves the "Action Mailer Basics" Rails Guide documentation. 
Check it out and suggest improvements if you are familiar around these parts.

[Support Prism for ActionView::Template.spot](https://github.com/rails/rails/pull/53316)  
This change adds support for the Prism parser with `ErrorHighlight` in Rails.

[Fix NoMethodError when content type is set to nil in tests](https://github.com/rails/rails/pull/53325)  
This Pull Request changes `ActionController::TestCase`'s content type check to account for nil content types, 
so Rails can raise a more descriptive `Unknown Content-Type` error instead of a slightly obscure `NoMethodError`.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-10-12%7D...main@%7B2024-10-18%7D)._
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241012-20241018) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
