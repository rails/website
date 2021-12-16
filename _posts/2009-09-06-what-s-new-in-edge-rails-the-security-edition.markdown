---
layout: post
title: ! 'What''s New in Edge Rails: The Security Edition'
categories:
- edge
author: Nathaniel Bibler
published: true
date: 2009-09-06 17:07:00.000000000 +01:00
---
<img src="/assets/2009/9/6/restricted.jpg" height="100" width="450" alt=""/>

It's been a bit over two weeks since the last WNiER ("winner"?) post and in the time since our last visit, [Ruby on Rails 2.3.4 was released](https://rubyonrails.org/2009/9/4/ruby-on-rails-2-3-4) to fix some reported security issues.  It is important that you try to upgrade your applications as soon as possible, or even just apply the [provided](https://rubyonrails.org/2009/9/4/timing-weakness-in-ruby-on-rails) [patches](https://rubyonrails.org/2009/9/4/xss-vulnerability-in-ruby-on-rails) if a full upgrade isn't easily accomplished in your situation.

Along with this release, you're also going to see several bug fixes and enhancements to the Rails  framework, coming from many contributors, that have been discussed here over the previous weeks and  even a few that are mentioned just below.


## Security updates

Michael Koziarski posted fixes ([here](http://github.com/rails/rails/commit/b16e0c922344da256ab977fd5e7a7f69e0be90fc) and [here](http://github.com/rails/rails/commit/9a73630d935e360f3dc896e50dd673afb97cf3b5)) for cleaning and verifying multibyte (unicode) strings.  The problem was reported by Brian Mastenbrook and Manfred Stienstra provided input for the fix.  These changes should disallow malformed unicode strings from getting past the HTML escaping logic provided by the form helpers.

Coda Hale reported and also [added a patch](http://github.com/rails/rails/commit/5e6dab8b34152bc48c89032d20e5bda1511e28fb) to Rails, fixing a timing attack vulnerability in `ActiveSupport::MessageVerifier`.  Although not likely to be exploited in the wild, the vulnerability may allow an attacker to forge the signatures which encode your application's cookie store.  If successfully broken, an attacker could modify their session objects without altering your application to the change.

There have been some issues reported around the Rails 2.3.4 release, specifically with regard to Ruby 1.9 support.  While they have not all yet been fully substantiated, this certainly underscores the importance of having proper test coverage and both a staging and production environment for your applications.

## Down to the metal

Yehuda Katz and Carl Lerche put in quite a bit of work around `ActionController::Metal` and Rack's Middleware, recently.  `ActionController::Metal` now [acts as a Rack middleware](http://github.com/rails/rails/commit/c7ba911a43e513bd1adbee93f16d2b8efea7cc88) and at the same time, there is a new [`ActionController::Middleware`](http://github.com/rails/rails/commit/9408fcd2e858ae48dd30d9e8d1bb1dcbbfffb840) class that operates as normal Rack middleware.

And, if that wasn't enough, Yehuda went on to add [`ActiveModel::Lint`](http://github.com/rails/rails/commit/dbf20c2dbb5d1f2640517c468aa7c269d93414b9).  `ActiveModel::Lint` allows you to determine whether or not an object is compliant with the ActiveModel API, via:

		ActiveModel::Compliance.test(object)

The output is similar to a Test::Unit output and will indicate with which portions of the ActiveModel API the given object is - or more importantly is not - compliant.

If Metal is your thing, you may want to take a look at Yehuda Katz's recent blog post, [How to Build Sinatra on Rails 3](http://yehudakatz.com/2009/08/26/how-to-build-sinatra-on-rails-3).

## Pour some sugar on me

Quite a few changes, small and large, occurred around ActiveRecord and friends.  Most of these cleaned up some existing functionality, either making it easier to use, perform more closely to what would be expected, or even adding some new features that will soon feel like old friends. 

Taryn East added a little ActiveRecord-like love to ActiveResource.  In [this patch](http://github.com/rails/rails/commit/ce61a6bd551a96205892a125c8835c4bc69c4fad), ActiveResource received the familiar `first`, `last`, and `all` shortcut methods for wrapping the basic `find` method.

[Proc and symbol support](http://github.com/rails/rails/commit/cf9f361699d72b5b34a655f8940c024cba0f0e09) was added to the `validates_numericality_of` ActiveRecord validation, by Kane.

For those of you who use the `:anchor` option when generating URLs, you may notice that after [this patch](http://github.com/rails/rails/commit/05b529ca57f75ce64540b9d34597e0c3bfe1fca7) by Jeffrey Hardy, Rails will now execute the `to_param` method on the object provided as an `:anchor`.

		@post 		= Post.first
		@comment 	= Comment.first
		post_url(@post, :anchor => @comment) # => http://www.example.com/posts/1#comment-1

Well, something similar to that, anyway.  :)  This updates the `:anchor` options to follow a similar functionality as the other options provided when generating URLs.

José Valim cleaned up some bits in the Rails scaffold.  The generated `new` and `edit` views will [now reference](http://github.com/rails/rails/commit/5d645c271b350c2a3ed7fd835e539322cda61d8c) a new `_form` partial.  This is a much DRYer way to go about it, and more closely follows what would likely happen if you were to code it yourself.  Also, while he was there, he [removed a bit](http://github.com/rails/rails/commit/5096ba961c49e5b419c3400acd7c87373a36d6d4) of inline CSS (specifically, a green flash message), in favor of a CSS class and updating the default scaffold stylesheet.

And, probably the most interesting change in this group is the addition of a [new `ActivRecord#previous_changes` method](http://github.com/rails/rails/commit/80989437dc1502f9194b0600941b6d70a3efa3b2), by Scott Barr.  `previous_changes` allows you to see what changed before the last save in your local ActiveRecord object instance.  This is particularly useful when calling `after_save` methods which might need to know what exactly had changed.  I'll let him give you a code sample:

		person 			= Person.find_by_name('bob')
	  person.name = 'robert'
	  person.changes 						# => {'name' => ['bob, 'robert']}
	  person.save
	  person.changes 						# => {}
	  person.previous_changes 	# => {'name' => ['bob, 'robert']}
	  person.reload
	  person.previous_changes 	# => {}
	  

## Okay, let's do it your way

While a lot of us prefer US English, we (begrudgingly) recognize that we aren't _always_ the center of the universe.  As such, there are some more localization updates to report in Edge Rails:

Sven Fuchs added [localization support](http://github.com/rails/rails/commit/d672a14ee766e86c606db566dd073a3d2332cc60) to the ActiveRecord::RecordInvalid exception's error message.  Then, Akira Matsuda followed Sven with support for localizing the SELECT tag helper's [prompt text](http://github.com/rails/rails/commit/cc9af20da7af98464ece18d4abc6a22ef3f00b5d) (the default being, "Please select").

Finally, this is certainly a welcome addition and potentially a major player in localization support within Rails:  Antonio Tapiador del Dujo added a patch which allows Rails plugins to define and maintain [their own locale files](http://github.com/rails/rails/commit/cf4846c6ae991143afaef987a63c3ad9a3a2546b).  All that is necessary for the plugin developer to do is to provide a `config/locales/` directory within their plugin and then create their own `.rb` or `.yml` files (i.e. `en.yml`).  That means that plugins can now be much more responsible for their own localization support and do not have to modify the application's locale files after installation.


## Food for thought

Finally, just a small note that the default, preferred table collation for MySQL [has been changed](http://github.com/rails/rails/commit/f6ca7e4e75408bc42f515fc7206d6c6ff0dce7c6).  Previously, Rails defaulted to `utf8_general_ci` when either the database or the table creation script did not dictate otherwise.  Now, that has been changed to `utf8_unicode_ci`.  Certainly worth a note with so many Rails applications using MySQL in their back-end.

**Update**: Set the attribution of `previous_changes` to Scott Barr.  Sorry, Scott!

<small>Photo: <a href="http://www.flickr.com/photos/proimos/3652878454/">Security at the Hoover Dam</a> by Alex E. Proimos</small>