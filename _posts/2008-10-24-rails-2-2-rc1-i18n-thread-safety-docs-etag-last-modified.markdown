---
layout: post
title: ! 'Rails 2.2 RC1: i18n, thread safety, docs, etag/last-modified, JRuby/1.9
  compatibility'
categories:
- releases
author: David
published: true
date: 2008-10-24 12:47:00.000000000 +01:00
---
<p>Rails 2.2 is almost ready for its final release, but before we christen the gems, we&#8217;d like to have everyone test out a release candidate. Rails 2.2 is a major upgrade that includes a wealth of new features and fixes.</p>
<p>Chief inclusions are an internationalization framework, thread safety (including a connection pool for Active Record), easier access to <span class="caps">HTTP</span> caching with etags and last modified, compatibility with Ruby 1.9 and JRuby, and a wealth of new documentation.</p>
<p>Mike Gunderloy has compiled an exhaustive list and walk-through of many of the interesting new features for the <a href="http://guides.rubyonrails.org/2_2_release_notes.html">Rails 2.2 release notes</a>.</p>
<p>To help test the Rails 2.2 release candidate, please install with:<br/> <code>gem install rails -s http://gems.rubyonrails.org -v 2.2.0</code></p>
<p>Hopefully there will not be too much folly in the RC and we can quickly move to a final release. But it requires your help to get there.</p>
<p>Note that this release is called 2.2.0, not 2.1.99 as our previous naming scheme would have dictated. So the final release of Rails 2.2 will actually be 2.2.1 (if we only need one RC).</p>