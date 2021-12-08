---
layout: post
title: "This week in Rails: 4000 contributors, Rails bot abides and more!"
categories: news
author: kaspth
published: true
date: 2015-09-04 15:12:03 -0700
---

Back away, bystander.

There's a flame war going on, and we'd best contain it soon — the people need their Rails news!

[Kasper](https://twitter.com/kaspth) pats flames and waters ferns in hopes we douse the mighty fires.

I'll go brush up on campfire safety rules. Here, you read these.

## Featured

### [Over 4000 people contributed to Rails](http://contributors.rubyonrails.org/contributors/in-time-window/20150828-201509042100)

A little while ago we crossed 4000 contributors – that's crazy! Remember the old days when only one person contributed to Rails? Well, I wasn't him so I don't. Wups!

36 people made their mark this week. If you're new, peruse the [list](https://github.com/rails/rails/issues) and join us. If you do you'll find a new friend waiting for you.

### [Everybody meet Rails bot](https://github.com/rails-bot)

That friend is Rails bot. Fresh off the assembly line to bring those new to Rails a welcome message and tips. You'll even get a reviewer assigned to help move things along. Come say hi with a pull request.

## Improved

### [Confirmation validation reduced sensitivity to case](https://github.com/rails/rails/pull/17351)

If you're validating an email confirmation and you don't care about the case, it can be skipped with `case_sensitive: false`

### [Migrations explains which part is irreversible](https://github.com/rails/rails/pull/21412)

In Rails 5 if you're using a migration method that isn't reversible (meaning it can't rollback) you will be warned about the offending method and how to roll your way out of that mess.

## Fixed

### [Passing a relation to `cache` uses `Relation#cache_key`](https://github.com/rails/rails/pull/21416)

Banking on the `cache_key` added to relations a while ago, any `cache` calls in your views correctly use that instead of turning the relation into an array.

### [`bin/rails test -e` requires an argument](https://github.com/rails/rails/pull/21423)

In Ruby's OptionParser, if you wrap a parameter in brackets it's considered optional.

By breaking it out of the brackets, writing `bin/rails test -e` with an empty argument now raises a more appropriate error.

### [Array Inquirer finds both symbols and strings](https://github.com/rails/rails/pull/21421)

Using `any?(:idea)` on `["innovative", "idea"].inquiry` wouldn't find anything because the symbol passed to any didn't match any of the strings in the array.

Now everyone expects the string inquiry — and there's room for "innovative" "ideas" once again.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-08-28%7D...@%7B2015-09-04%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

