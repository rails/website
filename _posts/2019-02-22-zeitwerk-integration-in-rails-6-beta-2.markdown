---
layout: "post"
title: "Zeitwerk integration in Rails 6 (Beta 2)"
categories: "releases"
author: "fxn"
published: true
date: "2019-02-22 09:59:45 +0100"
---

The second beta of Rails 6 is about to ship, and includes [Zeitwerk](https://github.com/fxn/zeitwerk) integration.

While Rails 6 final is going to have proper documentation about it, this post will help understanding this feature meanwhile.

## Highlights

* You can now robustly use constant paths in class and module definitions:

  ```ruby
  # Autoloading in this class' body matches Ruby semantics now.
  class Admin::UsersController < ApplicationController
    # ...
  end
  ```

* All known use cases of `require_dependency` have been eliminated.

* Edge cases in which the autoloaded constant depended on execution order are gone.

* Autoloading is thread-safe in general, not just for the currently supported use cases with explicit locks like web requests. For example, you can now write multi-threaded scripts to be run by `bin/rails runner` and they will autoload just fine.

Also, applications get some performance benefits for the same price:

* Autoloading a constant no longer involves walking autoload paths looking for a relative match in the file system. Zeitwerk does one single pass and autoloads everything using absolute file names. In addition, that single pass descends into subdirectories lazily, only when the namespaces are used.

* When an application is reloaded due to changes in the file system, code in the autoload paths of engines that were loaded as gems won't be reloaded anymore.

* Eager loading eager loads not only the application, but also the code of any gem that is managed by Zeitwerk.

## Autoloading modes

Rails 6 ships with two autoloading modes: `:zeitwerk` and `:classic`. They are set using the new configuration point `config.autoloader`.

Zeitwerk mode is the default in Rails 6 for CRuby, automatically enabled by

```ruby
load_defaults "6.0"
```

in `config/application.rb`.

Applications can opt-out putting

```ruby
config.autoloader = :classic
```

after the line that loads the defaults.

## State of the API

While a first API for Zeitwerk mode is converging, this is still a bit exploratory right now. Please, check the current documentation if your version of Rails is newer than `6.0.0.beta2`.

## Autoload paths

The configuration point for autoload paths remains `config.autoload_paths`, and if you push by hand to `ActiveSupport::Dependencies.autoload_paths` during application initialization, that will also work.

## require_dependency

All known use cases of `require_dependency` have been eliminated. In principle, you should just delete all these calls in the code base. See also the next section about STIs.

## STIs

Active Record needs to have STI hierarchies fully loaded in order to generate correct SQL. Preloading in Zeitwerk was designed for this use case:

```ruby
# config/initializers/preload_vehicle_sti.rb

autoloader = Rails.autoloaders.main
sti_leaves = %w(car motorbike truck)

sti_leaves.each do |leaf|
  autoloader.preload("#{Rails.root}/app/models/#{leaf}.rb")
end
```

By preloading the leaves of the tree, autoloading will take care of the entire hierarchy upwards following superclasses.

These files are going to be preloaded on boot, and on each reload.

## Rails.autoloaders

In Zeitwerk mode, `Rails.autoloaders` is an enumerable that has two Zeitwerk instances called `main`, and `once`. The former is the one managing your application, and the latter manages engines loaded as gems, as well as anything in the somewhat unknown `config.autoload_once_paths` (whose future is not bright). Rails reloads with `main`, and `once` is there just for autoloading and eager loading, but does not reload.

Those instances are accessible respectively as

```ruby
Rails.autoloaders.main
Rails.autoloaders.once
```

but since `Rails.autoloaders` is an enumerable, there won't be too many use cases for direct access, probably.

## Inspecting autoloaders activity

If you want to see the autoloaders working, you can throw

```ruby
Rails.autoloaders.logger = method(:puts)
```

to `config/application.rb` after the framework defaults have been set. In addition to a callable, `Rails.autoloaders.logger=` accepts also anything that responds to `debug` with arity 1, like regular loggers do.

If you want to see the activity of Zeitwerk for all instances in memory (both Rails' and others that might be managing gems), you can set

```ruby
Zeitwerk::Loader.default_logger = method(:puts)
```

at the top of `config/application.rb`, before `Bundle.require`.

## Backwards incompatibility

* For files below the standard `concerns` directories (like `app/models/concerns`), `Concerns` cannot be a namespace. That is, `app/models/concerns/geolocatable.rb` is expected to define `Geolocatable`, not `Concerns::Geolocatable`.

* Once the application has booted, autoload paths are frozen.

* Directories in `ActiveSupport::Dependencies.autoload_paths` that do not exist on boot are ignored. We are referring here to the actual elements of the array only, not to their subdirectories. New subdirectories of autoload paths that existed at boot are picked up just fine as always. (This may change for final.)

* A file that defines a class or module that acts as a namespace, needs to define the class or module using the `class` and `module` keywords. For example, if you have `app/models/hotel.rb` defining the `Hotel` class, and `app/models/hotel/pricing.rb` defining a mixin for hotels, the `Hotel` class must be defined with `class`, you cannot do `Hotel = Class.new { ... }` or `Hotel = Struct.new { ... }` or anything like that. Those idioms are fine in classes and modules that do not act as namespaces.

* A file should define only one constant in its namespace (but can define inner ones). So, if `app/models/foo.rb` defines `Foo` and also `Bar`, `Bar` won't be reloaded, but reopened when `Foo` is reloaded. This is strongly discouraged in classic mode anyway though, the convention is to have one single main constant matching the file name. You can have inner constants, so `Foo` may define an auxiliary internal class `Foo::Woo`.
