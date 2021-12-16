---
layout: post
title: Performance of Rails Metal
categories: []
author: Pratik Naik
published: true
date: 2008-12-20 00:25:00.000000000 +00:00
---
<p>Josh recently added <a href="https://rubyonrails.org/2008/12/17/introducing-rails-metal">Rails Metal</a>, which has been getting a fair bit of publicity. Metal is a great piece of functionality for those rare cases where the speed of your framework actually matters.</p>
<p>However, people have been reporting <a href="http://www.infoq.com/news/2008/12/rails-metal">25x speed increase</a> over a regular Rails action, and that just doesn&#8217;t seem right. So I decided to do some benchmarking of &#8216;Hello World&#8217; Rails action v/s Metal. Here are my results :</p>
<h2>Rails action</h2>
<filter:code>Time per request : 1.244 [ms]<br />
Throughput : 800 request/second</filter:code>
<h2>Metal</h2>
<filter:code>Time per request : 0.386 [ms]<br />
Throughput : 3000 request/second</filter:code>
<p><i>You can find more details about benchmark command/code at <a href="http://gist.github.com/38080">http://gist.github.com/38080</a></i></p>
<p>Of course, these are not very scientific benchmarks and your results may vary a little from what you see here. You should also make sure you <strong>run your benchmarks in production mode</strong>.</p>
<p>Now, if you compare these results, 3000 r/s against 800 r/s, you may think you&#8217;re seeing a 3x performance increase. However, that&#8217;d a wrong perception and throughput isn&#8217;t the best metric here.</p>
<p>Difference in <strong>Time per request</strong> is what you should looking at. In my benchmarks, speed increase I get when using Metal is about <strong>1 millisecond</strong>. And that&#8217;s a constant speed increase I&#8217;ll get over a regular Rails action. It&#8217;s very important to understand that it&#8217;s a <strong>constant speed increase</strong>. It&#8217;ll always be 1 ms for me.</p>
<p>For example, if my Rails action takes <strong>12ms</strong>, when I reimplement it all in Metal, it will take about <strong>11 ms</strong> and not 4 ms.</p>
<p>To conclude, I&#8217;ll just quote <span class="caps">DHH</span> :</p>
<blockquote>
<p>But for those few, specialized cases where you just need as much raw speed as possible, Metal can be exactly what the doctor ordered. It allows you to have the best of both worlds in one package. The lowest possible overhead for a Rack application when that matters and the full-featured goodness of Action Controller when it doesn’t.</p>
</blockquote>