---
layout: post
title: Associations aren't :dependent => true anymore
categories:
- documentation
author: marcel
published: true
date: 2006-04-28 16:46:00.000000000 +01:00
---
<p>Up until the 1.1 release, the way to automatically destroy <code>has_many</code> associations when the owner was itself destroyed was to either use the <code>:dependent</code> or <code>:exclusively_dependent</code> option when declaring the <code>has_many</code>.</p>
<pre><code>
class Account &lt; ActiveRecord::Base
  has_many :members, :dependent =&gt; true
end
</code></pre>
<p>or</p>
<pre><code>
class Brand &lt; ActiveRecord::Base
  has_many :products, :exclusively_dependent =&gt; true
end
</code></pre>
<p>The :dependent option instantiated all the associated objects and called destroy on each one. Destroy in turn triggers the callbacks defined on that associated model, such as those declared with <a href="http://api.rubyonrails.com/classes/ActiveRecord/Callbacks.html#M000795"><code>before_destroy</code></a> and <a href="http://api.rubyonrails.com/classes/ActiveRecord/Callbacks.html#M000796"><code>after_destroy</code></a>.</p>
<p>The <code>:exclusively_dependent</code> option, on the other hand, did not instantiate all the associated objects. Rather, it just generated a single <span class="caps">SQL</span> statement which deleted the associated records without first creating objects for each one. This buys you efficiency when you have no need for the flexibility of triggering model callbacks.</p>
<p>Since 1.1, the <span class="caps">API</span> for garbage collecting associated records has been consolidated into the <code>:dependent</code> option. Rather than saying <code>:dependent =&gt; true</code>, you now pass one of several symbols to the <code>:dependent</code> option which describes how the association is dependent on the owner.</p>
<p>Declaring the has many as <code>:dependent =&gt; :destroy</code> is the same as what used to be declared as <code>:dependent =&gt; true</code>. When the owner is destroyed, all the associated records are instantiated and destroyed.</p>
<pre><code>
class Account &lt; ActiveRecord::Base
  # Deprecated
  # has_many :members, :dependent =&gt; true
  
  # In favor of
  has_many :members, :dependent =&gt; :destroy
end
</code></pre>
<p>The new way to achieve the now deprecated <code>:exclusively_dependent</code> configuration is to use <code>:dependent =&gt; :delete_all</code> rather than <code>:dependent =&gt; :destroy</code>.</p>
<pre><code>
class Brand &lt; ActiveRecord::Base
  # Deprecated
  # has_many :products, :exclusively_dependent =&gt; true

  # In favor of
  has_many :products, :dependent =&gt; :delete_all
end
</code></pre>
<p>The <code>:destroy</code> and <code>:delete_all</code> option symbols are so named because they correspond with the behavior achieved by calling <code>destroy</code> versus <code>delete</code> on a model object. One triggers callbacks, the other just generates the delete <span class="caps">SQL</span> statement.</p>
<p>As an aside, another valid option is <code>:dependent =&gt; :nullify</code> which is similar to <code>:dependent =&gt; :delete_all</code> except rather than deleting the associated records, it just sets their foreign keys to <code>NULL</code>. This effectively removes the association, without removing the associated records from the database table.</p>
<p>As always, the semantics of <code>:dependent =&gt; :destroy</code> and <code>:dependent =&gt; :delete_all</code> are mutually exclusive, which this new <span class="caps">API</span> makes a bit more apparent.</p>
<p>It should be noted that declaring dependencies is not required when setting up has many associations. It is simply an option for when you desire such functionality.</p>
<p>Keep in mind that for now <code>:dependent =&gt; true</code> and <code>:exclusively_dependent =&gt; true</code> will still be supported, but they have been marked as deprecated and could be taken out in the future.</p>