---
layout: post
title: Getting Things Done with Active Record
categories:
- sightings
author: admin
published: true
date: 2005-07-07 11:26:45.000000000 +01:00
---
<p>Mike Clark has a great article on <a href="http://clarkware.com/cgi/blosxom/2005/07/07#GettingThingsDoneAR">how to dig deeper into Active Record</a> by using <code>acts_as_nested_set</code> and <code>find_by_sql</code>. On the notion of using <span class="caps">SQL</span> in an OO model, he writes:</p>
<blockquote>Some may think this breaks object purity. I think it&#8217;s just productive. After all, I know there&#8217;s a database under there, and <span class="caps">SQL</span> is incredibly powerful for querying relational data. Most of the time I&#8217;d rather not write <span class="caps">SQL</span> because I&#8217;m doing <span class="caps">CRUD</span> operations. In those cases, Active Record intervenes to boost my productivity. And when <span class="caps">SQL</span> is the best tool for the job, Active Record gets out of the way to let me be most productive.</blockquote>
<p>I couldn&#8217;t agree more. <span class="caps">SQL</span> is not bad at all. Once you take out the repetition for the simple cases, you&#8217;re left with a very powerful query language for the hard cases.</p>