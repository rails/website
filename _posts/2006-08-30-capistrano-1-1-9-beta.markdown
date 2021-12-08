---
layout: post
title: Capistrano 1.1.9 (beta)
categories:
- releases
author: jamis
published: true
date: 2006-08-30 18:46:00.000000000 +01:00
---
<p>A new release of Capistrano is nearly upon us! Before I unleash it upon the world, though, I&#8217;d like to have a few brave souls put it through its paces, so I&#8217;m doing a brief run of it as a pre-release. You can grab it from the Rails beta gem server:</p>
<p><code>gem install -s http://gems.rubyonrails.com capistrano</code></p>
<p>There are a lot of changes in this release, most of them minor or cosmetic. However, there are some changes that may bite you, too.</p>
<p><strong>The most significant change that may affect you</strong> has to do with the roles used for the <ins>setup</ins>, <ins>update_code</ins>, <ins>rollback_code</ins>, and <ins>symlink</ins> tasks. These tasks have changed such that they now deploy to <em>all defined servers</em>. That&#8217;s right, if you&#8217;ve got a server associated with any role, those tasks will deploy to that server. However, a server can explicitly <em>opt out</em> of being part of release deployment by setting <code>:no_release =&gt; true</code> in its role definition:</p>
<pre><code>   role :file, "file-server.somewhere.example",
        :no_release =&gt; true</code></pre>
<p><strong>Take note of that!</strong> If you have any servers using non-standard roles (any role besides web, app, or db), you need to explicitly add <code>:no_release =&gt; true</code> in their role definitions, or your next deploy will target those servers, too.</p>
<p>Other significant changes that may or may not tickle you:</p>
<ul>
	<li>The -r/--recipe command line option is deprecated. You should use -f/--file instead.</li>
	<li>Matthew Elder has contributed (and agreed to maintain) a module for the Mercurial <span class="caps">SCM</span>.</li>
	<li>If you have sudo in a non-standard location, you can specify the path to sudo via the :sudo variable</li>
	<li>Added :svn_passphrase so you can use keys with passphrases</li>
	<li>Fixed missing default for :local in the <span class="caps">CVS</span> module</li>
	<li>Subversion <span class="caps">SCM</span> accepts <span class="caps">HTTPS</span> certificates now</li>
	<li>Work with pid-based setups (new spawner/reaper)</li>
	<li>Added update task</li>
	<li>Added :except on task declarations (as the opposite of :only)</li>
	<li>Override the hosts to be used for a task via the <span class="caps">HOSTS</span> environment variable</li>
	<li>Override the roles that will be used for a task via the <span class="caps">ROLES</span> environment variable</li>
	<li>Added :hosts option on task declarations for defining tasks that work only on specific machines (rather than by role)</li>
	<li>Don&#8217;t require a capfile (this allows you to use capistrano to operate on arbitrary hosts, all from the command line)</li>
</ul>
<p>Various other changes have been made as well&#8212;you can look at the <span class="caps">CHANGELOG</span> for a complete list.</p>