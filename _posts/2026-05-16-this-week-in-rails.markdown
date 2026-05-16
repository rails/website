---
layout: post
title: "This Week in Rails: May 16, 2026"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-05-16
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Rails World 2026 update](https://rubyonrails.org/world/2026)  
General Admission tickets are now out, and the CFP is closing this weekend.
Book your ticket or apply to speak at: [https://rubyonrails.org/world/2026](https://rubyonrails.org/world/2026).

[A new add-on tutorial is ready for community review](https://github.com/rails/rails/pull/57244)
This builds on the existing e-commerce app and adds a complete Product Reviews
system with ratings, image uploads, rating filtering, and admin management. If
you want to help by reviewing, leave your feedback in the PR here:
[https://github.com/rails/rails/pull/57244](https://github.com/rails/rails/pull/57244)  
Also, there are 2 new guides ready for community review:
[https://github.com/rails/rails/pull/57371](https://github.com/rails/rails/pull/57371)
and
[https://github.com/rails/rails/pull/57348](https://github.com/rails/rails/pull/57348).

[Add default _#render_in_ implementation to _ActiveModel::Conversion_](https://github.com/rails/rails/pull/57349)  
This pull request adds a default `#render_in` implementation to `ActiveModel::Conversion`
With the following view partial:
```erb
<%# app/views/people/_person.html.erb %>
<% local_assigns.with_defaults(shout: false) => { shout: } %>

<%= shout ? person.name.upcase : person.name %>
```
Callers can render an instance of `Person` as a positional argument or a
`:renderable` option:

```ruby
person = Person.new(name: "Ralph")

render person                                       # => "Ralph"
render person, shout: true                          # => "RALPH"
render renderable: person                           # => "Ralph"
render renderable: person, locals: { shout: true }  # => "RALPH"
```

[Disable freezing of _NATIVE_DATABASE_TYPES_ for SQLite3 adapter](https://github.com/rails/rails/pull/57342)  
`NATIVE_DATABASE_TYPES` is a well-known extension point — gems like `neighbor`
and `activerecord-enhancedsqlite3-adapter` mutate it to register custom types
(e.g. `vector`) or similar gems try to extend the hash. With `.freeze` in place
those gems crashed with `FrozenError: can't modify frozen Hash at load time`,
but this pull request fixes this.

[Handle missing Mandrill ingress signatures](https://github.com/rails/rails/pull/57330)  
This pull request changes the Mandrill authenticator to require a present
signature before comparing it with the expected HMAC. Missing signatures now
fail authentication and return `401 Unauthorized`, matching the behavior for
forged signatures.

[Add _start_day_ argument to _this_week?_ for consistency with _all_week_](https://github.com/rails/rails/pull/56872)  
`this_week?` now accepts an optional `start_day` argument, matching the
existing interface of `all_week`, `beginning_of_week`, and `end_of_week`.
```ruby
date.this_week?           # Uses global default (unchanged)
date.this_week?(:sunday)  # Sun–Sat week
date.this_week?(:monday)  # Mon–Sun week
```

[Allow array syntax for expression indexes in _add_index_](https://github.com/rails/rails/pull/55100)  
This change allows passing expressions in array syntax for `add_index` method.
For example, `add_index :users, [ "lower(email)" ]` now works the same as
`add_index :users, "lower(email)"`.

```ruby
# This now works properly:
add_index :users, [ "lower(email)" ]

# As does this:
add_index :users, [ "lower(email)", :status ]
```

[Active Storage: implement _attach!_](https://github.com/rails/rails/pull/54416)  
This pull request implements `attach!` as a bang counterpart to `attach`.

This method raises an exception if the attachment was not saved, similar
to how `save!` raises an exception if an Active Record object is found to
be invalid prior to be persisted.

[Fix unexpected behavior for _dependent: :purge_](https://github.com/rails/rails/pull/36433)  
This change corrects unexpected behavior resulting from `dependent: :purge` when
using `has_one_attached` or `has_many_attached`.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-05-09%7D...main@%7B2026-05-16%7D)._  
_We had [32 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260509-20260516) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
