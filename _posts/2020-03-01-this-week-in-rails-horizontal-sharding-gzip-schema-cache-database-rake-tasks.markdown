---
layout: post
title: "This week in Rails - horizontal sharding, gzip schema cache, database rake tasks"
categories: news
author: dodecadaniel
published: true
date: 2020-03-01
---

Greetings, all! [Daniel] here, together with my pup (🐶 woof!) bringing you the
latest news in Rails.

[Daniel]: https://twitter.com/dodecadaniel

### [Add support for horizontal sharding](https://github.com/rails/rails/pull/38531)

The good folks at GitHub have done an incredible amount of work to support
multiple databases in Rails. This week brings horizontal sharding. Rails
applications can now connect to and (manually) switch between multiple shards.

### [Support gzip for the schema cache](https://github.com/rails/rails/pull/38566)

Katrina continues to work on the schema cache, this time by adding gzip support
for both the YAML and the Marshal serialization strategies. This can come in
handy when trying to deploy particularly large schemas in constrained
environments.

### [Add additional multi-database rake tasks](https://github.com/rails/rails/pull/38566)

It is now possible to run `rails db:schema:dump`, `rails db:schema:load`, `rails
db:structure:dump`, `rails db:structure:load` and `rails db:test:prepare` on a
specific database. This was previously only possible for `rails db:create`,
`rails db:drop`, and `rails db:migrate`. Excellent work on your first few
commits to Rails, Kyle!

### [Eliminate a hash allocation when rendering templates](https://github.com/rails/rails/pull/38570)

I included this one for the commit message more than for the code change itself.
The benchmark taught me a bit about Action Controller, Action View, and how to
write a good benchmark.

That's all for now. [18 people contributed] since last time, including some
first-time contributors. Check out the [full list of changes].

[18 people contributed]: https://contributors.rubyonrails.org/contributors/in-time-window/20200223-20200229
[full list of changes]: https://github.com/rails/rails/compare/master@%7B2020-02-23%7D...@%7B2020-02-29%7D
