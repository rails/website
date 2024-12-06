---
layout: post
title: "SQLite3 extensions loading and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-12-06
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore this week's news in the Rails. 🎅

[Getting started tutorial](https://github.com/rails/rails/pull/53846)  
New pull request up for a community review: the new Getting Started tutorial shows you how to build an e-commerce app using all of Rails 8’s features out of the box - straight through to deployment. This will be the flagship tutorial to guide new Rails devs for years to come, so we'd love your feedback.

[The Rails Foundation welcomes 1Password as Core member](https://rubyonrails.org/2024/12/2/rails-foundation-welcomes-1password-as-core-member)  
Expanding Core membership means a stronger foundation with more long-term growth and sustainability, and most importantly: more support for the Rails community.

[Support loading SQLite3 extensions](https://github.com/rails/rails/pull/53827)  
The *sqlite3* gem v2.4.0 introduces support for loading extensions passed as a kwarg to *Database.new*. This PR leverages that feature to allow configuration of extensions in the *config/database.yml* file using either filesystem paths or the names of modules that respond to *to_path* method.

[Shard selector support for granular database connection switching](https://github.com/rails/rails/pull/53783)  
A new configuration option, *class_name*, is introduced to *config.active_record.shard_selector* to allow an application to specify the abstract connection class to be switched by the shard selection middleware. The default class is *ActiveRecord::Base*.
For example, this configuration tells *ShardSelector* to switch shards using *AnimalsRecord.connected_to*:

```
config.active_record.shard_selector = { class_name: "AnimalsRecord" }
```

[Action Controller Overview and Advanced Topics Guides](https://github.com/rails/rails/pull/53551)  
It updates the Action Controller Overview Rails Guide, as well as creates a new guide called "Action Controller Advanced Topics".
Can be previewed on the [edge guides](https://edgeguides.rubyonrails.org/action_controller_advanced_topics.html).

[Don't wrap redis in ConnectionPool twice](https://github.com/rails/rails/pull/53845)  
Avoid wrapping redis in a *ConnectionPool* when using *ActiveSupport::Cache::RedisCacheStore* if the *:redis* option is already a *ConnectionPool*.

[Add CSP nonce to preload links](https://github.com/rails/rails/pull/53794)  
Preload link tags need the CSP nonce added if the policy is configured with a nonce, otherwise browsers won't load these resources.
  
[Use _N as a parallel tests databases suffixes](https://github.com/rails/rails/pull/53790)  
 Peviously, *-N* was used as a suffix, which caused problems for RDBMSes which do not support dashes in database names.

[Reset relations after insert_all/upsert_all](https://github.com/rails/rails/pull/45943)  
Bulk insert/upsert methods will now call *reset* if used on a relation, matching the behavior of *update_all* method.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-11-29%7D...main@%7B2024-12-06%7D)._
_We had [29 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241129-20241206) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
