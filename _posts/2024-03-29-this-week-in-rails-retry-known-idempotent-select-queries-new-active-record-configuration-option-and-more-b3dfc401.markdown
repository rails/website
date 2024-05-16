---
layout: post
title: "Retry known idempotent SELECT queries, New Active Record configuration option, and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-03-29
---

Greetings! I'm [Emmanuel Hayford](https://twitter.com/siaw23), here to bring you your weekly instalment of "This Week In Rails". Let's dive straight into it.
&nbsp;
Two new guides are now open for community review. If you are well versed in Action View, partials, and helpers, please review and submit your feedback here:

- [Action View Overview PR](https://github.com/rails/rails/pull/51435)
- [Action View Helpers PR](https://github.com/rails/rails/pull/51432)


[Add config.active\_record.permanent\_connection\_checkout setting](https://github.com/rails/rails/pull/51349)  
This setting determines the action taken when _ActiveRecord::Base.connection_ is accessed: whether it raises an error, emits a deprecation warning, or does nothing.

_ActiveRecord::Base.connection_ acquires a database connection from the pool and maintains it until the request or job concludes. However, this behaviour may prove undesirable in environments with more threads or fibers than available connections.

This configuration facilitates the identification and elimination of code utilising _ActiveRecord::Base.connection_, encouraging migration to _ActiveRecord::Base.with\_connection_ instead. The default behaviour remains unaltered.

[Make ActiveSupport::BacktraceCleaner copy filters on dup](https://github.com/rails/rails/pull/51447)  
Enhance _ActiveSupport::BacktraceCleaner_ to replicate filters and silencers during duplication and cloning.


Previously, duplication still resulted in shared internal silencers and filters arrays, leading to state leakage.

[Ensure necessary options are added to association options](https://github.com/rails/rails/pull/51408)  
Noting the typo in _:through_, take the following code sample as an example:


```ruby
class User < ApplicationRecord
    has_many :courses
    has_many :assignments, trough: :courses
end
```


You'd get a misleading error along the lines of

"Unknown key: :trough. Valid keys are: :class\_name, :anonymous\_class, :primary\_key, ..., :index\_errors (ArgumentError)",

with this pull request, you'll now get a clearer message, more like:

"Unknown key: :trough. Valid keys are: :class\_name, :anonymous\_class, :primary\_key, ..., :index\_errors, :through (ArgumentError)".

Note that in the second error message _:through_ is included in the list of valid options.

[Retry known idempotent SELECT queries on connection-related exceptions](https://github.com/rails/rails/pull/51336)  
Implements a mechanism to automatically retry _SELECT_ queries that are known to be idempotent in the event of connection-related exceptions.

Queries constructed through Arel tree traversal or based on known model attributes are inherently idempotent and can be safely retried upon encountering a connection error. Previously, certain adapters like _TrilogyAdapter_ would raise _ActiveRecord::ConnectionFailed: Trilogy::EOFError_ when faced with a connection error during a request.

We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240322-20240329) to the Rails codebase this past week!


Take care.





Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
