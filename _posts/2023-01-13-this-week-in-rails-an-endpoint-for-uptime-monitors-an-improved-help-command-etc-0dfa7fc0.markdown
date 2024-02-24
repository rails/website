---
layout: post
title: "An endpoint for uptime monitors, an improved help command, etc"
categories: news
author: Emmanuel Hayford
published: true
date: 2023-01-13
---

Halløj. It's [me](https://hayford.dev/about/) again, bringing you the usual goodies from Rails.

[Show relevant commands when calling help](https://github.com/rails/rails/pull/46164)
This pull request improves the user experience by displaying the appropriate commands for the context in which the user is running _rails -h_ or _rails_. When outside of a Rails application, the output will be the options for the _rails new_ command. When inside a Rails application, the common Rails commands will be displayed. This eliminates confusion for users who may have expected to see different commands in different contexts.

[Let HWIA#transform_keys take a Hash argument like Ruby's Hash#transform_keys](https://github.com/rails/rails/pull/46846)
The _HashWithIndifferentAccess#transform_keys_ method now mirrors the functionality of Ruby's _Hash#transform_keys_ method by accepting a Hash argument.

[Let delegate define method with proper arity when delegating to a class](https://github.com/rails/rails/pull/46875)
This change improves the _delegate_ method by ensuring that the method being defined has the proper arity when delegating to a class. As a result, the defined method is significantly faster - up to 3.5 times faster when there are no arguments. However, it should be noted that in order to take advantage of this performance improvement, the target method being delegated to must be defined prior to declaring the delegation.

[Add a default health controller](https://github.com/rails/rails/pull/46936)
This pull request introduces a new endpoint for load balancers and uptime monitors by adding a _Rails::HealthController#show_ method and mapping it to the "/up" path in newly generated Rails applications. With this new endpoint, Load balancers and uptime monitors can easily track whether or not an app is up.&nbsp;

If, however, you need to monitor database, Redis or internal network connections to microservices that your application relies on, you will need to implement monitoring yourself.

[Run test:prepare before bin/rails test commands](https://github.com/rails/rails/pull/46664)
This pull request streamlines the process of running all tests in a CI environment by making _bin/rails_ _test_ equivalent to _bin/rake test_ when it comes to preparing tests. This means that running _bin/rails_ _test_ alone will now run all the tests, eliminating the need for the additional _bin/rake test_ command.

However, it's important to note that by default, running _bin/rails test_ alone will not include system tests as they are generally slower. To include system tests as well, you can add an additional step to your CI pipeline that runs _bin/rails test:system_, or you can change your first step to _bin/rails test:all_ which runs all the tests including the system tests.

[Change dockerfile from using Node 19 to match dev environment](https://github.com/rails/rails/pull/46794)
This pull request improves the generated Dockerfile by installing the locally installed versions of Node and Yarn, decoupling the installation of libvips from Node, and adding the installation of _node_modules_ by running _yarn_.

We had [33 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230107-20230113) to Rails this week.

See you in the next issue!

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
