---
layout: post
title: Today is Leopard day!
categories:
- sightings
author: David
published: true
date: 2007-10-26 20:46:00.000000000 +01:00
---
<p>OS X 10.5 is shipping today under the Leopard moniker. Besides being a great upgrade to a wonderful operating system, it's also the first version of OS X that ships with Rails in the package. Apple has done a phenomenal job including all the good stuff from the Ruby and Rails world into the developer tools that come with the OS.</p>

<p>So out of the box you get Ruby 1.8.6, Rails 1.2.3 (which is just a "gem update rails" call away from being 1.2.5), Capistrano, SQLite-bindings, and so much more. No more need for compiling your own Ruby. It's great. See all the changes in <a href="http://trac.macosforge.org/projects/ruby/wiki/WhatsNewInLeopard">What's New in Leopard</a>.</p>

<p>The only minor snag is that in order to install the MySQL C bindings for Ruby, you have to be quite particular on the command line. Here's the cheat line you need to install (<a href="http://trac.macosforge.org/projects/ruby/wiki/Troubleshooting#IcannotbuildrubymysqlonLeopardwithmysql.combinaries">read more at macosforge</a>):</p>

<blockquote>sudo env ARCHFLAGS="-arch i386" gem install mysql -- --with-mysql-config=/usr/local/mysql/bin/mysql_config</blockquote>

<p>So happy <a href="http://www.amazon.com/gp/product/B000FK88JK?ie=UTF8&tag=rubonrai-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B000FK88JK">Leopard</a> day, folks!</p>