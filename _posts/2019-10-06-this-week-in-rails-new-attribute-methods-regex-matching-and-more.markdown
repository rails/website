---
layout: post
title: "New attribute methods, regex matching and more!"
categories: news
author: imtayadeway
published: true
date: 2019-10-06
---

Hello! Tim here with the latest scoop on Ruby on Rails!

### [New *_previously_was attribute methods!](https://github.com/rails/rails/pull/36836)

Your models just got a sprinkling of a little extra sugar. For any given attribute that changed, you can now do:

```ruby
Model.attribute_previously_was # => previous value
```

### [Support for matches_regex in MySQL](https://github.com/rails/rails/pull/36800)

Check out this PR for a great example of how you can now perform regular expression matching on your MySQL queries!

### [Preservation of join order fixed](https://github.com/rails/rails/pull/36805)

This fix managed to take down a number of open issues in one go! It addresses a recent regression by ensuring that the order of any user-supplied joins will be preserved as far as Active Record is able to do so.

[28 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190929-20191004) contributed to Rails last week, including 3 for the first time. If you'd like to see yourself up there, why not check out the list of [open issues](https://github.com/rails/rails/issues).
Until next time!
