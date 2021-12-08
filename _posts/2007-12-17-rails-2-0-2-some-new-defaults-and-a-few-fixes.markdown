---
layout: post
title: ! 'Rails 2.0.2: Some new defaults and a few fixes'
categories:
- releases
author: David
published: true
date: 2007-12-17 14:47:00.000000000 +00:00
---
<p>Now that we have the big Rails 2.0 release out the door, it&#8217;s a lot easier to push out smaller updates more frequently. So that&#8217;s what we&#8217;re going to do. Rails 2.0.2 contains a bunch of smaller fixes to various bugs, no show-stopping action, just further polish. But it also contains a few new defaults.</p>
<p><b>SQLite3 is the new default database</b></p>
<p>Most importantly is SQLite3 as the new database we&#8217;ll configure for by default when you run the rails generation command without any specification. This change comes as SQLite3 is simply an easier out of the box experience than MySQL. There&#8217;s no fussing with GRANTs and creates, the database is just there. This is especially so under OS X 10.5 Leopard, which ships with SQLite3 and the driver gems preinstalled as part of the development kit.</p>
<p>If you want to preconfigure your database for MySQL (or any of the other adapters), you simply do &#8220;rails -d mysql myapp&#8221; and everything is the same as before. But if you&#8217;re just playing with a new application or building a smallish internal tool, then I strongly recommend having a look at SQLite3. Thanks to the agnostic db/schema.rb, it&#8217;s as easy as changing your config/database.yml to switch from SQLite3 to MySQL (or another database) as soon as your load warrants it.</p>
<p><b>Don&#8217;t check for template changes in production mode</b></p>
<p>New applications will be generated with the following option in their config/environments/production.rb:</p>
config.action_view.cache_template_loading = true
<p>This will stop Rails from constantly doing <span class="caps">STAT</span> calls to the file system to check if the file has changed. This can make for a lot of I/O activity, especially if you have lots of partials. If you have very fast disks, this may not matter, but if you&#8217;re running off slower disks it can make quite a big difference.</p>
<p>The drawback is that you can no longer just svnup a single template file and see it changed immediately. You&#8217;ll have to restart the application servers to make that happen.</p>
<p>Regardless, we feel that this is the better default in a partial-heavy world, but you&#8217;re of course always free to change it.</p>
<p><b>Rails 2.0.2 is a drop-in replacement for Rails 2.0</b></p>
<p>To upgrade, just do &#8220;gem install rails&#8221; (if the gems are still not propagated, use &#8212;source http://gems.rubyonrails.org) or use the new <a href="http://dev.rubyonrails.org/svn/rails/tags/rel_2-0-2/">rel_2-0-2 tag</a>.</p>
<p>The rest of the changes are as follows:</p>
<p><strong>Action Pack</strong></p>
<ul>
	<li>Added delete_via_redirect and put_via_redirect to integration testing #10497 [philodespotos]</li>
