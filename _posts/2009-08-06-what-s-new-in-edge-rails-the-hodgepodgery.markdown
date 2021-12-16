---
layout: post
title: ! 'What''s New in Edge Rails: The Hodgepodgery'
categories:
- edge
author: Nathaniel Bibler
published: true
date: 2009-08-06 14:23:00.000000000 +01:00
---
<img src="/assets/2009/8/6/performance_1.png" height="79" width="416" alt="">

It's been quite a while since we've had a new Edge Rails post.  I've really missed them and there have been a lot of changes, both big and small, on the Edge in the time since.  In this post I'll cover a little bit of everything that's been happening over the past week or so in Rails.  Along with this, you should expect to see more frequent and regular updates on all that is currently going on.


#### Goodbye SQLite dbfile

This is a relatively [minor change](http://github.com/rails/rails/commit/cdf60e46cc01e5f7b14e95a0b7d914516fcdcbc1), unless you still refer to your SQLite database as a `dbfile` in your `database.yml`.  The `dbfile` option key is now gone, having been replaced a long time ago by the more standard, `database` key.  So, if you're suddenly seeing, "`No database file specified`" errors after you update, this may be your cause.


#### Кирилица\n祝您好運 ??? We got your Кирилица\n祝您好運 RIGHT HERE

Sava Chankov provided a patch [fixing Content-length](http://github.com/rails/rails/commit/ec94c2550dae463e646a18316bfcdaded9d140c9) HTTP response headers being incorrectly calculated with Ruby 1.9 and multi-byte characters.  The content length is now calculated based off of the `String#bytesize` rather than just the `String#size`.  This takes advantage of the multi-byte character support built in to Ruby 1.9, just as long as you remember to always properly tag your multi-byte file with the correct encoding header (i.e. `# encoding: utf-8`).


#### That's not our job

Some spring cleaning, mostly made possible through Rack support, allowed Edge to [hand-off](http://github.com/rails/rails/commit/b53f00690173797a39ff46e55dd25c20581c3d00) some additional responsibilities to the stack.  The most interesting of which is now off-loading some of the content-length calculation to your web server rather than being processed directly from within Rails.  The largest benefit of this is not so much for the application developers as for you middleware developers.  This means that you no longer have to re-calculate the content length when manipulating the body of an HTTP response.

This does not appear to affect the previously mentioned update by Sava, because his fix seems to most largely affect streaming file responses directly through Rails.


#### We <3 the Hash, and now so does the Cache

Cache control is [now being handled](http://github.com/rails/rails/commit/503ce1d01ce6c8eee9818f4e76a9f880bb1a291d) by an internal Hash rather than independent string values.  Old and busted: `headers['Cache-Control'] = 'private'`, new hotness: `response.cache_control[:public] = true`.  Additional `cache_control` options include: `:public`, `:max_age`, `:must_revalidate`, and the oh-so-descriptive `:extras`, which is used mostly for your custom header content.


#### What time is it!?

Geoff Buesing provided a [useful fix](http://github.com/rails/rails/commit/6f97ad07ded847f29159baf71050c63f04282170) for `Time`, specifically when used in conjunction with ActiveRecord.  Now you can save and search ActiveRecord objects using whichever local time zone you like, regardless of what your default time zone is configured for and everything now will just work.  You no longer need to be concerned about converting your user's local time into your default application time or vice versa.


#### It's STATE of the art

ActiveRecord now has [easy access](http://github.com/rails/rails/commit/aad5a30bf25d8a3167afd685fc91c99f4f09cc57) to ActiveModel's `StateMachine` implementation.  I don't know about you, but somehow I always seem to find a way to bring state machines into my Rails applications, and now building in - even fairly complex - state machines just got a whole lot easier.

For an example of `ActiveModel::StateMachine` and to get an idea of how you might use it, check out my more detailed [blog post over at Envy Labs](http://blog.envylabs.com/2009/08/the-rails-state-machine).


#### Front. Back. Side to side.

Paul Gillard committed [a patch](http://github.com/rails/rails/commit/c30a0ce3c8f88baebd369180a6e221706e2b5cbf) which now allows for both custom suffixes (which really isn't new) and prefixes (omg THAT IS!) on your ActiveRecord attributes.  This gives you access to `attribute_method_prefix`, `attribute_method_suffix`, and now `attribute_method_affix`.  While it may sound a little silly, check this out:

<pre><code class="ruby">
class Person < ActiveRecord::Base
  attribute_method_affix :prefix => 'me_mateys_', :suffix => '_is_in_pirate?'
  
  private
  
  def me_mateys_attribute_is_in_pirate?(attr)
    send(attr).to_s =~ /\bYAR\b/i
  end
end

person = Person.find(1)
person.name                               #=> 'Paul Gillard'
person.profession                         #=> 'A Pirate, yar!'
person.me_mateys_name_is_in_pirate?       #=> false
person.me_mateys_profession_is_in_pirate? #=> true
</code></pre>

Okay, well, that's still a little silly, but hopefully you get the idea and can think of a few usage scenarios of your own.  So, basically, now you can add your own dynamic ActiveRecord methods that can potentially affect any or all of it's attributes.

#### Clean yourself up

Paul Gillard posted [another useful patch](http://github.com/rails/rails/commit/bada18dc36e3875dea1814ffaab1e8d1ac24b521), utilizing that one previously mentioned, to now provide us all with this syntactic sugar:  `reset_attribute!`  And he even provided us with a pirate of his own to show off this new bounty:

<pre><code class="ruby">
pirate = Pirate.create!(:catchphrase => 'Yar!')
pirate.catchphrase = 'Ahoy!'
pirate.reset_catchphrase!
assert_equal "Yar!", pirate.catchphrase
assert_equal Hash.new, pirate.changes
assert !pirate.catchphrase_changed?
</code></pre>

Nobody likes a dirty pirate.

