---
layout: post
title: ActiveMerchant 1.3 released
categories:
- releases
author: tobi
published: true
date: 2008-01-31 15:37:00.000000000 +00:00
---
<p><a href="http://www.activemerchant.org">ActiveMerchant</a> 1.3 has been released. The focus on this latest release was the addition of standardized support for the Address Verification System (<span class="caps">AVS</span>) and credit card verification value (CVV2) checks across all gateways which is the latest extraction from <a href="http://www.shopify.info">Shopify</a>.</p>
<p><span class="caps">AVS</span> information helps reduce fraud by checking the billing address of the customer with the cardholder information on file at the credit card company. CVV2 checks help ensure that the cardholder information has not been stolen from a database of credit card numbers because it is forbidden to record or store CVV2 numbers in any way.</p>
<p>The results of the <span class="caps">AVS</span> and CVV2 checks are now available in the response object. ActiveMerchant does all the work of interpreting the information returned from the payment gateways for you and makes the information available in a consistent hash format.</p>
<p>Sample <span class="caps">AVS</span>/CVV2 result:</p>
<pre><code>
response.avs_result['message']      #=&gt; 
     "Street address and 9-digit postal code match."

response.cvv_result['message']      #=&gt; 
     "Suspicious Transaction."

# Details: 
response.avs_result['code']         #=&gt; "X"
response.avs_result['street_match'] #=&gt; "Y"
response.avs_result['postal_match'] #=&gt; "Y"
response.cvv_result['code']    #=&gt; "D"
</code></pre>
<p>Other notable improvements with the 1.3 release include:</p>
<ul>
	<li>Improved documentation</li>
	<li>Common interface to <span class="caps">AVS</span> / CVV2 results</li>
	<li>New gateways, including Authorize.net Recurring Billing (<span class="caps">ARB</span>)</li>
	<li>Improved supported feature set of many existing gateways</li>
	<li>Automatically retry failed connections (when it&#8217;s safe)</li>
</ul>
<p>Coinciding with the 1.3 release of ActiveMerchant is the [ActiveMerchant PeepCode <span class="caps">PDF</span>](http://peepcode.com/products/activemerchant-pdf) by [Cody Fauser](http://www.codyfauser.com). The <span class="caps">PDF</span> goes over the basics of payment processing, making purchases with ActiveMerchant, and security considerations to keep in mind when processing credit cards in your Rails application. The <span class="caps">PDF</span> also walks through the development of a sample Rails application that addresses topics such as order pipelines, order state management and the appropriate unit testing a financial application requires. It is definitely a great read if you are curious about payment processing or require payment processing in your application.</p>