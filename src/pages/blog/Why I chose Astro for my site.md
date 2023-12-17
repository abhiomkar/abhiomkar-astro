---
layout: "../../layouts/BlogPostLayout.astro"
title: "Why I chose Astro for my site"
pubDate: 2023-12-17
description: "Why I chose Astro for my site."
author: "Abhinay Omkar"
tags: []
---

I posted my [first ever blog post](https://abhinay.wordpress.com/2006/07/29/hello-world/) that I've on record is on 2006-07-29 (17 years ago!). I've revamped my site and my blog many many times ever since.

After many years since my last site I built, I revamped my site yet again with a completely new tech stack. Previously it was built with Next.js. I thought I'll write about on why I chose to use Astro to build my site including my blog site.

If you're following front-end technologies closely the timespan of a frameworks (including UI frameworks, meta frameworks, etc) or even a platforms such as (Wordpress, Medium, etc) are very volatile. That is, by years pass by your site becomes outdated. If you want to touch your site's codebase for adding a new feature you'll be forced to upgrade or migrate to a new version. If you want to switch to a new tech stack for some reason it would make it harder to port since the framework that you chose to write is very opinionated. This makes the migration cost very expensive.

## Criteria 

My criteria for choosing a tech stack for my site:

- **Portable:** Should be easily portable from one framework to other framework. The framework should not be too opinianted on the content should be authored. The content should be separated out from the framework specific APIs so that we can move the content easily to somewhere else if needed.
- **Fast:** The web performance should be fast (blazily fast!) for seemingly simple site like this.
- **Progressive:** Framework should start simple, and allow user to scale it to add complex features in future (Including dynamic content, mutations, complex HTML forms, etc) if needed.
- **Lightweight:** The framework API interface footprint itself should be very thin. This also addresses portable criteria as I mentioned above as the framework API itself minimal focusing on the content.

I've purposefully avoided using framework specific semantics and prioritized using web platform provided feature when possible. This reduces learning curve, and we don't have worry about whether a framework API is getting deprecated.

Hoping this site be evergreen (fingers-crossed). You can read the source code of this site at [abhiomkar/abhiomkar-astro](https://github.com/abhiomkar/abhiomkar-astro). 