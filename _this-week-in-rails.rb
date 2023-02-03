#!/usr/bin/env ruby
# frozen_string_literal: true

#
# Generate a new "This Week in Rails" blog post.
#
# Start date is exactly 7 days from today.
#
# Usage:
#
# _this-week-in-rails.rb [AUTHOR] [AUTHOR_URL]
#
# * AUTHOR: (optional) Should be your GitHub username, or profile name, default to $USER
# * AUTHOR_URL: (optional) a URL to link to your profile, default to github/author
#
# Example:
#
# _this-week-in-rails.rb zzak https://ruby.social/@zzak
#

author = ARGV[0] || ENV["USER"]
author_url = ARGV[1] || "https://github.com/#{author}"

require 'uri'
require 'open-uri'
require 'json'
require 'date'
require 'nokogiri'

end_date = Date.today
start_date = end_date - 7

class Contributors
  attr_accessor :body, :start_date, :end_date, :total
  def initialize(start_date, end_date)
    @start_date = start_date.strftime("%Y%m%d")
    @end_date = end_date.strftime("%Y%m%d")
    @body = fetch
    @total = extract_total
  end

  def url
    "https://contributors.rubyonrails.org/contributors/in-time-window/#{@start_date}-#{@end_date}"
  end

  def fetch
    uri = URI.parse(url)
    body = uri.open.read
    return Nokogiri::HTML(body)
  end

  def extract_total
    xpath = "//span[@class=\"listing-total\"][1]"
    text = @body.xpath(xpath.to_s).first.content
    return text.match(/\d+/)
  end
end

url = "https://api.github.com/search/issues?q=is:pr+repo:rails/rails+merged:#{start_date}..#{end_date}"
uri = URI.parse(url)
body = uri.open.read
data = JSON.parse(body)
post_content = []

contributors = Contributors.new(start_date, end_date)

data["items"].each do |item|
  summary = item["body"] ? item["body"] : "no description"
  summary = summary.gsub(/.*Motivation.*[\/Background]?/, "")

  if summary.match?(/Checklist/)
    summary = summary.gsub(/### Checklist.*/m, "")
  end

  # The two spaces before line-breaks creates a soft-break in the Rails website.
  post_content << <<~POST
  [#{item["title"]}](#{item["html_url"]})  
  #{summary.squeeze("\n").lstrip.split("\n")[0..2].join("\n  ").lstrip}  

  POST
end

meta = %(---
layout: post
title: "TODO: add a title"
categories: news
author: #{author}
published: true
date: #{end_date}
---

)

header = %(
Hi, it's [#{author}](#{author_url}). Let's explore this week's changes in the Rails codebase.

)

footer = %(
_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B#{start_date}%7D...main@%7B#{end_date}%7D)._  
_We had [#{contributors.total} contributors](#{contributors.url}) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
)

slug = "TODO"
post_path = "_posts/#{end_date}-this-week-in-rails-#{slug}.markdown"

File.open(post_path, 'w') do |f|
  f.write meta
  f.write header
  f.write post_content.join("")
  f.write footer
end

#system "#{ENV['EDITOR'] || 'open'} #{post_path}"