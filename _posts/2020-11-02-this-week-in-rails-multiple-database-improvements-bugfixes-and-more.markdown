---
layout: post
title: "Multiple database improvements, bugfixes and more!"
categories: news
author: gregmolnar
published: true
date: 2020-11-02
---

Hey, this is&nbsp;[Greg](https://twitter.com/gregmolnar) bringing you the latest news about the Rails framework.

### [Show outstanding migrations on the error page](https://github.com/rails/rails/pull/40203)

This PR adds the details of the pending migrations to the pending migrations error message so you will know from the error what's pending.

### [Add ability to set per param encoding](https://github.com/rails/rails/pull/40457)

Previously you could skip encoding which would encode all parameters on an action as ASCII\_8BIT, but after this change you can specify the param\_encoding for any one parameter on an action in your controller. An example can be found [here](https://github.com/rails/rails/pull/40457/files#diff-473b3fd0c8a9ff822bf8f3e3db2a7bcd2270e840468847c7667177282c2f005dR53).

### [Fix resources being fetched twice when crossorigin attribute is used](https://github.com/rails/rails/pull/40426)

When you load a script or css (by using javascript\_include\_tag or stylesheet\_link\_tag respectively) with crossorigin attribute applied, Rails currently causes some browsers to fetch these resources twice. That is because crossorigin in the link header preload directive and on the resource itself need to match in order for browsers to re-use a resource.  
This PR changes it so that the link header directives include the same crossorigin values as those that have been passed to the resources themselves, which allows browsers to reuse the preloaded resource.

### [Implement `connecting_to` method](https://github.com/rails/rails/pull/40486)

Sometimes you need to have a different default connection but aren't calling the connection with a block. An example is booting a console in reading mode. This PR adds the ability for a script to set a specific connection on boot while preserving the behaviour of connected\_to for application code.

### [Warn if we can't read the yaml to create database tasks](https://github.com/rails/rails/pull/36560)

For multiple databases Rails attempts to generate the tasks by reading the  
database.yml before the Rails application is booted but there are some complex cases when this is not possible and Rails will simply issue a warning saying it couldn't infer the database tasks from the database.yml.

### [Fix TimeWithzone bug](https://github.com/rails/rails/pull/40448)

There was a rounding off issue when we were comparing TimeWithZone times with DateTime and this PR fixes that.

[29 people](https://contributors.rubyonrails.org/contributors/in-time-window/20201024-20201031) contributed to Rails since last week. Check out [the detailed list of all changes](https://github.com/rails/rails/compare/@%7B2020-10-24%7D...master@%7B2020-10-31%7D). Until next week!
