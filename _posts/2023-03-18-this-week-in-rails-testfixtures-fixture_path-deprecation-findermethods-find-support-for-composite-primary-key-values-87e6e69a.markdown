---
layout: post
title: "TestFixtures#fixture_path deprecation, FinderMethods#find support for composite primary key values, etc."
categories: news
author: Emmanuel Hayford
published: true
date: 2023-03-18
---

Kaixo! Long time no see. [Emmanuel Hayford](https://twitter.com/siaw23) here. This week, a lot happened in Rails, so much so that to keep this edition short, I've had to cut some [equally good](https://github.com/rails/rails/pull/45041) [pull requests](https://github.com/rails/rails/pull/47655) out. Here's what I have for you today:

[Allow querying by the whole record for composite query constraints
](https://github.com/rails/rails/pull/47692)Suppose you have defined an association between two models, _BlogPost_ and _Comment_, with composite query constraints using the _has_many_ method:

_class BlogPost
&nbsp; has_many :comments, query_constraints: [:blog\_id, :blog\_post\_id]
end_

You can now query blog posts that are associated with a specific set of comments by passing the _comments_ objects as a parameter to the _where_ method:

_comments = Comment.first(2)
BlogPost.where(comments: comments).to_a_ For the time being, however, association types like _belongs_to_, _has_one_, _has_many_through_ and polymorphic associations are not covered. You can take a dig at this if you fancy!

[ActiveRecord::FinderMethods#find support for composite pk values](https://github.com/rails/rails/pull/47664)
_ActiveRecord::FinderMethods#find_ now supports passing sets of composite primary key values like:

_Cpk::Book.find([[1, 1], [1, 2]])_

and treats values as values of the composite primary key columns but only for models with the primary_key being an Array.

[Use Thor for built-in restart task](https://github.com/rails/rails/pull/47619)
This is part of an effort to migrate _bin/rails_ from Rake to Thor, but a nice side-effect of this change is that you can now call _bin/rails restart_ outside of the app directory, like so:

_my_app/bin/rails restart_

[Adds documentation for Arel::Nodes::Node](https://github.com/rails/rails/pull/47438)
Arel is a private API, meaning there haven't been any meaningful efforts to document it in the past. This hasn't stopped gem authors and application programmers from using it -- we might as well document it, and that is what this pull request does with a significant portion of some documentation for Arel for anyone who needs it.

[Introduce TestFixtures#fixture_paths](https://github.com/rails/rails/pull/47675)
In this one, we deprecate _TestFixtures#fixture_path_ in favour of _TestFixtures#fixture_paths._

With this update, it is now possible to specify multiple fixture paths in your Rails application by using the _fixture_paths_ accessor. By default, the _test/fixtures_ directory will continue to serve as the primary fixture path for your app. However, if you need to include fixtures from other directories, you can specify additional fixture paths using the _fixture_paths_ method.

This allows for something like:

_ActiveSupport::TestCase.fixture_paths \<\< "component1/test/fixtures"
ActiveSupport::TestCase.fixture_paths \<\< "component2/test/fixtures"_

[Delegated Type supports customisable foreign_type column](https://github.com/rails/rails/pull/45041)
The _{role}\_class_ method now respects the _foreign_type_ option when used with the _delegated_type_ method. This means that you can use _delegated_type_ with non-conventional _{role}\_type_ column names by specifying the _foreign_type_ option. This option is forwarded to the underlying _belongs_to_ association that _delegated_type_ wraps, allowing you to specify the name of the foreign key type column.

I'd like to share some conference news: [RailsConf Atlanta](https://railsconf.org/) is coming up on April 24th - April 26th 2023, you can still buy your tickets now if you plan on attending. [RubyKaigi](https://rubykaigi.org/2023/) is also not far off on May 11th - 13th, 2023.

We saw [32 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230310-20230317) this past week! See you next week.

Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