</ul>
<ul>
	<li>Allow headers[&#8216;Accept&#8217;] to be set by hand when calling xml_http_request #10461 [BMorearty]</li>
</ul>
<ul>
	<li>Added <span class="caps">OPTIONS</span> to list of default accepted <span class="caps">HTTP</span> methods #10449 [holoway]</li>
</ul>
<ul>
	<li>Added option to pass proc to ActionController::Base.asset_host for maximum configurability #10521 [chuyeow]. Example:</li>
</ul>
ActionController::Base.asset_host = Proc.new { |source|
if source.starts_with?(&#8216;/images&#8217;)
&#8220;http://images.example.com&#8221;
else
&#8220;http://assets.example.com&#8221;
end
}
<ul>
	<li>Fixed that ActionView#file_exists? would be incorrect if @first_render is set #10569 [dbussink]</li>
</ul>
<ul>
	<li>Added that Array#to_param calls to_param on all it&#8217;s elements #10473 [brandon]</li>
</ul>
<ul>
	<li>Ensure asset cache directories are automatically created.  #10337 [Josh Peek, Cheah Chu Yeow]</li>
</ul>
<ul>
	<li>render :xml and :json preserve custom content types.  #10388 [jmettraux, Cheah Chu Yeow]</li>
</ul>
<ul>
	<li>Refactor Action View template handlers.  #10437, #10455 [Josh Peek]</li>
</ul>
<ul>
	<li>Fix DoubleRenderError message and leave out mention of returning false from filters.  Closes #10380 [Frederick Cheung]</li>
</ul>
<ul>
	<li>Clean up some cruft around ActionController::Base#head.  Closes #10417 [ssoroka]</li>
</ul>
<p><strong>Active Record</strong></p>
<ul>
	<li>Ensure optimistic locking handles nil #lock_version values properly.  Closes #10510 [rick]</li>
</ul>
<ul>
	<li>Make the Fixtures Test::Unit enhancements more supporting for double-loaded test cases.  Closes #10379 [brynary]</li>
</ul>
<ul>
	<li>Fix that validates_acceptance_of still works for non-existent tables (useful for bootstrapping new databases).  Closes #10474 [hasmanyjosh]</li>
</ul>
<ul>
	<li>Ensure that the :uniq option for has_many :through associations retains the order.  #10463 [remvee]</li>
</ul>
<ul>
	<li>Base.exists? doesn&#8217;t rescue exceptions to avoid hiding <span class="caps">SQL</span> errors.  #10458 [Michael Klishin]</li>
</ul>
<ul>
	<li>Documentation: Active Record exceptions, destroy_all and delete_all.  #10444, #10447 [Michael Klishin]</li>
</ul>
<p><strong>Active Resource</strong></p>
<ul>
	<li>Added more specific exceptions for 400, 401, and 403 (all descending from ClientError so existing rescues will work) #10326 [trek]</li>
</ul>
<ul>
	<li>Correct empty response handling.  #10445 [seangeo]</li>
</ul>
<p><strong>Active Support</strong></p>
<ul>
	<li>Ruby 1.9 compatibility.  #1689, #10466, #10468 [Cheah Chu Yeow, Pratik Naik, Jeremy Kemper]</li>
</ul>
<ul>
	<li>TimeZone#to_s uses <span class="caps">UTC</span> rather than <span class="caps">GMT</span>.  #1689 [Cheah Chu Yeow]</li>
</ul>
<ul>
	<li>Refactor of Hash#symbolize_keys! to use Hash#replace.  Closes #10420 [ReinH]</li>
</ul>
<ul>
	<li>Fix HashWithIndifferentAccess#to_options! so it doesn&#8217;t clear the options hash.  Closes #10419 [ReinH]</li>
</ul>
<p><strong>Rails</strong></p>
<ul>
	<li>Changed the default database from mysql to sqlite3, so now running &#8220;rails myapp&#8221; will have a config/database.yml that&#8217;s setup for SQLite3 (which in OS X Leopard is installed by default, so is the gem, so everything Just Works with no database configuration at all). To get a Rails application preconfigured for MySQL, just run &#8220;rails -d mysql myapp&#8221; [<span class="caps">DHH</span>]</li>
</ul>
<ul>
	<li>Turned on ActionView::Base.cache_template_loading by default in config/environments/production.rb to prevent file system stat calls for every template loading to see if it changed (this means that you have to restart the application to see template changes in production mode) [<span class="caps">DHH</span>]</li>
</ul>
<ul>
	<li>Introduce `rake secret` to output a crytographically secure secret key for use with cookie sessions #10363 [revans]</li>
</ul>
<ul>
	<li>Fixed that local database creation should consider 127.0.0.1 local #9026 [parcelbrat]</li>
</ul>
<ul>
	<li>Fixed that functional tests generated for scaffolds should use fixture calls instead of hard-coded IDs #10435 [boone]</li>
</ul>
<ul>
	<li>Added db:migrate:redo and db:migrate:reset for rerunning existing migrations #10431, #10432  [matt]</li>
</ul>
<ul>
	<li>RAILS_GEM_VERSION may be double-quoted also.  #10443 [James Cox]</li>
</ul>
<ul>
	<li>Update rails:freeze:gems to work with RubyGems 0.9.5.  [Jeremy Kemper]</li>
</ul>