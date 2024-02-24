---
layout: post
title: "An Active Record improvement, performance gains and a bugfix!"
categories: news
author: Emmanuel Hayford
published: true
date: 2022-10-21
---

Guten Tag! [Emmanuel](https://twitter.com/siaw23) here again, with some updates from Rails.

[Don't trigger after\_commit :destroy callback again on destroy if record previously was destroyed](https://github.com/rails/rails/pull/46197)
The _after\_commit :destroy_ callback would always run even if a record was destroyed previously. This PR fixes that. Essentially, we don't want to call _after\_commit :destroy_ on unpersisted records.

[Allow ErrorReporter to handle several error classes](https://github.com/rails/rails/pull/46299)
ErrorReporter now allows you to handle several error classes in one go. You can now handle multiple error classes like so:

_Rails.error.handle(ArgumentError, TypeError) do
&nbsp; # Do some work
end_ [Fix ciphertext\_for for yet-to-be-encrypted values](https://github.com/rails/rails/pull/46284)
_ciphertext\_for_ should return the encrypted value of an attribute that's encrypted even when the record has not been persisted, before this commit, this wasn't what we were getting, instead, for an unpersisted record, _ciphertext\_for_ returned the plain text value of the attribute. This PR fixes that.

[Avoid unnecessary serialize calls after save](https://github.com/rails/rails/pull/46231)
We've got some performance gains with this one: This commit memoizes _value\_for\_database_ so that _serialize_ is not called a 2nd time after save. Because _value_ is the single source of truth and can change in place, the memoization carefully checks for when _value_ differs from the memoized _@value\_for\_database_. Verbatim from the commit message. 😎

[Allow ActiveRecord::QueryMethods#reselect to accept a hash](https://github.com/rails/rails/pull/46253)
This PR allows _ActiveRecord::QueryMethods#reselect_ to receive hash values, similar to [this PR](https://github.com/rails/rails/pull/45612) that allowed _ActiveRecord::QueryMethods#select_ to accept hashes.

[21 contributors improved](https://contributors.rubyonrails.org/contributors/in-time-window/20221014-20221021) Rails in the past week. We'll bring you more updates next week!

Take care.



<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
