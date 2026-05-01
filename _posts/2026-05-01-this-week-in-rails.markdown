---
layout: post
title: "This Week in Rails: May 1, 2026"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-05-01
---


Hi, it's [Greg](https://greg.molnar.io), bringing you the latest updates about Rails.

[Updated guides await community input](https://github.com/rails/rails/issues?q=state%3Aopen%20label%3A%22rails%20foundation%22)  
The Asset Pipeline, Layouts & Rendering, Caching, and Active Job Basics Guides
have all recently been updated and are open for community input. If you have
time and would like to help review, please check the list of pull requests.

[Apply for the Rails at Scale Summit](https://forms.gle/oND4RaKL4oJp97kbA)  
Reminder to apply by May 8 for the Rails at Scale Summit (Sept 22, Austin), a
one day, invite-only gathering for engineers working on large-scale Rails
applications. 

[Enable frozen string literal by default](https://github.com/rails/rails/pull/57252)  
New Rails apps now include a `config/bootsnap.rb` file that enables frozen string
literals. This only impacts the application code, not the dependencies.

It is also possible to enable it for dependencies to reduce allocations, but
some older gems may not yet be compatible. If you do attempt this an run into
incompatibilites please do report it on the gem's bug tracker.

Additionally, `.rubocop.yml` is configured to assume frozen string literals
are enabled, if you decide not to enable frozen string literals for your application,
make sure to update the rubocop configuration accordingly.

[Fix _find_signed_ for models with a composite primary key](https://github.com/rails/rails/pull/57245)  
`ActiveRecord::SignedId::ClassMethods#find_signed` raises an `ArgumentError`
for any model that declares a composite primary key (e.g. `self.primary_key =
[:shop_id, :id]`). The bang variant `find_signed!` works correctly and this
pull request makes `find_signed` consistent with `find_signed!` and `find`.

[Allow using aliases for unions in _from_ clause](https://github.com/rails/rails/pull/54829)  
This pull request fixes the issue of `#from` acceptings unions, but silently
ignoring passed aliases. For instance a query like this: `SomeModel.from(union,
:some_models)`, produced an error `missing FROM-clause entry for table
"some_models"` in PostgreSQL before this fix.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-04-24%7D...main@%7B2026-05-01%7D)._  
_We had [11 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260424-20260501) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
