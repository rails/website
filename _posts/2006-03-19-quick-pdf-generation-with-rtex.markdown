---
layout: post
title: Quick PDF generation with RTex
categories:
- sightings
- releases
- tools
author: marcel
published: true
date: 2006-03-19 23:02:00.000000000 +00:00
---
<p><a href="http://codefluency.com/">Bruce Williams</a> of <a href="http://naviance.com/">Naviance</a> recently <a href="http://codefluency.com/articles/2006/03/17/rails-rtex-plugin-generating-pdfs">announced</a> his <a href="http://codefluency.com/pages/rtex">RTex</a> plugin. It exposes your controller data to <code>rtex</code> views that output <a href="http://www.latex-project.org/">LaTeX</a> which is convereted to <span class="caps">PDF</span>.</p>
<p>To install you can use the plugin script:</p>
<p><code>ruby script/plugin install rtex</code></p>
<p>Or grab it from svn:</p>
<p><tt>svn co http://codefluency.com/svn/codefluency/rails/plugins/rtex</tt></p>
<p>People have used <a href="http://ruby-pdf.rubyforge.org/pdf-writer/"><span class="caps">PDF</span>::Writer</a> to generated <a href="http://rubyforge.org/projects/railspdfplugin/">.rpdf views</a>. Why go through LaTex to get to <span class="caps">PDF</span> rather than use <span class="caps">PDF</span>::Writer? Speed, says Bruce.</p>