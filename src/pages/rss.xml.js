import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Abhinay Omkar",
    description: "Abhinay Omkar's Blog",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/*.md")),
    customData: `<language>en-us</language>`,
    stylesheet: "public/rss/pretty-feed-v3.xsl",
  });
}
