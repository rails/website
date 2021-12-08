---
layout: post
title: Liquid templates announced
categories:
- releases
author: tobi
published: true
date: 2005-11-06 19:14:25.000000000 +00:00
---
<p><a href="http://home.leetsoft.com/liquid">Liquid</a> is a brand new template engine optimized for xhtml and emails. It features a very clean syntax and speedy execution speeds. The main difference to traditional ERb is that it does not rely on eval. This means that no potentially harmful code is executed when a Liquid template is compiled or rendered.</p>
<p>The chief advantage is that you can let your users change templates without having to worry about your data&#8217;s security. The templates only see data which you export to them. In <a href="http://shopify.com/">Shopify</a> for example you will be able to edit your shop&#8217;s templates and emails directly in the admin interface. The templates are stored in the database and rendered directly from it.</p>
<p>Liquid is packaged as a rails plugin for easy installation. In good rails style there is a <a href="http://leetsoft.com/rails/liquid-installation.mov">small movie</a> available showing how to install and use it.</p>