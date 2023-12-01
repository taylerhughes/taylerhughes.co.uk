import { defineDocumentType } from "contentlayer/source-files";
import { Image } from "./components";
import { formatUrl, isExternal } from "./utils";
import cropParams from "../utils/cropParams";
import { DOMAIN } from "../utils/constants";

const computedFields: import("contentlayer/source-files").ComputedFields = {
  url: {
    type: "string",
    resolve: (doc) => `${doc._raw.flattenedPath}`,
  },
  structuredData: {
    type: "json",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.date,
      dateModified: doc.date,
      description: doc.description,
      image: doc.featured_image?.url
        ? isExternal(doc.featured_image.url)
          ? cropParams(doc.featured_image.url, 1200, 630)
          : formatUrl(doc.featured_image.url, DOMAIN)
        : formatUrl(`og?title=${doc.title}`, DOMAIN),
      url: formatUrl(`${doc._raw.flattenedPath}`, DOMAIN),
      author: {
        "@type": "Person",
        name: doc.author?.name,
      },
    }),
  },
};

const Work = defineDocumentType(() => ({
  name: "Work",
  filePathPattern: `work/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    featured_image: {
      type: "nested",
      of: Image,
      required: false,
    },
    description: {
      type: "string",
      description: "Description",
      required: false,
    },
    client: {
      type: "string",
      description: "Description",
      required: false,
    },
    services: {
      type: "list",
      of: { type: "string" },
      description: "Services given",
      required: false,
    },
    website_url: {
      type: "string",
      description: "The website url",
      required: false,
    },
    examples: {
      type: "list",
      of: Image,
    },
  },
  computedFields,
}));
export default Work;
