---
layout: post
title: ! 'jQuery: New Default'
categories:
- edge
author: fxn
published: true
date: 2011-04-21 10:25:00.000000000 +01:00
---
In Rails 3.1 [jQuery](http://jquery.com) is going to be the default JavaScript library. Also, RJS has been extracted out. This post explains what that means for new applications, and what to look for while upgrading existing applications.

## New Applications ##

Starting with Rails 3.1

    rails new my_app

generates an application with [jQuery](http://jquery.com).

The `-j` option of the generator lets you choose [Prototype](http://www.prototypejs.org) and [Scriptaculous](http://script.aculo.us) instead:

    rails new my_app -j prototype

Such an application does not have RJS yet available though. From now on `prototype-rails` is needed for RJS, see below.

## Upgrading Applications Using No RJS ##

Existing applications using no RJS should remove any references to `ActionView::Base.debug_rjs` in the project. Typically that means deleting

    config.action_view.debug_rjs = true

from *config/environments/development.rb*. Other than that, upgrading should work out of the box as far as these changes is concerned.

## Upgrading Applications Using RJS ##

Existing application using RJS should work out of the box with `prototype-rails`.

## prototype-rails ##

RJS has been extracted to `prototype-rails`.

Applications using RJS have to add this line to their *Gemfile* while working against Rails master before the 3.1 release:

    gem 'prototype-rails', :git => 'git://github.com/rails/prototype-rails.git'

`prototype-rails` is gonna be a gem when Rails 3.1 is out.

`prototype-rails` is the one who provides now the RJS template handler; the configuration flag `ActionView::Base.debug_rjs`; the ability to pass a block to `link_to_function` and `button_to_function`; the `:update` option of `render`, both in controllers and views; and the modules `ActionView::Helpers::PrototypeHelper` and `ActionView::Helpers::ScriptaculousHelper`.

Extraction has taken backwards compatibility into account as much as possible. With that goal in mind, everything is put back where it was before, either by reopening classes or modules, or via `alias_method_chain` when the refactor involved cutting some part of a method out, as happened with `render :update`.

There's an exception: `ActionView::Helpers::PrototypeHelper` and `ActionView::Helpers::ScriptaculousHelper` are no longer ancestors of `ActionView::Helpers`. They are now injected into `ActionView::Base` and `ActionView::TestCase` directly.

When you include a module `M` into a class `C`, the class stores a proxy to `M` in its ancestor chain. After inclusion, if you add methods to `M` instances of `C` respond to them. But if you include another module `N` into `M`, the ancestor chain of `C` is not updated. Instances of `C` won't respond to `N`'s methods. Although a complete dynamic method dispatch would treat both ways of augmenting `M` equal, that's the way it works as of today.

By the time `prototype-rails` is loaded `ActionView::Helpers` has already been included into `ActionView::Base` and `ActionView::TestCase`, so we need to inject them directly where they are needed. Standard usage just works, but please take into account that change in case you reopened or used `ActionView::Helpers` assuming those ancestors.

Before release, `prototype-rails` is going to provide also a way to bring [Prototype](http://www.prototypejs.org) and [Scriptaculous](http://script.aculo.us) to any application.

## One Last Detail: The `xhr` Test Helper ##

The `xml_http_request/xhr` test helper is a simple convenience method that sets the `X\_REQUESTED\_WITH` header to "XMLHttpRequest". If the test request has no `Accept` header, a fixed value of

    [Mime::JS, Mime::HTML, Mime::XML, 'text/xml', Mime::ALL].join(', ')

serves as default.

The `Accept` header in Prototype calls corresponds to that value, but in jQuery it depends on the `dataType` attribute. Also, in other JavaScript libraries the `Accept` header may behave differently. What to do with the default?

This method has been left as is. In particular, if your application uses jQuery the default `Accept` header in the test will be different from the `Accept` header sent by jQuery. That's some *vinegar*: Rails encourages you to base interfaces on explicit `format` parameters. So, for example, best practice is to provide a `/users.json` endpoint, rather than a `/users` endpoint with a JSON representation chosen depending on the `Accept` header.

If you desperately need a matching `Accept` header in tests you are still able to pass it. And you can also write your own convenience test helpers easily, since a XHR request is just one whose `X\_REQUESTED\_WITH` header matches `/XMLHttpRequest/i`.

## Try It Out! ##

If your application uses RJS it would be really helpful that you test it against master with `prototype-rails` and report any issues you may find. Thanks!
