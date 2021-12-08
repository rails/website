---
layout: post
title: Reloading Revamped
categories:
- edge
author: nicholas
published: true
date: 2006-08-11 17:25:00.000000000 +01:00
---
<p>A few days ago I checked in a significant improvement to Rails&#8217; dependencies and reloading code. In the past, changes to dependencies.rb have shed the blood of those courageous enough to ride edge; We&#8217;ve worked hard to prevent accidental breakage this time, but there may be some changes that could break your app.</p>
<p>Before you freeze edge to the prior revision, I should explain that most breakage will be extremely simple to fix. Prior to this revision, Rails would happily load files from Ruby&#8217;s standard lib via const_missing; you will now need to explicitly require such files. (Rails&#8217; autoloading was intended as a replacement for require_dependency; its replacement of Ruby&#8217;s require is unfortunate and undesired.)</p>
<p>This change is not the only one that has occurred. Rails&#8217; Reloadable module has been deprecated, and the previously independent systems of automatic loading and unloading have been brought together in a happy union.</p>
<p>Dependencies&#8217; new behavior should be more reliable and less annoying. Annoyances such as the lack of module reloading have been fixed. Accidentally loading stdlib packages will no longer occur.</p>
<p>The actual mechanics of Dependencies are now relatively simple. Instead of using Reloadable to decide which classes to unload, Rails records which constants are loaded via const_missing. When the request is completed, each autoloaded constant is removed, leaving the process in a clean state. The actual mechanics are slightly more complex, but not inordinately so. Feel free to open dependencies.rb and peruse the code.</p>
<p>Hopefully the newfound simplicity of this approach will improve the transparency of Dependencies &#8212; some software is best when not noticed. If you&#8217;re running on trunk this change <em>does</em> cause your application to error, please do open and assign Ulysses a ticket.</p>
<p>Before I depart, I&#8217;d like to mention another (independent) change to dependencies: When Rails fails to find a missing constant, you will now see a fully qualified constant name in the description. For example, if a method in your User class references Acount, (rather than Account,) Rails will state that User::Acount is missing rather than ::Acount. Rest assured that Rails has looked for Acount in Object as well as User, and is merely reporting the fully qualified constant name, as Ruby&#8217;s own const_missing does.</p>