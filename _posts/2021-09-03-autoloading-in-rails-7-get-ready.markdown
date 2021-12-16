---
layout: post
title: Autoloading in Rails 7, get ready!
categories: edge
author: Xavier Noria
published: true
date: Fri Sep  3 11:21:31 CEST 2021
---

The forthcoming Rails 7 represents a milestone for autoloading.

There are two important changes coming:

1. [Zeitwerk](https://github.com/fxn/zeitwerk) has been the default autoloader for [more than two years](https://rubyonrails.org/2019/8/15/Rails-6-0-final-release). Rails 6.0 and Rails 6.1 supported both `zeitwerk` and `classic` modes to help projects transition. This period ends with Rails 7: `classic` mode won't be available anymore.

2. Initializers can autoload reloadable constants if wrapped in `to_prepare` blocks, but they no longer can otherwise.

Maybe your 6.x application is already ready for these changes. Otherwise, you can prepare in advance to ease the upgrade. Let's briefly explore their implications.

## Applications need to run in `zeitwerk` mode

Applications still running in `classic` mode have to switch to `zeitwerk` mode.

Don't be scared, many non-trivial Rails applications reported really smooth switches. It is very likely that you only need to flip the switch, maybe configure some inflector, and done. Please check the [upgrading guide for Rails 6.0](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html#autoloading) for details.

I am personally more than willing to help if you find anything unexpected, just [open an issue](https://github.com/rails/rails/issues/new) and tag [@fxn](https://github.com/fxn).

## The setter config.autoloader= has been deleted

In Rails 7 there is no configuration point to set the autoloading mode, `config.autoloader=` has been deleted.

## ActiveSupport::Dependencies private API has been deleted

You don't announce changes to internal APIs, but since `classic` has been there since the first release of Rails, this is worth being included in this post.

`ActiveSupport::Dependencies` implemented the `classic` autoloader, and with its removal a lot of internal methods have been dropped in cascade like `hook!`, `unhook!`, `depend_on`, `require_or_load`, `mechanism`, `qualified_name_for`, `warnings_on_first_load`, `logger`, `verbose`, and many others.

Auxiliary internal classes or modules are also gone, like `Reference`, `ClassCache`, `ModuleConstMissing`, `Blamable`, and more.

About 90% of `active_support/dependencies.rb` has been deleted. You can compare the [version in edge](https://github.com/rails/rails/blob/a44fbb5dcacd3281116f7d9881a25e8f08f729a4/activesupport/lib/active_support/dependencies.rb) with [the one in 6.1](https://github.com/rails/rails/blob/6-1-stable/activesupport/lib/active_support/dependencies.rb).

## Autoloading during initialization

Applications that autoloaded reloadable constants during initialization outside of `to_prepare` blocks got those constants unloaded and had this warning issued since Rails 6.0:

```
DEPRECATION WARNING: Initialization autoloaded the constant User.

Being able to do this is deprecated. Autoloading during initialization is going
to be an error condition in future versions of Rails.

Reloading does not reboot the application, and therefore code executed during
initialization does not run again. So, if you reload User, for example,
the expected changes won't be reflected in that stale Class object.

This autoloaded constant has been unloaded.

In order to autoload safely at boot time, please wrap your code in a reloader
callback this way:

    Rails.application.reloader.to_prepare do
      # Autoload classes and modules needed at boot time here.
    end

That block runs when the application boots, and every time there is a reload.
For historical reasons, it may run twice, so it has to be idempotent.

Check the "Autoloading and Reloading Constants" guide to learn more about how
Rails autoloads and reloads.
 (called from ...)
 ```

If you still get this warning, please check the section about autoloading when the application boots in the [autoloading guide](https://guides.rubyonrails.org/v7.0/autoloading_and_reloading_constants.html#autoloading-when-the-application-boots). You'd get a `NameError` in Rails 7 otherwise.

## Rails.autoloaders.zeitwerk_enabled?

Engines that want to support Rails 6.x can check

```ruby
Rails.autoloaders.zeitwerk_enabled?
```

to know if the parent application runs in `zeitwerk` mode. This predicate still exists in Rails 7 for this use case.
