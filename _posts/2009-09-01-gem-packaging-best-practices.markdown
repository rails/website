---
layout: post
title: ! 'Gem Packaging: Best Practices'
categories: []
author: Josh Peek
published: true
date: 2009-09-01 20:12:00.000000000 +01:00
---
  <h4>Understand Ruby&#8217;s Load Path</h4>


	<p>When you call <code>load</code> or <code>require</code> a new file, Ruby searches through the files in its load path. This allows you to require files relative to the load path without specifying the files full system path.</p>


	<p>The initial load path contains paths for Ruby&#8217;s standard library. There are three aliases that point to Rubys global load path array: <code>$:, $-I, $LOAD_PATH</code>. You can append or prepend you own libraries to this list. The load path can also be modified from the command line with the <code>-I</code> flag.</p>


	<p>Here is the initial load path on my Mac.</p>


<pre>
  &gt;&gt; $LOAD_PATH
  =&gt; ["/Users/josh/.rip/active/lib",
      "/Library/Ruby/Site/1.8",
      "/Library/Ruby/Site/1.8/powerpc-darwin9.0",
      "/Library/Ruby/Site/1.8/universal-darwin9.0",
      "/Library/Ruby/Site",
      "/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8",
      "/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/powerpc-darwin9.0",
      "/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/universal-darwin9.0",
      "."]
</pre>

	<p>There are a few far-too-common mistakes people make with load paths.</p>


	<h5>Respect the global load path</h5>


	<p>When you package up your new rubygem to share with the world, you need to be careful with the files you place directly in <em>lib/</em>. Rubygems (and almost all other ruby package mangers) will add your gem&#8217;s <em>lib/</em> to the load path. This means any file placed in the top level of <em>lib/</em> will be directly requirable by anyone using the gem.</p>


	<h6>Bad gem example:</h6>


