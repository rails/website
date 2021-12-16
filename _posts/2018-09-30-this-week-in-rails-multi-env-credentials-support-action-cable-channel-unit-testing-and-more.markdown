---
layout: post
title: "Multi env credentials support, Action Cable channel unit testing and more!"
categories: news
author: _cha1tanya
published: true
date: 2018-09-30
---

Hello everyone! This is&nbsp;[Prathamesh](https://twitter.com/_cha1tanya)&nbsp;from Pune, India bringing you the latest news from the Rails world.

### [Multi environment support for credentials](https://github.com/rails/rails/pull/33521)

Now it is possible to have credentials for each environment. If the file for current environment exists it will take precedence over **_config/credentials.yml.enc._** For eg. production environment looks for  
**_config/credentials/production.yml.enc_** first.

### [Support for unit testing Action Cable channels](https://github.com/rails/rails/pull/33969)

This change introduced **_ActionCable::Channel::TestCase_** &nbsp;which provides an ability&nbsp;to unit test channel classes.

### [Raise error when using recyclable cache keys using a store which does not support it](https://github.com/rails/rails/pull/33932)

Some cache stores do not support recyclable cache keys. This can lead to generating the cache entries which never invalidate.  
  

This change adds a check to ensure that if recyclable cache keys are being used then the cache store needs to show that it supports this versioning scheme.&nbsp;

### [Improvements to migration paths of multiple databases](https://github.com/rails/rails/pull/33994)

This change adds an option to specify the migrations paths while generating the models.  
  
**_bin/rails g model Room capacity:integer --migrations-paths=db/kingston\_migrate_**  
  
Additionally, a [shortcut database option](https://github.com/rails/rails/pull/34021) is added which uses the database configuration for the current environment.

### [Eagerly define attribute methods in production](https://github.com/rails/rails/pull/33959)

The attribute methods for a model are currently defined lazily the first time that model is instantiated, even when **_config.eager\_load_** is true.   
  
Now they are defined while the app is booted to save the database round trip costs. There is related discussion and a pull request to do this change [only when schema cache exists](https://github.com/rails/rails/pull/33985).

### [Ignore psqlrc files when executing psql commands within Rails](https://github.com/rails/rails/pull/33906)

 **_.psqlrc_** files can affect the execution of commands that can hold up execution by blocking or cause side effects.  
  
Rails ignores it now by using **_-X_** option.  
  
It is also [ignored while loading structure.sql](https://github.com/rails/rails/pull/34001) file for PostgreSQL databases by Rails.

### [Add a way to check for subset of arguments when performing jobs](https://github.com/rails/rails/pull/33995)

The arguments need to match exactly what the job get passed when calling **assert\_performed\_with** / **assert\_enqueued\_with**.&nbsp;  
  
This change makes it possible to only check if a subset of arguments were&nbsp;passed to the job. Handy when you have too many arguments for the job.

[50 people](https://contributors.rubyonrails.org/contributors/in-time-window/20180916-20180930) contributed to Rails over the past two weeks. Check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2018-09-16%7D...@%7B2018-09-30%7D). If you are interested in helping out, we have plenty of [open issues](https://github.com/rails/rails/issues). I hope to see your name on the list next week!
