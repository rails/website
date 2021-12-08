---
layout: post
title: Calling SAP models from Rails
categories: []
author: admin
published: true
date: 2005-08-22 05:18:40.000000000 +01:00
---
<p><span class="caps">SAP</span> is one of the <span class="caps">ERP</span> behemoths that dominates in the enterprise world. Pretty far removed from Rails? Not really, it turns out. Piers Harding has written a great <a href="https://www.sdn.sap.com/sdn/weblogs.sdn?blog=/pub/wlg/2111">article for the <span class="caps">SAP</span> Developer Network</a> that shows how to create a Rails application that uses a <span class="caps">SAP</span> backend as the model instead of Active Record.</p>
<p>The article shows how to use SAP4Rails with two <span class="caps">BAPI</span> objects &#8211; Currency (BUS1090), and ExchangeRate (BUS1093) &#8211; and make those available through a standard Action Controller setup. Very cool stuff.</p>