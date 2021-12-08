---
layout: post
title: Capistrano 2.0 Preview 2
categories: []
author: jamis
published: true
date: 2007-05-11 04:47:00.000000000 +01:00
---
<p>The upcoming Capistrano 2.0 release continues to evolve! Remote administration of single servers and server clusters has never been easier. With Capistrano, you can:</p>
<ul>
	<li>Deploy web applications with a single command</li>
	<li>Keep software in sync across multiple machines</li>
	<li>Install entire servers with just a few keystrokes</li>
	<li>Impress the ladies with your leet sysadmin skills</li>
</ul>
<p>Ok, well, maybe not that last, unless she&#8217;s a <em>really</em> special lady. But the rest certainly apply.</p>
<p>Capistrano 2.0 Preview Release 2 is now available (version 1.99.1). You can only grab it from the Rails beta gem server:</p>
<macro:code lang="text">gem install -s http://gems.rubyonrails.com capistrano</macro:code>
<p><span class="caps">NOTE</span> that Capistrano 2.0 is not 100% backwards-compatible with Capistrano 1.x recipes. For more information on upgrading, check out <a href="http://www.capify.org/upgrade">http://www.capify.org/upgrade</a>.</p>
<p>To install the preview release, you&#8217;ll need to make sure you&#8217;ve already got the following gems installed, too, which Capistrano depends on (and which can be found in the main Rubygems repository):</p>
<ul>
	<li>net-ssh</li>
	<li>net-sftp</li>
	<li>highline</li>
</ul>
<p>Download it, install it, try it out. Kick the tires. Report what doesn&#8217;t work. We&#8217;re getting close to a general release!</p>
<p>SO. Now that all of that is out of the way, let&#8217;s talk about what&#8217;s new in PR2. First, the bug fixes:</p>
<ul>
	<li>The &#8220;copy&#8221; deployment strategy now checks out the local copy to a temporary directory, rather than using the current working directory. This makes it possible to use with some picky SCM&#8217;s that don&#8217;t like checkouts being made into an existing checkout.</li>
	<li>The &#8220;deploy:check&#8221; task was broken for some deployment strategies. It should work now for all of the pre-packaged strategies.</li>
	<li>The &#8220;shell&#8221; task should actually work now.</li>
	<li>The &#8220;desc&#8221; keyword will apply to the next defined task, regardless of which namespace the task is defined in.</li>
	<li>Don&#8217;t retry failed connections when an explicit :auth_methods list is given via :ssh_options.</li>
	<li>Fixed a few minor documentation typos.</li>
</ul>
<p>Next, the new features:</p>
<p><strong>Feature:</strong> The &#8220;deploy:cold&#8221; task will run migrations before starting the app. If it is the first time you&#8217;ve deployed your app, chances are the database needs setting up, too!</p>
<p><strong>Feature:</strong> The old method of extending tasks (e.g., tasks named &#8220;before_deploy&#8221; and &#8220;after_deploy&#8221; extending the &#8220;deploy&#8221; task) is now discouraged (though not formally deprecated, yet). The new approach uses some new keywords:</p>
<macro:code lang="ruby">before :deploy, :my_custom_task<br />
after  &#8220;deploy:symlink&#8221;, :do_this, :and_do_that</macro:code>
<p>More generally, you can attach tasks of your own creation to arbitrary &#8220;events&#8221;, using the &#8220;on&#8221; keyword:</p>
<macro:code lang="ruby">on :before, :my_custom_task, :only =&gt; :deploy<br />
on :after, :do_this, :and_do_that, :only =&gt; &#8220;deploy:symlink&#8221;</macro:code>
<p>The :before event gets triggered before any event is invoked, and :after gets called immediately after the event finishes successfully. There are four other events currently supported by Capistrano:</p>
<ul>
	<li>:start is triggered when a task is invoked via the command-line</li>
	<li>:finish is triggered when a task invoked via the command-line finishes successfully</li>
	<li>:load is triggered after all recipes have loaded, but before any tasks are executed</li>
	<li>:exit is triggered after all tasks have been executed</li>
</ul>
<p>You can even define your own events, and then trigger them using the &#8220;trigger&#8221; method.</p>
<p><strong>Feature:</strong> The &#8220;deploy:app&#8221; namespace has been axed. The tasks that it contained now live in the &#8220;deploy&#8221; namespace directly. Thus, &#8220;deploy:app:start&#8221; and &#8220;deploy:app:stop&#8221; are now &#8220;deploy:start&#8221; and &#8220;deploy:stop&#8221;, respectively.</p>
<p><strong>Feature:</strong> If your &#8220;scm_command&#8221; is set to a custom value because your <span class="caps">SCM</span> lives in a non-standard location on the remote host, you previously ran into problems if your <span class="caps">SCM</span> command did not live at the same location on your local host. Now, if you need different settings for the scm_command depending on whether it is being invoked locally or remotely, you have the option of specifying either one separately:</p>
<macro:code lang="ruby">set :scm_command, &#8220;/opt/local/bin/svn&#8221;<br />
set :local_scm_command, &#8220;/usr/local/bin/svn&#8221;</macro:code>
<p>Note that if &#8220;scm_command&#8221; is set, &#8220;local_scm_command&#8221; will default to that value, but if &#8220;local_scm_command&#8221; is set, &#8220;scm_command&#8221; is unaffected.</p>
<p><strong>Feature:</strong> Servers are now uniquely identified by Capistrano based on their full connection information, including hostname, username, and port. (Before, servers were only unique based on the hostname.) This makes it possible to use Capistrano in a NAT&#8217;ed environment, where all of your servers are using the same hostname, with different port numbers.</p>
<p><strong>Feature:</strong> The &#8220;capify&#8221; command now understands the &#8220;-h&#8221; switch, which should make it behave a little more like people expect.</p>