---
layout: post
title: "Attaching files on save, Rails notes and more"
categories: news
author: morgoth85
published: true
date: 2018-07-13
---

Hello Ruby fans. This is [Wojtek](https://twitter.com/morgoth85) bringing you latest news from World Cup fields.  
I mean Ruby on Rails codebase...

### [Support readonly option in SQLite3](https://github.com/rails/rails/pull/33242)

To ensure no modifications are allowed on SQLite3 database you can now pass "readonly" option.

### [Support "_html" suffix for array in translations](https://github.com/rails/rails/pull/32361)

Now in HTML safe translation key, you can use array of values that will not be escaped in the view.

### [Change "rails notes" to use Rails command](https://github.com/rails/rails/pull/33220)

Previously it was using Rake task under the hood. Now it's a pure command. Old "rails notes ANNOTATION=custom" becomes "rails notes --annotations custom". Old syntax will continue to work outputting a deprecation message.

### [Store newly-uploaded files on save rather than assignment](https://github.com/rails/rails/pull/33303)

Active Storage will now store attachables assigned to a record after the record is saved rather than immediately. This will help in supporting validations before persisting the file.

### [Allow to explicitly specify whether to output Rails's log to stdout ](https://github.com/rails/rails/pull/28266)

New option "--log-to-stdout" was added to "rails server" command. Enabled by default in development when not daemonized (as it was before).

[25 people](http://contributors.rubyonrails.org/contributors/in-time-window/20180701-20180713) contributed to Rails this past 2 weeks when not watching World Cup. You can see all the changes [here](https://github.com/rails/rails/compare/master@%7B2018-07-01%7D...@%7B2018-07-15%7D).  
  
Let's wish ourselves a great final game on Sunday. Until next week!
