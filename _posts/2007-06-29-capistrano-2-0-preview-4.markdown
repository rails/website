---
layout: post
title: Capistrano 2.0 Preview 4
categories:
- releases
author: jamis
published: true
date: 2007-06-29 03:53:00.000000000 +01:00
---
<p>I am such a chicken. I very much wanted the next release of Capistrano to be the official &#8220;Capistrano 2.0&#8221; release. But as I watched the changelog grow, I started to get cold feet.</p>
<p>Thus, tonight I announce the fourth (and final, hopefully!) preview release of Capistrano 2.0. As before, you can grab it from the Rails beta gems server:</p>
<pre>gem install -s http://gems.rubyonrails.com capistrano</pre>
<p>(What is Capistrano, you ask? Allow me to direct your attention to <a href="http://www.capify.org">http://www.capify.org</a>&#8230;)</p>
<p>The following items are just some of the changes new in preview #4:</p>
<ul>
	<li>The deploy:symlink task works correctly now when run by itself.</li>
	<li>Synchronously instantiate the gateway to prevent it being instantiated multiple times.</li>
	<li>Use &#8220;which&#8221; instead of &quot;test -p to test whether a command exists on the path.</li>
	<li>The :hosts and :roles keys can now accept lambdas, to lazily select which hosts or roles a task uses.</li>
	<li>Versions of Net::<span class="caps">SSH</span> prior to 1.1.0 work with Capistrano again.</li>
	<li>Variable accesses are now thread safe.</li>
	<li>The deployment code is now locale-independent, so that the revision is parsed correctly even if your computer is using a non-English locale.</li>
	<li>You can now pass :on_error =&gt; :continue when defining a task, so that any connection or command errors that occur during the task&#8217;s execution will be ignored, allowing the task (and subsequent tasks) to continue.</li>
</ul>
<p>You can see the entire list of changes in the <a href="http://svn.rubyonrails.org/rails/tags/capistrano_1-99-3/CHANGELOG"><span class="caps">CHANGELOG</span></a>.</p>
<p>So, give it a go. Try it out. Post your feedback to the <a href="http://groups.google.com/group/capistrano">Capistrano mailing list</a>. I&#8217;d love to release cap2 final next week!</p>
<p>P.S. If you are on a Windows machine, and you get Zlib errors trying to install the Capistrano gem, try this. Find the rubygems/package.rb file (wherever it happens to be in your Ruby installation), open it up, and find the zipped_stream method. Then, replace it, wholesale, with the following:</p>
<pre><code>def zipped_stream(entry)
  entry.read(10) # skip the gzip header
  zis = Zlib::Inflate.new(-Zlib::MAX_WBITS)
  is = StringIO.new(zis.inflate(entry.read))
ensure
  zis.finish if zis
end
</code></pre>
<p>That seems to do the trick for me; let me know if it doesn&#8217;t work for you.</p>