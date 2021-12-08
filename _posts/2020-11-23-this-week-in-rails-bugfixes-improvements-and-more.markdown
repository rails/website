---
layout: post
title: "Bugfixes, improvements and more!"
categories: news
author: gregmolnar
published: true
date: 2020-11-23
---

Hey, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest news about Ruby on Rails!

### [Fix db:schema:load when table definition contains partitions](https://github.com/rails/rails/pull/40651)

This PR fixes a bug with loading the schema to MySQL if the schema contains table definitions with partitions.

### [Add strict loading to Active Storage](https://github.com/rails/rails/pull/40623)

The _strict\_loading_ option has been added to Active Storage, you can enable it like this:  

_has\_one\_attached :logo, strict\_loading: true  
has\_many\_attached :images, strict\_loading: true_    

### [Fixed odd behavior of inverse_of with multiple belongs_to to the same class](https://github.com/rails/rails/pull/40643)

An issue was introduced when foreign key validation was added to automatic\_inverse\_of and it is fixed by this PR. You can find an example and detailed explanation on the PR itself.  

### [Use FFmpeg scene detection for video previews](https://github.com/rails/rails/pull/39096)

This PR adds FFmpeg scene detection to Active Storage video previews. There are some test results on the PR to see how it works.

[17 people](https://contributors.rubyonrails.org/contributors/in-time-window/20201114-20201121) contributed to Rails since last time, have a look at the [open issues](https://github.com/rails/rails/pull/40643) and become one of them! Until next week!
