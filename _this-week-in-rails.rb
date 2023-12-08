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
days_ago = ENV["DAYS_AGO"]&.to_i || 7

require 'uri'
require 'open-uri'
require 'json'
require 'date'
require 'nokogiri'

end_date = Date.today
start_date = end_date - days_ago

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

def fetch_merged_prs(start_date, end_date, page)
  url = "https://api.github.com/search/issues?q=is:pr+repo:rails/rails+merged:#{start_date}..#{end_date}&page=#{page}"
  uri = URI.parse(url)
  body = uri.open.read
  JSON.parse(body)
end

post_content = []

contributors = Contributors.new(start_date, end_date)

total_count = fetch_merged_prs(start_date, end_date, 1)["total_count"].to_f
total_pages = total_count / 30.0
current_page = 1

while total_pages >= 0.0
  data = fetch_merged_prs(start_date, end_date, current_page)

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

  current_page += 1
  total_pages -= 1.0
end

meta = %(---
layout: post
title: "TODO: add a title"
categories: news
author: #{author}
og_image: assets/images/this-week-in-rails.png
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

post_path = "_posts/#{end_date}-this-week-in-rails.markdown"

File.open(post_path, 'w') do |f|
  f.write meta
  f.write header
  f.write post_content.join("")
  f.write footer
end

#system "#{ENV['EDITOR'] || 'open'} #{post_path}"
