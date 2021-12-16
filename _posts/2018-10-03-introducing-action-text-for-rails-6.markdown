---
layout: post
title: "Introducing Action Text for Rails 6"
categories: news
author: dhh
published: true
date: 2018-10-03
---

[Action Text](https://github.com/rails/actiontext) is a brand new framework coming to Rails 6 that's going to make creating, editing, and displaying rich text content in your applications super easy. It's an integration between [the Trix editor](https://trix-editor.org), Active Storage-backed file and image processing, and a text-processing flow that ties it all together. With Action Text, you really shouldn't ever have to impoverish your users with a vanilla textarea ever again!

Rails 6 is still a long ways off – we're hoping to start the beta process in early 2019 – but Action Text is already in pretty decent shape. Yes, this is an alpha preview, and we haven't even merged it into [rails/rails](http://github.com/rails/rails) yet, but it's a release that's been extracted from the code we've been using to power rich text editing in [Basecamp 3](https://basecamp.com) for several years now.

The Trix editor itself just turned 1.0, and is the product of endless craftwork by Sam Stephenson and Javan Makhmali. Both of whom also worked on Action Text to extract our Basecamp wrapping into this reusable package.

As part of this introduction, I've recorded [a brief video showing how Action Text works](https://youtu.be/HJZ9TnKrt7Q) with a sample application. Do check it out, and if you're interested, now is a great time to get involved helping to shape a major new framework in Rails.

Rails 6 really is shaping up to be a major release. Besides Action Text, we've been cooking several other new frameworks in Basecamp 3 that we hope to extract. On top of all the wonderful work coming from others in the community, like [the multi-db and parallel testing extractions](https://speakerdeck.com/eileencodes/railsconf-2018-the-future-of-rails-6-scalable-by-default) that the team at GitHub are responsible for. This is a great time to be in Rails!
