---
layout: post
title: "Date.this_quarter? and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-07-10
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore this week's changes in the Rails codebase.

[The Rails Foundation is inviting RUG organizers from around the world to apply to be a Rails World MC](https://rubyonrails.org/2026/7/7/be-a-rails-world-mc)  
Ruby User Group organizers are a huge part of what makes the Ruby ecosystem special. They grow the community, create welcoming spaces, introduce speakers, keep events running smoothly, and make newcomers feel at home - all the things that make a great Rails World MC.

[Add this_quarter? to Date/Time](https://github.com/rails/rails/pull/57963)  
It returns true if the date/time falls within the current quarter.
```ruby
Date.current #=> Tue, 15 Feb 2000
Date.new(2000, 3, 31).this_quarter?  # => true
Date.new(2000, 4, 1).this_quarter?   # => false
```

[Add ActiveJob::DeserializationError::RecordNotFound](https://github.com/rails/rails/pull/57742)  
Raised when argument deserialization fails because a referenced record could not be found, and not for any other reason.

[Introduce ractorize!](https://github.com/rails/rails/pull/57825)  
Added *Rails::Application#ractorize!* method which prepares the application to be shared and then calls *Ractor.make_shareable* on it.

[Fix ActionController::Live streams hanging on client disconnect](https://github.com/rails/rails/pull/58048)  
*ActionController::Live::Buffer#abort* cleared the streaming queue but never enqueued the terminator that *each_chunk* uses to exit, so a reader thread blocked in *SizedQueue#pop* was never woken and the request thread hung indefinitely.

[Support endless and beginless ranges in number_field_tag / range_field_tag](https://github.com/rails/rails/pull/58039)  
Fixes raising *RangeError* when endless or beginless ranges passed.

[Honor an explicit value: nil in color_field](https://github.com/rails/rails/pull/58023)  
Previously, passing *value: nil* was ignored and the field still pre-filled from the model's stored color.

[Deprecated the ActionController::Renderers::RENDERERS constant](https://github.com/rails/rails/pull/57830)  
This constant was for internal usage but had a documentation and wasn't set as private.
Applications that needs to add or remove renderers should be using the public API instead:

```ruby
ActionController.add_renderer(:rtf) do
end
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-07-03%7D...main@%7B2026-07-10%7D)._  
_We had [26 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260703-20260710) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
