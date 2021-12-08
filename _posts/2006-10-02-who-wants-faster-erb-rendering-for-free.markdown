---
layout: post
title: Who wants faster ERb rendering for free?
categories:
- sightings
author: David
published: true
date: 2006-10-02 12:44:00.000000000 +01:00
---
<p>Stefan Kaes from <a href="http://railsexpress.de">RailsExpress</a> has <a href="http://railsexpress.de/blog/articles/2006/08/15/rails-template-optimizer-beta-test">recently released</a> a Rails plugin that greatly reduces the time Rails spends for rendering ERb templates. He&#8217;s now looking for help to get the code out of beta.</p>
<p>The basic idea behind the plugin is to improve rendering speed by partially evaluating the code produced by ERb at template compile time. This is especially helpful for pages that contain many calls to helpers that make use of Rails&#8217; route generation, because most routes can be resolved at template compile time.</p>
<p>Stefan has reported some data on the speedups obtainable which looks very promising.</p>
<p>He has set up <a href="http://railsexpress.de/plugins/trac">Trac</a> for you to submit bug reports, feature requests and patches.</p>