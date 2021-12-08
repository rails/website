---
layout: post
title: Capistrano 2.0 Preview 3
categories:
- releases
author: jamis
published: true
date: 2007-06-16 03:28:00.000000000 +01:00
---
<p>Alright, we&#8217;re nearing the finish line! Capistrano 2.0 Preview Release #3 is now available.</p>
<p>Capistrano is a utility for automating the execution of tasks on one or more remote machines. You can read all about it at <a href="http://www.capify.org">www.capify.org</a>.</p>
<p>To install Preview #3, you&#8217;ll need to grab it from the Rails beta gem server:</p>
<pre>gem install -s http://gems.rubyonrails.org capistrano</pre>
<p>Accompanying PR3 is a new page of documentation on the capify.org site: <a href="http://www.capify.org/getting-started/basics">Capistrano Basics</a>. This walks you through the major features of Capistrano, but does not touch on deployment. This makes it a great introduction for those wanting to use Capistrano in non-deployment scenarios.</p>
<p>Preview #3 includes the following changes and enchancements:</p>
<p><strong>Feature:</strong> Mercurial and <span class="caps">CVS</span> are now supported out of the box. Just set your :scm variable to :mercurial or :cvs, like so:</p>
<pre>set :scm, :mercurial
# or
set :scm, :cvs
</pre>
<p>Thanks to Tobias Luetke and Matthew Elder for the Mercurial module, and Brian Phillips for the <span class="caps">CVS</span> module.</p>
<p><strong>Feature:</strong> There is now a :default_environment variable, which is a hash that can be used to set environment variables that should be present for all commands that are executed. For instance:</p>
<pre>default_environment["PATH"] =
  "/bin:/usr/bin:/usr/local/bin:/home/jamis/bin"
</pre>
<p><strong>Feature:</strong> All commands are now explicitly invoked via &#8220;sh&#8221;, which means that even if your default user shell is non-<span class="caps">POSIX</span> (e.g., tcsh, csh, etc.), you can use Capistrano just fine. Note that if you were using tcsh or csh syntax in your Capistrano scripts, you now need to set the :default_shell variable to use your (non-<span class="caps">POSIX</span>) shell of choice:</p>
<pre>set :default_shell, "/usr/bin/tcsh"</pre>
<p><strong>Feature:</strong> You can declare empty roles, and Capistrano won&#8217;t complain. This is useful for predeclaring roles that need to exist (because task definitions depend on them), but which might not have any servers in them (depending on runtime conditions).</p>
<p><strong>Feature:</strong> A username and port specified with the server definition (e.g., &#8220;fred@some.server.com:1234&#8221;) now take precedence over the :username and :port settings in the ssh_options hash, rather than the other way around. This lets you set a general default via ssh_options, and override on a per-server basis in the server definitions themselves.</p>
<p>There are several other minor changes and fixes as well; you can read the <a href="http://svn.rubyonrails.org/rails/tags/capistrano_1-99-2/CHANGELOG"><span class="caps">CHANGELOG</span></a> for all the gory details.</p>