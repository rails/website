---
layout: post
title: Shiny new Subversion and Trac cluster
categories:
- general
- edge
- horizon
- releases
author: Jeremy Kemper
published: true
date: 2007-02-10 08:08:00.000000000 +00:00
---
<p>You&#8217;ve all noticed the excruciating Rails svn updates and Trac molasses in the last couple of weeks. Following the <a href="https://rubyonrails.org/2007/1/19/rails-1-2-rest-admiration-http-lovefest-and-utf-8-celebrations">release of Rails 1.2</a> we thoroughly overwhelmed our development server, no small feat for a hefty dual Xeon. Congratulations, all, for your hearty Rails appetite! Your sustained Mbps say more than words possibly could.</p>
<p>Our <a href="http://joyent.com/team/jasonhoffman/">friends</a> at <a href="http://textdrive.com/">TextDrive</a> have stepped up once again to keep Rails development running smoothly and your production apps deploying predictably. Please give a warm welcome to our new development cluster, a load-balanced crew of SunFires and Thumpers hosting Trac at <a href="http://dev.rubyonrails.org/">dev.rubyonrails.org</a> and Subversion at <a href="http://svn.rubyonrails.org/rails/">svn.rubyonrails.org</a>.</p>
<p>Subversion will remain available at <a href="http://dev.rubyonrails.org/svn/rails/">the old dev <span class="caps">URL</span></a> so you needn&#8217;t touch your live apps. Feel free to migrate to the <a href="http://svn.rubyonrails.org/rails/">new <span class="caps">URL</span></a> at your own speed.</p>