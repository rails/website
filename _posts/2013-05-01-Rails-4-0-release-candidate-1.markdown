---
layout: post
title: 'Rails 4.0: Release Candidate 1 released!'
category: releases
author: dhh
published: true
date: 2013-05-1 16:30:00 -06:00
---
Just in time for the opening of RailsConf, we managed to push out the first release candidate of Rails 4.0. This incorporates no less than 1,368 commits since beta 1. You can see <a href="https://github.com/rails/rails/compare/v4.0.0.beta1...v4.0.0.rc1">the full list of changes on Github</a>. If you're interested in a high-level review of what's in Rails 4.0, please see <a href="https://rubyonrails.org/2013/2/25/Rails-4-0-beta1/">the announcement we made for beta 1</a>.

As last time, please give this release candidate an honest try. This is pretty much the version we're going to ship unless people find and report blocking issues. Depending on how much stuff is unearthed, we expect that the final version could drop in as little as 3-4 weeks. Please report all the issues you find on the <a href="https://github.com/rails/rails/issues?state=open">Rails issue tracker</a>. 

We're still working on the <a href="http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html#upgrading-from-rails-3-2-to-rails-4-0">upgrade guide from 3.2 to 4.0</a>, but that's a good place to start for help on how to do it. We're also so lucky to have many authors and screencasters ready with material for 4.0. In the books department, you'll find Rails 4.0-ready versions of <a href="http://pragprog.com/book/rails4/agile-web-development-with-rails">Agile Web Development with Rails</a> and <a href="http://pragprog.com/book/jvrails2/crafting-rails-applications">Crafting Rails Applications</a>. For screencasts, checkout the new <a href="http://rails4.codeschool.com/videos">Rails 4: Zombie Outlaws</a> and <a href="http://pragmaticstudio.com/rails">Mike Clark's Rails 4 class</a>. There's new material and books coming out all the time from a variety of other authors and broadcasters, so we're really in good shape with training material timed for the release this time!

As always, install the release with `gem install rails --version 4.0.0.rc1 --no-ri --no-rdoc` or depend on the <a href="https://github.com/rails/rails/tree/v4.0.0.rc1">v4.0.0.rc1 tag</a>. We also have a new <a href="https://github.com/rails/rails/tree/4-0-stable">4-0-stable branch</a>. Master is now safe to move on to developing features for 4.1.

Go West, friends!