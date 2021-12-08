---
layout: post
title: Autoloading ActiveResource schemas
categories: []
author: rick
published: true
date: 2009-01-27 21:03:00.000000000 +00:00
---
I just committed a little feature during our Rails core hackfest in Chicago: [Autoloading ActiveResource schemas](http://github.com/technoweenie/rails/commit/be73b3f250373a3b68a680cd7aef8c2116f0f905).  Note: this is in my personal fork that's up to date with the rails repo, and will probably be merged in for Rails 2.3.

I've received some requests for this from people having problems using `Lighthouse::Ticket` records with `form_for` helpers in their Rails apps.  The idea is that resources can automatically load the starting XML just once, like the way ActiveRecord loads the schema from the database.  This is already part of the current Rails scaffolding:

<pre><code>
class PostsController < ApplicationController
  def new
    @post = Post.new
    respond_to do |format|
      format.html # new.html.erb
      format.xml { render :xml => @post }
    end
  end
end
</code></pre>

There is one problem though, this probably won't work for protected or nested actions.  Ideally a Rails app will set a top level route for the resource, and disable any before filters if `request.format.xml?` is true.

<pre><code>
map.route 'tickets/new.:format', :controller => 'tickets', :action => 'new'
</code></pre>

You can get around this by modifying the `#schema` hash directly, or calling `#reset_schema` with your own prefixes.  Here's a sample using the [Lighthouse API lib](http://github.com/Caged/lighthouse-api/tree/master).

<pre><code>
Lighthouse.account = 'entp'
Lighthouse.token = 'monkey'
Lighthouse::Ticket.reset_schema :project_id => 1

# or, use a well known public project
Lighthouse.account = 'rails'
Lighthouse::Ticket.reset_schema :project_id => 8994
Ticket.new # => #&lt;Lighthouse::Ticket:0x1707898 @attributes={"permalink"=>nil, "updated_at"=>nil, "number"=>nil, "title"=>nil, "creator_id"=>nil, "tag"=>nil, "attachments_count"=>0, "priority"=>0, "closed"=>false, "assigned_user_id"=>nil, "user_id"=>nil, "created_at"=>nil, "state"=>nil, "milestone_id"=>nil}, @prefix_options={:project_id=>8994}&gt;
</code></pre>

Comments?