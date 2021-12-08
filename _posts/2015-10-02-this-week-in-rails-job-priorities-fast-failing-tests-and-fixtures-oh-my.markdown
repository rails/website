---
layout: post
title: "This week in Rails: Job Priorities, Fast Failing Tests and Fixtures... Oh My!"
categories: news
author: gregmolnar
published: true
date: 2015-10-02 16:07:29 -0700
---

Hello everyone! This is [Greg](https://twitter.com/gregmolnar) with help from [Andy](https://twitter.com/andatki) (welcome!) bringing you the latest news from Rails.

## Featured

### [This weeks Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150925-201510022300)

33 people contributed to Rails this week, including 3 first-time contributors! If you are interested in becoming a contributor, have look on the [issues list](https://github.com/rails/rails/issues).

## New Stuff

### [Add job priorities to ActiveJob](https://github.com/rails/rails/pull/19425)

This commit allows you to set the priority for your jobs with Active Job, if your backend supports this. For more details head over to the [pull request](https://github.com/rails/rails/pull/19425).

### [Fail fast reporting in test runner](https://github.com/rails/rails/pull/21430)

If you call your test suite with `--fail-fast` it will abort the test run on the first failure.

### [Allow fixtures files to set the model class in the file itself](https://github.com/rails/rails/pull/20574)

From now on you can set the model class in your fixture files, but `set_fixture_class` on your model will override it.

## Fixed

### [Handle nested fields\_for by adding indexes to record\_name](https://github.com/rails/rails/pull/21431)

This commit adds indexes to the inputs in the inner blocks of a nested `fields_for`, so Rails won't raise an exception on the submission of the form.

### [Add a hidden field on the collection\_radio\_buttons](https://github.com/rails/rails/pull/18303)

This commit fixes an issue with `strong_parameters` if you have a single `collection_radio_button` on your form and the form is submitted with no selection.

### [Fix parameter sanitization for query methods](https://github.com/rails/rails/pull/21539)

With this commit the Action Controller parameters are sanitized before being passed to the Active Record query methods.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-09-26%7D...@%7B2015-10-02%7D).

Until next time!

