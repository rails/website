---
layout: post
title: Routing now available in beta gems
categories:
- horizon
author: admin
published: true
date: 2005-02-15 13:26:59.000000000 +00:00
---
<p>Routing is the new name for what was previously known as Directions. The move of responsibility from mod_rewrite and into Rails. This project is now good enough to have moved off the branch it was growing on and into the trunk and beta gems. This also means, however, that the trunk and the beta gems are currently not directly backwards compatible with existing applications.</p>
<p>We&#8217;re going to make sure that the migrating documentation is superb for release, but if you&#8217;re too impatient, here are the few steps you need to take on applications that doesn&#8217;t use custom URLs (those will be a bit more cumbersome to port):</p>
<p>1. Create <code>config/routes.rb</code> with the following content:</p>
<pre>
ActionController::Routing::Routes.draw do |map|
  # Add your own custom routes here.
  # The priority is based upon order of creation: first created -&gt; highest priority.
  
  # Here's a sample route:
  # map.connect 'products/:id', :controller =&gt; 'catalog', :action =&gt; 'view'
  # Keep in mind you can assign values other than :controller and :action
  
  # Install the default route as the lowest priority.
  map.connect ':controller/:action/:id'
end
</pre>
<p>2. Replace <code>public/.htaccess</code> with:</p>
<pre>
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ /dispatch.fcgi?$1 [QSA,L]

ErrorDocument 500 /500.html
</pre>
<p>3. Add the new independent Active Support library to the default loads. For gem installations, it means adding <code>require_gem 'activesupport'</code> right underneath <code>require 'rubygems'</code> in config/environment.rb. It&#8217;ll then look like:</p>
<pre>
# Require Rails gems.
require 'rubygems'
require_gem 'activesupport'
require_gem 'activerecord'
require_gem 'actionpack'
require_gem 'actionmailer'
require_gem 'rails'
</pre>
<p>For <span class="caps">SVN</span>/tgz installations, it means adding <code>vendor/activesupport/lib</code> to the ADDITIONAL_LOAD_PATHS and add <code>require 'active_support'</code> under # Require Rails libraries. also in config/environment.rb. It&#8217;ll then look like:</p>
<pre>
# Followed by the standard includes.
ADDITIONAL_LOAD_PATHS.concat %w(
  app
  app/models
  app/controllers
  app/helpers
  config
  lib
  vendor
  vendor/railties
  vendor/railties/lib
  vendor/activesupport/lib
  vendor/activerecord/lib
  vendor/actionpack/lib
  vendor/actionmailer/lib
).map { |dir| "#{RAILS_ROOT}/#{dir}" }

# Prepend to $LOAD_PATH
ADDITIONAL_LOAD_PATHS.reverse.each { |dir| $:.unshift(dir) if File.directory?(dir) }


# Require Rails libraries.
require 'active_support'
require 'active_record'
require 'action_controller'
require 'action_mailer'
</pre>
<p>4. Add <code>ActionController::Routing::Routes.reload</code> somewhere in your config/environment.rb file.</p>
<p>That should be it. More detailed information will follow shortly.</p>