#!/usr/bin/env ruby
# frozen_string_literal: true

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
  exit(-1)
end

require 'uri'
require 'open-uri'
require 'json'
require 'nokogiri'
require 'reverse_markdown'
require 'date'

post_date = ARGV[1] || Date.today.to_s

class HeyWorldEmail
  attr_accessor :email, :post_date

  def initialize(post_date, raw_email)
    @post_date = post_date
    @email = Nokogiri::HTML(raw_email)
  end

  def date
    Date.parse(@post_date)
  end

  def title
    email.css('title').text
  end

  # Author is mentioned in the first text block of the email
  def author
    extract_author_handle
  rescue StandardError
    'chancancode'
  end

  def extract_author_url
    xpath = <<-XPATH
    //a[contains(@href, 'twitter.com/') or contains(@href,
      'github.com/') or contains(@href, 'hayford.dev/')
      and not(contains(@href, 'rails'))]
    XPATH

    content.xpath(xpath.to_s).first['href']
  end

  def extract_author_handle
    case url = extract_author_url
    when /hayford/
      'Emmanuel Hayford'
    else
      url.split('/').last
    end
  end

  def content
    email.css('.trix-content')
  end

  def markdown_render
    output = ReverseMarkdown.convert content
    output << '<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>'
  end
end

uri = URI.parse(url)
path_parts = uri.path.split('/')
slug = path_parts.last

hey_world_email = HeyWorldEmail.new(post_date, uri.open.read)

meta = %(---
layout: post
title: "#{hey_world_email.title}"
categories: news
author: #{hey_world_email.author}
og_image: assets/images/this-week-in-rails.png
published: true
date: #{hey_world_email.date}
---

)

md = hey_world_email.markdown_render

post_content = meta + md
post_path = "_posts/#{hey_world_email.date.strftime('%Y-%m-%d')}-this-week-in-rails-#{slug}.markdown"

File.open(post_path, 'w') do |f|
  f.write post_content
end

system "#{ENV['EDITOR'] || 'open'} #{post_path}"
