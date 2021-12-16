---
layout: post
title: ! 'Rails 1.1.5: Mandatory security patch (and more)'
categories:
- releases
author: David
published: true
date: 2006-08-09 17:30:00.000000000 +01:00
---
<p>We&#8217;re still hard at work on Rails 1.2, which features all the new dandy <span class="caps">REST</span> stuff and more, but a serious security concern has come to our attention that needed to be addressed sooner than the release of 1.2 would allow. So here&#8217;s Rails 1.1.5!</p>
<p>This is a <span class="caps">MANDATORY</span> upgrade for anyone not running on a very recent edge (which isn&#8217;t affected by this). If you have a public Rails site, you <span class="caps">MUST</span> upgrade to Rails 1.1.5. The security issue is severe and you do not want to be caught unpatched.</p>
<p>The issue is in fact of such a criticality that we&#8217;re not going to dig into the specifics. No need to arm would-be assalients.</p>
<p>So upgrade today, not tomorrow. We&#8217;ve made sure that Rails 1.1.5 is fully drop-in compatible with 1.1.4. It only includes a handful of bug fixes and no new features.</p>
<p>For the third time: This is not like &#8220;sure, I should be flossing my teeth&#8221;. This is &#8220;yes, I will wear my helmet as I try to go 100mph on a motorcycle through downtown in rush hour&#8221;. It&#8217;s not a suggestion, it&#8217;s a prescription. So get to it!</p>
<p>As always, the trick is to do &#8220;gem install rails&#8221; and then either changing config/environment.rb, if you&#8217;re bound to gems, or do &#8220;rake rails:freeze:gems&#8221; if you&#8217;re freezing gems in vendor.</p>
<p><strike><span class="caps">UPDATE</span>: This problem affects 0.13, 0.14, 1.0, and 1.1.&#215;. So here&#8217;s a happy opportunity to upgrade if you still haven&#8217;t.</strike></p>
<p><span class="caps">UPDATE</span> 2: We&#8217;ve fixed the zlib buffer problems for people on Windows. Redownload the gem and everything should be dandy.</p>
<p><span class="caps">UPDATE</span> 3: Regarding security through obscurity, we&#8217;ll release the full details of this issue once everyone has had a fair chance to upgrade their system. Source transparency is of little comfort if you just had your system compromised before you got a chance to apply the patch.</p>
<p><span class="caps">UPDATE</span> 4: This problem <strong>does not</strong> affect Rails 1.0 or earlier. The only versions affected are 1.1.0, 1.1.1, 1.1.2, and 1.1.4. See <a href="https://rubyonrails.org/2006/8/10/security-update-rails-1-0-not-affected">security update</a> for details.</p>
<p><span class="caps">UPDATE</span> 5: We&#8217;ve released <a href="https://rubyonrails.org/2006/8/10/rails-1-1-6-backports-and-full-disclosure">Rails 1.1.6 with additional fixes</a> to the problem and created backported patches for all affected versions.</p>
<p><small>P.S.: If you run a major Rails site and for some reason are completely unable to upgrade to 1.1.5, get in touch with the core team and we&#8217;ll try to work with you on a solution.</small></p>