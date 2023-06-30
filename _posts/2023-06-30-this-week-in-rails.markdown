---
layout: post
title: "A CVE, two new Rails releases in a week, config.autoload_lib, and more!"
categories: news
author: vipulnsward
published: true
date: 2023-06-30
---

Happy Friday Everyone! 
This is [Vipul](https://www.saeloun.com/team/vipul), bringing you the latest changes in the Rails codebase.

[[CVE-2023-28362] Possible XSS via User Supplied Values to redirect_to](https://discuss.rubyonrails.org/t/cve-2023-28362-possible-xss-via-user-supplied-values-to-redirect-to/83132)  
If you haven't already, its time to upgrade your Rails application to the latest version! 
Rails versions **7.0.5.1**, **6.1.7.4** have been released with a security fix for a possible XSS vulnerability in `redirect_to` when using user-supplied values.
It fixes the `redirect_to` method in Rails that allowed provided values to contain characters which are not legal in an HTTP header value.
This vulnerability has been assigned the CVE identifier **_CVE-2023-28362_**.

[Rails 7.0.6 has been released!](https://rubyonrails.org/2023/6/29/Rails-7-0-6-has-been-released)  
Rails **7.0.6** has also been released. This release contains many backported bug-fixes in the last few months since **7.0.4** release. 

[Introduce config.autoload_lib](https://github.com/rails/rails/pull/48572)  
The new method `config.autoload_lib(ignore:)` provides a simple way to autoload from `lib` folder:

 ```ruby
 # config/application.rb
 config.autoload_lib(ignore: %w(assets tasks))
 ```

Normally, the `lib` directory has subdirectories that should not be autoloaded or eager loaded. 
This new method allows you to specify which subdirectories to be autoloaded as needed.

Read more about this new feature in the  [autoloading guide](https://guides.rubyonrails.org/v7.1/autoloading_and_reloading_constants.html).

[Introduce config.autoload_lib_once](https://github.com/rails/rails/pull/48610)

The method `config.autoload_lib_once(ignore:)` is similar to `config.autoload_lib` introduced above, 
except that it adds lib to `config.autoload_once_paths` instead.

By calling `config.autoload_lib_once`, classes and modules in `lib` can be autoloaded, 
even from application initializers, but won't be reloaded.

[Bounce emails can now be sent with deliver_now](https://github.com/rails/rails/pull/48446)  
This change adds `bounce_now_with` to `ActionMailbox`.
This is useful when you want to send the bounce email immediately, instead of going through the mailer queue-

```ruby
 # Enqueues the bounce email
MyMailbox.bounce_with MyMailer.my_method(args)

# Delivers the email immediately
MyMailbox.bounce_now_with MyMailer.my_method(args)
```

[DATABASE option for railties:install:migrations](https://github.com/rails/rails/pull/48579)  
This change adds a new `DATABASE` option to `railties:install:migrations` task.

This allows us to specify which database the migrations should be copied to when running `rails railties:install:migrations` in engines-

```bash
$ rails railties:install:migrations DATABASE=animals
```

[Active Record encryption support for decrypting data previously encrypted non-deterministically](https://github.com/rails/rails/pull/48530)  
This change adds support to decrypting data encrypted non-deterministically with a `SHA1` hash digest.

It adds a new Active Record encryption option to support decrypting data encrypted non-deterministically with a SHA1 hash digest:

```
Rails.application.config.active_record.encryption.support_sha1_for_non_deterministic_encryption = true
```

It addresses a problem when upgrading from 7.0 to 7.1 where SHA-1 was being used as its digest class instead of global one.

[Add :report behavior to ActiveSupport::Deprecation](https://github.com/rails/rails/pull/48578)  
This change adds a `:report` behavior for `ActiveSupport::Deprecation`.

Setting `config.active_support.deprecation = :report` uses the error reporter to report deprecation warnings to `ActiveSupport::ErrorReporter`.

This is useful to report deprecations happening in production to bug trackers, instead of them being logged silently.


_You can view the complete list of changes [here](https://github.com/rails/rails/compare/@%7B2023-06-24%7D...main@%7B2023-06-30%7D)._  
_We had [25 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230624-20230630) to the Rails codebase this past week!_

Happy Friday again! Until next time :-)   

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
