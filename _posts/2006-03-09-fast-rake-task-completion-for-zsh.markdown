---
layout: post
title: Fast Rake Task Completion for Zsh
categories:
- tricks
- tools
author: nicholas
published: true
date: 2006-03-09 02:50:00.000000000 +00:00
---
<p>Those of you who love running Rake tasks but don&#8217;t like typing are in for a treat. Although there&#8217;s been task completion for Rake for a while now, most of the scripts for it are painfully slow, especially with Rails&#8217; Rakefile.</p>
<p>Below is a small zsh completion script that uses a cache file (named <tt>.rake_tasks</tt>) to improve the performance of your tab keystrokes.</p>
<p>To use, throw it in your home folder somewhere and add <tt>source $<span class="caps">HOME</span>/.rake_completion.zsh</tt> to your <tt>.zshrc</tt> file.</p>
<p>A few disclaimers: Yes, it doesn&#8217;t work with lowercase named <tt>rakefile</tt>&#8216;s. Only barbarians use such names though, so hopefully you won&#8217;t have a problem there. And no, it doesn&#8217;t complete the other assorted arguments that the rake command can accept, frankly because I rarely use them.</p>
<p>Without further ado, here&#8217;s the bytes.</p>
<pre>
_rake_does_task_list_need_generating () {
  if [ ! -f .rake_tasks ]; then return 0;
  else
    accurate=$(stat -f%m .rake_tasks)
    changed=$(stat -f%m Rakefile)
    return $(expr $accurate '&gt;=' $changed)
  fi
}

_rake () {
  if [ -f Rakefile ]; then
    if _rake_does_task_list_need_generating; then
      echo "\nGenerating .rake_tasks..." &gt; /dev/stderr
      rake --silent --tasks | cut -d " " -f 2 &gt; .rake_tasks
    fi
    compadd `cat .rake_tasks`
  fi
}

compdef _rake rake
</pre>
<p>(Use at your own risk. Comments and improvements welcome.)</p>