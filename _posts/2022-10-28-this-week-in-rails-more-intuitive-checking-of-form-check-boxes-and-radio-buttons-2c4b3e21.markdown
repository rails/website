---
layout: post
title: "More intuitive checking of form check boxes and radio buttons"
categories: news
author: morgoth85
published: true
date: 2022-10-28
---

Hi, [Wojtek](https://twitter.com/morgoth85) here with this week's news from the Rails world.  
  

[Support checked as a keyword argument in check\_box\_tag and radio\_button\_tag](https://github.com/rails/rails/pull/45527)  
Now the form helper

    f.check_box "admin", checked: false

works as expected. Previously it had to be passed as positional argument.  
[  
Allow Active Record adapter "execute" to retry on connection-related exception](https://github.com/rails/rails/pull/46273)  
Setting _allow\_retry_ to _true_ causes the database to reconnect and retry executing the SQL statement in case of a connection-related exception. Should only be used for known idempotent queries.  
  
[Expose the "request.parameter\_filter"](https://github.com/rails/rails/pull/46280)  
Feature is useful when one wants to filter some hashes based on the same parameter filter as the request:

    request.parameter_filter.filter("secret" => "foo", "something" => "bar"))
    #=> { "secret" => "[FILTERED]", "something" => "bar" }

  
[Adds "validate" to foreign keys and check constraints in database schema file](https://github.com/rails/rails/pull/46339)  
 Previously, _schema.rb_ would not record if _validate: false_ had been used when adding a foreign key or check  
 constraint, so restoring a database from the schema could result in foreign keys or check constraints being  
 incorrectly validated.  
  
[Fix "MemoryStore" to preserve entries TTL when incrementing or decrementing](https://github.com/rails/rails/pull/46305)  
The change is to be consistent with how _MemCachedStore_ and _RedisCacheStore_ behaves, ie don't remove the expiration value.  
  
There were [23](https://contributors.rubyonrails.org/contributors/in-time-window/20221022-20221028) contributors to Rails this week. You can browse all the changes [here](https://github.com/rails/rails/compare/@%7B2022-10-22%7D...main@%7B2022-10-28%7D).  
Until next time.

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>