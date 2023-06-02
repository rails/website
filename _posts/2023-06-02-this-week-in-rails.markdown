---
layout: post
title: "HTML5 sanitizer, path_params and more"
categories: news
author: Wojtek
published: true
date: 2023-06-02
---

Hi, [Wojtek](https://twitter.com/morgoth85) here. Let's explore this week's changes in the Rails codebase.

[Update Action View to use HTML5 standards-compliant sanitizers](https://github.com/rails/rails/pull/48293)  
Add support for HTML5 standards-compliant sanitizers, and default to `Rails::HTML5::Sanitizer` in the Rails 7.1 configuration if it is supported.
Action View's HTML sanitizers can be configured by setting `config.action_view.sanitizer_vendor`. Supported values are `Rails::HTML4::Sanitizer` or `Rails::HTML5::Sanitizer`.

[Add "path_params" to "url_for"](https://github.com/rails/rails/pull/43770)  
The `url_for` helpers now support a new option called `path_params`. This might be useful in situations where you only want to add a required param that is part of the route's URL but for other route not append an extraneous query param.

[Assign auto populated columns on Active Record object creation](https://github.com/rails/rails/pull/48241)  
Changes record creation logic to allow for the `auto_increment` column to be assigned right after creation regardless of it's relation to model's primary key.
PostgreSQL adapter benefits the most from the change allowing for any number of auto-populated columns to be assigned on the object immediately after row insertion utilizing the `RETURNING` statement.

[Handle "sanitize_options" in "simple_format" helper](https://github.com/rails/rails/pull/48355)  
Sanitize functionality can now be configured via passed options.

[Set "default_shard" from "connects_to" hash](https://github.com/rails/rails/pull/48353)  
Some applications may not want to use `:default` as a shard name in their connection model. Unfortunately Active Record expects there to be a `:default` shard because it must assume a shard to get the right connection from the pool manager. Rather than force applications to manually set this, `connects_to` can infer the default shard name from the hash of shards and will now assume that the first shard is your default.

[Add health check configuration](https://github.com/rails/rails/pull/48222)  
Added `health_check_path` and `health_check_application` config to mount a given health check rack app on a given path.
Useful when mounting Action Cable standalone. 

[Support VISUAL env var and prefer it over EDITOR](https://github.com/rails/rails/pull/48374)  
When opening a temporary file for editing encrypted files.

[Allow an Active Storage attachment to be removed via a form post](https://github.com/rails/rails/pull/48339)  
Attachments can already be removed by updating the attachment to be nil such as:
`User.find(params[:id]).update!(avatar: nil)`

However, a form cannot post a nil param, it can only post an empty string. But, posting an empty string would result in an `ActiveSupport::MessageVerifier::InvalidSignature: mismatched digest` error being raised, because it's being treated as a signed blob id.
Now, nil and an empty string are treated as a delete, which allows attachments to be removed via:
`User.find(params[:id]).update!(params.require(:user).permit(:avatar))`

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-05-26%7D...main@%7B2023-06-02%7D)._  
_We had [23 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230526-20230602) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
