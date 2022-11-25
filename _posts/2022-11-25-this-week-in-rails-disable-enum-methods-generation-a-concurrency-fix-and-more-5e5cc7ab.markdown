---
layout: post
title: "Disable enum methods generation, a concurrency fix and more!"
categories: news
author: gregmolnar
published: true
date: 2022-11-25
---

Hi there,
This is [Greg](https://twitter.com/gregmolnar), bringing you the latest changes in Rails.

[Make sure that concurrent map usage is thread-safe
](https://github.com/rails/rails/pull/46536)This pull request changes the way a cache miss is handled. It makes it thread-safe and ensures that it's not overwritten in the middle of execution.


[Autoload ActiveModel::ValidationError](https://github.com/rails/rails/pull/46545)
This pull request adds the missing autoload call for the _ValidationError_ in Active Model.

[Execute the before\_committed! callbacks on the most recent copy of the record](https://github.com/rails/rails/pull/46525)
Before this change, only the early copy of the same record (different object ids, but pointing to the same record in the database) was used to execute the callback, but it didn't have the _touch\_later_ information.

[Ensure file\_fixture\_path is set even when Active Record is not present](https://github.com/rails/rails/pull/46533)
When generating an app with _--skip-active-record_, the _file\_fixture_ helper was failing, because _file\_fixture\_path_ is only defined if _ActiveRecord::Base_. This pull request loads the test helper even when Active Record is not present.


[Add X-Forwarded-To addresses to recipients](https://github.com/rails/rails/pull/46552)
This pull request enhances _Mail::Message#recipients_ to include the address that an email was forwarded to.

[Allow hash-like model in FormBuilder#fields and FormBuilder#fields\_for](https://github.com/rails/rails/pull/46554)
This pull request changes the way _ActionView::Helpers::FormBuilder#fields\_for_ interprets parameters. Before deciding that the _record\_object_ parameter is in fact the _fields\_options_ parameter, Rails now checks if this _fields\_options_ has not been explicitly provided.

[Add a build persistence method](https://github.com/rails/rails/pull/45696)
This pull request adds a build method to _ActiveRecord::Persistence_,&nbsp; which builds an object (or objects) and returns either the built object or objects. Here are a few examples of usage:

    # Build a single new object
    User.build(first_name: 'Jamie')

    # Build an Array of new objects
    User.build([{ first_name: 'Jamie' }, { first_name: 'Jeremy' }])

    # Build a single object and pass it into a block to set other attributes.
    User.build(first_name: 'Jamie') do |u|
      u.is_admin = false
    end


[Allow setting YAML serialization options on a per-attribute basis](https://github.com/rails/rails/pull/45660)
This pull request adds functionality to allow setting YAML serialization options on a per-attribute basis - along with the current application-wide setting.

[Add support for HTML attributes of optgroups to select helper](https://github.com/rails/rails/pull/43019)
With this change, choices of _select_ can optionally contain HTML attributes as the last element of the child arrays when using grouped/nested collections:

    <%= form.select :foo, [["North America", [["United States","US"],["Canada","CA"]], { disabled: "disabled" }]] %>
    # => <select><optgroup label="North America" disabled="disabled"><option value="US">United States</option><option value="CA">Canada</option></optgroup></select>


[Allow resetting singular associations](https://github.com/rails/rails/pull/46165)
_has\_one_ and _belongs\_to_ associations now define a _reset\_association_ method on the owner model (where "_association"_ is the name of the association). This method unloads the cached associate record, if any, and causes the next access to query it from the database. There is an example of usage in the pull request description.

[Avoid validating belongs\_to association if it has not changed](https://github.com/rails/rails/pull/46522)
With this change, Rails avoids validating _belongs\_to_ association if it has not changed. Previously, when updating a record, Active Record performed an extra query to check for the presence of _belongs\_to_ associations (if the presence is configured to be mandatory), even if that attribute hasn't changed.
 Currently, only _belongs\_to_-related columns are checked for presence. It is possible to have orphaned records with this approach. To avoid this problem, you need to use a foreign key.
 This behavior can be controlled by configuration:

    config.active_record.belongs_to_required_validates_foreign_key = false

and will be disabled by default with `load_defaults 7.1`.

[Restore Action Cable Redis pub/sub listener on connection failure](https://github.com/rails/rails/pull/46562)
The Redis pub/sub adapter now automatically reconnects when Redis connection is lost.

[Add option to disable all methods that ActiveRecord.enum generates
](https://github.com/rails/rails/pull/46490)This pull request adds the _instance\_methods_, option to the _enum_ definition. When it is set to _false_, Active Record will not generate the instance methods it does by default.

This is a long issue and even being this long, it doesn't cover everything from past week. You can see the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2022-11-18%7D...main@%7B2022-11-24%7D).
We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20221118-20221125) to Rails this past week!

Happy Thanksgiving if you celebrate it and see you next week!


<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
