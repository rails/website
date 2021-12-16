---
layout: post
title: Three reasons to love ActionController::Responder
categories:
- edge
author: José Valim
published: true
date: 2009-08-31 18:02:00.000000000 +01:00
---
A couple weeks ago, I wrote about the newly added [ActionController::Responder](http://blog.plataformatec.com.br/2009/08/embracing-rest-with-mind-body-and-soul) which summarizes your application behavior for a specified format in just one place. For example, the default html behavior is written as:

<pre><code class="ruby">
class ActionController::Responder
  def to_html
    if get?
      render
    elsif has_errors?
      render :action => (post? ? :new : :edit)
    else
      redirect_to resource
    end
  end
end
</code></pre>

Here are three examples of the flexibility this new layer can provide.

#### 1) HTTP Cache

A simple, but quite powerful use for responder is apply HTTP cache to all your resources easily. For simplicity, let's cache just get requests that are not handling a collection:

<pre><code class="ruby">
module CachedResponder
  def to_html
    if get? && resource.respond_to?(:updated_at)
      return if controller.fresh_when(:last_modified => resource.updated_at.utc)
    end
    super
  end
end
</code></pre>

#### 2) I18n flash messages

Is a common practice that all controllers, when the create, update and destroy actions are handled with success, a flash message is shown to the user. We could easily remove the flash messages from our controllers and let them be handled by the responder with the help of the I18n framework. And it’s quite straightforward to accomplish:

<pre><code class="ruby">
module FlashResponder
  # If it's not a get request and the object has no errors, set the flash message
  # according to the current action. If the controller is users/pictures, the
  # flash message lookup for create is:
  #
  #   flash.users.pictures.create
  #   flash.actions.create
  #
  def to_html
    unless get? || has_errors?
      namespace = controller.controller_path.split('/')
      namespace << controller.action_name
      flash[:success] = I18n.t(namespace.join("."), :scope => :flash,
       :default => "actions.#{controller.action_name}", :resource => resource.class.human_name)
    end
    super
  end
end
</code></pre>

The first question then arises: what if I don’t want to add a flash message in an specific situation? This can be solved using options, since all options sent to respond_with are sent to the responder, we could use it in our favor as well:

<pre><code class="ruby">
class MyResponder < ActionController::Responder
  def to_html
    unless get? || has_errors? || options.delete(:flash) == false
      namespace = controller.controller_path.split('/')
      namespace << controller.action_name
      flash[:success] = I18n.t(namespace.join("."), :scope => :flash,
       :default => "actions.#{controller.action_name}", :resource => resource.class.human_name)
    end
    super
  end
end
</code></pre>

And we can invoke it as:

<pre><code class="ruby">
class PostsController < ApplicationController
  def create
    @post = Post.create(params[:post])
    respond_with(@post, :flash => false)
  end
end
</code></pre>

#### 3) Instant pagination

Some people already start a project with pagination from scratch, others add at some point. Nonetheless, pagination is more like a rule than a exception. Can that be handled by Rails 3? First, let’s check an index action with `respond_with`:

<pre><code class="ruby">
class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_with(@posts)
  end
end
</code></pre>

Right now, when we call `Post.all`, it returns a collection of posts in an array, so the pagination should be done before the collection is retrieved. Thanks to Emilio and [his work integrating ActiveRelation with ActiveRecord](http://github.com/miloops/rails), `Post.all` will return an `ActiveRecord::Relation` that will be sent to the responder:

<pre><code class="ruby">
module PaginatedResponder
  # Receives a relation and sets the pagination scope in the collection
  # instance variable. For example, in PostsController it would
  # set the @posts variable with Post.all.paginate(params[:page]).
  def to_html
    if get? && resource.is_a?(ActiveRecord::Relation)
      paginated = resource.paginate(controller.params[:page])
      controller.instance_variable_set("@#{controller.controller_name}", paginated)
    end
    super
  end
end
</code></pre>

However, the code above is definitely smelling. Set the paginated scope seems more to be a controller responsability. So we can rewrite as:

<pre><code class="ruby">
module PaginatedResponder
  def to_html
    if get? && resource.is_a?(ActiveRecord::Relation)
      controller.paginated_scope(resource)
    end
    super
  end
end

class ApplicationController < ActionController::Base
  def paginated_scope(relation)
    instance_variable_set "@#{controller_name}", relation.paginate(params[:page])
  end
  hide_action :paginated_scope
end
</code></pre>

As previously, you could make use of some options to customize the default pagination behavior.

#### Wrapping up

All the examples above were contained in modules, that means that our actual responder has yet to be created:

<pre><code class="ruby">
class MyResponder < ActionController::Responder
  include CachedResponder
  include FlashResponder
  include PaginatedResponder
end
</code></pre>

To activate it, we just need to overwrite the responder method in our application controller:

<pre><code class="ruby">
class ApplicationController < ActionController::Base
  def paginated_scope(relation)
    instance_variable_set "@#{controller_name}", relation.paginate(params[:page])
  end
  hide_action :paginated_scope

  protected
  def responder
    MyResponder
  end
end
</code></pre>

While those examples are simple, they show how you can dry up your code easily using Responder. And you? Already thought in an interesting use case for it?