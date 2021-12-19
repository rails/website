#!/usr/bin/env ruby
#
# Import "This Week in Rails" issue to a blog post
#
# Usage:
#
# _import-this-week-in-rails.rb PUBLIC_PAGE_URL
#
# Example:
#
# _import-this-week-in-rails.rb https://world.hey.com/this.week.in.rails/halloween-edition-zeitwerk-migration-guide-selenium-webdriver-and-some-ruby-3-1-snacks-66c67b91
#

url = ARGV[0]

if url.nil?
  puts "Usage:
  _import-this-week-in-rails.rb PUBLIC_PAGE_URL

Example:
  _import-this-week-in-rails.rb https://world.hey.com/this.week.in.rails/halloween-edition-zeitwerk-migration-guide-selenium-webdriver-and-some-ruby-3-1-snacks-66c67b91
"
  exit -1
end

require 'uri'
require 'open-uri'
require 'json'
require 'nokogiri'
require 'reverse_markdown'
require 'date'

post_date = ARGV[1] || Date.today.to_s

class HeyWorldEmail
  attr_accessor :email
  attr_accessor :post_date

  def initialize(post_date, raw_email)
    @post_date = post_date
    @email = Nokogiri::HTML(raw_email)
  end

  def date
    Date.parse(@post_date)
  end

  def title
    email.css("title").text
  end

  # Author is mentioned in the first text block of the email
  def author
    intro_html = content
    begin
      intro_html
        .xpath("//a[contains(@href, 'twitter.com/') or contains(@href, 'github.com/') and not(contains(@href, 'rails'))]")
        .first['href']
        .split('/')
        .last
    rescue
      'chancancode'
    end
  end

  def content
    email.css(".trix-content")
  end

  def markdown_render
    ReverseMarkdown.convert content
  end
end

uri = URI.parse(url)
path_parts = uri.path.split("/")
slug = path_parts.last

hey_world_email = HeyWorldEmail.new(post_date, uri.open.read)

meta = %|---
layout: post
title: "#{hey_world_email.title}"
categories: news
author: #{hey_world_email.author}
published: true
date: #{hey_world_email.date}
---

|

md = hey_world_email.markdown_render

post_content = meta + md
post_path = "_posts/#{hey_world_email.date.strftime('%Y-%m-%d')}-this-week-in-rails-#{slug}.markdown"

File.open(post_path, 'w') do |f|
  f.write post_content
end

system "#{ENV['EDITOR'] || 'open'} #{post_path}"
