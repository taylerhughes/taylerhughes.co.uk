import { MetadataRoute } from "next";
import { allBlogs, allWorks } from "contentlayer/generated";
import { formatUrl } from "@/contentlayer/utils";
import { DOMAIN } from "@/utils/constants";

// All regular pages
const routes: MetadataRoute.Sitemap = [
  "",
  "/about",
  "/contact",
  "/landing",
].map((item) => {
  return {
    url: DOMAIN + item,
    lastModified: new Date(),
  };
});

// All categories and pages for blog & work
const blogs: MetadataRoute.Sitemap = [...allBlogs, ...allWorks].map((item) => {
  return {
    url: formatUrl(item.url, DOMAIN),
    lastModified: item.date,
  };
});

// Concatenate all sitemap entries
export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...blogs];
}
