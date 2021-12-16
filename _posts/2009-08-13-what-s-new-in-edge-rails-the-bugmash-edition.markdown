---
layout: post
title: ! 'What''s New in Edge Rails: The BugMash Edition'
categories:
- edge
author: Nathaniel Bibler
published: true
date: 2009-08-13 13:44:00.000000000 +01:00
---
<img src="/assets/2009/8/12/157412508_3feb1518e1_s_1.jpg" height="89" width="500" alt="" />

Another week, another update on Edge Rails.  And man, you aren't making this easy on me, are ya?  This weekend, in case you hadn't already heard, was the first [Rails and RailsBridge BugMash](http://wiki.railsbridge.org/projects/railsbridge/wiki/BugMash).  If my count is correct, there were roughly 300 commits to the Rails master over the past six days, with most of them pushing in over the weekend.  Talk about a trial by fire!  There's a lot of _really_ good stuff in here, so let's get started:

## All I ever wanted was a little Validation

ActiveRecord (or probably more accurately, ActiveModel) received a lot of validation love this weekend.

* Thanks to James Hill you can now have your validations [read from a custom method](http://github.com/rails/rails/commit/cfd421daa2b04216e27d666361eb4053020e027d).  This will allow you to more easily validate non-column - instance variable - data, for example.
* Adam Keys added support for [exclusive ranges](http://github.com/rails/rails/commit/5632b36701ad9514d596c558877cd74c14c1d54b) in `validates_length_of`.  So, `validates_length_of :name, :within => (5...10)` will actually restrict the valid length to between 5 and 9.
* Thanks to Zac Williams, `validates_length_of :name, :maximum => 10` will now [allow `nil` values](http://github.com/rails/rails/commit/5ab94b2595836fe2de36fd632ba9577c459b1292) to validate, by default.
* What good is `validates_format_of` if you can't [`validates_format_of :without => /.../`](http://github.com/rails/rails/commit/cccb0e6b9327fb562b72007a012933c9c61a33fa)?  Well, not much, let me tell you... Elliot Winkler provided a patch do to just that.
* And last, but certainly not least Jeff Dean committed a great patch, which now brings to us: [`validates_with`](http://github.com/rails/rails/commit/22f339825329e2d4463a4130e9fa68baf9d27eb6).  This little beauty now allows you place validation code into an external class.  And that, my friends, means better encapsulation of responsibility, I'll bet on better readability, and even shared validation logic across your application or possibly even gems.  Nice job, Jeff.

## We're so much more Resourceful

There were quite a number of updates to ActiveResource over the weekend.  And, I'm sure many of you are going to be quite thankful for some of these:

* ActiveResource now [supports HTTP proxies](http://github.com/rails/rails/commit/4d1552810f631898c3d7f758454c92ca35a8cb26) thanks to Marshall Huss.  This should be highly useful in large corporate and other firewalled or isolated environments.
* ActiveResource gets [SSL options](http://github.com/rails/rails/commit/3e0951632c52018eefb86d9e0bfe77383f9622fb) from Roy Nicholson.  This allows you to use X509 certificates, SSL timeouts, peer verification, and more.
* [`ActiveResource.exists?`](http://github.com/rails/rails/commit/08ec22054f56442b10f67e41c3b7593da6adcabd) got some polish from Jatinder Singh.  And, by polish, I really mean that now it works.  Instead of raising Net::HTTP errors.
* Fabien Jakimowicz added [JSON error reporting](http://github.com/rails/rails/commit/797588543ed70b4c5dcf51d7f1e4a77082172f0b) support.  So, now regardless of whether you're using either XML or JSON, errors will be correctly reported back to you.

## There's strength in numbers

Thanks to Dan Cheail, we finally get a [`grouped_collection_select`](http://github.com/rails/rails/commit/8c32248acbd71f7906a037fad499e2f8cae61bed) helper.   I mean come on, there's no way you can tell me that you can't love this:

<pre><code lang="ruby">class Continent &lt; ActiveRecord::Base
class Country &lt; ActiveRecord::Base
class City &lt; ActiveRecord::Base

&lt;%= grouped_collection_select(:city, :country_id, @continents, :countries, :name, :id, :name) %&gt;

&lt;select name="city[country_id]"&gt;
  &lt;optgroup label="Africa"&gt;
    &lt;option value="1"&gt;South Africa&lt;/option&gt;
&lt;option value="3"&gt;Somalia&lt;/option&gt;
  &lt;/optgroup&gt;
&lt;optgroup label="Europe"&gt;
&lt;option value="7" selected="selected"&gt;Denmark&lt;/option&gt;
    &lt;option value="2"&gt;Ireland&lt;/option&gt;
&lt;/optgroup&gt;
&lt;/select&gt;
</code></pre>

## I have massive Routes

This weekend brought a small, but incredibly useful patch to [`rake routes`](http://github.com/rails/rails/commit/e8dc151396b6b92e243ac48b58abbe66be6f09b4) by Mike Breen.  Now you can filter the listed results by passing in `CONTROLLER=foo`.  That's. just. awesome.  Personally, it's gotten to the point that my fingers just assume that they are to append the "`| grep foo`" portion whenever I type `rake routes`.. apparently I have nerd muscle memory.  \*sigh\*

## Short and sweet

I'll end the BugMash portion here with just a few more commits worth mentioning.  Certainly this wasn't the extent of the BugMash and I could probably fill up another post just as long with even more mashed bugs and features, but it's gotta end somewhere, right?

* Rizwan Reza added support for you to define [custom RedCloth options](http://github.com/rails/rails/commit/7dbb2b6f83c5a1a5f4ef0a97fee5322957977306) via the `textilize` helper.  So, now, `textilize("Testing <b>HTML</b>", :filter_html)` will actually filter the HTML!
* You can now [`redirect_to(User)`](http://github.com/rails/rails/commit/c284412b149e03f46144ef566bcd6a16750961b1) - note that `User` is a class not an instance here - as a synonym for `redirect_to(users_url)`.  Thanks to Niklas Holmgren for that.
* Delivered mail items now have the ability to [save to disk](http://github.com/rails/rails/commit/fbe6c3c19553fd05edc904af62fbfc8aee1d907d) because of Eric Davis.  When using the new `:file` delivery method, you can even define your own custom `:location` for directory storage.
* And finally, it's not necessarily BugMash-related, but José Valim - among dozens of other commits - added [`model.destroyed?`](http://github.com/rails/rails/commit/7034272354ad41dd4d1c90138a79e7f14ebc2bed).  This nifty method will return `true` only if the instance you're currently looking at has been successfully destroyed.

Now that we're clear of those, here are a couple of non-BugMash-related topics which were addressed:

## A visit to the Oracle

There's a difference between knowing the path and walking the path.  And this week saw some updates to Rails, mostly around testing, adding [improved Oracle database support](http://github.com/rails/rails/commit/06afa48c8c7bb7bf75f9e7ae48e06528f8ff82ed).  A large amount of this effort appears to be coming from one man, Raimonds Simanovskis.  I know when we talk about databases with Rails, it's always the big four - SQLite, MySQL, PostgreSQL, and that other one which shall not be named - so it's nice to get a little more focus the 800lb. gorilla in the room.

This update fixed failing test cases due to offset and limits, empty strings storing as null, numeric results from ActiveRecord.sum, Oracle not utilizing an 'AS' keyword on joins, and many more.

## AbstractController::Responder

José Valim and Yehuda Katz (and many others, I'm sure) have put in some excellent work in refactoring the Rails renderer.  In fact, the majority of the rendering code has come to find a home in a common object, the [AbstractController::Responder](http://github.com/rails/rails/commit/aed135d3e261cbee153a35fcfbeb47e2e02b12e4).  Certainly, this may not be its final resting place, but it's interesting to note that once a lot of the render logic was brought together the core team was able to quickly identify and refactor the logic to see some dramatic speed increases.  At one point, Yehuda even mentioned a tested benchmark showing, "10% faster partial rendering," than Rails 2.3.

I know that in the RailsEnvy podcast I jabbed a few ribs about the amount of time it's taken to see a Rails 3.0 release, but it's important to note that these guys are doing some seriously awesome work.  I'm seeing extensive testing and benchmarking and very intelligent refactorings.  We've really got some great things yet to come.

I'm sure I've left out several important and/or interesting commits this week.  So, I apologize if one of those was yours.  I, and the rest of the community, certainly appreciate the effort you all put in this weekend and Rails is certainly better for it.  So, thank you, thank you, thank you to all of you BugMashers out there.  And, if you missed out on getting your commit in this round, we're certainly ready to welcome you into the next.

If you prefer to have a shorter audio summary of this content, you should check out a new podcast just launched by Envy Labs, called [Ruby5](http://ruby5.codeschool.com); a 5 minute, twice-weekly podcast covering Ruby and Ruby on Rails news.

<small>Photo: <a href="http://www.flickr.com/photos/3336/157412508/">Brooklyn Bridge Virtual Tour</a> by Diego_3336</small>
