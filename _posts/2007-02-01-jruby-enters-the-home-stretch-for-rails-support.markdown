---
layout: post
title: JRuby enters the home stretch for Rails support
categories:
- sightings
- praise
author: rick
published: true
date: 2007-02-01 02:12:00.000000000 +00:00
---
<blockquote>
<p>We&#8217;re on the home stretch now, and Rails is getting more and more solid every day. With you all helping, we should be able to finish off the remaining failures, clean up major outstanding JRuby issues, and kick out a pretty sweet &#8220;Rails-supporting&#8221; JRuby release in the next couple weeks. &#8212; <a href="http://headius.blogspot.com/2007/01/end-is-nigh-help-squash-rails-bugs.html">Charles Nutter</a></p>
</blockquote>
<p>I&#8217;m not a Java guy by any means, but I don&#8217;t think anyone disagrees that this is great news.  Why?  The idea of dynamic languages on the <span class="caps">JVM</span> is very appealing, even <a href="http://tomayko.com/articles/2006/12/30/ruby-java-co-op">Ryan Tomayko thinks so</a>.</p>
<p>Now, being a recovering C# programmer, I had no idea how to get JRuby installed and running.  So, here&#8217;s a quick newbie guide for you Mac <span class="caps">OSX</span> users.  If you have good instructions for other platforms beyond what&#8217;s in the JRuby blog, please post or link to them in the comments.  Also, be sure to use the proper reporting channels for any bugs you come across:  the <a href="http://dev.rubyonrails.org">Rails Trac</a> for Rails bugs, and <a href="http://jira.codehaus.org/browse/JRUBY">JRuby&#8217;s <span class="caps">JIRA</span></a> for JRuby issues.</p>
<ul>
	<li>First, you need java.  Luckily, it happens to ship with Tiger.  &#8220;java -version&#8221; tells me I have v1.5.0_06.  Awesome.</li>
	<li>I actually set this up over the weekend, and used &#8216;ant test&#8217; to build and test JRuby.  This required me to install <a href="http://www.junit.org">JUnit</a> to proceed.  I just created a directory to act as my <span class="caps">CLASSPATH</span>, and threw junit-4.1.jar in there.</li>
	<li>Set up a few environment variables (see below for the list).</li>
	<li>Add /path/to/jruby/bin to your <span class="caps">PATH</span>.</li>
</ul>
<pre><code>
export CLASSPATH=/path/to/junit-4.1.jar
export JRUBY_HOME=/path/to/jruby
export JAVA_HOME=/System/Library/Frameworks/JavaVM.framework/Home
export JRUBY_SHELL=/bin/zsh
</code></pre>
<p>After this was done, I was able to run jruby or jirb directly.  Depending on where you add the jruby/bin path, you may or may not be using the JRuby gem script or not.  Use &#8216;which gem&#8217; to check.</p>
<p>There you go, you should be all ready to help the JRuby folks out.</p>