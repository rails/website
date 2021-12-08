---
layout: post
title: ! 'Community Highlights: IronRuby'
categories:
- activism
author: Matt Aimonetti
published: true
date: 2009-08-11 16:19:00.000000000 +01:00
---
<style media="screen,projection" type="text/css">
div.itv-question{padding-bottom: 1em; color: #555; font-size: italic}
div.itv-question span.matt-aimonetti{color:#336699; background-color:#F4DDA6;}
div.itv-answer{padding: 1em 1em 3em 1em;}
div.itv-answer span.Jimmy{background-color:#F4DDA6; color:#336699; font-size: italic}

</style>

<div>
  <p>As Rubyists migrate from Ruby 1.8 to Ruby 1.9, new Ruby
implementations are gaining in maturity.
Recently, IBM's Antonio Cangiano wrote an <a href="http://antoniocangiano.com/2009/08/03/performance-of-ironruby-ruby-on-windows/">interesting article</a> comparing the performance between Ruby 1.8, 1.9 and <a href="http://ironruby.net">IronRuby</a> on Windows which surprised quite a lot of people.</p>
<p>Unfortunately, IronRuby isn't very well known in the Rails community yet.</p>
<p>Here is an interview with <a href="http://blog.jimmy.schementi.com/">Jimmy Schementi</a>, lead developer for IronRuby, to help give you a little insight.</p>
</div>

![iron ruby logo](/assets/2009/8/11/ir-logo-white_thumb_5B2_5D_1.jpg)

<div class='itv-question'><span class='matt-aimonetti'>Matt:</span>  Hi Jimmy, thank you very much for taking the time to answer our questions. Could you please introduce yourself?</div>
<div class='itv-answer'>
  <span class='Jimmy'>Jimmy:</span>
<img src="/assets/2009/8/11/Photo_13-crop-close-close_1.jpg" style="float:right; padding-left:1em">   
Thanks for sending me questions; it's great to see the ever-increasing interest in IronRuby!
I live in Seattle and work at Microsoft on a small team making an open-source implementation of Ruby called "IronRuby". I personally split my efforts between making the IronRuby codebase better, integrating IronRuby with .NET-related technologies like Silverlight or ASP.NET MVC, getting our monthly binary releases are in order, discussing IronRuby with the community, and making sure Microsoft's management knows how awesome Ruby is.
But I'm definitely not alone on the core team. John Lam fueled the interest of a .NET-Ruby implementation with the RubyCLR project, and started the IronRuby project. Tomas Matousek is the brains behind the IronRuby compiler, and gets credit for all the compiler code and the recent performance gains. Jim Deville is the man keeping IronRuby working with tons of tests and a fantastic test infrastructure. Shri Borde is our manager, and he spends his non-managing time fixing the libraries and hosting the infamous <a href="http://rubyforge.org/pipermail/ironruby-core/2009-July/005090.html">"IronRuby pair-programming" sessions</a>. And of course all the IronRuby contributors over the past two years have been an enormous help.
</div>

<div class='itv-question'><span class='matt-aimonetti'>Matt:</span>  As a follow up on a recent blog post, could you tell us know how you learned Ruby and maybe give some advice or an important point not to miss for people wanting to learn Ruby?</div>
<div class='itv-answer'><span class='Jimmy'>Jimmy:</span> 

I heard about Ruby from my Computer Science professor/advisor Gary Pollice, who taught all the programming language classes at Worcester Polytechnic Institute. I was searching for an expressive programming language for making games, and Ruby was a perfect fit. A couple years later I worked for the same university building a computer-tutoring system called Assistment, where myself and a couple of other people fed up with the Java codebase ported it to Ruby on Rails. It was a success, and <a href="http://assistment.org">http://assistment.org</a> is now a Rails system. That's where I really learned everything about Ruby and became extremely interested in how Ruby worked.
I learned the most from Ruby when I had a substantial Ruby project to work on, since I got to see its expressiveness making me more productive on a large scale. I'd still suggest trying to learn Ruby on small things here and there, but you'll really be amazed if you use it for something larger.
</div>

<div class='itv-question'><span class='matt-aimonetti'>Matt:</span>  IronRuby certainly looks very interesting, can you run Rails on it?</div>
<div class='itv-answer'><span class='Jimmy'>Jimmy:</span> 

Yes, at RailsConf 2009 I showed IronRuby running non-trivial Rails applications. IronRuby can run Rails on WEBrick, as well as on the web-server that comes with Windows, IIS. For the database you can use SQLServer Express (which is free), or any .NET based database, like the recent <a href="http://code.google.com/p/csharp-sqlite/">csharp-sqlite port</a>. Here's a detailed post the IronRuby on Rails talk at RailsConf 2009: <a href="http://blog.jimmy.schementi.com/2009/05/ironruby-at-railsconf-2009.html">http://blog.jimmy.schementi.com/2009/05/ironruby-at-railsconf-2009.html</a>.
</div>

<div class='itv-question'><span class='matt-aimonetti'>Matt:</span>  Are there any limitations that our readers should be aware of before starting to develop on IronRuby?</div>
<div class='itv-answer'><span class='Jimmy'>Jimmy:</span> 

The main limitation is that IronRuby does not support any of the C-based Ruby libraries, and only after 1.0 will we consider building an interop layer between the Ruby C API and IronRuby. In the meantime, people have been porting their favorite C-based Ruby libraries over to C# so it can be used from IronRuby, like <a href="http://github.com/nrk/ironruby-hpricot/tree/master">Hpricot</a>.
While this seems like a large limitation, most of the C-based libraries Ruby code depends on have an equivalent API in the .NET framework, which IronRuby has direct integration with, making either using directly or porting really easy. For example, the Rails app I showed at RailsConf did image resizing directly with the System.Windows.Drawing APIs rather than ImageMagick.
If your code does not depend on anything outside of the Ruby standard library that is C-based, you should have no problems. Take a look at the documentation for running Rails on IronRuby to make sure things go smoothly: <a href="http://ironruby.net/Documentation/Rails">http://ironruby.net/Documentation/Rails</a>.
</div> 

<div class='itv-question'><span class='matt-aimonetti'>Matt:</span>  What are the pros/cons of using IronRuby versus the standard Ruby (Ruby1.8 or Ruby1.9) on Windows?</div>
<div class='itv-answer'><span class='Jimmy'>Jimmy:</span> 

IronRuby is a very fast Ruby interpreter/compiler due to our own tricks we pull to make Ruby fast, the tricks the DLR does to make dynamic languages fast, and the CLR's just-in-time compiler which generates very efficient code. We're definitely aiming to be the fastest Ruby implementation on Windows. The most recent performance work we did was only in the core libraries ("Array", "Hash", etc), and that helped IronRuby surpass Ruby 1.8.6 on Windows and gets much closer to Ruby 1.9.1. IronRuby is continuing to investigate ways of gaining performance in each release.
IronRuby is also a very 1.8.6 compliant Ruby implementation. There is a "-19" flag for any 1.9 specific features you might need, and a "-20" flag for any Ruby 2.0 features we might have in there, but there are no guarantees on those; we only test the 1.8.6 behavior today. We pass ~85% of the RubySpec test suite, the best test suite for Ruby implementations to verify their correctness. However, the numbers I'm more concerned with are whether specific Ruby libraries' test-suites work. We pass Rails, RubyGems, Rake, and RSpec's test suites at well over 90%, and fix compatibility issues when asked about them, so please let us know if your applications run into any compatibility problems.
Other than the limitations that I mentioned in the previous question, you should have no problems. I love people to try running their Rails applications on the latest IronRuby bits hosted on GitHub, and please report any issues you find on <a href="http://ironruby.codeplex.com">http://ironruby.codeplex.com</a>.
</div>

<div class='itv-question'><span class='matt-aimonetti'>Matt:</span>  Are they any extra advantages to use IronRuby?</div>
<div class='itv-answer'><span class='Jimmy'>Jimmy:</span> 

The most notable advantage is that IronRuby works in Silverlight, a subset of the .NET framework which installs as a browser plugin in Mozilla-based browsers (eg. Firefox on Mac and Windows), Webkit-based browsers (eg. Safari on Windows), and IE (on Windows, duh). The Mono project is implementing an open-source version of Silverlight called "Moonlight" so Linux developers can run Silverlight applications, which I talked about at <a href="http://blog.jimmy.schementi.com/2009/07/ironruby-at-oscon-2009-mono-moonlight.html">OSCON 2009</a>. This enables you to write Ruby in the browser instead of JavaScript, for controlling HTML or vector graphics. The best place for documentation/examples today is on the <a href="http://visitmix.com/labs/gestalt">Gestalt website</a>, a little portal designed to bring awareness to Ruby and Python in Silverlight: http://visitmix.com/labs/gestalt. The IronRuby website is in flux at the moment, but clearer documentation is on its way. I also built a little Ruby on Rails plugin called <a href="http://www.schementi.com/silverline/">"Silverline"</a> to make it really easy to use Silverlight from Rails. Worth checking out if you want to use Ruby as a client scripting language.
IronRuby has direct integration with the .NET framework, so anything that is in, or run on, the .NET framework can be used directly from IronRuby. .NET namespaces are exposed as Ruby modules, .NET classes as Ruby classes, and you can call methods on them just like you call Ruby methods. This makes it really easy to build pieces of your system in a static language (if it makes sense to use, like for a high-performance message queue, game engine, etc) and then interact with it through Ruby.
</div> 

<div class='itv-question'><span class='matt-aimonetti'>Matt:</span>  Why is Microsoft interested in a Ruby project? What advantage do they find in sponsoring such a project?</div>
<div class='itv-answer'><span class='Jimmy'>Jimmy:</span> 

I see it as a "you scratch my back, I'll scratch yours" situation. Microsoft sponsoring IronRuby helps the Ruby community by making Ruby a first-class language on Windows and .NET, also giving the .NET crowd the choice of using Ruby, and in return the IronRuby project helps promote innovation in the languages that drive Visual Studio purchases (C#, VB.NET, and F#).
As a kind-of related side-note: some people feel it's a bad thing that there are so many implementations of Ruby, kind of like MRI is so bad that others had to fix it, but I completely disagree. IronRuby, JRuby, MacRuby, and most of the other implementations accomplish the same thing for their respective communities; building a bridge between Ruby developers and themselves. Rather than needing to recreate MRI, most have been inspired by it and wanted to bring the language to their platform. It's a great thing for the Ruby community because it gives access to more platforms, operating systems, and libraries than any other language.
Anyway, back to the question: as an example of how IronRuby has helped language innovation, the next version of C# will now have a "dynamic" keyword, indicating that the variable statically-typed as "dynamic" (=P) should perform dynamic dispatch on any method calls, rather than verify the method call at compile-time. This infrastructure uses the Dynamic Language Runtime directly, so C# can use Ruby objects just like they were defined in C#, or any other dynamic-enabled object.
</div>

<div class='itv-question'><span class='matt-aimonetti'>Matt:</span>  How will IronRuby make Rails developer lives easier and what are the plans for the future of IronRuby?</div>
<div class='itv-answer'><span class='Jimmy'>Jimmy:</span> 

My hope is that IronRuby can benefit existing Rails developers by making Windows a great option to develop and deploy on. By building a Rack adapter specifically for IronRuby and IIS (like I showed at RailsConf), Rails applications can tie directly into the same web-server pipeline that ASP.NET does, significantly reducing the overhead deploying via IIS+FCGI gives you today. This makes deploying Rails applications on IIS just like deploying ASP.NET apps, so system administrators don't have to learn a whole new framework; to them it's just ASP.NET. Then any existing ASP.NET shops who want to offer Rails applications to their customers can, with the same infrastructure and deployment know-how. This is bringing choice to the technologies you choose to deploy on Windows, just like how Microsoft has helped make PHP run well on IIS.
The only definite future plans for IronRuby is continue pushing on performance on compatibility, as well as continue supporting the latest version of Silverlight and Mono. 1.0 will be released when the community is happy with the state of those metrics, and future work should be driven by what IronRuby users want. If you start using IronRuby and want a feature either by 1.0 or post 1.0, please post the request to the mailing list or to CodePlex. We have tons of hopes and dreams for what IronRuby can do in the future, so please come help out!
</div> 

<div class='itv-question'><span class='matt-aimonetti'>Matt:</span>  Is there anything you would like to add or share with the readers?</div>
<div class='itv-answer'><span class='Jimmy'>Jimmy:</span> 

  Thanks to Matt for the interview, and thanks to the readers for getting this far! Go grab the 0.9 release from <a href="http://ironruby.net/download">http://ironruby.net/download</a>, or the latest source from <a href="http://github.com/ironruby/ironruby">http://github.com/ironruby/ironruby</a>, tell us if you have any problems with it, and we hope you'll help IronRuby get to a 1.0 release. 
</div>