---
layout: post
title: "reselect, negative enum scopes and more!"
categories: news
author: imtayadeway
published: true
date: 2019-03-03
---

Why hello there! [Tim](https://twitter.com/imtayadeway) here bringing you all the latest and greatest from This Week In Rails.

### [Negative scopes for enum values](https://github.com/rails/rails/pull/35381)

Some sugar around enum values allows you to make negative scopes such as

```ruby
Post.not_drafted # => where.not(status: :drafted)
```

### [New method: reselect](https://github.com/rails/rails/pull/33611)

Allows you to change a previously set select statement in the same manner to rewhere and reorder, e.g.

```ruby
Post.select(:title, :body).reselect(:created_at)
```

### [#size fixed when using SELECT DISTINCT](https://github.com/rails/rails/pull/35361)

`#size_` would ignore the DISTINCT in the select, giving a different result to `#count`. This is now fixed!



### [Active Storage's _blob loading fixed](https://github.com/rails/rails/pull/35412)

If you attached a `has_one_attachment` attachment, you may have found that the attachment's `_blob` method would have returned `nil`. This was fixed by assigning the blob when the attachment is assigned.

[22 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190224-20190302) contributed to Rails since our last issue; you can see the [full list of changes here](https://github.com/rails/rails/compare/master@%7B2019-02-24%7D...@%7B2019-03-02%7D).

Until next week!
