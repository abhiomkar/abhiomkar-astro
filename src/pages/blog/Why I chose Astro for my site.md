---
layout: "../../layouts/BlogPostLayout.astro"
title: "Why I chose Astro for my site"
pubDate: 2023-12-17
description: "Why I chose Astro for my site."
author: "Abhinay Omkar"
tags: []
---

I published my first-ever [blog post](https://abhinay.wordpress.com/2006/07/29/hello-world/), which dates back to July 29, 2006 (17 years ago!). Since then, I have continuously revamped my site and blog.

After several years, I have once again overhauled my site, this time with a completely new tech stack using Astro framework. Previously, it was built with Next.js. I thought it would be interesting to share why I chose Astro for building my site, including the blog.

For those closely following front-end technologies, it's apparent that the lifespan of frameworks (including UI frameworks, meta frameworks, etc.) and platforms (like WordPress, Medium, etc.) is quite volatile. As years pass, your site can become outdated. Adding a new feature or touching the site's codebase often forces an upgrade or migration to a newer version. Switching to a new tech stack can be challenging, especially if the chosen framework is highly opinionated, making migration costly.

## Criteria

My criteria for selecting a tech stack for my site were:

- **Portable:** It should be easy to migrate from one framework to another. The framework shouldn't be overly opinionated about how content is authored. Content should be separate from framework-specific APIs, allowing for easy relocation if necessary.
- **Fast:** Web performance should be exceptionally fast for a seemingly simple site like this.
- **Progressive:** The framework should start simple and support scaling to add complex features in the future (including dynamic content, mutations, complex HTML forms, etc.) as needed.
- **Lightweight:** The framework's API interface footprint should be minimal. This also contributes to portability, as a minimal API focuses more on content.
I've purposefully avoided using framework-specific semantics, prioritizing features provided by the web platform itself. This approach reduces the learning curve and concerns about potential deprecation of framework APIs.

I'm hoping this site remains evergreen (fingers crossed). You can view the source code of this site at [abhiomkar/abhiomkar-astro](https://github.com/abhiomkar/abhiomkar-astro).