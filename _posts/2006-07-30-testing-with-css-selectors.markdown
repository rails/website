---
layout: post
title: Testing with CSS selectors
categories:
- sightings
author: David
published: true
date: 2006-07-30 16:46:00.000000000 +01:00
---
<p>If you have trouble wrapping your head around assert_tag and its options, you might want to give <span class="caps">CSS</span> selectors a chance instead. There are currently two plugins for handling that: <a href="http://blog.labnotes.org/2006/07/03/assert_select-plugin-for-rails/">assert_select</a> and <a href="http://www.fearoffish.co.uk/blog/article/testing_views_with_style">hpricot helper</a>.</p>
<p>The hpricot style gives you something like <code>assert element('title').should_contain('Funky Chicken Title')</code> and the assert_select gives you something like <code>assert_select "title", "Welcome"</code>.</p>
<p>From a brief cursory overview, I tend to like the assert_select style better. But I have yet to use either for real stuff. Please do shoot a comment with your experiences. One of these methods could well make it into core.</p>