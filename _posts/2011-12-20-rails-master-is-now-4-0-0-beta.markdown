---
layout: post
title: Rails/master is now 4.0.0.beta
categories: []
author: David
published: true
date: 2011-12-20 15:33:00.000000000 +00:00
---
<p>The <a href="https://rubyonrails.org/2011/12/20/rails-3-2-rc1-faster-dev-mode-routing-explain-queries-tagged-logger-store">forthcoming 3.2.x release series</a> will be the last branch of Rails that supports Ruby 1.8.7. There&#8217;s a new <a href="https://github.com/rails/rails/tree/3-2-stable">3-2-stable branch</a> in git to track the changes we need until 3.2.0 final is release and for managing point releases after that.</p>
<p>So for now you should stop floating on rails/master if your application is not compatible with Ruby 1.9.3. We have updated the version numbers to indicate this backwards incompatibility to be 4.0.0.beta. This doesn&#8217;t mean that 4.0 is anywhere close to being released, mind you. We&#8217;re simply doing this now because we&#8217;re dropping support for Ruby 1.8.7 in rails/master and people should know what&#8217;s up.</p>
<p>Major versions of Rails has been on about 2-year release cycle since 1.0 (<a href="https://rubyonrails.org/2005/12/13/rails-1-0-party-like-its-one-oh-oh/">released in 2005</a>, <a href="https://rubyonrails.org/2007/12/7/rails-2-0-it-s-done">followed by 2.0 in 2007</a>, <a href="https://rubyonrails.org/2010/8/29/rails-3-0-it-s-done">followed by 3.0 in 2010</a>) and we intend to continue this pattern. The current internal target for Rails 4.0 is sometime in the Summer of 2012 &mdash; but we have blown every major release estimate in the past, so don&#8217;t bet your farm on it.</p>
<p>There&#8217;s not a lot of details about what we&#8217;re going to include in Rails 4.0 yet as the primary purpose for bumping the major version number is to drop Ruby 1.8.7 support. But unlike Rails 3.0, we intend for it to be a much smoother transition. The intention is not for this to be a <span class="caps">REWRITE</span> <span class="caps">EVERYTHING</span> release in the same way 3.0 was to some extent.</p>
<p>But we&#8217;re getting ahead of ourselves. First mission is to get Rails 3.2 out!</p>