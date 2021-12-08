---
layout: post
title: This Week in Edge Rails
categories: []
author: Mike Gunderloy
published: true
date: 2009-02-13 13:45:00.000000000 +00:00
---
<h3>February 7, 2009 &#8211; February 13, 2009</h3>
<p>It&#8217;s been a fairly busy week on the edge, but there are not a lot of new features to point at. That&#8217;s good: at this point in the release cycle, the team is concentrating on nailing down things to be solid even in strange circumstances. This is also the point at which <em>your</em> help is critical: if a change affects one of your applications, and you don&#8217;t tell anyone about it, you can&#8217;t expect a fix. You don&#8217;t need to be running your applications full-time on RC1, but please, check out edge Rails, try it out, and report anything that seems to be broken. Bonus points if you include tests to show the expected behavior, and super bonus points if you submit a patch to go with it.</p>
<h2>View Rendering Changes</h2>
<p>A series of commits have addressed some issues with view rendering. The end result is to improve the performance of view rendering in development mode, <em>and</em> to bring back template recompiling in production mode (so you can change a view and have the changes show up without having to restart the whole server). Some of this work is ported from <a href="http://github.com/thedarkone/rails-dev-boost/tree/rails-2-3/lib/rails_development_boost/cached_templates_patch">rails-dev-boost</a> and if you want to come up to speed on what&#8217;s been done here the best thing to do is read the <a href="http://rails.lighthouseapp.com/projects/8994/tickets/1909">Lighthouse ticket</a></p>
<h2>Partial Scoping for Translations</h2>
<p>A change to the translation <span class="caps">API</span> makes things easier and less repetitive to write key translations within partials. If you call <code>translate(".foo")</code> from the <code>people/index.html.erb</code> template, you&#8217;ll actually be calling <code>I18n.translate("people.index.foo")</code> If you don&#8217;t prepend the key with a period, then the <span class="caps">API</span> doesn&#8217;t scope, just as before.</p>
<p><a href="http://github.com/rails/rails/commit/7527cdf79c640eae5db29a6f3f9b955aa50bc29e">commit</a></p>
<h2>Nested Attributes <span class="caps">API</span> Change</h2>
<p>The <span class="caps">API</span> for <code>NestedAttributes</code> has been changed so as to work better with existing associations. If you&#8217;ve just used this for nested model forms, the changes will probably be transparent to you, but if you&#8217;ve been deeper into the internals you should have a look at the discussion in <a href="http://rails.lighthouseapp.com/projects/8994/tickets/1892">Lighthouse</a> as well as the code in the commit.</p>
<p><a href="http://github.com/rails/rails/commit/5dbc9d40a49f5f0f50c2f3ebe6dda942f0e61562">commit</a></p>
<h2>Less Brittle Tests for Scaffolded Controllers</h2>
<p>The automatically-generated functional tests for controllers generated with <code>script/generate scaffold</code> now use <code>to_param</code> instead of <code>id</code> to identify records, which should make them more resilient to changes in fixtures over time.</p>
<p><a href="http://github.com/rails/rails/commit/0c956443964a20cbcc122e2d8c429b0cbb121828">commit</a></p>
<h2>TimeWithZone changes</h2>
<p>There were some internal changes to <code>TimeWithZone</code> that make its code more readable and efficient. One change surfaces to the <span class="caps">API</span>: <code>TimeWithZone#to_formatted_s</code> is an alias for <code>TimeWithZone#to_s</code>.</p>
<p><a href="http://github.com/rails/rails/commit/18d636934492fd657a67dc980b8556bcf69a818d">commit</a></p>
<h2>A New Inflection</h2>
<p>Breaking a long-standing policy, there was actually a change to the built-in list of pluralizations this week: Rails now handles database/databases correctly. Remember, a foolish consistency is the hobgoblin of little minds, and please don&#8217;t take this as an invitation to reopen the old <a href="http://dev.rubyonrails.org/ticket/10919">ticket 10919</a>. The policy remains that you can add inflections in your own application&#8217;s initializers if you need to do so.</p>