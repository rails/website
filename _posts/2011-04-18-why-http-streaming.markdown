---
layout: post
title: Why HTTP Streaming?
categories:
- edge
author: fxn
published: true
date: 2011-04-18 15:23:00.000000000 +01:00
---
Rails 3.1 is going to support HTTP streaming, aka chunked responses, this post explains what's all about.

## What Is HTTP Streaming? ##

Ordinary dynamic HTTP responses need a Content-Length header. Their timeline look like this:

    HTTP request -> dynamic content generation -> HTTP response

Those are three serial steps because normally you need to generate the content in order to be able to know its size, and thus fill the Content-Length header of the response.

HTTP provides an alternative to this schema to be able to flush data as it is produced, known as [chunked transfer encoding](http://en.wikipedia.org/wiki/Chunked_transfer_encoding). That's what we are referring to as *streaming* in recent commits.

Streamed responses have no Content-Length header. Rather, they have a Transfer-Encoding header with a value of "chunked", and a body consisting of a series of chunks you write to the socket preceded by their individual sizes. Modulus details.

This is an example taken from Wikipedia:

    HTTP/1.1 200 OK
    Content-Type: text/plain
    Transfer-Encoding: chunked
    
    25
    This is the data in the first chunk
    
    1C
    and this is the second one
    
    3
    con
    8
    sequence
    0

Point is, you are able to flush chunks to the socket as soon as you have them, no need to wait for the whole thing to be generated.

## When Do Web Browsers Fetch Assets? ##

Web broswers parse documents as their content is received. When they find an asset referenced, think an image, stylesheet, or script, a request to fetch them is fired. That happens in parallel *while* the document is being received and processed, no matter whether the content comes chunked or not.

Browsers have limits on the number of concurrent requests they are allowed to do, a global one (typically +30), and another per domain (nowadays typically 4 or 6), but within those limits, requests for getting assets happen as the content is parsed.

Modern clients do not even block on JavaScript files as old ones did, they implement scanners that look ahead for asset nodes and request them. For example, [this is the preload scanner of WebKit](http://codesearch.google.com/codesearch/p?hl=en#OAMlx_jo-ck/src/third_party/WebKit/Source/WebCore/html/parser/HTMLPreloadScanner.cpp&d=7).

Trivia: While investigating this I discovered by accident that if the MIME type is unclear, for example "text/html" without an explicit charset, then web browsers buffer 1 KB of data firing no asset requests to be able to peek at the content and [do an educated guess](http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#determining-the-character-encoding).

## So What's The Benefit Of Streaming? ##

Streaming doesn't cut latency, neither it cuts the time a dynamic response needs to be generated. But since the application sends content right away instead of waiting for the whole response to be rendered, the client is able to request assets sooner. In particular, if you flush the head of an HTML document **CSS and JavaScript files are going to be fetched in parallel**, while the server works on generating content. The consequence is that pages load faster.

## Followup ##

Streaming is still being polished for Rails 3.1, expect another post in the future covering its practical aspects in Ruby on Rails applications.

## Thanks ##

[Tony Gentilcore](http://gent.ilcore.com) provided his insider's guidance into this, thank you very much Tony! Also, thanks a lot to the [Browserscope project](http://www.browserscope.org/?category=network) for their really useful tables.
