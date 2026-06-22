---
first_name: Daniela
last_name: Velasquez
image_path: https://sessionize.com/image/4b75-400o400o1-BaApmfNZ1w6gt3nHrezRMv.png
tagline: Senior Software Engineer
company: Shopify
specific_order: 6
keynote: false
linkedin: https://www.linkedin.com/in/dvelasquezg/
talk_title: "Agents on Rails: Building AI Pipelines in plain Ruby"
talk_description: |
  Every application with users sits on a mountain of data. Buried within it are opportunities worth acting on, but finding them, and finding them at the right time, takes time and effort that most people can't spare.
  
  In this talk, I'll walk you through how at Shopify we designed a multi-stage pipeline in plain Rails, no Python, no ML platform. The pipeline runs as a sequence of ApplicationJob batches, where some jobs call agents to research, and others call independent critic agents to validate what the researcher found.
  
  The pipeline also learns. When a suggestion is disliked, an ActiveRecord callback triggers a job that captures insights from the merchant's reaction and feeds them back into the researcher, so the next run already knows what matters most to each user.
---

Daniela Velasquez is a Senior Software Engineer at Shopify who has been working with Rails for over 4 years. She is passionate about building AI-powered features in plain Rails. When she isn't working on agentic pipelines, you can find her bouldering or hiking.
