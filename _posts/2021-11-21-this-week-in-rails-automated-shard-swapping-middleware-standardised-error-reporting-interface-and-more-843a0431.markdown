---
layout: post
title: "Automated shard swapping middleware, standardised error reporting interface and more!"
categories: news
author: gregmolnar
published: true
date: 2021-11-21
---

Hey, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest news about Ruby on Rails.

[Support \<form\> elements without [action]](https://github.com/rails/rails/pull/42051)
By default, when a _form_ is declared without an _action_ attribute, browsers will encode the form's fields into the current URL. Prior to this commit, none of the _form_ construction variations supported declaring a _form_ without an _action_ attribute, _form\_with_, _form\_for_, and _form\_tag_ all default to _url\_for({})_ when a _url_ or _action_ option is omitted, but with this change, when they are set to _false_, the form will be rendered without an action attribute.

[Support authenticity\_token option in button\_to helper](https://github.com/rails/rails/pull/43417)
This PR adds support for passing _authenticity\_token_ option to _button\_to_, the same way as in _form\_with_ and _form\_for_ calls.

[Introduce field\_name view helper](https://github.com/rails/rails/pull/43409)
The _field\_name_ helper and corresponding _FormBuilder#field\_name_ method provides an Action View compliant way of overriding an element's name attribute. For instance you can do the following:

    text\_field\_tag :post, :tag, name: field\_name(:post, :tag, multiple: true) # =\> \<input type="text" name="post[tag][]"\>


[Automatic shard swapping middleware](https://github.com/rails/rails/pull/43665)
This PR adds a middleware that can be used for automatic shard swapping. The design is similar to the database selector middleware in that the resolver is provided by the application to determine which shard to
switch to. The selector also takes options (the only supported one is _lock_ yet) to change the default behavior of the middleware.

[Standardised error reporting interface](https://github.com/rails/rails/pull/43625)
_Rails.error_ is a new error reporting interface, with two block based methods. _handle_, which swallows errors and forwards them to the subscribers:

    Rails.error.handle do 1 + '1' # raises TypeError end 1 + 1 # This will be executed


and _record_, which forwards the errors to the subscribes but lets it continue rewinding the call stack:

    Rails.error.record do 1 + '1' # raises TypeError end 1 + 1 # This won't be executed.


For cases where the blocked based API isn't suitable, the lower level _report_ method can be used:

    Rails.error.report(error, handled: true / false)


[Filter attributes in SQL logs with debug](https://github.com/rails/rails/pull/42006)
SQL queries are logged when the Rails log level is set to _:debug_ and previously, filter attributes were not masked in the logs in this case. With this change, filter attributes will be masked as _[FILTERED]_ in the logs, but he filtration is applied only when _prepared\_statement_ is enabled.

[Speed up collection rendering and add support for multifetch collection handling in jbuilder](https://github.com/rails/jbuilder/pull/501)
This PR speeds up collection rendering by taking advantage of the existing collection renderer in Action View, and it adds support for _multifetch_ collection handling to make it more efficient.

[33](https://contributors.rubyonrails.org/contributors/in-time-window/20211106-20211120) people contributed to Rails since last time. We couldn't cover all the changes, but you can see all of them [here](https://github.com/rails/rails/compare/@%7B2021-11-06%7D...main@%7B2021-11-20%7D). Until next time!


