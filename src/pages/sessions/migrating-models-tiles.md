---
title: "Migrating Models and Tile Data for Arches Application Versioning"
speaker: "Cyrus Hiatt"
organisation: "Farallon Geographics"
layout: layouts/sessions.njk
permalink: /sessions/migrating-models-tiles/index.html
---

During an Arches package load Django migrations are run prior to graph import because the database must be fully updated before loading resource models. Unfortunately, there are some database operations that need to be run after graph load such as migrations of graph objects or objects that have foreign key constraints to graph objects (e.g. modular report configs). During this presentation I'll describe a method for writing migrations that can be run after resource models are loaded to update graph related objects and tile data. This topic is important for anyone maintaining an Arches Application that anticipates needing to publish future releases with graph modifications.
