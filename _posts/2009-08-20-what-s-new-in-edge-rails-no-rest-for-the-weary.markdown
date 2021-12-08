---
layout: post
title: ! 'What''s New in Edge Rails: No REST for the weary'
categories:
- edge
author: Nathaniel Bibler
published: true
date: 2009-08-20 15:01:00.000000000 +01:00
---
<img src="/assets/2009/8/20/hood-river-sunset_1.jpg" height="110" width="450" alt=""/>

This week's post will be rather short and sweet.  The notable commits of the week seemed to revolve mainly around refactoring and even slightly altering the way some of the bits work.  Lets get into it:

## I'm Partially impressed

Yehuda Katz was able to <a href="http://github.com/rails/rails/commit/9f5cd0156ab907d8097fc9c588823a9b09038b93">simplify</a> some of the partial rendering logic this week, although in doing so seems to very slightly alter the call methodology.  So now, when calling the local object from within a partial, you will have the choice of using either the partial name (i.e. "`_post.html.erb`" would be "`post`") as the reference for the local object, or you may make it unique by passing in the :as option (i.e. `render :partial => "post", :as => "poster_boy"` would be "`poster_boy`").  You no longer have the option of using both interchangeably from within your partial.  Also, the `:object` option for `render :partial` has been removed, in favor of the methods previously mentioned.

## We won't Accept it

The way in which Rails handles incoming <a href="http://github.com/rails/rails/commit/1310231c15742bf7d99e2f143d88b383c32782d3">`Accept` headers</a> has been updated.  This was primarily due to the fact that web browsers do not always seem to know what they want ... let alone are able to consistently articulate it.  So, Accept headers are now only used for XHR requests or single item headers - meaning they're not requesting everything.  If that fails, we fall back to using the `params[:format]`.

It's also worth noting that requests to an action in which you've only declared an XML template will no longer be automatically rendered for an HTML request (browser request).  This had previously worked, not necessarily by design, but because most browsers send a catch-all Accept header ("`*/*`").  So, if you want to serve XML directly to a browser, be sure to provide the :xml format or explicitly specify the XML template (render "template.xml").

## I'll tell you where you can go...

Josh Peek finally removed the deprecated "<a href="http://github.com/rails/rails/commit/911acc10de483e0d7a9e6b3c475aeaecad49bfc5">best fit</a>" route generation support.  Mostly for the sake of speed and maintainability, the new router will simply use the first matching route in your `routes.rb` file, rather than the "best" match.  If you've been working at all on the Edge and haven't noticed the deprecation warnings, then this probably won't affect you.

## Oh, so that's why!

Jay Pignata provided a patch this week to help out all of you RESTful API developers.  Previously, when a client sent invalid XML or JSON to your server, Rails would 500 with an oh-so-descriptive /!\ FAILSAFE /!\ error in your logs.  This wasn't much help if you were trying to debug it.  So, with this patch, you'll now get to <a href="http://github.com/rails/rails/commit/679128da58636f3ec96e24fcb7daac24666b2dad">look at the raw data</a> that was posted to your server in your logs.

## Speaking of Resources

Finally, a few updates went into ActiveResource this week which will make it a lot more familiar to those of us who are more comfortable with ActiveRecord.  <a href="http://github.com/rails/rails/commit/c2f90d6530dfd0ed68df9f4c429d0f498235e1d4">Validation support</a> has been added, which will allow you to both validate your resources locally - before transmission - and remotely.  ActiveResource <a href="http://github.com/rails/rails/commit/4dc05bc8a9824b9404cebecaba28f9f248f9995e">no longer throws</a> a ResourceNotFound error when you attempt to find a set of undefined resources [`Resource.find(:all)`].  Instead, ActiveResource is reverting to the more ActiveRecord-like empty set/nil response.  And last, but not least, <a href="http://github.com/rails/rails/commit/328ba3b333777bbc1269cbe0e9f590c845006c9d">`resource.save!`</a> will now raise a ResourceInvalid unless the resource is, actually .. well .. valid?

That's it for this week's update on Edge Rails.  I hope that you've enjoyed it.

<small>Photo: <a href="http://www.flickr.com/photos/brostad/3307797143">Hood River Sunset</a> by Bernt Rostad</small>