<pre>
  `-- lib
      |-- foo
      |   `-- cgi.rb
      |-- foo.rb
      |-- erb.rb
      `-- set.rb
</pre>

	<p>It may seem harmless to call files whatever you&#8217;d like in your package because you are &#8220;namespaced&#8221; in your own package. But if <em>lib/</em> is prepended to <code>$LOAD_PATH</code> it will clobber Ruby&#8217;s built in <em>erb</em> and <em>set</em> libs. <code>require 'erb'</code> would no longer require Ruby&#8217;s builtin erb library, but this package&#8217;s version of it.</p>


	<p>The safe (and correct) way would be to namespace your files under another directory. Its conventional to create a folder within lib with the same name as your gem. Then we would put all our dependency files under <em>lib/foo/</em> instead of at <em>lib/</em> root.</p>


	<p>This is sort of a gray area. There is no strict rule that you <strong>must</strong> put all your files under a folder with your package name. It is okay to have multiple files at your root lib directory as long as you intend for people to require them separately. Namespace internal dependency files that you don&#8217;t expect for people to require directly.</p>


	<h5>Requiring other files relative to each other</h5>


<pre>
  require File.join(File.dirname(__FILE__), "foo", "bar")
  # or
  require File.expand_path(File.join(File.dirname(__FILE__), "foo", "bar"))
</pre>

	<p>If you&#8217;re using <code>File.dirname(__FILE__)</code> with require, you&#8217;re doing something wrong.</p>


	<p>The fix is simple, require files relative to the load path.</p>


<pre>
  require "foo/bar" 
</pre>

	<p>Its interesting that the 3 previous <code>require</code> examples are totally different. Ruby is only able to track which files it has required by the exact path you gave it. The first is relative your current directory (<em>&#8221;./lib/foo/bar&#8221;</em>), the second is the full expanded system path (<em>&#8221;/usr/local/lib/ruby/gems/foo/lib/foo/bar&#8221;</em>), and the third is relative to the load path (<em>&#8221;foo/bar&#8221;</em>). <code>require</code> treats each as a different file, so it may end up loading the file multiple times.</p>


	<h5>Depending on files outside the load path</h5>


	<p>This is a more severe case of the previous example.</p>


<pre>
  module Rack
    module Test
      VERSION = ::File.read(::File.join(::File.dirname(__FILE__), "..", "..", "VERSION")).strip
      # ...
    end
  end
</pre>

	<p>Your gem&#8217;s folders may be separated and reorganized on install. If someone wants to &#8220;vendor&#8221; your library, they should only have to copy everything under <em>lib/</em>. Everything outside <em>lib/</em> is not important for running the code. Never expect your <em>lib</em> or <em>test</em> folders to be one level up. A minimalist installer, such as <a href="http://hellorip.com/">rip</a>, will only install your <em>bin</em> and <em>lib</em> directories. Any file your package needs to access should be under <em>lib</em> and properly namespaced in a folder to avoid collisions. If you try install this version of rack-test with rip, <code>require 'rack/test'</code> will fail because ../VERSION doesn&#8217;t exist.</p>


	<h5>Libs don&#8217;t need to mange $LOAD_PATH</h5>


	<p>Its not the package&#8217;s responsibility to setup and manage the load path. Instead rely on the package manger to set it up for. When rubygems activates a gem, it adds your package&#8217;s <em>lib</em> folder to the <code>$LOAD_PATH</code> ready to be required normally by another lib or application. Its safe to assume you can relative <code>require</code> any file in your <em>lib</em> folder.</p>


<pre>
  unless $LOAD_PATH.include?(File.expand_path(File.dirname(__FILE__)))
    $LOAD_PATH.unshift(File.expand_path(File.dirname(__FILE__)))
  end
</pre>

	<p>It should be safe to remove code like that.</p>


	<h5>TIP: Setup your test runner to configure your paths for local development</h5>


	<p>If your trying to develop your lib locally, dealing with all this load path stuff seems like a pain in the ass. This is where rake tests come in handy.</p>


	<p>Rake&#8217;s test task will automatically push <em>lib</em> into your path when your test unit tests. So you don&#8217;t need File.join(File.dirname(<i>FILE</i>), &#8221;..&#8221;, &#8220;lib&#8221;, &#8220;foo&#8221;) anywhere in your tests. You may want to consider adding the test directory to your path if you have &#8220;test_helper&#8221; that you need to require.</p>


<pre>
  Rake::TestTask.new do |t|
    t.libs &lt;&lt; 'test'
  end
</pre>

	<p>Unfortunately Rspec doesn&#8217;t even add <em>lib</em> to your path for you. You can fix this with:</p>


<pre>
  Spec::Rake::SpecTask.new do |t|
    t.libs &lt;&lt; 'lib'
  end
</pre>

	<p>If you want to run a single test, you can add <em>lib</em> to the <code>$LOAD_PATH</code> with a command line flag. <em>(This started a <a href="http://github.com/rails/rails/commit/e8170805df1a32119db9d328daee1239b338ac71">long debate</a> when the change was made to Rails)</em></p>


<pre>
  ruby -Ilib test/test_foo.rb
</pre>

	<h5>Provide a <span class="caps">VERSION</span> constant</h5>


	<p>If you release the Awesome gem, provide Awesome::VERSION. When using Rubygems, it&#8217;s possible to ask Rubygems for the version of the gem you&#8217;re using, but when using an alternate package manager, the only way to find out what version is loaded is by introspection into the Ruby code itself.</p>


	<h4>Don&#8217;t depend on <code>rubygems</code></h4>


	<blockquote>
		<p>When I use your library, deploy your app, or run your tests I may not want to use rubygems. When you &#8220;require &#8216;rubygems&#8217;&#8221; in your code, you remove my ability to make that decision. I cannot unrequire rubygems, but you can not require it in the first place. &#8211; Ryan Tomayko</p>
	</blockquote>


	<p>Its safe to <strong>remove <code>require "rubygems"</code></strong> from your lib since code loading it probably did this already. It makes it harder (but not impossible) for people to use alternative ways of setting up the load path because there is no way to &#8220;unrequire&#8221; rubygems. There are many other package management solutions out there, like <a href="http://hellorip.com/">rip</a>, <a href="http://github.com/wycats/bundler">bundler</a>, or managing <code>$LOAD_PATH</code> by hand.</p>


	<p>Avoid declaring rubygem dependencies in <em>lib/</em>. This means <strong>removing <code>gem "foo"</code></strong>. This creates a hard dependency on Rubygems when you should be specifying you gem dependencies in your gemspec. Rubygems already hooks into <code>require</code> and will automatically resolve these dependencies at runtime. A simple require will trigger the lookup via rubygems, or will just require it if it&#8217;s been added to the load path by another system. Moving dependency specification outside the lib is more flexible for other package managers can do so at install time.</p>


	<p>In addition to removing <code>gem</code>, do not wrap your load checks with <code>rescue Gem::LoadError</code> or <code>rescue Gem::Exception</code>. If you need to gracefully skip over load errors, <code>Gem::LoadError</code> inherits from <code>LoadError</code> so replacing it with <code>rescue LoadError</code> will work.</p>


<pre>
  # Bad
  begin
    gem "rack" 
    require "rack" 
  rescue Gem::LoadError
    puts "Could not load 'rack'" 
    exit
  end

  # Good
  begin
    require "rack" 
  rescue LoadError
    puts "Could not load 'rack'" 
    exit
  end
</pre>

	<h4>Why should I care?</h4>


	<p>I wasn&#8217;t aware of any of these issues until Ryan wrote up his <a href="http://gist.github.com/54177">post on why requiring rubygems is wrong</a> at the beginning of 2009. And I feel many other rubyists have just overlooked these issues since rubygems has been our only solution. The foundation of Ruby library management is built on the load path system and its important for every ruby gem author to understand how it works.</p>


	<h4>We&#8217;re working on it</h4>


	<p>Fixing every ruby library is easier said than done <em>(There are 12,000+ hosted on RubyForge at the time of posting)</em>. Rails is currently in violation of a few of these rules. But we&#8217;re working hard to fix them. We also need to fix all the gems that we depend on. Ideally, we&#8217;d like Rails 3 to boot w/o rubygems and allow you use to whatever package management strategy you&#8217;d like.</p>


	<h4>Further reading</h4>


	<p><a href="http://yehudakatz.com/2009/07/24/rubygems-good-practice/">Rubygems Good Practice « Katz Got Your Tongue?</a><br /><a href="http://gist.github.com/54177">Why require &#8216;rubygems&#8217; In Your Library/App/Tests Is Wrong</a></p>