---
layout: post
title: "This Year in Rails, a summary of 2022!"
categories: news
author: gregmolnar
published: true
date: 2022-12-30
---

Hey!

This is [Emmanuel](https://twitter.com/siaw23), [Greg](https://greg.molnar.io) and [Wojciech](https://twitter.com/morgoth85), bringing you the summary of what happened with Rails in the past year. It was a busy year with [3131 commits](https://github.com/rails/rails/compare/@%7B2022-01-01%7D...main@%7B2022-12-31%7D) from [491 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20220101-202212231) and 31 releases!
We carefully selected the most significant pull requests for inclusion, but it is possible that we may have overlooked some due to the need to keep the newsletter concise. That said, Emmanuel is compiling [a comprehensive list of pull requests](https://hayford.dev/this-week-in-rails-wrapped-an-overview-of-rails-7-1-features-part-i/) for Rails this year.

[Introducing: The Rails Foundation](https://rubyonrails.org/2022/11/14/the-rails-foundation)
In case you missed it, with eight founding members, Rails has started The Rails Foundation! Together, the founding members have contributed a total sum of $1,000,000 that will aid the foundation's mission to improve the documentation, education, marketing, and events in our ecosystem. More [here](https://rubyonrails.org/2022/11/14/the-rails-foundation).

[Stimulus gets an Outlets API](https://github.com/hotwired/stimulus/pull/576)
Around Hotwire, this pull request received a warm welcome. I reached out to the author, [Marco Roth](https://twitter.com/marcoroth_), who whipped out a documentation that perfectly summarises the Outlet API:

The Outlets API lets you reference Stimulus Controller instances and their controller element from within another Stimulus Controller by using CSS selectors. The use of Outlets helps with cross-controller communication and coordination as an alternative to dispatching custom events on controller elements.

[Allow setting YAML serialization options on a per-attribute basis](https://github.com/rails/rails/pull/45660)
This pull request adds functionality to allow setting YAML serialization options on a per-attribute basis - along with the current application-wide setting.

[Docked Rails CLI](https://github.com/rails/docked)
Setting up Rails for the first time with all the dependencies necessary can be daunting for beginners. Docked Rails CLI uses a Docker image to make it much easier, requiring only Docker to be installed.

[Add default Dockerfiles](https://github.com/rails/rails/pull/46762)
This pull request adds Docker files by default to new apps: Dockerfile, .dockerignore, bin/docker-entrypoint. These files can be skipped with --skip-docker. They're intended as a starting point for a production deploy of the application. Not intended for development (use the above mentioned Docked Rails for that). You can see more details about using it on the pull request.

[Use the error_highlight gem to locate the columns where an error was raised](https://github.com/rails/rails/pull/45818)
Ruby 3.1 added the error_highlight gem to display the fine-grained location of where an error occurred. Rails will now use error_highlight on error pages to show the column range of where an error occurred.

[Support password challenge via has_secure_password](https://github.com/rails/rails/pull/43688)

This allows a password challenge to be implemented with the same ease as a password confirmation, re-using the same error handling logic in the view, as well as the controller.

[Auto-create user and grant privileges when creating mysql databases](https://github.com/rails/rails/pull/44707)
Creating the database user and granting privileges every time you need to set up Rails locally on a new computer can be tedious. This change adds it to the MySQL build rake task, using the _root_ user with no password.

[Stop autoclosing of PRs](https://github.com/rails/rails/commit/acf48169943011834c4c885b956e29050548fa98)
While the idea of cleaning up the pull request list by nudging reviewers with the stale message and closing pull requests that didn't got a review in time could work for the maintainers, in practice it discourages contributors to submit contributions.

[Add --name option to the app generator
](https://github.com/rails/rails/pull/44941)The option _--name_ will override the application name to be different from the folder name.

[Avoid validating a unique field if it has not changed and is backed by a unique index](https://github.com/rails/rails/pull/45149)

Previously, when saving a record, Active Record would perform an extra query to check for the uniqueness of each attribute having a uniqueness validation, even if that attribute hadn't changed.
If the database has the corresponding unique index, then this validation can never fail for persisted records, and we can safely skip it.

[Allow opting out of the SameSite cookie](https://github.com/rails/rails/pull/45501)
You can now opt out of using _SameSite_ on your cookies by passing _same_site: nil_.

[Common Table Expression support added "out-of-the-box](https://github.com/rails/rails/pull/37944)
You can now build sophisticated queries with Common Table Expressions using the _.with_ query method on models. The _.with_ method allows the usage of Active Record relations without the need to manually build _Arel::Nodes::As_ nodes.

[
Allow passing Hash on secure password validations](https://github.com/rails/rails/pull/45487)
You can now pass an option hash to \_has_secure_password, with _:if / :unless / :on_ keys, to control when should the validations be executed.

[
Add _drop_enum_&nbsp;migration command for PostgreSQL](https://github.com/rails/rails/pull/45735)
This does the inverse of _create_enum_. Before dropping an enum, ensure you have dropped columns that depend on it.

[Add ActiveRecord::Base::normalizes](https://github.com/rails/rails/pull/43945)
This method can be used to declare normalizations for attribute values. Normalizations are applied when attributes are assigned or updated, and the normalized values will be persisted to the database. Normalizations are also applied to matching keyword arguments of finder methods. This allows a record to be created and later queried using an un-normalized value.

That's a wrap! Have a great New Year's Eve and see you next year!

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
