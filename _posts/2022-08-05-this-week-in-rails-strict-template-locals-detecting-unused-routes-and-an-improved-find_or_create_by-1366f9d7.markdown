---
layout: post
title: "Strict template locals, detecting unused routes and an improved find_or_create_by"
categories: news
author: p8
published: true
date: 2022-08-05
---
Hi, Petrik here with some updates on activities in Rails and associated projects over the last week.

[Allow templates to set strict locals](https://github.com/rails/rails/pull/45727)

By default, templates will accept any locals as keyword arguments. To define what locals a template accepts, add a locals magic comment:

    <%# locals: (message:) -%>
    <%= message %>

[Try to find a second time if _find\_or\_create\_by_&nbsp;hits a uniqueness constraint](https://github.com/rails/rails/pull/45720)
For the case where most of the time the record is expected to exist, _find\_or\_create\_by_ can be made race-condition free by re-trying the _find_ if the _create_ failed with _ActiveRecord::RecordNotUnique_. This assumes that the table has the proper uniqueness constraints, if not, _find\_or\_create\_by_ will still lead to duplicated records.

[Add support for&nbsp;_if\_exists_&nbsp;option when removing a check constraint&nbsp;](https://github.com/rails/rails/commit/25f97a66bdae6efe788b2d0ab7ab9cef6fc5a23a)

The _remove\_check\_constraint_ method now accepts an _if\_exists_ option. If set to _true_ an error won't be raised if the check constraint doesn't exist.

[Add linter for CHANGELOG formatting](https://github.com/rails/rails/pull/45674)
A PR to Rails should include a CHANGELOG entry if you're adding or removing a feature, committing a bug fix, or adding deprecation notices. To prevent inconsistencies in the CHANGELOG a linter has been added.

[Add _drop\_enum_&nbsp;migration command for PostgreSQL](https://github.com/rails/rails/pull/45735)
This does the inverse of _create\_enum_. Before dropping an enum, ensure you have dropped columns that depend on it.
[
Update the existing Kindle version of the guide from .mobi to .epub](https://github.com/rails/rails/pull/45539)
As Kindle is discontinuing support for the .mobi format, this makes the guides available as .epub.

[Add&nbsp;_--unused_&nbsp;option to the&nbsp;_routes_&nbsp;command to detect extraneous routes](https://github.com/rails/rails/pull/45701)

Over time, a Rails app can become slow to boot simply because of how many routes it has. This new option for the routes command can be used to detect routes that are drawn, but aren't actually valid.

[24 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220730-20220805) contributed to Rails since the last time.

Lots of activity in the Hotwired world this week as well.

[Release Turbo v7.2.0-beta.2](https://github.com/hotwired/turbo/releases/tag/v7.2.0-beta.2)
This builds on the [v7.2.0-beta.1 release](https://github.com/hotwired/turbo/releases/tag/v7.2.0-beta.1) that saw substantial new features and bugs fixes.

[Introduce_&nbsp;turbo:frame-missing_&nbsp;event](https://github.com/hotwired/turbo/pull/445)

When a response from _within_ a frame is missing a matching frame, the _turbo:frame-missing_ event is fired.
For example, if the reason the frame is missing is access (an expired session, for example), the call to _visit()_ can be made with _{ action: "replace" }_ to remove the current page from Turbo's page history.

[Activate \<script\> in Turbo Streams](https://github.com/hotwired/turbo/pull/660)

When a _\<turbo-stream\>_ element connects to the document, all included _\<script\>_ elements will be activated.

[Preserve \<select\> values in cache](https://github.com/hotwired/turbo/pull/666)

This change will save the values of _\<select\>_ tags when creating a snapshot so that when you navigate back or forward in history, form fields will not be reset.

That's it for this week. Until next time!

