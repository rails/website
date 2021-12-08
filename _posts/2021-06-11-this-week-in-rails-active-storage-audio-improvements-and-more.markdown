---
layout: post
title: "Active Storage audio improvements and more"
categories: news
author: morgoth85
published: true
date: 2021-06-11
---

Hi, [Wojtek](https://twitter.com/morgoth85) here with the summary of changes from the last week.

### [Add audio analyzer to Active Storage](https://github.com/rails/rails/pull/42425)

It extracts duration and bit rate of audio files and stores it in the record metadata column.

### [Recognize audio presence in the video blobs](https://github.com/rails/rails/pull/42392)

The _metadata_ attribute of video blobs has a new boolean key named _audio_ that is set to _true_ if the file has an audio channel and _false_ if it doesn't.

### [Add attributes_for_database to Active Record](https://github.com/rails/rails/pull/42409)

Returns attributes with values for assignment to the database. It works both for Active Record and Active Model objects.

### [Get rid of cattr_accessor in ActiveRecord::Base](https://github.com/rails/rails/pull/42451)

More work on improving performance by eliminating class variables. This is a followup to [previous change](https://github.com/rails/rails/pull/42442) where detailed benchmark can be found.  
  


[23 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210607-20210611) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-06-07%7D...main@%7B2021-06-11%7D). Until next week!
