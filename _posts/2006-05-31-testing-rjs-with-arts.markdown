---
layout: post
title: Testing RJS with ARTS
categories:
- sightings
- documentation
author: marcel
published: true
date: 2006-05-31 14:51:00.000000000 +01:00
---
<p>An Achilles&#8217; heal of Rails is no good way to test your <span class="caps">RJS</span>. As the presentation behavior gets more and more sophisticated, the inability to test it becomes a real problem. Not anymore.</p>
<p><a href="http://glu.ttono.us/">Kevin Clark</a> has released <a href="http://thar.be/svn/projects/plugins/arts/"><span class="caps">ARTS</span></a>, a mechanism to test <span class="caps">RJS</span>. His <span class="caps">API</span> is simple yet flexible. A single point of entry let&#8217;s you test a considerable amount of the <span class="caps">RJS</span> you can generate. Here&#8217;s an idea of what you can do:<br />
<pre><code>
  assert_rjs :alert, 'Hi!'                                                     
  assert_rjs :assign, 'a', '2'                                                 
  assert_rjs :call, 'foo', 'bar', 'baz'                                        
  assert_rjs :draggable, 'draggable_item'                                      
  assert_rjs :drop_receiving, 'receiving_item'                                 
  assert_rjs :hide, "post_1", "post_2", "post_3"                               
  assert_rjs :insert_html, :bottom, 'posts'                                    
  assert_rjs :redirect_to, :action =&gt; 'list'                                   
  assert_rjs :remove, "post_1", "post_2", "post_3"                             
  assert_rjs :replace, 'completely_replaced_div', '&lt;p&gt;This replaced the        
div&lt;/p&gt;'                                                                       
  assert_rjs :replace_html, 'replaceable_div', "This goes inside the           
div"                                                                           
  assert_rjs :show, "post_1", "post_2", "post_3"                               
  assert_rjs :sortable, 'sortable_item'                                        
  assert_rjs :toggle, "post_1", "post_2", "post_3"                             
  assert_rjs :visual_effect, :highlight, "posts", :duration =&gt; '1.0'           
</code></pre></p>
<p>He&#8217;s written up an <a href="http://glu.ttono.us/articles/2006/05/29/guide-test-driven-rjs-with-arts">extensive tutorial</a> to get you up and running.</p>