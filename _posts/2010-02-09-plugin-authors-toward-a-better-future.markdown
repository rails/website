---
layout: post
title: ! 'Plugin Authors: Toward a Better Future'
categories: []
author: wycats
published: true
date: 2010-02-09 11:05:00.000000000 +00:00
---
<p>Some of the biggest changes in Rails 3 involve how Rails expects plugins to behave.</p>
<h2>Dependencies</h2>
<p>If your plugin has dependencies, make it a gem and have your users install it using the Gemfile. This will ensure that Bundler properly calculates the dependencies alongside any other dependencies the user&#8217;s app has.</p>
<h2>If You Override Something, Require It</h2>
<p>If you need to override ActionController, ActiveRecord or other Rails frameworks, require them first, then override. Instead of assuming that Rails will require your gem plugin at a &#8220;correct&#8221; time, assume that the user will require your plugin extremely early.</p>
<p>This gives you the opportunity to hook in earlier to the initialization process, but it also means that you should explicitly require the dependencies you need.</p>
<pre lang="ruby"># in your_lib.rb

require "active_record"
require "your_lib/extensions"

ActiveRecord::Base.class_eval { include YourLib::Extensions }</pre>
<h2>Use a Railtie, But Only if You Need To</h2>
<p>Even though you can expect your gem to load very early, you might still need to hook into a later part of the initialization process. If you do, inherit from <code>Rails::Railties</code>. Inside of a Railtie, you can declare a block that Rails should run when it runs Rakefiles, specify initialization blocks, add a subscriber to the notification system, and specify generators to load.</p>
<pre lang="ruby">class TestingFu &lt; Rails::Railtie
  # This creates a config.my_plugin in the user's Application
  railtie_name :testing_fu

  rake_task do
    load "testing_fu/tasks.rake"
  end

  # specify the default generators for test frameworks
  config.generators.test_framework :testing_fu

  # you can also specify :before or :after to ensure that
  # your initializer block runs before or after another
  # initializer block
  initializer :setup_my_plugin do |app|
    # in here, I have access to the user's application,
    # which gives me access to app.config
  end
end</pre>
<p>Make sure to require any railties that you intend to extend. For instance, if you want to run an initializer before one defined in ActionController, require &#8220;action_controller/railtie&#8221;</p>
<p>That said, don&#8217;t use a Railtie if your code does not need to hook into any part of the Rails lifecycle. When possible, simply create a standard Ruby library, requiring the parts of Rails you need to override.</p>
<h2>Engines</h2>
<p>Engines in plugins (<code>vendor/plugins</code>) work as they did in Rails 2. In a gem, you&#8217;ll need to provide a <code>Rails::Engine</code> subclass:</p>
<pre># lib/my_engine.rb
module MyEngine
  class Engine &lt; ::Rails::Engine
    engine_name :my_engine
  end
end</pre>
<p>Place your app directory next to the lib directory and Rails will pick it up. You can read the documentation for Railte, Engine, Plugin and Application, all in just one place, here: <a href="https://gist.github.com/af7e572c2dc973add221">https://gist.github.com/af7e572c2dc973add221</a></p>
<h2>Start a Conversation at railsplugins.org</h2>
<p>In order to make this process easier, Engine Yard has put together <a href="http://www.railsplugins.org">railsplugins.org</a>. If you&#8217;re a plugin author, please submit your plugins to that site. You can tell users whether or not you expect your plugins to work on Rails 3, whether or not your users can run them in threadsafe mode, and whether they run on JRuby.</p>
<p>Once you&#8217;ve put a plugin up there, users can say that they either agree that your plugin runs or disagree, with a comment about what is broken. You can reply to any such comments, and the user can change his mind if he just made a mistake. When you submit a new version, the site creates a whole new page, so comments about things not working on a previous version don&#8217;t clutter up the current version (users can still get at the old versions if they wish).</p>
<p>If we do this right, the Rails community will have a strong sense of what works on Rails 3 and what doesn&#8217;t. Have at it!</p>