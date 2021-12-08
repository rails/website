---
layout: post
title: Plugin loading internals have changed, for the better!
categories:
- edge
author: marcel
published: true
date: 2007-03-02 09:01:00.000000000 +00:00
---
<p>Until now, the task of locating and loading plugins into your app was handled by a handful of private methods on the <br />
Rails::Initializer. These methods were fairly large, coarse grained, and as a result hard to hook into without resorting<br />
to fragile cut and paste if you wanted to customize how your plugins are loaded.</p>
<p>New in Edge Rails, <a href="http://dev.rubyonrails.org/changeset/6277">changeset 6277</a> replaces this smattering of methods with two new internal classes, Rails::Plugin::Locater and Rails::Plugin::Loader. If you need to hook into how plugins are loaded, you can define a subclass of Rails::Plugin::Loader, then register your custom class to be the class that handles plugin loading using the new <tt>plugin_loader</tt> configuration option in your <tt>config/environement.rb</tt>:</p>
<pre><code>
  Rails::Initializer.run do |config|
    # Config settings...
    config.plugin_loader = PluginLoaderWithDependencies
  end
</code></pre>

<p>This should make extensions on top of the plugin system, such as the <a href="http://revolutiononrails.blogspot.com/2007/01/plugems-rails-as-first-class-citizens.html">Plugems</a> approach developed by the team over at <a href="http://www.revolutionhealth.com/">Revolution Health</a>, far easier to implement and maintain.</p>
<p>To those monkey patching the plugin loading subsystem in Rails, this introduces substantial changes to the way that plugins are located and loaded. In the short term this might mean that your customizations to the internals will very likely break, but the good news is that in the long term the new implementation will be far easier to customize.</p>
<p>For those adventurous early adopters living on the Rails Edge, please give your apps a test run to ensure these changes<br />
don&#8217;t break anything for you. As always, bug reports and patches are welcome: <a href="http://dev.rubyonrails.org/"> http://dev.rubyonrails.org/</a>.</p>