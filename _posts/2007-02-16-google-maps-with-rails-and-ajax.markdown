---
layout: post
title: Writing Google Maps Applications with Rails and Ajax
categories:
- sightings
- documentation
author: josh
published: true
date: 2007-02-16 17:20:00.000000000 +00:00
---
<p class="asset-left"><img src="/assets/2007/2/16/google_maps_book.gif" alt="" /></p>

[Andre Lewis](http://earthcode.com) is rolling out a duo of resources for those of you creating mashups and Google Maps-based applications. 

Andre's book, [Beginning Google Maps Applications with Rails and Ajax: from Novice to Professional]( http://www.amazon.com/dp/1590597877) will be available Feb 26 from Apress. The book covers the basics (getting a Google map up and running, interacting with the the Google maps API in JavaScript), as well as more advanced topics. For example, later chapters show you how to use RMagick to display hundreds of thousands of points on a map by generating custom map tiles, and how to create your own geocoder from US TIGER/Line census data. The book also touches on screen scaping and bulk data manipulation -- for example, processing large text files from the command line using Ruby, and the performance implications of a pure ActiveRecord database import vs MySqlImport. 

Also related to mapping, Andre recently released [GeoKit](http://geokit.rubyforge.org). GeoKit provides a bundle of tools to make maps-based applications easier:

- Distance calculations in miles or kilometers: `distance = first_location.distance_to(second_location, :units => :miles)`
- ActiveRecord distance-based finders: `Store.find(:all, :origin=>[37.792,-122.393], :conditions=>'distance < 10')`
- . . . and directly from an address: `Store.find_closest(:origin=>'100 Spear St, San Francisco, CA')`
- Geocoding from Google, Yahoo, Geocoder.us, and Geocoder.ca geocoding services. It provides a uniform response structure from all the geocoders, and also has a configurable fail-over mechanism in case one geocoder fails. 
- IP-based location lookup. Provide an IP address, and get a city name and latitude/longitude in return. 

Andre's announcement on GeoKit is [here]( http://earthcode.com/blog/2007/02/geokit_map_plugin.html). Bill Eisenhauer, the co-author of GeoKit, has also [put up some live demos](http://www.billeisenhauer.com/examples/geokit ). GeoKit's home at RubyForge is [http://geokit.rubyforge.org/](http://geokit.rubyforge.org).