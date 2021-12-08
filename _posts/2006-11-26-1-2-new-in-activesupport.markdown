---
layout: post
title: ! 'Rails 1.2 RC1: New in Active Support'
categories:
- releases
author: josh
published: true
date: 2006-11-26 16:33:00.000000000 +00:00
---
The following are some of the smaller, but notable features added to Rails 1.2 ActiveSupport since the Rails 1.1 release. (compiled by Joshua Sierles).

`Module#unloadable` marks constants that require unloading after each request. Example:

        CONFIG.unloadable
	
`Module#alias_attribute` clones class attributes, including their getter, setter and query methods. Example:

	class Email < ActiveRecord::Base
	  alias_attribute :subject, :title
	end

	e = Email.find(1)
	e.title    # => "Superstars"
	e.subject  # => "Superstars"
	e.subject? # => true
	e.subject = "Megastars"
	e.title    # => "Megastars"

`Enumerable#sum` calculates a sum from the array elements. Examples:

	  [1, 2, 3].sum
	  payments.sum { |p| p.price * p.tax_rate }
	  payments.sum(&:price)

	  This replaces: payments.inject(0) { |sum, p| sum + p.price }

`Array#to_s(:db)` produces a comma-separated list of ids. Example:

	Purchase.find(:all, :conditions => "product_id IN (#{shops.products.to_s(:db)})"

`Module#alias_method_chain` encapsulates the common pattern:

	alias_method :foo_without_feature, :foo
	alias_method :foo, :foo_with_feature

	 With alias_method_chain:

	alias_method_chain :foo, :feature

`Array#split` divides arrays into one or more subarrays by value or block. Examples:

    [1, 2, 3, 4, 5].split(3) => [[1, 2], [4, 5]] 
    (1..10).to_a.split { |i| i % 3 == 0 }   # => [[1, 2], [4, 5], [7, 8], [10]]


`Hash.from_xml(string)` creates a hash from an XML string, typecasting its elements if possible. Example:
 	
    Hash.from_xml <<-EOT
      <note>
        <title>This is a note</title>
        <created-at type="date">2004-10-10</created-at>
      </note>
    EOT

    ...would return:

    { :note => { :title => "This is a note", :created_at => Date.new(2004, 10, 10) } }


The Builder package has been upgraded to version 2.0. Changes include:
	
	-- UTF-8 characters in data are now correctly translated to their XML equivalents
	-- Attribute values are now escaped by default