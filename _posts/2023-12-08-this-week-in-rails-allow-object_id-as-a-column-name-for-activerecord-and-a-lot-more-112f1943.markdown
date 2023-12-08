---
layout: post
title: "Allow object_id as a column name for Active Record and a lot more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2023-12-08
---

[Take Active Record affixes into account for Active Storage database models](https://github.com/rails/rails/pull/50167)
This pull request ensures that all Active Storage database-related models adhere to the _ActiveRecord::Base.table\_name\_prefix_ configuration.

[Make isolated engines aware of Active Record::Base table name prefix](https://github.com/rails/rails/pull/50247)
Address isolated engines to incorporate the _ActiveRecord::Base.table\_name\_prefix_ configuration. This adjustment will enable engine-defined models, including those within Active Storage, to align with the Active Record table name prefix configuration.

[Alias field\_set\_tag helper to fieldset\_tag](https://github.com/rails/rails/pull/50241)
Rename the _field\_set\_tag_ helper to _fieldset\_tag_ for consistency with the _\<fieldset\>_ HTML element.

[Fix Time.now/DateTime.now/Date.today to return results in a system timezone after #travel\_to](https://github.com/rails/rails/pull/50236)
Correct _Time.now_, _DateTime.now_, and _Date.today_ to produce results in the system timezone after the use of _#travel\_to_.


The current implementation of _#travel\_to_ has a bug wherein it retains the timezone of its argument, causing all stubbed methods to return results in that remembered timezone. The intended behavior, however, is to have these methods return results in the system timezone.

[Preserve serialized timezone when deserializing with ActiveJob::Serializers::TimeWithZoneSerializer](https://github.com/rails/rails/pull/50240)
Retain the serialized timezone information when deserializing arguments of type _ActiveSupport::TimeWithZone_.

[Allow object\_id as a column name for Active Record](https://github.com/rails/rails/pull/50162)
This pull request now allows you to use _object\_id_ as a valid column name for Active Record.

[Add a Active Record.protocol\_adapters configuration to map DATABASE\_URL protocols
](https://github.com/rails/rails/pull/50140)When utilizing a _DATABASE\_URL_, introduce a configuration option to associate the protocol specified in the URL with a particular database adapter. This separation allows the application to select an adapter independently from the database connection details configured in the deployment environment.


    # ENV['DATABASE_URL'] = "mysql://localhost/example_database"
    config.active_record.protocol_adapters.mysql = "trilogy"
    # will connect to MySQL using the trilogy adapter



That brings us to to the end of our weekly Rails codebase updates.

In the last two weeks, we saw [38 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231124-20231209) grace Rails' codebase.

Take care,
[Emmanuel Hayford](https://twitter.com/siaw23)






Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
