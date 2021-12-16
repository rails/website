---
layout: post
title: Freeze is cool, so freeze for goodness sake
categories:
- general
author: David
published: true
date: 2006-03-31 04:50:41.000000000 +01:00
---
<p>Many shared hosts did a quick dance up and down at the release of Rails 1.1 because a large number of their customers were floating off the gems, which meant that upgrading the gems automatically updated all the applications. Some applications couldn&#8217;t handle the upgrade (most notably Typo), so they broke. And the customers were none too happy and complained to the hosts: &#8220;Why oh why, dear host, would you upgrade and break my application?&#8221;</p>
<p>This is obviously bad. But nothing is so bad that you can&#8217;t learn from it. And this is a wonderful opportunity to learn that <b>You Should Freeze Rails For Any Application In Production</b>. Sure, <a href="https://rubyonrails.org/articles/2005/12/22/freezing-your-rails-when-you-deploy-shared">we talked about that back in December</a>, but talk is cheap (and often overheard).</p>
<p>So here follows a lifted finger and a promise. The lifted finger first:</p>
<blockquote>If thou bless thee world with an application of open source, thou <b>must</b> ship it with the version of Rails that thou knowest it to work with in vendor/rails.</blockquote>
<p>Here&#8217;s one counter argument that will not allow you to evade this finger: &#8220;But it&#8217;ll make my app X% larger to download&#8221;. In this day of age, nobody cares. Time is more valuable than disk space and saving hair-pulling aggravation over broken dependencies is infinitely more valuable than disk space.</p>
<p>Then the promise: The next version of Rails will by default extract the version of Rails it was created with into vendor/rails. This will get everyone into the Christmas spirit of being good on day one. It&#8217;ll be natural to desire less dependencies and you will soon froth at the notion of a shared host controlling the destiny of your application by choosing to update some gems. And you will be happy and content.</p>