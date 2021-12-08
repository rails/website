---
layout: post
title: ! 'Rails for Strut-ters: Dealing with the view'
categories:
- sightings
author: admin
published: true
date: 2005-02-25 18:42:12.000000000 +00:00
---
<p>Brian McCallister is doing an excellent job showing Strut-ters how Rails work by comparing it to their own environment. In <a href="http://kasparov.skife.org/blog/2005/02/25#rails-for-strutters-2">this round</a>, he&#8217;s taking a look at the oh-horror that is unleashing a real programming language on view logic. He finds that perhaps it&#8217;s not so bad at all comparing:</p>
<pre>&amp;lt;% for invite in @invitations %&gt;
  ...
&amp;lt;% end %&gt;</pre>
<p>&#8230;from Rails to the <span class="caps">JSP</span> approach of tag libraries with:</p>
<pre>&amp;lt;%@ taglib uri="/tags/struts-logic" prefix="logic" %&gt;
...
&amp;lt;logic:iterate name="invite" property="invitation"&gt;
  ...
&amp;lt;/logic:iterate&gt;</pre>
<p>Indeed they do look similar. For more on that discussion, read <a href="http://www.loudthinking.com/arc/000405.html">my views on template languages</a> and <a href="http://www.loudthinking.com/arc/000408.html">why the scriplet approach works in Rails</a>.</p>
<p>As a sidenote, I&#8217;d like to suggest a few improvements to the tag/value mix that Brian has in his examples. For example, we could convert:</p>
<pre>&amp;lt;form action="&lt;%= url_for :action =&gt; 'register', :controller =&gt; 'rsvp' %&gt;"&gt;  
...
   &amp;lt;input type="text" 
          name="invite_names[&amp;lt;%= slot %&gt;]" 
          length="30"&amp;lt;%= "value='#{@invite.split_names[slot]}'" %&gt;/&gt;
...
</pre>
<p>To use a few more succinct <a href="http://ap.rubyonrails.com/classes/ActionView/Helpers/FormTagHelper.html">FormTagHelper</a> helper methods:</p>
<pre>&amp;lt;%= form_tag :action =&gt; 'register', :controller =&gt; 'rsvp' %&gt;
...
&amp;lt;%= text_field_tag "invite_names[#{slot}]", @invite.split_names[slot] %&gt;</pre>
<p>But that&#8217;s nitpicking. Brian is doing a fabulous job expressing the unknown in familiar terms. If you&#8217;re in need for something more visual on the Helpers, see this video demonstrating <a href="http://www.rubyonrails.com/media/video/clips/extracting_helpers.mov">how to create a helper method</a> in Rails.</p>