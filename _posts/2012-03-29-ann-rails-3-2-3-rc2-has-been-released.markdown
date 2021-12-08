---
layout: post
title: "[ANN] Rails 3.2.3.rc2 has been released!"
categories: []
author: spastorino
published: true
date: 2012-03-29 15:00:00.000000000 +00:00
---
Rails 3.2.3.rc2 has been released.

### IMPORTANT

Rails 3.2.3 introduced a new option that allows you to control the behavior of remote forms when it comes to `authenticity_token` generation. If you want to fragment cache your forms, authenticity token will also get cached, which isn't acceptable. However, if you only use such forms with ajax, you can disable token generation, because it will be fetched from `meta` tag. Starting with 3.2.3, you have an option to stop generating `authenticity_token` in remote forms (ie. `:remote => true` is passed as an option), by setting `config.action_view.embed_authenticity_token_in_remote_forms = false`. Please note that this will break sending those forms with javascript disabled. If you choose to not generate the token in remote forms by default, you can still explicitly pass `:authenticity_token => true` when generating the form to bypass this setting.

The option defaults to `true`, which means that existing apps are *NOT* affected.

This RC includes this authenticity_token change and 2 bug fixes described below.
If there are no more release blockers, I will be releasing the final version on March 30th (tomorrow).
If you find something please open an issue on github and let me know through email (santiago _at_ wyeworks.com), tweet ([spastorino](http://twitter.com/spastorino)) or cc me on the github issue.

### CHANGES since 3.2.3.rc1

*Action Mailer*

* No changes


*Action Pack*

* Fix #5632, render :inline set the proper rendered format. *Santiago Pastorino*
* Fix textarea rendering when using plugins like HAML. Such plugins encode the first newline character in the content. This issue was introduced in https://github.com/rails/rails/pull/5191 *James Coleman*


*Active Model*

* No changes


*Active Record*

* No changes


*Active Resource*

* No changes


*Active Support*

* No changes


*Railties*

* No changes


### SHA-1

* SHA-1 (actionmailer-3.2.3.rc2.gem) = 
* SHA-1 (actionpack-3.2.3.rc2.gem) = 
* SHA-1 (activemodel-3.2.3.rc2.gem) = 
* SHA-1 (activerecord-3.2.3.rc2.gem) = 
* SHA-1 (activeresource-3.2.3.rc2.gem) = 
* SHA-1 (activesupport-3.2.3.rc2.gem) = 
* SHA-1 (rails-3.2.3.rc2.gem) = 
* SHA-1 (railties-3.2.3.rc2.gem) = 

You can find the list of all changes made between 3.2.3.rc1 and
3.2.3.rc2 [here](https://github.com/rails/rails/compare/v3.2.3.rc1...v3.2.3.rc2) and an exhaustive list of changes between 3.2.2 and 3.2.3.rc2 [here](https://github.com/rails/rails/compare/v3.2.2...v3.2.3.rc2).

Thanks to everyone, this is your last chance to hold the release if something goes wrong. So please, give this release a try :).
