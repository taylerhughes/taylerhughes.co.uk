import {
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxToMarkdown } from "mdast-util-mdx";
import type * as unified from "unified";

import { bundleMDX } from "mdx-bundler";
import { Image } from "./components";
import { formatUrl, isExternal } from "./utils";
import cropParams from "../utils/cropParams";
import { DOMAIN } from "../utils/constants";

export type DocHeading = { level: 1 | 2 | 3 | 4; title: string };

const tocPlugin =
  (headings: DocHeading[]): unified.Plugin =>
  () => {
    return (node: any) => {
      for (const element of node.children.filter(
        (_: any) => _.type === "heading" || _.name === "OptionsTable",
      )) {
        if (element.type === "heading") {
          const title = toMarkdown(
            { type: "paragraph", children: element.children },
            { extensions: [mdxToMarkdown()] },
          )
            .trim()
            .replace(/<.*$/g, "")
            .replace(/\\/g, "")
            .trim();
          headings.push({ level: element.depth, title });
        } else if (element.name === "OptionsTable") {
          element.children
            .filter((_: any) => _.name === "OptionTitle")
            .forEach((optionTitle: any) => {
              optionTitle.children
                .filter((_: any) => _.type === "heading")
                .forEach((heading: any) => {
                  const title = toMarkdown(
                    { type: "paragraph", children: heading.children },
                    { extensions: [mdxToMarkdown()] },
                  )
                    .trim()
                    .replace(/<.*$/g, "")
                    .replace(/\\/g, "")
                    .trim();
                  headings.push({ level: heading.depth, title });
                });
            });
        }
      }
    };
  };

const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    avatar: { type: "string", required: true },
  },
}));

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
  readTime: {
    type: "string",
    resolve: (post) => {
      const wordsPerMinute = 200;
      const noOfWords = post.body.raw.split(/\s/g).length;
      const minutes = noOfWords / wordsPerMinute;
      return Math.ceil(minutes);
    },
  },
  headings: {
    type: "json",
    resolve: async (post) => {
      const headings: DocHeading[] = [];

      await bundleMDX({
        source: post.body.raw,
        mdxOptions: (opts) => {
          opts.remarkPlugins = [
            // @ts-ignore
            ...(opts.remarkPlugins ?? []),
            // @ts-ignore
            tocPlugin(headings),
          ];
          return opts;
        },
      });

      return [{ level: 1, title: post.title }, ...headings];
    },
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
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
    show_child_posts: {
      type: "boolean",
      description: "Show child cards",
      required: false,
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
    author: {
      type: "nested",
      of: Author,
      required: false,
    },
  },
  computedFields,
}));

export default Blog;
