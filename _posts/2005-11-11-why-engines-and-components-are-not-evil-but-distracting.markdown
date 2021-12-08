---
layout: post
title: Why engines and components are not evil but distracting
categories:
- general
author: David
published: true
date: 2005-11-11 10:47:04.000000000 +00:00
---
<p>I&#8217;ve been following the enthusiasm for engines, components, and bigger plugins from the sidelines for a while now. It&#8217;s a subject of very mixed emotions. On the one hand, I&#8217;m really glad to see that people get so excited and start dreaming of bigger and better things. That&#8217;s passion in the works and its great.</p>
<p>On the other hand, I think these developments are basically another name for high-level components. And you all know <a href="http://www.loudthinking.com/arc/000407.html">how I feel about those</a>. The short summary is that high-level components are a mirage: By the time they become interesting, their fitting will require more work than creating something from scratch.</p>
<p>But I start getting really high eyebrows when I hear of &#8220;engines that depend on other engines that can be swapped out with yet another engine&#8221;. Even plugin dependencies are dangerously close to something I would consider unfit for Rails. Simply because it encourages a style of development that I find unhealthy.</p>
<p>So this is not a slam against the technical merits or implementation of either engines or anything else in the same boat. It&#8217;s a concern that they will distract people, that they will appear as needed, and in turn, that they will take the debacle that was Salted Hash Login to a new standardized level.</p>
<p>Rails is all about making the simple things so easy that you need not abstract them. It&#8217;s about making the creation of logins, of access control, of content management, of all these business logic components so very easy that you will treasure the application-specific solutions of your own rather than long for The One True Login System.</p>
<p>So what am I saying? That engines should be stopped? Of course not. But I am saying that Rails will continue to send a signal with what&#8217;s included in the core that this is a sideshow project. It satisfies some needs for some people and that&#8217;s great. But the goal of Rails is to create a world where they are neither needed or strongly desired. Obviously, we are not quite there yet.</p>
<p>One way of getting there is to do a better job of educating new comers in common patterns. Answer the question &#8220;if engines and components are not the way, then show me how!&#8221;. So this is a call to all those experts out there. Help us spread the good patterns. Make videos, write tutorials, help newbies on #rubyonrails, answer requests on the mailing list.</p>
<p>And if you have a great idea for an engine, or a high-level component in general, think about this: Is there a way I could abstract a smaller slice of functionality as an independent plugin and then release that alongside a pattern that described how to use it like the component would have done all in software? More often than not, I think you could find this to be true.</p>
<p>Note: James Adam, the creator of the engines approach, has <a href="http://article.gmane.org/gmane.comp.lang.ruby.rails/29166">a great post</a> on the mailing list for how he uses engines internally at his company. That&#8217;s perfectly cool use. The trouble with high-level components are solely related to making them generic.</p>