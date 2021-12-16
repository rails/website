---
layout: post
title: "New Rails bug fix releases, closer to multi dbs and more!"
categories: news
author: kaspth
published: true
date: 2018-03-31
---

Hey there, esteemed readers of Rails' public repo tea leaves. It's [Kasper](https://twitter.com/kaspth) bringing you the latest hot cup to steel transcendence from.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180324-20180331)

Here goes a hey-o to the 16 contributors this week! You can make the list no doubt, try finding an&nbsp;[open issue](https://github.com/rails/rails/issues).

### [Rails 5.0.7 and 5.1.6 are out](https://rubyonrails.org/2018/3/29/Rails-5-0-7-and-5-1-6-have-been-released)

New bug fix releases are out, so you can upgrade your apps today.

### [Easy Multi databases: basic rake tasks](https://github.com/rails/rails/pull/32274)

For applications with multiple databases you always had to create your own rake tasks. No more! One of the stepping stones for Rails 6.0 to have multi db support out of the box is in.

### [Compare dates with before? and after?](https://github.com/rails/rails/pull/32185)

To compare two dates and/or times we'd use the standard \< and \> operators. Now date arithmetic is a little easier with _today.before?(tomorrow)_ and _today.after?(yesterday)_. Thus joining _today.between?(yesterday, tomorrow)_. Your app now has no excuse not to show up on time!

### [Allow prefixing store attributes](https://github.com/rails/rails/pull/32306)

In the vein of _delegate :name, to: :person, prefix: true_ adding _person\_name_, your store attributes now houses the same trick to squash duplicate accessors. Also sports specific prefixes to really clear the path of method name clashing.

### [Favor app-wide config.force_ssl for HTTPS](https://github.com/rails/rails/pull/32277)

Rails has long had a way to incrementally force users onto HTTPS, a controller level force\_ssl! Times have changed and Rails 6.0 deprecates that option in favor of the app-wide config.force\_ssl so every endpoint will use HTTPS.

There were many more changes to Rails' codebase, which you can check out [here](https://github.com/rails/rails/compare/master@%7B2018-03-24%7D...@%7B2018-03-31%7D).  
Until next week!
