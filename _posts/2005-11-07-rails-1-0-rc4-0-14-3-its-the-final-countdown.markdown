---
layout: post
title: ! 'Rails 1.0 RC4 (0.14.3): It''s the final countdown!'
categories:
- releases
author: David
published: true
date: 2005-11-07 21:30:14.000000000 +00:00
---
<p>Comrades, we are so close to the goal that the relieve should be tastable. The mythical 1.0 release is now penned to be the very next release once we rattle out the heinous bugs from this one. So we need every man, woman, and child at work testing the living daylights out of this final release candidate. Upgrade your apps, start new ones, kick the tires, rev the engine, do it all!</p>
<p>So what&#8217;s new? What&#8217;s in there to make it pay to upgrade today rather than at 1.0? Lots! In a regular universe, this would have counted as more than merely a 0.0.1 increment. We got a ton of stuff especially for Active Record and the Rails infrastructure.</p>
<p><strong>The new commands</strong></p>
<ul>
	<li>script/server: Will now use lighttpd/<span class="caps">FCGI</span> if both are available on the system. This makes for a considerably faster development experience than WEBrick, but is unfortunately a OS X/nix thing only. Windows users will continue to get a WEBrick-powered server launched.</li>
	<li>script/plugin: Your gateway to the wonderful world of plugins. Helps you install, manage, and discover new plugins. See script/plugin &#8212;help for more.</li>
	<li>script/about: Gives you the all the versions for Rails and associates. See <a href="http://bumble.jamisbuck.org/6">the sample</a>.</li>
</ul>
<p><strong>Active Record: find_or_create_by_X, association collection extensions, migrations for all databases</strong></p>
<p>We&#8217;ve added a new dynamic finder that allows you to find or create a new record on the basis of attributes passed, such as saying Tag.find_or_create_by_name(&#8220;Summer&#8221;). It even works on associations, so page.tags.find_or_create_by_name(&#8220;Summer&#8221;) is kosher too.</p>
<p>Extensions for association collections is a sexy new way of adding methods to the proxies that all access delegate through. Example:</p>
<pre><code>
class Account &lt; ActiveRecord::Base
  has_many :people do
    def find_or_create_by_name(name)
      first_name, *last_name = name.split
      last_name = last_name.join " "
 
      find_or_create_by_first_name_and_last_name(first_name, last_name)
    end
  end
end
 
person = Account.find(:first).people.find_or_create_by_name("David Heinemeier Hansson")
person.first_name # =&gt; "David"
person.last_name  # =&gt; "Heinemeier Hansson"
</code></pre>
<p>And finally we&#8217;ve really put the spit and polish on the database adapters by adding migration support to all the commercial ones. As well as giving especially the <span class="caps">SQL</span> Server one a good loving in general.</p>
<p><strong>Action Pack: Better filter controls, fixed ActiveRecordStore, and redirect_to :back</strong></p>
<p>Action Controller now has skip_before_filter and skip_after_filter to sidestep certain filters set in superclasses that doesn&#8217;t apply to the current controller. Such as specifying :authenticate in ApplicationController, but skiping it in the SignupController.</p>
<p>The ActiveRecordStore no longer only saves when changes have occured, so you can again rely on updated_at being incremented at each page view, and thus rely on it for garbage collection.</p>
<p>Finally we now have an easy way of saying &#8220;go back to where you came from&#8221; with redirect_to :back.</p>
<p><strong>Upgrading from 0.14.x</strong></p>
<p>It has never been so easy to upgrade to the latest and greatest if you&#8217;re on 0.14.x series. You get almost all of it for free simply by installing the latest gems and the rest by running these two commands:</p>
<pre><code>
rake update_javascripts
rake add_new_scripts
</code></pre>
<p>I&#8217;ll let you figure out what those do.</p>
<p><strong>Upgrading from 0.13.x (or earlier)</strong></p>
<p>Jeremy Kemper has put together a great <a href="http://manuals.rubyonrails.org/read/book/19">guide to upgrading from an earlier version</a>.</p>
<p><strong>What else is new?</strong></p>
<p>As usual, you get the full play-by-play story of the changes by examining the changelogs. Such wonderful bedtime reading.</p>
<ul><li><a href="http://api.rubyonrails.com/files/CHANGELOG.html">Rails 0.14.3</a></li><li><a href="http://api.rubyonrails.com/files/vendor/rails/actionmailer/CHANGELOG.html">Action Mailer 0.11.3</a></li><li><a href="http://api.rubyonrails.com/files/vendor/rails/actionpack/CHANGELOG.html">Action Pack 1.11.0</a></li><li><a href="http://api.rubyonrails.com/files/vendor/rails/actionwebservice/CHANGELOG.html">Action Web Service 0.9.3</a></li><li><a href="http://api.rubyonrails.com/files/vendor/rails/activerecord/CHANGELOG.html">Active Record 1.13.0</a></li><li><a href="http://api.rubyonrails.com/files/vendor/rails/activesupport/CHANGELOG.html">Active Support 1.2.3</a></li></ul>