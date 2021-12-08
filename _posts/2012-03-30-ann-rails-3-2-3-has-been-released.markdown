---
layout: post
title: "[ANN] Rails 3.2.3 has been released!"
categories: []
author: spastorino
published: true
date: 2012-03-30 22:00:00.000000000 +00:00
---
Rails 3.2.3 has been released!!!.

### IMPORTANT

This release changes the default value of *config.active_record.whitelist_attributes* to true.  This change only affects newly generated applications so it should not cause any backwards compatibility issues for users who are upgrading but it may affect some tutorials and introductory material. For more information see the mass assignment section of the [ruby on rails security guide][1]

Rails 3.2.3 also introduces a new option that allows you to control the behavior of remote forms when it comes to `authenticity_token` generation. If you want to fragment cache your forms, authenticity token will also get cached, which isn't acceptable. However, if you only use such forms with ajax, you can disable token generation, because it will be fetched from `meta` tag. Starting with 3.2.3, you have an option to stop generating `authenticity_token` in remote forms (ie. `:remote => true` is passed as an option), by setting `config.action_view.embed_authenticity_token_in_remote_forms = false`. Please note that this will break sending those forms with javascript disabled. If you choose to not generate the token in remote forms by default, you can still explicitly pass `:authenticity_token => true` when generating the form to bypass this setting.
The option defaults to `true`, which means that existing apps are *NOT* affected.

We've also adjusted the dependencies on rack-cache and mail to address the recent security vulnerabilities with those libraries. If you are running a vulnerable version of mail or rack-cache you should update both gems to a safe version. There were also some regressions in the render method that were fixed in this version.

[1]: http://guides.rubyonrails.org/security.html#mass-assignment

### CHANGES since 3.2.2

*Action Mailer*

*   Upgrade mail version to 2.4.3 *ML*


*Action Pack*

*   Fix #5632, render :inline set the proper rendered format. *Santiago Pastorino*

*   Fix textarea rendering when using plugins like HAML. Such plugins encode the first newline character in the content. This issue was introduced in https://github.com/rails/rails/pull/5191 *James Coleman*

*   Do not include the authenticity token in forms where remote: true as ajax forms use the meta-tag value *DHH*

*   Turn off verbose mode of rack-cache, we still have X-Rack-Cache to
    check that info. Closes #5245. *Santiago Pastorino*

*   Fix #5238, rendered_format is not set when template is not rendered. *Piotr Sarnacki*

*   Upgrade rack-cache to 1.2. *José Valim*

*   ActionController::SessionManagement is deprecated. *Santiago Pastorino*

*   Since the router holds references to many parts of the system like engines, controllers and the application itself, inspecting the route set can actually be really slow, therefore we default alias inspect to to_s. *José Valim*

*   Add a new line after the textarea opening tag. Closes #393 *rafaelfranca*

*   Always pass a respond block from to responder. We should let the responder to decide what to do with the given overridden response block, and not short circuit it. *sikachu*

*   Fixes layout rendering regression from 3.2.2. *José Valim*


*Active Model*

* No changes


*Active Record*

*   Added find_or_create_by_{attribute}! dynamic method. *Andrew White*

*   Whitelist all attribute assignment by default. Change the default for newly generated applications to whitelist all attribute assignment.  Also update the generated model classes so users are reminded of the importance of attr_accessible. *NZKoz*

*   Update ActiveRecord::AttributeMethods#attribute_present? to return false for empty strings. *Jacobkg*

*   Fix associations when using per class databases. *larskanis*

*   Revert setting NOT NULL constraints in add_timestamps *fxn*

*   Fix mysql to use proper text types. Fixes #3931. *kennyj*

*   Fix #5069 - Protect foreign key from mass assignment through association builder. *byroot*


*Active Resource*

* No changes


*Active Support*

* No changes


*Railties*

* No changes


### SHA-1

* SHA-1 (actionmailer-3.2.3.gem) = 04cd2772dd2d402ffb9d9dbf70f5f2256c598ab3
* SHA-1 (actionpack-3.2.3.gem) = 06d51ebd0863e0075d9a3e89a2e48dcc262c4e0c
* SHA-1 (activemodel-3.2.3.gem) = 3f648213b88bb3695e2bce38ff823be99535f401
* SHA-1 (activerecord-3.2.3.gem) = a9810e79d720994abbe24aded2bcb783bb1649b4
* SHA-1 (activeresource-3.2.3.gem) = 3d1de8a80122efbcf6c8b8dfc13a7ab644bb2ca3
* SHA-1 (activesupport-3.2.3.gem) = 6a63d75c798fb87d081cbee9323c46bec4727490
* SHA-1 (rails-3.2.3.gem) = 4db7e5c288f5260dc299d55ec2aad9a330b611fc
* SHA-1 (railties-3.2.3.gem) = 39a887de71350ece12c784d3764b7be2c6659b32

You can find an exhaustive list of changes made between 3.2.2 and
3.2.3 [here](https://github.com/rails/rails/compare/v3.2.2...v3.2.3).

Thanks to everyone for making this possible and enjoy it :).
