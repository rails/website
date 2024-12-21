---
layout: post
title: "Revert Active Model's Normalization and Cache Store gets session ID uniqueness flag"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-12-21
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.


[Fix "#to_query" to not include setter for nil values](https://github.com/rails/rails/pull/53962)  
To keep the behavior consistent with `Rack::Utils.parse_nested_query`.

```
# Before
nil.to_query("key") #=> key=
# After
nil.to_query("key") #=> key
```

[Raise "ActiveRecordError" when "#increment!" called on new records](https://github.com/rails/rails/pull/53961)  
Similar to the behavior of `#update_columns`, an exception will be raised on records that haven't been saved yet or were destroyed.

[Revert "ActiveModel::Attributes::Normalization"](https://github.com/rails/rails/pull/53954)  
In the last episode, we announced that `ActiveRecord::Normalization` was moved to Active Model.  
That PR was reverted because the API wasn't ready and is still being worked on.

[Add ":comparable" option to serialized attributes](https://github.com/rails/rails/pull/53946)  
This option was added to ease migration between different coders.  
Refer to the [API docs](https://edgeapi.rubyonrails.org/classes/ActiveRecord/AttributeMethods/Serialization/ClassMethods.html#method-i-serialize) for more information.

[Remove monkey patches of "Range#each" and "Range#step"](https://github.com/rails/rails/pull/53929)  
Technically these methods are equivalent to the native Ruby methods, so they can be safely removed.

[Add "check_collisions" option to Cache Store](https://github.com/rails/rails/pull/53918)  
This new options was added for situations where guaranteeing uniqueness of the session ID is required.

[Prevent Active Storage Blob from autosaving Attachments](https://github.com/rails/rails/pull/53623)  
This change should have no impact on existing applications, but will ensure that adding an attachment to a record doesn't automatically save it, causing other callbacks to run unexpectedly.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-12-14%7D...main@%7B2024-12-21%7D)._
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241214-20241221) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
