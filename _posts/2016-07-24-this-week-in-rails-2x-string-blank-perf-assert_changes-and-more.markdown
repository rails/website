---
layout: post
title: "🚀 This Week in Rails: 2x String#blank? perf, assert_changes and more! 🚀"
categories: news
author: vipulnsward
published: true
date: 2016-07-24
---

Hello from [Vipul.](https://www.bigbinary.com/vipul)   
  
This was one busy week, with [many changes](https://github.com/rails/rails/compare/master@%7B2016-07-16%7D...@%7B2016-07-22%7D) landing on master.   
We had lots of performance improvements, bug fixes, new additions and enhancements.  
  
And here I thought everyone was just playing [Pokemon Go](http://9gag.com/tv/p/abd8vL/pokemon-go-central-park-vaporeon) now.&nbsp;

## Featured

### [Kasper joins Rails core!](https://rubyonrails.org/2016/7/19/Kasper-joins-Rails-core)

That's right Kasper gets himself a cartoon face!  
  
Kasper has helped make countless [changes](http://contributors.rubyonrails.org/contributors/kasper-timm-hansen/commits) and helped [others make them](https://github.com/rails/rails/issues?utf8=%E2%9C%93&q=commenter%3Akaspth%20) as well.  
  
He's continued to making substantial, individual contributions, like the new partial collection [caching](https://github.com/rails/rails/pull/18948) [scheme](https://github.com/rails/rails/pull/23695), [wildcard template dependencies](https://github.com/rails/rails/pull/20904), and [big improvements to the test runner](https://github.com/rails/rails/pull/19571).

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160716-20160722)

This week saw contributions from 30 fabulous people. 2 of those had a commit merged into Rails for the very first time.   
  
A big thank you to you all! ❤️ If you fancy seeing yourself up there next week, why not take a peek at the list of [current issues](https://goodbits.io/newsletters/19/emails/18495/**https://github.com/rails/rails/issues)? Improvements to the [documentation](http://api.rubyonrails.org) can also be a great place to start!

### [2x performance boost for String#blank? in Ruby 2.4!](https://github.com/rails/rails/commit/929a6500806fe671d9ac0002da8537bf26b8f25d)

_String#blank?_ now uses _Regex#match?_ following the backwards compatible addition of [_Regex#match?_](https://github.com/rails/rails/commit/575dbeeefcaafeb566afc07cdd8b55603b698d9f)&nbsp;that was introduced.  
  
This helps to get upto 2x the performance with new Regex improvements on Ruby 2.4!

### [Introduce assert\_changes and assert\_no\_changes](https://github.com/rails/rails/pull/25393)

_ActiveSupport::TestCase_ was augmented to complement _assert\_difference_ with a more more general usage.  
  
With this handy comparison, we can now do something like-  
  
_user = User.start\_registration  
assert\_changes 'user.token', from: nil, to: /\w{​32}​/ do  
&nbsp; user.finish\_registration  
end_    
to encapsulate the state changes, before and after an operation.

## New

### [Bring back support for callable cache key when rendering collection](https://github.com/rails/rails/pull/25616/files)

Support for custom callable cache key was added back to view caching. This allows us to do something like   
  
_<%= render partial: 'projects/project', collection: @projects, cached: -> project {​ [project, current\_user] }​ %>_  
  
and pass a key based on a callable block, which allows us to depend on cache's and cache expiration based on result of the call. In the above case, the cache will be expired with changes to _project_ and _current\_user_ objects.

### [Add exists? and update\_all to CollectionProxy to respect an association scope](https://github.com/rails/rails/pull/25786/files)

This change added _exists?_ and _update\_all_ to _CollectionProxy_ to respect an association scope.   
  
This was causing issues in newest version of Rails whenever _update\_all_ or _exists?_ were called on a collection object like _user.references.update\_all(...)_.

## Fixed

### [Fix bug in ActiveRecord TimeZoneConverter#set\_time\_zone\_without\_conversion](https://github.com/rails/rails/pull/25834)

Before this change, multi-parameter attributes conversion with invalid params caused issue, when AR's _time\_zone\_aware\_attributes_ was enabled, since that caused an invalid conversion.&nbsp;  
  
The new change, now tries conversion only when a valid value is available for safe-conversion.

### [Fix calling merge method as the first occurrence in a scope](https://github.com/rails/rails/pull/25849)

Previously calling merge as the first method to build up a scope used to lead to errors-  
  
_scope :unsafe\_chaining, -> {​ merge(Comment.newest) }​ #=> NoMethodError:_  
  
This change now allows us to overcome this and build up scopes like-   
  
_scope :_chaining_, ->{​merge(Comment.newest).joins(:comments) }​ # => OK_

## Improved

### [Allow MessageEncryptor to take advantage of authenticated encryption modes](https://github.com/rails/rails/commit/d4ea18a8cb84601509ee4c6dc691b212af8c2c36)

This change allow MessageEncryptor to now support [authenticated encryption modes](https://www.wikiwand.com/en/Authenticated_encryption).

AEAD modes like _aes-256-gcm_&nbsp;provide both confidentiality and data authenticity, eliminating the need to use MessageVerifier to check if the encrypted data has been tampered with. This speeds up encryption/decryption and results in shorter cipher text.

### [Setup default session store internally, and no longer through an initializer](https://github.com/rails/rails/pull/25438)

This change removes creation of the _config/initializers/session\_store.rb_&nbsp;to define session store via initializer and sets up default session store internally.  
  
By default the session store will be set to cookie store with application name as session key.

## Wrappin' Up

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-07-16%7D...@%7B2016-07-22%7D)!

Until next week!

