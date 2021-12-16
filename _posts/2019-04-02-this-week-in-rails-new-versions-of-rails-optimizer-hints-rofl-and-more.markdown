---
layout: post
title: "New versions of Rails, optimizer hints, ROFL, and more"
categories: news
author: dodecadaniel
published: true
date: 2019-04-02
---

Hi there! This is [Daniel](https://twitter.com/dodecadaniel) reporting from
Brooklyn, NY.

### [New versions of Rails released][5.2.3]

[Rails 5.2.3][5.2.3] and [Rails 5.1.7][5.1.7] were released last week. Check out
the CHANGELOG and upgrade today!

[5.2.3]: https://rubyonrails.org/2019/3/28/Rails-5-2-3-has-been-released/
[5.1.7]: https://rubyonrails.org/2019/3/28/Rails-5-1-7-has-been-released/

### [Optimizer Hints and Annotations][optimizer_hints]

These two related PRs were opened within a couple hours of each other. The new
[`optimizer_hints`][optimizer_hints] method offers a simple way to
include optimizer hints in your queries. The new [`annotate`][annotate]
method offers a simple way to annotate your queries with comments.

[optimizer_hints]: https://github.com/rails/rails/pull/35615
[annotate]: https://github.com/rails/rails/pull/35617

### [The best PR that I saw this year!](https://github.com/rails/rails/pull/34405/#issuecomment-437004244)

This PR elegantly ensures that `ActiveSupport::SafeBuffer`'s `sub`, `sub!`,
`gsub`, and `gsub!` methods set back references. I learned a lot about Ruby by
reading through this code and the review comments.

### [Stop ROFL](https://github.com/rails/rails/pull/35664)

I always enjoy removing code that is no longer needed. It must be especially fun
to remove code that includes the comment "I will explain the roflscale so that
others will not rm this code."

### [Use weak references in the descendants tracker](https://github.com/rails/rails/pull/31442)

Nobody wants a memory leak. Keeping track of these references allows us to
garbage collect anonymous subclasses.

### [Advancing to dates before 1001-03-07](https://github.com/rails/rails/pull/35659)

I am constantly plagued by bugs related to time. This PR reminds me how
complicated time really is.

### [Allow disabling of console sandbox](https://github.com/rails/rails/pull/35723)

Has anybody else ever opened a production console session and fogotten to close
it? ✋ Ever done it with the `--sandbox` flag and caused your database to run
out of memory? 😭 Thanks, Rails, for protecting me against myself.

### [Improved error messages from views](https://github.com/rails/rails/pull/35308)

Thinking about contributing to Rails? Check out this PR from a first-time
contributor for inspiration.

[55 people][contributors] contributed to Rails in the last 2 weeks, including 6
first-time contributors. You can see the [full list of changes here][changes].

[contributors]: https://contributors.rubyonrails.org/contributors/in-time-window/20190315-20190330
[changes]: https://github.com/rails/rails/compare/master@%7B2019-03-15%7D...@%7B2019-03-30%7D
