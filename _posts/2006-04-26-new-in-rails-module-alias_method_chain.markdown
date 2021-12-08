---
layout: post
title: ! 'New in Rails: Module#alias_method_chain'
categories:
- tricks
- tools
author: marcel
published: true
date: 2006-04-26 17:50:00.000000000 +01:00
---
<p>Though not an outward facing feature, <a href="http://dev.rubyonrails.org/changeset/4276">changeset 4276</a> introduces a nice method to <a href="http://www.c2.com/cgi/wiki?DontRepeatYourself"><span class="caps">DRY</span> up</a> and <a href="http://www.c2.com/cgi/wiki?EncapsulationDefinition">encapsulate</a> the common pattern of aliasing a method so that you can build behavior on top of it.</p>
<p>All over the internals of Rails you&#8217;ll find code like this in a module:<br />
<pre><code>
  module Layout #:nodoc:
    def self.included(base)
      base.extend(ClassMethods)
      base.class_eval do
        alias_method :render_with_no_layout, :render
        alias_method :render, :render_with_a_layout</p>
<ol>
	<li>&#8230; etc<br />
</code></pre><br />
This makes it so that when the module is included into the base class, it adds behavior onto some method in that class without the method having to be aware of the fact that it&#8217;s being enhanced. In this case, the <code>render</code> method of <code>ActionController::Base</code> is enhanced to wrap its output in a layout.</li>
</ol>
<p>The new <code>Module#alias_method_chain</code> wraps up this pattern into a single method call. The above example, once refactored to use <code>Module#alias_method_chain</code>, would simply be:<br />
<pre><code>
alias_method_chain :render, :layout
</code></pre><br />
This will be used to refactor quite a bit of Rails internals which may not be of immediate relevance to what you do, but it serves as a nice example of the mechanisms Ruby provides for software organization. Small victories.</p>