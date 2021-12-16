---
layout: post
title: This Week in Edge Rails
categories: []
author: Mike Gunderloy
published: true
date: 2009-02-06 13:53:00.000000000 +00:00
---
<h3>January 31, 2009 &#8211; February 6, 2009</h3>
<p>The big news in edge Rails this week, of course, is the <a href="https://rubyonrails.org/2009/2/1/rails-2-3-0-rc1-templates-engines-rack-metal-much-more">release of Rails 2.3.0 RC1</a>. There&#8217;s been a fair amount of activity in the days since that happened, much of it concerned with tidying things up and fixing bugs based on early adopter issues and feedback. Thanks for all the testing, and by all means keep it up!</p>
<h2>Nested Form Support in Active Record and Action Pack</h2>
<p>This one is big enough that it got a whole <a href="https://rubyonrails.org/2009/1/26/nested-model-forms">blog entry</a> of its own (the version that was committed has minor changes from what you&#8217;ll see there). There are two main parts to this commit. First, Active Record can now update the attributes on nested models directly, provided you tell it to do so:</p>
<pre><code>
class Book &lt; ActiveRecord::Base
  has_one :author
  has_many :pages

  accepts_nested_attributes_for :author, :pages
end
</code></pre>
<p>Turning on nested attributes enables a number of things, including automatic (and atomic) saving of a record together with its associated children, and child-aware validations. But the big visible one is nested form support. Provided the parent model accepts nested attributes for the child objects, you can create nested forms using <code>form_for</code> and <code>field_for</code>. These forms can be nested arbitrarily deep, allowing you to edit complex object hierarchies on a single view without excessive code. For example, given this model:</p>
<pre><code>
class Customer &lt; ActiveRecord::Base
  has_many :orders

  accepts_nested_attributes_for :orders, 
    :allow_destroy =&gt; true
end
</code></pre>
<p>You can write this view in Rails 2.3:</p>
<pre><code>
&lt;% form_for @customer do |customer_form| %&gt;
  &lt;div&gt;
    &lt;%= customer_form.label :name, 'Customer Name:' %&gt;
    &lt;%= customer_form.text_field :name %&gt;
  &lt;/div&gt;

  &lt;!-- Here we call fields_for on the customer_form builder instance.
   The block is called for each member of the orders collection. --&gt;
  &lt;% customer_form.fields_for :orders do |order_form| %&gt;
    &lt;p&gt;
      &lt;div&gt;
        &lt;%= order_form.label :number, 'Order Number:' %&gt;
        &lt;%= order_form.text_field :number %&gt;
      &lt;/div&gt;

  &lt;!-- The allow_destroy option in the model enables deletion of
   child records. --&gt;
      &lt;% unless order_form.object.new_record? %&gt;
        &lt;div&gt;
          &lt;%= order_form.label :_delete, 'Remove:' %&gt;
          &lt;%= order_form.check_box :_delete %&gt;
        &lt;/div&gt;
      &lt;% end %&gt;
    &lt;/p&gt;
  &lt;% end %&gt;

  &lt;%= customer_form.submit %&gt;
&lt;% end %&gt;
</code></pre>
<p>For more information, see Ryan Daigle&#8217;s excellent <a href="http://ryandaigle.com/articles/2009/2/1/what-s-new-in-edge-rails-nested-attributes">What&#8217;s New in Edge Rails: Nested Object Forms</a>.</p>
<p><a href="http://github.com/rails/rails/commit/ec8f04584479aff895b0b511a7ba1e9d33f84067">commit</a></p>
<h2>Rails Guides Rework</h2>
<p>The Rails Guides have switched from using AsciiDoc markup to using Textile markup. This has a couple of benefits: first, it makes it easier to contribute to a guide. Second, it means that we can dispense with the compiled <span class="caps">HTML</span> versions of the guides in the Rails tree, because we can assume any developer can build from Textile. There&#8217;s a spiffy new look for the Guides web site too &#8211; check it out at the <a href="http://guides.rails.info">beta site</a>.</p>
<p><a href="http://github.com/rails/rails/commit/96d610553e5fdaabc923835ab1f194070ddb4477">commit</a></p>
<h2>Scaffolding Changes</h2>
<p>There were some cleanups to the code produced by <code>script/generate scaffold</code> &#8211; nothing too major, but they bring the controller and views more into line with current Rails best practices. Along the same lines, the &#8220;Riding the Rails&#8221; index.html page generated in new Rails applications now includes a link to the <a href="http://guides.rubyonrails.org">Rails Guides</a>.</p>
<p><a href="http://github.com/rails/rails/commit/44f02de2ad6d22d0d781c0c7303bcd8162aaa5d6">commit</a> <a href="http://github.com/rails/rails/commit/a2da7fd349b3e8fbeb814a64c9bb6b7c91290257">commit</a> <a href="http://github.com/rails/rails/commit/3be0ad60e4fcdafd4817508a21340dbf1bda6cb4">commit</a></p>