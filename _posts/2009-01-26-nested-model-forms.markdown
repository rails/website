---
layout: post
title: Nested Model Forms
categories: []
author: michael
published: true
date: 2009-01-26 08:55:00.000000000 +00:00
---
<p>The most popular request on our new <a href="http://rails.uservoice.com/">Feedback site</a> was for the ability to easily manage multiple models in a single form.  Thankfully Eloy Duran has a patch that does just this.  But before we roll it into rails 2.3 we want to get some more feedback from you guys.  Eloy's written this brief introduction to the patch, so take a look, and add any feedback you have to the <a href="http://rails.lighthouseapp.com/projects/8994-ruby-on-rails/tickets/1202-add-attributes-writer-method-for-an-association">lighthouse ticket</a>.</p>

<p>In Rails it has always been a little tricky to create a single form for both a model and its associations. Last summer, the <a href="http://github.com/rails/rails/commit/e0750d6a5c7f621e4ca12205137c0b135cab444a"><tt>:accessible</tt> option was committed</a> as a first stab at a unified solution for dealing with nested models. However, this feature was pulled before the 2.2 release because it only supported nested models during object creation.</p>

<p>The resulting <a href="http://groups.google.com/group/rubyonrails-core/browse_thread/thread/3c61e00916c365e5/8581b7d0a6c97757?lnk=gst&amp;pli=1">discussion on the core mailing list</a> and our need for mass assignment have resulted in <a href="http://rails.lighthouseapp.com/projects/8994-ruby-on-rails/tickets/1202-add-attributes-writer-method-for-an-association#ticket-1202-29">this patch for ticket #1202</a> which is now up for scrutinizing.</p>

<p>Since this is a rather large patch we would like to invite you to give it a try. Please report any issues or give feedback about the patch in general. We are especially interested to know how the provided solutions work for applications that allow deletion of nested records through their forms.</p>

<p>Below I'll give a quick tour on what the patch does and how to use it so you have no excuse not to give it a try.</p>

<h2>Get the patch</h2>

<p>Start by creating a new application:</p>

<pre><code>$ mkdir -p nested-models/vendor
$ cd nested-models/vendor</code></pre>

<p>Vendor your Rails branch with the nested models patches:</p>

<pre><code>$ git clone git://github.com/alloy/rails.git
$ cd rails
$ git checkout origin/normalized_nested_attributes
$ cd ../..
$ ruby vendor/rails/railties/bin/rails .</code></pre>

<h2>An example of nested assignment</h2>

<p>Suppose you have a project model with associated tasks:</p>

<pre><code>class Project &lt; ActiveRecord::Base
  has_many :tasks

  validates_presence_of :name
end</code></pre>

<pre><code>class Task &lt; ActiveRecord::Base
  belongs_to :project

  validates_presence_of :name
end</code></pre>

<p>Now consider the following form which allows you to simultaneously create (or edit) a project and its tasks:</p>

<pre><code>&lt;form&gt;
  &lt;div&gt;
    &lt;label for="project_name"&gt;Project:&lt;/label&gt;
    &lt;input type="text" name="project_name" /&gt;
  &lt;/div&gt;

  &lt;p&gt;
    &lt;label for="task_name_1"&gt;Task:&lt;/label&gt;
    &lt;input type="text" name="task_name_1" /&gt;
    &lt;label for="task_delete_1"&gt;Remove:&lt;/label&gt;
    &lt;input type="checkbox" name="task_delete_1" /&gt;
  &lt;/p&gt;

  &lt;p&gt;
    &lt;label for="task_name_2"&gt;Task:&lt;/label&gt;
    &lt;input type="text" name="task_name_2" /&gt;
    &lt;label for="task_delete_2"&gt;Remove:&lt;/label&gt;
    &lt;input type="checkbox" name="task_delete_2" /&gt;
  &lt;/p&gt;
&lt;/form&gt;</code></pre>

<h2>Before the patch</h2>

<p>Before this patch you would have to write a template like this:</p>

<pre><code>&lt;% form_for @project do |project_form| %&gt;
  &lt;div&gt;
    &lt;%= project_form.label :name, 'Project name:' %&gt;
    &lt;%= project_form.text_field :name %&gt;
  &lt;/div&gt;

  &lt;% @project.tasks.each do |task| %&gt;
    &lt;% new_or_existing = task.new_record? ? 'new' : 'existing' %&gt; 
    &lt;% prefix = "project[#{new_or_existing}_task_attributes][]" %&gt; 
    &lt;% fields_for prefix, task do |task_form| %&gt;
      &lt;p&gt;
        &lt;div&gt;
          &lt;%= task_form.label :name, 'Task:' %&gt;
          &lt;%= task_form.text_field :name %&gt;
        &lt;/div&gt;

        &lt;% unless task.new_record? %&gt;
          &lt;div&gt;
            &lt;%= task_form.label :_delete, 'Remove:' %&gt;
            &lt;%= task_form.check_box :_delete %&gt;
          &lt;/div&gt;
        &lt;% end %&gt;
      &lt;/p&gt;
    &lt;% end %&gt;
  &lt;% end %&gt;

  &lt;%= project_form.submit %&gt;
