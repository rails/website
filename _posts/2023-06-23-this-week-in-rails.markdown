---
layout: post
title: "Rails World website and ticket sales, CPK improvements and more!"
categories: news
author: gregmolnar
published: true
date: 2023-06-23
---


Hi, it's [Greg](https://github.com/gregmolnar), bringing you the latest changes in the Rails codebase.

[Rails World's site is live!](https://rubyonrails.org/world)  
The Rails World conference website is live from today. It was created by [Shona Chan](https://www.linkedin.com/in/shona-chan/), a junior developer from the Rails community.
It was commissioned by the Rails Foundation, designed by [Katya Sitko](https://katya-sitko.netlify.app/) and created under the mentorship of [Ayush Newatia](https://radioactivetoy.tech/).

[Rails World Ticket sale starts today!](https://twitter.com/rails/status/1671880869706084354)  
Rails World ticket sales start today, Friday June 23, at 5pm CEST, starting with a limited run of Early Bird tickets. Try not to miss it and see you in Amsterdam!

[Fix EncryptedConfiguration not behaving like Hash](https://github.com/rails/rails/pull/48556)  
Previously, `EncryptedConfiguration` used `InheritableOptions` so that keys could be called like methods. It was changed later to ensure that it behaved both like a `Hash` and `OrderedOptions`. This second change, accidentally broke methods like `#keys`, `~#to_h`, etc., so `Rails.application.credentials.to_h` returned an empty hash even with credentials being set. This pull request fixed the issue and the fix was [backported to 7-0-stable](https://github.com/rails/rails/pull/48557) too.  

[Add support for nullifying composite primary key has_one associations](https://github.com/rails/rails/pull/48539)  
This pull request has been created because `has_one` composite primary key(CPK) associations with `dependent: :nullify` were broken. It changes the nullification code in `ActiveRecord::Associations::HasOneAssociation` to iterate through foreign key columns and nullify them if they don't belong to the model's primary keys.

[Disallow _id_ as an enum value in Active Record](https://github.com/rails/rails/pull/48536)  
This change disallows `id` as an enum value in Active Record, because it can lead to unexpected joins and subqueries. If you still want to use it, you can do so with `\_prefix` or `\_suffix` option set.

[Update Action Text to use HTML5 when available](https://github.com/rails/rails/pull/48522)  
This pull request updates Action Text to use the HTML5 sanitizer when available, and to parse markup using `Nokogiri::HTML5` when available. Previously, Action Text used Nokogiri's HTML4 parsers for these operations.

[Don't show _secret_key_base_ for _Rails.application.config#inspect_](https://github.com/rails/rails/pull/48500)  
When calling `Rails.application.config#inspect` it showed all attributes, including `secret_key_base` and this pull request overrides the `inspect` method to only show the class name. This helps to avoid to accidentally output sensitive information.
The same change was done for [MessageEncryptor](https://github.com/rails/rails/pull/48499) and [EncryptedConfiguration](https://github.com/rails/rails/pull/48498)

[Support beginless and endless ranges in _to_fs_](https://github.com/rails/rails/pull/48494)  
This pull request adds support to beginless/endless ranges in the `to_fs`. It will work like in this example:
```ruby
> (0..1).to_fs(:db)
=> "BETWEEN '0' AND '1'"
> (..1).to_fs(:db)
=> "< '1'"
> (0..).to_fs(:db)
=> "> '0'"
```

[Bugfix: Ensure _has_one_ associations saved when part of CPK has changed](https://github.com/rails/rails/pull/48491)  
If a _has_one_ association uses a composite primary key, and part of the composite primary key changes on the owner, these changes need to be reflected on the belonging object's foreign key.  
This was not working previously, because `#_record_changed?` was not equipped to handle composite primary key associations, so we were not recognizing that the belonging object's foreign key needed to be updated when the owner's primary key changed.    

[Eager load composite primary keys models](https://github.com/rails/rails/pull/48490)  
This pull request changes join dependency assignment to properly handle nodes with composite primary keys to fix eager loading models and associations with composite primary keys.

[Use \_read_attribute when autosaving has_one associations](https://github.com/rails/rails/pull/48489)  
This pull request fixes the issue of composite primary key models do not autosave properly when their association primary key is set to `:id`. In models with composite primary keys, the `#id` accessor will return an array, where we actually want the id column value. By changing `has_one` autosaving to use `_read_attribute` instead of `public_send` it won't use the `#id` accessor.

[Apply scope to association subqueries](https://github.com/rails/rails/pull/48487)  
This pull request makes sure scopes are applied to association(_belongs\_to/has\_one/has\_many_) subqueries. For example, if you have this association: `has_many :welcome_posts, -> { where(title: "welcome") }`
Before:
```ruby
Author.where(welcome_posts: Post.all)
#=> SELECT (...) WHERE "authors"."id" IN (SELECT "posts"."author_id" FROM "posts")
    ```
After:
```ruby
Author.where(welcome_posts: Post.all)
#=> SELECT (...) WHERE "authors"."id" IN (SELECT "posts"."author_id" FROM "posts" WHERE "posts"."title" = 'welcome')
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-06-16%7D...main@%7B2023-06-23%7D)._  
_We had [21 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230616-20230623) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
