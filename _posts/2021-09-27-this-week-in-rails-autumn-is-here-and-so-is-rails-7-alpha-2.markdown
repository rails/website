---
layout: post
title: "Autumn is here, and so is Rails 7 Alpha 2! 🍂"
categories: news
author: zzak
published: true
date: 2021-09-27
---

Hey! [Zzak](https://github.com/zzak) here with a JAM-PACKED edition of This Week In Rails. 🍇

### [Server Timing Middleware for Development](https://github.com/rails/rails/pull/36289)

This PR started nearly 2 and a half years ago, finally made its way into Rails!  
  
A really neat feature, uses the [Server-Timing header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing) to emit durations for all ActiveSupport::Notifications. You can then view these metrics in your browser's Network Inspector.&nbsp;

### [Allow link_to helper to infer link name from Model#to_s](https://github.com/rails/rails/pull/42234)

If your model defines #to\_s, you can now take advantage of this feature without having to supply a second argument to link\_to.

### [Adds support for deferrable foreign key constraints in PostgreSQL](https://github.com/rails/rails/pull/41487)

By default, foreign key constraints in PostgreSQL are checked after each statement. This works for most use cases, but becomes a major limitation when creating related records before the parent record is inserted into the database. Check out the PR for some examples and more detail.

### [GitHub Codespaces configuration](https://github.com/rails/rails/pull/43061)

This PR adds support for [GitHub Codespaces](https://github.com/features/codespaces), which allows contributors to easily boot a fully functional environment to create patches and test changes to Rails.

### [Close Rails Guides menu dropdown by pressing Escape](https://github.com/rails/rails/pull/43113)

A welcome UX patch that lets you close the menu dropdown by pressing the Escape key.

### [Improve margin styles for Rails Guides](https://github.com/rails/rails/pull/43250)

We always appreciate when folks help improve our documentation, especially the visual aspect to make reading on multiple devices a pleasure.

### [Fix the diff highlight background for Rails Guides dark mode](https://github.com/rails/rails/pull/42989)

Another great UX patch for Rails Guides that is always appreciated.

### [Suggest a CSP that's compatible with Turbo + import map](https://github.com/rails/rails/pull/43227)

In order for CSP to work with Turbo and an import map, we need nonces to be generated. This PR changes the generated CSP initializer to use per-session nonces instead of per-request nonces which would have negative impact on caching.

### [Add Bootstrap and Bulma to the CSS processors' list](https://github.com/rails/rails/pull/43254)

As support for more CSS processors are added to [cssbundling-rails](https://github.com/rails/cssbundling-rails), we've updated the `rails new --help` text to include currently available options.

### [Don't overwrite default opts in rich_text_area_tag](https://github.com/rails/rails/pull/43156)

This PR enables passing in a custom `direct_upload_url` or `blob_url_template` to `rich_text_area_tag`. In the case you want to use your own controller to authenticate requests or perform server-side validations.

### [Avoid comment statements in pg:dump](https://github.com/rails/rails/pull/43216)

This PR adds the --no-comment flag to pg\_dump to ensure COMMENT statements are omitted from the output when using PostgreSQL \>= 11.

### [Require latest release candidate for selenium-webdriver in Rails new](https://github.com/rails/rails/pull/43270)

Since the "rexml" gem was removed from Ruby version \>= 3 the selenium-webdriver gem has been waiting for a release that includes their updated dependency on the standard library gem.

### [Support clearing acronyms from inflector](https://github.com/rails/rails/pull/42475)

Previously attempting to clear acronyms in the Inflector breaks would result in a TypeError.  
  


### [Allow permitting numeric params](https://github.com/rails/rails/pull/42501)

ActionController::Parameters now lets you specify multiple parameters index by a number. This may be necessary if the parameters belong to a numeric key.

### [Check basic auth credentials before authenticate](https://github.com/rails/rails/pull/43209)

This PR fixes a bug when sending invalid basic authorization header data when using `http_basic_authentication_with`.

### [Render host_authorization debug view only for local requests](https://github.com/rails/rails/pull/42872)

This PR fixes a bug where debugging information was visible in production by restricting access to local requests only.

### [Add missing migrate command to Getting Started Rails Guide](https://github.com/rails/rails/pull/43276)

This might seem like a minor patch, but contributions from folks learning Ruby on Rails for the first time is a healthy sign. Changes like these help ease the difficulty of learning and welcomes new contributors to the community.

### [Active Storage: deprecate invalid default content types](https://github.com/rails/rails/pull/42227)

Blobs created with content\_type `image/jpg`, `image/pjpeg`, `image/bmp`, `text/javascript` will now produce a deprecation warning, since these are not valid content types.

### [Allow configuring PostgreSQL connection password through socket URL](https://github.com/rails/rails/pull/42840)

This PR allows you to specify your password using a socket URL, such as "postgres:///?user=user&password=secret&dbname=app".

### [Add autocomplete="off" to all generated hidden fields](https://github.com/rails/rails/pull/43280)

Due to a [longstanding Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=520561), this PR ensures hidden fields such as CSRF token and HTTP method fields are not modified without the user's knowledge.

### [Add beginning_of_week option to weekday_options_for_select](https://github.com/rails/rails/pull/43037)

Now you can specify the beginning of the week to this select field without depending on Date.beginning\_of\_week.

### [Action Mailer email_address_with_name now returns the email if name is blank](https://github.com/rails/rails/pull/42970)

When sending an email using Action Mailer the object referencing the person you want to send it to may not have a name associated with it. For example, in the case this field is optional for your User record. In this case Action Mailer will now use the target email address.

### [Add missing DOM ids to rails/mailers/email.html template](https://github.com/rails/rails/pull/42470)

This PR will help folks testing their Mailer Preview actions by using unique identifiers to select the mail data from the DOM instantly.

[35 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210917-20210926) contributed (over 120 commits!) to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-09-18%7D...main@%7B2021-09-26%7D). Until next week!