&lt;% end %&gt;</code></pre>

<p>The controller is pretty much your average restful controller. The Project model however needs to know how to handle the nested attributes:</p>

<pre><code>class Project &lt; ActiveRecord::Base
  after_update :save_tasks

  def new_task_attributes=(task_attributes)
    task_attributes.each do |attributes|
      tasks.build(attributes)
    end 
  end

  def existing_task_attributes=(task_attributes)
    tasks.reject(&#38;:new_record?).each do |task|
      attributes = task_attributes[task.id.to_s]
      if attributes['_delete'] == '1'
        tasks.delete(task)
      else
        task.attributes = attributes
      end
    end
  end

  private

  def save_tasks
    tasks.each do |task|
      task.save(false)
    end
  end

  validates_associated :tasks
end</code></pre>

<p>The code above is based on Ryan Bates&apos; <a href="http://github.com/ryanb/complex-form-examples/tree/master">complex-form-examples application</a> and from the <a href="http://www.pragprog.com/titles/fr_arr/advanced-rails-recipes">Advanced Rails Recipes</a> book.</p>

<h2>After this patch</h2>

<p>First you tell the Project model to accept nested attributes for its tasks:</p>

<pre><code>class Project &lt; ActiveRecord::Base
  has_many :tasks

  accept_nested_attributes_for :tasks, :allow_destroy =&gt; true
end</code></pre>

<p>Then you could write the following template:</p>

<pre><code>&lt;% form_for @project do |project_form| %&gt;
  &lt;div&gt;
    &lt;%= project_form.label :name, 'Project name:' %&gt;
    &lt;%= project_form.text_field :name %&gt;
  &lt;/div&gt;

  &lt;!-- Here we call fields_for on the project_form builder instance.
       The block is called for each member of the tasks collection. --&gt;
  &lt;% project_form.fields_for :tasks do |task_form| %&gt;
      &lt;p&gt;
        &lt;div&gt;
          &lt;%= task_form.label :name, 'Task:' %&gt;
          &lt;%= task_form.text_field :name %&gt;
        &lt;/div&gt;

        &lt;% unless task_form.object.new_record? %&gt;
          &lt;div&gt;
            &lt;%= task_form.label :_delete, 'Remove:' %&gt;
            &lt;%= task_form.check_box :_delete %&gt;
          &lt;/div&gt;
        &lt;% end %&gt;
      &lt;/p&gt;
    &lt;% end %&gt;
  &lt;% end %&gt;

  &lt;%= project_form.submit %&gt;
&lt;% end %&gt;</code></pre>

<p>As you can see this is much more concise and easier to read.</p>

<p>Granted, the template for this example is only slightly shorter, but it&apos;s easy to imagine the difference with more nested models. Or if the Task model had nested models of its own.</p>

<h2>Validations</h2>

<p>Validations simply work as you&apos;d expect; <tt>#valid?</tt> will also validate nested models, <tt>#save(false)</tt> will save without validations, etc.</p>

<p>The only thing to note is that all error messages from the nested models are copied to the parent errors object for <tt>error_messages_for</tt>. This will probably change in the future, as discussed on the ticket, but that&apos;s outside of the scope of this patch.</p>

<p>Let&apos;s look at an example where Task validates the presence of its <tt>:name</tt> attribute:</p>

<pre><code>&gt;&gt; project = Project.first
=&gt; #&lt;Project id: 1, name: "Nested models patches", created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15", author_id: 1&gt;

&gt;&gt; project.tasks
=&gt; [#&lt;Task id: 1, project_id: 1, name: "Write 'em", due_at: nil, created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15"&gt;,
#&lt;Task id: 2, project_id: 1, name: "Test 'em", due_at: nil, created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15"&gt;,
#&lt;Task id: 3, project_id: 1, name: "Create demo app", due_at: nil, created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15"&gt;,
#&lt;Task id: 4, project_id: 1, name: "Scrutinize", due_at: nil, created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15"&gt;]

&gt;&gt; project.tasks.second.name = "" 
=&gt; "" 

&gt;&gt; project.valid?
=&gt; false

&gt;&gt; project.errors
=&gt; #&lt;ActiveRecord::Errors:0x23e4b10 @errors={"tasks_name"=&gt;["can't be blank"]}, @base=#&lt;Project id: 1, name: "Nested models patches", ‚Ä¶, author_id: 1&gt;&gt;</code></pre>

<h2>Transactions</h2>

<p>By now you are probably wondering about the consistency of your data when validations passes but saving does not. Consider this Author model which I have rigged to raise an exception after save:</p>

<pre><code>class Author &lt; ActiveRecord::Base
  has_many :projects

  after_save :raise_exception

  def raise_exception
    raise 'Oh noes!'
  end
end</code></pre>

<p>Here's the Project data before an update:</p>

<pre><code>&gt;&gt; project = Project.first
=&gt; #&lt;Project id: 1, name: "Nested models patches", created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15", author_id: 1&gt;

&gt;&gt; project.tasks
=&gt; [#&lt;Task id: 1, project_id: 1, name: "Write 'em", due_at: nil, created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15"&gt;,
#&lt;Task id: 2, project_id: 1, name: "Test 'em", due_at: nil, created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15"&gt;,
#&lt;Task id: 3, project_id: 1, name: "Create demo app", due_at: nil, created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15"&gt;,
#&lt;Task id: 4, project_id: 1, name: "Scrutinize", due_at: nil, created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15"&gt;]

&gt;&gt; project.author
=&gt; #&lt;Author id: 1, name: "Eloy", created_at: "2009-01-22 11:17:15", updated_at: "2009-01-22 11:17:15"&gt;</code></pre>

<p>Now let's delete the first Task and change the name of the second Task:</p>

<pre><code>&gt;&gt; project.tasks_attributes = { "1" =&gt; { "_delete" =&gt; "1" }, "2" =&gt; { "name" =&gt; "Who needs tests anyway?!" } }
=&gt; {"1"=&gt;{}, "2"=&gt;{"name"=&gt;"Who needs tests anyway?!"}}

&gt;&gt; project.tasks.first.marked_for_destruction?
=&gt; true

&gt;&gt; project.tasks.forty_two
=&gt; nil # Oops, I meant #second of course‚Ä¶ ;)

&gt;&gt; project.tasks.second.name
=&gt; "Who needs tests anyway?!" </code></pre>

<p>Finally, let&apos;s try to save the Project instance:</p>

<pre><code>&gt;&gt; project.save
RuntimeError: Oh noes!
  from /Users/eloy/code/complex-form-examples/app/models/author.rb:9:in `raise_exception_if_needed'</code></pre>

<p>An exception was raised while saving one of the nested models. Now let&apos;s see what happened to the data:</p>

<pre><code>SQL (0.1ms)   BEGIN
Task Destroy (0.3ms)   DELETE FROM `tasks` WHERE `id` = 1
Task Update (0.2ms)   UPDATE `tasks` SET `updated_at` = '2009-01-22 11:22:23', `name` = 'Who needs tests anyway?!' WHERE `id` = 2
SQL (17.0ms)   ROLLBACK</code></pre>

<p>As you can see, all changes were rolled back. Both updates as well as the removal of records marked for destruction all happen inside the same transaction.</p>

<p>As with any transaction, the attributes of the instance that you were trying to save will <em>not</em> be reset. This means that after this failed transaction the first task is still marked for destruction and the second one still has the new name value.</p>

<h2>Conclusion</h2>

<p>This patch allows you to create forms for nested model as deep as you would want them to be. Creating, saving, and deleting should all work transparently and inside a single transaction.</p>

<p>Please test this patch on your application, or take a look at <a href="http://github.com/alloy/complex-form-examples/tree/nested_attributes">my fork of Ryan&apos;s complex-form-examples which uses this patch</a>.</p>

<p>Your feedback is much appreciated. However, keep in mind that we can&apos;t possibly satisfy everyone&apos;s needs all at once. Please suggest additional features or major changes as a separate ticket for <em>after</em> the patch has been applied. The goal is to fix the bugs in this patch first so we all have a clean foundation to build on.</p>

<p>On a final note, I would like to thank <a href="http://github.com/ddollar">David Dollar</a> for the original <tt>:accessible</tt> implementation, <a href="http://www.fngtps.com/">Fingertips</a> (where I work) for sponsoring the time that has gone into this patch, <a href="http://manfred.github.com/">Manfred Stienstra</a> for extensive help on the documentation, and in no particular order  <a href="http://codelevy.com/">Lance Ivy</a>, <a href="http://www.koziarski.net/">Michael Koziarski</a>, <a href="http://railscasts.com/">Ryan Bates</a>, <a href="http://m.onkey.org/">Pratik Naik</a> and <a href="http://blog.hasmanythrough.com">Josh Susser</a> for general discussion.</p>

