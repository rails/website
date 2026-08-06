---
title: "Agents on Rails: Building AI Pipelines in plain Ruby"
day_label: "24 SEPT"
time: "11:15 AM"
track: "TRACK 1"
speaker: "daniela-velasquez"
tags:
  - AI
description: >-
  Every application with users sits on a mountain of data. Buried within it are opportunities worth acting on, but finding them at the right time takes effort most people can't spare. In this talk, I'll walk you through how at Shopify we designed a multi-stage pipeline in plain Rails — no Python, no ML platform. The pipeline runs as a sequence of ApplicationJob batches, where some jobs call agents to research, and others call independent critic agents to validate what the researcher found. The pipeline also learns: when a suggestion is disliked, an ActiveRecord callback triggers a job that captures insights and feeds them back into the researcher.
---
