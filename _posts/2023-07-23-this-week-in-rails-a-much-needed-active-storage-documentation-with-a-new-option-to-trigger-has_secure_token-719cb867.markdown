---
layout: post
title: "A much needed Active Storage documentation with a new option to trigger has_secure_token "
categories: news
author: Emmanuel Hayford
published: true
date: 2023-07-23
---

This is [Emmanuel](https://hayford.dev/)... you haven't heard from me in a while. I'm doing great, and have a few merged pull requests that I want to share with you.

[Don't show secrets for MessageVerifier#inspect and KeyGenerator#inspect](https://github.com/rails/rails/pull/48680)
If anyone calls a cipher in the console, it will reveal the secret of the encryptor. By overriding the inspect method to display only the class name, we can prevent accidental exposure of sensitive information.

[Active Record commit transaction on return, break and throw](https://github.com/rails/rails/pull/48600)
There's a lot of history around this PR. In short Rails 7.1 will get a new configuration option that defines whether **return** , **break** and **throw** inside a transaction block cause the transaction to be committed or rolled back. Let's take this example:

```ruby
Model.transaction do
  model.save
  return
  other_model.save
end
```

With the new **config.active\_record.commit\_transaction\_on\_non\_local\_return** set to **false** , this transaction will rollback upon hitting return, if set to **true** , the transaction will be committed.

[Document common ActiveStorage issues](https://github.com/rails/rails/pull/48722)
When attaching files to a **has\_many\_attached** association, the default behaviour is to replace any existing attachments. However, if you wish to preserve existing attachments and add new ones, you can achieve this by setting **Rails.application.config.replace\_on\_assign\_to\_many** to **false**. This PR properly documents this behaviour.


[Specify when to generate has\_secure\_token](https://github.com/rails/rails/pull/47420)
Rails has a **has\_secure\_token** method that employs **SecureRandom::base58** to generate a 24-character unique token for a model. With this PR, one can specify at what point during the model's life-cycle the token is generated via an **on:** option. This PR ensures we can do something like:

```ruby
class User < ApplicationRecord
  has_secure_token on: :initialize
end
```

By passing the **_on: :initialize_** , the token is generated in an **after\_initialize** callback as opposed a **before\_\*** callback which is the default behaviour.

In the last fourteen days, we've had [37 generous contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230707-20230721).

That's all I've got for today!




Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
