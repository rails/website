---
layout: post
title: ! 'Living on the Edge (or what''s new in Edge Rails) #3'
categories:
- edge
author: Chu Yeow
published: true
date: 2008-07-06 06:32:00.000000000 +01:00
---
<p>There hasn&#8217;t been much of note in terms of big changes or features in edge Rails lately, so this time I&#8217;ll leave you to pore over the <a href="http://github.com/rails/rails/commits/master">Rails commit logs</a> for any bug fixes or minor changes that I haven&#8217;t pointed out. There has been some work in progress with ActionPack refactoring and multithreading work as well as some activity in <a href="http://github.com/rails/rails/tree/master/activemodel">ActiveModel</a> too, but nothing really concrete yet (still very much a work in progress).</p>
<p>As usual, be sure to leave any suggestions and criticisms in the comments.</p>
<h4>Thin support with script/server</h4>
<p><code>script/server</code> now checks for the availability of <a href="http://code.macournoyer.com/thin/">Thin</a> and uses it. Pretty convenient if you are using Thin as your production server (and want to run the same when developing). You&#8217;ll have to add <code>config.gem 'thin'</code> to your <code>environment.rb</code> first to get this to work.</p>
<p>This patch was contributed by one of the guys at <a href="http://fluxin.com/">fluxin</a>.</p>
<p><a href="http://github.com/rails/rails/commit/a93ea88c0623b4f65af98c0eb55924c335bb3ac1">Changeset</a></p>
<h4>String#humanize can be customized via inflection rules</h4>
<p>The <code>String#humanize</code> core extension method is used convert strings with underscore, usually table column names, in them to pretty readable text. For example,</p>
<pre><code class="ruby">"actor_salary".humanize
=&gt; "Actor salary"
"anime_id".humanize
=&gt; "Anime"</code></pre>
<p>Sometimes this doesn&#8217;t work out so well though, when you have legacy tables or simply &#8220;inhumanely&#8221; named column names like &#8220;act_sal_money&#8221; (which is really &#8220;Actor salary&#8221;, but would be <code>#humanize-d</code> to &#8220;Act Sal Money&#8221;).</p>
<p>You can now specify custom inflection rules (just like you would for plural/singular/irregular/uncountable inflection rules):</p>
<pre><code class="ruby">Inflector.inflections do |inflect|
  inflect.human /_cnt$/, '\1_count'
  inflect.human 'act_sal_money', 'Actor Salary'
end</code></pre>
<p>Notice how you can also use a regular expression above to convert columns like &#8220;click_cnt&#8221; to &#8220;Click count&#8221;.</p>
<p>Thumbs up to <a href="http://www.dcmanges.com/">Dan Manges</a> and <a href="http://rails.lighthouseapp.com/users/19954">Pascal Ehlert</a> for this patch.</p>
<p><a href="http://github.com/rails/rails/commit/4f75840d72b96fff34d65b59480da7d6c7494120">Changeset</a></p>
<h4>Allow conditions on multiple tables to be specified using hash.</h4>
<p>Pratik has committed a tiny (but really useful) change to ActiveRecord that allows you to specify conditions on a joined table in its own hash. An example would explain it better:</p>
<pre><code class="ruby">Anime.all(
  :joins =&gt; :character,
  :conditions =&gt; {
    :active =&gt; true,
    :characters =&gt; { :gender =&gt; 'female' }
  }
)
</code></pre>
<p>The ActiveRecord query above would find all &#8220;active&#8221; anime with &#8220;female&#8221; characters.</p>
<p><a href="http://github.com/rails/rails/commit/cd994eff9a343df376bfaec59de5b24a2ab51256">Changeset</a></p>
<h4>Outro</h4>
<p>That&#8217;s it for this week&#8217;s Living on the Edge &#8211; do let me know if you like to see more write-ups on even the minor bug fixes and changes that&#8217;d I&#8217;d left out this week.</p>