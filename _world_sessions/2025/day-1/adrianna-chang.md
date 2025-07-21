---
layout: world/2025/session
title: "From Chaos to Clarity: Structured Event Reporting in Rails"
speaker: adrianna-chang.md
time: 14:45 - 15:15
location: Graanbeurs
running_order: 10
---

Events in Rails applications are like the heartbeat of your code - whether it’s a log, a telemetry signal, or a business event, they tell us when something interesting is happening. To truly harness he power of these events for observability and data analysis, we need high-quality, contextualized data. The human-readable lines that Rails.logger provides is great for manual inspection but falls short in production and analytics contexts.

At Shopify, we recognized the need for a unified approach to events. After years of managing various in-house solutions for structured logging, we built support for structured events into the Rails framework itself. This talk will unveil the Structured Event Reporter, Rails’ new approach to structured events, and showcase how we’re using it to power events in our monolith.
