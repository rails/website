---
layout: post
title: "On Rails — Jean Boussier & IO-Bound Misconceptions"
categories: podcast
authors:
  - Rails Foundation
  - Robby Russell
og_image: assets/images/on-rails-podcast.png
youtube: IDcu4QFZEXw
published: true
date: 2025-07-14
---

<p>Jean Boussier, Senior Staff Engineer at <a href='https://www.shopify.com'>Shopify</a> and member of the <a href='https://rubyonrails.org/community'>Rails Core team</a>, joins Robby to dig into the performance realities behind modern Rails apps.</p><p>They explore what it means to be IO-bound or CPU-bound, how <a href='https://www.rubyguides.com/2015/07/ruby-global-interpreter-lock/'>Ruby’s Global VM Lock</a> affects concurrency, and why &quot;fast&quot; is too vague to be useful. Jean explains why instrumentation is often the missing piece and shares thoughtful approaches to using background jobs with intention.</p><p>They also talk about gem dependencies. The gems in your `Gemfile` are not magic. If your app depends on them, you should understand them. You can read the code. You can patch it. You can make it your own.</p><p>This episode is a reminder that Rails is not a black box. It is a system you can study, shape, and improve. The more you learn how it works, the more confidently you can build with it.</p><p>🔗 <b>References &amp; Resources Mentioned</b></p><p>- 📖 <a href='https://craftinginterpreters.com/'>Crafting Interpreters</a> – A book Jean recommends for understanding how interpreters and Ruby internals work  </p><p>- 🧵 <a href='https://github.com/Shopify/gvltools'>GVL Tools (Shopify gem)</a> – A tool for measuring thread contention in Ruby apps  </p><p>- 📊 <a href='https://appsignal.com'>AppSignal</a> – Monitoring platform that integrates with GVL instrumentation  </p><p>- 🚢 <a href='https://github.com/Shopify/shipit-engine'>ShipIt Engine</a> – Shopify’s open-source deployment tool  </p><p>- 🔒 <a href='https://www.rubyguides.com/2015/07/ruby-global-interpreter-lock/'>Ruby’s Global VM Lock</a> – Overview of what the GVL is and how it works  </p><p>- 🦄 <a href='https://bogomips.org/unicorn/'>Unicorn</a> – A classic preforking Ruby web server  </p><p>- 🐆 <a href='https://puma.io/'>Puma</a> – A multi-threaded Ruby/Rack web server  </p><p>- 🔀 <a href='https://byroot.github.io/ruby/performance/2025/03/04/the-pitchfork-story.html'>Pitchfork</a> – Shopify’s fork of Unicorn, optimized for their infrastructure  </p><p>- ⚙️ <a href='https://api.rubyonrails.org/v7.1/classes/ActiveRecord/Relation.html#method-i-load_async'>ActiveRecord Async Queries</a> – Jean’s Rails Core contribution for backgrounding slow queries  </p><p>- 🔗 <a href='https://graphql.org/'>GraphQL</a> – Used at Shopify to structure and query API data</p><p><br/><br/></p>

<p><a href="https://podcast.rubyonrails.org/2462975/episodes/17496711-jean-boussier-io-bound-misconceptions">Listen to this episode</a> (1h 5m) or <a href="https://podcast.rubyonrails.org">subscribe to On Rails</a> in your podcast player.</p>
