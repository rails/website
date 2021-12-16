---
layout: post
title: "This week in Rails: Rails 4.2.3, Rails 4.1.12 and more!"
categories: news
author: claudiob
published: true
date: 2015-06-26 16:27:25 -0700
---

#### 

Hey there!

This is [Claudio](https://claudiob.github.io), celebrating a historical moment on the road to a better framework for everyone.

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150620-201506262300)

28 people contributed to the framework by having their commits merged into [rails/rails](http://github.com/rails/rails) this week. Thanks and keep up the good work!

### [Rails 4.2.3 and 4.1.12 have been released!](https://rubyonrails.org/2015/6/26/Rails-4-2-3-and-4-1-12-have-been-released)

What are you waiting for? Run `bundle update rails` and get four months of updates in your codebases!

## New Stuff

### [Integrate protected\_attributes with strong parameters](https://github.com/rails/protected_attributes/pull/43)

Are you still on Rails 3? Do you wish you could use strong parameters? Check out this commit to protected\_attributes…&nbsp;it might just make your day.

### [Sprockets 4.0 is coming](https://github.com/rails/sprockets/commit/962ea355041001d7551d1f4ef1b1235629613228)

The development of rails/sprockets moves on and… needs your help! If you'd like to contribute to its next version, don't hesitate to contact any Rails core team member.

## Fixed

### [Raise the proper error on namespaced-association type mismatch](https://github.com/rails/rails/pull/20545)

Assigning a wrong value to a namespaced association used to raise `NameError`, but will now correctly raise `ActiveRecord::AssociationTypeMismatch`

## One More Thing™

### [Kasper Timm Hansen is a Rails Committer team member](http://github.com/kaspth)

Kasper started contributing one year ago and has not stopped (240 commits and counting)! Thanks for being awesome and for your wonderful [blog posts](https://dev.firmafon.dk/blog).

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-06-20%7D...@%7B2015-06-26%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

