---
layout: post
title: "This Week in Rails: ActiveSupport::CurrentAttributes, AEAD and more!"
categories: news
author: vipulnsward
published: true
date: 2017-05-28
---

Hi there!   
  
This is [Vipul](https://www.bigbinary.com/team/vipul) bringing you all the latest news about Rails from the hopefully ending [summer](https://weather.com/weather/today/l/Pune+India+INXX0102:1:IN) here in [Pune](https://www.wikiwand.com/en/Pune)🔥

## Featured

### [This Week's Rails contributors!](http://contributors.rubyonrails.org/contributors/in-time-window/20170520-20170527)

We had 36 people who helped make Rails better this week.   
Six of them contributed for the first time ever!   
If you would like to help out, check the [issues list](https://github.com/rails/rails/issues).

## New

### [ActiveSupport::CurrentAttributes provides a thread-isolated attributes singleton](https://github.com/rails/rails/commit/24a864437e845febe91e3646ca008e8dc7f76b56)

If you've used _current\_user_ from _Devise,_ you've already come across what _CurrentAttributes_ partly provides, but wait there's more!  
  
Using _CurrentAttributes_ you can start using per request variables that are accessible across the whole system like Models, Controllers, Views, during a Rails request cycle.  
  
For example you can start using attributes like current\_user, account, etc, and much more that your system might need without passing them all around to different methods.

### [AEAD encrypted cookies and sessions ](https://github.com/rails/rails/pull/28132)

Encrypted cookies [now use](https://tools.ietf.org/html/rfc5288) [AES-GCM](https://crypto.stanford.edu/RealWorldCrypto/slides/gueron.pdf) which couples authentication and encryption in one faster step and produces shorter ciphertexts.   
  
Older cookies encrypted using AES in CBC HMAC mode will be seamlessly upgraded when this new mode is enabled via the _action\_dispatch.use\_authenticated\_cookie\_encryption_ configuration value.

## Fixed

### [Make `secrets:edit` run `secrets:setup` if it hasn't already.](https://github.com/rails/rails/pull/29195)

On a new app, if you did _rails secrets:edit_ before you've called _rails secrets:setup_, Rails would throw an error.  
  
With this addition, Rails takes care of doing that for you if not already done.

### [Fix regression in Numericality validator](https://github.com/rails/rails/commit/d83b8e65102d625c9024cd9a2727a10b0ef83b79)

This change fixes a regression in _Numericality_ validator where extra decimal places on a user input for a decimal column were ignored by numerically validations, for example when comparing _9.18_ vs _9.179.&nbsp;_

## Improved

### [Active Record initialization optimizations](https://github.com/rails/rails/pull/29215)

Rails had a performance regression from 4.2x to 5.0 where initialization of records slowed down by factor of 2x in some cases.  
  
This change optimizes initializations to improve by a factor of **2x for STI models** and **1.3x for non-STI models**

That's it for this week, as always, we couldn't cover all of the changes, but feel free to check the [commits](https://github.com/rails/rails/compare/master@%7B2017-05-12%7D...@%7B2017-05-19%7D) if you are interested.  
Until next week!
