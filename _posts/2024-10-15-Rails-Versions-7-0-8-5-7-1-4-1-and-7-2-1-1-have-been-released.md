---
layout: post
title: 'Rails Versions 6.1.7.9, 7.0.8.5, 7.1.4.1, and 7.2.1.1 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2024-10-15 14:45:00 -07:00
---

Hi everyone!

Rails Versions 6.1.7.9, 7.0.8.5, 7.1.4.1, and 7.2.1.1 have been released!

These are security patches addressing 4 possible ReDoS (Regular expression
Denial of Service) attacks. All of these only affect Ruby versions below 3.2 so
we urge users on older versions of Ruby to upgrade to these new Rails versions
at their earliest convenience.

Additionally we strongly recommend users upgrade to Ruby 3.2 or greater, to
take advantage of the improved ReDoS mitigations in newer versions.

Ruby 3.1 is approaching it's end of life for security support from Ruby
upstream and is the only maintained version of Ruby still vulnerable to these
attacks. Going forward we plan to continue to address these but will do so in
our public issue tracker like normal performance bugs.

Rails 6.1 had an anticipated end of maintenance earlier this month, but as we
transition to our [new maintenance
policy](https://rubyonrails.org/2024/10/15/new-maintenance-policy-and-eol-annouments)
we've cut an additional release: 6.1.7.9.

Rails 8.0.0.beta1 and newer are unaffected as they require Ruby 3.2

Here is a list of security issues that these releases address:

* [CVE-2024-47887 Possible ReDoS vulnerability in HTTP Token authentication in Action Controller](https://discuss.rubyonrails.org/t/cve-2024-47887-possible-redos-vulnerability-in-http-token-authentication-in-action-controller/87698)
* [CVE-2024-41128 Possible ReDoS vulnerability in query parameter filtering in Action Dispatch](https://discuss.rubyonrails.org/t/cve-2024-41128-possible-redos-vulnerability-in-query-parameter-filtering-in-action-dispatch/87699)
* [CVE-2024-47888 Possible ReDoS vulnerability in `plain_text_for_blockquote_node` in Action Text](https://discuss.rubyonrails.org/t/cve-2024-47888-possible-redos-vulnerability-in-plain-text-for-blockquote-node-in-action-text/87696)
* [CVE-2024-47889 Possible ReDoS vulnerability in `block_format` in Action Mailer](https://discuss.rubyonrails.org/t/cve-2024-47889-possible-redos-vulnerability-in-block-format-in-action-mailer/87695)

Cheers!

