---
layout: post
title: What's New in Edge Rails
categories:
- edge
author: Nathaniel Bibler
published: true
date: 2009-10-12 21:40:00.000000000 +01:00
---
<img src="/assets/2009/10/12/clock-tower_1.jpg" height="100" width="450" alt="" />

So, Edge Rails is still chugging right along.  There are new and interesting fixes, changes, and refactors going on all of the time.  So, lets take a look at just a few that've gone in since the last post <small>(it's been a while, I know, I'm sorry!)</small>.

## ActionView and Helpers

XSS escaping is now [enabled by default](http://github.com/rails/rails/commit/9415935902f120a9bac0bfce7129725a0db38ed3).  This means that if you want to explicitly output HTML to your views, you'll probably have to mark it as `html_safe!` before sending it through.

    <%= 'my <a href="http://www.rubyonrails.org">safe</a> string'.html_safe! %>

Many of the built-in helpers have been updated for this change and if you see an issues with the Rails helpers being incorrectly sanitized, you should create a new ticket.

`distance_of_time_in_words` has gained '[over](http://github.com/rails/rails/commit/8ef1cd9733cd12fc4e5ea25c149956a33fdffa70)', 'about', and '[almost](http://github.com/rails/rails/commit/c9318e9010712aeae33b1dd0e8bed4795ae37caf)' keywords, thanks to Jay Pignata and John Trupiano.  This provides you with an improved level of granularity when approximating the amount time passed.  So, instead of just "2 years ago", it can now also report "almost 2 years ago," "about 2 years ago," and "over 2 years ago," depending on the proximity to being exactly 2 years old.

    assert_equal "almost 2 years",  distance_of_time_in_words(from, to + 2.years - 3.months + 1.day)
    assert_equal "about 2 years",   distance_of_time_in_words(from, to + 2.years + 3.months - 1.day)
    assert_equal "over 2 years",    distance_of_time_in_words(from, to + 2.years + 3.months + 1.day)
    assert_equal "over 2 years",    distance_of_time_in_words(from, to + 2.years + 9.months - 1.day)
    assert_equal "almost 3 years",  distance_of_time_in_words(from, to + 2.years + 9.months + 1.day)

The HTML form helper, `fields_for` - generally used for nesting additional model forms - now allows for [explicit collections](http://github.com/rails/rails/commit/1b78e9bba3bd39c4669ff6c640b7df069185c22c) to be used, thanks to Andrew France.  So, instead of just including all of your blog.posts, you should have it only display your published blog.posts, for example.  Or:

    <% form_for @person, :url => { :action => "update" } do |person_form| %>
      ...
      <% person_form.fields_for :projects, @active_projects do |project_fields| %>
        Name: <%= project_fields.text_field :name %>
      <% end %>
    <% end %>


**API Change** for `content_tag_for`: The third argument - being the optional CSS prefix - will now also [affect the generated CSS class](http://github.com/rails/rails/commit/3b6bdfc1050a83c6339421257d60a6163bf3c687).  This prefix will now be appended to the generated element's `CLASS` attribute.

    <%= content_tag_for(:li, @post, :published) %>
    # => <li id="published_post_123" class="published_post">...</li>


## ActiveResource and ActiveRecord

Taryn East has [added update_attribute(s)](http://github.com/rails/rails/commit/f4f68885efd0e1135217433cafd368902b1fd58a) methods to ActiveResource.  These methods act very similarly to the ActiveRecord methods we already know and love.

Building or creating an object through a `has_one` association that contains conditionals will now [automatically append those conditions](http://github.com/rails/rails/commit/4168f876238982d0d584006f50188071928a8b7f) to the newly created object, thanks to Luciano Panaro.

    class Blog
      has_author :commit_author, :class_name => 'Author', :conditions => {:name => "Luciano Panaro"}
    end

    @blog.build_commit_author
    # => #<Author name: "Luciano Panaro" ... >

Pratik Naik added a new option to ActiveRecord's `accepts_nested_attributes_for` to [:limit](http://github.com/rails/rails/commit/68d416a58fb5a47df2365c4f3a6da9f8db5c7cb7) the number of records that are allowed to be processed.  Also, while we're covering `accepts_nested_attributes_for`, José Valim as [renamed the `_delete` option](http://github.com/rails/rails/commit/3091252abaafd15bc085f0be2b17829bebb6522c) to `_destroy` to better follow what is actually occurring.  A deprecation warning has been added to `_delete`, for the time being.

Jacob Burkhart updated the new `autosave` option in Rails 2.3 to allow for an [:autosave => false](http://github.com/rails/rails/commit/6cc0b9638fbb6ede3c46b51d7dab17881416014c), which will disallow saving of associated objects, even when they are `new_record?`s.



## Some Internals

Previously, `CDATA` elements could be ignored when converting from XML to a Hash, so now, thanks to John Pignata, `Hash#from_xml` will now [properly parse and include CDATA elements](http://github.com/rails/rails/commit/0d762646c4285437c12ddec9d0938c4ff1c3ef42) values.

Josh Peek has [relocated global exception handling](http://github.com/rails/rails/commit/52aeb8d2e72223f9b40b0193c151c252a3f4fb09) into ActionDispatch::Rescue.  So, this is now being handled at the Rack middleware level.

And finally, Yehuda Katz and Carl Lerche began work on a [Rails::Application](http://github.com/rails/rails/commit/4129449594ad3d8ff2f8fb4836104f25406a104f) object to better encapsulate some of the application start up and configuration details. Also, a good bit of [initialization](http://github.com/rails/rails/commit/992c2db76cd6cd6aa9a6ba3711a6ea1ad8910062) has now gone on to move into this new object.


Remember, if you prefer to have a shorter audio summary of some of this content and more, you should check out the <a href="http://ruby5.codeschool.com/">Ruby5 podcast</a> over at Envy Labs; it's released every Tuesday and Friday with the latest news in the Ruby and Rails community.

<small>Photo: <a href="http://www.flickr.com/photos/briantaylor/357204888">Clock Tower</a> by Brian Taylor</small>
