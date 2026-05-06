---
title: "Interfaces & Schemas"
speaker: "Phil Weir"
organisation: "Flax & Teal"
layout: layouts/sessions.njk
permalink: /sessions/interfaces-and-schemas/index.html
---

As the Arches ecosystem matures, and non-core code becomes more important, interoperability is a community need - not only for apps and extensions, but for integrations and Arches-compatible tooling.

For F&T, we have Arches-compatible libraries but are relying on a not-very-documented, changeable interface that may become deprecated. I can do a short update on our static site progress (and a case study in production) to show why tooling outside Django is important to the community, and highlight a few other examples across the Arches world to motivate a schemas discussion:

 - Arches formats and where they live
 - how viable is it to document and stabilize them?
 - where do apps (like AHERs) fit into this?
 - what's in and out? (nodes &/ cards)
 - how does this intersect with mutations (declarative graph transformations), continuous integration, validation and ETL
 - how would these schemas be versioned/managed (Core Devs, Technical Committee, etc.)

Audience: core devs, app/extension devs, semanticists, researchers

Impacts: ideally, a validated shortlist of viable and useful things to formally schema
