---
layout: post
title: "Delete multi entries from cache, bugfixes and more"
categories: news
author: morgoth85
published: true
date: 2019-09-20
---

Hi. This is [Wojtek](https://twitter.com/morgoth85). Rails 6 is with us for some time and we all can see it is a stable and solid release. Thank you one more time to all that tested the pre-releases and helped in ensuring that the final version is in a best possible shape.  

Now let's see some recent additions to Rails.

### [Added delete_multi method to Active Support Store Cache](https://github.com/rails/rails/pull/36927)

Improves performance for deleting many entries at once when supported by underlying store like _Redis._

### [Serialize classes and modules with Active Job](https://github.com/rails/rails/pull/37159)

Classes and modules can now be passed to job as argument without a need for custom serializer.

### [Added email_address_with_name method to Action Mailer](https://github.com/rails/rails/pull/36454)

Properly escapes email addresses with names without worrying if it includes special characters in it.

### [Fixed Range include? method for endless argument](https://github.com/rails/rails/pull/36460)

Endless range was introduced in Ruby 2.6 and beginless range in upcoming Ruby 2.7.

### [Fixed Active Support Duration comparison](https://github.com/rails/rails/pull/37013)

Guard against non numeric attributes to avoid faulty comparisons.

[58 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190825-20190920) contributed to Rails since the last time. You can check the full list of changes [here](https://github.com/rails/rails/compare/master@%7B2019-08-25%7D...@%7B2019-09-20%7D).
Until next time.
