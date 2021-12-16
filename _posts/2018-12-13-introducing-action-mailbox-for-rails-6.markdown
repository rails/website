---
layout: post
title: "Introducing Action Mailbox for Rails 6"
categories: news
author: dhh
published: true
date: 2018-12-13
---

[Action Mailbox](https://github.com/rails/actionmailbox) is the second brand new framework coming to Rails 6 (the first was [Action Text](https://github.com/rails/actiontext)). It serves to [route incoming emails](https://github.com/rails/actionmailbox/blob/master/lib/action_mailbox/base.rb#L6) to controller-like mailboxes for processing in Rails. It ships with ingresses for [Amazon SES](https://github.com/rails/actionmailbox/blob/master/app/controllers/action_mailbox/ingresses/amazon/inbound_emails_controller.rb), [Mailgun](https://github.com/rails/actionmailbox/blob/master/app/controllers/action_mailbox/ingresses/mailgun/inbound_emails_controller.rb), [Mandrill](https://github.com/rails/actionmailbox/blob/master/app/controllers/action_mailbox/ingresses/mandrill/inbound_emails_controller.rb), and [SendGrid](https://github.com/rails/actionmailbox/blob/master/app/controllers/action_mailbox/ingresses/sendgrid/inbound_emails_controller.rb). You can also handle inbound mails directly via the [Postfix ingress](https://github.com/rails/actionmailbox/blob/master/app/controllers/action_mailbox/ingresses/postfix/inbound_emails_controller.rb).

The inbound emails are turned into [InboundEmail](https://github.com/rails/actionmailbox/blob/master/app/models/action_mailbox/inbound_email.rb) records using Active Record and feature lifecycle tracking, storage of the original email on cloud storage via Active Storage, and responsible data handling with [on-by-default incineration](https://github.com/rails/actionmailbox/blob/master/app/models/action_mailbox/inbound_email/incineratable.rb). These inbound emails are routed asynchronously using Active Job to one or several dedicated mailboxes, which are capable of interacting directly with the rest of your domain model.

The framework was, like Action Text and Active Storage, extracted from [Basecamp 3](https://basecamp.com). We've been using a related approach to route everything from forwarded emails to email replies to messages and discussions. After extracting the ideas into Action Mailbox, we reintegrated the framework into Basecamp, and we've been running the code we're sharing today for over a month in production.

Yes, Rails already had an anemic way of [receiving emails using Action Mailer](https://guides.rubyonrails.org/action_mailer_basics.html#receiving-emails), but it was poorly flushed out, lacked cohesion with the task of sending emails, and offered no help on integrating with popular inbound email processing platforms. Action Mailbox supersedes the receiving part of Action Mailer, which will be deprecated in due course.

Rails 6 is getting closer, but it's still a ways off – we're hoping to start the beta process in early 2019. Action Mailbox is already in pretty decent shape, though, and you can even use it with Rails 5.2 applications, if you fancy dancing on the wild side. Just be prepared for things changing as we work our way through community review and towards merging it into [rails/rails](http://github.com/rails/rails).

The Action Mailbox framework is based off ideas hatched by Jeremy Daer, and this particular implementation was done as a collaboration between yours truly and George Claghorn.

As part of the introduction of Action Mailbox, I plan to record a video showing off the basics in the near future. But the code is ready and somewhat documented for anyone to dive into already. So why sit on a good thing!

Between Action Text and Action Mailbox, Rails 6 is already shaping up to be one of the biggest releases in the history of the framework. And we're not even done yet! Our plan is tentatively to have a release candidate version ready for [RailsConf 2019 in Minneapolis](https://railsconf.com). Please help us make that promise a reality by trying out Action Mailbox!
