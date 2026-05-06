---
title: "Use of Zod for JS schema validation"
speaker: "Brett Ferguson"
organisation: "QED Systems Inc"
layout: layouts/sessions.njk
permalink: /sessions/zod-schema-validation/index.html
---

I would discuss how we're using Zod to perform schema validation within the context of our Vue workflows, using Arches Querysets and the Vue components in Arches Component Lab. It is geared towards developers and I think would be relevant to those that are transitioning from the Arches KO workflows to Vue front-end for custom development. Ad-hoc front-end validation can tend to be brittle and having it spread across multiple components makes it harder to maintain and easier to drift from the same server-side validation rules.

I'd share how we're wiring up validation for the standard datatypes within the context of arches-querysets and arches-component-lab Vue components, and extending those to our business models. We'd like to explore how we might generate the Zod validation schemas directly from the Postgres/Django tier, to provide a single source of truth while still having responsive front-end validation.
