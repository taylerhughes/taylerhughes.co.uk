import slugify from "slugify";
import { allBlogs, Blog, Work } from "contentlayer/generated";
import { getChildContent } from "@/utils/getContent";
import unslugify from "@/utils/slugs/unslugify";

export const findPostByPath = (
  blogs: Array<Blog>,
  pagePath: string,
): Blog | undefined => {
  const path = pagePath === "blog" ? "blog" : pagePath;
  return blogs.find((post) => {
    return post._raw.flattenedPath === path;
  });
};

export const findWorkPostByPath = (
  works: Array<Work>,
  pagePath: string,
): Work | undefined => {
  const path = pagePath === "work" ? "work" : pagePath;
  return works.find((post) => {
    return post._raw.flattenedPath === path;
  });
};

export const getPagePath = (params: Array<string> | string): string => {
  return Array.isArray(params) ? `blog/${params.join("/")}` : "blog";
};

export const getWorkPagePath = (params: Array<string> | string): string => {
  return Array.isArray(params) ? `work/${params.join("/")}` : "work";
};

export const getChildCategories = (children: Array<Blog>, pagePath: string) => {
  const childCategories = getChildContent(
    children.filter((post) => post._raw.sourceFileName === "index.mdx"),
    pagePath,
  );

  return childCategories.map((cat) => {
    const categoryTitle = cat.title.toLowerCase();

    const matchingBlogs = allBlogs.filter((item) => {
      return (
        item._raw.sourceFileDir.split("/").pop() === slugify(categoryTitle) &&
        item._raw.sourceFileName !== "index.mdx"
      );
    });

    return {
      category: unslugify(cat.title),
      count: matchingBlogs.length,
      url: cat.url,
      title: unslugify(cat.title),
    };
  });
};
