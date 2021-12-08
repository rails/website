---
layout: post
title: ! 'New for Rails 1.1: Integration Tests'
categories:
- tricks
author: rick
published: true
date: 2006-03-01 04:43:00.000000000 +00:00
---
<p>If you&#8217;ve ever tried to properly test complex scenarios involving multiple controller actions, you will notice that the Rails Functional Tests fall flat.  The new Integration Tests, which have just been introduced into the Rails trunk, will solve that.  From the documentation:</p>
<blockquote>
<p>An IntegrationTest is one that spans multiple controllers and actions, tying them all together to ensure they work together as expected. It tests more completely than either unit or functional tests do, exercising the entire stack, from the dispatcher to the database.</p>
</blockquote>
<p>The <a href="http://dev.rubyonrails.org/browser/trunk/actionpack/lib/action_controller/integration_test.rb?rev=3701#L302">provided example</a> also shows a glimpse into the testing <span class="caps">DSL</span> that is used in <a href="http://campfirenow.com">Campfire</a>:</p>
<pre>
class AdvancedTest &lt; ActionController::IntegrationTest
  fixtures :people, :rooms

  def test_login_and_speak
    jamis, david = login(:jamis), login(:david)
    room = rooms(:office)

    jamis.enter(room)
    jamis.speak(room, "anybody home?")

    david.enter(room)
    david.speak(room, "hello!")
  end
end
</pre>
<p>Integration Tests will be included with Rails 1.1.  Get ready!</p>