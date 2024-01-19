---
layout: post
title: "A class method to introspect delegated types, schema_dump configuration via DATABASE_URL, etc"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-01-19
---

As the morning sun casts its gentle glow, I find myself [aboard a train](https://x.com/siaw23/status/1748286445440172304) bound for Szklarska Poręba. I'm literally on Rails! I thought, what better setting to share the latest updates on Rails than while traversing these literal rails?

[Define a class method to introspect valid delegatable types](https://github.com/rails/rails/pull/50662)
This PR introduces a _\<role\>\_types_ class method within _ActiveRecord::DelegatedType_ to enable introspection of delegated types.

[Make schema\_dump, query\_cache, replica & database\_tasks configurable via DATABASE\_URL
](https://github.com/rails/rails/pull/50757)Enable configurability for _schema\_dump_, _query\_cache_, _replica_, and _database\_tasks_ via _DATABASE\_URL_. Previously, this functionality faced limitations due to boolean values being incorrectly interpreted as strings.
For example, _DATABASE\_URL=postgres://localhost/foo?schema\_dump=false_ now properly disables dumping the schema cache.

[Fix IPAddr prefix information missing when writing to the cache](https://github.com/rails/rails/pull/50742)
This PR incorporates the _IPAddr#prefix_ into the serialization process of an _IPAddr_ when utilizing the _ActiveSupport::MessagePack_ serializer. This modification ensures both backward and forward compatibility; existing payloads remain readable, and newer payloads are compatible with earlier versions of Rails.

[Ensure only directories exist in Rails default load paths](https://github.com/rails/rails/pull/50723)
Safeguard Rails default load paths by enforcing the presence of only directories. In the past, certain files within the app directory caused contamination in the load paths. This commit rectifies the issue by eliminating files from the default load paths established by the Rails framework. As a result, only directories are now considered in the default settings for the following paths:

- autoload\_paths
- autoload\_once\_paths
- eager\_load\_paths
- load\_paths


We had [33 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240112-20240119) to the Rails codebase this past week!
Have a look [here for an exhaustive list](https://github.com/rails/rails/compare/@%7B2024-01-12%7D...main@%7B2024-01-19%7D) of all changes.

Take care,
[Emmanuel Hayford](https://twitter.com/siaw23)

Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
