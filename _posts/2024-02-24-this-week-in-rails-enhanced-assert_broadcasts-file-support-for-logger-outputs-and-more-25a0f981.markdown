---
layout: post
title: "Enhanced assert_broadcasts, file support for Logger outputs and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-02-24
---

Hope you're having a lovely weekend. [Emmanuel](https://twitter.com/siaw23) here with yet another batch of Rails updates for you!

[assert\_broadcasts returns the messages that were broadcast
](https://github.com/rails/rails/pull/47025)  
_assert\_broadcasts_ now not only confirms the broadcast but also provides access to the messages that were broadcast. This enhancement, similar to what we have in _assert\_emails_, facilitates additional analyses of the transmitted messages.  
Here's an example:

```ruby
def test_emails_more_thoroughly
  email = assert_emails 1 do
    ContactMailer.welcome.deliver_now
  end
  assert_email 'Hi there', email.subject

  emails = assert_emails 2 do
    ContactMailer.welcome.deliver_now
    ContactMailer.welcome.deliver_later
  end
  assert_email 'Hi there', emails.first.subject
end
```

[Autosaving has\_one sets foreign key attribute when unchanged](https://github.com/rails/rails/pull/50901)  
This pull request corrected an issue where the _has\_one_ association would erroneously set the foreign key attribute even when unchanged. This behavior was inconsistent with the autosaving mechanism of _belongs\_to_ associations and could lead to unintended side effects, such as triggering an _ActiveRecord::ReadOnlyAttributeError_ when the foreign key attribute is set as read-only.

[Fix override existing join types in the query in the where.associated method](https://github.com/rails/rails/pull/51078)  
The fix now ensures that the association is joined using the correct join type (either INNER JOIN or LEFT OUTER JOIN) based on the existing joins in the scope. This prevents inadvertent overrides of existing join types and guarantees consistency in the resulting SQL queries. 

[Add parameter filter capability for redirect locations](https://github.com/rails/rails/pull/51131)  
Here we add a parameter filter capability for redirect locations. This feature utilizes the _config.filter\_parameters_ to determine which parameters should be filtered. As a result, redirects will not display filtered parameters, ensuring sensitive information remains protected. A redirect location with filtered parameters will now look like:&nbsp;_Redirected to secret.foo.bar?username=roque&password=[FILTERED]_.

[Support filenames in Logger.logger\_outputs\_to?](https://github.com/rails/rails/pull/51125)  
Well, this one is straightforward, we can now do stuff like _Logger.logger\_outputs\_to?('/var/log/rails.log')_.

That's it! We saw [43 people contribute](https://contributors.rubyonrails.org/contributors/in-time-window/20240216-20240224) to Rails this past week!

Take care :)



Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
